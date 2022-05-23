import LLWConfing from "../common/config/LLWConfing"
import HttpUtils from "../common/net/HttpUtils";
import Socket from "../common/net/Socket";
import { pb } from "../proto/proto";
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
                GameData.smxlState = info.data.smxlState;
                GameData.cgState = info.data.cgState;

                GameData.location = info.data.location || '中国';

                GameData.counters = info.data.counters;
                GameData.todayTimes = info.data.todayTimes;

                GameData.aiStockList = info.data.aiStockList;
                GameData.stockList = info.data.stockList;
                GameData.cgdsStockList = info.data.cgdsStockList;
                GameData.taskStudy = info.data.study || [];
                GameData.taskDaily = info.data.daily || [];

                if (info.data.isEditedNick) {
                    GameData.userName = info.data.nickname;
                }

                GameData.gamedata = info.data;

                if (cc.director.getScene().name == 'login') {
                    LoadUtils.loadScene('hall');

                }

                cb && (cb());
            }




        })



    }
}