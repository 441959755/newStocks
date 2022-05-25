
import { pb } from "../../../proto/proto";
import GameData from "../../../sctiprs/GameData";
import SchoolBundle from "../../../sctiprs/hall/SchoolBundle";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import LocalStorageUtils from "../../../sctiprs/utils/LocalStorageUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SchoolControl extends cc.Component {

    @property(cc.Node)
    studyNode: cc.Node = null;

    @property(cc.Node)
    studyNode1: cc.Node = null;

    @property(cc.Node)
    closeLayer: cc.Node = null;

    onLoad() {

        GlobalEvent.on('OPENCURSTUDYBAR', this.openCurStudyBar.bind(this), this);

        GlobalEvent.on('saveStudyProgress', this.saveStudyProgress.bind(this), this);

        GlobalEvent.on('OPENCLOSELAYER', this.openCloseLayer.bind(this), this);

    }


    openCloseLayer(dui, cuo) {
        this.closeLayer.active = true;
        this.closeLayer.getComponent('StudyClose').onShow(dui, cuo);
    }

    openCurStudyBar(index) {
        if (!index) {
            let his = LocalStorageUtils.getItem('STUDY' + SchoolBundle.schoolProgress + '' + SchoolBundle.studyBar) || null;
            if (!his) {
                LocalStorageUtils.setItem('STUDY' + SchoolBundle.schoolProgress + '' + SchoolBundle.studyBar, 1);
                GlobalEvent.emit('OPENGUIDE')
                return;
            }
            this.studyNode.active = true;
            this.studyNode.getComponent('StudyHandle').onShow(SchoolBundle.studyData1, SchoolBundle.assetImgs, SchoolBundle.studyData2);
        }
        else {
            this.studyNode1.active = true;
            this.studyNode1.getComponent('StudyHandle1').onShow(SchoolBundle.studyData3, SchoolBundle.assetImgs);
        }
    }


    onDestroy() {
        GlobalEvent.off('OPENCURSTUDYBAR');
        GlobalEvent.off('saveStudyProgress');
    }

    //保存学习任务进度
    saveStudyProgress(obj) {

        let data = {
            index: SchoolBundle.schoolProgress - 1,
            progress: obj.par,
            award: obj.award,
        }

        GameData.taskStudy[data.index] = data;
        let CmdStudyProgress = pb.CmdStudyProgress;
        let message = CmdStudyProgress.create(data);
        let buff = CmdStudyProgress.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_Hall_SaveStudyProgress, buff, (info) => {
            console.log('学习任务进度' + JSON.stringify(info));
        });

    }

}
