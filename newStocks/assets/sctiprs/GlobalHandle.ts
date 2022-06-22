import HttpMgr from '../sctiprs/HttpMgr'
import { pb } from "../proto/proto"
import GameCfg from "./GameCfg";
import StockData from './StockData';

export default {


    /**
     * 获取行情
     * @param obj 
     * @param cb 
     */
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
    },

    getHttpGPData(type, code) {
        if ((code + '').length >= 7) {
            code = (code + '').slice(1);
        }

        if (code[0] == 6) {
            code += '1';
        }
        else if (code[0] == 3) {
            code += '2';
        }
        else if (code[0] == 0) {
            code += '2';
        }

        let data = {
            TYPE: type,
            rtntype: 5,
            authorityType: false,
            id: code
        };
        HttpMgr.getGPData(data, res => {

            if (!res || res.length <= 0) {
                console.log(' getHttpGPData res is null:' + JSON.stringify(res));
                return;
            }

            if (res.length > 200) {
                res = res.slice(res.length - 200, res.length);
            }

            if (type == 'mk') {
                StockData.gpDataMonth = res;
            }
            else if (type == 'wk') {
                StockData.gpDataDay7 = res;
            }
            else if (type == 'k') {
                StockData.gpDataDay = res;
            }

        })


    }


}