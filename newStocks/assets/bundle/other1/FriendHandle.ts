
import { pb } from "../../protos/proto";
import GameData from "../../sctiprs/GameData";
import OtherBundle from "../../sctiprs/hall/OtherBundle";
import ActionUtils from "../../sctiprs/utils/ActionUtils";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
import List from "../../sctiprs/utils/List";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FriendHandle extends cc.Component {

    @property([cc.Toggle])
    toggles: cc.Toggle[] = [];

    @property([cc.Node])
    scollNode: cc.Node[] = [];

    @property(cc.Node)
    tipstext: cc.Node = null;

    @property(cc.Node)
    item1: cc.Node = null;

    @property(cc.Node)
    item2: cc.Node = null;

    @property(List)
    listV: List = null;

    concernList = []  //关注列表

    fansList = []  //粉丝列表

    friendFind: cc.Node = null;

    onLoad() {
        GlobalEvent.on('UPDATEFRIENDLIST', this.onShow.bind(this), this);

    }

    onDestroy() {
        GlobalEvent.off('UPDATEFRIENDLIST');
        GlobalEvent.off('REPPLAYERINFO');
    }

    onEnable() {

        GlobalEvent.on('REPPLAYERINFO', (info) => {
            GameData.playersInfo[info.uid + ''] = info;
        }, this);


        this.concernList = GameData.gameData.favorList || [];

        this.concernList.forEach(el => {
            this.loadPlayerInfo(el);
        })

        this.onShow();
    }

    loadPlayerInfo(code) {

        if (GameData.playersInfo[code + '']) {

        }
        else {

            let info = {
                uid: code,
            }

            let buff = pb.PlayerInfo.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_Hall_QueryPlayer, buff);
        }

    }

    onShow() {
        this.concernList = GameData.gameData.favorList || [];

        this.listV.numItems = this.concernList.length;

        this.toggles[0].isChecked = true;

        this.toggles[1].isChecked = false;

        this.scollNode[0].active = true;

        this.scollNode[1].active = false;

        if (this.concernList.length <= 0) {

            this.tipstext.active = true;
        }
        else {
            this.tipstext.active = false;
        }
        // this.createItem(this.concernList, this.scollNode[0], this.item1);
    }


    onList1Render(node: cc.Node, idx: number) {
        let handle = node.getComponent('FriendItem');
        handle.onShow(this.concernList[idx]);
    }

    onList2Render(node: cc.Node, idx: number) {

    }

    // createItem(arr, scoll, item) {

    // let UIScrollControl = scoll.getComponent('UIScrollControl');
    // UIScrollControl.clear();

    // if (arr.length <= 0) { return }

    // UIScrollControl.initControl(item, arr.length, item.getContentSize(), 0, (node, index) => {
    //     let handle = node.getComponent('FriendItem');
    //     handle.onShow(arr[index]);
    // })
    // }

    onToggleClick(event, curdata) {
        let name = event.node.name;
        if (name == 'toggle1') {
            this.scollNode[0].active = true;
            this.scollNode[1].active = false;
            if (this.concernList.length <= 0) {
                this.tipstext.active = true;
            } else {
                this.tipstext.active = false;
            }
        }

        else if (name == 'toggle2') {
            this.scollNode[0].active = false;
            this.scollNode[1].active = true;
            this.tipstext.active = false;
            if (this.fansList.length <= 0) {
                this.tipstext.active = true;
            }
        }
    }

    onBtnClick(event, curdata) {
        let name = event.target.name;

        if (name == 'leftBtn') {
            this.node.active = false;
        }

        else if (name == 'hy_topbtn_czhy') {
            //查找
            OtherBundle.loadPre('friendFind', (node) => { ActionUtils.openNode(node) })
        }

        else if (name == 'hy_topbtn_yqhy') {
            GlobalEvent.emit('OPENFRIENDINVITE');
        }
    }

}
