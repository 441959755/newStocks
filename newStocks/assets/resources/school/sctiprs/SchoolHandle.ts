import GameData from "../../../sctiprs/GameData";
import SchoolBundle from "../../../sctiprs/hall/SchoolBundle";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SchoolHandle extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null;

    @property([cc.Label])
    studysLa: cc.Label[] = [];

    @property(cc.Label)
    hisResultLa: cc.Label = null;

    studyData = null;

    studyData1 = null;

    @property([cc.Node])
    studyNodes: cc.Node[] = [];

    @property(cc.Node)
    guide: cc.Node = null;

    guideCount = 0;

    guidecurCount = 0;

    onLoad() {

        GlobalEvent.on('UPDATESTUDYDATA', (data1, data2, data3) => {
            data2 && (this.studyData1 = data2);
            data1 && (this.studyData = data1)
            data1 && (this.onShow())
        }, this);

        GlobalEvent.on('UPDATESCHOOLUI', this.onShow.bind(this), this);

        GlobalEvent.on('OPENGUIDE', this.onShowGuide.bind(this), this);

        this.guide.on('touchstart', () => {
            if (this.guideCount == this.guidecurCount) {
                this.guide.active = false;
            }

            if (this.guideCount == this.guidecurCount) {
                this.guidecurCount = 0;
                this.guideCount = 0;
                GlobalEvent.emit('OPENCURSTUDYBAR');
            }

            else if (this.guideCount > this.guidecurCount) {
                this.onShowGuide();
            }
        }, this);
    }

    onShowGuide() {
        this.guide.active = true;

        let node = this.guide.children[0];

        let label = node.children[0].getComponent(cc.Label)

        let contents = this.studyData1.list[SchoolBundle.studyBar - 1].contents;

        this.guideCount = contents.length;

        label.string = contents[this.guidecurCount].content;
        this.guidecurCount++;

        let guideLabel = this.guide.getChildByName('top copy').getComponentInChildren(cc.Label);

        guideLabel.string = this.studyData.title;
    }

    onDestroy() {
        GlobalEvent.off('UPDATESTUDYDATA');
        GlobalEvent.off('UPDATESCHOOLUI');
        GlobalEvent.off('OPENGUIDE');
    }

    onShow() {

        this.hisResultLa && (this.hisResultLa.node.children.forEach(el => {
            el.active = false;
        }))

        this.title && (this.title.string = this.studyData.title);

        this.studysLa.forEach((el, index) => {
            el.string = this.studyData.list[index].title;
        })

        if (!GameData.taskStudy[SchoolBundle.schoolProgress - 1].progress) {
            this.hisResultLa && (this.hisResultLa.string = '最佳成绩  无')
        }
        else {
            this.hisResultLa && (this.hisResultLa.string = '最佳成绩  ')

            if (GameData.taskStudy[SchoolBundle.schoolProgress - 1].progress >= GameData.gameConf.task.study[2].progress) {
                this.hisResultLa && (this.hisResultLa.node.children[0].active = true)
                this.hisResultLa && (this.hisResultLa.node.children[1].active = true)
                this.hisResultLa && (this.hisResultLa.node.children[2].active = true)
            }
            else if (GameData.taskStudy[SchoolBundle.schoolProgress - 1].progress >= GameData.gameConf.task.study[1].progress) {
                this.hisResultLa && (this.hisResultLa.node.children[0].active = true)
                this.hisResultLa && (this.hisResultLa.node.children[1].active = true)
            }
            else if (GameData.taskStudy[SchoolBundle.schoolProgress - 1].progress >= GameData.gameConf.task.study[0].progress) {

                this.hisResultLa && (this.hisResultLa.node.children[0].active = true)
            }
        }

        this.studyNodes.forEach((el, index) => {
            if (index + 1 <= SchoolBundle.studyHisBar) {
                el.children[0].active = true;
            }
            else {
                el.children[0].active = false;
            }
        })

    }


    onBtnClick(event, curData) {
        let name = event.target.name;
        if (name == 'btn_black') {
            cc.find('Canvas/schoolLayer').active = false;
        }

        else if (name == 'study_cszb1' ||
            name == 'study_zbfx1' ||
            name == 'study_yyjq1' ||
            name == 'study_jdal1') {
            curData = parseInt(curData);

            if (curData > SchoolBundle.studyHisBar) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请先学习前一章');
                return;
            }

            SchoolBundle.studyBar = curData;
            GlobalEvent.emit('OPENCURSTUDYBAR');
        }

        else if (name == 'study_dtcg') {
            GlobalEvent.emit('OPENCURSTUDYBAR', 1);
        }

        else if (name == 'guide' || name == 'btnGuide_black') {

            if (this.guideCount == this.guidecurCount || name == 'btnGuide_black') {
                if (name == 'btnGuide_black') {
                    this.guidecurCount = 0;
                    this.guideCount = 0;
                }
                this.guide.active = false;
            }

            if (name == 'guide' && this.guideCount == this.guidecurCount) {
                this.guidecurCount = 0;
                this.guideCount = 0;
                GlobalEvent.emit('OPENCURSTUDYBAR');
            }

            else if (name == 'guide' && this.guideCount > this.guidecurCount) {
                this.onShowGuide();
            }

        }
    }
}
