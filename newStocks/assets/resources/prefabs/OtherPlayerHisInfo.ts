


import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class OtherPlayerHisInfo extends cc.Component {

    playeInfo = null;

    @property(cc.Node)
    tipsNode: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    scrollNode: cc.Node = null;

    @property(cc.Label)
    playerName: cc.Label = null;

    @property(cc.Toggle)
    toggle: cc.Toggle = null;

    onToggleClick(event) {

        this.content.children.forEach(el => {
            let handle = el.getComponent('OtherPlayerItem');
            handle.onHisItemRate(event.isChecked);
        })
    }

    onShow() {
        GameData.players[1] = this.playeInfo;

        if (this.playeInfo.nickname) {
            this.playerName.string = (this.playeInfo.nickname);
        }
        else {
            this.playerName.string = this.playeInfo.nick/*+ '  历史战绩'*/;
        }

        this.tipsNode.active = false;

        let ts = new Date().getTime() / 1000;
        let data = {
            uid: this.playeInfo.uid,
            to: ts,
            pageSize: 100,
            gType: GameCfg.GameType,
        }
        this.onQueryGameResult(data);

    }

    onQueryGameResult(data) {

       // let message = pb.CmdQueryGameResult.create(data)

        let buff = pb.CmdQueryGameResult.encode(data).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_QueryGameResult, buff, info => {

            console.log('其他玩家历史记录：' + JSON.stringify(info));

            let UIScrollControl = this.scrollNode.getComponent('UIScrollControl');
            UIScrollControl.clear();

            if (info.results.length == 0) {
                this.tipsNode.active = true;
            }
            else {
                let arr = [];
                info.results.forEach(el => {
                    // if (el.gType == pb.GameType.JJ_ChuangGuan && GameCfg.GameType == pb.GameType.//JJ_ChuangGuan) {
                    //     arr.push(el);
                    // }

                    if (el.gType == pb.GameType.JJ_ChuangGuan || el.gType == pb.GameType.JJ_PK || el.gType == pb.GameType.JJ_DuoKong) {
                        arr.push(el);
                    }
                });

                let UIScrollControl = this.scrollNode.getComponent('UIScrollControl');
                UIScrollControl.clear();

                UIScrollControl.initControl(this.item, arr.length, this.item.getContentSize(), 0, (node, index) => {
                    let nodehandle = node.getComponent('OtherPlayerItem');
                    nodehandle.itemData = arr[index];
                    nodehandle.itemIndex = index;
                    nodehandle.onShow(this.playeInfo);
                })
            }
        });
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'closeBtn') {
            this.node.active = false;
        }
    }

    onDisable() {
        this.toggle.isChecked = false;
    }
}
