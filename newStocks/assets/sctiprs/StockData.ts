import { pb } from "../protos/proto";
import GameCfg from "./GameCfg";
import GameData from "./GameData";
import GlobalHandle from "./GlobalHandle";


export default {

    amount: 0,

    volume: 0,

    ktype: null,

    minWidth: 6,

    maxWidth: 70,

    /**
     * 默认显示的指标
     */
    showIndex: ['MA', 'VOL'],

    /**
     * 股票分 数据
     */
    gpDataMin: [],

    /**
     * 股票数据 天
     */
    gpDataDay: [],

    /**
     * 股票数据 月
     */
    gpDataDay30: [],

    /**
     * 股票数据 周
     */
    gpDataDay7: [],

    setDrawColor() {

        GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.jjpkSet));

        GameCfg.MAColor[0] = new cc.Color().fromHEX('#ffffff');
        GameCfg.MAColor[1] = new cc.Color().fromHEX('#ebeb12');

        GameCfg.MAColor[2] = new cc.Color().fromHEX('#e814ed');
        GameCfg.MAColor[3] = new cc.Color().fromHEX('#14ed14');
        GameCfg.MAColor[4] = new cc.Color().fromHEX('#1c9ce6');
        GameCfg.MAColor[5] = new cc.Color().fromHEX('#d47026');

        GameCfg.BOLLColor[0] = cc.Color.WHITE;
        GameCfg.BOLLColor[1] = new cc.Color().fromHEX('#f0dc05');
        GameCfg.BOLLColor[2] = new cc.Color().fromHEX('#d85cfc');

        GameCfg.VOLColor[0] = new cc.Color().fromHEX('#ffffff');
        GameCfg.VOLColor[1] = new cc.Color().fromHEX('#ebeb12');

        GameCfg.tipsDealColor[0] = new cc.Color().fromHEX('#02230c');
        GameCfg.tipsDealColor[1] = new cc.Color().fromHEX('#2d0202');

        GameCfg.K_D_J_Line[0] = cc.Color.WHITE;
        GameCfg.K_D_J_Line[1] = new cc.Color().fromHEX('#f0dc05');
        GameCfg.K_D_J_Line[2] = new cc.Color().fromHEX('#d85cfc');

        GameCfg.DIF_LINE_COL = cc.Color.WHITE;
        GameCfg.DEA_LINE_COL = new cc.Color().fromHEX('#f0dc05');

        GameCfg.MACD_COL[0] = new cc.Color().fromHEX('#f11111');
        GameCfg.MACD_COL[1] = new cc.Color().fromHEX('#0fee1e');

        GameCfg.RSI_COLOR[0] = cc.Color.WHITE;
        GameCfg.RSI_COLOR[1] = new cc.Color().fromHEX('#f0dc05');
        GameCfg.RSI_COLOR[2] = new cc.Color().fromHEX('#d85cfc');

        GameCfg.CCL_COL = cc.Color.WHITE;

        GameCfg.EXPMA_COL[0] = new cc.Color().fromHEX('#ffffff');
        GameCfg.EXPMA_COL[1] = new cc.Color().fromHEX('#ebeb12');

        if (GameCfg.GameType == 'ZNZG') {
            GameCfg.MAs = [10, 20, 30];
        }
        else {
            let j = 0;
            for (let i = 1; i <= 6; i++) {
                if (GameCfg.GameSet['isMA' + i]) {
                    GameCfg.MAs[j++] = parseInt(GameCfg.GameSet['MA' + i + 'Date']);
                }
            }
        }

    },

    /**
     * 玩家1操作
     */
    player1Opt: [],

    /**
    * 玩家2操作
    */
    player2Opt: [],

    arrOpt: [],

    time: 1,

    toCount: 10,

    curCount: 0,

    preTiem: 0,

    cb: null,

    //添加操作
    addOpt(el) {
        if (!el) { return }

        if (GameCfg.GAMEFRTD && GameData.selfEnterRoomData.players[0].ops.items.length > 0) {

            let le = GameData.selfEnterRoomData.players[0].ops.items.length - 1;

            if (el.kOffset <= GameData.selfEnterRoomData.players[0].ops.items[le].kOffset) {
                return;
            }
        }

        if (GameCfg.GameType == pb.GameType.JJ_PK || GameCfg.GameType == pb.GameType.JJ_DuoKong) {
            el && (el.kOffset -= 1)
        }

        console.log('操作' + JSON.stringify(el));

        this.arrOpt.push(el);

        this.player1Opt.push(el);

        if (GameCfg.GameType == pb.GameType.JJ_PK || GameCfg.GameType == pb.GameType.JJ_DuoKong) {
            this.cb && (clearTimeout(this.cb));
            this.cb = null;
            let curTime = new Date().getTime() / 1000;
            if (!this.preTiem) {
                this.preTiem = curTime;
            }
            let interval = curTime - this.preTiem;

            this.curCount++;
            if (this.curCount >= this.toCount || interval >= this.time) {
                this.curCount = 0;
                this.preTiem = curTime;
                this.StockData();
            } else {
                this.cb = setTimeout(() => {
                    this.curCount = 0;
                    this.preTiem = curTime;
                    this.StockData();

                }, (2 - interval) * 1000);
            }
        }
    },

    //上传
    StockData(end?) {

        if (GameCfg.GameType == pb.GameType.JJ_PK || GameCfg.GameType == pb.GameType.JJ_DuoKong) {
            if (end) {
                this.arrOpt.push({
                    opId: pb.GameOperationId.END,
                });
            }
            this.cb && (clearTimeout(this.cb));

            this.cb = null;

            GlobalHandle.onUpRoomGameOp({ items: this.arrOpt });

            this.arrOpt = [];

            this.arrOpt.length = 0;
        }
    },

    clearGameOpt() {
        this.player1Opt = [];
        this.player1Opt.length = 0;
        this.player2Opt = [];
        this.player2Opt.length = 0;
        this.cb && (clearTimeout(this.cb));
        this.cb = null;
        this.arrOpt = [];
        this.arrOpt.length = 0;
    },

    //kOffset
    ChanagekOffset(item) {
        if (!item) { return }
        if (Object.prototype.toString.call(item).slice(8, -1) == "Array") {
            item.forEach(el => {
                el.kOffset += 1;
            });
        }
        else {
            item.kOffset += 1;
        }
    },

    UpdataOtherPlayerOpt(opt) {
        if (Object.prototype.toString.call(opt.items).slice(8, -1) == "Array") {
            opt.items.forEach(el => {
                el.kOffset += 1;
                this.player2Opt.push(el);
            });
        }
        else {
            opt.kOffset += 1;
            this.player2Opt.push(opt);
        }
        console.log('player2Opt:' + JSON.stringify(this.player2Opt));
    }

}