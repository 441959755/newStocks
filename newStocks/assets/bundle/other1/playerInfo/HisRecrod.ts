

import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import List from "../../../sctiprs/utils/List";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HisRecrod extends cc.Component {

    @property(cc.Node)
    tipsNode: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    scrollNode: cc.Node = null;

    @property(cc.Toggle)
    toggle: cc.Toggle = null;

    @property(List)
    listV: List = null;

    arr = null;

    onToggleClick(event) {
        this.content.children.forEach(el => {
            let handle = el.getComponent('HisItem');
            handle.onHisItemRate(event.isChecked);
        })
    }

    onEnable() {
        this.tipsNode.active = false;
        let ts = new Date().getTime() / 1000;
        let data = {
            uid: GameData.userID,
            to: ts,
            pageSize: 100,
        }
        this.onQueryGameResult(data);
    }

    onQueryGameResult(data) {

        GlobalEvent.emit(EventCfg.SHOWLOADING);

        //let message = pb.CmdQueryGameResult.create(data)
        let buff = pb.CmdQueryGameResult.encode(data).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_QueryGameResult, buff, info => {
            console.log(JSON.stringify(info.results));
            if (info.results.length == 0) {
                this.tipsNode.active = true;
            }
            else {
                this.arr = this.onScelectData(info.results);

                if (this.arr.length <= 0) {
                    this.tipsNode.active = true;
                }
                else {
                    this.tipsNode.active = false;
                }

                this.listV.numItems = this.arr.length;
            }
            GlobalEvent.emit(EventCfg.HIDELOADING);

        });
    }

    onListRender(item: cc.Node, idx: number) {
        let nodeHandle = item.getComponent('HisItem');
        nodeHandle.itemData = this.arr[idx];
        nodeHandle.itemIndex = idx + 1;
        nodeHandle.onShow();
        nodeHandle.onHisItemRate(this.toggle.isChecked);
    }

    onScelectData(data) {
        let arr = [];
        data.forEach(el => {
            if (el.gType == pb.GameType.ShuangMang) {
                // this.modeLabel.string = '????????????';
                // this.gameSet1 = GameData.SMSet;
                // this.node.active = false;
            }
            else if (el.gType == pb.GameType.DingXiang) {
                // this.modeLabel.string = '????????????';
                // this.gameSet1 = GameData.DXSet;
                // this.node.active = false;
            }
            else if (el.gType == pb.GameType.FenShi) {
                // this.modeLabel.string = '????????????';
                // //  this.gameSet1 = GameData.SHSet;
                // this.node.active = false;
            }
            else if (el.gType == pb.GameType.ZhiBiao) {
                // this.modeLabel.string = '????????????';
                // this.gameSet1 = GameData.ZBSet;
                // this.node.active = false;
            }
            else if (el.gType == pb.GameType.TiaoJianDan) {
                // this.modeLabel.string = '???????????????';
                // this.node.active = false;
            }
            else if (el.gType == pb.GameType.QiHuo) {
                // this.modeLabel.string = '????????????';
                // this.gameSet1 = GameData.QHSet;
                // this.node.active = false;
            }
            else if (el.gType == pb.GameType.TiaoZhan ||
                el.gType == pb.GameType.JJ_PK ||
                el.gType == pb.GameType.JJ_DuoKong ||
                el.gType == pb.GameType.JJ_ChuangGuan ||
                el.gType == pb.GameType.JJ_QiHuo) {
                //this.modeLabel.string = '???    ???';
                arr.push(el);
            }
            // else if () {
            //     arr.push(el);
            // }
            // else if () {
            //     arr.push(el);
            // }
            // else if () {
            //     this.modeLabel.string = '???  ??????';
            //     this.gameSet1 = GameData.JJPKSet;
            // }
            // else if () {
            //     this.modeLabel.string = '????????????';
            // }
            // else if (this.itemData.gType == pb.GameType.MoNiChaoGu) {
            //     this.modeLabel.string = '????????????';
            // }
            // else if (this.itemData.gType == pb.GameType.ChaoGuDaSai) {
            //     this.modeLabel.string = '????????????';
            // }
            // else if (this.itemData.gType == pb.GameType.GeGuJingChai) {
            //     this.modeLabel.string = '????????????';
            // }
            // else if (this.itemData.gType == pb.GameType.DaPanJingChai) {
            //     this.modeLabel.string = '????????????';
            // }
        });
        return arr;
    }

}
