import { pb } from "../proto/proto"
import GameCfg from "./GameCfg";

export default {

    getStockQuotes(obj, cb) {

        let message = pb.CmdQuoteQuery.create(obj);
        let buff = pb.CmdQuoteQuery.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_QuoteQuery, buff, info => {

            if (!info.items || info.items.length <= 0) {
                console.log('获取的行情为空:' + JSON.stringify(obj));
                GameCfg.GAMEFUPAN = false;
                cb && (cb(0));
                return;
            }

            info.items.forEach((el) => {
                let time = (el.timestamp + '').slice(0, 4) + '-' + (el.timestamp + '').slice(4, 6) + '-' + (el.timestamp + '').slice(6);
                let data = {
                    day: time || 0,
                    open: el.open || 0,
                    close: el.price || 0,
                    high: el.high || 0,
                    low: el.low || 0,
                    price: el.amount || 0,
                    value: el.volume || 0,
                    Rate: (el.volume / GameCfg.data[0].circulate) * 100
                };
                if (GameCfg.data[0].circulate == 0) {
                    data.Rate = 1;
                }
                GameCfg.data[0].data.push(data);
            })

            console.log('获取的行情长度：' + info.items.length);

            cb && (cb(1));
        })
    }
}