import { pb } from "../../../protos/proto";
import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import List from "../../../sctiprs/utils/List";


const { ccclass, property } = cc._decorator;

@ccclass
export default class CgsLvRank extends cc.Component {

    @property(cc.Node)
    item: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    curData = null;

    @property(List)
    listV: List = null;

    stage = null;
    onLoad() {

        this.content.removeAllChildren();
    }

    //查询闯关赛关卡排行
    reqGameCgsGetStageRank(id, stage) {


        GlobalEvent.emit(EventCfg.SHOWLOADING);
        this.stage = stage;
        let data = {
            id: id,
            stage: stage,
        }

        let CmdCgsRanking = pb.CmdCgsRanking;
        let message = CmdCgsRanking.create(data);
        let buff = CmdCgsRanking.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_CgsGetStageRank, buff, (res) => {
            console.log('闯关赛关卡排行' + JSON.stringify(res));
            GlobalEvent.emit(EventCfg.HIDELOADING);
            //  GameData.locationLayer = LocationPoint.JJ_ChuangGuanOtherHis;

            this.curData = res;
            this.listV.numItems = this.curData.Items.length;
        })
    }

    onListRender(item: cc.Node, idx: number) {
        let handle = item.getComponent('CgsLvRankItem');

        handle.initShow(idx, this.curData.Items[idx], this.stage);
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }
    }

}
