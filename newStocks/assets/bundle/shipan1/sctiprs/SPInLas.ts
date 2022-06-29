import { pb } from "../../../protos/proto";
import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
import StockData from "../../../sctiprs/StockData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SPInLas extends cc.Component {

    @property([cc.Label])
    MaLabels: cc.Label[] = [];

    @property([cc.Label])
    BollLabels: cc.Label[] = [];

    @property([cc.Label])
    ExpmaLabels: cc.Label[] = [];

    @property([cc.Label])
    MacdLabels: cc.Label[] = [];

    @property([cc.Label])
    KdjLabels: cc.Label[] = [];

    @property([cc.Label])
    RsiLabels: cc.Label[] = [];

    @property(cc.Label)
    CclLabel: cc.Label = null;

    @property(cc.Label)
    VolLabel: cc.Label = null;

    onLoad() {

        GlobalEvent.on(EventCfg.UPDATEINDEXLABEL, (index) => {
            if (this.node.active) {
                this.updateMALabel(index);
                this.updateBollLabel(index);
                this.updateExpmaLabel(index);
                this.updateMacdLabel(index);
                this.updateKdjLabel(index);
                this.updateRsiLabel(index);
                this.updateVolLabel(index);
                this.updateCclLabel(index);
            }
        }, this);

        GlobalEvent.on(EventCfg.CUTKTYPE, (type) => {
            if (type == pb.KType.Min) {
                this.node.children.forEach(el => {
                    el.active = false;
                })
            }
            else {
                this.cutIndex();
                this.updateMALabel();
                this.updateBollLabel();
                this.updateExpmaLabel();
                this.updateMacdLabel();
                this.updateKdjLabel();
                this.updateRsiLabel();
                this.updateVolLabel();
                this.updateCclLabel();
            }
        }, this);

        GlobalEvent.on(EventCfg.CUTINDEX, this.cutIndex.bind(this), this);
    }

    cutIndex() {
        this.MaLabels[0].node.parent.active = StockData.showIndex[0] == 'MA';
        this.BollLabels[0].node.parent.active = StockData.showIndex[0] == 'BOLL';
        this.ExpmaLabels[0].node.parent.active = StockData.showIndex[0] == 'EXPMA';

        this.MacdLabels[0].node.parent.active = StockData.showIndex[1] == 'MACD';
        this.KdjLabels[0].node.parent.active = StockData.showIndex[1] == 'KDJ';
        this.RsiLabels[0].node.parent.active = StockData.showIndex[1] == 'RSI';
        this.CclLabel.node.parent.active = StockData.showIndex[1] == 'CCL';
        this.VolLabel.node.active = StockData.showIndex[1] == 'VOL';
    }

    updateMALabel(index?) {

        index = index ? index : DrawData.MaList.length - 1;

        if (DrawData.MaList[index]) {
            this.MaLabels.forEach((el, t) => {
                if (DrawData.MaList[index][t]) {

                    if (GameCfg.GameType == pb.GameType.QiHuo) {
                        el.string = ' MA' + GameCfg.MAs[t] + ': ' + DrawData.MaList[index][t].toFixed(2);
                    } else {
                        el.string = 'MA' + GameCfg.MAs[t] + ': ' + DrawData.MaList[index][t].toFixed(2);
                    }
                }
            })
        }
    }

    updateBollLabel(index?) {

        index = index ? index : DrawData.BollList.length - 1;

        let arr = ['BOLL(' + GameCfg.BOLL[0] + ') BOLL', 'UB', 'LB'];
        if (DrawData.BollList[index]) {
            this.BollLabels.forEach((el, t) => {
                if (DrawData.BollList[index][t]) {
                    el.string = arr[t] + ': ' + DrawData.BollList[index][t].toFixed(2);
                }
            })
        }
    }

    updateExpmaLabel(index?) {

        index = index ? index : DrawData.EXPMA1.length - 1;

        if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            let arr = ['EXPMA(' + GameCfg.EXPMA[0] + ',' + GameCfg.EXPMA[1] + ') EXP1: ', ' EXP2: '];
            this.ExpmaLabels[0].string = arr[0] + (DrawData.EXPMA1[index]).toFixed(2);
            this.ExpmaLabels[1].string = arr[1] + (DrawData.EXPMA2[index]).toFixed(2);
        }
    }

    updateMacdLabel(index?) {

        index = index ? index : DrawData.MACDList.length - 1;

        let arr = ['MACD(' + GameCfg.MACD[0] + ',' + GameCfg.MACD[1] + ',' + GameCfg.MACD[2] + ') DIF', 'DEA', 'MACD'];

        if (DrawData.DIFList[index]) {
            this.MacdLabels[0].string = arr[0] + ': ' + DrawData.DIFList[index].toFixed(2);
        }

        if (DrawData.DEAList[index]) {
            this.MacdLabels[1].string = arr[1] + ': ' + DrawData.DEAList[index].toFixed(2);
        }

        if (DrawData.MACDList[index]) {
            this.MacdLabels[2].string = arr[2] + ': ' + DrawData.MACDList[index].toFixed(2);
        }
    }

    updateKdjLabel(index?) {

        index = index ? index : DrawData.KList.length - 1;

        let arr1 = ['KDJ(' + GameCfg.KDJ[0] + ',' + GameCfg.KDJ[1] + ',' + GameCfg.KDJ[2] + ') K', 'D', 'J'];

        if (DrawData.KList[index]) {
            this.KdjLabels[0].string = arr1[0] + ': ' + DrawData.KList[index].toFixed(2);
        }

        if (DrawData.DList[index]) {
            this.KdjLabels[1].string = arr1[1] + ': ' + DrawData.DList[index].toFixed(2);
        }

        if (DrawData.JList[index]) {
            this.KdjLabels[2].string = arr1[2] + ': ' + DrawData.JList[index].toFixed(2);
        }
    }

    updateRsiLabel(index?) {

        index = index ? index : DrawData.Rs6.length - 1;

        let arr2 = ['RSI(' + GameCfg.RSI[0] + ',' + GameCfg.RSI[1] + ',' + GameCfg.RSI[2] + ') RSI1', 'RSI2', 'RSI3'];

        if (DrawData.Rs6[index]) {
            this.RsiLabels[0].string = arr2[0] + ': ' + DrawData.Rs6[index].toFixed(2);
        }

        if (DrawData.Rs12[index]) {
            this.RsiLabels[1].string = arr2[1] + ': ' + DrawData.Rs12[index].toFixed(2);
        }

        if (DrawData.Rs24[index]) {
            this.RsiLabels[2].string = arr2[2] + ': ' + DrawData.Rs24[index].toFixed(2);
        }
    }

    updateVolLabel(index?) {

        index = index ? index : GameCfg.data[0].data.length - 1;

        if (GameCfg.data[0].data[index]) {
            let value = parseFloat(GameCfg.data[0].data[index].value);
            this.VolLabel.string = 'VOL(' + GameCfg.VOLGraph[0] + ',' + GameCfg.VOLGraph[1] + '):' + value;
        }
    }

    updateCclLabel(index?) {

        index = index ? index : GameCfg.data[0].data.length - 1;

        if (GameCfg.GameType == pb.GameType.QiHuo) {
            if (GameCfg.data[0].data[index]) {
                this.CclLabel.string = 'CCL:' + GameCfg.data[0].data[index].ccl_hold;
            }
        }
    }

    start() {
        this.MaLabels.forEach((el, i) => {
            el.node.color = GameCfg.MAColor[i];
        })
    }

    protected onDestroy(): void {
        GlobalEvent.off(EventCfg.UPDATEINDEXLABEL);
        GlobalEvent.off(EventCfg.CUTKTYPE);
        GlobalEvent.off(EventCfg.CUTINDEX);
    }


}
