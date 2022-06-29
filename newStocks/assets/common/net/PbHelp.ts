import { pb } from "../../protos/proto"
import GameData from "../../sctiprs/GameData";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";


export default {

    selectProtoBlackData(id, buff) {


        switch (id) {
            case pb.MessageId.Rep_Game_Login:
                return pb.CmdGameLoginReply.decode(new Uint8Array(buff));
                break;

            case pb.MessageId.Rep_QuoteQuery:
                {
                    let data = pb.Quotes.decode(new Uint8Array(buff));
                    if (data.items.length == 1) {
                        GlobalEvent.emit(EventCfg.CMDQUOTITEM, data);
                    }
                    return data;
                }
                break;

            //跟新玩家属性
            case pb.MessageId.Sync_S2C_GameProperty:
                {
                    let decode = pb.GameProperties.decode(new Uint8Array(buff));
                    for (let i = 0; i < decode.items.length; i++) {
                        GameData.properties[decode.items[i].id] = decode.items[i].newValue;
                        console.log('id:' + decode.items[i].id + '   ' + 'value:' + decode.items[i].newValue);
                    }
                    console.log('更新属性:' + JSON.stringify(decode));

                    GameData.properties = GameData.properties;
                }
                break;

            //同步游戏计数器
            case pb.MessageId.Sync_S2C_GameCounter:
                {
                    let decode = pb.GameCounters.decode(new Uint8Array(buff));
                    console.log('同步输赢计数器：GameCounters' + JSON.stringify(decode));
                    GameData.GameCounters = decode.items;
                    GlobalEvent.emit(EventCfg.GMAECOUNTERSCHANGE);
                }
                break;

            //当日首次登陆
            case pb.MessageId.Sync_S2C_FirstLoginToday:
                {
                    console.log('首次登入');
                    GameData.firstGame = true;
                }
                break;

            case pb.MessageId.Rep_Game_Start:
            case pb.MessageId.Rep_Hall_EditIcon:
            case pb.MessageId.Rep_Hall_EditNick:
            case pb.MessageId.Rep_Hall_EditLocation:
            case pb.MessageId.Rep_Hall_EditGender:
            case pb.MessageId.Rep_Hall_UploadIcon:
            case pb.MessageId.Rep_Game_SmxlReset:
            case pb.MessageId.Rep_Hall_ResetGameCounter:
            case pb.MessageId.Rep_Hall_GetItem:
            case pb.MessageId.Rep_Game_CgsGetStageAward:
            case pb.MessageId.Rep_Game_OrderCancel:
            case pb.MessageId.Rep_Hall_MobileBind:
            case pb.MessageId.Rep_Hall_UnlockGame:
            case pb.MessageId.Rep_Hall_Exchange:
            case pb.MessageId.Rep_Hall_GetInviterAward:
            case pb.MessageId.Rep_Hall_GetDailyTaskAward:
                {
                    return pb.ErrorInfo.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_Game_QueryGameResult:
                {
                    return pb.CmdQueryGameResultReply.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_Game_SmxlReport:
                {
                    return pb.CmdGetSmxlReportReply.decode(new Uint8Array(buff));
                }
                break;

            //期货行情
            case pb.MessageId.Rep_QuoteQueryFuture:
                {
                    return pb.QuotesFuture.decode(new Uint8Array(buff));
                }
                break;

            //同步双盲训练状态
            case pb.MessageId.Sync_S2C_GameSmxl:
                {
                    let data = pb.SmxlState.decode(new Uint8Array(buff));
                    console.log('同步双盲训练状态' + JSON.stringify(data));
                    GameData.SmxlState = data;
                }
                break;

            // 当日游戏次数计数器
            case pb.MessageId.Sync_S2C_GameTimes:
                {
                    let data = pb.TodayGameTimes.decode(new Uint8Array(buff));
                    console.log('当日游戏次数计数器:' + JSON.stringify(data));
                    GameData.todayGameCount = data.counter;
                    GlobalEvent.emit(EventCfg.GMAECOUNTERSCHANGE);
                }
                break;

            case pb.MessageId.Rep_Game_GetGameOperation:
                {
                    return pb.GameOperations.decode(new Uint8Array(buff));
                }
                break;

            ////进入房间应答
            case pb.MessageId.Rep_Room_Enter:
                {
                    return pb.CmdRoomEnterReply.decode(new Uint8Array(buff));
                }
                break;

            ////自己进入房间（客户端收到自己进入房间的消息，将玩家拉入房间）
            case pb.MessageId.Sync_Room_Enter_Self:
                {
                    let data = pb.RoomData.decode(new Uint8Array(buff));
                    console.log('拉入房间' + data.auto + '   ' + data.creator);
                    if (data.auto) {
                        if (GameData.userID == data.creator) {
                            GameData.RoomType = 1;
                        }
                        else {
                            GameData.RoomType = 2;
                        }
                    }

                    if (data.game == pb.GameType.JJ_PK || data.game == pb.GameType.JJ_DuoKong) {

                        let RoomGameData = pb.RoomGameData;
                        let message = RoomGameData.decode(new Uint8Array(buff));
                        console.log('房间ID' + JSON.stringify(GameData.roomId));
                        console.log('自己进入房间' + JSON.stringify(message));
                        //断线拉入
                        if (!GameData.roomId) {
                            GameData.selfEnterRoomData = message;
                        }

                        //创建、加入
                        else {
                            GlobalEvent.emit(EventCfg.RoomGameDataing, message)
                        }
                    }
                }
                break;

            //其他玩家进入房间：SyncRoomEnter
            case pb.MessageId.Sync_Room_Enter:
                {
                    GameData.leaveUid = null;
                    let data = pb.SyncRoomEnter.decode(new Uint8Array(buff));
                    console.log('其他玩家进入房间:' + JSON.stringify(data));
                    GlobalEvent.emit(EventCfg.RoomGameDataOther, data);
                }
                break;

            //玩家离开房间
            case pb.MessageId.Sync_Room_Leave:
            case pb.MessageId.Sync_Room_Leave_Self:
                {
                    let data = pb.SyncRoomLeave.decode(new Uint8Array(buff));
                    console.log('玩家离开房间' + JSON.stringify(data));
                    if (data.uid == GameData.userID) {
                        // GameData.roomId = 0;
                        // GameData.jjCapital = 0;
                        //   GameData.Players = [];
                    }
                    else {
                        GameData.leaveUid = data.uid;
                    }
                    GlobalEvent.emit(EventCfg.ROOMLEAVE, data);
                }
                break;

            //  获取背包列表应答：Backbag
            case pb.MessageId.Rep_Hall_BackBag:
                {
                    return pb.Backbag.decode(new Uint8Array(buff));
                }
                break;

            //玩家准备
            case pb.MessageId.Sync_Room_Ready:
                {
                    let data = pb.RoomPlayerStatus.decode(new Uint8Array(buff));
                    console.log('玩家准备:' + JSON.stringify(data));
                    GlobalEvent.emit(EventCfg.ROOMPLAYERSTATUS, data);
                }
                break;

            //同步房间状态
            case pb.MessageId.Sync_Room_GameStatus:
                {
                    let data = pb.RoomGameStatus.decode(new Uint8Array(buff));
                    console.log('同步房间游戏状态' + JSON.stringify(data));
                    GlobalEvent.emit(EventCfg.RoomGameStatus, data);
                }
                break;

            case pb.MessageId.Sync_Room_ReConn:
                {
                    let data = pb.RoomData.decode(new Uint8Array(buff));
                    console.log(' 重连上' + JSON.stringify(data));
                }
                break;

            //同步游戏操作
            case pb.MessageId.Sync_Room_GameOp:
                {
                    let data = pb.RoomGameOp.decode(new Uint8Array(buff));

                    let ops = pb.GameOperations.decode(new Uint8Array(data.ops));

                    if (GameData.userID != data.id) {

                        UpGameOpt.UpdataOtherPlayerOpt(ops);

                        GlobalEvent.emit(EventCfg.UPDATEOTHERPLAYEROPT, ops);
                    }
                }
                break;

            //游戏结果
            case pb.MessageId.Sync_Room_GameResult:
                {
                    let data1 = pb.RoomGameResult.decode(new Uint8Array(buff));
                    let RoomGameData = pb.RoomGameData;
                    let result = RoomGameData.decode(new Uint8Array(data1.result));
                    console.log('游戏结果' + JSON.stringify(result));
                    GameCfg.RoomGameData = result;
                    GlobalEvent.emit(EventCfg.GAMEOVEER);
                }
                break;

            //离开游戏
            case pb.MessageId.Rep_Room_Leave:
                {
                    return pb.CmdRoomLeaveReply.decode(new Uint8Array(buff));
                    console.log('离开房间应答' + JSON.stringify(data));
                }
                break;

            //查询当前一轮闯关赛配置数据应答：CgsConf
            case pb.MessageId.Rep_Game_CgsGetConf:
                {
                    return pb.CgsConf.decode(new Uint8Array(buff));
                }
                break;

            //闯关赛通关排行应答
            //闯关赛关卡排行应答
            //闯关赛排行榜应答
            case pb.MessageId.Rep_Game_CgsGetClearanceRank:
            case pb.MessageId.Rep_Game_CgsGetStageRank:
            case pb.MessageId.Rep_Game_CgsGetSeasonRank:
            // 查询等级排行应答：RankingList
            //查询威望排行应答：RankingList
            // 查询威望周排行应答：RankingList
            // 获取炒股大赛排行榜应答
            // 查询闯关赛排行榜应答
            case pb.MessageId.Rep_Hall_GetFameRanking:
            case pb.MessageId.Rep_Hall_GetFameRankingWeekly:
            case pb.MessageId.Rep_Hall_GetLevelRanking:
            case pb.MessageId.Rep_Game_CgsGetSeasonRank:
            case pb.MessageId.Rep_Game_CgdsRanking:
                {
                    return pb.RankingList.decode(new Uint8Array(buff));
                }
                break;

            //同步闯关赛游戏数据
            case pb.MessageId.Sync_S2C_GameCg_GD:
                {
                    let data = pb.JjGame.decode(new Uint8Array(buff));
                    GlobalEvent.emit(EventCfg.GETCGSDATA, data);
                }
                break;

            case pb.MessageId.Sync_S2C_GameCg:
                {
                    let data = pb.CgState.decode(new Uint8Array(buff));
                    GameData.cgState = data;
                }
                break;

            case pb.MessageId.Rep_Room_Create:
                {
                    return pb.CmdRoomCreateReply.decode(new Uint8Array(buff));

                }
                break;

            ////服务器发到客户端的消息（包括邀请或聊天消息）：Notice
            case pb.MessageId.Sync_C2S_Message:
            case pb.MessageId.Sync_S2C_Broadcast:
                {
                    let data = pb.Notice.decode(new Uint8Array(buff));
                    console.log('服务器发到客户端的消息');

                    GlobalEvent.emit(EventCfg.INVITEMESSAGE, data);
                }
                break;

            // 准备就绪应答（无）
            // 领取每日看广告奖励应答：无
            //关注/删除股票应答：无
            //保存学习任务进度应答：无
            case pb.MessageId.Rep_Room_Ready:
            case pb.MessageId.Rep_Hall_GetDailyAdAward:
            case pb.MessageId.Rep_Game_MncgEditStockList:
            case pb.MessageId.Rep_Hall_SaveStudyProgress:
                {

                }
                break;

            //查询AI选股的股票列表响应：
            case pb.MessageId.Rep_QueryAiStockList:
                {
                    return pb.CmdQueryAiStockListReply.decode(new Uint8Array(buff));
                }
                break;

            //股票的买卖信号
            case pb.MessageId.Rep_QueryAiSignal:
                {
                    let data = pb.CmdQueryAiSignalReply.decode(new Uint8Array(buff));
                    GlobalEvent.emit('AISIGNAL', data);
                    return data;
                }
                break;

            case pb.MessageId.Sync_S2C_GameMncg:
                {
                    let data = pb.MncgState.decode(new Uint8Array(buff));
                    console.log('同步模拟炒股状态' + JSON.stringify(data));
                    GameData.mncgDataList = data;
                    GlobalEvent.emit(EventCfg.CHANGEMNCGACCOUNT);
                }
                break;

            //   同步实时行情
            case pb.MessageId.Sync_S2C_QuoteItem:
                {
                    let data = pb.QuoteItem.decode(new Uint8Array(buff));
                    console.log('同步实时行情' + JSON.stringify(data));
                    GlobalEvent.emit(EventCfg.SYNCQUOTEITEM, data);
                }
                break;

            //	// 金币和资产互相兑换应答
            case pb.MessageId.Rep_Game_MncgExchange:
                {
                    return pb.CmdMncgExchangeReply.decode(new Uint8Array(buff));
                }
                break;

            //交易记录
            case pb.MessageId.Rep_Game_OrderQuery:
                {
                    return pb.StockOrderList.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_QuoteSubscribe:
                {

                }
                break;

            case pb.MessageId.Rep_Game_Order:
                {
                    return pb.CmdStockOrderReply.decode(new Uint8Array(buff));
                }
                break;

            //获取炒股大赛列表应答
            case pb.MessageId.Rep_Game_CgdsList:
                {
                    return pb.CgdsList.decode(new Uint8Array(buff));
                }
                break;

            //报名炒股大赛
            case pb.MessageId.Rep_Game_CgdsReg:
                {
                    return pb.CmdCgdsRegReply.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_Game_CgdsRanking:
                {
                    return pb.RankingList.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Sync_S2C_GameCgds:
                {
                    GameData.cgdsStateList = pb.CgdsState.decode(new Uint8Array(buff)).items;
                    console.log('同步所有炒股大赛状态' + JSON.stringify(GameData.cgdsStateList));
                }
                break;

            case pb.MessageId.Sync_S2C_GameCgdsItem:
                {
                    let data = pb.CgdsStateItem.decode(new Uint8Array(buff));
                    console.log('同步一条炒股大赛状态' + JSON.stringify(data));

                    for (let i = 0; i < GameData.cgdsStateList.length; i++) {
                        if (GameData.cgdsStateList[i].id == data.id) {
                            GameData.cgdsStateList[i] = data;
                            break;
                        }
                    }
                    GlobalEvent.emit(EventCfg.CHANGEMNCGACCOUNT);
                }
                break;

            case pb.MessageId.Sync_S2C_TaskProgress:
                {
                    let data = pb.TaskItem.decode(new Uint8Array(buff));
                    console.log('同步任务进度及奖励' + JSON.stringify(data));
                    GameData.gameData.tasks.daily[data.taskId] = data;
                    GlobalEvent.emit('UPDATETASKDATA');
                }
                break;

            case pb.MessageId.Rep_Hall_QueryPlayer:
                {
                    let data = pb.PlayerInfo.decode(new Uint8Array(buff))
                    GlobalEvent.emit('REPPLAYERINFO', data);
                    return data;
                }
                break;

            case pb.MessageId.Rep_Hall_ShopOrder:
                {
                    return pb.CmdShopOrderReply.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_Game_Over:
                {
                    return pb.CmdGameOverReply.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_Hall_GetBrokenAward:
                {

                }
                break;

            case pb.MessageId.Sync_S2C_GoldAwardPrompt:
                {
                    let data = pb.CmdGoldAwardPrompt.decode(new Uint8Array(buff));
                    console.log('领取奖励：' + JSON.stringify(data));
                    GameData.goldAwardPrompt = data;
                    GlobalEvent.emit('CmdGoldAwardPrompt', data);
                }
                break;

            case pb.MessageId.Rep_Hall_GetWeeklyAward:
                {
                    return pb.CmdGetWeeklyAwardReply.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_Hall_QueryEventLog:
                {
                    return pb.Events.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Rep_Hall_Get7Award:
                {
                    return null;
                }
                break;


            case pb.MessageId.Rep_Hall_GetActivityLogs:
                {
                    return pb.ActivityLogs.decode(new Uint8Array(buff));
                }
                break;

            case pb.MessageId.Sync_S2C_ActivityConf:
                {
                    let data = pb.ActivityConf.decode(new Uint8Array(buff));
                    console.log('活动配置' + JSON.stringify(data));
                    GameData.activityConf = data.items;
                }
                break;

            case pb.MessageId.Sync_S2C_InviterState:
                {
                    let data = pb.InviterState.decode(new Uint8Array(buff));
                    console.log('同步邀请者:' + JSON.stringify(data));
                    GameData.gameData.inviterState = data;
                    GlobalEvent.emit('INVITEUP');
                }
                break;

        }
    }
}