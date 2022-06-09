import { pb } from "../../../proto/proto";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";



const { ccclass, property } = cc._decorator;

@ccclass
export default class MnHisItem2 extends cc.Component {

    @property([cc.Label])
    labels: cc.Label[] = [];


    onShow(data) {
        //   [{"orderId":"1628477629","code":1301019,"type":"AskLimit","state":"Done",//"price":44.12,"volume":200,"uid":1000243,"ts":"1628477976","node":100}]}
        let code = data.code + '';

        let items = ConfUtils.getGPItemInfo(code);

        if (items) {
            this.labels[0].string = items[1];
        }

        if (code.length >= 7) {
            code = code.slice(1);
        }

        this.labels[1].string = code;

        let time = data.ts * 1000;

        let ts = TimeUtils.getYMDHMS(time);

        this.labels[2].string = ts.year + '/' + ts.month + '/' + ts.date;
        this.labels[3].string = ts.hours + ':' + ts.minute + ':' + ts.second;

        this.labels[4].string = ComUtils.changeTwoDecimal(data.price) + '';
        this.labels[5].string = ComUtils.changeTwoDecimal(data.volume) + '';
        //  this.labels[6].string = data.volume;

        this.labels[6].string = ComUtils.changeTwoDecimal(data.price * data.volume) + '';
        if (data.type == pb.OrderType.AskLimit || data.type == pb.OrderType.AskMarket) {
            this.labels[7].string = '买入';
        }

        if (data.type == pb.OrderType.BidLimit || data.type == pb.OrderType.BidMarket) {
            this.labels[7].string = '卖出';
        }

        if (data.type == pb.OrderType.BidMarket_Auto) {// 系统自动卖（比如：比赛结束，但玩家的股票账户仍然持
            this.labels[7].string = '系统自动卖';
        }

    }
}
