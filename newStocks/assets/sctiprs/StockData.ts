import GameCfg from "./GameCfg";
import GameData from "./GameData";


export default {

    amount: 0,

    volume: 0,

    ktype: null,

    minWidth: 6,

    maxWidth: 70,



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

        let j = 0;
        for (let i = 1; i <= 6; i++) {
            if (GameCfg.GameSet['isMA' + i]) {
                GameCfg.MAs[j++] = parseInt(GameCfg.GameSet['MA' + i + 'Date']);
            }
        }
    }


}