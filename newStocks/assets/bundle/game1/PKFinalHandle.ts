
import LLWSDK from "../../common/sdk/LLWSDK";
import DrawData from "../../sctiprs/DrawData";
import StrategyAIData from "../../sctiprs/game/StrategyAIData";
import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import StockData from "../../sctiprs/StockData";
import ComUtils from "../../sctiprs/utils/ComUtils";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
import LoadUtils from "../../sctiprs/utils/LoadUtils";
import PopupManager from "../../sctiprs/utils/PopupManager";
import TimeUtils from "../../sctiprs/utils/TimeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PKFinalHandle extends cc.Component {

    gameResult = null;

    @property(cc.Node)
    player1: cc.Node = null;

    @property(cc.Node)
    player2: cc.Node = null;

    @property([cc.Label])
    selfResultLabel: cc.Label[] = [];

    @property([cc.Label])
    otherResultLabel: cc.Label[] = [];

    @property(cc.Label)
    codeLabel: cc.Label = null;

    @property(cc.Label)
    codeTimeLabel: cc.Label = null;

    @property(cc.Label)
    HasRisen: cc.Label = null;    //同期涨幅

    EnterGameLayer: cc.Node = null;

    @property(cc.Node)
    vipNode: cc.Node = null;

    onLoad() {
        GlobalEvent.on(EventCfg.LEVELCHANGE, () => {
            let userLevel = this.player1.getChildByName('userLevel').getComponent(cc.Label);
            userLevel.string = 'LV: ' + GameData.properties[pb.GamePropertyId.Level];
        }, this);

        GlobalEvent.on(EventCfg.EXPCHANGE, () => {
            let userExp = this.player1.getChildByName('userExp').getComponent(cc.Label);
            userExp.string = 'EXP: ' + GameData.properties[pb.GamePropertyId.Exp] + '/' + GameData.gameConf.level_exp[GameData.properties[pb.GamePropertyId.Level]];
        }, this);
    }

    onShow() {

        GlobalEvent.emit(EventCfg.CLEARINTERVAL);

        //  PopupManager.hideTipsBox('tipsBox');
        PopupManager.nodes['tipsBox'].active = false;

        this.gameResult = JSON.parse(JSON.stringify(GameCfg.RoomGameData));

        if (this.gameResult.players[1].gd.uid == GameData.userID) {
            let item = this.gameResult.players[1];
            let item1 = this.gameResult.players[0];
            this.gameResult.players[1] = item1;
            this.gameResult.players[0] = item;
        }

        let gpData = GameCfg.data[0].data;
        let code = GameCfg.data[0].code;
        if (code.length >= 7) {
            code = code.slice(1);
        }
        this.codeLabel.string = '股票名称：' + GameCfg.data[0].name + '    ' + code;
        this.codeTimeLabel.string = '比赛时段:' + TimeUtils.formatTime(gpData[GameData.huizhidatas - 1].day) + '--' + TimeUtils.formatTime(gpData[gpData.length - 1].day);

        let rate = this.gameResult.players[0].result.stockProfitRate.toFixed(2)
        this.HasRisen && (this.HasRisen.string = rate + '%')
        if (parseInt(rate) < 0) {
            this.HasRisen.node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.HasRisen.node.color = new cc.Color().fromHEX('#e94343');
        }

        {
            let userName = this.player1.getChildByName('username').getComponent(cc.Label);
            let userLevel = this.player1.getChildByName('userLevel').getComponent(cc.Label);
            let userExp = this.player1.getChildByName('userExp').getComponent(cc.Label);
            let userHead = this.player1.getChildByName('userHead').getComponent(cc.Sprite);
            let winSp = this.player1.getChildByName('jj_js_win');
            let loseSp = this.player1.getChildByName('jj_js_lose');

            let xj = this.player1.getChildByName('jj_xj');
            let taopao = this.player1.getChildByName('jj_toapao');

            userName.string = this.gameResult.players[0].gd.nickname;
            userLevel.string = 'LV: ' + GameData.properties[pb.GamePropertyId.Level];
            userExp.string = 'EXP: ' + GameData.properties[pb.GamePropertyId.Exp] + '/' + GameData.gameConf.level_exp[GameData.properties[pb.GamePropertyId.Level]];
            loseSp.active = false;
            winSp.active = false;
            userHead.spriteFrame = GameData.headImg;

            StockData.ChanagekOffset(this.gameResult.players[0].ops.items);
            StockData.ChanagekOffset(this.gameResult.players[1].ops.items);

            if (GameData.vipStatus) {
                this.vipNode.active = true;
            }
            else {
                this.vipNode.active = false;
            }

            //消极
            // if (userProfitRate1 == -999 && this.gameResult.players[0].ops.items.length == 0) {
            if (this.gameResult.players[0].result.rank == 2) {
                loseSp.active = true;
                winSp.active = false;
                // xj.active = true;
                this.onResultAward(2, this.selfResultLabel, this.gameResult.players[0].result.userProfitRate);
            }
            else if (this.gameResult.players[0].result.rank == 1) {
                loseSp.active = false;
                winSp.active = true;
                this.onResultAward(1, this.selfResultLabel, this.gameResult.players[0].result.userProfitRate);
            }
            else {
                this.onResultAward(3, this.selfResultLabel, this.gameResult.players[0].result.userProfitRate);
            }
        }

        {
            let userName = this.player2.getChildByName('username').getComponent(cc.Label);
            let userLevel = this.player2.getChildByName('userLevel').getComponent(cc.Label);
            let userExp = this.player2.getChildByName('userExp').getComponent(cc.Label);
            let userHead = this.player2.getChildByName('userHead').getComponent(cc.Sprite);
            let winSp = this.player2.getChildByName('jj_js_win');
            let loseSp = this.player2.getChildByName('jj_js_lose');

            let xj = this.player1.getChildByName('jj_xj');
            let taopao = this.player1.getChildByName('jj_toapao');

            userName.string = this.gameResult.players[1].gd.nickname;
            userLevel.string = 'LV: ' + this.gameResult.players[1].gd.properties[pb.GamePropertyId.Level];
            userExp.string = 'EXP: ' + this.gameResult.players[1].gd.properties[pb.GamePropertyId.Exp] + '/' + GameData.gameConf.level_exp[this.gameResult.players[1].gd.properties[pb.GamePropertyId.Level]];
            loseSp.active = false;
            winSp.active = false;

            userHead.spriteFrame = GameData.imgs[this.gameResult.players[1].gd.icon + ''];

            let stages;
            if (GameData.RoomType > 0) {
                stages = GameData.gameConf.pk_wx;
            }
            else {
                stages = GameData.gameConf.pk;
            }

            let ex;

            if (this.gameResult.players[1].result.rank == 2) {
                loseSp.active = true;
                winSp.active = false;
                // xj.active = true;
                stages.lose.forEach(el => {
                    if (el.i == 3) {
                        ex = el.v;
                    }
                })
                this.onResultAward(2, this.otherResultLabel, this.gameResult.players[1].result.userProfitRate);
            }
            else if (this.gameResult.players[1].result.rank == 1) {
                loseSp.active = false;
                winSp.active = true;
                stages.win.forEach(el => {
                    if (el.i == 3) {
                        ex = el.v;
                    }
                })
                this.onResultAward(1, this.otherResultLabel, this.gameResult.players[1].result.userProfitRate);
            }
            else {
                stages.draw.forEach(el => {
                    if (el.i == 3) {
                        ex = el.v;
                    }
                })

                this.onResultAward(3, this.otherResultLabel, this.gameResult.players[1].result.userProfitRate);
            }

            ex = this.gameResult.players[1].gd.properties[pb.GamePropertyId.Exp];
            userExp.string = 'EXP: ' + ex + '/' + GameData.gameConf.level_exp[this.gameResult.players[1].gd.properties[pb.GamePropertyId.Level]];
        }

    }

    onEnable() {
        GameCfg.GAMEFRTD = false;
        GlobalEvent.emit(EventCfg.FILLNODEISSHOW, true);
    }

    onResultAward(status, arr, Rate) {
        arr[0].string = '+' + 0;
        arr[1].string = '+' + 0;
        arr[2].string = '+' + 0;
        //胜利
        if (status == 1) {
            let ArrWin;
            if (GameData.RoomType > 0) {
                ArrWin = GameData.gameConf.pk_wx.win;
            }
            else {
                ArrWin = GameData.gameConf.pk.win;
            }
            ArrWin.forEach(e => {

                if (e.i == pb.GamePropertyId.Gold) {
                    arr[0].string = '+ ' + e.v;
                    if (GameData.JJCapital) {
                        arr[0].string = '+' + GameData.JJCapital * 2;
                    }
                }
                else if (e.i == pb.GamePropertyId.Exp) {
                    arr[1].string = '+ ' + e.v;
                }
                else if (e.i == pb.GamePropertyId.Fame) {
                    arr[2].string = "+ " + e.v;
                    arr[2].node.color = new cc.Color().fromHEX('#e94343');
                }
            });

        }
        //失败
        else if (status == 2) {

            let Arrlose;
            if (GameData.RoomType > 0) {
                Arrlose = GameData.gameConf.pk_wx.lose;
            }
            else {
                Arrlose = GameData.gameConf.pk.lose;
            }

            Arrlose.forEach(e => {
                if (e.i == pb.GamePropertyId.Gold) {
                    arr[0].string = '+ ' + e.v;
                    if (GameData.JJCapital) {
                        arr[0].string = '+' + 0;
                    }
                }
                else if (e.i == pb.GamePropertyId.Exp) {
                    arr[1].string = '+ ' + e.v;

                }
                else if (e.i == pb.GamePropertyId.Fame) {
                    arr[2].string = "" + e.v;
                    arr[2].node.color = new cc.Color().fromHEX('#31a633');
                }
            });
        }
        //平局
        else if (status == 3) {

            let Arrlose;
            if (GameData.RoomType > 0) {
                Arrlose = GameData.gameConf.pk_wx.draw;
            }
            else {
                Arrlose = GameData.gameConf.pk.draw;
            }

            Arrlose.forEach(e => {
                if (e.i == pb.GamePropertyId.Gold) {
                    arr[0].string = '+ ' + e.v;
                    if (GameData.JJCapital) {
                        arr[0].string = '+' + 0;
                    }
                }
                else if (e.i == pb.GamePropertyId.Exp) {
                    arr[1].string = '+ ' + e.v;

                }
                else if (e.i == pb.GamePropertyId.Fame) {
                    arr[2].string = "" + e.v;
                    arr[2].node.color = new cc.Color().fromHEX('#31a633');
                }
            });
        }
        if (status == 2 || status == 1 || status == 3) {
            if (Rate > 0) {
                arr[3].node.color = new cc.Color().fromHEX('#e94343');
            } else {
                arr[3].node.color = new cc.Color().fromHEX('#31a633');
            }
            // arr[3].string = Rate.toFixed(2) + "%";

            arr[3].string = ComUtils.changeTwoDecimal(Rate) + '%';
        }
        else {
            arr[3].node.color = new cc.Color().fromHEX('#31a633');
            if (status == 3) {
                arr[3].string = '消极';
            } else {
                arr[3].string = '逃跑';
            }
        }
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        //返回大厅
        if (name == 'closeBtn') {
            this.onQuitGame();
        }

        //再来一局
        else if (name == 'pk_jsbt_zlyj') {

            this.onQuitGame();
            if (GameCfg.GameType == pb.GameType.JJ_PK || GameCfg.GameType == pb.GameType.JJ_DuoKong) {
                GlobalEvent.emit(EventCfg.OPENMATCHPK);
            }
        }

        //复盘
        else if (name == 'pk_jsbt_qd') {

            if (!GameData.vipStatus) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '开启VIP或解锁该功能取限制');
                return;
            }

            let j = 0;
            GameCfg.MAs = [];
            this.gameResult.players[0].junXian.forEach(el => {
                if (el) {
                    GameCfg.MAs[j++] = el;
                }
            });

            GameCfg.fill = [];
            GameCfg.fill.length = 0;
            GameCfg.allRate = 0;

            DrawData.initDrawData(GameCfg.data[0].data);
            GlobalEvent.emit('initMALA');

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            GlobalEvent.emit(EventCfg.FILLNODEISSHOW, false);

            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, 1);
            GameCfg.GAMEFUPAN = true;
            GlobalEvent.emit(EventCfg.GAMEFUPAN);
            GlobalEvent.emit(EventCfg.GAMEFUPANOPT, this.gameResult.players[0].ops.items)

            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, 2);
            GlobalEvent.emit(EventCfg.GAMEFUPANOPT, this.gameResult.players[1].ops.items)

            this.node.active = false;
            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, 3);
        }
        //训练该股
        else if (name == 'pk_jsbt_xl') {
            if (!this.EnterGameLayer) {

                GlobalEvent.emit(EventCfg.SHOWLOADING);

                // LoadUtils.load('Prefabs/enterXLGame', (pre) => {
                //     GlobalEvent.emit(EventCfg.HIDELOADING);
                //     this.EnterGameLayer = cc.instantiate(pre);
                //     this.node.addChild(this.EnterGameLayer);
                // })
                LoadUtils.load('Prefabs/enterXLGame').then((pre) => {
                    GlobalEvent.emit(EventCfg.HIDELOADING);
                    this.EnterGameLayer = cc.instantiate(pre);
                    this.node.addChild(this.EnterGameLayer);
                })

            }
            else {
                this.EnterGameLayer.active = true;
            }
        }
        //zj复盘
        else if (name == 'Btn_fupan_self') {

            let j = 0;

            GameCfg.MAs = [];

            this.gameResult.players[0].junXian.forEach(el => {
                if (el) {
                    GameCfg.MAs[j++] = el;
                }
            });

            GameCfg.fill = [];
            GameCfg.fill.length = 0;
            GameCfg.allRate = 0;
            DrawData.initDrawData(GameCfg.data[0].data);
            GlobalEvent.emit('initMALA');
            GlobalEvent.emit(EventCfg.SHOWLOADING);
            GlobalEvent.emit(EventCfg.FILLNODEISSHOW, true);
            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, -1);
            this.node.active = false;
            GameCfg.GAMEFUPAN = true;
            GlobalEvent.emit(EventCfg.GAMEFUPANOPT, this.gameResult.players[0].ops.items)
            GlobalEvent.emit(EventCfg.GAMEFUPAN);
        }
        //tr复盘
        else if (name == 'Btn_fupan_other') {

            if (!this.gameResult.players[1].junXian || this.gameResult.players[1].junXian.length <= 0) {
                this.gameResult.players[1].junXian = [5, 10, 20, 30, 60, 120];
            }

            let j = 0;
            GameCfg.MAs = [];
            this.gameResult.players[1].junXian.forEach(el => {
                if (el) {
                    GameCfg.MAs[j++] = el;
                }
            });

            GameCfg.fill = [];
            GameCfg.fill.length = 0;
            GameCfg.allRate = 0;

            DrawData.initDrawData(GameCfg.data[0].data);

            GlobalEvent.emit('initMALA');

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            GlobalEvent.emit(EventCfg.FILLNODEISSHOW, true);

            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, -2);
            this.node.active = false;
            GameCfg.GAMEFUPAN = true;

            GlobalEvent.emit(EventCfg.GAMEFUPANOPT, this.gameResult.players[1].ops.items)
            GlobalEvent.emit(EventCfg.GAMEFUPAN);
        }

        else if (name == 'lx_fx') {

            LLWSDK.getSDK().shareAppMessage(1);
        }
    }

    onQuitGame() {
        GameCfg.fill = [];
        GameCfg.allRate = 0;
        GameCfg.finalfund = 0;
        GameCfg.GAMEFUPAN = false;
        GameCfg.history.allRate = 0;
        StrategyAIData.onClearData();
        GameCfg.enterGameConf = null;

        if (!GameData.RoomType) {
            GameCfg.RoomGameData = null;
        }
        GlobalEvent.emit(EventCfg.LEAVEGAME);
    }

    onDestroy() {
        LoadUtils.releaseRes('Prefabs/enterXLGame');
        GlobalEvent.off(EventCfg.LEVELCHANGE);
        GlobalEvent.off(EventCfg.EXPCHANGE);
    }

}
