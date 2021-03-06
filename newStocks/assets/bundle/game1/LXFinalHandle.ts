
import DrawData from "../../sctiprs/DrawData";
import StrategyAIData from "../../sctiprs/game/StrategyAIData";
import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import StockData from "../../sctiprs/StockData";
import ComUtils from "../../sctiprs/utils/ComUtils";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../sctiprs/utils/TimeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class XLFinalHandle extends cc.Component {

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

    selfRank = 0;

    @property(cc.Node)
    vipImg: cc.Node = null;

    @property(cc.Node)
    vipImg1: cc.Node = null;


    onShow() {

        if (GameCfg.GAMEFUPAN) {
            return;
        }

        GlobalEvent.emit(EventCfg.CLEARINTERVAL);

        let gpData = GameCfg.data[0].data;

        let code = GameCfg.data[0].code;

        if (code.length >= 7) {
            code = code.slice(1);
        }

        this.codeLabel.string = '股票名称：' + GameCfg.data[0].name + '    ' + code;

        this.codeTimeLabel.string = '训练时段：' + TimeUtils.formatTime(gpData[GameData.huizhidatas - 1].day) + '--' + TimeUtils.formatTime(gpData[GameCfg.huizhidatas - 1].day);

        GameCfg.RoomGameData.players[0].result = { userProfitRate: GameCfg.allRate * 100 };

        let rate = ComUtils.changeTwoDecimal((gpData[GameCfg.huizhidatas - 1].close - gpData[GameData.huizhidatas - 1].close) / gpData[GameData.huizhidatas - 1].close * 100)

        this.HasRisen && (this.HasRisen.string = rate + '%')

        if (parseInt(rate) < 0) {
            this.HasRisen.node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.HasRisen.node.color = new cc.Color().fromHEX('#e94343');
        }

        {
            let userName = this.player1.getChildByName('username').getComponent(cc.Label);

            let userHead = this.player1.getChildByName('userHead').getComponent(cc.Sprite);

            let winSp = this.player1.getChildByName('jj_js_win');

            let loseSp = this.player1.getChildByName('jj_js_lose');

            userName.string = GameData.userName;

            userHead.spriteFrame = GameData.headImg;
            loseSp.active = false;
            winSp.active = false;

            if (GameCfg.allRate == 0 && StockData.arrOpt.length == 0) {
                this.selfRank = 2;
                //  xj.active = true;
                loseSp.active = true;
            }
            else if (GameCfg.allRate * 100 < GameCfg.RoomGameData.players[1].result.userProfitRate) {
                this.selfRank = 2;
                loseSp.active = true;
            }
            else if (GameCfg.allRate * 100 > GameCfg.RoomGameData.players[1].result.userProfitRate) {
                this.selfRank = 1;
                winSp.active = true;
            }

            if (GameData.vipStatus) {
                this.vipImg.active = true;
            }
            else {
                this.vipImg.active = false;
            }
        }

        {
            let userName = this.player2.getChildByName('username').getComponent(cc.Label);

            let userHead = this.player2.getChildByName('userHead').getComponent(cc.Sprite);
            let winSp = this.player2.getChildByName('jj_js_win');
            let loseSp = this.player2.getChildByName('jj_js_lose');
            loseSp.active = false;
            winSp.active = false;
            if (GameData.Players[1].nickname || GameData.Players[1].nick) {
                userName.string = GameData.Players[1].nickname || GameData.Players[1].nick;
            }

            userHead.spriteFrame = GameData.imgs[GameData.Players[1].icon + ''];

            if (this.selfRank == 1) {
                loseSp.active = true;
            }

            else if (this.selfRank == 2) {

                winSp.active = true;
            }

            // if (GameData.Players[1].properties[pb.GamePropertyId.VipExpiration] - new Date().getTime() / 1000 > 0) {
            //     this.vipImg1.active = true;
            // }
            // else {
            this.vipImg1.active = false;
            //}
        }

        this.onShowResult();

    }

    onShowResult() {
        let info = DrawData.getBukoCount();
        this.selfResultLabel[0].string = info.yCount + '次';
        this.selfResultLabel[1].string = info.sCount + '次';
        this.selfResultLabel[2].string = ComUtils.changeTwoDecimal(GameCfg.allRate * 100) + '%';

        if (info.sCount > 0) {
            this.selfResultLabel[1].node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.selfResultLabel[1].node.color = cc.Color.WHITE;
        }

        if (info.yCount > 0) {
            this.selfResultLabel[0].node.color = new cc.Color().fromHEX('#e94343');
        } else {
            this.selfResultLabel[0].node.color = cc.Color.WHITE;
        }

        if (GameCfg.allRate > 0) {
            this.selfResultLabel[2].node.color = new cc.Color().fromHEX('#e94343');
        } else {
            this.selfResultLabel[2].node.color = new cc.Color().fromHEX('#31a633');
        }

        let info1 = DrawData.getWinLosCountByOps(StockData.player1Opt);

        this.otherResultLabel[0].string = info1.yCount + '次';
        this.otherResultLabel[1].string = info1.sCount + '次';
        this.otherResultLabel[2].string = ComUtils.changeTwoDecimal(GameCfg.RoomGameData.players[1].result.userProfitRate) + '%';

        if (info1.sCount > 0) {
            this.otherResultLabel[1].node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.otherResultLabel[1].node.color = cc.Color.WHITE;
        }

        if (info1.yCount > 0) {
            this.otherResultLabel[0].node.color = new cc.Color().fromHEX('#e94343');
        } else {
            this.otherResultLabel[0].node.color = cc.Color.WHITE;
        }

        if (GameCfg.RoomGameData.players[1].result.userProfitRate > 0) {
            this.otherResultLabel[2].node.color = new cc.Color().fromHEX('#e94343');
        } else {
            this.otherResultLabel[2].node.color = new cc.Color().fromHEX('#31a633');
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
            GameCfg.GAMEFUPAN = false;
            GameCfg.history.allRate = 0;
            StrategyAIData.onClearData();
            GameCfg.allRate = 0;
            GameCfg.finalfund = 0;
            GameCfg.fill = [];
            GameCfg.blockHistoy = [];
            GameCfg.mark = [];
            GameCfg.notice = [];

            GameCfg.huizhidatas = GameData.huizhidatas

            GlobalEvent.emit('LOADGAME');
        }

        //复盘
        else if (name == 'pk_jsbt_qd') {
            GameCfg.fill = [];
            GameCfg.fill.length = 0;
            GameCfg.allRate = 0;
            GlobalEvent.emit(EventCfg.FILLNODEISSHOW, false);

            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, 1);
            GameCfg.GAMEFUPAN = true;
            GlobalEvent.emit(EventCfg.GAMEFUPAN);
            GlobalEvent.emit(EventCfg.GAMEFUPANOPT, StockData.arrOpt)

            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, 2);
            GlobalEvent.emit(EventCfg.GAMEFUPANOPT, StockData.player1Opt)

            this.node.active = false;
            GlobalEvent.emit(EventCfg.CUTGAMEFUPAN, 3);
        }
    }

    onQuitGame() {
        GameCfg.data[0].data = [];
        GameCfg.huizhidatas = 0;
        GameCfg.allRate = 0;
        GameCfg.finalfund = 0;
        GameCfg.GAMEFUPAN = false;
        GameCfg.history.allRate = 0;
        StrategyAIData.onClearData();
        GameCfg.enterGameConf = null;
        GameCfg.RoomGameData = null;
        GlobalEvent.emit(EventCfg.LEAVEGAME);
    }


}
