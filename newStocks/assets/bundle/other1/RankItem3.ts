
import GameData from "../../sctiprs/GameData";
import ComUtils from "../../sctiprs/utils/ComUtils";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
import LoadUtils from "../../sctiprs/utils/LoadUtils";

import PopupManager from "../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankItem3 extends cc.Component {

    @property(cc.Label)
    pm: cc.Label = null;

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Label)
    fame: cc.Label = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Sprite)
    head: cc.Sprite = null;

    @property(cc.Node)
    sex: cc.Node = null;

    defaultImg = null;

    _info = null;

    onLoad() {
        this.defaultImg = this.head.spriteFrame;
    }

    onShow(obj, index) {
        this._info = obj;

        // let str = ComUtils.getChenghaoByFame(obj.fame || 0);

        this.fame.string = obj.fame;

        this.level.string = obj.level || 0;

        let nodes = this.pm.node.children;
        nodes.forEach(el => {
            el.active = false;
        })

        if (index == 0) {
            this.pm.string = '';
            nodes[0].active = true;
        }
        else if (index == 1) {
            this.pm.string = '';
            nodes[1].active = true;
        }
        else if (index == 2) {
            this.pm.string = '';
            nodes[2].active = true;
        }
        else {
            this.pm.string = index + 1;
        }

        this.userName.string = obj.nickname || '';

        this.head.spriteFrame = this.defaultImg;
        this.loadHeadImg(obj);
        //  GameData.imgs[obj.icon + ''] && (this.head.spriteFrame = GameData.imgs[obj.icon + ''])

        this.sex.children[0].active = !parseInt(obj.gender);

    }

    //加载图片
    loadHeadImg(obj) {
        if (GameData.imgs[obj.icon + '']) {
            this.head.spriteFrame = GameData.imgs[obj.icon + '']
        }
        else {

            LoadUtils.loadHeadImg(obj.icon, this.head);
        }
    }

    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'item3') {

            //打开信息面板
            this.getPlayerInfo((info) => {
                //   info.icon = GameData.imgs[this._info.icon + ''];
                PopupManager.openOtherPlayerInfoLayer(info);
            })

        }
        else if (name == 'phb_bt_tiaozhanta') {

            //打开信息面板
            this.getPlayerInfo((info) => {
                info.icon = GameData.imgs[this._info.icon + ''];
                //打开历史记录
                GlobalEvent.emit(EventCfg.OPENOTHERPLAYERHISLAYER, info);
            })

        }
    }

    getPlayerInfo(call) {
        let info = {
            uid: this._info.uid,
        }

        let buff = pb.PlayerInfo.encode(info).finish();
        (<any>window).socket.send(pb.MessageId.Req_Hall_QueryPlayer, buff, res => {
            if (res.uid) {
                call && (call(res));
            }
        })
    }
}
