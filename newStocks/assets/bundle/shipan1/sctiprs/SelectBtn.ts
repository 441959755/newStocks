import GameCfg from "../../../sctiprs/GameCfg";
import StockData from "../../../sctiprs/StockData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SelectBtn extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    nodeClick: cc.Node = null;

    @property(cc.Node)
    cjl: cc.Node = null;

    @property(cc.Node)
    macd: cc.Node = null;

    @property(cc.Node)
    kdj: cc.Node = null;

    @property(cc.Node)
    rsi: cc.Node = null;

    @property(cc.Node)
    ccl: cc.Node = null;

    type = 0;

    arr = [];

    setLabel() {

        this.cjl.color = cc.Color.WHITE;
        this.macd.color = cc.Color.WHITE;
        this.kdj.color = cc.Color.WHITE;
        this.rsi.color = cc.Color.WHITE;

        this.ccl && (this.ccl.color = cc.Color.WHITE);

        if (this.type == 0) {
            this.label.string = '成交量';
            StockData.showIndex[1] = 'VOL'
            this.cjl.color = cc.Color.RED;
        }

        else if (this.type == 1) {
            this.label.string = 'MACD';
            StockData.showIndex[1] = 'MACD'
            this.macd.color = cc.Color.RED;
        }

        else if (this.type == 2) {
            this.label.string = 'KDJ';
            StockData.showIndex[1] = 'KDJ'
            this.kdj.color = cc.Color.RED;
        }

        else if (this.type == 3) {
            this.label.string = 'RSI';
            StockData.showIndex[1] = 'RSI'
            this.rsi.color = cc.Color.RED;
        }

        else if (this.type == 4) {
            this.label.string = '持仓量';
            StockData.showIndex[1] = 'CCL'
            this.ccl && (this.ccl.color = cc.Color.RED);
        }

        GlobalEvent.emit(EventCfg.CUTINDEX)
    }

    protected onEnable(): void {

        this.arr = [0, 1, 2, 3, 4];
        this.ccl && (this.ccl.active = true);
        this.rsi && (this.rsi.active = true);
        this.kdj && (this.kdj.active = true);
        this.macd && (this.macd.active = true);
        this.cjl && (this.cjl.active = true);

        if (GameCfg.GameType == 'ZNZG') {
            this.ccl && (this.ccl.active = false);
            this.arr.pop();
        }

        this.content.active = false;
        this.setLabel();

    }

    onBtnClick(event, customData) {

        let name = event.target.name;

        if (name == 'SelectBtn') {

            this.type += 1;

            if (this.type >= this.arr.length) {
                this.type = 0;
            }

            GlobalEvent.emit('selectBtn', this.arr[this.type]);
            this.setLabel();
        }

        else if (name == 'btnSlecet') {
            this.content.active = true;
            this.nodeClick.active = true;
        }

        else if (name == 'BtnCPM' || name == 'BtnMACD' || name == 'BtnKDJ' || name == 'BtnRSI') {

            this.type = parseInt(customData);
            GlobalEvent.emit('selectBtn', this.type);
            this.setLabel();
        }

        else if (name == 'nodeClick') {
            this.nodeClick.active = false;
            this.content.active = false;
        }

    }

}
