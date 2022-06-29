import LLWConfing from "../common/config/LLWConfing"
import HttpUtils from "../common/net/HttpUtils";
import { pb } from "../protos/proto";
import GameData from "./GameData";
import LoadUtils from "./utils/LoadUtils";

export default {

    loginHttp(openId, data, call) {

        let url = LLWConfing.LoginUrl + '/l';
        data.websocket = true;
        let message = pb.CmdLogin.create(data);
        let buff = pb.CmdLogin.encode(message).finish();

        buff = buff.buffer.slice(buff.byteOffset, buff.byteLength + buff.byteOffset);

        HttpUtils.sendRequest({ data: buff, url: url, method: 'POST' }).then((ret) => {
            let decode = pb.CmdLoginReply.decode(new Uint8Array(ret));
            decode && (call(decode));
        }, (err) => {
            console.log('loginHttp err:' + err);
        })

    },

    loginSocket(cb) {

        console.log('socket connected');
        let message = pb.CmdGameLogin.create({
            uid: GameData.userID,
            token: GameData.token,
        })

        let buff = pb.CmdGameLogin.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_Login, buff, (info) => {

            console.log('Req_Game_Login:' + JSON.stringify(info));
            if (info && info.data) {
                GameData.userID = info.data.uid;
                GameData.gender = info.data.gender || 0;
                GameData.properties = info.data.properties;
                GameData.smxlState = info.data.smlxState;
                GameData.cgState = info.data.cgState;

                GameData.location = info.data.location || '中国';

                GameData.GameCounters = info.data.counters;
                GameData.todayGameCount = info.data.todayTimes;

                GameData.aiStockList = info.data.aiStockList;
                //  GameData.stockList = info.data.stockList;
                GameData.cgdsStockList = info.data.cgdsStockList;
                GameData.taskStudy = info.data.tasks.study || [];
                GameData.taskDaily = info.data.tasks.daily || [];

                if (info.data.isEditedNick) {
                    GameData.userName = info.data.nickname;
                }

                GameData.gameData = info.data;

                if (cc.director.getScene().name == 'login') {
                    LoadUtils.loadScene('hall');

                }
                cb && (cb());
                (<any>window).socket.onHearbeat();
            }
        })
    },

    getGPData(info, call) {
        let url = 'https://pdfm2.eastmoney.com/EM_UBG_PDTI_Fast/api/js';

        HttpUtils.sendRequest({ data: info, url: url, method: 'GET' }).then((ret) => {
            ret = ret.replace('(', '');
            ret = ret.replace(')', '');

            ret = JSON.parse(ret);
            let data = [];
            ret.data.forEach(el => {
                let arr = el.split(',');
                let da = {
                    timestamp: arr[0],
                    open: parseFloat(arr[1]),
                    price: parseFloat(arr[2]),
                    close: parseFloat(arr[2]),
                    high: parseFloat(arr[3]),
                    low: parseFloat(arr[4]),
                    amount: parseFloat(arr[5]),
                    volume: parseFloat(arr[6]),

                }
                data.push(da);

            });
            call && (call(data));

        }, (err) => {
            console.log('loginHttp err:' + err);
        })
    }

}