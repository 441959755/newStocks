
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import LoadUtils from "../../../sctiprs/utils/LoadUtils";
import PopupManager from "../../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MRTItem extends cc.Component {

    head = null;

    username = null;

    userlv = null;

    man = null;

    uid = null;

    @property(cc.SpriteFrame)
    defaultImg: cc.SpriteFrame = null;


    onLoad() {


        GlobalEvent.on('REPPLAYERINFO', (info) => {

            if (info.uid == this.uid) {

                console.log('玩家资料应答' + JSON.stringify(info));

                GameData.playersInfo[info.uid + ''] = info;

                this.loadHeadImg(info);

                this.username.string = info.nick;
                this.userlv.string = 'LV: ' + info.properties[pb.GamePropertyId.Level];
                this.man.children[0].active = !info.gender;
            }
        }, this);
    }

    onDestroy() {
        GlobalEvent.off('REPPLAYERINFO');
    }

    onShow(el, index) {

        if (this.uid == el.uid) {
            return;
        }

        let RankNode = this.node.getChildByName('node');

        let nodes = RankNode.children;

        nodes.forEach(el => {
            el.active = false;
        })

        if (index <= 2) {
            nodes[index].active = true;
        }
        else {
            nodes[3].active = true;
            nodes[3].getComponent(cc.Label).string = (index + 1);
        }

        let userNode = this.node.getChildByName('userinfobg');

        this.head = userNode.getChildByName('main_txk').getComponent(cc.Sprite);

        this.username = userNode.getChildByName('username').getComponent(cc.Label);

        this.userlv = userNode.getChildByName('userLv').getComponent(cc.Label);

        this.man = userNode.getChildByName('main_sex__man');

        let countLabel = this.node.getChildByName('label').getComponent(cc.Label);

        this.head.spriteFrame = this.defaultImg;

        this.man.children[0].active = !el.gender;

        this.username.string = '';

        this.userlv.string = '';

        countLabel.string = el.cgsClearance;

        this.uid = el.uid;

        this.loadPlayerInfo(el.uid);


    }

    loadPlayerInfo(code) {
        if (GameData.playersInfo[code + '']) {
            this.loadHeadImg(GameData.playersInfo[code + '']);

            this.username.string = GameData.playersInfo[code + ''].nick;
            this.userlv.string = 'LV: ' + GameData.playersInfo[code + ''].properties[pb.GamePropertyId.Level];
            this.man.children[0].active = !GameData.playersInfo[code + ''].gender;
            return;
        }

        let info = {
            uid: code,
        }
        let playerInfo = pb.PlayerInfo;
        let buff = playerInfo.encode(info).finish();
        (<any>window).socket.send(pb.MessageId.Req_Hall_QueryPlayer, buff);
    }

    //加载图片
    loadHeadImg(obj) {
        if (GameData.imgs[obj.icon + '']) {
            this.head.spriteFrame = GameData.imgs[obj.icon + '']
        }
        else {
            // LoadImg.onLoadHeadByUid(obj.icon, (texture) => {
            //     if (texture) {
            //         GameData.imgs[obj.icon + ''] = new cc.SpriteFrame(texture);
            //         this.head.spriteFrame = GameData.imgs[obj.icon + '']
            //     }
            //     else {
            //         GameData.imgs[obj.icon + ''] = this.defaultImg;
            //     }
            // })

            LoadUtils.loadHeadImg(obj.icon, this.head);
        }
    }

    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'item') {
            //打开信息面板
            let info = GameData.playersInfo[this.uid + '']

            if (info) {
                info.icon = GameData.imgs[info.icon + '']
                PopupManager.openOtherPlayerInfoLayer(info);
            }

        }

    }

}
