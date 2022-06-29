
import { pb } from "../../../protos/proto";
import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import StockData from "../../../sctiprs/StockData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";
import ZnzgControl from "./ZnzgControl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgDrawControl extends cc.Component {

    @property([cc.Label])
    topLabels: cc.Label[] = [];

    @property(cc.Label)
    uLabel: cc.Label = null;

    @property(cc.Node)
    drawBox: cc.Node = null;

    @property([cc.Toggle])
    toggles: cc.Toggle[] = [];

    @property(cc.Node)
    mask: cc.Node = null;

    @property([cc.Node])
    BGrap: cc.Node[] = [];

    @property(cc.Node)
    selectNode: cc.Node = null;

    _timeStamp = null;

    selectBtn(type) {

        if (type == 0) {
            this.mask.active = false;
            this.BGrap[0].active = true;
            this.BGrap[1].active = true;
            this.BGrap[2].active = false;
            this.BGrap[3].active = false;
            this.BGrap[4].active = false;
        }

        else if (type == 1) {
            this.mask.active = true;
            this.BGrap[2].active = true;
            this.BGrap[3].active = false;
            this.BGrap[4].active = false;
        }

        else if (type == 2) {
            this.mask.active = true;
            this.BGrap[2].active = false;
            this.BGrap[3].active = true;
            this.BGrap[4].active = false;
        }

        else if (type == 3) {
            this.mask.active = true;
            this.BGrap[2].active = false;
            this.BGrap[3].active = false;
            this.BGrap[4].active = true;
        }
    }

    onLoad() {

        GlobalEvent.on(EventCfg.SYNCQUOTEITEM, (info) => {
            if (info.code == ZnzgControl.searchCode) {
                if (!this._timeStamp) {
                    this._timeStamp = (info.timestamp + '').slice(2, 4);
                    let le = StockData.gpDataMin.length;

                    if (le > 0) {
                        StockData.amount = info.amount;
                        StockData.volume = info.volume;

                        StockData.gpDataMin.forEach(el => {
                            info.amount -= el.amount;
                            info.volume -= el.volume;
                        })
                    }
                    else {
                        StockData.amount = info.amount;
                        StockData.volume = info.volume;
                    }

                    StockData.gpDataMin.push(info);

                    if (StockData.ktype == pb.KType.Min) {
                        this.onDraw(StockData.gpDataMin);
                    }

                }
                else if (this._timeStamp == ((info.timestamp + '').slice(2, 4))) {
                    let le = StockData.gpDataMin.length;
                    info.amount = (info.amount - StockData.amount);
                    info.volume = (info.volume - StockData.volume);
                    StockData.gpDataMin[le - 1] = info;
                }
                else {
                    this._timeStamp = (info.timestamp + '').slice(2, 4);
                    let a = info.amount;
                    let v = info.volume;
                    info.amount = info.amount - StockData.amount;
                    info.volume = info.volume - StockData.volume;
                    StockData.gpDataMin.push(info);
                    StockData.amount = a;
                    StockData.volume = v;

                    if (StockData.ktype == pb.KType.Min) {
                        this.onDraw(StockData.gpDataMin);
                    }
                }

                this.setTopLabels();
            }
        }, this)

        //更新选择label信息
        GlobalEvent.on('onClickPosUpdateLabel', (index) => {

            if (index < GameCfg.beg_end[0] || index >= GameCfg.beg_end[1]) { return }

            let time, kp, sp, zg, zd, cjl, cje;

            let arr = [];

            if (StockData.ktype == pb.KType.Min) {

                if (StockData.gpDataMin.length <= 0 || !StockData.gpDataMin[index]) {
                    return;
                }

                let tt = StockData.gpDataMin[index].timestamp + '';

                let h, m;
                if (tt.length < 10) {
                    h = tt.slice(0, 2);
                    m = tt.slice(2, 4);
                } else {
                    let t = new Date(StockData.gpDataMin[index].timestamp * 1000);
                    h = t.getHours();
                    m = t.getMinutes();
                }

                let h1 = h >= 10 ? h : '0' + h;
                let m1 = m >= 10 ? m : '0' + m;
                time = h1 + ':' + m1;
                arr = StockData.gpDataMin;


                kp = ComUtils.changeTwoDecimal(arr[index].open);
                cjl = ComUtils.numberConvertUnit(parseInt(arr[index].volume / 100 + '')) + '手';
                cje = ComUtils.numberConvertUnit(arr[index].amount);

                let jg = ComUtils.changeTwoDecimal(StockData.gpDataMin[index].amount / StockData.gpDataMin[index].volume);
                zd = ComUtils.changeTwoDecimal(arr[index].price - arr[index].close);
                let zdf = ComUtils.changeTwoDecimal(zd / arr[index].close * 100);

                this.uLabel.string = time + '    ' + '价格： ' + (kp) + '    ' + '均价：' + jg + '    ' + '涨跌额：' + zd + '    ' + '涨跌幅：' + zdf + '%    ' + '成交量：' + cjl + '    ' + '成交额：' + cje;
                return;
            }
            else if (StockData.ktype == pb.KType.Day) {
                if (StockData.gpDataDay.length <= 0 || !StockData.gpDataDay[index]) {
                    return;
                }
                time = TimeUtils.formatTime(StockData.gpDataDay[index].day);
                arr = StockData.gpDataDay;

                cjl = ComUtils.numberConvertUnit(parseInt(arr[index].value / 100 + '')) + '手';
                cje = ComUtils.numberConvertUnit(arr[index].price);
            }
            else if (StockData.ktype == pb.KType.Day7) {
                if (StockData.gpDataDay7.length <= 0 || !StockData.gpDataDay7[index]) {
                    return;
                }
                time = TimeUtils.formatTime(StockData.gpDataDay7[index].timestamp);
                arr = StockData.gpDataDay7;
                cjl = ComUtils.numberConvertUnit(parseInt(arr[index].volume / 100 + '')) + '手';
                cje = ComUtils.numberConvertUnit(arr[index].amount);
            }
            else {
                if (StockData.gpDataDay30.length <= 0 || !StockData.gpDataDay30[index]) {
                    return;
                }
                time = TimeUtils.formatTime(StockData.gpDataDay30[index].timestamp);
                arr = StockData.gpDataDay30;
                cjl = ComUtils.numberConvertUnit(parseInt(arr[index].volume / 100 + '')) + '手';
                cje = ComUtils.numberConvertUnit(arr[index].amount);
            }
            kp = ComUtils.changeTwoDecimal(arr[index].open);
            sp = ComUtils.changeTwoDecimal(arr[index].close);
            zg = ComUtils.changeTwoDecimal(arr[index].high);
            zd = ComUtils.changeTwoDecimal(arr[index].low);

            this.uLabel.string = time + '    ' + '开盘：' + (kp) + '    ' + '收盘：' + sp + '    ' + '最高：' + zg + '    ' + '最低：' + zd + '    ' + '成交量：' + cjl + '    ' + '成交额：' + cje;
        }, this);


        GlobalEvent.on('selectBtn', this.selectBtn.bind(this), this);

    }

    protected onEnable(): void {

        if (StockData.gpDataMin.length <= 0) {

            this.toggles[2].isChecked = true;
            StockData.ktype = pb.KType.Day;


            GlobalEvent.emit(EventCfg.SHOWLOADING);

            this.getGPDataMin();

            let call = (type, res) => {
                if (type == 'mk') {
                    StockData.gpDataDay30 = res;
                }
                else if (type == 'wk') {
                    StockData.gpDataDay7 = res;
                }
                else if (type == 'k') {
                    StockData.gpDataDay = res;
                }
            }

            GlobalHandle.getHttpGPData('mk', ZnzgControl.searchCode, call);
            GlobalHandle.getHttpGPData('wk', ZnzgControl.searchCode, call);

            this.onDraw(StockData.gpDataDay);


        }

    }

    setTopLabels() {

        this.topLabels[0].string = ZnzgControl.searchName;
        this.topLabels[1].string = ZnzgControl.searchCode;

        let data = StockData.gpDataMin[StockData.gpDataMin.length - 1] || StockData.gpDataDay[StockData.gpDataDay.length - 1];
        let preData = StockData.gpDataMin[0];

        this.topLabels[2].string = ComUtils.changeTwoDecimal(data.price) + '';

        let zf = data.price - preData.price;
        let zfl = (data.price - preData.close) / preData.close * 100;

        this.topLabels[3].string = ComUtils.changeTwoDecimal(zf) + '    ' + ComUtils.changeTwoDecimal(zfl) + '%';
        this.topLabels[4].string = ComUtils.changeTwoDecimal(data.high);
        this.topLabels[5].string = ComUtils.changeTwoDecimal(data.open);

        let zf1 = (data.high - data.low) / preData.close * 100;
        this.topLabels[6].string = ComUtils.changeTwoDecimal(zf1) + '%';
        this.topLabels[7].string = ComUtils.numberConvertUnit(StockData.volume / 100) + '手';

        this.topLabels[8].string = ComUtils.changeTwoDecimal(data.low);
        this.topLabels[9].string = ComUtils.changeTwoDecimal(preData.close);

        let items = ConfUtils.getGPItemInfo(ZnzgControl.searchCode);

        if (items) {
            let hs = StockData.volume / items[4] * 100;
            if (items[4] == 0 || hs > 1) {
                hs = 1;
            }
            this.topLabels[10].string = ComUtils.changeTwoDecimal(hs) + '%';
        }
        else {
            this.topLabels[10].string = 1 + '';
        }

        this.topLabels[11].string = ComUtils.numberConvertUnit(StockData.amount);

        if (zf < 0) {
            this.topLabels[2].node.color = new cc.Color().fromHEX('#31a633');
            this.topLabels[3].node.color = new cc.Color().fromHEX('#31a633');
        }
        else {
            this.topLabels[2].node.color = new cc.Color().fromHEX('#e94343');
            this.topLabels[3].node.color = new cc.Color().fromHEX('#e94343');
        }
    }


    onBtnClick(event, coutromData) {

        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }
    }


    onToggleClick(event, coutromData) {

        let name = event.target.name;

        if (name == 'toggle1') {
            StockData.ktype = pb.KType.Min;
            this.selectNode.active = false;
            this.onDraw(StockData.gpDataMin);
        }

        else if (name == 'toggle2') {
            this.selectNode.active = true;
            StockData.ktype = pb.KType.Day;
            this.onDraw(StockData.gpDataDay);
        }

        else if (name == 'toggle3') {
            this.selectNode.active = true;
            StockData.ktype = pb.KType.Day;
            this.onDraw(StockData.gpDataDay);
        }

        else if (name == 'toggle4') {
            this.selectNode.active = true;
            StockData.ktype = pb.KType.Day7
            this.onDraw(StockData.gpDataDay7);
        }

        else if (name == 'toggle5') {
            this.selectNode.active = true;
            StockData.ktype = pb.KType.Day30
            this.onDraw(StockData.gpDataDay30);
        }
    }

    onDraw(arr?) {

        GlobalEvent.emit(EventCfg.CUTKTYPE, StockData.ktype);

        GameCfg.huizhidatas = arr.length;
        GameData.huizhidatas = arr.length;

        GameCfg.beg_end = [];
        GameCfg.beg_end[1] = GameCfg.huizhidatas;
        GameCfg.beg_end[0] = 0;

        if (GameCfg.huizhidatas > 100) {
            GameCfg.beg_end[0] = GameCfg.beg_end[1] - 100;
        }

        if (StockData.ktype == pb.KType.Min) {
            GameCfg.beg_end[0] = 0;
        }

        let drawWidth = this.drawBox.width;
        GameCfg.hz_width = drawWidth / (GameCfg.beg_end[1] - GameCfg.beg_end[0]);

        GameCfg.hz_width = GameCfg.hz_width > StockData.maxWidth ? StockData.maxWidth : GameCfg.hz_width;

        GameCfg.hz_width = GameCfg.hz_width < StockData.minWidth ? StockData.minWidth : GameCfg.hz_width;

        let arr1 = [];

        if (StockData.ktype == pb.KType.Day) {
            arr1 = arr;
        }
        else {
            arr.forEach((el, index) => {

                let data = {
                    day: el.timestamp,
                    open: el.open || 0,
                    close: el.price || 0,
                    high: el.high || 0,
                    low: el.low || 0,
                    price: el.amount || 0,
                    value: el.volume || 0,
                }

                arr1.push(data);
            })
        }



        if (!arr1 || arr1.length == 0) {
            return;
        }

        DrawData.initDrawData(arr1);

        GlobalEvent.emit('onClickPosUpdateLabel', arr1.length - 1);

        GlobalEvent.emit('onDrawGrap', arr1, StockData.ktype);
    }

    getGPDataMin() {

        let info = {
            ktype: pb.KType.MinToday,
            code: ZnzgControl.searchCode
        };

        let message = pb.CmdQuoteQuery.create(info);
        let buff = pb.CmdQuoteQuery.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_QuoteQuery, buff, ret => {

            GlobalEvent.emit(EventCfg.HIDELOADING);
            if (!ret.items || ret.items.length <= 0) {
                console.log('分时数据为空：' + JSON.stringify(ret));
                return;
            }

            StockData.gpDataMin = ret.items;

            if (StockData.gpDataMin[StockData.gpDataMin.length - 1]) {

                StockData.amount = StockData.gpDataMin[StockData.gpDataMin.length - 1].amount;
                StockData.volume = StockData.gpDataMin[StockData.gpDataMin.length - 1].volume;

                for (let i = StockData.gpDataMin.length - 1; i >= 1; i--) {
                    StockData.gpDataMin[i].amount = StockData.gpDataMin[i].amount - StockData.gpDataMin[i - 1].amount;
                    StockData.gpDataMin[i].volume = StockData.gpDataMin[i].volume - StockData.gpDataMin[i - 1].volume;
                }
            }

            this.setTopLabels();
        })

    }

    protected onDestroy(): void {
        GlobalEvent.off(EventCfg.SYNCQUOTEITEM);
        GlobalEvent.off('onClickPosUpdateLabel');
        GlobalEvent.off('selectBtn');
    }
}
