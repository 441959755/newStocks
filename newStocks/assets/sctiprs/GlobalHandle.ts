import HttpMgr from '../sctiprs/HttpMgr'
import { pb } from "../protos/proto"
import GameCfg from "./GameCfg";
import GlobalEvent from './utils/GlobalEvent';
import EventCfg from './utils/EventCfg';
import TimeUtils from './utils/TimeUtils';
import GameData from './GameData';
import StockData from './StockData';
import DrawData from './DrawData';


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


    getHttpGPData(type, code, le?, call?) {
        if (!le) {
            le = 200;
        }
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
        HttpMgr.getGPData(data, (res) => {

            if (!res || res.length <= 0) {
                console.log(' getHttpGPData res is null:' + JSON.stringify(res));
                return;
            }


            if (res.length > le) {
                res = res.slice(res.length - le, res.length);
            }

            call && (call(type, res))

        })


    },

    enterGameSetout(data, call, flag?) {

        if (!flag) {
            //游戏开始
            console.log('游戏开始');
            this.onCmdGameStartReq(() => {
                console.log('游戏行情获取');
                if (GameCfg.GameType == pb.GameType.QiHuo) {
                    this.onCmdGameStartQuoteQueryQH(data, call)
                }
                else {
                    //游戏行情获取
                    this.getStockQuotes(data, call)
                }

            });
        }
        else {
            //游戏行情获取
            this.getStockQuotes(data, call)
        }
    },

    //游戏开始发送游戏类型
    onCmdGameStartReq(cb?) {

        console.log('游戏开始发送游戏类型');

        let info = {
            game: GameCfg.GameType,
            isJunxian: false,
        }

        console.log('游戏开始发送游戏类型' + GameCfg.GameType);

        if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            if (GameCfg.GameSet.select == '均线') {
                info.isJunxian = true;
            }
        }

        let CmdGameStart = pb.CmdGameStart;
        let message = CmdGameStart.create(info)
        let buff = CmdGameStart.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_Start, buff, res => {

            console.log(JSON.stringify(res));

            if (res.err) {
                GlobalEvent.emit(EventCfg.HIDELOADING);
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err);
                return;
            }

            cb && (cb(res));
        })

    },

    getStockQuotesQH(da, cb?) {

        let data = JSON.parse(JSON.stringify(da));

        if (data.ktype == pb.KType.Min60) {
            data.total *= 12;
            data.ktype = pb.KType.Min5;
            data.from = TimeUtils.getTimestamp(data.from);
            data.reserve *= 12;
        } else if (data.ktype == pb.KType.Min30) {
            data.total *= 6;
            data.ktype = pb.KType.Min5;
            data.reserve *= 6;
            data.from = TimeUtils.getTimestamp(data.from);
        } else if (data.ktype == pb.KType.Min15) {
            data.total *= 3;
            data.ktype = pb.KType.Min5;
            data.reserve *= 3;
            data.from = TimeUtils.getTimestamp(data.from);
        }

        let count = data.total;

        if (data.total > 2000) {
            data.total = 2000;
        }

        let message = pb.CmdQuoteQuery.create(data);
        let buff = pb.CmdQuoteQuery.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_QuoteQueryFuture, buff, info => {

            if (!info.items || info.items.length <= 0) {
                console.log('获取的行情为空');
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '获取的行情为空' + JSON.stringify(data));
                GameCfg.GAMEFUPAN = false;
                GlobalEvent.emit(EventCfg.HIDELOADING);

                return;
            }

            info.items.forEach((el) => {

                let data1 = {
                    day: el.timestamp + '',
                    open: el.open || 0,
                    close: el.close || 0,
                    high: el.high || 0,
                    low: el.low || 0,
                    value: el.volume || 0,
                    ccl_hold: el.cclHold || 0,
                };
                GameCfg.data[0].data.push(data1);
            });

            if (count > 2000 && info.items.length == 2000) {

                let data1 = data;

                data1.reserve = 0;

                data1.from = GameCfg.data[0].data[GameCfg.data[0].data.length - 1].day;

                this.getRemainData(count - 2000, data1, cb, da.ktype);
            }
            else {
                let qhHQ = GameCfg.data[0].data;

                if (da.ktype == pb.KType.Min5) {
                    DrawData.arrMin5 = qhHQ;
                } else if (da.ktype == pb.KType.Day) {
                    DrawData.arrDay = qhHQ;
                }
                else {
                    let t
                    if (da.ktype == pb.KType.Min15) {
                        t = 3;
                        DrawData.arrMin5 = qhHQ;
                    } else if (da.ktype == pb.KType.Min30) {
                        t = 6;
                        DrawData.arrMin5 = qhHQ;
                    } else if (da.ktype == pb.KType.Min60) {
                        t = 12;
                        DrawData.arrMin5 = qhHQ;
                    }
                    qhHQ = DrawData.dataChange(qhHQ[qhHQ.length - 1].day, t, qhHQ);
                }

                GameCfg.data[0].data = qhHQ;
                console.log(JSON.stringify('期货' + JSON.stringify(qhHQ)));
                console.log(qhHQ.length);

                cb && (cb());
            }
        })
    },

    //上传房间游戏操作
    onUpRoomGameOp(ops) {

        if (!ops) { return }

        let GameOperations = pb.GameOperations;
        let data1 = GameOperations.create(ops);
        let buff1 = GameOperations.encode(data1).finish();

        let data = {
            id: GameData.roomId,
            uid: GameData.userID,
            ops: buff1,
        }

        let RoomGameOp = pb.RoomGameOp;
        let message = RoomGameOp.create(data);
        let buff = RoomGameOp.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Sync_Room_GameOp, buff, (res) => {
            console.log('上传房间游戏操作' + JSON.stringify(res));
        })

    },

    // 查询游戏操作步骤
    GetGameOperations(data, cb?) {

        let CmdGetGameOperations = pb.CmdGetGameOperations;
        let message = CmdGetGameOperations.create(data)
        let buff = CmdGetGameOperations.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_GetGameOperation, buff, (info) => {
            console.log('操作步骤' + JSON.stringify(info));

            if (!info.err) {

                if (info && info.items) {

                    StockData.player1Opt = info.items;

                    if (cb) {
                        cb(info.junXian);
                    }
                }
            }
        })
    },

    //离开房间：CmdRoomLeave
    onReqRoomLeave(call?) {

        if (GameData.userID) {

            let data = {
                id: GameData.roomId,
                uid: GameData.userID,
            }

            let CmdRoomLeave = pb.CmdRoomLeave;
            let message = CmdRoomLeave.create(data);
            let bufff = CmdRoomLeave.encode(message).finish();

            (<any>window).socket.send(pb.MessageId.Req_Room_Leave, bufff, (res) => {
                console.log('离开房间：' + JSON.stringify(res));
                call && call(res);
            })

            GameData.Players = [];
            GameData.Players.length = 0;
            GameData.RoomType = 0;
            GameData.roomId = 0;
        }

        else {
            console.log('err: GameData userID is null');
            call && call();
        }
    },

    //游戏结束
    onCmdGameOverReq(datas, cb?) {
        console.log('上传游戏数据' + JSON.stringify(datas));

        let CmdGameOver = pb.CmdGameOver;
        let message = CmdGameOver.create(datas);
        let buff = CmdGameOver.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_Over, buff, (info) => {
            cb && (cb(info.ts));
            console.log('GameOverInfo' + JSON.stringify(info));
        })

    },


    //在线邀请
    onLineInvite() {
        let str;
        if (GameCfg.GameType == pb.GameType.JJ_PK) {
            str = 'PK大战';
        } else if (GameCfg.GameType == pb.GameType.JJ_DuoKong) {
            str = '多空大战';
        }
        let info = {
            sender: GameData.userID,
            receiver: GameData.roomId,
            type: pb.MessageType.RoomInvite,
            text: GameData.userName + ',' + str + ',' + GameData.roomId + ',' + GameData.JJCapital,
            ts: parseInt(new Date().getTime() / 1000 + ''),
        }

        let Notice = pb.Notice;
        let message = Notice.create(info);
        let buff = Notice.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Sync_C2S_Message, buff, (res) => {
            console.log('在线邀请：' + JSON.stringify(res));

        })
    }

}