
import GameData from "../../../sctiprs/GameData";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Label])
    labs: cc.Label[] = [];

    _curData = null;

    onShow(data) {
        this._curData = data;

        let code = data.code + '';
        let items = ConfUtils.getGPItemInfo(code);
        if (items) {
            this.labs[0].string = items[1];
        }
        if (code.length >= 7) {
            code = code.slice(1);
        }
        this.labs[1].string = code;

        let time = data.orderId;
        // this.labs[2].string = new Date(time).toLocaleDateString();
        // this.labs[3].string = new Date(time).toLocaleTimeString();
        this.labs[2].string = TimeUtils.formatTime(time);
        this.labs[3].string = TimeUtils.getSFMTamp(time);

        this.labs[4].string = (data.price).toFixed(2);
        this.labs[5].string = data.volume;

        //  this.labels[6].string = data.volume;
        //    this.labs[6].string = data.price * data.volume + '';

        if (data.type == pb.OrderType.AskLimit || data.type == pb.OrderType.AskMarket || data.type == pb.OrderType.AskLimit_Cancel) {
            this.labs[6].string = '买入';
        }

        if (data.type == pb.OrderType.BidLimit || data.type == pb.OrderType.BidMarket ||
            data.type == pb.OrderType.BidLimit_Cancel) {
            this.labs[6].string = '卖出';
        }

    }

    onBtnClick(event, data) {

        let name = event.target.name;
        if (name == 'sp_btn_chedan') {
            let id = 0

            if (GameData.SpStockData && GameData.SpStockData.id) {
                id = GameData.SpStockData.id;
            }

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            let info = {
                orderId: this._curData.orderId,
                type: this._curData.type,
                code: this._curData.code,
                uid: GameData.userID,
                id: id,
                node: this._curData.node,
            }

            if (info.type == pb.OrderType.AskLimit) {
                info.type = pb.OrderType.AskLimit_Cancel;
            }
            else if (info.type == pb.OrderType.BidLimit) {
                info.type = pb.OrderType.BidLimit_Cancel;
            }
            console.log(JSON.stringify(info));

          //  let message = pb.CmdStockOrderCancel.create(info);
            let buff = pb.CmdStockOrderCancel.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_Game_OrderCancel, buff, (res) => {
                GlobalEvent.emit(EventCfg.HIDELOADING);
                console.log('删除委托记录' + JSON.stringify(res));
                if (res.err) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err);
                }
                else {
                    this.node.destroy();
                }
            })
        }
    }
}
