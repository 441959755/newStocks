
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import LoadUtils from "../../../sctiprs/utils/LoadUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallPKMatch extends cc.Component {

    @property(cc.Node)
    player1: cc.Node = null;

    @property(cc.Node)
    player2: cc.Node = null;

    @property([cc.SpriteFrame])
    tx: cc.SpriteFrame[] = [];

    @property(cc.Animation)
    enterGameAnim: cc.Animation = null;

    callBack = null;

    spIndex = 0;

    ecb = null;

    enterRoom = false;

    @property(cc.Node)
    vipNode: cc.Node = null;

    @property(cc.SpriteFrame)
    defaultHead: cc.SpriteFrame = null;


    onLoad() {

        GlobalEvent.on('SHOWOTHERPLAYER', this.onShowOtherPlayer.bind(this), this);

        GlobalEvent.on(EventCfg.RoomGameStatus, () => { this.enterRoom = true }, this);
    }

    onShowOtherPlayer() {
        if (GameData.Players[1]) {
            this.callBack && (clearInterval(this.callBack));
            this.callBack = null;

            this.onLoadHead();

            let name = this.player2.getChildByName('name');
            let lv = this.player2.getChildByName('lv');
            let exp = this.player2.getChildByName('exp');

            name.active = true;
            lv.active = true;
            exp.active = true;

            name.getComponent(cc.Label).string = GameData.Players[1].nickname;

            lv.getComponent(cc.Label).string = 'LV：' + (GameData.Players[1].properties[pb.GamePropertyId.Level] || 1);

            exp.getComponent(cc.Label).string = '经验值：' + GameData.Players[1].properties[pb.GamePropertyId.Exp] + ' /' + GameData.gameConf.level_exp[(GameData.Players[1].properties[pb.GamePropertyId.Level] || 1)];
        }

    }

    onEnterGameAnim() {

        this.enterGameAnim.on('finished', () => {
            console.log('enterGameAnim');
            GlobalEvent.emit('LOADGAME');

            setTimeout(() => {
                this.node.active = false;
            }, 2000);

        }, this);

        this.enterGameAnim && (this.enterGameAnim.play());
    }

    onLoadHead() {
        let head = this.player2.getChildByName('head');

        head.getComponent(cc.Sprite).spriteFrame = this.defaultHead;

        // LoadImg.onLoadHeadByUid(GameData.Players[1].icon, (res) => {
        //     this.callBack && (clearInterval(this.callBack));
        //     this.callBack = null;
        //     if (res) {
        //         let texture = new cc.SpriteFrame(res);
        //         head.getComponent(cc.Sprite).spriteFrame = texture;
        //         GameData.imgs[GameData.Players[1].icon + ''] = texture;
        //     }
        //     else {
        //         head.getComponent(cc.Sprite).spriteFrame = this.defaultHead;
        //         GameData.imgs[GameData.Players[1].icon + ''] = this.defaultHead;
        //     }
        //     // 进入游戏动画
        //     this.onEnterGameAnim();
        // })

        LoadUtils.loadHeadImg(GameData.Players[1].icon, head.getComponent(cc.Sprite), this.onEnterGameAnim.bind(this));

    }

    onEnterChuanGuanGame() {

        let timeout = Math.random() * 2 + 3;

        this.ecb = setTimeout(() => {

            GlobalHandle.onCmdGameStartReq(() => {

            })

        }, timeout * 1000);
    }


    onEnable() {

        GlobalEvent.emit('HALLPKMATCH', true);

        if (GameCfg.GameType == pb.GameType.JJ_ChuangGuan) {
            this.onEnterChuanGuanGame();
        }

        GlobalEvent.emit(EventCfg.HIDELOADING);

        this.player2.getChildByName('name').active = false;
        this.player2.getChildByName('lv').active = false;;
        this.player2.getChildByName('exp').active = false;

        {
            let head = this.player1.getChildByName('head');
            let name = this.player1.getChildByName('name');
            let lv = this.player1.getChildByName('lv');
            let exp = this.player1.getChildByName('exp');

            head.getComponent(cc.Sprite).spriteFrame = GameData.headImg;

            name.getComponent(cc.Label).string = GameData.userName;

            lv.getComponent(cc.Label).string = 'LV：' + (GameData.properties[pb.GamePropertyId.Level] || 1) + '';

            exp.getComponent(cc.Label).string = '经验值：' + GameData.properties[pb.GamePropertyId.Exp] + '/' + GameData.gameConf.level_exp[(GameData.properties[pb.GamePropertyId.Level] || 1)];

            if (GameData.vipStatus) {
                this.vipNode.active = true;
            }
            else {
                this.vipNode.active = false;
            }
        }

        if (GameCfg.GameType == pb.GameType.JJ_ChuangGuan) {
            this.onSlideShow();
        }
        else {

            let arr = ComUtils.getJJJunXian();

            let data = {
                game: GameCfg.GameType,
                uid: GameData.userID,
                junXian: arr,
            }

            console.log('进入房间' + JSON.stringify(data));

            // let CmdRoomEnter = pb.CmdRoomEnter;
            // let message = CmdRoomEnter.create(data);
            let buff = pb.CmdRoomEnter.encode(data).finish();

            //进入房间请求
            (<any>window).socket.send(pb.MessageId.Req_Room_Enter, buff, (res) => {
                console.log(JSON.stringify(res));
                if (res.err) {
                    //不是好友房
                    if (!GameCfg.GAMEWAIT || !GameData.RoomType) {
                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err.err);
                    }
                    this.node.active = false;
                } else {
                    GameData.roomId = res.id;
                    this.onSlideShow();
                }
            })
        }

    }

    //寻找对手动画
    onSlideShow() {
        let sp = this.player2.getChildByName('head').getComponent(cc.Sprite);

        this.spIndex = 0;

        if (!this.callBack) {

            this.callBack = setInterval(() => {
                if (this.spIndex >= this.tx.length) {
                    this.spIndex = 0;
                }
                sp.spriteFrame = this.tx[this.spIndex++];
            }, 100);
        }
    }

    onDisable() {
        GlobalEvent.emit('HALLPKMATCH', false);
        this.callBack && (clearInterval(this.callBack));
        this.callBack = null;
        this.enterRoom = false;
        this.ecb && (clearTimeout(this.ecb));
        this.ecb = null;
    }

    onBtnClick(event, data) {
        let name = event.target.name;

        if (name == 'blackbtn') {

            if (this.enterRoom) { return }

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            GlobalHandle.onReqRoomLeave(() => {
                this.node.active = false;
                GameCfg.GameType = null;
                GlobalEvent.emit(EventCfg.HIDELOADING);
            });

            this.ecb && (clearTimeout(this.ecb));
            this.ecb = null;
        }
    }

    onDestroy() {
        GlobalEvent.off('SHOWOTHERPLAYER');
        GlobalEvent.off(EventCfg.RoomGameStatus);
    }


}
