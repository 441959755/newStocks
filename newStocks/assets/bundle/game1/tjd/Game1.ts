
import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
// import DrawData from "../../../sctiprs/game/DrawData";
// import GameCfg from "../../../sctiprs/game/GameCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game1 extends cc.Component {

    onEnable() {


        this.initData();
        this.setColor();
        //绘制的数据

        DrawData.initDrawData(GameCfg.data[0].data);

        let drawWidth = cc.winSize.width - 180 - 100 - 25;

        GameCfg.hz_width = drawWidth / (GameCfg.beg_end[1] - GameCfg.beg_end[0]);

    }

    initData() {
        GameCfg.beg_end = [];
        GameCfg.beg_end[1] = GameCfg.huizhidatas;
        GameCfg.beg_end[0] = 0;

        if (GameCfg.huizhidatas > 100) {
            GameCfg.beg_end[0] = GameCfg.beg_end[1] - 100;
        }

        if (GameCfg.beg_end[0] < 0) {
            GameCfg.beg_end[0] = 0;
        }

        GameCfg.MAs = [];
        let j = 0;

        //双盲 定向   
        if (GameCfg.GameType == pb.GameType.ShuangMang ||
            GameCfg.GameType == pb.GameType.DingXiang ||
            GameCfg.GameType == pb.GameType.QiHuo ||
            GameCfg.GameType == pb.GameType.JJ_PK ||
            GameCfg.GameType == pb.GameType.JJ_DuoKong ||
            GameCfg.GameType == pb.GameType.JJ_ChuangGuan ||
            GameCfg.GameType == pb.GameType.TiaoJianDan ||
            GameCfg.JJ_XUNLIAN) {
            for (let i = 1; i <= 6; i++) {
                if (GameCfg.GameSet['isMA' + i]) {
                    GameCfg.MAs[j++] = parseInt(GameCfg.GameSet['MA' + i + 'Date']);
                }
            }
        }

        //指标
        else if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            if (GameCfg.GameSet.select == '均线') {
                if (GameCfg.GameSet.strategy == '股价穿越均线') {
                    GameCfg.MAs.push(GameCfg.GameSet.MA[0]);
                } else if (GameCfg.GameSet.strategy == '均线交叉') {
                    GameCfg.MAs.push(Math.min(GameCfg.GameSet.MA[1], GameCfg.GameSet.MA[2]));
                    GameCfg.MAs.push(Math.max(GameCfg.GameSet.MA[1], GameCfg.GameSet.MA[2]));
                } else if (GameCfg.GameSet.strategy == '组合训练') {
                    let ma = [];
                    ma.push(GameCfg.GameSet.MA[0], GameCfg.GameSet.MA[1], GameCfg.GameSet.MA[2])
                    ma.sort((a, b) => { return a - b; })
                    ma = Array.from(new Set(ma));
                    GameCfg.MAs = ma;
                }
            } else if (GameCfg.GameSet.select == 'MACD') {
                GameCfg.MACD = GameCfg.GameSet.MACD;
                if (GameCfg.GameSet.strategy == 'MACD金叉') {

                } else if (GameCfg.GameSet.strategy == '0轴穿越') {

                } else if (GameCfg.GameSet.strategy == '柱最大值转向') {

                } else if (GameCfg.GameSet.strategy == 'MACD背离') {

                } else if (GameCfg.GameSet.strategy == '经典用法') {

                }

            } else if (GameCfg.GameSet.select == 'BOLL') {
                GameCfg.BOLL = GameCfg.GameSet.BOLL;
                if (GameCfg.GameSet.strategy == '布林带中轨') {

                } else if (GameCfg.GameSet.strategy == '单边突破上轨') {

                } else if (GameCfg.GameSet.strategy == '上下轨间震荡') {

                } else if (GameCfg.GameSet.strategy == '金典用法') {

                }
            } else if (GameCfg.GameSet.select == 'KDJ') {
                GameCfg.KDJ[0] = GameCfg.GameSet.KDJ;
                if (GameCfg.GameSet.strategy == '超买超卖') {

                } else if (GameCfg.GameSet.strategy == 'KDJ金叉') {

                } else if (GameCfg.GameSet.strategy == 'KDJ背离') {

                } else if (GameCfg.GameSet.strategy == '金典用法') {

                }
            } else if (GameCfg.GameSet.select == 'EXPMA') {
                GameCfg.EXPMA = GameCfg.GameSet.EXPMA;
                if (GameCfg.GameSet.strategy == 'EXPMA金叉') {

                } else if (GameCfg.GameSet.strategy == '经典用法') {

                }
            } else if (GameCfg.GameSet.select == 'RSI') {
                GameCfg.RSI = GameCfg.GameSet.RSI;
                if (GameCfg.GameSet.strategy == 'RSI金叉') {

                } else if (GameCfg.GameSet.strategy == '超买超卖') {

                } else if (GameCfg.GameSet.strategy == '经典用法') {

                }
            } else if (GameCfg.GameSet.select == '成交量') {
                //   GameCfg.VOLGraph = GameCfg.GameSet.VOL;
                if (GameCfg.GameSet.strategy == '量柱和均量线') {
                    GameCfg.VOLGraph = GameCfg.GameSet.VOL;
                }
            }
            GameCfg.VOLGraph = GameCfg.GameSet.VOL;
        }
    }

    setColor() {
        //黑底
        if (GameCfg.GameSet.isBW) {
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
        }
        //百地
        else {
            GameCfg.MAColor[0] = new cc.Color().fromHEX('#03004c');
            GameCfg.MAColor[1] = new cc.Color().fromHEX('#f39800');
            GameCfg.MAColor[2] = new cc.Color().fromHEX('#cc33cc');
            GameCfg.MAColor[3] = new cc.Color().fromHEX('#097c25');
            GameCfg.MAColor[4] = new cc.Color().fromHEX('#00a0e9');
            GameCfg.MAColor[5] = new cc.Color().fromHEX('#a0a0a0');

            GameCfg.BOLLColor[0] = cc.Color.BLACK;
            GameCfg.BOLLColor[1] = new cc.Color().fromHEX('#f39800');
            GameCfg.BOLLColor[2] = new cc.Color().fromHEX('#cc33cc');

            GameCfg.VOLColor[0] = new cc.Color().fromHEX('#03004c');
            GameCfg.VOLColor[1] = new cc.Color().fromHEX('#f39800');
            GameCfg.tipsDealColor[0] = new cc.Color().fromHEX('#D6F2D0');
            GameCfg.tipsDealColor[1] = new cc.Color().fromHEX('#FDD9DD');

            GameCfg.K_D_J_Line[0] = cc.Color.BLACK;
            GameCfg.K_D_J_Line[1] = new cc.Color().fromHEX('#f39800');
            GameCfg.K_D_J_Line[2] = new cc.Color().fromHEX('#cc33cc');

            GameCfg.DIF_LINE_COL = cc.Color.BLACK;
            GameCfg.DEA_LINE_COL = new cc.Color().fromHEX('#f39800');

            //   GameCfg.MACD_COL[0] = cc.Color.BLACK;
            GameCfg.MACD_COL[0] = new cc.Color().fromHEX('#e2233e');
            GameCfg.MACD_COL[1] = new cc.Color().fromHEX('#00ba50');

            GameCfg.RSI_COLOR[0] = cc.Color.BLACK;
            GameCfg.RSI_COLOR[1] = new cc.Color().fromHEX('#f39800');
            GameCfg.RSI_COLOR[2] = new cc.Color().fromHEX('#cc33cc');

            //GameCfg.CCL_COL = new cc.Color().fromHEX('#808080');
            GameCfg.CCL_COL = cc.Color.BLACK;

            GameCfg.EXPMA_COL[0] = new cc.Color().fromHEX('#03004c');
            GameCfg.EXPMA_COL[1] = new cc.Color().fromHEX('#f39800');
        }
    }

}
