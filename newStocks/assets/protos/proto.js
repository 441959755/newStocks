// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    /**
     * Constant enum.
     * @name pb.Constant
     * @enum {number}
     * @property {number} Constant_NULL=0 Constant_NULL value
     * @property {number} MsgHead_Len=10 MsgHead_Len value
     * @property {number} MsgMaxBody_Len=1024000 MsgMaxBody_Len value
     */
    pb.Constant = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Constant_NULL"] = 0;
        values[valuesById[10] = "MsgHead_Len"] = 10;
        values[valuesById[1024000] = "MsgMaxBody_Len"] = 1024000;
        return values;
    })();

    /**
     * ErrorCode enum.
     * @name pb.ErrorCode
     * @enum {number}
     * @property {number} CS_OK=0 CS_OK value
     * @property {number} CS_UNKNOW=1 CS_UNKNOW value
     * @property {number} CS_SERVER_ERROR=2 CS_SERVER_ERROR value
     * @property {number} CS_INVALID_PARAMETER=3 CS_INVALID_PARAMETER value
     * @property {number} CS_INVALID_ACCOUNT=4 CS_INVALID_ACCOUNT value
     * @property {number} CS_INVALID_PASSWORD=5 CS_INVALID_PASSWORD value
     * @property {number} CS_TIMEOUT=6 CS_TIMEOUT value
     * @property {number} CS_CHECK_FAILURE=7 CS_CHECK_FAILURE value
     * @property {number} CS_CHECK_FAILURE_CAPITAL=8 CS_CHECK_FAILURE_CAPITAL value
     * @property {number} CS_CHECK_FAILURE_STOCK=9 CS_CHECK_FAILURE_STOCK value
     * @property {number} CS_CHECK_FAILURE_ORDER=10 CS_CHECK_FAILURE_ORDER value
     * @property {number} CS_NO_TRADING_TIME=11 CS_NO_TRADING_TIME value
     * @property {number} CS_NO_REGISTRY_TIME=12 CS_NO_REGISTRY_TIME value
     * @property {number} CS_NO_REGISTRY=13 CS_NO_REGISTRY value
     * @property {number} CS_ALREADY_REGISTRY=14 CS_ALREADY_REGISTRY value
     * @property {number} CS_CHECK_FAILURE_CGDS_ID=15 CS_CHECK_FAILURE_CGDS_ID value
     * @property {number} CS_CHECK_FAILURE_TIME=16 CS_CHECK_FAILURE_TIME value
     * @property {number} CS_CHECK_FAILURE_PROPERTY=17 CS_CHECK_FAILURE_PROPERTY value
     * @property {number} CS_CHECK_FAILURE_TOKEN=18 CS_CHECK_FAILURE_TOKEN value
     * @property {number} CS_ALREADY_UNLOCK=19 CS_ALREADY_UNLOCK value
     * @property {number} CS_CHECK_PHONE_UNREGISTRY=20 CS_CHECK_PHONE_UNREGISTRY value
     * @property {number} CS_CHECK_PHONE_UNBOUND=21 CS_CHECK_PHONE_UNBOUND value
     * @property {number} CS_CHECK_ACCOUNT_FORBIDDEN=22 CS_CHECK_ACCOUNT_FORBIDDEN value
     * @property {number} CS_INVALID_SMSCODE=23 CS_INVALID_SMSCODE value
     * @property {number} CS_CHECK_FAILURE_ONCE=24 CS_CHECK_FAILURE_ONCE value
     * @property {number} CS_PAYMENT_FAILURE=25 CS_PAYMENT_FAILURE value
     * @property {number} CS_ROOM_INVALID=100 CS_ROOM_INVALID value
     * @property {number} CS_ROOM_FULL=101 CS_ROOM_FULL value
     * @property {number} CS_ROOM_FAIL_CHECKIN=102 CS_ROOM_FAIL_CHECKIN value
     * @property {number} CS_ROOM_NOT_READY=103 CS_ROOM_NOT_READY value
     */
    pb.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CS_OK"] = 0;
        values[valuesById[1] = "CS_UNKNOW"] = 1;
        values[valuesById[2] = "CS_SERVER_ERROR"] = 2;
        values[valuesById[3] = "CS_INVALID_PARAMETER"] = 3;
        values[valuesById[4] = "CS_INVALID_ACCOUNT"] = 4;
        values[valuesById[5] = "CS_INVALID_PASSWORD"] = 5;
        values[valuesById[6] = "CS_TIMEOUT"] = 6;
        values[valuesById[7] = "CS_CHECK_FAILURE"] = 7;
        values[valuesById[8] = "CS_CHECK_FAILURE_CAPITAL"] = 8;
        values[valuesById[9] = "CS_CHECK_FAILURE_STOCK"] = 9;
        values[valuesById[10] = "CS_CHECK_FAILURE_ORDER"] = 10;
        values[valuesById[11] = "CS_NO_TRADING_TIME"] = 11;
        values[valuesById[12] = "CS_NO_REGISTRY_TIME"] = 12;
        values[valuesById[13] = "CS_NO_REGISTRY"] = 13;
        values[valuesById[14] = "CS_ALREADY_REGISTRY"] = 14;
        values[valuesById[15] = "CS_CHECK_FAILURE_CGDS_ID"] = 15;
        values[valuesById[16] = "CS_CHECK_FAILURE_TIME"] = 16;
        values[valuesById[17] = "CS_CHECK_FAILURE_PROPERTY"] = 17;
        values[valuesById[18] = "CS_CHECK_FAILURE_TOKEN"] = 18;
        values[valuesById[19] = "CS_ALREADY_UNLOCK"] = 19;
        values[valuesById[20] = "CS_CHECK_PHONE_UNREGISTRY"] = 20;
        values[valuesById[21] = "CS_CHECK_PHONE_UNBOUND"] = 21;
        values[valuesById[22] = "CS_CHECK_ACCOUNT_FORBIDDEN"] = 22;
        values[valuesById[23] = "CS_INVALID_SMSCODE"] = 23;
        values[valuesById[24] = "CS_CHECK_FAILURE_ONCE"] = 24;
        values[valuesById[25] = "CS_PAYMENT_FAILURE"] = 25;
        values[valuesById[100] = "CS_ROOM_INVALID"] = 100;
        values[valuesById[101] = "CS_ROOM_FULL"] = 101;
        values[valuesById[102] = "CS_ROOM_FAIL_CHECKIN"] = 102;
        values[valuesById[103] = "CS_ROOM_NOT_READY"] = 103;
        return values;
    })();

    /**
     * MessageId enum.
     * @name pb.MessageId
     * @enum {number}
     * @property {number} MessageId_NULL=0 MessageId_NULL value
     * @property {number} Cmd_Save_Stock2Db=101 Cmd_Save_Stock2Db value
     * @property {number} Cmd_Make_StockList=103 Cmd_Make_StockList value
     * @property {number} Sync_S2C_QuoteItem=1000 Sync_S2C_QuoteItem value
     * @property {number} Sync_S2C_GameProperty=1002 Sync_S2C_GameProperty value
     * @property {number} Sync_S2C_GameCounter=1004 Sync_S2C_GameCounter value
     * @property {number} Sync_S2C_GameSmxl=1006 Sync_S2C_GameSmxl value
     * @property {number} Sync_S2C_GameCg=1008 Sync_S2C_GameCg value
     * @property {number} Sync_S2C_GameMncg=1010 Sync_S2C_GameMncg value
     * @property {number} Sync_S2C_GameCgds=1012 Sync_S2C_GameCgds value
     * @property {number} Sync_S2C_FirstLoginToday=1014 Sync_S2C_FirstLoginToday value
     * @property {number} Sync_S2C_GameCg_GD=1016 Sync_S2C_GameCg_GD value
     * @property {number} Sync_S2C_GameTimes=1018 Sync_S2C_GameTimes value
     * @property {number} Sync_S2C_StockOrderResult=1020 Sync_S2C_StockOrderResult value
     * @property {number} Sync_S2C_MutipleLogin=1022 Sync_S2C_MutipleLogin value
     * @property {number} Sync_S2C_TaskProgress=1024 Sync_S2C_TaskProgress value
     * @property {number} Sync_S2C_ActivityConf=1026 Sync_S2C_ActivityConf value
     * @property {number} Sync_S2C_GameCgdsItem=1028 Sync_S2C_GameCgdsItem value
     * @property {number} Sync_S2C_GoldAwardPrompt=1030 Sync_S2C_GoldAwardPrompt value
     * @property {number} Sync_S2C_UnregistryAccount=1032 Sync_S2C_UnregistryAccount value
     * @property {number} Sync_S2C_CgdsConf=1034 Sync_S2C_CgdsConf value
     * @property {number} Sync_S2C_RecommendStock=1036 Sync_S2C_RecommendStock value
     * @property {number} Sync_S2C_InviterState=1037 Sync_S2C_InviterState value
     * @property {number} Sync_S2C_Broadcast=1100 Sync_S2C_Broadcast value
     * @property {number} Sync_S2C_Message=1102 Sync_S2C_Message value
     * @property {number} Sync_C2S_GameHeart=1200 Sync_C2S_GameHeart value
     * @property {number} Sync_C2S_Message=1202 Sync_C2S_Message value
     * @property {number} Sync_C2S_PaymentOk=1204 Sync_C2S_PaymentOk value
     * @property {number} Req_QuoteSubscribe=2001 Req_QuoteSubscribe value
     * @property {number} Rep_QuoteSubscribe=2002 Rep_QuoteSubscribe value
     * @property {number} Req_QuoteQuery=2003 Req_QuoteQuery value
     * @property {number} Rep_QuoteQuery=2004 Rep_QuoteQuery value
     * @property {number} Req_QuoteQueryFuture=2005 Req_QuoteQueryFuture value
     * @property {number} Rep_QuoteQueryFuture=2006 Rep_QuoteQueryFuture value
     * @property {number} Req_IsTradingDay=2007 Req_IsTradingDay value
     * @property {number} Rep_IsTradingDay=2008 Rep_IsTradingDay value
     * @property {number} Req_QueryTradingDay=2009 Req_QueryTradingDay value
     * @property {number} Rep_QueryTradingDay=2010 Rep_QueryTradingDay value
     * @property {number} Req_QueryAiStockList=2011 Req_QueryAiStockList value
     * @property {number} Rep_QueryAiStockList=2012 Rep_QueryAiStockList value
     * @property {number} Req_QueryAiSignal=2013 Req_QueryAiSignal value
     * @property {number} Rep_QueryAiSignal=2014 Rep_QueryAiSignal value
     * @property {number} Req_EditAiStockList=2015 Req_EditAiStockList value
     * @property {number} Rep_EditAiStockList=2016 Rep_EditAiStockList value
     * @property {number} Req_RecommendStock=2017 Req_RecommendStock value
     * @property {number} Rep_RecommendStock=2018 Rep_RecommendStock value
     * @property {number} Req_Hall_UploadIcon=3001 Req_Hall_UploadIcon value
     * @property {number} Rep_Hall_UploadIcon=3002 Rep_Hall_UploadIcon value
     * @property {number} Req_Hall_DownloadIcon=3003 Req_Hall_DownloadIcon value
     * @property {number} Rep_Hall_DownploadIcon=3004 Rep_Hall_DownploadIcon value
     * @property {number} Req_Hall_EditIcon=3005 Req_Hall_EditIcon value
     * @property {number} Rep_Hall_EditIcon=3006 Rep_Hall_EditIcon value
     * @property {number} Req_Hall_EditNick=3007 Req_Hall_EditNick value
     * @property {number} Rep_Hall_EditNick=3008 Rep_Hall_EditNick value
     * @property {number} Req_Hall_EditLocation=3009 Req_Hall_EditLocation value
     * @property {number} Rep_Hall_EditLocation=3010 Rep_Hall_EditLocation value
     * @property {number} Req_Hall_EditGender=3011 Req_Hall_EditGender value
     * @property {number} Rep_Hall_EditGender=3012 Rep_Hall_EditGender value
     * @property {number} Req_Hall_BackBag=3013 Req_Hall_BackBag value
     * @property {number} Rep_Hall_BackBag=3014 Rep_Hall_BackBag value
     * @property {number} Req_Hall_GetItem=3015 Req_Hall_GetItem value
     * @property {number} Rep_Hall_GetItem=3016 Rep_Hall_GetItem value
     * @property {number} Req_Hall_EditFavorList=3017 Req_Hall_EditFavorList value
     * @property {number} Rep_Hall_EditFavorList=3018 Rep_Hall_EditFavorList value
     * @property {number} Req_Hall_QueryPlayer=3019 Req_Hall_QueryPlayer value
     * @property {number} Rep_Hall_QueryPlayer=3020 Rep_Hall_QueryPlayer value
     * @property {number} Req_Hall_SaveStudyProgress=3021 Req_Hall_SaveStudyProgress value
     * @property {number} Rep_Hall_SaveStudyProgress=3022 Rep_Hall_SaveStudyProgress value
     * @property {number} Req_Hall_GetDailyTaskAward=3023 Req_Hall_GetDailyTaskAward value
     * @property {number} Rep_Hall_GetDailyTaskAward=3024 Rep_Hall_GetDailyTaskAward value
     * @property {number} Req_Hall_UnlockGame=3025 Req_Hall_UnlockGame value
     * @property {number} Rep_Hall_UnlockGame=3026 Rep_Hall_UnlockGame value
     * @property {number} Req_Hall_GetWeeklyAward=3027 Req_Hall_GetWeeklyAward value
     * @property {number} Rep_Hall_GetWeeklyAward=3028 Rep_Hall_GetWeeklyAward value
     * @property {number} Req_Hall_QueryEventLog=3029 Req_Hall_QueryEventLog value
     * @property {number} Rep_Hall_QueryEventLog=3030 Rep_Hall_QueryEventLog value
     * @property {number} Req_Hall_ShopOrder=3031 Req_Hall_ShopOrder value
     * @property {number} Rep_Hall_ShopOrder=3032 Rep_Hall_ShopOrder value
     * @property {number} Req_Hall_ShopOrderQuery=3033 Req_Hall_ShopOrderQuery value
     * @property {number} Rep_Hall_ShopOrderQuery=3034 Rep_Hall_ShopOrderQuery value
     * @property {number} Req_Hall_MobileBind=3035 Req_Hall_MobileBind value
     * @property {number} Rep_Hall_MobileBind=3036 Rep_Hall_MobileBind value
     * @property {number} Req_Hall_ResetGameCounter=3037 Req_Hall_ResetGameCounter value
     * @property {number} Rep_Hall_ResetGameCounter=3038 Rep_Hall_ResetGameCounter value
     * @property {number} Req_Hall_GetLevelRanking=3039 Req_Hall_GetLevelRanking value
     * @property {number} Rep_Hall_GetLevelRanking=3040 Rep_Hall_GetLevelRanking value
     * @property {number} Req_Hall_GetFameRanking=3041 Req_Hall_GetFameRanking value
     * @property {number} Rep_Hall_GetFameRanking=3042 Rep_Hall_GetFameRanking value
     * @property {number} Req_Hall_GetFameRankingWeekly=3043 Req_Hall_GetFameRankingWeekly value
     * @property {number} Rep_Hall_GetFameRankingWeekly=3044 Rep_Hall_GetFameRankingWeekly value
     * @property {number} Req_Hall_GetActivityLogs=3045 Req_Hall_GetActivityLogs value
     * @property {number} Rep_Hall_GetActivityLogs=3046 Rep_Hall_GetActivityLogs value
     * @property {number} Req_Hall_GetDailyAdAward=3047 Req_Hall_GetDailyAdAward value
     * @property {number} Rep_Hall_GetDailyAdAward=3048 Rep_Hall_GetDailyAdAward value
     * @property {number} Req_Hall_Get7Award=3049 Req_Hall_Get7Award value
     * @property {number} Rep_Hall_Get7Award=3050 Rep_Hall_Get7Award value
     * @property {number} Req_Hall_GetBrokenAward=3051 Req_Hall_GetBrokenAward value
     * @property {number} Rep_Hall_GetBrokenAward=3052 Rep_Hall_GetBrokenAward value
     * @property {number} Req_Hall_Exchange=3053 Req_Hall_Exchange value
     * @property {number} Rep_Hall_Exchange=3054 Rep_Hall_Exchange value
     * @property {number} Req_Hall_GetInviterAward=3055 Req_Hall_GetInviterAward value
     * @property {number} Rep_Hall_GetInviterAward=3056 Rep_Hall_GetInviterAward value
     * @property {number} Req_Hall_Unregistry=3997 Req_Hall_Unregistry value
     * @property {number} Rep_Hall_Unregistry=3998 Rep_Hall_Unregistry value
     * @property {number} Req_Hall_Logout=3999 Req_Hall_Logout value
     * @property {number} Rep_Hall_Logout=4000 Rep_Hall_Logout value
     * @property {number} Req_Game_Login=4001 Req_Game_Login value
     * @property {number} Rep_Game_Login=4002 Rep_Game_Login value
     * @property {number} Req_Game_Start=4003 Req_Game_Start value
     * @property {number} Rep_Game_Start=4004 Rep_Game_Start value
     * @property {number} Req_Game_Over=4005 Req_Game_Over value
     * @property {number} Rep_Game_Over=4006 Rep_Game_Over value
     * @property {number} Req_Game_QueryGameResult=4007 Req_Game_QueryGameResult value
     * @property {number} Rep_Game_QueryGameResult=4008 Rep_Game_QueryGameResult value
     * @property {number} Req_Game_GetGameOperation=4009 Req_Game_GetGameOperation value
     * @property {number} Rep_Game_GetGameOperation=4010 Rep_Game_GetGameOperation value
     * @property {number} Req_Game_SmxlReport=4011 Req_Game_SmxlReport value
     * @property {number} Rep_Game_SmxlReport=4012 Rep_Game_SmxlReport value
     * @property {number} Req_Game_SmxlReset=4013 Req_Game_SmxlReset value
     * @property {number} Rep_Game_SmxlReset=4014 Rep_Game_SmxlReset value
     * @property {number} Req_Game_CgsGetConf=4015 Req_Game_CgsGetConf value
     * @property {number} Rep_Game_CgsGetConf=4016 Rep_Game_CgsGetConf value
     * @property {number} Req_Game_CgsGetClearanceRank=4017 Req_Game_CgsGetClearanceRank value
     * @property {number} Rep_Game_CgsGetClearanceRank=4018 Rep_Game_CgsGetClearanceRank value
     * @property {number} Req_Game_CgsGetStageRank=4019 Req_Game_CgsGetStageRank value
     * @property {number} Rep_Game_CgsGetStageRank=4020 Rep_Game_CgsGetStageRank value
     * @property {number} Req_Game_CgsGetSeasonRank=4021 Req_Game_CgsGetSeasonRank value
     * @property {number} Rep_Game_CgsGetSeasonRank=4022 Rep_Game_CgsGetSeasonRank value
     * @property {number} Req_Game_CgsGetStageAward=4023 Req_Game_CgsGetStageAward value
     * @property {number} Rep_Game_CgsGetStageAward=4024 Rep_Game_CgsGetStageAward value
     * @property {number} Req_Game_OrderQuery=4025 Req_Game_OrderQuery value
     * @property {number} Rep_Game_OrderQuery=4026 Rep_Game_OrderQuery value
     * @property {number} Req_Game_Order=4027 Req_Game_Order value
     * @property {number} Rep_Game_Order=4028 Rep_Game_Order value
     * @property {number} Req_Game_OrderCancel=4029 Req_Game_OrderCancel value
     * @property {number} Rep_Game_OrderCancel=4030 Rep_Game_OrderCancel value
     * @property {number} Req_Game_MncgExchange=4031 Req_Game_MncgExchange value
     * @property {number} Rep_Game_MncgExchange=4032 Rep_Game_MncgExchange value
     * @property {number} Req_Game_MncgEditStockList=4033 Req_Game_MncgEditStockList value
     * @property {number} Rep_Game_MncgEditStockList=4034 Rep_Game_MncgEditStockList value
     * @property {number} Req_Game_CgdsList=4035 Req_Game_CgdsList value
     * @property {number} Rep_Game_CgdsList=4036 Rep_Game_CgdsList value
     * @property {number} Req_Game_CgdsReg=4037 Req_Game_CgdsReg value
     * @property {number} Rep_Game_CgdsReg=4038 Rep_Game_CgdsReg value
     * @property {number} Req_Game_CgdsRanking=4039 Req_Game_CgdsRanking value
     * @property {number} Rep_Game_CgdsRanking=4040 Rep_Game_CgdsRanking value
     * @property {number} Req_Game_ZsjcBettingList=4041 Req_Game_ZsjcBettingList value
     * @property {number} Rep_Game_ZsjcBettingList=4042 Rep_Game_ZsjcBettingList value
     * @property {number} Req_Game_ZsjcBet=4043 Req_Game_ZsjcBet value
     * @property {number} Rep_Game_ZsjcBet=4044 Rep_Game_ZsjcBet value
     * @property {number} Req_Game_ZsjcRanking=4045 Req_Game_ZsjcRanking value
     * @property {number} Rep_Game_ZsjcRanking=4046 Rep_Game_ZsjcRanking value
     * @property {number} Req_Game_ZsjcPlayerBettingList=4047 Req_Game_ZsjcPlayerBettingList value
     * @property {number} Rep_Game_ZsjcPlayerBettingList=4048 Rep_Game_ZsjcPlayerBettingList value
     * @property {number} Req_Game_ZsjcBettingResultList=4049 Req_Game_ZsjcBettingResultList value
     * @property {number} Rep_Game_ZsjcBettingResultList=4050 Rep_Game_ZsjcBettingResultList value
     * @property {number} Req_Room_Create=5003 Req_Room_Create value
     * @property {number} Rep_Room_Create=5004 Rep_Room_Create value
     * @property {number} Req_Room_Enter=5005 Req_Room_Enter value
     * @property {number} Rep_Room_Enter=5006 Rep_Room_Enter value
     * @property {number} Req_Room_Leave=5007 Req_Room_Leave value
     * @property {number} Rep_Room_Leave=5008 Rep_Room_Leave value
     * @property {number} Req_Room_Ready=5009 Req_Room_Ready value
     * @property {number} Rep_Room_Ready=5010 Rep_Room_Ready value
     * @property {number} Sync_Room_Enter=5200 Sync_Room_Enter value
     * @property {number} Sync_Room_Leave=5202 Sync_Room_Leave value
     * @property {number} Sync_Room_Enter_Self=5204 Sync_Room_Enter_Self value
     * @property {number} Sync_Room_Leave_Self=5206 Sync_Room_Leave_Self value
     * @property {number} Sync_Room_LostConn=5208 Sync_Room_LostConn value
     * @property {number} Sync_Room_ReConn=5210 Sync_Room_ReConn value
     * @property {number} Sync_Room_Ready=5212 Sync_Room_Ready value
     * @property {number} Sync_Room_GameStatus=5214 Sync_Room_GameStatus value
     * @property {number} Sync_Room_GameOp=5216 Sync_Room_GameOp value
     * @property {number} Sync_Room_GameResult=5218 Sync_Room_GameResult value
     * @property {number} S2S_HeartBeat=10001 S2S_HeartBeat value
     * @property {number} S2S_Update_PlayerProperty=10003 S2S_Update_PlayerProperty value
     * @property {number} S2S_Update_PlayerGameCounter=10005 S2S_Update_PlayerGameCounter value
     * @property {number} S2S_OrderCancel=10007 S2S_OrderCancel value
     * @property {number} S2S_Sync_Cgds=10009 S2S_Sync_Cgds value
     * @property {number} S2S_Set_CgdsTitle=10011 S2S_Set_CgdsTitle value
     * @property {number} S2S_Set_CgdsLogo=10013 S2S_Set_CgdsLogo value
     * @property {number} S2S_Set_CgdsUrl=10015 S2S_Set_CgdsUrl value
     * @property {number} S2S_Set_CgdsConf=10017 S2S_Set_CgdsConf value
     * @property {number} S2S_Set_CgdsAward=10019 S2S_Set_CgdsAward value
     * @property {number} S2S_Open_Cgds=10021 S2S_Open_Cgds value
     * @property {number} S2S_Close_Cgds=10023 S2S_Close_Cgds value
     * @property {number} S2S_Reload_Cgds=10025 S2S_Reload_Cgds value
     * @property {number} S2S_Reload_GameConf=10027 S2S_Reload_GameConf value
     * @property {number} S2S_Sync_ZsjcBetting=10028 S2S_Sync_ZsjcBetting value
     * @property {number} S2S_Sync_ZsjcState=10030 S2S_Sync_ZsjcState value
     * @property {number} S2S_Update_DailyTaskProgress=10032 S2S_Update_DailyTaskProgress value
     * @property {number} S2S_Sync_Pay=10034 S2S_Sync_Pay value
     * @property {number} S2S_Sync_PaymentQuery=10036 S2S_Sync_PaymentQuery value
     * @property {number} S2S_Sync_InviteUser=10037 S2S_Sync_InviteUser value
     */
    pb.MessageId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MessageId_NULL"] = 0;
        values[valuesById[101] = "Cmd_Save_Stock2Db"] = 101;
        values[valuesById[103] = "Cmd_Make_StockList"] = 103;
        values[valuesById[1000] = "Sync_S2C_QuoteItem"] = 1000;
        values[valuesById[1002] = "Sync_S2C_GameProperty"] = 1002;
        values[valuesById[1004] = "Sync_S2C_GameCounter"] = 1004;
        values[valuesById[1006] = "Sync_S2C_GameSmxl"] = 1006;
        values[valuesById[1008] = "Sync_S2C_GameCg"] = 1008;
        values[valuesById[1010] = "Sync_S2C_GameMncg"] = 1010;
        values[valuesById[1012] = "Sync_S2C_GameCgds"] = 1012;
        values[valuesById[1014] = "Sync_S2C_FirstLoginToday"] = 1014;
        values[valuesById[1016] = "Sync_S2C_GameCg_GD"] = 1016;
        values[valuesById[1018] = "Sync_S2C_GameTimes"] = 1018;
        values[valuesById[1020] = "Sync_S2C_StockOrderResult"] = 1020;
        values[valuesById[1022] = "Sync_S2C_MutipleLogin"] = 1022;
        values[valuesById[1024] = "Sync_S2C_TaskProgress"] = 1024;
        values[valuesById[1026] = "Sync_S2C_ActivityConf"] = 1026;
        values[valuesById[1028] = "Sync_S2C_GameCgdsItem"] = 1028;
        values[valuesById[1030] = "Sync_S2C_GoldAwardPrompt"] = 1030;
        values[valuesById[1032] = "Sync_S2C_UnregistryAccount"] = 1032;
        values[valuesById[1034] = "Sync_S2C_CgdsConf"] = 1034;
        values[valuesById[1036] = "Sync_S2C_RecommendStock"] = 1036;
        values[valuesById[1037] = "Sync_S2C_InviterState"] = 1037;
        values[valuesById[1100] = "Sync_S2C_Broadcast"] = 1100;
        values[valuesById[1102] = "Sync_S2C_Message"] = 1102;
        values[valuesById[1200] = "Sync_C2S_GameHeart"] = 1200;
        values[valuesById[1202] = "Sync_C2S_Message"] = 1202;
        values[valuesById[1204] = "Sync_C2S_PaymentOk"] = 1204;
        values[valuesById[2001] = "Req_QuoteSubscribe"] = 2001;
        values[valuesById[2002] = "Rep_QuoteSubscribe"] = 2002;
        values[valuesById[2003] = "Req_QuoteQuery"] = 2003;
        values[valuesById[2004] = "Rep_QuoteQuery"] = 2004;
        values[valuesById[2005] = "Req_QuoteQueryFuture"] = 2005;
        values[valuesById[2006] = "Rep_QuoteQueryFuture"] = 2006;
        values[valuesById[2007] = "Req_IsTradingDay"] = 2007;
        values[valuesById[2008] = "Rep_IsTradingDay"] = 2008;
        values[valuesById[2009] = "Req_QueryTradingDay"] = 2009;
        values[valuesById[2010] = "Rep_QueryTradingDay"] = 2010;
        values[valuesById[2011] = "Req_QueryAiStockList"] = 2011;
        values[valuesById[2012] = "Rep_QueryAiStockList"] = 2012;
        values[valuesById[2013] = "Req_QueryAiSignal"] = 2013;
        values[valuesById[2014] = "Rep_QueryAiSignal"] = 2014;
        values[valuesById[2015] = "Req_EditAiStockList"] = 2015;
        values[valuesById[2016] = "Rep_EditAiStockList"] = 2016;
        values[valuesById[2017] = "Req_RecommendStock"] = 2017;
        values[valuesById[2018] = "Rep_RecommendStock"] = 2018;
        values[valuesById[3001] = "Req_Hall_UploadIcon"] = 3001;
        values[valuesById[3002] = "Rep_Hall_UploadIcon"] = 3002;
        values[valuesById[3003] = "Req_Hall_DownloadIcon"] = 3003;
        values[valuesById[3004] = "Rep_Hall_DownploadIcon"] = 3004;
        values[valuesById[3005] = "Req_Hall_EditIcon"] = 3005;
        values[valuesById[3006] = "Rep_Hall_EditIcon"] = 3006;
        values[valuesById[3007] = "Req_Hall_EditNick"] = 3007;
        values[valuesById[3008] = "Rep_Hall_EditNick"] = 3008;
        values[valuesById[3009] = "Req_Hall_EditLocation"] = 3009;
        values[valuesById[3010] = "Rep_Hall_EditLocation"] = 3010;
        values[valuesById[3011] = "Req_Hall_EditGender"] = 3011;
        values[valuesById[3012] = "Rep_Hall_EditGender"] = 3012;
        values[valuesById[3013] = "Req_Hall_BackBag"] = 3013;
        values[valuesById[3014] = "Rep_Hall_BackBag"] = 3014;
        values[valuesById[3015] = "Req_Hall_GetItem"] = 3015;
        values[valuesById[3016] = "Rep_Hall_GetItem"] = 3016;
        values[valuesById[3017] = "Req_Hall_EditFavorList"] = 3017;
        values[valuesById[3018] = "Rep_Hall_EditFavorList"] = 3018;
        values[valuesById[3019] = "Req_Hall_QueryPlayer"] = 3019;
        values[valuesById[3020] = "Rep_Hall_QueryPlayer"] = 3020;
        values[valuesById[3021] = "Req_Hall_SaveStudyProgress"] = 3021;
        values[valuesById[3022] = "Rep_Hall_SaveStudyProgress"] = 3022;
        values[valuesById[3023] = "Req_Hall_GetDailyTaskAward"] = 3023;
        values[valuesById[3024] = "Rep_Hall_GetDailyTaskAward"] = 3024;
        values[valuesById[3025] = "Req_Hall_UnlockGame"] = 3025;
        values[valuesById[3026] = "Rep_Hall_UnlockGame"] = 3026;
        values[valuesById[3027] = "Req_Hall_GetWeeklyAward"] = 3027;
        values[valuesById[3028] = "Rep_Hall_GetWeeklyAward"] = 3028;
        values[valuesById[3029] = "Req_Hall_QueryEventLog"] = 3029;
        values[valuesById[3030] = "Rep_Hall_QueryEventLog"] = 3030;
        values[valuesById[3031] = "Req_Hall_ShopOrder"] = 3031;
        values[valuesById[3032] = "Rep_Hall_ShopOrder"] = 3032;
        values[valuesById[3033] = "Req_Hall_ShopOrderQuery"] = 3033;
        values[valuesById[3034] = "Rep_Hall_ShopOrderQuery"] = 3034;
        values[valuesById[3035] = "Req_Hall_MobileBind"] = 3035;
        values[valuesById[3036] = "Rep_Hall_MobileBind"] = 3036;
        values[valuesById[3037] = "Req_Hall_ResetGameCounter"] = 3037;
        values[valuesById[3038] = "Rep_Hall_ResetGameCounter"] = 3038;
        values[valuesById[3039] = "Req_Hall_GetLevelRanking"] = 3039;
        values[valuesById[3040] = "Rep_Hall_GetLevelRanking"] = 3040;
        values[valuesById[3041] = "Req_Hall_GetFameRanking"] = 3041;
        values[valuesById[3042] = "Rep_Hall_GetFameRanking"] = 3042;
        values[valuesById[3043] = "Req_Hall_GetFameRankingWeekly"] = 3043;
        values[valuesById[3044] = "Rep_Hall_GetFameRankingWeekly"] = 3044;
        values[valuesById[3045] = "Req_Hall_GetActivityLogs"] = 3045;
        values[valuesById[3046] = "Rep_Hall_GetActivityLogs"] = 3046;
        values[valuesById[3047] = "Req_Hall_GetDailyAdAward"] = 3047;
        values[valuesById[3048] = "Rep_Hall_GetDailyAdAward"] = 3048;
        values[valuesById[3049] = "Req_Hall_Get7Award"] = 3049;
        values[valuesById[3050] = "Rep_Hall_Get7Award"] = 3050;
        values[valuesById[3051] = "Req_Hall_GetBrokenAward"] = 3051;
        values[valuesById[3052] = "Rep_Hall_GetBrokenAward"] = 3052;
        values[valuesById[3053] = "Req_Hall_Exchange"] = 3053;
        values[valuesById[3054] = "Rep_Hall_Exchange"] = 3054;
        values[valuesById[3055] = "Req_Hall_GetInviterAward"] = 3055;
        values[valuesById[3056] = "Rep_Hall_GetInviterAward"] = 3056;
        values[valuesById[3997] = "Req_Hall_Unregistry"] = 3997;
        values[valuesById[3998] = "Rep_Hall_Unregistry"] = 3998;
        values[valuesById[3999] = "Req_Hall_Logout"] = 3999;
        values[valuesById[4000] = "Rep_Hall_Logout"] = 4000;
        values[valuesById[4001] = "Req_Game_Login"] = 4001;
        values[valuesById[4002] = "Rep_Game_Login"] = 4002;
        values[valuesById[4003] = "Req_Game_Start"] = 4003;
        values[valuesById[4004] = "Rep_Game_Start"] = 4004;
        values[valuesById[4005] = "Req_Game_Over"] = 4005;
        values[valuesById[4006] = "Rep_Game_Over"] = 4006;
        values[valuesById[4007] = "Req_Game_QueryGameResult"] = 4007;
        values[valuesById[4008] = "Rep_Game_QueryGameResult"] = 4008;
        values[valuesById[4009] = "Req_Game_GetGameOperation"] = 4009;
        values[valuesById[4010] = "Rep_Game_GetGameOperation"] = 4010;
        values[valuesById[4011] = "Req_Game_SmxlReport"] = 4011;
        values[valuesById[4012] = "Rep_Game_SmxlReport"] = 4012;
        values[valuesById[4013] = "Req_Game_SmxlReset"] = 4013;
        values[valuesById[4014] = "Rep_Game_SmxlReset"] = 4014;
        values[valuesById[4015] = "Req_Game_CgsGetConf"] = 4015;
        values[valuesById[4016] = "Rep_Game_CgsGetConf"] = 4016;
        values[valuesById[4017] = "Req_Game_CgsGetClearanceRank"] = 4017;
        values[valuesById[4018] = "Rep_Game_CgsGetClearanceRank"] = 4018;
        values[valuesById[4019] = "Req_Game_CgsGetStageRank"] = 4019;
        values[valuesById[4020] = "Rep_Game_CgsGetStageRank"] = 4020;
        values[valuesById[4021] = "Req_Game_CgsGetSeasonRank"] = 4021;
        values[valuesById[4022] = "Rep_Game_CgsGetSeasonRank"] = 4022;
        values[valuesById[4023] = "Req_Game_CgsGetStageAward"] = 4023;
        values[valuesById[4024] = "Rep_Game_CgsGetStageAward"] = 4024;
        values[valuesById[4025] = "Req_Game_OrderQuery"] = 4025;
        values[valuesById[4026] = "Rep_Game_OrderQuery"] = 4026;
        values[valuesById[4027] = "Req_Game_Order"] = 4027;
        values[valuesById[4028] = "Rep_Game_Order"] = 4028;
        values[valuesById[4029] = "Req_Game_OrderCancel"] = 4029;
        values[valuesById[4030] = "Rep_Game_OrderCancel"] = 4030;
        values[valuesById[4031] = "Req_Game_MncgExchange"] = 4031;
        values[valuesById[4032] = "Rep_Game_MncgExchange"] = 4032;
        values[valuesById[4033] = "Req_Game_MncgEditStockList"] = 4033;
        values[valuesById[4034] = "Rep_Game_MncgEditStockList"] = 4034;
        values[valuesById[4035] = "Req_Game_CgdsList"] = 4035;
        values[valuesById[4036] = "Rep_Game_CgdsList"] = 4036;
        values[valuesById[4037] = "Req_Game_CgdsReg"] = 4037;
        values[valuesById[4038] = "Rep_Game_CgdsReg"] = 4038;
        values[valuesById[4039] = "Req_Game_CgdsRanking"] = 4039;
        values[valuesById[4040] = "Rep_Game_CgdsRanking"] = 4040;
        values[valuesById[4041] = "Req_Game_ZsjcBettingList"] = 4041;
        values[valuesById[4042] = "Rep_Game_ZsjcBettingList"] = 4042;
        values[valuesById[4043] = "Req_Game_ZsjcBet"] = 4043;
        values[valuesById[4044] = "Rep_Game_ZsjcBet"] = 4044;
        values[valuesById[4045] = "Req_Game_ZsjcRanking"] = 4045;
        values[valuesById[4046] = "Rep_Game_ZsjcRanking"] = 4046;
        values[valuesById[4047] = "Req_Game_ZsjcPlayerBettingList"] = 4047;
        values[valuesById[4048] = "Rep_Game_ZsjcPlayerBettingList"] = 4048;
        values[valuesById[4049] = "Req_Game_ZsjcBettingResultList"] = 4049;
        values[valuesById[4050] = "Rep_Game_ZsjcBettingResultList"] = 4050;
        values[valuesById[5003] = "Req_Room_Create"] = 5003;
        values[valuesById[5004] = "Rep_Room_Create"] = 5004;
        values[valuesById[5005] = "Req_Room_Enter"] = 5005;
        values[valuesById[5006] = "Rep_Room_Enter"] = 5006;
        values[valuesById[5007] = "Req_Room_Leave"] = 5007;
        values[valuesById[5008] = "Rep_Room_Leave"] = 5008;
        values[valuesById[5009] = "Req_Room_Ready"] = 5009;
        values[valuesById[5010] = "Rep_Room_Ready"] = 5010;
        values[valuesById[5200] = "Sync_Room_Enter"] = 5200;
        values[valuesById[5202] = "Sync_Room_Leave"] = 5202;
        values[valuesById[5204] = "Sync_Room_Enter_Self"] = 5204;
        values[valuesById[5206] = "Sync_Room_Leave_Self"] = 5206;
        values[valuesById[5208] = "Sync_Room_LostConn"] = 5208;
        values[valuesById[5210] = "Sync_Room_ReConn"] = 5210;
        values[valuesById[5212] = "Sync_Room_Ready"] = 5212;
        values[valuesById[5214] = "Sync_Room_GameStatus"] = 5214;
        values[valuesById[5216] = "Sync_Room_GameOp"] = 5216;
        values[valuesById[5218] = "Sync_Room_GameResult"] = 5218;
        values[valuesById[10001] = "S2S_HeartBeat"] = 10001;
        values[valuesById[10003] = "S2S_Update_PlayerProperty"] = 10003;
        values[valuesById[10005] = "S2S_Update_PlayerGameCounter"] = 10005;
        values[valuesById[10007] = "S2S_OrderCancel"] = 10007;
        values[valuesById[10009] = "S2S_Sync_Cgds"] = 10009;
        values[valuesById[10011] = "S2S_Set_CgdsTitle"] = 10011;
        values[valuesById[10013] = "S2S_Set_CgdsLogo"] = 10013;
        values[valuesById[10015] = "S2S_Set_CgdsUrl"] = 10015;
        values[valuesById[10017] = "S2S_Set_CgdsConf"] = 10017;
        values[valuesById[10019] = "S2S_Set_CgdsAward"] = 10019;
        values[valuesById[10021] = "S2S_Open_Cgds"] = 10021;
        values[valuesById[10023] = "S2S_Close_Cgds"] = 10023;
        values[valuesById[10025] = "S2S_Reload_Cgds"] = 10025;
        values[valuesById[10027] = "S2S_Reload_GameConf"] = 10027;
        values[valuesById[10028] = "S2S_Sync_ZsjcBetting"] = 10028;
        values[valuesById[10030] = "S2S_Sync_ZsjcState"] = 10030;
        values[valuesById[10032] = "S2S_Update_DailyTaskProgress"] = 10032;
        values[valuesById[10034] = "S2S_Sync_Pay"] = 10034;
        values[valuesById[10036] = "S2S_Sync_PaymentQuery"] = 10036;
        values[valuesById[10037] = "S2S_Sync_InviteUser"] = 10037;
        return values;
    })();

    pb.MessageHead = (function() {

        /**
         * Properties of a MessageHead.
         * @memberof pb
         * @interface IMessageHead
         * @property {number|null} [messageId] MessageHead messageId
         * @property {number|null} [messageLen] MessageHead messageLen
         */

        /**
         * Constructs a new MessageHead.
         * @memberof pb
         * @classdesc Represents a MessageHead.
         * @implements IMessageHead
         * @constructor
         * @param {pb.IMessageHead=} [p] Properties to set
         */
        function MessageHead(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MessageHead messageId.
         * @member {number} messageId
         * @memberof pb.MessageHead
         * @instance
         */
        MessageHead.prototype.messageId = 0;

        /**
         * MessageHead messageLen.
         * @member {number} messageLen
         * @memberof pb.MessageHead
         * @instance
         */
        MessageHead.prototype.messageLen = 0;

        /**
         * Encodes the specified MessageHead message. Does not implicitly {@link pb.MessageHead.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageHead
         * @static
         * @param {pb.IMessageHead} m MessageHead message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        MessageHead.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messageId != null && Object.hasOwnProperty.call(m, "messageId"))
                w.uint32(13).sfixed32(m.messageId);
            if (m.messageLen != null && Object.hasOwnProperty.call(m, "messageLen"))
                w.uint32(21).sfixed32(m.messageLen);
            return w;
        };

        /**
         * Decodes a MessageHead message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageHead
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.MessageHead} MessageHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        MessageHead.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.MessageHead();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.messageId = r.sfixed32();
                    break;
                case 2:
                    m.messageLen = r.sfixed32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessageHead;
    })();

    pb.ErrorInfo = (function() {

        /**
         * Properties of an ErrorInfo.
         * @memberof pb
         * @interface IErrorInfo
         * @property {number|null} [code] ErrorInfo code
         * @property {string|null} [err] ErrorInfo err
         */

        /**
         * Constructs a new ErrorInfo.
         * @memberof pb
         * @classdesc Represents an ErrorInfo.
         * @implements IErrorInfo
         * @constructor
         * @param {pb.IErrorInfo=} [p] Properties to set
         */
        function ErrorInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ErrorInfo code.
         * @member {number} code
         * @memberof pb.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.code = 0;

        /**
         * ErrorInfo err.
         * @member {string} err
         * @memberof pb.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.err = "";

        /**
         * Encodes the specified ErrorInfo message. Does not implicitly {@link pb.ErrorInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.ErrorInfo
         * @static
         * @param {pb.IErrorInfo} m ErrorInfo message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ErrorInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.err != null && Object.hasOwnProperty.call(m, "err"))
                w.uint32(18).string(m.err);
            return w;
        };

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ErrorInfo
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ErrorInfo} ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ErrorInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.int32();
                    break;
                case 2:
                    m.err = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ErrorInfo;
    })();

    pb.VoidRequest = (function() {

        /**
         * Properties of a VoidRequest.
         * @memberof pb
         * @interface IVoidRequest
         */

        /**
         * Constructs a new VoidRequest.
         * @memberof pb
         * @classdesc Represents a VoidRequest.
         * @implements IVoidRequest
         * @constructor
         * @param {pb.IVoidRequest=} [p] Properties to set
         */
        function VoidRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified VoidRequest message. Does not implicitly {@link pb.VoidRequest.verify|verify} messages.
         * @function encode
         * @memberof pb.VoidRequest
         * @static
         * @param {pb.IVoidRequest} m VoidRequest message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        VoidRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a VoidRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pb.VoidRequest
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.VoidRequest} VoidRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        VoidRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.VoidRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return VoidRequest;
    })();

    pb.VoidReply = (function() {

        /**
         * Properties of a VoidReply.
         * @memberof pb
         * @interface IVoidReply
         */

        /**
         * Constructs a new VoidReply.
         * @memberof pb
         * @classdesc Represents a VoidReply.
         * @implements IVoidReply
         * @constructor
         * @param {pb.IVoidReply=} [p] Properties to set
         */
        function VoidReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified VoidReply message. Does not implicitly {@link pb.VoidReply.verify|verify} messages.
         * @function encode
         * @memberof pb.VoidReply
         * @static
         * @param {pb.IVoidReply} m VoidReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        VoidReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a VoidReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.VoidReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.VoidReply} VoidReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        VoidReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.VoidReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return VoidReply;
    })();

    /**
     * FeeType enum.
     * @name pb.FeeType
     * @enum {number}
     * @property {number} FeeType_NULL=0 FeeType_NULL value
     * @property {number} FeeType_RMB=1 FeeType_RMB value
     * @property {number} FeeType_Diamond=2 FeeType_Diamond value
     * @property {number} FeeType_Coupon=3 FeeType_Coupon value
     */
    pb.FeeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FeeType_NULL"] = 0;
        values[valuesById[1] = "FeeType_RMB"] = 1;
        values[valuesById[2] = "FeeType_Diamond"] = 2;
        values[valuesById[3] = "FeeType_Coupon"] = 3;
        return values;
    })();

    /**
     * PaymentType enum.
     * @name pb.PaymentType
     * @enum {number}
     * @property {number} PaymentType_NULL=0 PaymentType_NULL value
     * @property {number} WechatPay=1 WechatPay value
     * @property {number} ApplePay=2 ApplePay value
     * @property {number} WechatMiniPay=3 WechatMiniPay value
     */
    pb.PaymentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PaymentType_NULL"] = 0;
        values[valuesById[1] = "WechatPay"] = 1;
        values[valuesById[2] = "ApplePay"] = 2;
        values[valuesById[3] = "WechatMiniPay"] = 3;
        return values;
    })();

    /**
     * ItemOrderState enum.
     * @name pb.ItemOrderState
     * @enum {number}
     * @property {number} ItemOrderState_Init=0 ItemOrderState_Init value
     * @property {number} Pay=1 Pay value
     * @property {number} EMS=2 EMS value
     */
    pb.ItemOrderState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ItemOrderState_Init"] = 0;
        values[valuesById[1] = "Pay"] = 1;
        values[valuesById[2] = "EMS"] = 2;
        return values;
    })();

    /**
     * MessageType enum.
     * @name pb.MessageType
     * @enum {number}
     * @property {number} MessageType_NULL=0 MessageType_NULL value
     * @property {number} SystemNotice=1 SystemNotice value
     * @property {number} Popup_Adv=2 Popup_Adv value
     * @property {number} Chat=9 Chat value
     * @property {number} RoomChat=10 RoomChat value
     * @property {number} RoomInvite=11 RoomInvite value
     */
    pb.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MessageType_NULL"] = 0;
        values[valuesById[1] = "SystemNotice"] = 1;
        values[valuesById[2] = "Popup_Adv"] = 2;
        values[valuesById[9] = "Chat"] = 9;
        values[valuesById[10] = "RoomChat"] = 10;
        values[valuesById[11] = "RoomInvite"] = 11;
        return values;
    })();

    /**
     * GameType enum.
     * @name pb.GameType
     * @enum {number}
     * @property {number} GameType_NULL=0 GameType_NULL value
     * @property {number} ShuangMang=3 ShuangMang value
     * @property {number} DingXiang=4 DingXiang value
     * @property {number} FenShi=5 FenShi value
     * @property {number} ZhiBiao=10 ZhiBiao value
     * @property {number} TiaoJianDan=11 TiaoJianDan value
     * @property {number} QiHuo=6 QiHuo value
     * @property {number} TiaoZhan=16 TiaoZhan value
     * @property {number} JJ_PK=1 JJ_PK value
     * @property {number} JJ_DuoKong=2 JJ_DuoKong value
     * @property {number} JJ_ChuangGuan=9 JJ_ChuangGuan value
     * @property {number} JJ_QiHuo=15 JJ_QiHuo value
     * @property {number} MoNiChaoGu=12 MoNiChaoGu value
     * @property {number} ChaoGuDaSai=13 ChaoGuDaSai value
     * @property {number} GeGuJingChai=7 GeGuJingChai value
     * @property {number} DaPanJingChai=8 DaPanJingChai value
     * @property {number} ZhengGu=17 ZhengGu value
     * @property {number} JianGu=18 JianGu value
     * @property {number} MaxGameType=30 MaxGameType value
     */
    pb.GameType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GameType_NULL"] = 0;
        values[valuesById[3] = "ShuangMang"] = 3;
        values[valuesById[4] = "DingXiang"] = 4;
        values[valuesById[5] = "FenShi"] = 5;
        values[valuesById[10] = "ZhiBiao"] = 10;
        values[valuesById[11] = "TiaoJianDan"] = 11;
        values[valuesById[6] = "QiHuo"] = 6;
        values[valuesById[16] = "TiaoZhan"] = 16;
        values[valuesById[1] = "JJ_PK"] = 1;
        values[valuesById[2] = "JJ_DuoKong"] = 2;
        values[valuesById[9] = "JJ_ChuangGuan"] = 9;
        values[valuesById[15] = "JJ_QiHuo"] = 15;
        values[valuesById[12] = "MoNiChaoGu"] = 12;
        values[valuesById[13] = "ChaoGuDaSai"] = 13;
        values[valuesById[7] = "GeGuJingChai"] = 7;
        values[valuesById[8] = "DaPanJingChai"] = 8;
        values[valuesById[17] = "ZhengGu"] = 17;
        values[valuesById[18] = "JianGu"] = 18;
        values[valuesById[30] = "MaxGameType"] = 30;
        return values;
    })();

    /**
     * GamePropertyId enum.
     * @name pb.GamePropertyId
     * @enum {number}
     * @property {number} Gold=0 Gold value
     * @property {number} Diamond=1 Diamond value
     * @property {number} Vip=2 Vip value
     * @property {number} Exp=3 Exp value
     * @property {number} Level=4 Level value
     * @property {number} Fame=5 Fame value
     * @property {number} Coupon=6 Coupon value
     * @property {number} SVip=7 SVip value
     * @property {number} UnlockDxxl=20 UnlockDxxl value
     * @property {number} UnlockQhxl=21 UnlockQhxl value
     * @property {number} UnlockTjdxl=22 UnlockTjdxl value
     * @property {number} UnlockZbxl=23 UnlockZbxl value
     * @property {number} SVipExpiration=25 SVipExpiration value
     * @property {number} K=26 K value
     * @property {number} Tester=27 Tester value
     * @property {number} VipExpiration=28 VipExpiration value
     * @property {number} RMB=29 RMB value
     * @property {number} SVip30=30 SVip30 value
     * @property {number} SVip31=31 SVip31 value
     * @property {number} SVip32=32 SVip32 value
     * @property {number} SVip33=33 SVip33 value
     * @property {number} SVip34=34 SVip34 value
     * @property {number} SVip35=35 SVip35 value
     * @property {number} SVip36=36 SVip36 value
     * @property {number} SVip37=37 SVip37 value
     * @property {number} SVip38=38 SVip38 value
     * @property {number} SVip39=39 SVip39 value
     * @property {number} SVip40=40 SVip40 value
     * @property {number} SVip41=41 SVip41 value
     * @property {number} SVip42=42 SVip42 value
     * @property {number} SVip43=43 SVip43 value
     * @property {number} SVip44=44 SVip44 value
     * @property {number} SVip45=45 SVip45 value
     * @property {number} SVip46=46 SVip46 value
     * @property {number} SVip47=47 SVip47 value
     * @property {number} SVip48=48 SVip48 value
     * @property {number} SVip49=49 SVip49 value
     * @property {number} SVip50=50 SVip50 value
     * @property {number} SVip51=51 SVip51 value
     * @property {number} SVip52=52 SVip52 value
     * @property {number} SVip53=53 SVip53 value
     * @property {number} SVip54=54 SVip54 value
     * @property {number} SVip55=55 SVip55 value
     * @property {number} SVip56=56 SVip56 value
     * @property {number} SVip57=57 SVip57 value
     * @property {number} SVip58=58 SVip58 value
     * @property {number} SVip59=59 SVip59 value
     * @property {number} Max=60 Max value
     */
    pb.GamePropertyId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Gold"] = 0;
        values[valuesById[1] = "Diamond"] = 1;
        values[valuesById[2] = "Vip"] = 2;
        values[valuesById[3] = "Exp"] = 3;
        values[valuesById[4] = "Level"] = 4;
        values[valuesById[5] = "Fame"] = 5;
        values[valuesById[6] = "Coupon"] = 6;
        values[valuesById[7] = "SVip"] = 7;
        values[valuesById[20] = "UnlockDxxl"] = 20;
        values[valuesById[21] = "UnlockQhxl"] = 21;
        values[valuesById[22] = "UnlockTjdxl"] = 22;
        values[valuesById[23] = "UnlockZbxl"] = 23;
        values[valuesById[25] = "SVipExpiration"] = 25;
        values[valuesById[26] = "K"] = 26;
        values[valuesById[27] = "Tester"] = 27;
        values[valuesById[28] = "VipExpiration"] = 28;
        values[valuesById[29] = "RMB"] = 29;
        values[valuesById[30] = "SVip30"] = 30;
        values[valuesById[31] = "SVip31"] = 31;
        values[valuesById[32] = "SVip32"] = 32;
        values[valuesById[33] = "SVip33"] = 33;
        values[valuesById[34] = "SVip34"] = 34;
        values[valuesById[35] = "SVip35"] = 35;
        values[valuesById[36] = "SVip36"] = 36;
        values[valuesById[37] = "SVip37"] = 37;
        values[valuesById[38] = "SVip38"] = 38;
        values[valuesById[39] = "SVip39"] = 39;
        values[valuesById[40] = "SVip40"] = 40;
        values[valuesById[41] = "SVip41"] = 41;
        values[valuesById[42] = "SVip42"] = 42;
        values[valuesById[43] = "SVip43"] = 43;
        values[valuesById[44] = "SVip44"] = 44;
        values[valuesById[45] = "SVip45"] = 45;
        values[valuesById[46] = "SVip46"] = 46;
        values[valuesById[47] = "SVip47"] = 47;
        values[valuesById[48] = "SVip48"] = 48;
        values[valuesById[49] = "SVip49"] = 49;
        values[valuesById[50] = "SVip50"] = 50;
        values[valuesById[51] = "SVip51"] = 51;
        values[valuesById[52] = "SVip52"] = 52;
        values[valuesById[53] = "SVip53"] = 53;
        values[valuesById[54] = "SVip54"] = 54;
        values[valuesById[55] = "SVip55"] = 55;
        values[valuesById[56] = "SVip56"] = 56;
        values[valuesById[57] = "SVip57"] = 57;
        values[valuesById[58] = "SVip58"] = 58;
        values[valuesById[59] = "SVip59"] = 59;
        values[valuesById[60] = "Max"] = 60;
        return values;
    })();

    /**
     * EventId enum.
     * @name pb.EventId
     * @enum {number}
     * @property {number} EventId_NULL=0 EventId_NULL value
     * @property {number} EventId_WeeklyAward=1 EventId_WeeklyAward value
     * @property {number} EventId_Zsjc=2 EventId_Zsjc value
     */
    pb.EventId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EventId_NULL"] = 0;
        values[valuesById[1] = "EventId_WeeklyAward"] = 1;
        values[valuesById[2] = "EventId_Zsjc"] = 2;
        return values;
    })();

    /**
     * TaskId enum.
     * @name pb.TaskId
     * @enum {number}
     * @property {number} Pk=0 Pk value
     * @property {number} Dk=1 Dk value
     * @property {number} Zsjc=2 Zsjc value
     * @property {number} Ggjc=3 Ggjc value
     * @property {number} Cg=4 Cg value
     * @property {number} MaxDailyTaskId=5 MaxDailyTaskId value
     * @property {number} MaxStudyTaskId=8 MaxStudyTaskId value
     */
    pb.TaskId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Pk"] = 0;
        values[valuesById[1] = "Dk"] = 1;
        values[valuesById[2] = "Zsjc"] = 2;
        values[valuesById[3] = "Ggjc"] = 3;
        values[valuesById[4] = "Cg"] = 4;
        values[valuesById[5] = "MaxDailyTaskId"] = 5;
        values[valuesById[8] = "MaxStudyTaskId"] = 8;
        return values;
    })();

    /**
     * GameOperationId enum.
     * @name pb.GameOperationId
     * @enum {number}
     * @property {number} GameOperationId_NULL=0 GameOperationId_NULL value
     * @property {number} Ask=1 Ask value
     * @property {number} Bid=2 Bid value
     * @property {number} Wait=3 Wait value
     * @property {number} Hold=4 Hold value
     * @property {number} Bid_Force=5 Bid_Force value
     * @property {number} Ask_Force=6 Ask_Force value
     * @property {number} Short=8 Short value
     * @property {number} Long=9 Long value
     * @property {number} END=150 END value
     */
    pb.GameOperationId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GameOperationId_NULL"] = 0;
        values[valuesById[1] = "Ask"] = 1;
        values[valuesById[2] = "Bid"] = 2;
        values[valuesById[3] = "Wait"] = 3;
        values[valuesById[4] = "Hold"] = 4;
        values[valuesById[5] = "Bid_Force"] = 5;
        values[valuesById[6] = "Ask_Force"] = 6;
        values[valuesById[8] = "Short"] = 8;
        values[valuesById[9] = "Long"] = 9;
        values[valuesById[150] = "END"] = 150;
        return values;
    })();

    /**
     * GamePkResult enum.
     * @name pb.GamePkResult
     * @enum {number}
     * @property {number} Draw=0 Draw value
     * @property {number} Win=1 Win value
     * @property {number} Lost=2 Lost value
     * @property {number} Giveup=-1 Giveup value
     */
    pb.GamePkResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Draw"] = 0;
        values[valuesById[1] = "Win"] = 1;
        values[valuesById[2] = "Lost"] = 2;
        values[valuesById[-1] = "Giveup"] = -1;
        return values;
    })();

    /**
     * ExchangeType enum.
     * @name pb.ExchangeType
     * @enum {number}
     * @property {number} ExchangeType_NULL=0 ExchangeType_NULL value
     * @property {number} ExchangeType_K2Coupon=1 ExchangeType_K2Coupon value
     * @property {number} ExchangeType_K2Capital=2 ExchangeType_K2Capital value
     */
    pb.ExchangeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ExchangeType_NULL"] = 0;
        values[valuesById[1] = "ExchangeType_K2Coupon"] = 1;
        values[valuesById[2] = "ExchangeType_K2Capital"] = 2;
        return values;
    })();

    /**
     * ExchangeDirection enum.
     * @name pb.ExchangeDirection
     * @enum {number}
     * @property {number} ExchangeDirection_NULL=0 ExchangeDirection_NULL value
     * @property {number} Forward=1 Forward value
     * @property {number} Reverse=2 Reverse value
     */
    pb.ExchangeDirection = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ExchangeDirection_NULL"] = 0;
        values[valuesById[1] = "Forward"] = 1;
        values[valuesById[2] = "Reverse"] = 2;
        return values;
    })();

    /**
     * OrderType enum.
     * @name pb.OrderType
     * @enum {number}
     * @property {number} OrderType_NULL=0 OrderType_NULL value
     * @property {number} AskMarket=1 AskMarket value
     * @property {number} BidMarket=2 BidMarket value
     * @property {number} AskLimit=3 AskLimit value
     * @property {number} BidLimit=4 BidLimit value
     * @property {number} AskLimit_Cancel=5 AskLimit_Cancel value
     * @property {number} BidLimit_Cancel=6 BidLimit_Cancel value
     * @property {number} BidMarket_Auto=7 BidMarket_Auto value
     */
    pb.OrderType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OrderType_NULL"] = 0;
        values[valuesById[1] = "AskMarket"] = 1;
        values[valuesById[2] = "BidMarket"] = 2;
        values[valuesById[3] = "AskLimit"] = 3;
        values[valuesById[4] = "BidLimit"] = 4;
        values[valuesById[5] = "AskLimit_Cancel"] = 5;
        values[valuesById[6] = "BidLimit_Cancel"] = 6;
        values[valuesById[7] = "BidMarket_Auto"] = 7;
        return values;
    })();

    /**
     * OrderState enum.
     * @name pb.OrderState
     * @enum {number}
     * @property {number} Init=0 Init value
     * @property {number} Partial=1 Partial value
     * @property {number} Done=2 Done value
     * @property {number} ManulCancel=3 ManulCancel value
     * @property {number} AutoCancel=4 AutoCancel value
     */
    pb.OrderState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Init"] = 0;
        values[valuesById[1] = "Partial"] = 1;
        values[valuesById[2] = "Done"] = 2;
        values[valuesById[3] = "ManulCancel"] = 3;
        values[valuesById[4] = "AutoCancel"] = 4;
        return values;
    })();

    pb.BackbagGrid = (function() {

        /**
         * Properties of a BackbagGrid.
         * @memberof pb
         * @interface IBackbagGrid
         * @property {string|null} [properties] BackbagGrid properties
         * @property {number|null} [ts] BackbagGrid ts
         * @property {string|null} [memo] BackbagGrid memo
         */

        /**
         * Constructs a new BackbagGrid.
         * @memberof pb
         * @classdesc Represents a BackbagGrid.
         * @implements IBackbagGrid
         * @constructor
         * @param {pb.IBackbagGrid=} [p] Properties to set
         */
        function BackbagGrid(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BackbagGrid properties.
         * @member {string} properties
         * @memberof pb.BackbagGrid
         * @instance
         */
        BackbagGrid.prototype.properties = "";

        /**
         * BackbagGrid ts.
         * @member {number} ts
         * @memberof pb.BackbagGrid
         * @instance
         */
        BackbagGrid.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackbagGrid memo.
         * @member {string} memo
         * @memberof pb.BackbagGrid
         * @instance
         */
        BackbagGrid.prototype.memo = "";

        /**
         * Encodes the specified BackbagGrid message. Does not implicitly {@link pb.BackbagGrid.verify|verify} messages.
         * @function encode
         * @memberof pb.BackbagGrid
         * @static
         * @param {pb.IBackbagGrid} m BackbagGrid message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        BackbagGrid.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.properties != null && Object.hasOwnProperty.call(m, "properties"))
                w.uint32(10).string(m.properties);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(16).int64(m.ts);
            if (m.memo != null && Object.hasOwnProperty.call(m, "memo"))
                w.uint32(26).string(m.memo);
            return w;
        };

        /**
         * Decodes a BackbagGrid message from the specified reader or buffer.
         * @function decode
         * @memberof pb.BackbagGrid
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.BackbagGrid} BackbagGrid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        BackbagGrid.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.BackbagGrid();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.properties = r.string();
                    break;
                case 2:
                    m.ts = r.int64();
                    break;
                case 3:
                    m.memo = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BackbagGrid;
    })();

    pb.Backbag = (function() {

        /**
         * Properties of a Backbag.
         * @memberof pb
         * @interface IBackbag
         * @property {Array.<pb.IBackbagGrid>|null} [grids] Backbag grids
         */

        /**
         * Constructs a new Backbag.
         * @memberof pb
         * @classdesc Represents a Backbag.
         * @implements IBackbag
         * @constructor
         * @param {pb.IBackbag=} [p] Properties to set
         */
        function Backbag(p) {
            this.grids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Backbag grids.
         * @member {Array.<pb.IBackbagGrid>} grids
         * @memberof pb.Backbag
         * @instance
         */
        Backbag.prototype.grids = $util.emptyArray;

        /**
         * Encodes the specified Backbag message. Does not implicitly {@link pb.Backbag.verify|verify} messages.
         * @function encode
         * @memberof pb.Backbag
         * @static
         * @param {pb.IBackbag} m Backbag message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Backbag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.grids != null && m.grids.length) {
                for (var i = 0; i < m.grids.length; ++i)
                    $root.pb.BackbagGrid.encode(m.grids[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a Backbag message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Backbag
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.Backbag} Backbag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Backbag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.Backbag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.grids && m.grids.length))
                        m.grids = [];
                    m.grids.push($root.pb.BackbagGrid.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Backbag;
    })();

    pb.GameCounter = (function() {

        /**
         * Properties of a GameCounter.
         * @memberof pb
         * @interface IGameCounter
         * @property {pb.GameType|null} [game] GameCounter game
         * @property {number|null} [win] GameCounter win
         * @property {number|null} [lose] GameCounter lose
         */

        /**
         * Constructs a new GameCounter.
         * @memberof pb
         * @classdesc Represents a GameCounter.
         * @implements IGameCounter
         * @constructor
         * @param {pb.IGameCounter=} [p] Properties to set
         */
        function GameCounter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameCounter game.
         * @member {pb.GameType} game
         * @memberof pb.GameCounter
         * @instance
         */
        GameCounter.prototype.game = 0;

        /**
         * GameCounter win.
         * @member {number} win
         * @memberof pb.GameCounter
         * @instance
         */
        GameCounter.prototype.win = 0;

        /**
         * GameCounter lose.
         * @member {number} lose
         * @memberof pb.GameCounter
         * @instance
         */
        GameCounter.prototype.lose = 0;

        /**
         * Encodes the specified GameCounter message. Does not implicitly {@link pb.GameCounter.verify|verify} messages.
         * @function encode
         * @memberof pb.GameCounter
         * @static
         * @param {pb.IGameCounter} m GameCounter message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameCounter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(8).int32(m.game);
            if (m.win != null && Object.hasOwnProperty.call(m, "win"))
                w.uint32(16).int32(m.win);
            if (m.lose != null && Object.hasOwnProperty.call(m, "lose"))
                w.uint32(24).int32(m.lose);
            return w;
        };

        /**
         * Decodes a GameCounter message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameCounter
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GameCounter} GameCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameCounter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GameCounter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.game = r.int32();
                    break;
                case 2:
                    m.win = r.int32();
                    break;
                case 3:
                    m.lose = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameCounter;
    })();

    pb.GameCounters = (function() {

        /**
         * Properties of a GameCounters.
         * @memberof pb
         * @interface IGameCounters
         * @property {Array.<pb.IGameCounter>|null} [items] GameCounters items
         */

        /**
         * Constructs a new GameCounters.
         * @memberof pb
         * @classdesc Represents a GameCounters.
         * @implements IGameCounters
         * @constructor
         * @param {pb.IGameCounters=} [p] Properties to set
         */
        function GameCounters(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameCounters items.
         * @member {Array.<pb.IGameCounter>} items
         * @memberof pb.GameCounters
         * @instance
         */
        GameCounters.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified GameCounters message. Does not implicitly {@link pb.GameCounters.verify|verify} messages.
         * @function encode
         * @memberof pb.GameCounters
         * @static
         * @param {pb.IGameCounters} m GameCounters message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameCounters.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.GameCounter.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a GameCounters message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameCounters
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GameCounters} GameCounters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameCounters.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GameCounters();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.GameCounter.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameCounters;
    })();

    pb.TodayGameTimes = (function() {

        /**
         * Properties of a TodayGameTimes.
         * @memberof pb
         * @interface ITodayGameTimes
         * @property {Array.<number>|null} [counter] TodayGameTimes counter
         */

        /**
         * Constructs a new TodayGameTimes.
         * @memberof pb
         * @classdesc Represents a TodayGameTimes.
         * @implements ITodayGameTimes
         * @constructor
         * @param {pb.ITodayGameTimes=} [p] Properties to set
         */
        function TodayGameTimes(p) {
            this.counter = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * TodayGameTimes counter.
         * @member {Array.<number>} counter
         * @memberof pb.TodayGameTimes
         * @instance
         */
        TodayGameTimes.prototype.counter = $util.emptyArray;

        /**
         * Encodes the specified TodayGameTimes message. Does not implicitly {@link pb.TodayGameTimes.verify|verify} messages.
         * @function encode
         * @memberof pb.TodayGameTimes
         * @static
         * @param {pb.ITodayGameTimes} m TodayGameTimes message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        TodayGameTimes.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.counter != null && m.counter.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.counter.length; ++i)
                    w.int32(m.counter[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a TodayGameTimes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TodayGameTimes
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.TodayGameTimes} TodayGameTimes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        TodayGameTimes.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.TodayGameTimes();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.counter && m.counter.length))
                        m.counter = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.counter.push(r.int32());
                    } else
                        m.counter.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TodayGameTimes;
    })();

    pb.SmxlState = (function() {

        /**
         * Properties of a SmxlState.
         * @memberof pb
         * @interface ISmxlState
         * @property {number|null} [resetTs] SmxlState resetTs
         * @property {number|null} [resetCounter] SmxlState resetCounter
         * @property {number|null} [resetTsPremonth] SmxlState resetTsPremonth
         * @property {number|null} [lastMonthReportTs] SmxlState lastMonthReportTs
         * @property {number|null} [goldInit] SmxlState goldInit
         * @property {number|null} [gold] SmxlState gold
         * @property {number|null} [todayTs] SmxlState todayTs
         * @property {number|null} [todayTimes] SmxlState todayTimes
         */

        /**
         * Constructs a new SmxlState.
         * @memberof pb
         * @classdesc Represents a SmxlState.
         * @implements ISmxlState
         * @constructor
         * @param {pb.ISmxlState=} [p] Properties to set
         */
        function SmxlState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SmxlState resetTs.
         * @member {number} resetTs
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.resetTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SmxlState resetCounter.
         * @member {number} resetCounter
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.resetCounter = 0;

        /**
         * SmxlState resetTsPremonth.
         * @member {number} resetTsPremonth
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.resetTsPremonth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SmxlState lastMonthReportTs.
         * @member {number} lastMonthReportTs
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.lastMonthReportTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SmxlState goldInit.
         * @member {number} goldInit
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.goldInit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SmxlState gold.
         * @member {number} gold
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SmxlState todayTs.
         * @member {number} todayTs
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.todayTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SmxlState todayTimes.
         * @member {number} todayTimes
         * @memberof pb.SmxlState
         * @instance
         */
        SmxlState.prototype.todayTimes = 0;

        /**
         * Encodes the specified SmxlState message. Does not implicitly {@link pb.SmxlState.verify|verify} messages.
         * @function encode
         * @memberof pb.SmxlState
         * @static
         * @param {pb.ISmxlState} m SmxlState message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        SmxlState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.resetTs != null && Object.hasOwnProperty.call(m, "resetTs"))
                w.uint32(8).int64(m.resetTs);
            if (m.resetCounter != null && Object.hasOwnProperty.call(m, "resetCounter"))
                w.uint32(16).int32(m.resetCounter);
            if (m.resetTsPremonth != null && Object.hasOwnProperty.call(m, "resetTsPremonth"))
                w.uint32(24).int64(m.resetTsPremonth);
            if (m.lastMonthReportTs != null && Object.hasOwnProperty.call(m, "lastMonthReportTs"))
                w.uint32(32).int64(m.lastMonthReportTs);
            if (m.goldInit != null && Object.hasOwnProperty.call(m, "goldInit"))
                w.uint32(40).int64(m.goldInit);
            if (m.gold != null && Object.hasOwnProperty.call(m, "gold"))
                w.uint32(48).int64(m.gold);
            if (m.todayTs != null && Object.hasOwnProperty.call(m, "todayTs"))
                w.uint32(56).int64(m.todayTs);
            if (m.todayTimes != null && Object.hasOwnProperty.call(m, "todayTimes"))
                w.uint32(64).int32(m.todayTimes);
            return w;
        };

        /**
         * Decodes a SmxlState message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SmxlState
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.SmxlState} SmxlState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        SmxlState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.SmxlState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.resetTs = r.int64();
                    break;
                case 2:
                    m.resetCounter = r.int32();
                    break;
                case 3:
                    m.resetTsPremonth = r.int64();
                    break;
                case 4:
                    m.lastMonthReportTs = r.int64();
                    break;
                case 5:
                    m.goldInit = r.int64();
                    break;
                case 6:
                    m.gold = r.int64();
                    break;
                case 7:
                    m.todayTs = r.int64();
                    break;
                case 8:
                    m.todayTimes = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SmxlState;
    })();

    pb.CgLogAward = (function() {

        /**
         * Properties of a CgLogAward.
         * @memberof pb
         * @interface ICgLogAward
         * @property {number|null} [stage] CgLogAward stage
         * @property {boolean|null} [awarded] CgLogAward awarded
         * @property {boolean|null} [gotten] CgLogAward gotten
         */

        /**
         * Constructs a new CgLogAward.
         * @memberof pb
         * @classdesc Represents a CgLogAward.
         * @implements ICgLogAward
         * @constructor
         * @param {pb.ICgLogAward=} [p] Properties to set
         */
        function CgLogAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgLogAward stage.
         * @member {number} stage
         * @memberof pb.CgLogAward
         * @instance
         */
        CgLogAward.prototype.stage = 0;

        /**
         * CgLogAward awarded.
         * @member {boolean} awarded
         * @memberof pb.CgLogAward
         * @instance
         */
        CgLogAward.prototype.awarded = false;

        /**
         * CgLogAward gotten.
         * @member {boolean} gotten
         * @memberof pb.CgLogAward
         * @instance
         */
        CgLogAward.prototype.gotten = false;

        /**
         * Encodes the specified CgLogAward message. Does not implicitly {@link pb.CgLogAward.verify|verify} messages.
         * @function encode
         * @memberof pb.CgLogAward
         * @static
         * @param {pb.ICgLogAward} m CgLogAward message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgLogAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.stage != null && Object.hasOwnProperty.call(m, "stage"))
                w.uint32(8).int32(m.stage);
            if (m.awarded != null && Object.hasOwnProperty.call(m, "awarded"))
                w.uint32(16).bool(m.awarded);
            if (m.gotten != null && Object.hasOwnProperty.call(m, "gotten"))
                w.uint32(24).bool(m.gotten);
            return w;
        };

        /**
         * Decodes a CgLogAward message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgLogAward
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgLogAward} CgLogAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgLogAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgLogAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.stage = r.int32();
                    break;
                case 2:
                    m.awarded = r.bool();
                    break;
                case 3:
                    m.gotten = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgLogAward;
    })();

    pb.CgState = (function() {

        /**
         * Properties of a CgState.
         * @memberof pb
         * @interface ICgState
         * @property {number|null} [seasonId] CgState seasonId
         * @property {number|null} [stage] CgState stage
         * @property {number|null} [progress] CgState progress
         * @property {number|null} [lifes] CgState lifes
         * @property {number|null} [win] CgState win
         * @property {number|null} [lose] CgState lose
         * @property {boolean|null} [clearance] CgState clearance
         * @property {Array.<pb.ICgLogAward>|null} [awards] CgState awards
         */

        /**
         * Constructs a new CgState.
         * @memberof pb
         * @classdesc Represents a CgState.
         * @implements ICgState
         * @constructor
         * @param {pb.ICgState=} [p] Properties to set
         */
        function CgState(p) {
            this.awards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgState seasonId.
         * @member {number} seasonId
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.seasonId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CgState stage.
         * @member {number} stage
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.stage = 0;

        /**
         * CgState progress.
         * @member {number} progress
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.progress = 0;

        /**
         * CgState lifes.
         * @member {number} lifes
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.lifes = 0;

        /**
         * CgState win.
         * @member {number} win
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.win = 0;

        /**
         * CgState lose.
         * @member {number} lose
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.lose = 0;

        /**
         * CgState clearance.
         * @member {boolean} clearance
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.clearance = false;

        /**
         * CgState awards.
         * @member {Array.<pb.ICgLogAward>} awards
         * @memberof pb.CgState
         * @instance
         */
        CgState.prototype.awards = $util.emptyArray;

        /**
         * Encodes the specified CgState message. Does not implicitly {@link pb.CgState.verify|verify} messages.
         * @function encode
         * @memberof pb.CgState
         * @static
         * @param {pb.ICgState} m CgState message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.seasonId != null && Object.hasOwnProperty.call(m, "seasonId"))
                w.uint32(8).int64(m.seasonId);
            if (m.stage != null && Object.hasOwnProperty.call(m, "stage"))
                w.uint32(16).int32(m.stage);
            if (m.progress != null && Object.hasOwnProperty.call(m, "progress"))
                w.uint32(24).int32(m.progress);
            if (m.lifes != null && Object.hasOwnProperty.call(m, "lifes"))
                w.uint32(32).int32(m.lifes);
            if (m.win != null && Object.hasOwnProperty.call(m, "win"))
                w.uint32(40).int32(m.win);
            if (m.lose != null && Object.hasOwnProperty.call(m, "lose"))
                w.uint32(48).int32(m.lose);
            if (m.clearance != null && Object.hasOwnProperty.call(m, "clearance"))
                w.uint32(56).bool(m.clearance);
            if (m.awards != null && m.awards.length) {
                for (var i = 0; i < m.awards.length; ++i)
                    $root.pb.CgLogAward.encode(m.awards[i], w.uint32(66).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CgState message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgState
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgState} CgState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seasonId = r.int64();
                    break;
                case 2:
                    m.stage = r.int32();
                    break;
                case 3:
                    m.progress = r.int32();
                    break;
                case 4:
                    m.lifes = r.int32();
                    break;
                case 5:
                    m.win = r.int32();
                    break;
                case 6:
                    m.lose = r.int32();
                    break;
                case 7:
                    m.clearance = r.bool();
                    break;
                case 8:
                    if (!(m.awards && m.awards.length))
                        m.awards = [];
                    m.awards.push($root.pb.CgLogAward.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgState;
    })();

    pb.MncgState = (function() {

        /**
         * Properties of a MncgState.
         * @memberof pb
         * @interface IMncgState
         * @property {number|null} [account] MncgState account
         * @property {pb.IStockOrderList|null} [orderList] MncgState orderList
         * @property {pb.IStockPositionList|null} [positionList] MncgState positionList
         * @property {Array.<number>|null} [stockList] MncgState stockList
         */

        /**
         * Constructs a new MncgState.
         * @memberof pb
         * @classdesc Represents a MncgState.
         * @implements IMncgState
         * @constructor
         * @param {pb.IMncgState=} [p] Properties to set
         */
        function MncgState(p) {
            this.stockList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MncgState account.
         * @member {number} account
         * @memberof pb.MncgState
         * @instance
         */
        MncgState.prototype.account = 0;

        /**
         * MncgState orderList.
         * @member {pb.IStockOrderList|null|undefined} orderList
         * @memberof pb.MncgState
         * @instance
         */
        MncgState.prototype.orderList = null;

        /**
         * MncgState positionList.
         * @member {pb.IStockPositionList|null|undefined} positionList
         * @memberof pb.MncgState
         * @instance
         */
        MncgState.prototype.positionList = null;

        /**
         * MncgState stockList.
         * @member {Array.<number>} stockList
         * @memberof pb.MncgState
         * @instance
         */
        MncgState.prototype.stockList = $util.emptyArray;

        /**
         * Encodes the specified MncgState message. Does not implicitly {@link pb.MncgState.verify|verify} messages.
         * @function encode
         * @memberof pb.MncgState
         * @static
         * @param {pb.IMncgState} m MncgState message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        MncgState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(9).double(m.account);
            if (m.orderList != null && Object.hasOwnProperty.call(m, "orderList"))
                $root.pb.StockOrderList.encode(m.orderList, w.uint32(18).fork()).ldelim();
            if (m.positionList != null && Object.hasOwnProperty.call(m, "positionList"))
                $root.pb.StockPositionList.encode(m.positionList, w.uint32(26).fork()).ldelim();
            if (m.stockList != null && m.stockList.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.stockList.length; ++i)
                    w.int32(m.stockList[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a MncgState message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MncgState
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.MncgState} MncgState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        MncgState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.MncgState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.account = r.double();
                    break;
                case 2:
                    m.orderList = $root.pb.StockOrderList.decode(r, r.uint32());
                    break;
                case 3:
                    m.positionList = $root.pb.StockPositionList.decode(r, r.uint32());
                    break;
                case 4:
                    if (!(m.stockList && m.stockList.length))
                        m.stockList = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.stockList.push(r.int32());
                    } else
                        m.stockList.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MncgState;
    })();

    pb.CgdsStateItem = (function() {

        /**
         * Properties of a CgdsStateItem.
         * @memberof pb
         * @interface ICgdsStateItem
         * @property {number|null} [id] CgdsStateItem id
         * @property {pb.IMncgState|null} [state] CgdsStateItem state
         */

        /**
         * Constructs a new CgdsStateItem.
         * @memberof pb
         * @classdesc Represents a CgdsStateItem.
         * @implements ICgdsStateItem
         * @constructor
         * @param {pb.ICgdsStateItem=} [p] Properties to set
         */
        function CgdsStateItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgdsStateItem id.
         * @member {number} id
         * @memberof pb.CgdsStateItem
         * @instance
         */
        CgdsStateItem.prototype.id = 0;

        /**
         * CgdsStateItem state.
         * @member {pb.IMncgState|null|undefined} state
         * @memberof pb.CgdsStateItem
         * @instance
         */
        CgdsStateItem.prototype.state = null;

        /**
         * Encodes the specified CgdsStateItem message. Does not implicitly {@link pb.CgdsStateItem.verify|verify} messages.
         * @function encode
         * @memberof pb.CgdsStateItem
         * @static
         * @param {pb.ICgdsStateItem} m CgdsStateItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgdsStateItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                $root.pb.MncgState.encode(m.state, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a CgdsStateItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgdsStateItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgdsStateItem} CgdsStateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgdsStateItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgdsStateItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.state = $root.pb.MncgState.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgdsStateItem;
    })();

    pb.CgdsState = (function() {

        /**
         * Properties of a CgdsState.
         * @memberof pb
         * @interface ICgdsState
         * @property {Array.<pb.ICgdsStateItem>|null} [items] CgdsState items
         */

        /**
         * Constructs a new CgdsState.
         * @memberof pb
         * @classdesc Represents a CgdsState.
         * @implements ICgdsState
         * @constructor
         * @param {pb.ICgdsState=} [p] Properties to set
         */
        function CgdsState(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgdsState items.
         * @member {Array.<pb.ICgdsStateItem>} items
         * @memberof pb.CgdsState
         * @instance
         */
        CgdsState.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified CgdsState message. Does not implicitly {@link pb.CgdsState.verify|verify} messages.
         * @function encode
         * @memberof pb.CgdsState
         * @static
         * @param {pb.ICgdsState} m CgdsState message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgdsState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.CgdsStateItem.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CgdsState message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgdsState
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgdsState} CgdsState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgdsState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgdsState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.CgdsStateItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgdsState;
    })();

    pb.CgdsStockListItem = (function() {

        /**
         * Properties of a CgdsStockListItem.
         * @memberof pb
         * @interface ICgdsStockListItem
         * @property {number|null} [id] CgdsStockListItem id
         * @property {Array.<number>|null} [stockList] CgdsStockListItem stockList
         */

        /**
         * Constructs a new CgdsStockListItem.
         * @memberof pb
         * @classdesc Represents a CgdsStockListItem.
         * @implements ICgdsStockListItem
         * @constructor
         * @param {pb.ICgdsStockListItem=} [p] Properties to set
         */
        function CgdsStockListItem(p) {
            this.stockList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgdsStockListItem id.
         * @member {number} id
         * @memberof pb.CgdsStockListItem
         * @instance
         */
        CgdsStockListItem.prototype.id = 0;

        /**
         * CgdsStockListItem stockList.
         * @member {Array.<number>} stockList
         * @memberof pb.CgdsStockListItem
         * @instance
         */
        CgdsStockListItem.prototype.stockList = $util.emptyArray;

        /**
         * Encodes the specified CgdsStockListItem message. Does not implicitly {@link pb.CgdsStockListItem.verify|verify} messages.
         * @function encode
         * @memberof pb.CgdsStockListItem
         * @static
         * @param {pb.ICgdsStockListItem} m CgdsStockListItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgdsStockListItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.stockList != null && m.stockList.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.stockList.length; ++i)
                    w.int32(m.stockList[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a CgdsStockListItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgdsStockListItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgdsStockListItem} CgdsStockListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgdsStockListItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgdsStockListItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    if (!(m.stockList && m.stockList.length))
                        m.stockList = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.stockList.push(r.int32());
                    } else
                        m.stockList.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgdsStockListItem;
    })();

    pb.ZsjcState = (function() {

        /**
         * Properties of a ZsjcState.
         * @memberof pb
         * @interface IZsjcState
         * @property {Array.<pb.IZsjcGameData>|null} [items] ZsjcState items
         */

        /**
         * Constructs a new ZsjcState.
         * @memberof pb
         * @classdesc Represents a ZsjcState.
         * @implements IZsjcState
         * @constructor
         * @param {pb.IZsjcState=} [p] Properties to set
         */
        function ZsjcState(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ZsjcState items.
         * @member {Array.<pb.IZsjcGameData>} items
         * @memberof pb.ZsjcState
         * @instance
         */
        ZsjcState.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ZsjcState message. Does not implicitly {@link pb.ZsjcState.verify|verify} messages.
         * @function encode
         * @memberof pb.ZsjcState
         * @static
         * @param {pb.IZsjcState} m ZsjcState message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ZsjcState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.ZsjcGameData.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ZsjcState message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ZsjcState
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ZsjcState} ZsjcState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ZsjcState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ZsjcState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.ZsjcGameData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ZsjcState;
    })();

    pb.Tasks = (function() {

        /**
         * Properties of a Tasks.
         * @memberof pb
         * @interface ITasks
         * @property {Array.<pb.ITaskItem>|null} [study] Tasks study
         * @property {Array.<pb.ITaskItem>|null} [daily] Tasks daily
         */

        /**
         * Constructs a new Tasks.
         * @memberof pb
         * @classdesc Represents a Tasks.
         * @implements ITasks
         * @constructor
         * @param {pb.ITasks=} [p] Properties to set
         */
        function Tasks(p) {
            this.study = [];
            this.daily = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Tasks study.
         * @member {Array.<pb.ITaskItem>} study
         * @memberof pb.Tasks
         * @instance
         */
        Tasks.prototype.study = $util.emptyArray;

        /**
         * Tasks daily.
         * @member {Array.<pb.ITaskItem>} daily
         * @memberof pb.Tasks
         * @instance
         */
        Tasks.prototype.daily = $util.emptyArray;

        /**
         * Encodes the specified Tasks message. Does not implicitly {@link pb.Tasks.verify|verify} messages.
         * @function encode
         * @memberof pb.Tasks
         * @static
         * @param {pb.ITasks} m Tasks message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Tasks.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.study != null && m.study.length) {
                for (var i = 0; i < m.study.length; ++i)
                    $root.pb.TaskItem.encode(m.study[i], w.uint32(10).fork()).ldelim();
            }
            if (m.daily != null && m.daily.length) {
                for (var i = 0; i < m.daily.length; ++i)
                    $root.pb.TaskItem.encode(m.daily[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a Tasks message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Tasks
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.Tasks} Tasks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Tasks.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.Tasks();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.study && m.study.length))
                        m.study = [];
                    m.study.push($root.pb.TaskItem.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.daily && m.daily.length))
                        m.daily = [];
                    m.daily.push($root.pb.TaskItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Tasks;
    })();

    pb.InviterState = (function() {

        /**
         * Properties of an InviterState.
         * @memberof pb
         * @interface IInviterState
         * @property {number|null} [Total] InviterState Total
         * @property {Array.<number>|null} [Awarded] InviterState Awarded
         */

        /**
         * Constructs a new InviterState.
         * @memberof pb
         * @classdesc Represents an InviterState.
         * @implements IInviterState
         * @constructor
         * @param {pb.IInviterState=} [p] Properties to set
         */
        function InviterState(p) {
            this.Awarded = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * InviterState Total.
         * @member {number} Total
         * @memberof pb.InviterState
         * @instance
         */
        InviterState.prototype.Total = 0;

        /**
         * InviterState Awarded.
         * @member {Array.<number>} Awarded
         * @memberof pb.InviterState
         * @instance
         */
        InviterState.prototype.Awarded = $util.emptyArray;

        /**
         * Encodes the specified InviterState message. Does not implicitly {@link pb.InviterState.verify|verify} messages.
         * @function encode
         * @memberof pb.InviterState
         * @static
         * @param {pb.IInviterState} m InviterState message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        InviterState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Total != null && Object.hasOwnProperty.call(m, "Total"))
                w.uint32(8).int32(m.Total);
            if (m.Awarded != null && m.Awarded.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Awarded.length; ++i)
                    w.int32(m.Awarded[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes an InviterState message from the specified reader or buffer.
         * @function decode
         * @memberof pb.InviterState
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.InviterState} InviterState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        InviterState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.InviterState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Total = r.int32();
                    break;
                case 2:
                    if (!(m.Awarded && m.Awarded.length))
                        m.Awarded = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Awarded.push(r.int32());
                    } else
                        m.Awarded.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return InviterState;
    })();

    pb.GameData = (function() {

        /**
         * Properties of a GameData.
         * @memberof pb
         * @interface IGameData
         * @property {number|null} [uid] GameData uid
         * @property {string|null} [nickname] GameData nickname
         * @property {string|null} [icon] GameData icon
         * @property {Array.<number>|null} [properties] GameData properties
         * @property {Array.<pb.IGameCounter>|null} [counters] GameData counters
         * @property {pb.ISmxlState|null} [smlxState] GameData smlxState
         * @property {pb.ICgState|null} [cgState] GameData cgState
         * @property {number|null} [today] GameData today
         * @property {Array.<number>|null} [todayTimes] GameData todayTimes
         * @property {Array.<number>|null} [stockList] GameData stockList
         * @property {pb.IZsjcState|null} [zsjcState] GameData zsjcState
         * @property {string|null} [location] GameData location
         * @property {string|null} [gender] GameData gender
         * @property {Array.<number>|null} [favorList] GameData favorList
         * @property {pb.ITasks|null} [tasks] GameData tasks
         * @property {number|null} [week] GameData week
         * @property {string|null} [mobile] GameData mobile
         * @property {Array.<number>|null} [aiStockList] GameData aiStockList
         * @property {Array.<pb.ICgdsStockListItem>|null} [cgdsStockList] GameData cgdsStockList
         * @property {number|null} [todayAdtimes] GameData todayAdtimes
         * @property {Array.<number>|null} [award7] GameData award7
         * @property {boolean|null} [isEditedNick] GameData isEditedNick
         * @property {boolean|null} [isEditedIcon] GameData isEditedIcon
         * @property {Array.<number>|null} [cgdsStockListLast] GameData cgdsStockListLast
         * @property {pb.IInviterState|null} [inviterState] GameData inviterState
         * @property {boolean|null} [isBindedMobile] GameData isBindedMobile
         */

        /**
         * Constructs a new GameData.
         * @memberof pb
         * @classdesc Represents a GameData.
         * @implements IGameData
         * @constructor
         * @param {pb.IGameData=} [p] Properties to set
         */
        function GameData(p) {
            this.properties = [];
            this.counters = [];
            this.todayTimes = [];
            this.stockList = [];
            this.favorList = [];
            this.aiStockList = [];
            this.cgdsStockList = [];
            this.award7 = [];
            this.cgdsStockListLast = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameData uid.
         * @member {number} uid
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.uid = 0;

        /**
         * GameData nickname.
         * @member {string} nickname
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.nickname = "";

        /**
         * GameData icon.
         * @member {string} icon
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.icon = "";

        /**
         * GameData properties.
         * @member {Array.<number>} properties
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.properties = $util.emptyArray;

        /**
         * GameData counters.
         * @member {Array.<pb.IGameCounter>} counters
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.counters = $util.emptyArray;

        /**
         * GameData smlxState.
         * @member {pb.ISmxlState|null|undefined} smlxState
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.smlxState = null;

        /**
         * GameData cgState.
         * @member {pb.ICgState|null|undefined} cgState
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.cgState = null;

        /**
         * GameData today.
         * @member {number} today
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.today = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameData todayTimes.
         * @member {Array.<number>} todayTimes
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.todayTimes = $util.emptyArray;

        /**
         * GameData stockList.
         * @member {Array.<number>} stockList
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.stockList = $util.emptyArray;

        /**
         * GameData zsjcState.
         * @member {pb.IZsjcState|null|undefined} zsjcState
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.zsjcState = null;

        /**
         * GameData location.
         * @member {string} location
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.location = "";

        /**
         * GameData gender.
         * @member {string} gender
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.gender = "";

        /**
         * GameData favorList.
         * @member {Array.<number>} favorList
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.favorList = $util.emptyArray;

        /**
         * GameData tasks.
         * @member {pb.ITasks|null|undefined} tasks
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.tasks = null;

        /**
         * GameData week.
         * @member {number} week
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.week = 0;

        /**
         * GameData mobile.
         * @member {string} mobile
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.mobile = "";

        /**
         * GameData aiStockList.
         * @member {Array.<number>} aiStockList
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.aiStockList = $util.emptyArray;

        /**
         * GameData cgdsStockList.
         * @member {Array.<pb.ICgdsStockListItem>} cgdsStockList
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.cgdsStockList = $util.emptyArray;

        /**
         * GameData todayAdtimes.
         * @member {number} todayAdtimes
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.todayAdtimes = 0;

        /**
         * GameData award7.
         * @member {Array.<number>} award7
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.award7 = $util.emptyArray;

        /**
         * GameData isEditedNick.
         * @member {boolean} isEditedNick
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.isEditedNick = false;

        /**
         * GameData isEditedIcon.
         * @member {boolean} isEditedIcon
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.isEditedIcon = false;

        /**
         * GameData cgdsStockListLast.
         * @member {Array.<number>} cgdsStockListLast
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.cgdsStockListLast = $util.emptyArray;

        /**
         * GameData inviterState.
         * @member {pb.IInviterState|null|undefined} inviterState
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.inviterState = null;

        /**
         * GameData isBindedMobile.
         * @member {boolean} isBindedMobile
         * @memberof pb.GameData
         * @instance
         */
        GameData.prototype.isBindedMobile = false;

        /**
         * Encodes the specified GameData message. Does not implicitly {@link pb.GameData.verify|verify} messages.
         * @function encode
         * @memberof pb.GameData
         * @static
         * @param {pb.IGameData} m GameData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(18).string(m.nickname);
            if (m.icon != null && Object.hasOwnProperty.call(m, "icon"))
                w.uint32(26).string(m.icon);
            if (m.properties != null && m.properties.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.properties.length; ++i)
                    w.int64(m.properties[i]);
                w.ldelim();
            }
            if (m.counters != null && m.counters.length) {
                for (var i = 0; i < m.counters.length; ++i)
                    $root.pb.GameCounter.encode(m.counters[i], w.uint32(42).fork()).ldelim();
            }
            if (m.smlxState != null && Object.hasOwnProperty.call(m, "smlxState"))
                $root.pb.SmxlState.encode(m.smlxState, w.uint32(50).fork()).ldelim();
            if (m.cgState != null && Object.hasOwnProperty.call(m, "cgState"))
                $root.pb.CgState.encode(m.cgState, w.uint32(58).fork()).ldelim();
            if (m.today != null && Object.hasOwnProperty.call(m, "today"))
                w.uint32(64).int64(m.today);
            if (m.todayTimes != null && m.todayTimes.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.todayTimes.length; ++i)
                    w.int32(m.todayTimes[i]);
                w.ldelim();
            }
            if (m.stockList != null && m.stockList.length) {
                w.uint32(82).fork();
                for (var i = 0; i < m.stockList.length; ++i)
                    w.int32(m.stockList[i]);
                w.ldelim();
            }
            if (m.zsjcState != null && Object.hasOwnProperty.call(m, "zsjcState"))
                $root.pb.ZsjcState.encode(m.zsjcState, w.uint32(90).fork()).ldelim();
            if (m.location != null && Object.hasOwnProperty.call(m, "location"))
                w.uint32(98).string(m.location);
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(106).string(m.gender);
            if (m.favorList != null && m.favorList.length) {
                w.uint32(114).fork();
                for (var i = 0; i < m.favorList.length; ++i)
                    w.int32(m.favorList[i]);
                w.ldelim();
            }
            if (m.tasks != null && Object.hasOwnProperty.call(m, "tasks"))
                $root.pb.Tasks.encode(m.tasks, w.uint32(122).fork()).ldelim();
            if (m.week != null && Object.hasOwnProperty.call(m, "week"))
                w.uint32(128).int32(m.week);
            if (m.mobile != null && Object.hasOwnProperty.call(m, "mobile"))
                w.uint32(138).string(m.mobile);
            if (m.aiStockList != null && m.aiStockList.length) {
                w.uint32(146).fork();
                for (var i = 0; i < m.aiStockList.length; ++i)
                    w.int32(m.aiStockList[i]);
                w.ldelim();
            }
            if (m.cgdsStockList != null && m.cgdsStockList.length) {
                for (var i = 0; i < m.cgdsStockList.length; ++i)
                    $root.pb.CgdsStockListItem.encode(m.cgdsStockList[i], w.uint32(154).fork()).ldelim();
            }
            if (m.todayAdtimes != null && Object.hasOwnProperty.call(m, "todayAdtimes"))
                w.uint32(160).int32(m.todayAdtimes);
            if (m.award7 != null && m.award7.length) {
                w.uint32(170).fork();
                for (var i = 0; i < m.award7.length; ++i)
                    w.int32(m.award7[i]);
                w.ldelim();
            }
            if (m.isEditedNick != null && Object.hasOwnProperty.call(m, "isEditedNick"))
                w.uint32(176).bool(m.isEditedNick);
            if (m.isEditedIcon != null && Object.hasOwnProperty.call(m, "isEditedIcon"))
                w.uint32(184).bool(m.isEditedIcon);
            if (m.cgdsStockListLast != null && m.cgdsStockListLast.length) {
                w.uint32(194).fork();
                for (var i = 0; i < m.cgdsStockListLast.length; ++i)
                    w.int32(m.cgdsStockListLast[i]);
                w.ldelim();
            }
            if (m.inviterState != null && Object.hasOwnProperty.call(m, "inviterState"))
                $root.pb.InviterState.encode(m.inviterState, w.uint32(202).fork()).ldelim();
            if (m.isBindedMobile != null && Object.hasOwnProperty.call(m, "isBindedMobile"))
                w.uint32(208).bool(m.isBindedMobile);
            return w;
        };

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GameData} GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GameData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.nickname = r.string();
                    break;
                case 3:
                    m.icon = r.string();
                    break;
                case 4:
                    if (!(m.properties && m.properties.length))
                        m.properties = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.properties.push(r.int64());
                    } else
                        m.properties.push(r.int64());
                    break;
                case 5:
                    if (!(m.counters && m.counters.length))
                        m.counters = [];
                    m.counters.push($root.pb.GameCounter.decode(r, r.uint32()));
                    break;
                case 6:
                    m.smlxState = $root.pb.SmxlState.decode(r, r.uint32());
                    break;
                case 7:
                    m.cgState = $root.pb.CgState.decode(r, r.uint32());
                    break;
                case 8:
                    m.today = r.int64();
                    break;
                case 9:
                    if (!(m.todayTimes && m.todayTimes.length))
                        m.todayTimes = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.todayTimes.push(r.int32());
                    } else
                        m.todayTimes.push(r.int32());
                    break;
                case 10:
                    if (!(m.stockList && m.stockList.length))
                        m.stockList = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.stockList.push(r.int32());
                    } else
                        m.stockList.push(r.int32());
                    break;
                case 11:
                    m.zsjcState = $root.pb.ZsjcState.decode(r, r.uint32());
                    break;
                case 12:
                    m.location = r.string();
                    break;
                case 13:
                    m.gender = r.string();
                    break;
                case 14:
                    if (!(m.favorList && m.favorList.length))
                        m.favorList = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.favorList.push(r.int32());
                    } else
                        m.favorList.push(r.int32());
                    break;
                case 15:
                    m.tasks = $root.pb.Tasks.decode(r, r.uint32());
                    break;
                case 16:
                    m.week = r.int32();
                    break;
                case 17:
                    m.mobile = r.string();
                    break;
                case 18:
                    if (!(m.aiStockList && m.aiStockList.length))
                        m.aiStockList = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.aiStockList.push(r.int32());
                    } else
                        m.aiStockList.push(r.int32());
                    break;
                case 19:
                    if (!(m.cgdsStockList && m.cgdsStockList.length))
                        m.cgdsStockList = [];
                    m.cgdsStockList.push($root.pb.CgdsStockListItem.decode(r, r.uint32()));
                    break;
                case 20:
                    m.todayAdtimes = r.int32();
                    break;
                case 21:
                    if (!(m.award7 && m.award7.length))
                        m.award7 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.award7.push(r.int32());
                    } else
                        m.award7.push(r.int32());
                    break;
                case 22:
                    m.isEditedNick = r.bool();
                    break;
                case 23:
                    m.isEditedIcon = r.bool();
                    break;
                case 24:
                    if (!(m.cgdsStockListLast && m.cgdsStockListLast.length))
                        m.cgdsStockListLast = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.cgdsStockListLast.push(r.int32());
                    } else
                        m.cgdsStockListLast.push(r.int32());
                    break;
                case 25:
                    m.inviterState = $root.pb.InviterState.decode(r, r.uint32());
                    break;
                case 26:
                    m.isBindedMobile = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameData;
    })();

    pb.GamePropertyItem = (function() {

        /**
         * Properties of a GamePropertyItem.
         * @memberof pb
         * @interface IGamePropertyItem
         * @property {pb.GamePropertyId|null} [id] GamePropertyItem id
         * @property {number|null} [oldValue] GamePropertyItem oldValue
         * @property {number|null} [newValue] GamePropertyItem newValue
         */

        /**
         * Constructs a new GamePropertyItem.
         * @memberof pb
         * @classdesc Represents a GamePropertyItem.
         * @implements IGamePropertyItem
         * @constructor
         * @param {pb.IGamePropertyItem=} [p] Properties to set
         */
        function GamePropertyItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GamePropertyItem id.
         * @member {pb.GamePropertyId} id
         * @memberof pb.GamePropertyItem
         * @instance
         */
        GamePropertyItem.prototype.id = 0;

        /**
         * GamePropertyItem oldValue.
         * @member {number} oldValue
         * @memberof pb.GamePropertyItem
         * @instance
         */
        GamePropertyItem.prototype.oldValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GamePropertyItem newValue.
         * @member {number} newValue
         * @memberof pb.GamePropertyItem
         * @instance
         */
        GamePropertyItem.prototype.newValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GamePropertyItem message. Does not implicitly {@link pb.GamePropertyItem.verify|verify} messages.
         * @function encode
         * @memberof pb.GamePropertyItem
         * @static
         * @param {pb.IGamePropertyItem} m GamePropertyItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GamePropertyItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.oldValue != null && Object.hasOwnProperty.call(m, "oldValue"))
                w.uint32(16).int64(m.oldValue);
            if (m.newValue != null && Object.hasOwnProperty.call(m, "newValue"))
                w.uint32(24).int64(m.newValue);
            return w;
        };

        /**
         * Decodes a GamePropertyItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GamePropertyItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GamePropertyItem} GamePropertyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GamePropertyItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GamePropertyItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.oldValue = r.int64();
                    break;
                case 3:
                    m.newValue = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GamePropertyItem;
    })();

    pb.GameProperties = (function() {

        /**
         * Properties of a GameProperties.
         * @memberof pb
         * @interface IGameProperties
         * @property {Array.<pb.IGamePropertyItem>|null} [items] GameProperties items
         */

        /**
         * Constructs a new GameProperties.
         * @memberof pb
         * @classdesc Represents a GameProperties.
         * @implements IGameProperties
         * @constructor
         * @param {pb.IGameProperties=} [p] Properties to set
         */
        function GameProperties(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameProperties items.
         * @member {Array.<pb.IGamePropertyItem>} items
         * @memberof pb.GameProperties
         * @instance
         */
        GameProperties.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified GameProperties message. Does not implicitly {@link pb.GameProperties.verify|verify} messages.
         * @function encode
         * @memberof pb.GameProperties
         * @static
         * @param {pb.IGameProperties} m GameProperties message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameProperties.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.GamePropertyItem.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a GameProperties message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameProperties
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GameProperties} GameProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameProperties.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GameProperties();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.GamePropertyItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameProperties;
    })();

    pb.GameOperationItem = (function() {

        /**
         * Properties of a GameOperationItem.
         * @memberof pb
         * @interface IGameOperationItem
         * @property {pb.GameOperationId|null} [opId] GameOperationItem opId
         * @property {number|null} [code] GameOperationItem code
         * @property {pb.KType|null} [kType] GameOperationItem kType
         * @property {number|null} [kTs] GameOperationItem kTs
         * @property {number|null} [kOffset] GameOperationItem kOffset
         * @property {number|null} [price] GameOperationItem price
         * @property {number|null} [volume] GameOperationItem volume
         * @property {number|null} [opTs] GameOperationItem opTs
         * @property {number|null} [volFraction] GameOperationItem volFraction
         */

        /**
         * Constructs a new GameOperationItem.
         * @memberof pb
         * @classdesc Represents a GameOperationItem.
         * @implements IGameOperationItem
         * @constructor
         * @param {pb.IGameOperationItem=} [p] Properties to set
         */
        function GameOperationItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameOperationItem opId.
         * @member {pb.GameOperationId} opId
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.opId = 0;

        /**
         * GameOperationItem code.
         * @member {number} code
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.code = 0;

        /**
         * GameOperationItem kType.
         * @member {pb.KType} kType
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.kType = 0;

        /**
         * GameOperationItem kTs.
         * @member {number} kTs
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.kTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameOperationItem kOffset.
         * @member {number} kOffset
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.kOffset = 0;

        /**
         * GameOperationItem price.
         * @member {number} price
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.price = 0;

        /**
         * GameOperationItem volume.
         * @member {number} volume
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameOperationItem opTs.
         * @member {number} opTs
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.opTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameOperationItem volFraction.
         * @member {number} volFraction
         * @memberof pb.GameOperationItem
         * @instance
         */
        GameOperationItem.prototype.volFraction = 0;

        /**
         * Encodes the specified GameOperationItem message. Does not implicitly {@link pb.GameOperationItem.verify|verify} messages.
         * @function encode
         * @memberof pb.GameOperationItem
         * @static
         * @param {pb.IGameOperationItem} m GameOperationItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameOperationItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.opId != null && Object.hasOwnProperty.call(m, "opId"))
                w.uint32(8).int32(m.opId);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).int32(m.code);
            if (m.kType != null && Object.hasOwnProperty.call(m, "kType"))
                w.uint32(24).int32(m.kType);
            if (m.kTs != null && Object.hasOwnProperty.call(m, "kTs"))
                w.uint32(32).int64(m.kTs);
            if (m.kOffset != null && Object.hasOwnProperty.call(m, "kOffset"))
                w.uint32(40).int32(m.kOffset);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(49).double(m.price);
            if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                w.uint32(56).int64(m.volume);
            if (m.opTs != null && Object.hasOwnProperty.call(m, "opTs"))
                w.uint32(64).int64(m.opTs);
            if (m.volFraction != null && Object.hasOwnProperty.call(m, "volFraction"))
                w.uint32(73).double(m.volFraction);
            return w;
        };

        /**
         * Decodes a GameOperationItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameOperationItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GameOperationItem} GameOperationItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameOperationItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GameOperationItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.opId = r.int32();
                    break;
                case 2:
                    m.code = r.int32();
                    break;
                case 3:
                    m.kType = r.int32();
                    break;
                case 4:
                    m.kTs = r.int64();
                    break;
                case 5:
                    m.kOffset = r.int32();
                    break;
                case 6:
                    m.price = r.double();
                    break;
                case 7:
                    m.volume = r.int64();
                    break;
                case 8:
                    m.opTs = r.int64();
                    break;
                case 9:
                    m.volFraction = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameOperationItem;
    })();

    pb.GameOperations = (function() {

        /**
         * Properties of a GameOperations.
         * @memberof pb
         * @interface IGameOperations
         * @property {Array.<pb.IGameOperationItem>|null} [items] GameOperations items
         * @property {Array.<number>|null} [junXian] GameOperations junXian
         */

        /**
         * Constructs a new GameOperations.
         * @memberof pb
         * @classdesc Represents a GameOperations.
         * @implements IGameOperations
         * @constructor
         * @param {pb.IGameOperations=} [p] Properties to set
         */
        function GameOperations(p) {
            this.items = [];
            this.junXian = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameOperations items.
         * @member {Array.<pb.IGameOperationItem>} items
         * @memberof pb.GameOperations
         * @instance
         */
        GameOperations.prototype.items = $util.emptyArray;

        /**
         * GameOperations junXian.
         * @member {Array.<number>} junXian
         * @memberof pb.GameOperations
         * @instance
         */
        GameOperations.prototype.junXian = $util.emptyArray;

        /**
         * Encodes the specified GameOperations message. Does not implicitly {@link pb.GameOperations.verify|verify} messages.
         * @function encode
         * @memberof pb.GameOperations
         * @static
         * @param {pb.IGameOperations} m GameOperations message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameOperations.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.GameOperationItem.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            if (m.junXian != null && m.junXian.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.junXian.length; ++i)
                    w.int32(m.junXian[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a GameOperations message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameOperations
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GameOperations} GameOperations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameOperations.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GameOperations();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.GameOperationItem.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.junXian && m.junXian.length))
                        m.junXian = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.junXian.push(r.int32());
                    } else
                        m.junXian.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameOperations;
    })();

    pb.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof pb
         * @interface IGameResult
         * @property {number|null} [uid] GameResult uid
         * @property {pb.GameType|null} [gType] GameResult gType
         * @property {number|null} [quotesCode] GameResult quotesCode
         * @property {pb.KType|null} [kType] GameResult kType
         * @property {number|null} [kFrom] GameResult kFrom
         * @property {number|null} [kTo] GameResult kTo
         * @property {number|null} [stockProfitRate] GameResult stockProfitRate
         * @property {number|null} [userProfitRate] GameResult userProfitRate
         * @property {number|null} [userCapital] GameResult userCapital
         * @property {number|null} [userProfit] GameResult userProfit
         * @property {number|null} [ts] GameResult ts
         * @property {number|null} [rank] GameResult rank
         * @property {number|null} [refId] GameResult refId
         * @property {number|null} [kStartup] GameResult kStartup
         * @property {number|null} [kStop] GameResult kStop
         */

        /**
         * Constructs a new GameResult.
         * @memberof pb
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {pb.IGameResult=} [p] Properties to set
         */
        function GameResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameResult uid.
         * @member {number} uid
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.uid = 0;

        /**
         * GameResult gType.
         * @member {pb.GameType} gType
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.gType = 0;

        /**
         * GameResult quotesCode.
         * @member {number} quotesCode
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.quotesCode = 0;

        /**
         * GameResult kType.
         * @member {pb.KType} kType
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.kType = 0;

        /**
         * GameResult kFrom.
         * @member {number} kFrom
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.kFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult kTo.
         * @member {number} kTo
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.kTo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult stockProfitRate.
         * @member {number} stockProfitRate
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.stockProfitRate = 0;

        /**
         * GameResult userProfitRate.
         * @member {number} userProfitRate
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.userProfitRate = 0;

        /**
         * GameResult userCapital.
         * @member {number} userCapital
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.userCapital = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult userProfit.
         * @member {number} userProfit
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.userProfit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult ts.
         * @member {number} ts
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult rank.
         * @member {number} rank
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.rank = 0;

        /**
         * GameResult refId.
         * @member {number} refId
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.refId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult kStartup.
         * @member {number} kStartup
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.kStartup = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameResult kStop.
         * @member {number} kStop
         * @memberof pb.GameResult
         * @instance
         */
        GameResult.prototype.kStop = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link pb.GameResult.verify|verify} messages.
         * @function encode
         * @memberof pb.GameResult
         * @static
         * @param {pb.IGameResult} m GameResult message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GameResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.gType != null && Object.hasOwnProperty.call(m, "gType"))
                w.uint32(16).int32(m.gType);
            if (m.quotesCode != null && Object.hasOwnProperty.call(m, "quotesCode"))
                w.uint32(24).int32(m.quotesCode);
            if (m.kType != null && Object.hasOwnProperty.call(m, "kType"))
                w.uint32(32).int32(m.kType);
            if (m.kFrom != null && Object.hasOwnProperty.call(m, "kFrom"))
                w.uint32(40).int64(m.kFrom);
            if (m.kTo != null && Object.hasOwnProperty.call(m, "kTo"))
                w.uint32(48).int64(m.kTo);
            if (m.stockProfitRate != null && Object.hasOwnProperty.call(m, "stockProfitRate"))
                w.uint32(57).double(m.stockProfitRate);
            if (m.userProfitRate != null && Object.hasOwnProperty.call(m, "userProfitRate"))
                w.uint32(65).double(m.userProfitRate);
            if (m.userCapital != null && Object.hasOwnProperty.call(m, "userCapital"))
                w.uint32(72).int64(m.userCapital);
            if (m.userProfit != null && Object.hasOwnProperty.call(m, "userProfit"))
                w.uint32(80).int64(m.userProfit);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(88).int64(m.ts);
            if (m.rank != null && Object.hasOwnProperty.call(m, "rank"))
                w.uint32(96).int32(m.rank);
            if (m.refId != null && Object.hasOwnProperty.call(m, "refId"))
                w.uint32(104).int64(m.refId);
            if (m.kStartup != null && Object.hasOwnProperty.call(m, "kStartup"))
                w.uint32(112).int64(m.kStartup);
            if (m.kStop != null && Object.hasOwnProperty.call(m, "kStop"))
                w.uint32(120).int64(m.kStop);
            return w;
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameResult
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.GameResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.gType = r.int32();
                    break;
                case 3:
                    m.quotesCode = r.int32();
                    break;
                case 4:
                    m.kType = r.int32();
                    break;
                case 5:
                    m.kFrom = r.int64();
                    break;
                case 6:
                    m.kTo = r.int64();
                    break;
                case 7:
                    m.stockProfitRate = r.double();
                    break;
                case 8:
                    m.userProfitRate = r.double();
                    break;
                case 9:
                    m.userCapital = r.int64();
                    break;
                case 10:
                    m.userProfit = r.int64();
                    break;
                case 11:
                    m.ts = r.int64();
                    break;
                case 12:
                    m.rank = r.int32();
                    break;
                case 13:
                    m.refId = r.int64();
                    break;
                case 14:
                    m.kStartup = r.int64();
                    break;
                case 15:
                    m.kStop = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameResult;
    })();

    pb.CmdGameLogin = (function() {

        /**
         * Properties of a CmdGameLogin.
         * @memberof pb
         * @interface ICmdGameLogin
         * @property {number|null} [uid] CmdGameLogin uid
         * @property {string|null} [token] CmdGameLogin token
         */

        /**
         * Constructs a new CmdGameLogin.
         * @memberof pb
         * @classdesc Represents a CmdGameLogin.
         * @implements ICmdGameLogin
         * @constructor
         * @param {pb.ICmdGameLogin=} [p] Properties to set
         */
        function CmdGameLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGameLogin uid.
         * @member {number} uid
         * @memberof pb.CmdGameLogin
         * @instance
         */
        CmdGameLogin.prototype.uid = 0;

        /**
         * CmdGameLogin token.
         * @member {string} token
         * @memberof pb.CmdGameLogin
         * @instance
         */
        CmdGameLogin.prototype.token = "";

        /**
         * Encodes the specified CmdGameLogin message. Does not implicitly {@link pb.CmdGameLogin.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGameLogin
         * @static
         * @param {pb.ICmdGameLogin} m CmdGameLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGameLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(18).string(m.token);
            return w;
        };

        /**
         * Decodes a CmdGameLogin message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGameLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGameLogin} CmdGameLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGameLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGameLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.token = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGameLogin;
    })();

    pb.CmdGameLoginReply = (function() {

        /**
         * Properties of a CmdGameLoginReply.
         * @memberof pb
         * @interface ICmdGameLoginReply
         * @property {pb.IErrorInfo|null} [result] CmdGameLoginReply result
         * @property {pb.IGameData|null} [data] CmdGameLoginReply data
         */

        /**
         * Constructs a new CmdGameLoginReply.
         * @memberof pb
         * @classdesc Represents a CmdGameLoginReply.
         * @implements ICmdGameLoginReply
         * @constructor
         * @param {pb.ICmdGameLoginReply=} [p] Properties to set
         */
        function CmdGameLoginReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGameLoginReply result.
         * @member {pb.IErrorInfo|null|undefined} result
         * @memberof pb.CmdGameLoginReply
         * @instance
         */
        CmdGameLoginReply.prototype.result = null;

        /**
         * CmdGameLoginReply data.
         * @member {pb.IGameData|null|undefined} data
         * @memberof pb.CmdGameLoginReply
         * @instance
         */
        CmdGameLoginReply.prototype.data = null;

        /**
         * Encodes the specified CmdGameLoginReply message. Does not implicitly {@link pb.CmdGameLoginReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGameLoginReply
         * @static
         * @param {pb.ICmdGameLoginReply} m CmdGameLoginReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGameLoginReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.ErrorInfo.encode(m.result, w.uint32(10).fork()).ldelim();
            if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                $root.pb.GameData.encode(m.data, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a CmdGameLoginReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGameLoginReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGameLoginReply} CmdGameLoginReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGameLoginReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGameLoginReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.result = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.data = $root.pb.GameData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGameLoginReply;
    })();

    pb.CmdUploadIcon = (function() {

        /**
         * Properties of a CmdUploadIcon.
         * @memberof pb
         * @interface ICmdUploadIcon
         * @property {number|null} [uid] CmdUploadIcon uid
         * @property {Uint8Array|null} [icon] CmdUploadIcon icon
         */

        /**
         * Constructs a new CmdUploadIcon.
         * @memberof pb
         * @classdesc Represents a CmdUploadIcon.
         * @implements ICmdUploadIcon
         * @constructor
         * @param {pb.ICmdUploadIcon=} [p] Properties to set
         */
        function CmdUploadIcon(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUploadIcon uid.
         * @member {number} uid
         * @memberof pb.CmdUploadIcon
         * @instance
         */
        CmdUploadIcon.prototype.uid = 0;

        /**
         * CmdUploadIcon icon.
         * @member {Uint8Array} icon
         * @memberof pb.CmdUploadIcon
         * @instance
         */
        CmdUploadIcon.prototype.icon = $util.newBuffer([]);

        /**
         * Encodes the specified CmdUploadIcon message. Does not implicitly {@link pb.CmdUploadIcon.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUploadIcon
         * @static
         * @param {pb.ICmdUploadIcon} m CmdUploadIcon message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUploadIcon.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.icon != null && Object.hasOwnProperty.call(m, "icon"))
                w.uint32(18).bytes(m.icon);
            return w;
        };

        /**
         * Decodes a CmdUploadIcon message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUploadIcon
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUploadIcon} CmdUploadIcon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUploadIcon.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUploadIcon();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.icon = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUploadIcon;
    })();

    pb.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof pb
         * @interface IPlayerInfo
         * @property {number|null} [uid] PlayerInfo uid
         * @property {string|null} [nick] PlayerInfo nick
         * @property {string|null} [icon] PlayerInfo icon
         * @property {string|null} [gender] PlayerInfo gender
         * @property {string|null} [location] PlayerInfo location
         * @property {Array.<number>|null} [properties] PlayerInfo properties
         * @property {Array.<pb.IGameCounter>|null} [counters] PlayerInfo counters
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof pb
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {pb.IPlayerInfo=} [p] Properties to set
         */
        function PlayerInfo(p) {
            this.properties = [];
            this.counters = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerInfo uid.
         * @member {number} uid
         * @memberof pb.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.uid = 0;

        /**
         * PlayerInfo nick.
         * @member {string} nick
         * @memberof pb.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.nick = "";

        /**
         * PlayerInfo icon.
         * @member {string} icon
         * @memberof pb.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.icon = "";

        /**
         * PlayerInfo gender.
         * @member {string} gender
         * @memberof pb.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.gender = "";

        /**
         * PlayerInfo location.
         * @member {string} location
         * @memberof pb.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.location = "";

        /**
         * PlayerInfo properties.
         * @member {Array.<number>} properties
         * @memberof pb.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.properties = $util.emptyArray;

        /**
         * PlayerInfo counters.
         * @member {Array.<pb.IGameCounter>} counters
         * @memberof pb.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.counters = $util.emptyArray;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link pb.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.PlayerInfo
         * @static
         * @param {pb.IPlayerInfo} m PlayerInfo message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                w.uint32(18).string(m.nick);
            if (m.icon != null && Object.hasOwnProperty.call(m, "icon"))
                w.uint32(26).string(m.icon);
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(34).string(m.gender);
            if (m.location != null && Object.hasOwnProperty.call(m, "location"))
                w.uint32(42).string(m.location);
            if (m.properties != null && m.properties.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.properties.length; ++i)
                    w.int64(m.properties[i]);
                w.ldelim();
            }
            if (m.counters != null && m.counters.length) {
                for (var i = 0; i < m.counters.length; ++i)
                    $root.pb.GameCounter.encode(m.counters[i], w.uint32(58).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlayerInfo
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.PlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.nick = r.string();
                    break;
                case 3:
                    m.icon = r.string();
                    break;
                case 4:
                    m.gender = r.string();
                    break;
                case 5:
                    m.location = r.string();
                    break;
                case 6:
                    if (!(m.properties && m.properties.length))
                        m.properties = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.properties.push(r.int64());
                    } else
                        m.properties.push(r.int64());
                    break;
                case 7:
                    if (!(m.counters && m.counters.length))
                        m.counters = [];
                    m.counters.push($root.pb.GameCounter.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerInfo;
    })();

    pb.CmdEditFavorList = (function() {

        /**
         * Properties of a CmdEditFavorList.
         * @memberof pb
         * @interface ICmdEditFavorList
         * @property {boolean|null} [removed] CmdEditFavorList removed
         * @property {number|null} [uid] CmdEditFavorList uid
         */

        /**
         * Constructs a new CmdEditFavorList.
         * @memberof pb
         * @classdesc Represents a CmdEditFavorList.
         * @implements ICmdEditFavorList
         * @constructor
         * @param {pb.ICmdEditFavorList=} [p] Properties to set
         */
        function CmdEditFavorList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdEditFavorList removed.
         * @member {boolean} removed
         * @memberof pb.CmdEditFavorList
         * @instance
         */
        CmdEditFavorList.prototype.removed = false;

        /**
         * CmdEditFavorList uid.
         * @member {number} uid
         * @memberof pb.CmdEditFavorList
         * @instance
         */
        CmdEditFavorList.prototype.uid = 0;

        /**
         * Encodes the specified CmdEditFavorList message. Does not implicitly {@link pb.CmdEditFavorList.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdEditFavorList
         * @static
         * @param {pb.ICmdEditFavorList} m CmdEditFavorList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdEditFavorList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.removed != null && Object.hasOwnProperty.call(m, "removed"))
                w.uint32(8).bool(m.removed);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            return w;
        };

        /**
         * Decodes a CmdEditFavorList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdEditFavorList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdEditFavorList} CmdEditFavorList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdEditFavorList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdEditFavorList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.removed = r.bool();
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdEditFavorList;
    })();

    pb.CmdGetItem = (function() {

        /**
         * Properties of a CmdGetItem.
         * @memberof pb
         * @interface ICmdGetItem
         * @property {number|null} [ts] CmdGetItem ts
         */

        /**
         * Constructs a new CmdGetItem.
         * @memberof pb
         * @classdesc Represents a CmdGetItem.
         * @implements ICmdGetItem
         * @constructor
         * @param {pb.ICmdGetItem=} [p] Properties to set
         */
        function CmdGetItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetItem ts.
         * @member {number} ts
         * @memberof pb.CmdGetItem
         * @instance
         */
        CmdGetItem.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdGetItem message. Does not implicitly {@link pb.CmdGetItem.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetItem
         * @static
         * @param {pb.ICmdGetItem} m CmdGetItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(8).int64(m.ts);
            return w;
        };

        /**
         * Decodes a CmdGetItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetItem} CmdGetItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetItem;
    })();

    pb.CmdResetGameCounter = (function() {

        /**
         * Properties of a CmdResetGameCounter.
         * @memberof pb
         * @interface ICmdResetGameCounter
         * @property {pb.GameType|null} [game] CmdResetGameCounter game
         */

        /**
         * Constructs a new CmdResetGameCounter.
         * @memberof pb
         * @classdesc Represents a CmdResetGameCounter.
         * @implements ICmdResetGameCounter
         * @constructor
         * @param {pb.ICmdResetGameCounter=} [p] Properties to set
         */
        function CmdResetGameCounter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdResetGameCounter game.
         * @member {pb.GameType} game
         * @memberof pb.CmdResetGameCounter
         * @instance
         */
        CmdResetGameCounter.prototype.game = 0;

        /**
         * Encodes the specified CmdResetGameCounter message. Does not implicitly {@link pb.CmdResetGameCounter.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdResetGameCounter
         * @static
         * @param {pb.ICmdResetGameCounter} m CmdResetGameCounter message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdResetGameCounter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(8).int32(m.game);
            return w;
        };

        /**
         * Decodes a CmdResetGameCounter message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdResetGameCounter
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdResetGameCounter} CmdResetGameCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdResetGameCounter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdResetGameCounter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.game = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdResetGameCounter;
    })();

    pb.TaskItem = (function() {

        /**
         * Properties of a TaskItem.
         * @memberof pb
         * @interface ITaskItem
         * @property {number|null} [taskId] TaskItem taskId
         * @property {number|null} [progress] TaskItem progress
         * @property {number|null} [award] TaskItem award
         * @property {number|null} [got] TaskItem got
         */

        /**
         * Constructs a new TaskItem.
         * @memberof pb
         * @classdesc Represents a TaskItem.
         * @implements ITaskItem
         * @constructor
         * @param {pb.ITaskItem=} [p] Properties to set
         */
        function TaskItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * TaskItem taskId.
         * @member {number} taskId
         * @memberof pb.TaskItem
         * @instance
         */
        TaskItem.prototype.taskId = 0;

        /**
         * TaskItem progress.
         * @member {number} progress
         * @memberof pb.TaskItem
         * @instance
         */
        TaskItem.prototype.progress = 0;

        /**
         * TaskItem award.
         * @member {number} award
         * @memberof pb.TaskItem
         * @instance
         */
        TaskItem.prototype.award = 0;

        /**
         * TaskItem got.
         * @member {number} got
         * @memberof pb.TaskItem
         * @instance
         */
        TaskItem.prototype.got = 0;

        /**
         * Encodes the specified TaskItem message. Does not implicitly {@link pb.TaskItem.verify|verify} messages.
         * @function encode
         * @memberof pb.TaskItem
         * @static
         * @param {pb.ITaskItem} m TaskItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        TaskItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.taskId != null && Object.hasOwnProperty.call(m, "taskId"))
                w.uint32(8).int32(m.taskId);
            if (m.progress != null && Object.hasOwnProperty.call(m, "progress"))
                w.uint32(16).int32(m.progress);
            if (m.award != null && Object.hasOwnProperty.call(m, "award"))
                w.uint32(24).int32(m.award);
            if (m.got != null && Object.hasOwnProperty.call(m, "got"))
                w.uint32(32).int32(m.got);
            return w;
        };

        /**
         * Decodes a TaskItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TaskItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.TaskItem} TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        TaskItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.TaskItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.taskId = r.int32();
                    break;
                case 2:
                    m.progress = r.int32();
                    break;
                case 3:
                    m.award = r.int32();
                    break;
                case 4:
                    m.got = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TaskItem;
    })();

    pb.CmdStudyProgress = (function() {

        /**
         * Properties of a CmdStudyProgress.
         * @memberof pb
         * @interface ICmdStudyProgress
         * @property {number|null} [index] CmdStudyProgress index
         * @property {number|null} [progress] CmdStudyProgress progress
         * @property {number|null} [award] CmdStudyProgress award
         */

        /**
         * Constructs a new CmdStudyProgress.
         * @memberof pb
         * @classdesc Represents a CmdStudyProgress.
         * @implements ICmdStudyProgress
         * @constructor
         * @param {pb.ICmdStudyProgress=} [p] Properties to set
         */
        function CmdStudyProgress(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdStudyProgress index.
         * @member {number} index
         * @memberof pb.CmdStudyProgress
         * @instance
         */
        CmdStudyProgress.prototype.index = 0;

        /**
         * CmdStudyProgress progress.
         * @member {number} progress
         * @memberof pb.CmdStudyProgress
         * @instance
         */
        CmdStudyProgress.prototype.progress = 0;

        /**
         * CmdStudyProgress award.
         * @member {number} award
         * @memberof pb.CmdStudyProgress
         * @instance
         */
        CmdStudyProgress.prototype.award = 0;

        /**
         * Encodes the specified CmdStudyProgress message. Does not implicitly {@link pb.CmdStudyProgress.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdStudyProgress
         * @static
         * @param {pb.ICmdStudyProgress} m CmdStudyProgress message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdStudyProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(8).int32(m.index);
            if (m.progress != null && Object.hasOwnProperty.call(m, "progress"))
                w.uint32(16).int32(m.progress);
            if (m.award != null && Object.hasOwnProperty.call(m, "award"))
                w.uint32(24).int32(m.award);
            return w;
        };

        /**
         * Decodes a CmdStudyProgress message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdStudyProgress
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdStudyProgress} CmdStudyProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdStudyProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdStudyProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.index = r.int32();
                    break;
                case 2:
                    m.progress = r.int32();
                    break;
                case 3:
                    m.award = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdStudyProgress;
    })();

    pb.CmdGetDailyAward = (function() {

        /**
         * Properties of a CmdGetDailyAward.
         * @memberof pb
         * @interface ICmdGetDailyAward
         * @property {number|null} [index] CmdGetDailyAward index
         * @property {boolean|null} [adClicked] CmdGetDailyAward adClicked
         */

        /**
         * Constructs a new CmdGetDailyAward.
         * @memberof pb
         * @classdesc Represents a CmdGetDailyAward.
         * @implements ICmdGetDailyAward
         * @constructor
         * @param {pb.ICmdGetDailyAward=} [p] Properties to set
         */
        function CmdGetDailyAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetDailyAward index.
         * @member {number} index
         * @memberof pb.CmdGetDailyAward
         * @instance
         */
        CmdGetDailyAward.prototype.index = 0;

        /**
         * CmdGetDailyAward adClicked.
         * @member {boolean} adClicked
         * @memberof pb.CmdGetDailyAward
         * @instance
         */
        CmdGetDailyAward.prototype.adClicked = false;

        /**
         * Encodes the specified CmdGetDailyAward message. Does not implicitly {@link pb.CmdGetDailyAward.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetDailyAward
         * @static
         * @param {pb.ICmdGetDailyAward} m CmdGetDailyAward message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetDailyAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(8).int32(m.index);
            if (m.adClicked != null && Object.hasOwnProperty.call(m, "adClicked"))
                w.uint32(16).bool(m.adClicked);
            return w;
        };

        /**
         * Decodes a CmdGetDailyAward message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetDailyAward
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetDailyAward} CmdGetDailyAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetDailyAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetDailyAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.index = r.int32();
                    break;
                case 2:
                    m.adClicked = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetDailyAward;
    })();

    pb.CmdDailyTaskProgress = (function() {

        /**
         * Properties of a CmdDailyTaskProgress.
         * @memberof pb
         * @interface ICmdDailyTaskProgress
         * @property {number|null} [uid] CmdDailyTaskProgress uid
         * @property {number|null} [taskId] CmdDailyTaskProgress taskId
         */

        /**
         * Constructs a new CmdDailyTaskProgress.
         * @memberof pb
         * @classdesc Represents a CmdDailyTaskProgress.
         * @implements ICmdDailyTaskProgress
         * @constructor
         * @param {pb.ICmdDailyTaskProgress=} [p] Properties to set
         */
        function CmdDailyTaskProgress(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdDailyTaskProgress uid.
         * @member {number} uid
         * @memberof pb.CmdDailyTaskProgress
         * @instance
         */
        CmdDailyTaskProgress.prototype.uid = 0;

        /**
         * CmdDailyTaskProgress taskId.
         * @member {number} taskId
         * @memberof pb.CmdDailyTaskProgress
         * @instance
         */
        CmdDailyTaskProgress.prototype.taskId = 0;

        /**
         * Encodes the specified CmdDailyTaskProgress message. Does not implicitly {@link pb.CmdDailyTaskProgress.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdDailyTaskProgress
         * @static
         * @param {pb.ICmdDailyTaskProgress} m CmdDailyTaskProgress message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdDailyTaskProgress.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.taskId != null && Object.hasOwnProperty.call(m, "taskId"))
                w.uint32(16).int32(m.taskId);
            return w;
        };

        /**
         * Decodes a CmdDailyTaskProgress message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdDailyTaskProgress
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdDailyTaskProgress} CmdDailyTaskProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdDailyTaskProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdDailyTaskProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.taskId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdDailyTaskProgress;
    })();

    pb.CmdGetInviterAward = (function() {

        /**
         * Properties of a CmdGetInviterAward.
         * @memberof pb
         * @interface ICmdGetInviterAward
         * @property {number|null} [propertyId] CmdGetInviterAward propertyId
         * @property {number|null} [count] CmdGetInviterAward count
         */

        /**
         * Constructs a new CmdGetInviterAward.
         * @memberof pb
         * @classdesc Represents a CmdGetInviterAward.
         * @implements ICmdGetInviterAward
         * @constructor
         * @param {pb.ICmdGetInviterAward=} [p] Properties to set
         */
        function CmdGetInviterAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetInviterAward propertyId.
         * @member {number} propertyId
         * @memberof pb.CmdGetInviterAward
         * @instance
         */
        CmdGetInviterAward.prototype.propertyId = 0;

        /**
         * CmdGetInviterAward count.
         * @member {number} count
         * @memberof pb.CmdGetInviterAward
         * @instance
         */
        CmdGetInviterAward.prototype.count = 0;

        /**
         * Encodes the specified CmdGetInviterAward message. Does not implicitly {@link pb.CmdGetInviterAward.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetInviterAward
         * @static
         * @param {pb.ICmdGetInviterAward} m CmdGetInviterAward message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetInviterAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.propertyId != null && Object.hasOwnProperty.call(m, "propertyId"))
                w.uint32(8).int32(m.propertyId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(16).int32(m.count);
            return w;
        };

        /**
         * Decodes a CmdGetInviterAward message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetInviterAward
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetInviterAward} CmdGetInviterAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetInviterAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetInviterAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.propertyId = r.int32();
                    break;
                case 2:
                    m.count = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetInviterAward;
    })();

    pb.CmdGameStart = (function() {

        /**
         * Properties of a CmdGameStart.
         * @memberof pb
         * @interface ICmdGameStart
         * @property {pb.GameType|null} [game] CmdGameStart game
         * @property {boolean|null} [isJunxian] CmdGameStart isJunxian
         */

        /**
         * Constructs a new CmdGameStart.
         * @memberof pb
         * @classdesc Represents a CmdGameStart.
         * @implements ICmdGameStart
         * @constructor
         * @param {pb.ICmdGameStart=} [p] Properties to set
         */
        function CmdGameStart(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGameStart game.
         * @member {pb.GameType} game
         * @memberof pb.CmdGameStart
         * @instance
         */
        CmdGameStart.prototype.game = 0;

        /**
         * CmdGameStart isJunxian.
         * @member {boolean} isJunxian
         * @memberof pb.CmdGameStart
         * @instance
         */
        CmdGameStart.prototype.isJunxian = false;

        /**
         * Encodes the specified CmdGameStart message. Does not implicitly {@link pb.CmdGameStart.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGameStart
         * @static
         * @param {pb.ICmdGameStart} m CmdGameStart message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGameStart.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(8).int32(m.game);
            if (m.isJunxian != null && Object.hasOwnProperty.call(m, "isJunxian"))
                w.uint32(16).bool(m.isJunxian);
            return w;
        };

        /**
         * Decodes a CmdGameStart message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGameStart
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGameStart} CmdGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGameStart.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGameStart();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.game = r.int32();
                    break;
                case 2:
                    m.isJunxian = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGameStart;
    })();

    pb.CmdGameOver = (function() {

        /**
         * Properties of a CmdGameOver.
         * @memberof pb
         * @interface ICmdGameOver
         * @property {pb.IGameResult|null} [result] CmdGameOver result
         * @property {pb.IGameOperations|null} [operations] CmdGameOver operations
         */

        /**
         * Constructs a new CmdGameOver.
         * @memberof pb
         * @classdesc Represents a CmdGameOver.
         * @implements ICmdGameOver
         * @constructor
         * @param {pb.ICmdGameOver=} [p] Properties to set
         */
        function CmdGameOver(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGameOver result.
         * @member {pb.IGameResult|null|undefined} result
         * @memberof pb.CmdGameOver
         * @instance
         */
        CmdGameOver.prototype.result = null;

        /**
         * CmdGameOver operations.
         * @member {pb.IGameOperations|null|undefined} operations
         * @memberof pb.CmdGameOver
         * @instance
         */
        CmdGameOver.prototype.operations = null;

        /**
         * Encodes the specified CmdGameOver message. Does not implicitly {@link pb.CmdGameOver.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGameOver
         * @static
         * @param {pb.ICmdGameOver} m CmdGameOver message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGameOver.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.GameResult.encode(m.result, w.uint32(10).fork()).ldelim();
            if (m.operations != null && Object.hasOwnProperty.call(m, "operations"))
                $root.pb.GameOperations.encode(m.operations, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a CmdGameOver message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGameOver
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGameOver} CmdGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGameOver.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGameOver();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.result = $root.pb.GameResult.decode(r, r.uint32());
                    break;
                case 2:
                    m.operations = $root.pb.GameOperations.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGameOver;
    })();

    pb.CmdGameOverReply = (function() {

        /**
         * Properties of a CmdGameOverReply.
         * @memberof pb
         * @interface ICmdGameOverReply
         * @property {number|null} [ts] CmdGameOverReply ts
         */

        /**
         * Constructs a new CmdGameOverReply.
         * @memberof pb
         * @classdesc Represents a CmdGameOverReply.
         * @implements ICmdGameOverReply
         * @constructor
         * @param {pb.ICmdGameOverReply=} [p] Properties to set
         */
        function CmdGameOverReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGameOverReply ts.
         * @member {number} ts
         * @memberof pb.CmdGameOverReply
         * @instance
         */
        CmdGameOverReply.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdGameOverReply message. Does not implicitly {@link pb.CmdGameOverReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGameOverReply
         * @static
         * @param {pb.ICmdGameOverReply} m CmdGameOverReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGameOverReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(8).int64(m.ts);
            return w;
        };

        /**
         * Decodes a CmdGameOverReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGameOverReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGameOverReply} CmdGameOverReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGameOverReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGameOverReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGameOverReply;
    })();

    pb.CmdQueryGameResult = (function() {

        /**
         * Properties of a CmdQueryGameResult.
         * @memberof pb
         * @interface ICmdQueryGameResult
         * @property {number|null} [uid] CmdQueryGameResult uid
         * @property {pb.GameType|null} [gType] CmdQueryGameResult gType
         * @property {number|null} [from] CmdQueryGameResult from
         * @property {number|null} [to] CmdQueryGameResult to
         * @property {number|null} [pageSize] CmdQueryGameResult pageSize
         * @property {number|null} [ts] CmdQueryGameResult ts
         */

        /**
         * Constructs a new CmdQueryGameResult.
         * @memberof pb
         * @classdesc Represents a CmdQueryGameResult.
         * @implements ICmdQueryGameResult
         * @constructor
         * @param {pb.ICmdQueryGameResult=} [p] Properties to set
         */
        function CmdQueryGameResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryGameResult uid.
         * @member {number} uid
         * @memberof pb.CmdQueryGameResult
         * @instance
         */
        CmdQueryGameResult.prototype.uid = 0;

        /**
         * CmdQueryGameResult gType.
         * @member {pb.GameType} gType
         * @memberof pb.CmdQueryGameResult
         * @instance
         */
        CmdQueryGameResult.prototype.gType = 0;

        /**
         * CmdQueryGameResult from.
         * @member {number} from
         * @memberof pb.CmdQueryGameResult
         * @instance
         */
        CmdQueryGameResult.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryGameResult to.
         * @member {number} to
         * @memberof pb.CmdQueryGameResult
         * @instance
         */
        CmdQueryGameResult.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryGameResult pageSize.
         * @member {number} pageSize
         * @memberof pb.CmdQueryGameResult
         * @instance
         */
        CmdQueryGameResult.prototype.pageSize = 0;

        /**
         * CmdQueryGameResult ts.
         * @member {number} ts
         * @memberof pb.CmdQueryGameResult
         * @instance
         */
        CmdQueryGameResult.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdQueryGameResult message. Does not implicitly {@link pb.CmdQueryGameResult.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryGameResult
         * @static
         * @param {pb.ICmdQueryGameResult} m CmdQueryGameResult message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryGameResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.gType != null && Object.hasOwnProperty.call(m, "gType"))
                w.uint32(16).int32(m.gType);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(24).int64(m.from);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(32).int64(m.to);
            if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                w.uint32(40).int32(m.pageSize);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(48).int64(m.ts);
            return w;
        };

        /**
         * Decodes a CmdQueryGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryGameResult
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryGameResult} CmdQueryGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryGameResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryGameResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.gType = r.int32();
                    break;
                case 3:
                    m.from = r.int64();
                    break;
                case 4:
                    m.to = r.int64();
                    break;
                case 5:
                    m.pageSize = r.int32();
                    break;
                case 6:
                    m.ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryGameResult;
    })();

    pb.CmdQueryGameResultReply = (function() {

        /**
         * Properties of a CmdQueryGameResultReply.
         * @memberof pb
         * @interface ICmdQueryGameResultReply
         * @property {Array.<pb.IGameResult>|null} [results] CmdQueryGameResultReply results
         */

        /**
         * Constructs a new CmdQueryGameResultReply.
         * @memberof pb
         * @classdesc Represents a CmdQueryGameResultReply.
         * @implements ICmdQueryGameResultReply
         * @constructor
         * @param {pb.ICmdQueryGameResultReply=} [p] Properties to set
         */
        function CmdQueryGameResultReply(p) {
            this.results = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryGameResultReply results.
         * @member {Array.<pb.IGameResult>} results
         * @memberof pb.CmdQueryGameResultReply
         * @instance
         */
        CmdQueryGameResultReply.prototype.results = $util.emptyArray;

        /**
         * Encodes the specified CmdQueryGameResultReply message. Does not implicitly {@link pb.CmdQueryGameResultReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryGameResultReply
         * @static
         * @param {pb.ICmdQueryGameResultReply} m CmdQueryGameResultReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryGameResultReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.results != null && m.results.length) {
                for (var i = 0; i < m.results.length; ++i)
                    $root.pb.GameResult.encode(m.results[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CmdQueryGameResultReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryGameResultReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryGameResultReply} CmdQueryGameResultReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryGameResultReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryGameResultReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.results && m.results.length))
                        m.results = [];
                    m.results.push($root.pb.GameResult.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryGameResultReply;
    })();

    pb.CmdGetGameOperations = (function() {

        /**
         * Properties of a CmdGetGameOperations.
         * @memberof pb
         * @interface ICmdGetGameOperations
         * @property {number|null} [uid] CmdGetGameOperations uid
         * @property {number|null} [ts] CmdGetGameOperations ts
         */

        /**
         * Constructs a new CmdGetGameOperations.
         * @memberof pb
         * @classdesc Represents a CmdGetGameOperations.
         * @implements ICmdGetGameOperations
         * @constructor
         * @param {pb.ICmdGetGameOperations=} [p] Properties to set
         */
        function CmdGetGameOperations(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetGameOperations uid.
         * @member {number} uid
         * @memberof pb.CmdGetGameOperations
         * @instance
         */
        CmdGetGameOperations.prototype.uid = 0;

        /**
         * CmdGetGameOperations ts.
         * @member {number} ts
         * @memberof pb.CmdGetGameOperations
         * @instance
         */
        CmdGetGameOperations.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdGetGameOperations message. Does not implicitly {@link pb.CmdGetGameOperations.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetGameOperations
         * @static
         * @param {pb.ICmdGetGameOperations} m CmdGetGameOperations message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetGameOperations.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(16).int64(m.ts);
            return w;
        };

        /**
         * Decodes a CmdGetGameOperations message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetGameOperations
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetGameOperations} CmdGetGameOperations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetGameOperations.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetGameOperations();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetGameOperations;
    })();

    pb.CmdUnlockGame = (function() {

        /**
         * Properties of a CmdUnlockGame.
         * @memberof pb
         * @interface ICmdUnlockGame
         * @property {pb.GameType|null} [gType] CmdUnlockGame gType
         */

        /**
         * Constructs a new CmdUnlockGame.
         * @memberof pb
         * @classdesc Represents a CmdUnlockGame.
         * @implements ICmdUnlockGame
         * @constructor
         * @param {pb.ICmdUnlockGame=} [p] Properties to set
         */
        function CmdUnlockGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUnlockGame gType.
         * @member {pb.GameType} gType
         * @memberof pb.CmdUnlockGame
         * @instance
         */
        CmdUnlockGame.prototype.gType = 0;

        /**
         * Encodes the specified CmdUnlockGame message. Does not implicitly {@link pb.CmdUnlockGame.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUnlockGame
         * @static
         * @param {pb.ICmdUnlockGame} m CmdUnlockGame message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUnlockGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gType != null && Object.hasOwnProperty.call(m, "gType"))
                w.uint32(8).int32(m.gType);
            return w;
        };

        /**
         * Decodes a CmdUnlockGame message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUnlockGame
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUnlockGame} CmdUnlockGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUnlockGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUnlockGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.gType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUnlockGame;
    })();

    pb.CmdGetSmxlReportReply = (function() {

        /**
         * Properties of a CmdGetSmxlReportReply.
         * @memberof pb
         * @interface ICmdGetSmxlReportReply
         * @property {number|null} [capitalInit] CmdGetSmxlReportReply capitalInit
         * @property {number|null} [capitalFinal] CmdGetSmxlReportReply capitalFinal
         * @property {number|null} [profitRate] CmdGetSmxlReportReply profitRate
         * @property {number|null} [winCount] CmdGetSmxlReportReply winCount
         * @property {number|null} [winCode] CmdGetSmxlReportReply winCode
         * @property {number|null} [winRate] CmdGetSmxlReportReply winRate
         * @property {number|null} [loseCount] CmdGetSmxlReportReply loseCount
         * @property {number|null} [loseCode] CmdGetSmxlReportReply loseCode
         * @property {number|null} [loseRate] CmdGetSmxlReportReply loseRate
         * @property {number|null} [count] CmdGetSmxlReportReply count
         * @property {number|null} [rankCaptial] CmdGetSmxlReportReply rankCaptial
         * @property {number|null} [rankRate] CmdGetSmxlReportReply rankRate
         * @property {number|null} [ts] CmdGetSmxlReportReply ts
         */

        /**
         * Constructs a new CmdGetSmxlReportReply.
         * @memberof pb
         * @classdesc Represents a CmdGetSmxlReportReply.
         * @implements ICmdGetSmxlReportReply
         * @constructor
         * @param {pb.ICmdGetSmxlReportReply=} [p] Properties to set
         */
        function CmdGetSmxlReportReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetSmxlReportReply capitalInit.
         * @member {number} capitalInit
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.capitalInit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdGetSmxlReportReply capitalFinal.
         * @member {number} capitalFinal
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.capitalFinal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdGetSmxlReportReply profitRate.
         * @member {number} profitRate
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.profitRate = 0;

        /**
         * CmdGetSmxlReportReply winCount.
         * @member {number} winCount
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.winCount = 0;

        /**
         * CmdGetSmxlReportReply winCode.
         * @member {number} winCode
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.winCode = 0;

        /**
         * CmdGetSmxlReportReply winRate.
         * @member {number} winRate
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.winRate = 0;

        /**
         * CmdGetSmxlReportReply loseCount.
         * @member {number} loseCount
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.loseCount = 0;

        /**
         * CmdGetSmxlReportReply loseCode.
         * @member {number} loseCode
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.loseCode = 0;

        /**
         * CmdGetSmxlReportReply loseRate.
         * @member {number} loseRate
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.loseRate = 0;

        /**
         * CmdGetSmxlReportReply count.
         * @member {number} count
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.count = 0;

        /**
         * CmdGetSmxlReportReply rankCaptial.
         * @member {number} rankCaptial
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.rankCaptial = 0;

        /**
         * CmdGetSmxlReportReply rankRate.
         * @member {number} rankRate
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.rankRate = 0;

        /**
         * CmdGetSmxlReportReply ts.
         * @member {number} ts
         * @memberof pb.CmdGetSmxlReportReply
         * @instance
         */
        CmdGetSmxlReportReply.prototype.ts = 0;

        /**
         * Encodes the specified CmdGetSmxlReportReply message. Does not implicitly {@link pb.CmdGetSmxlReportReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetSmxlReportReply
         * @static
         * @param {pb.ICmdGetSmxlReportReply} m CmdGetSmxlReportReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetSmxlReportReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.capitalInit != null && Object.hasOwnProperty.call(m, "capitalInit"))
                w.uint32(8).int64(m.capitalInit);
            if (m.capitalFinal != null && Object.hasOwnProperty.call(m, "capitalFinal"))
                w.uint32(16).int64(m.capitalFinal);
            if (m.profitRate != null && Object.hasOwnProperty.call(m, "profitRate"))
                w.uint32(29).float(m.profitRate);
            if (m.winCount != null && Object.hasOwnProperty.call(m, "winCount"))
                w.uint32(32).int32(m.winCount);
            if (m.winCode != null && Object.hasOwnProperty.call(m, "winCode"))
                w.uint32(40).int32(m.winCode);
            if (m.winRate != null && Object.hasOwnProperty.call(m, "winRate"))
                w.uint32(53).float(m.winRate);
            if (m.loseCount != null && Object.hasOwnProperty.call(m, "loseCount"))
                w.uint32(56).int32(m.loseCount);
            if (m.loseCode != null && Object.hasOwnProperty.call(m, "loseCode"))
                w.uint32(64).int32(m.loseCode);
            if (m.loseRate != null && Object.hasOwnProperty.call(m, "loseRate"))
                w.uint32(77).float(m.loseRate);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(80).int32(m.count);
            if (m.rankCaptial != null && Object.hasOwnProperty.call(m, "rankCaptial"))
                w.uint32(93).float(m.rankCaptial);
            if (m.rankRate != null && Object.hasOwnProperty.call(m, "rankRate"))
                w.uint32(101).float(m.rankRate);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(104).int32(m.ts);
            return w;
        };

        /**
         * Decodes a CmdGetSmxlReportReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetSmxlReportReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetSmxlReportReply} CmdGetSmxlReportReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetSmxlReportReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetSmxlReportReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.capitalInit = r.int64();
                    break;
                case 2:
                    m.capitalFinal = r.int64();
                    break;
                case 3:
                    m.profitRate = r.float();
                    break;
                case 4:
                    m.winCount = r.int32();
                    break;
                case 5:
                    m.winCode = r.int32();
                    break;
                case 6:
                    m.winRate = r.float();
                    break;
                case 7:
                    m.loseCount = r.int32();
                    break;
                case 8:
                    m.loseCode = r.int32();
                    break;
                case 9:
                    m.loseRate = r.float();
                    break;
                case 10:
                    m.count = r.int32();
                    break;
                case 11:
                    m.rankCaptial = r.float();
                    break;
                case 12:
                    m.rankRate = r.float();
                    break;
                case 13:
                    m.ts = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetSmxlReportReply;
    })();

    pb.CmdRoomCreate = (function() {

        /**
         * Properties of a CmdRoomCreate.
         * @memberof pb
         * @interface ICmdRoomCreate
         * @property {pb.GameType|null} [game] CmdRoomCreate game
         * @property {number|null} [uid] CmdRoomCreate uid
         * @property {number|null} [node] CmdRoomCreate node
         * @property {number|null} [capital] CmdRoomCreate capital
         * @property {string|null} [pwd] CmdRoomCreate pwd
         * @property {Array.<number>|null} [junXian] CmdRoomCreate junXian
         * @property {string|null} [wxHeadicon] CmdRoomCreate wxHeadicon
         */

        /**
         * Constructs a new CmdRoomCreate.
         * @memberof pb
         * @classdesc Represents a CmdRoomCreate.
         * @implements ICmdRoomCreate
         * @constructor
         * @param {pb.ICmdRoomCreate=} [p] Properties to set
         */
        function CmdRoomCreate(p) {
            this.junXian = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRoomCreate game.
         * @member {pb.GameType} game
         * @memberof pb.CmdRoomCreate
         * @instance
         */
        CmdRoomCreate.prototype.game = 0;

        /**
         * CmdRoomCreate uid.
         * @member {number} uid
         * @memberof pb.CmdRoomCreate
         * @instance
         */
        CmdRoomCreate.prototype.uid = 0;

        /**
         * CmdRoomCreate node.
         * @member {number} node
         * @memberof pb.CmdRoomCreate
         * @instance
         */
        CmdRoomCreate.prototype.node = 0;

        /**
         * CmdRoomCreate capital.
         * @member {number} capital
         * @memberof pb.CmdRoomCreate
         * @instance
         */
        CmdRoomCreate.prototype.capital = 0;

        /**
         * CmdRoomCreate pwd.
         * @member {string} pwd
         * @memberof pb.CmdRoomCreate
         * @instance
         */
        CmdRoomCreate.prototype.pwd = "";

        /**
         * CmdRoomCreate junXian.
         * @member {Array.<number>} junXian
         * @memberof pb.CmdRoomCreate
         * @instance
         */
        CmdRoomCreate.prototype.junXian = $util.emptyArray;

        /**
         * CmdRoomCreate wxHeadicon.
         * @member {string} wxHeadicon
         * @memberof pb.CmdRoomCreate
         * @instance
         */
        CmdRoomCreate.prototype.wxHeadicon = "";

        /**
         * Encodes the specified CmdRoomCreate message. Does not implicitly {@link pb.CmdRoomCreate.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRoomCreate
         * @static
         * @param {pb.ICmdRoomCreate} m CmdRoomCreate message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRoomCreate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(8).int32(m.game);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(24).int32(m.node);
            if (m.capital != null && Object.hasOwnProperty.call(m, "capital"))
                w.uint32(32).int32(m.capital);
            if (m.pwd != null && Object.hasOwnProperty.call(m, "pwd"))
                w.uint32(42).string(m.pwd);
            if (m.junXian != null && m.junXian.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.junXian.length; ++i)
                    w.int32(m.junXian[i]);
                w.ldelim();
            }
            if (m.wxHeadicon != null && Object.hasOwnProperty.call(m, "wxHeadicon"))
                w.uint32(58).string(m.wxHeadicon);
            return w;
        };

        /**
         * Decodes a CmdRoomCreate message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRoomCreate
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRoomCreate} CmdRoomCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRoomCreate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRoomCreate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.game = r.int32();
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                case 3:
                    m.node = r.int32();
                    break;
                case 4:
                    m.capital = r.int32();
                    break;
                case 5:
                    m.pwd = r.string();
                    break;
                case 6:
                    if (!(m.junXian && m.junXian.length))
                        m.junXian = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.junXian.push(r.int32());
                    } else
                        m.junXian.push(r.int32());
                    break;
                case 7:
                    m.wxHeadicon = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRoomCreate;
    })();

    pb.CmdRoomCreateReply = (function() {

        /**
         * Properties of a CmdRoomCreateReply.
         * @memberof pb
         * @interface ICmdRoomCreateReply
         * @property {pb.IErrorInfo|null} [err] CmdRoomCreateReply err
         * @property {number|null} [id] CmdRoomCreateReply id
         */

        /**
         * Constructs a new CmdRoomCreateReply.
         * @memberof pb
         * @classdesc Represents a CmdRoomCreateReply.
         * @implements ICmdRoomCreateReply
         * @constructor
         * @param {pb.ICmdRoomCreateReply=} [p] Properties to set
         */
        function CmdRoomCreateReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRoomCreateReply err.
         * @member {pb.IErrorInfo|null|undefined} err
         * @memberof pb.CmdRoomCreateReply
         * @instance
         */
        CmdRoomCreateReply.prototype.err = null;

        /**
         * CmdRoomCreateReply id.
         * @member {number} id
         * @memberof pb.CmdRoomCreateReply
         * @instance
         */
        CmdRoomCreateReply.prototype.id = 0;

        /**
         * Encodes the specified CmdRoomCreateReply message. Does not implicitly {@link pb.CmdRoomCreateReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRoomCreateReply
         * @static
         * @param {pb.ICmdRoomCreateReply} m CmdRoomCreateReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRoomCreateReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.err != null && Object.hasOwnProperty.call(m, "err"))
                $root.pb.ErrorInfo.encode(m.err, w.uint32(10).fork()).ldelim();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(16).int32(m.id);
            return w;
        };

        /**
         * Decodes a CmdRoomCreateReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRoomCreateReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRoomCreateReply} CmdRoomCreateReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRoomCreateReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRoomCreateReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.err = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRoomCreateReply;
    })();

    pb.CmdRoomEnter = (function() {

        /**
         * Properties of a CmdRoomEnter.
         * @memberof pb
         * @interface ICmdRoomEnter
         * @property {number|null} [id] CmdRoomEnter id
         * @property {pb.GameType|null} [game] CmdRoomEnter game
         * @property {number|null} [uid] CmdRoomEnter uid
         * @property {number|null} [node] CmdRoomEnter node
         * @property {string|null} [pwd] CmdRoomEnter pwd
         * @property {Array.<number>|null} [junXian] CmdRoomEnter junXian
         * @property {string|null} [wxHeadicon] CmdRoomEnter wxHeadicon
         */

        /**
         * Constructs a new CmdRoomEnter.
         * @memberof pb
         * @classdesc Represents a CmdRoomEnter.
         * @implements ICmdRoomEnter
         * @constructor
         * @param {pb.ICmdRoomEnter=} [p] Properties to set
         */
        function CmdRoomEnter(p) {
            this.junXian = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRoomEnter id.
         * @member {number} id
         * @memberof pb.CmdRoomEnter
         * @instance
         */
        CmdRoomEnter.prototype.id = 0;

        /**
         * CmdRoomEnter game.
         * @member {pb.GameType} game
         * @memberof pb.CmdRoomEnter
         * @instance
         */
        CmdRoomEnter.prototype.game = 0;

        /**
         * CmdRoomEnter uid.
         * @member {number} uid
         * @memberof pb.CmdRoomEnter
         * @instance
         */
        CmdRoomEnter.prototype.uid = 0;

        /**
         * CmdRoomEnter node.
         * @member {number} node
         * @memberof pb.CmdRoomEnter
         * @instance
         */
        CmdRoomEnter.prototype.node = 0;

        /**
         * CmdRoomEnter pwd.
         * @member {string} pwd
         * @memberof pb.CmdRoomEnter
         * @instance
         */
        CmdRoomEnter.prototype.pwd = "";

        /**
         * CmdRoomEnter junXian.
         * @member {Array.<number>} junXian
         * @memberof pb.CmdRoomEnter
         * @instance
         */
        CmdRoomEnter.prototype.junXian = $util.emptyArray;

        /**
         * CmdRoomEnter wxHeadicon.
         * @member {string} wxHeadicon
         * @memberof pb.CmdRoomEnter
         * @instance
         */
        CmdRoomEnter.prototype.wxHeadicon = "";

        /**
         * Encodes the specified CmdRoomEnter message. Does not implicitly {@link pb.CmdRoomEnter.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRoomEnter
         * @static
         * @param {pb.ICmdRoomEnter} m CmdRoomEnter message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRoomEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(16).int32(m.game);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int32(m.uid);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(32).int32(m.node);
            if (m.pwd != null && Object.hasOwnProperty.call(m, "pwd"))
                w.uint32(42).string(m.pwd);
            if (m.junXian != null && m.junXian.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.junXian.length; ++i)
                    w.int32(m.junXian[i]);
                w.ldelim();
            }
            if (m.wxHeadicon != null && Object.hasOwnProperty.call(m, "wxHeadicon"))
                w.uint32(58).string(m.wxHeadicon);
            return w;
        };

        /**
         * Decodes a CmdRoomEnter message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRoomEnter
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRoomEnter} CmdRoomEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRoomEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRoomEnter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.game = r.int32();
                    break;
                case 3:
                    m.uid = r.int32();
                    break;
                case 4:
                    m.node = r.int32();
                    break;
                case 5:
                    m.pwd = r.string();
                    break;
                case 6:
                    if (!(m.junXian && m.junXian.length))
                        m.junXian = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.junXian.push(r.int32());
                    } else
                        m.junXian.push(r.int32());
                    break;
                case 7:
                    m.wxHeadicon = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRoomEnter;
    })();

    pb.CmdRoomEnterReply = (function() {

        /**
         * Properties of a CmdRoomEnterReply.
         * @memberof pb
         * @interface ICmdRoomEnterReply
         * @property {pb.IErrorInfo|null} [err] CmdRoomEnterReply err
         * @property {number|null} [id] CmdRoomEnterReply id
         * @property {number|null} [node] CmdRoomEnterReply node
         */

        /**
         * Constructs a new CmdRoomEnterReply.
         * @memberof pb
         * @classdesc Represents a CmdRoomEnterReply.
         * @implements ICmdRoomEnterReply
         * @constructor
         * @param {pb.ICmdRoomEnterReply=} [p] Properties to set
         */
        function CmdRoomEnterReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRoomEnterReply err.
         * @member {pb.IErrorInfo|null|undefined} err
         * @memberof pb.CmdRoomEnterReply
         * @instance
         */
        CmdRoomEnterReply.prototype.err = null;

        /**
         * CmdRoomEnterReply id.
         * @member {number} id
         * @memberof pb.CmdRoomEnterReply
         * @instance
         */
        CmdRoomEnterReply.prototype.id = 0;

        /**
         * CmdRoomEnterReply node.
         * @member {number} node
         * @memberof pb.CmdRoomEnterReply
         * @instance
         */
        CmdRoomEnterReply.prototype.node = 0;

        /**
         * Encodes the specified CmdRoomEnterReply message. Does not implicitly {@link pb.CmdRoomEnterReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRoomEnterReply
         * @static
         * @param {pb.ICmdRoomEnterReply} m CmdRoomEnterReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRoomEnterReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.err != null && Object.hasOwnProperty.call(m, "err"))
                $root.pb.ErrorInfo.encode(m.err, w.uint32(10).fork()).ldelim();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(16).int32(m.id);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(24).int32(m.node);
            return w;
        };

        /**
         * Decodes a CmdRoomEnterReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRoomEnterReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRoomEnterReply} CmdRoomEnterReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRoomEnterReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRoomEnterReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.err = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.id = r.int32();
                    break;
                case 3:
                    m.node = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRoomEnterReply;
    })();

    pb.CmdRoomLeave = (function() {

        /**
         * Properties of a CmdRoomLeave.
         * @memberof pb
         * @interface ICmdRoomLeave
         * @property {number|null} [id] CmdRoomLeave id
         * @property {number|null} [uid] CmdRoomLeave uid
         */

        /**
         * Constructs a new CmdRoomLeave.
         * @memberof pb
         * @classdesc Represents a CmdRoomLeave.
         * @implements ICmdRoomLeave
         * @constructor
         * @param {pb.ICmdRoomLeave=} [p] Properties to set
         */
        function CmdRoomLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRoomLeave id.
         * @member {number} id
         * @memberof pb.CmdRoomLeave
         * @instance
         */
        CmdRoomLeave.prototype.id = 0;

        /**
         * CmdRoomLeave uid.
         * @member {number} uid
         * @memberof pb.CmdRoomLeave
         * @instance
         */
        CmdRoomLeave.prototype.uid = 0;

        /**
         * Encodes the specified CmdRoomLeave message. Does not implicitly {@link pb.CmdRoomLeave.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRoomLeave
         * @static
         * @param {pb.ICmdRoomLeave} m CmdRoomLeave message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRoomLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            return w;
        };

        /**
         * Decodes a CmdRoomLeave message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRoomLeave
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRoomLeave} CmdRoomLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRoomLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRoomLeave();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRoomLeave;
    })();

    pb.CmdRoomLeaveReply = (function() {

        /**
         * Properties of a CmdRoomLeaveReply.
         * @memberof pb
         * @interface ICmdRoomLeaveReply
         * @property {pb.IErrorInfo|null} [err] CmdRoomLeaveReply err
         */

        /**
         * Constructs a new CmdRoomLeaveReply.
         * @memberof pb
         * @classdesc Represents a CmdRoomLeaveReply.
         * @implements ICmdRoomLeaveReply
         * @constructor
         * @param {pb.ICmdRoomLeaveReply=} [p] Properties to set
         */
        function CmdRoomLeaveReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRoomLeaveReply err.
         * @member {pb.IErrorInfo|null|undefined} err
         * @memberof pb.CmdRoomLeaveReply
         * @instance
         */
        CmdRoomLeaveReply.prototype.err = null;

        /**
         * Encodes the specified CmdRoomLeaveReply message. Does not implicitly {@link pb.CmdRoomLeaveReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRoomLeaveReply
         * @static
         * @param {pb.ICmdRoomLeaveReply} m CmdRoomLeaveReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRoomLeaveReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.err != null && Object.hasOwnProperty.call(m, "err"))
                $root.pb.ErrorInfo.encode(m.err, w.uint32(10).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a CmdRoomLeaveReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRoomLeaveReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRoomLeaveReply} CmdRoomLeaveReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRoomLeaveReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRoomLeaveReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.err = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRoomLeaveReply;
    })();

    pb.SyncRoomEnter = (function() {

        /**
         * Properties of a SyncRoomEnter.
         * @memberof pb
         * @interface ISyncRoomEnter
         * @property {number|null} [id] SyncRoomEnter id
         * @property {pb.GameType|null} [game] SyncRoomEnter game
         * @property {pb.IGameData|null} [player] SyncRoomEnter player
         * @property {Array.<number>|null} [junXian] SyncRoomEnter junXian
         * @property {string|null} [wxHeadicon] SyncRoomEnter wxHeadicon
         */

        /**
         * Constructs a new SyncRoomEnter.
         * @memberof pb
         * @classdesc Represents a SyncRoomEnter.
         * @implements ISyncRoomEnter
         * @constructor
         * @param {pb.ISyncRoomEnter=} [p] Properties to set
         */
        function SyncRoomEnter(p) {
            this.junXian = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SyncRoomEnter id.
         * @member {number} id
         * @memberof pb.SyncRoomEnter
         * @instance
         */
        SyncRoomEnter.prototype.id = 0;

        /**
         * SyncRoomEnter game.
         * @member {pb.GameType} game
         * @memberof pb.SyncRoomEnter
         * @instance
         */
        SyncRoomEnter.prototype.game = 0;

        /**
         * SyncRoomEnter player.
         * @member {pb.IGameData|null|undefined} player
         * @memberof pb.SyncRoomEnter
         * @instance
         */
        SyncRoomEnter.prototype.player = null;

        /**
         * SyncRoomEnter junXian.
         * @member {Array.<number>} junXian
         * @memberof pb.SyncRoomEnter
         * @instance
         */
        SyncRoomEnter.prototype.junXian = $util.emptyArray;

        /**
         * SyncRoomEnter wxHeadicon.
         * @member {string} wxHeadicon
         * @memberof pb.SyncRoomEnter
         * @instance
         */
        SyncRoomEnter.prototype.wxHeadicon = "";

        /**
         * Encodes the specified SyncRoomEnter message. Does not implicitly {@link pb.SyncRoomEnter.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncRoomEnter
         * @static
         * @param {pb.ISyncRoomEnter} m SyncRoomEnter message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        SyncRoomEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(16).int32(m.game);
            if (m.player != null && Object.hasOwnProperty.call(m, "player"))
                $root.pb.GameData.encode(m.player, w.uint32(26).fork()).ldelim();
            if (m.junXian != null && m.junXian.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.junXian.length; ++i)
                    w.int32(m.junXian[i]);
                w.ldelim();
            }
            if (m.wxHeadicon != null && Object.hasOwnProperty.call(m, "wxHeadicon"))
                w.uint32(42).string(m.wxHeadicon);
            return w;
        };

        /**
         * Decodes a SyncRoomEnter message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncRoomEnter
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.SyncRoomEnter} SyncRoomEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.SyncRoomEnter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.game = r.int32();
                    break;
                case 3:
                    m.player = $root.pb.GameData.decode(r, r.uint32());
                    break;
                case 4:
                    if (!(m.junXian && m.junXian.length))
                        m.junXian = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.junXian.push(r.int32());
                    } else
                        m.junXian.push(r.int32());
                    break;
                case 5:
                    m.wxHeadicon = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SyncRoomEnter;
    })();

    pb.SyncRoomLeave = (function() {

        /**
         * Properties of a SyncRoomLeave.
         * @memberof pb
         * @interface ISyncRoomLeave
         * @property {number|null} [id] SyncRoomLeave id
         * @property {pb.GameType|null} [game] SyncRoomLeave game
         * @property {number|null} [uid] SyncRoomLeave uid
         */

        /**
         * Constructs a new SyncRoomLeave.
         * @memberof pb
         * @classdesc Represents a SyncRoomLeave.
         * @implements ISyncRoomLeave
         * @constructor
         * @param {pb.ISyncRoomLeave=} [p] Properties to set
         */
        function SyncRoomLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SyncRoomLeave id.
         * @member {number} id
         * @memberof pb.SyncRoomLeave
         * @instance
         */
        SyncRoomLeave.prototype.id = 0;

        /**
         * SyncRoomLeave game.
         * @member {pb.GameType} game
         * @memberof pb.SyncRoomLeave
         * @instance
         */
        SyncRoomLeave.prototype.game = 0;

        /**
         * SyncRoomLeave uid.
         * @member {number} uid
         * @memberof pb.SyncRoomLeave
         * @instance
         */
        SyncRoomLeave.prototype.uid = 0;

        /**
         * Encodes the specified SyncRoomLeave message. Does not implicitly {@link pb.SyncRoomLeave.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncRoomLeave
         * @static
         * @param {pb.ISyncRoomLeave} m SyncRoomLeave message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        SyncRoomLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(16).int32(m.game);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int32(m.uid);
            return w;
        };

        /**
         * Decodes a SyncRoomLeave message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncRoomLeave
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.SyncRoomLeave} SyncRoomLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.SyncRoomLeave();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.game = r.int32();
                    break;
                case 3:
                    m.uid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SyncRoomLeave;
    })();

    pb.RoomPlayerStatus = (function() {

        /**
         * Properties of a RoomPlayerStatus.
         * @memberof pb
         * @interface IRoomPlayerStatus
         * @property {number|null} [id] RoomPlayerStatus id
         * @property {number|null} [uid] RoomPlayerStatus uid
         * @property {boolean|null} [ready] RoomPlayerStatus ready
         */

        /**
         * Constructs a new RoomPlayerStatus.
         * @memberof pb
         * @classdesc Represents a RoomPlayerStatus.
         * @implements IRoomPlayerStatus
         * @constructor
         * @param {pb.IRoomPlayerStatus=} [p] Properties to set
         */
        function RoomPlayerStatus(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomPlayerStatus id.
         * @member {number} id
         * @memberof pb.RoomPlayerStatus
         * @instance
         */
        RoomPlayerStatus.prototype.id = 0;

        /**
         * RoomPlayerStatus uid.
         * @member {number} uid
         * @memberof pb.RoomPlayerStatus
         * @instance
         */
        RoomPlayerStatus.prototype.uid = 0;

        /**
         * RoomPlayerStatus ready.
         * @member {boolean} ready
         * @memberof pb.RoomPlayerStatus
         * @instance
         */
        RoomPlayerStatus.prototype.ready = false;

        /**
         * Encodes the specified RoomPlayerStatus message. Does not implicitly {@link pb.RoomPlayerStatus.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomPlayerStatus
         * @static
         * @param {pb.IRoomPlayerStatus} m RoomPlayerStatus message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomPlayerStatus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            if (m.ready != null && Object.hasOwnProperty.call(m, "ready"))
                w.uint32(24).bool(m.ready);
            return w;
        };

        /**
         * Decodes a RoomPlayerStatus message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomPlayerStatus
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomPlayerStatus} RoomPlayerStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomPlayerStatus.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomPlayerStatus();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                case 3:
                    m.ready = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomPlayerStatus;
    })();

    pb.RoomGameStatus = (function() {

        /**
         * Properties of a RoomGameStatus.
         * @memberof pb
         * @interface IRoomGameStatus
         * @property {number|null} [id] RoomGameStatus id
         * @property {number|null} [status] RoomGameStatus status
         */

        /**
         * Constructs a new RoomGameStatus.
         * @memberof pb
         * @classdesc Represents a RoomGameStatus.
         * @implements IRoomGameStatus
         * @constructor
         * @param {pb.IRoomGameStatus=} [p] Properties to set
         */
        function RoomGameStatus(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomGameStatus id.
         * @member {number} id
         * @memberof pb.RoomGameStatus
         * @instance
         */
        RoomGameStatus.prototype.id = 0;

        /**
         * RoomGameStatus status.
         * @member {number} status
         * @memberof pb.RoomGameStatus
         * @instance
         */
        RoomGameStatus.prototype.status = 0;

        /**
         * Encodes the specified RoomGameStatus message. Does not implicitly {@link pb.RoomGameStatus.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomGameStatus
         * @static
         * @param {pb.IRoomGameStatus} m RoomGameStatus message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomGameStatus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(16).int32(m.status);
            return w;
        };

        /**
         * Decodes a RoomGameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomGameStatus
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomGameStatus} RoomGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomGameStatus.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomGameStatus();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomGameStatus;
    })();

    pb.RoomGameOp = (function() {

        /**
         * Properties of a RoomGameOp.
         * @memberof pb
         * @interface IRoomGameOp
         * @property {number|null} [id] RoomGameOp id
         * @property {number|null} [uid] RoomGameOp uid
         * @property {Uint8Array|null} [ops] RoomGameOp ops
         */

        /**
         * Constructs a new RoomGameOp.
         * @memberof pb
         * @classdesc Represents a RoomGameOp.
         * @implements IRoomGameOp
         * @constructor
         * @param {pb.IRoomGameOp=} [p] Properties to set
         */
        function RoomGameOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomGameOp id.
         * @member {number} id
         * @memberof pb.RoomGameOp
         * @instance
         */
        RoomGameOp.prototype.id = 0;

        /**
         * RoomGameOp uid.
         * @member {number} uid
         * @memberof pb.RoomGameOp
         * @instance
         */
        RoomGameOp.prototype.uid = 0;

        /**
         * RoomGameOp ops.
         * @member {Uint8Array} ops
         * @memberof pb.RoomGameOp
         * @instance
         */
        RoomGameOp.prototype.ops = $util.newBuffer([]);

        /**
         * Encodes the specified RoomGameOp message. Does not implicitly {@link pb.RoomGameOp.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomGameOp
         * @static
         * @param {pb.IRoomGameOp} m RoomGameOp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomGameOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            if (m.ops != null && Object.hasOwnProperty.call(m, "ops"))
                w.uint32(26).bytes(m.ops);
            return w;
        };

        /**
         * Decodes a RoomGameOp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomGameOp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomGameOp} RoomGameOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomGameOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomGameOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                case 3:
                    m.ops = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomGameOp;
    })();

    pb.RoomGameResult = (function() {

        /**
         * Properties of a RoomGameResult.
         * @memberof pb
         * @interface IRoomGameResult
         * @property {number|null} [id] RoomGameResult id
         * @property {Uint8Array|null} [result] RoomGameResult result
         */

        /**
         * Constructs a new RoomGameResult.
         * @memberof pb
         * @classdesc Represents a RoomGameResult.
         * @implements IRoomGameResult
         * @constructor
         * @param {pb.IRoomGameResult=} [p] Properties to set
         */
        function RoomGameResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomGameResult id.
         * @member {number} id
         * @memberof pb.RoomGameResult
         * @instance
         */
        RoomGameResult.prototype.id = 0;

        /**
         * RoomGameResult result.
         * @member {Uint8Array} result
         * @memberof pb.RoomGameResult
         * @instance
         */
        RoomGameResult.prototype.result = $util.newBuffer([]);

        /**
         * Encodes the specified RoomGameResult message. Does not implicitly {@link pb.RoomGameResult.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomGameResult
         * @static
         * @param {pb.IRoomGameResult} m RoomGameResult message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomGameResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(18).bytes(m.result);
            return w;
        };

        /**
         * Decodes a RoomGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomGameResult
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomGameResult} RoomGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomGameResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomGameResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.result = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomGameResult;
    })();

    pb.RoomData = (function() {

        /**
         * Properties of a RoomData.
         * @memberof pb
         * @interface IRoomData
         * @property {number|null} [id] RoomData id
         * @property {pb.GameType|null} [game] RoomData game
         * @property {Uint8Array|null} [data] RoomData data
         * @property {number|null} [auto] RoomData auto
         * @property {number|null} [creator] RoomData creator
         */

        /**
         * Constructs a new RoomData.
         * @memberof pb
         * @classdesc Represents a RoomData.
         * @implements IRoomData
         * @constructor
         * @param {pb.IRoomData=} [p] Properties to set
         */
        function RoomData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomData id.
         * @member {number} id
         * @memberof pb.RoomData
         * @instance
         */
        RoomData.prototype.id = 0;

        /**
         * RoomData game.
         * @member {pb.GameType} game
         * @memberof pb.RoomData
         * @instance
         */
        RoomData.prototype.game = 0;

        /**
         * RoomData data.
         * @member {Uint8Array} data
         * @memberof pb.RoomData
         * @instance
         */
        RoomData.prototype.data = $util.newBuffer([]);

        /**
         * RoomData auto.
         * @member {number} auto
         * @memberof pb.RoomData
         * @instance
         */
        RoomData.prototype.auto = 0;

        /**
         * RoomData creator.
         * @member {number} creator
         * @memberof pb.RoomData
         * @instance
         */
        RoomData.prototype.creator = 0;

        /**
         * Encodes the specified RoomData message. Does not implicitly {@link pb.RoomData.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomData
         * @static
         * @param {pb.IRoomData} m RoomData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(16).int32(m.game);
            if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                w.uint32(26).bytes(m.data);
            if (m.auto != null && Object.hasOwnProperty.call(m, "auto"))
                w.uint32(32).int32(m.auto);
            if (m.creator != null && Object.hasOwnProperty.call(m, "creator"))
                w.uint32(40).int32(m.creator);
            return w;
        };

        /**
         * Decodes a RoomData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomData} RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.game = r.int32();
                    break;
                case 3:
                    m.data = r.bytes();
                    break;
                case 4:
                    m.auto = r.int32();
                    break;
                case 5:
                    m.creator = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomData;
    })();

    pb.RoomPlayer = (function() {

        /**
         * Properties of a RoomPlayer.
         * @memberof pb
         * @interface IRoomPlayer
         * @property {pb.IGameData|null} [gd] RoomPlayer gd
         * @property {boolean|null} [ready] RoomPlayer ready
         * @property {boolean|null} [giveup] RoomPlayer giveup
         * @property {pb.IGameOperations|null} [ops] RoomPlayer ops
         * @property {pb.IGameResult|null} [result] RoomPlayer result
         * @property {number|null} [curPos] RoomPlayer curPos
         * @property {Array.<number>|null} [junXian] RoomPlayer junXian
         * @property {string|null} [wxHeadicon] RoomPlayer wxHeadicon
         */

        /**
         * Constructs a new RoomPlayer.
         * @memberof pb
         * @classdesc Represents a RoomPlayer.
         * @implements IRoomPlayer
         * @constructor
         * @param {pb.IRoomPlayer=} [p] Properties to set
         */
        function RoomPlayer(p) {
            this.junXian = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomPlayer gd.
         * @member {pb.IGameData|null|undefined} gd
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.gd = null;

        /**
         * RoomPlayer ready.
         * @member {boolean} ready
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.ready = false;

        /**
         * RoomPlayer giveup.
         * @member {boolean} giveup
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.giveup = false;

        /**
         * RoomPlayer ops.
         * @member {pb.IGameOperations|null|undefined} ops
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.ops = null;

        /**
         * RoomPlayer result.
         * @member {pb.IGameResult|null|undefined} result
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.result = null;

        /**
         * RoomPlayer curPos.
         * @member {number} curPos
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.curPos = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomPlayer junXian.
         * @member {Array.<number>} junXian
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.junXian = $util.emptyArray;

        /**
         * RoomPlayer wxHeadicon.
         * @member {string} wxHeadicon
         * @memberof pb.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.wxHeadicon = "";

        /**
         * Encodes the specified RoomPlayer message. Does not implicitly {@link pb.RoomPlayer.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomPlayer
         * @static
         * @param {pb.IRoomPlayer} m RoomPlayer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gd != null && Object.hasOwnProperty.call(m, "gd"))
                $root.pb.GameData.encode(m.gd, w.uint32(10).fork()).ldelim();
            if (m.ready != null && Object.hasOwnProperty.call(m, "ready"))
                w.uint32(16).bool(m.ready);
            if (m.giveup != null && Object.hasOwnProperty.call(m, "giveup"))
                w.uint32(24).bool(m.giveup);
            if (m.ops != null && Object.hasOwnProperty.call(m, "ops"))
                $root.pb.GameOperations.encode(m.ops, w.uint32(34).fork()).ldelim();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.GameResult.encode(m.result, w.uint32(42).fork()).ldelim();
            if (m.curPos != null && Object.hasOwnProperty.call(m, "curPos"))
                w.uint32(48).int64(m.curPos);
            if (m.junXian != null && m.junXian.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.junXian.length; ++i)
                    w.int32(m.junXian[i]);
                w.ldelim();
            }
            if (m.wxHeadicon != null && Object.hasOwnProperty.call(m, "wxHeadicon"))
                w.uint32(66).string(m.wxHeadicon);
            return w;
        };

        /**
         * Decodes a RoomPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomPlayer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomPlayer} RoomPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.gd = $root.pb.GameData.decode(r, r.uint32());
                    break;
                case 2:
                    m.ready = r.bool();
                    break;
                case 3:
                    m.giveup = r.bool();
                    break;
                case 4:
                    m.ops = $root.pb.GameOperations.decode(r, r.uint32());
                    break;
                case 5:
                    m.result = $root.pb.GameResult.decode(r, r.uint32());
                    break;
                case 6:
                    m.curPos = r.int64();
                    break;
                case 7:
                    if (!(m.junXian && m.junXian.length))
                        m.junXian = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.junXian.push(r.int32());
                    } else
                        m.junXian.push(r.int32());
                    break;
                case 8:
                    m.wxHeadicon = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomPlayer;
    })();

    pb.RoomGameData = (function() {

        /**
         * Properties of a RoomGameData.
         * @memberof pb
         * @interface IRoomGameData
         * @property {number|null} [id] RoomGameData id
         * @property {pb.GameType|null} [game] RoomGameData game
         * @property {number|null} [status] RoomGameData status
         * @property {number|null} [capital] RoomGameData capital
         * @property {number|null} [code] RoomGameData code
         * @property {pb.KType|null} [ktype] RoomGameData ktype
         * @property {number|null} [tsQuoteFrom] RoomGameData tsQuoteFrom
         * @property {number|null} [tsQuoteTo] RoomGameData tsQuoteTo
         * @property {number|null} [tsQuoteStart] RoomGameData tsQuoteStart
         * @property {Array.<pb.IRoomPlayer>|null} [players] RoomGameData players
         * @property {number|null} [tsGameFrom] RoomGameData tsGameFrom
         * @property {number|null} [tsGameCur] RoomGameData tsGameCur
         * @property {pb.IQuotes|null} [quotes] RoomGameData quotes
         * @property {pb.IQuotesFuture|null} [quotesFuture] RoomGameData quotesFuture
         */

        /**
         * Constructs a new RoomGameData.
         * @memberof pb
         * @classdesc Represents a RoomGameData.
         * @implements IRoomGameData
         * @constructor
         * @param {pb.IRoomGameData=} [p] Properties to set
         */
        function RoomGameData(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomGameData id.
         * @member {number} id
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.id = 0;

        /**
         * RoomGameData game.
         * @member {pb.GameType} game
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.game = 0;

        /**
         * RoomGameData status.
         * @member {number} status
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.status = 0;

        /**
         * RoomGameData capital.
         * @member {number} capital
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.capital = 0;

        /**
         * RoomGameData code.
         * @member {number} code
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.code = 0;

        /**
         * RoomGameData ktype.
         * @member {pb.KType} ktype
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.ktype = 0;

        /**
         * RoomGameData tsQuoteFrom.
         * @member {number} tsQuoteFrom
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.tsQuoteFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomGameData tsQuoteTo.
         * @member {number} tsQuoteTo
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.tsQuoteTo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomGameData tsQuoteStart.
         * @member {number} tsQuoteStart
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.tsQuoteStart = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomGameData players.
         * @member {Array.<pb.IRoomPlayer>} players
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.players = $util.emptyArray;

        /**
         * RoomGameData tsGameFrom.
         * @member {number} tsGameFrom
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.tsGameFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomGameData tsGameCur.
         * @member {number} tsGameCur
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.tsGameCur = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomGameData quotes.
         * @member {pb.IQuotes|null|undefined} quotes
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.quotes = null;

        /**
         * RoomGameData quotesFuture.
         * @member {pb.IQuotesFuture|null|undefined} quotesFuture
         * @memberof pb.RoomGameData
         * @instance
         */
        RoomGameData.prototype.quotesFuture = null;

        /**
         * Encodes the specified RoomGameData message. Does not implicitly {@link pb.RoomGameData.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomGameData
         * @static
         * @param {pb.IRoomGameData} m RoomGameData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomGameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(16).int32(m.game);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(24).int32(m.status);
            if (m.capital != null && Object.hasOwnProperty.call(m, "capital"))
                w.uint32(32).int32(m.capital);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(40).int32(m.code);
            if (m.ktype != null && Object.hasOwnProperty.call(m, "ktype"))
                w.uint32(48).int32(m.ktype);
            if (m.tsQuoteFrom != null && Object.hasOwnProperty.call(m, "tsQuoteFrom"))
                w.uint32(56).int64(m.tsQuoteFrom);
            if (m.tsQuoteTo != null && Object.hasOwnProperty.call(m, "tsQuoteTo"))
                w.uint32(64).int64(m.tsQuoteTo);
            if (m.tsQuoteStart != null && Object.hasOwnProperty.call(m, "tsQuoteStart"))
                w.uint32(72).int64(m.tsQuoteStart);
            if (m.players != null && m.players.length) {
                for (var i = 0; i < m.players.length; ++i)
                    $root.pb.RoomPlayer.encode(m.players[i], w.uint32(82).fork()).ldelim();
            }
            if (m.tsGameFrom != null && Object.hasOwnProperty.call(m, "tsGameFrom"))
                w.uint32(88).int64(m.tsGameFrom);
            if (m.tsGameCur != null && Object.hasOwnProperty.call(m, "tsGameCur"))
                w.uint32(96).int64(m.tsGameCur);
            if (m.quotes != null && Object.hasOwnProperty.call(m, "quotes"))
                $root.pb.Quotes.encode(m.quotes, w.uint32(106).fork()).ldelim();
            if (m.quotesFuture != null && Object.hasOwnProperty.call(m, "quotesFuture"))
                $root.pb.QuotesFuture.encode(m.quotesFuture, w.uint32(114).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a RoomGameData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomGameData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomGameData} RoomGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomGameData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomGameData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.game = r.int32();
                    break;
                case 3:
                    m.status = r.int32();
                    break;
                case 4:
                    m.capital = r.int32();
                    break;
                case 5:
                    m.code = r.int32();
                    break;
                case 6:
                    m.ktype = r.int32();
                    break;
                case 7:
                    m.tsQuoteFrom = r.int64();
                    break;
                case 8:
                    m.tsQuoteTo = r.int64();
                    break;
                case 9:
                    m.tsQuoteStart = r.int64();
                    break;
                case 10:
                    if (!(m.players && m.players.length))
                        m.players = [];
                    m.players.push($root.pb.RoomPlayer.decode(r, r.uint32()));
                    break;
                case 11:
                    m.tsGameFrom = r.int64();
                    break;
                case 12:
                    m.tsGameCur = r.int64();
                    break;
                case 13:
                    m.quotes = $root.pb.Quotes.decode(r, r.uint32());
                    break;
                case 14:
                    m.quotesFuture = $root.pb.QuotesFuture.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomGameData;
    })();

    pb.Notice = (function() {

        /**
         * Properties of a Notice.
         * @memberof pb
         * @interface INotice
         * @property {number|null} [sender] Notice sender
         * @property {number|null} [receiver] Notice receiver
         * @property {pb.MessageType|null} [type] Notice type
         * @property {string|null} [text] Notice text
         * @property {number|null} [ts] Notice ts
         * @property {number|null} [node] Notice node
         */

        /**
         * Constructs a new Notice.
         * @memberof pb
         * @classdesc Represents a Notice.
         * @implements INotice
         * @constructor
         * @param {pb.INotice=} [p] Properties to set
         */
        function Notice(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Notice sender.
         * @member {number} sender
         * @memberof pb.Notice
         * @instance
         */
        Notice.prototype.sender = 0;

        /**
         * Notice receiver.
         * @member {number} receiver
         * @memberof pb.Notice
         * @instance
         */
        Notice.prototype.receiver = 0;

        /**
         * Notice type.
         * @member {pb.MessageType} type
         * @memberof pb.Notice
         * @instance
         */
        Notice.prototype.type = 0;

        /**
         * Notice text.
         * @member {string} text
         * @memberof pb.Notice
         * @instance
         */
        Notice.prototype.text = "";

        /**
         * Notice ts.
         * @member {number} ts
         * @memberof pb.Notice
         * @instance
         */
        Notice.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Notice node.
         * @member {number} node
         * @memberof pb.Notice
         * @instance
         */
        Notice.prototype.node = 0;

        /**
         * Encodes the specified Notice message. Does not implicitly {@link pb.Notice.verify|verify} messages.
         * @function encode
         * @memberof pb.Notice
         * @static
         * @param {pb.INotice} m Notice message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Notice.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.sender != null && Object.hasOwnProperty.call(m, "sender"))
                w.uint32(8).int32(m.sender);
            if (m.receiver != null && Object.hasOwnProperty.call(m, "receiver"))
                w.uint32(16).int32(m.receiver);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(24).int32(m.type);
            if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                w.uint32(34).string(m.text);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(40).int64(m.ts);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(48).int32(m.node);
            return w;
        };

        /**
         * Decodes a Notice message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Notice
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.Notice} Notice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Notice.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.Notice();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.sender = r.int32();
                    break;
                case 2:
                    m.receiver = r.int32();
                    break;
                case 3:
                    m.type = r.int32();
                    break;
                case 4:
                    m.text = r.string();
                    break;
                case 5:
                    m.ts = r.int64();
                    break;
                case 6:
                    m.node = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Notice;
    })();

    pb.CgsConf = (function() {

        /**
         * Properties of a CgsConf.
         * @memberof pb
         * @interface ICgsConf
         * @property {number|null} [id] CgsConf id
         * @property {number|null} [from] CgsConf from
         * @property {number|null} [to] CgsConf to
         * @property {string|null} [conf] CgsConf conf
         * @property {string|null} [award] CgsConf award
         * @property {number|null} [status] CgsConf status
         * @property {Array.<number>|null} [people] CgsConf people
         */

        /**
         * Constructs a new CgsConf.
         * @memberof pb
         * @classdesc Represents a CgsConf.
         * @implements ICgsConf
         * @constructor
         * @param {pb.ICgsConf=} [p] Properties to set
         */
        function CgsConf(p) {
            this.people = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgsConf id.
         * @member {number} id
         * @memberof pb.CgsConf
         * @instance
         */
        CgsConf.prototype.id = 0;

        /**
         * CgsConf from.
         * @member {number} from
         * @memberof pb.CgsConf
         * @instance
         */
        CgsConf.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CgsConf to.
         * @member {number} to
         * @memberof pb.CgsConf
         * @instance
         */
        CgsConf.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CgsConf conf.
         * @member {string} conf
         * @memberof pb.CgsConf
         * @instance
         */
        CgsConf.prototype.conf = "";

        /**
         * CgsConf award.
         * @member {string} award
         * @memberof pb.CgsConf
         * @instance
         */
        CgsConf.prototype.award = "";

        /**
         * CgsConf status.
         * @member {number} status
         * @memberof pb.CgsConf
         * @instance
         */
        CgsConf.prototype.status = 0;

        /**
         * CgsConf people.
         * @member {Array.<number>} people
         * @memberof pb.CgsConf
         * @instance
         */
        CgsConf.prototype.people = $util.emptyArray;

        /**
         * Encodes the specified CgsConf message. Does not implicitly {@link pb.CgsConf.verify|verify} messages.
         * @function encode
         * @memberof pb.CgsConf
         * @static
         * @param {pb.ICgsConf} m CgsConf message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgsConf.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(16).int64(m.from);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(24).int64(m.to);
            if (m.conf != null && Object.hasOwnProperty.call(m, "conf"))
                w.uint32(34).string(m.conf);
            if (m.award != null && Object.hasOwnProperty.call(m, "award"))
                w.uint32(42).string(m.award);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(48).int32(m.status);
            if (m.people != null && m.people.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.people.length; ++i)
                    w.int32(m.people[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a CgsConf message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgsConf
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgsConf} CgsConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgsConf.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgsConf();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.from = r.int64();
                    break;
                case 3:
                    m.to = r.int64();
                    break;
                case 4:
                    m.conf = r.string();
                    break;
                case 5:
                    m.award = r.string();
                    break;
                case 6:
                    m.status = r.int32();
                    break;
                case 7:
                    if (!(m.people && m.people.length))
                        m.people = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.people.push(r.int32());
                    } else
                        m.people.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgsConf;
    })();

    pb.RankingItem = (function() {

        /**
         * Properties of a RankingItem.
         * @memberof pb
         * @interface IRankingItem
         * @property {number|null} [uid] RankingItem uid
         * @property {string|null} [nickname] RankingItem nickname
         * @property {string|null} [icon] RankingItem icon
         * @property {string|null} [gender] RankingItem gender
         * @property {string|null} [location] RankingItem location
         * @property {number|null} [cgsClearance] RankingItem cgsClearance
         * @property {number|null} [cgsNetwin] RankingItem cgsNetwin
         * @property {number|null} [cgsProgress] RankingItem cgsProgress
         * @property {number|null} [cgdsAccount] RankingItem cgdsAccount
         * @property {number|null} [zsjcCount] RankingItem zsjcCount
         * @property {number|null} [level] RankingItem level
         * @property {number|null} [fame] RankingItem fame
         * @property {number|null} [cgdsCapital] RankingItem cgdsCapital
         * @property {number|null} [zsjcBettingItem] RankingItem zsjcBettingItem
         * @property {number|null} [zsjcBettingAmount] RankingItem zsjcBettingAmount
         * @property {number|null} [vipExpired] RankingItem vipExpired
         */

        /**
         * Constructs a new RankingItem.
         * @memberof pb
         * @classdesc Represents a RankingItem.
         * @implements IRankingItem
         * @constructor
         * @param {pb.IRankingItem=} [p] Properties to set
         */
        function RankingItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RankingItem uid.
         * @member {number} uid
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.uid = 0;

        /**
         * RankingItem nickname.
         * @member {string} nickname
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.nickname = "";

        /**
         * RankingItem icon.
         * @member {string} icon
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.icon = "";

        /**
         * RankingItem gender.
         * @member {string} gender
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.gender = "";

        /**
         * RankingItem location.
         * @member {string} location
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.location = "";

        /**
         * RankingItem cgsClearance.
         * @member {number} cgsClearance
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.cgsClearance = 0;

        /**
         * RankingItem cgsNetwin.
         * @member {number} cgsNetwin
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.cgsNetwin = 0;

        /**
         * RankingItem cgsProgress.
         * @member {number} cgsProgress
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.cgsProgress = 0;

        /**
         * RankingItem cgdsAccount.
         * @member {number} cgdsAccount
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.cgdsAccount = 0;

        /**
         * RankingItem zsjcCount.
         * @member {number} zsjcCount
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.zsjcCount = 0;

        /**
         * RankingItem level.
         * @member {number} level
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.level = 0;

        /**
         * RankingItem fame.
         * @member {number} fame
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.fame = 0;

        /**
         * RankingItem cgdsCapital.
         * @member {number} cgdsCapital
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.cgdsCapital = 0;

        /**
         * RankingItem zsjcBettingItem.
         * @member {number} zsjcBettingItem
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.zsjcBettingItem = 0;

        /**
         * RankingItem zsjcBettingAmount.
         * @member {number} zsjcBettingAmount
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.zsjcBettingAmount = 0;

        /**
         * RankingItem vipExpired.
         * @member {number} vipExpired
         * @memberof pb.RankingItem
         * @instance
         */
        RankingItem.prototype.vipExpired = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified RankingItem message. Does not implicitly {@link pb.RankingItem.verify|verify} messages.
         * @function encode
         * @memberof pb.RankingItem
         * @static
         * @param {pb.IRankingItem} m RankingItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RankingItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(18).string(m.nickname);
            if (m.icon != null && Object.hasOwnProperty.call(m, "icon"))
                w.uint32(26).string(m.icon);
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(34).string(m.gender);
            if (m.location != null && Object.hasOwnProperty.call(m, "location"))
                w.uint32(42).string(m.location);
            if (m.cgsClearance != null && Object.hasOwnProperty.call(m, "cgsClearance"))
                w.uint32(48).int32(m.cgsClearance);
            if (m.cgsNetwin != null && Object.hasOwnProperty.call(m, "cgsNetwin"))
                w.uint32(56).int32(m.cgsNetwin);
            if (m.cgsProgress != null && Object.hasOwnProperty.call(m, "cgsProgress"))
                w.uint32(64).int32(m.cgsProgress);
            if (m.cgdsAccount != null && Object.hasOwnProperty.call(m, "cgdsAccount"))
                w.uint32(72).int32(m.cgdsAccount);
            if (m.zsjcCount != null && Object.hasOwnProperty.call(m, "zsjcCount"))
                w.uint32(80).int32(m.zsjcCount);
            if (m.level != null && Object.hasOwnProperty.call(m, "level"))
                w.uint32(88).int32(m.level);
            if (m.fame != null && Object.hasOwnProperty.call(m, "fame"))
                w.uint32(96).int32(m.fame);
            if (m.cgdsCapital != null && Object.hasOwnProperty.call(m, "cgdsCapital"))
                w.uint32(104).int32(m.cgdsCapital);
            if (m.zsjcBettingItem != null && Object.hasOwnProperty.call(m, "zsjcBettingItem"))
                w.uint32(112).int32(m.zsjcBettingItem);
            if (m.zsjcBettingAmount != null && Object.hasOwnProperty.call(m, "zsjcBettingAmount"))
                w.uint32(120).int32(m.zsjcBettingAmount);
            if (m.vipExpired != null && Object.hasOwnProperty.call(m, "vipExpired"))
                w.uint32(128).int64(m.vipExpired);
            return w;
        };

        /**
         * Decodes a RankingItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RankingItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RankingItem} RankingItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RankingItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RankingItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.nickname = r.string();
                    break;
                case 3:
                    m.icon = r.string();
                    break;
                case 4:
                    m.gender = r.string();
                    break;
                case 5:
                    m.location = r.string();
                    break;
                case 6:
                    m.cgsClearance = r.int32();
                    break;
                case 7:
                    m.cgsNetwin = r.int32();
                    break;
                case 8:
                    m.cgsProgress = r.int32();
                    break;
                case 9:
                    m.cgdsAccount = r.int32();
                    break;
                case 10:
                    m.zsjcCount = r.int32();
                    break;
                case 11:
                    m.level = r.int32();
                    break;
                case 12:
                    m.fame = r.int32();
                    break;
                case 13:
                    m.cgdsCapital = r.int32();
                    break;
                case 14:
                    m.zsjcBettingItem = r.int32();
                    break;
                case 15:
                    m.zsjcBettingAmount = r.int32();
                    break;
                case 16:
                    m.vipExpired = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RankingItem;
    })();

    pb.RankingList = (function() {

        /**
         * Properties of a RankingList.
         * @memberof pb
         * @interface IRankingList
         * @property {number|null} [id] RankingList id
         * @property {Array.<pb.IRankingItem>|null} [Items] RankingList Items
         */

        /**
         * Constructs a new RankingList.
         * @memberof pb
         * @classdesc Represents a RankingList.
         * @implements IRankingList
         * @constructor
         * @param {pb.IRankingList=} [p] Properties to set
         */
        function RankingList(p) {
            this.Items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RankingList id.
         * @member {number} id
         * @memberof pb.RankingList
         * @instance
         */
        RankingList.prototype.id = 0;

        /**
         * RankingList Items.
         * @member {Array.<pb.IRankingItem>} Items
         * @memberof pb.RankingList
         * @instance
         */
        RankingList.prototype.Items = $util.emptyArray;

        /**
         * Encodes the specified RankingList message. Does not implicitly {@link pb.RankingList.verify|verify} messages.
         * @function encode
         * @memberof pb.RankingList
         * @static
         * @param {pb.IRankingList} m RankingList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RankingList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.Items != null && m.Items.length) {
                for (var i = 0; i < m.Items.length; ++i)
                    $root.pb.RankingItem.encode(m.Items[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RankingList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RankingList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RankingList} RankingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RankingList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RankingList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    if (!(m.Items && m.Items.length))
                        m.Items = [];
                    m.Items.push($root.pb.RankingItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RankingList;
    })();

    pb.CmdCgsRanking = (function() {

        /**
         * Properties of a CmdCgsRanking.
         * @memberof pb
         * @interface ICmdCgsRanking
         * @property {number|null} [id] CmdCgsRanking id
         * @property {number|null} [stage] CmdCgsRanking stage
         */

        /**
         * Constructs a new CmdCgsRanking.
         * @memberof pb
         * @classdesc Represents a CmdCgsRanking.
         * @implements ICmdCgsRanking
         * @constructor
         * @param {pb.ICmdCgsRanking=} [p] Properties to set
         */
        function CmdCgsRanking(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdCgsRanking id.
         * @member {number} id
         * @memberof pb.CmdCgsRanking
         * @instance
         */
        CmdCgsRanking.prototype.id = 0;

        /**
         * CmdCgsRanking stage.
         * @member {number} stage
         * @memberof pb.CmdCgsRanking
         * @instance
         */
        CmdCgsRanking.prototype.stage = 0;

        /**
         * Encodes the specified CmdCgsRanking message. Does not implicitly {@link pb.CmdCgsRanking.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdCgsRanking
         * @static
         * @param {pb.ICmdCgsRanking} m CmdCgsRanking message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdCgsRanking.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.stage != null && Object.hasOwnProperty.call(m, "stage"))
                w.uint32(16).int32(m.stage);
            return w;
        };

        /**
         * Decodes a CmdCgsRanking message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdCgsRanking
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdCgsRanking} CmdCgsRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCgsRanking.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdCgsRanking();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.stage = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdCgsRanking;
    })();

    pb.JjPlayer = (function() {

        /**
         * Properties of a JjPlayer.
         * @memberof pb
         * @interface IJjPlayer
         * @property {pb.IGameData|null} [gd] JjPlayer gd
         * @property {pb.IGameOperations|null} [ops] JjPlayer ops
         * @property {pb.IGameResult|null} [result] JjPlayer result
         */

        /**
         * Constructs a new JjPlayer.
         * @memberof pb
         * @classdesc Represents a JjPlayer.
         * @implements IJjPlayer
         * @constructor
         * @param {pb.IJjPlayer=} [p] Properties to set
         */
        function JjPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * JjPlayer gd.
         * @member {pb.IGameData|null|undefined} gd
         * @memberof pb.JjPlayer
         * @instance
         */
        JjPlayer.prototype.gd = null;

        /**
         * JjPlayer ops.
         * @member {pb.IGameOperations|null|undefined} ops
         * @memberof pb.JjPlayer
         * @instance
         */
        JjPlayer.prototype.ops = null;

        /**
         * JjPlayer result.
         * @member {pb.IGameResult|null|undefined} result
         * @memberof pb.JjPlayer
         * @instance
         */
        JjPlayer.prototype.result = null;

        /**
         * Encodes the specified JjPlayer message. Does not implicitly {@link pb.JjPlayer.verify|verify} messages.
         * @function encode
         * @memberof pb.JjPlayer
         * @static
         * @param {pb.IJjPlayer} m JjPlayer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        JjPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gd != null && Object.hasOwnProperty.call(m, "gd"))
                $root.pb.GameData.encode(m.gd, w.uint32(10).fork()).ldelim();
            if (m.ops != null && Object.hasOwnProperty.call(m, "ops"))
                $root.pb.GameOperations.encode(m.ops, w.uint32(18).fork()).ldelim();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.GameResult.encode(m.result, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a JjPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof pb.JjPlayer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.JjPlayer} JjPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        JjPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.JjPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.gd = $root.pb.GameData.decode(r, r.uint32());
                    break;
                case 2:
                    m.ops = $root.pb.GameOperations.decode(r, r.uint32());
                    break;
                case 3:
                    m.result = $root.pb.GameResult.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return JjPlayer;
    })();

    pb.JjGame = (function() {

        /**
         * Properties of a JjGame.
         * @memberof pb
         * @interface IJjGame
         * @property {number|null} [code] JjGame code
         * @property {pb.KType|null} [ktype] JjGame ktype
         * @property {number|null} [tsQuoteFrom] JjGame tsQuoteFrom
         * @property {number|null} [tsQuoteTo] JjGame tsQuoteTo
         * @property {number|null} [tsQuoteStart] JjGame tsQuoteStart
         * @property {pb.IQuotes|null} [quotes] JjGame quotes
         * @property {pb.IQuotesFuture|null} [quotesFuture] JjGame quotesFuture
         * @property {Array.<pb.IJjPlayer>|null} [players] JjGame players
         * @property {number|null} [capital] JjGame capital
         */

        /**
         * Constructs a new JjGame.
         * @memberof pb
         * @classdesc Represents a JjGame.
         * @implements IJjGame
         * @constructor
         * @param {pb.IJjGame=} [p] Properties to set
         */
        function JjGame(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * JjGame code.
         * @member {number} code
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.code = 0;

        /**
         * JjGame ktype.
         * @member {pb.KType} ktype
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.ktype = 0;

        /**
         * JjGame tsQuoteFrom.
         * @member {number} tsQuoteFrom
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.tsQuoteFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JjGame tsQuoteTo.
         * @member {number} tsQuoteTo
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.tsQuoteTo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JjGame tsQuoteStart.
         * @member {number} tsQuoteStart
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.tsQuoteStart = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JjGame quotes.
         * @member {pb.IQuotes|null|undefined} quotes
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.quotes = null;

        /**
         * JjGame quotesFuture.
         * @member {pb.IQuotesFuture|null|undefined} quotesFuture
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.quotesFuture = null;

        /**
         * JjGame players.
         * @member {Array.<pb.IJjPlayer>} players
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.players = $util.emptyArray;

        /**
         * JjGame capital.
         * @member {number} capital
         * @memberof pb.JjGame
         * @instance
         */
        JjGame.prototype.capital = 0;

        /**
         * Encodes the specified JjGame message. Does not implicitly {@link pb.JjGame.verify|verify} messages.
         * @function encode
         * @memberof pb.JjGame
         * @static
         * @param {pb.IJjGame} m JjGame message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        JjGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.ktype != null && Object.hasOwnProperty.call(m, "ktype"))
                w.uint32(16).int32(m.ktype);
            if (m.tsQuoteFrom != null && Object.hasOwnProperty.call(m, "tsQuoteFrom"))
                w.uint32(24).int64(m.tsQuoteFrom);
            if (m.tsQuoteTo != null && Object.hasOwnProperty.call(m, "tsQuoteTo"))
                w.uint32(32).int64(m.tsQuoteTo);
            if (m.tsQuoteStart != null && Object.hasOwnProperty.call(m, "tsQuoteStart"))
                w.uint32(40).int64(m.tsQuoteStart);
            if (m.quotes != null && Object.hasOwnProperty.call(m, "quotes"))
                $root.pb.Quotes.encode(m.quotes, w.uint32(50).fork()).ldelim();
            if (m.quotesFuture != null && Object.hasOwnProperty.call(m, "quotesFuture"))
                $root.pb.QuotesFuture.encode(m.quotesFuture, w.uint32(58).fork()).ldelim();
            if (m.players != null && m.players.length) {
                for (var i = 0; i < m.players.length; ++i)
                    $root.pb.JjPlayer.encode(m.players[i], w.uint32(66).fork()).ldelim();
            }
            if (m.capital != null && Object.hasOwnProperty.call(m, "capital"))
                w.uint32(72).int32(m.capital);
            return w;
        };

        /**
         * Decodes a JjGame message from the specified reader or buffer.
         * @function decode
         * @memberof pb.JjGame
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.JjGame} JjGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        JjGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.JjGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.int32();
                    break;
                case 2:
                    m.ktype = r.int32();
                    break;
                case 3:
                    m.tsQuoteFrom = r.int64();
                    break;
                case 4:
                    m.tsQuoteTo = r.int64();
                    break;
                case 5:
                    m.tsQuoteStart = r.int64();
                    break;
                case 6:
                    m.quotes = $root.pb.Quotes.decode(r, r.uint32());
                    break;
                case 7:
                    m.quotesFuture = $root.pb.QuotesFuture.decode(r, r.uint32());
                    break;
                case 8:
                    if (!(m.players && m.players.length))
                        m.players = [];
                    m.players.push($root.pb.JjPlayer.decode(r, r.uint32()));
                    break;
                case 9:
                    m.capital = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return JjGame;
    })();

    pb.CmdCgsGetStageAward = (function() {

        /**
         * Properties of a CmdCgsGetStageAward.
         * @memberof pb
         * @interface ICmdCgsGetStageAward
         * @property {number|null} [id] CmdCgsGetStageAward id
         * @property {number|null} [stage] CmdCgsGetStageAward stage
         * @property {boolean|null} [double] CmdCgsGetStageAward double
         */

        /**
         * Constructs a new CmdCgsGetStageAward.
         * @memberof pb
         * @classdesc Represents a CmdCgsGetStageAward.
         * @implements ICmdCgsGetStageAward
         * @constructor
         * @param {pb.ICmdCgsGetStageAward=} [p] Properties to set
         */
        function CmdCgsGetStageAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdCgsGetStageAward id.
         * @member {number} id
         * @memberof pb.CmdCgsGetStageAward
         * @instance
         */
        CmdCgsGetStageAward.prototype.id = 0;

        /**
         * CmdCgsGetStageAward stage.
         * @member {number} stage
         * @memberof pb.CmdCgsGetStageAward
         * @instance
         */
        CmdCgsGetStageAward.prototype.stage = 0;

        /**
         * CmdCgsGetStageAward double.
         * @member {boolean} double
         * @memberof pb.CmdCgsGetStageAward
         * @instance
         */
        CmdCgsGetStageAward.prototype.double = false;

        /**
         * Encodes the specified CmdCgsGetStageAward message. Does not implicitly {@link pb.CmdCgsGetStageAward.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdCgsGetStageAward
         * @static
         * @param {pb.ICmdCgsGetStageAward} m CmdCgsGetStageAward message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdCgsGetStageAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.stage != null && Object.hasOwnProperty.call(m, "stage"))
                w.uint32(16).int32(m.stage);
            if (m.double != null && Object.hasOwnProperty.call(m, "double"))
                w.uint32(24).bool(m.double);
            return w;
        };

        /**
         * Decodes a CmdCgsGetStageAward message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdCgsGetStageAward
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdCgsGetStageAward} CmdCgsGetStageAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCgsGetStageAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdCgsGetStageAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.stage = r.int32();
                    break;
                case 3:
                    m.double = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdCgsGetStageAward;
    })();

    pb.CmdStockOrder = (function() {

        /**
         * Properties of a CmdStockOrder.
         * @memberof pb
         * @interface ICmdStockOrder
         * @property {number|null} [code] CmdStockOrder code
         * @property {pb.OrderType|null} [type] CmdStockOrder type
         * @property {number|null} [price] CmdStockOrder price
         * @property {number|null} [volume] CmdStockOrder volume
         * @property {number|null} [amount] CmdStockOrder amount
         * @property {number|null} [uid] CmdStockOrder uid
         * @property {number|null} [id] CmdStockOrder id
         */

        /**
         * Constructs a new CmdStockOrder.
         * @memberof pb
         * @classdesc Represents a CmdStockOrder.
         * @implements ICmdStockOrder
         * @constructor
         * @param {pb.ICmdStockOrder=} [p] Properties to set
         */
        function CmdStockOrder(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdStockOrder code.
         * @member {number} code
         * @memberof pb.CmdStockOrder
         * @instance
         */
        CmdStockOrder.prototype.code = 0;

        /**
         * CmdStockOrder type.
         * @member {pb.OrderType} type
         * @memberof pb.CmdStockOrder
         * @instance
         */
        CmdStockOrder.prototype.type = 0;

        /**
         * CmdStockOrder price.
         * @member {number} price
         * @memberof pb.CmdStockOrder
         * @instance
         */
        CmdStockOrder.prototype.price = 0;

        /**
         * CmdStockOrder volume.
         * @member {number} volume
         * @memberof pb.CmdStockOrder
         * @instance
         */
        CmdStockOrder.prototype.volume = 0;

        /**
         * CmdStockOrder amount.
         * @member {number} amount
         * @memberof pb.CmdStockOrder
         * @instance
         */
        CmdStockOrder.prototype.amount = 0;

        /**
         * CmdStockOrder uid.
         * @member {number} uid
         * @memberof pb.CmdStockOrder
         * @instance
         */
        CmdStockOrder.prototype.uid = 0;

        /**
         * CmdStockOrder id.
         * @member {number} id
         * @memberof pb.CmdStockOrder
         * @instance
         */
        CmdStockOrder.prototype.id = 0;

        /**
         * Encodes the specified CmdStockOrder message. Does not implicitly {@link pb.CmdStockOrder.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdStockOrder
         * @static
         * @param {pb.ICmdStockOrder} m CmdStockOrder message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdStockOrder.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(16).int32(m.type);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(25).double(m.price);
            if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                w.uint32(32).int32(m.volume);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(40).int32(m.amount);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(48).int32(m.uid);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(56).int32(m.id);
            return w;
        };

        /**
         * Decodes a CmdStockOrder message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdStockOrder
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdStockOrder} CmdStockOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdStockOrder.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdStockOrder();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.int32();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.price = r.double();
                    break;
                case 4:
                    m.volume = r.int32();
                    break;
                case 5:
                    m.amount = r.int32();
                    break;
                case 6:
                    m.uid = r.int32();
                    break;
                case 7:
                    m.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdStockOrder;
    })();

    pb.CmdStockOrderReply = (function() {

        /**
         * Properties of a CmdStockOrderReply.
         * @memberof pb
         * @interface ICmdStockOrderReply
         * @property {number|null} [orderId] CmdStockOrderReply orderId
         * @property {number|null} [node] CmdStockOrderReply node
         * @property {pb.IErrorInfo|null} [result] CmdStockOrderReply result
         */

        /**
         * Constructs a new CmdStockOrderReply.
         * @memberof pb
         * @classdesc Represents a CmdStockOrderReply.
         * @implements ICmdStockOrderReply
         * @constructor
         * @param {pb.ICmdStockOrderReply=} [p] Properties to set
         */
        function CmdStockOrderReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdStockOrderReply orderId.
         * @member {number} orderId
         * @memberof pb.CmdStockOrderReply
         * @instance
         */
        CmdStockOrderReply.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdStockOrderReply node.
         * @member {number} node
         * @memberof pb.CmdStockOrderReply
         * @instance
         */
        CmdStockOrderReply.prototype.node = 0;

        /**
         * CmdStockOrderReply result.
         * @member {pb.IErrorInfo|null|undefined} result
         * @memberof pb.CmdStockOrderReply
         * @instance
         */
        CmdStockOrderReply.prototype.result = null;

        /**
         * Encodes the specified CmdStockOrderReply message. Does not implicitly {@link pb.CmdStockOrderReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdStockOrderReply
         * @static
         * @param {pb.ICmdStockOrderReply} m CmdStockOrderReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdStockOrderReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.orderId != null && Object.hasOwnProperty.call(m, "orderId"))
                w.uint32(8).int64(m.orderId);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(16).int32(m.node);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.ErrorInfo.encode(m.result, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a CmdStockOrderReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdStockOrderReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdStockOrderReply} CmdStockOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdStockOrderReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdStockOrderReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.orderId = r.int64();
                    break;
                case 2:
                    m.node = r.int32();
                    break;
                case 3:
                    m.result = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdStockOrderReply;
    })();

    pb.CmdStockOrderCancel = (function() {

        /**
         * Properties of a CmdStockOrderCancel.
         * @memberof pb
         * @interface ICmdStockOrderCancel
         * @property {number|null} [orderId] CmdStockOrderCancel orderId
         * @property {pb.OrderType|null} [type] CmdStockOrderCancel type
         * @property {number|null} [code] CmdStockOrderCancel code
         * @property {number|null} [uid] CmdStockOrderCancel uid
         * @property {number|null} [id] CmdStockOrderCancel id
         * @property {number|null} [node] CmdStockOrderCancel node
         */

        /**
         * Constructs a new CmdStockOrderCancel.
         * @memberof pb
         * @classdesc Represents a CmdStockOrderCancel.
         * @implements ICmdStockOrderCancel
         * @constructor
         * @param {pb.ICmdStockOrderCancel=} [p] Properties to set
         */
        function CmdStockOrderCancel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdStockOrderCancel orderId.
         * @member {number} orderId
         * @memberof pb.CmdStockOrderCancel
         * @instance
         */
        CmdStockOrderCancel.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdStockOrderCancel type.
         * @member {pb.OrderType} type
         * @memberof pb.CmdStockOrderCancel
         * @instance
         */
        CmdStockOrderCancel.prototype.type = 0;

        /**
         * CmdStockOrderCancel code.
         * @member {number} code
         * @memberof pb.CmdStockOrderCancel
         * @instance
         */
        CmdStockOrderCancel.prototype.code = 0;

        /**
         * CmdStockOrderCancel uid.
         * @member {number} uid
         * @memberof pb.CmdStockOrderCancel
         * @instance
         */
        CmdStockOrderCancel.prototype.uid = 0;

        /**
         * CmdStockOrderCancel id.
         * @member {number} id
         * @memberof pb.CmdStockOrderCancel
         * @instance
         */
        CmdStockOrderCancel.prototype.id = 0;

        /**
         * CmdStockOrderCancel node.
         * @member {number} node
         * @memberof pb.CmdStockOrderCancel
         * @instance
         */
        CmdStockOrderCancel.prototype.node = 0;

        /**
         * Encodes the specified CmdStockOrderCancel message. Does not implicitly {@link pb.CmdStockOrderCancel.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdStockOrderCancel
         * @static
         * @param {pb.ICmdStockOrderCancel} m CmdStockOrderCancel message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdStockOrderCancel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.orderId != null && Object.hasOwnProperty.call(m, "orderId"))
                w.uint32(8).int64(m.orderId);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(16).int32(m.type);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(24).int32(m.code);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(32).int32(m.uid);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(40).int32(m.id);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(48).int32(m.node);
            return w;
        };

        /**
         * Decodes a CmdStockOrderCancel message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdStockOrderCancel
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdStockOrderCancel} CmdStockOrderCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdStockOrderCancel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdStockOrderCancel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.orderId = r.int64();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.code = r.int32();
                    break;
                case 4:
                    m.uid = r.int32();
                    break;
                case 5:
                    m.id = r.int32();
                    break;
                case 6:
                    m.node = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdStockOrderCancel;
    })();

    pb.StockOrder = (function() {

        /**
         * Properties of a StockOrder.
         * @memberof pb
         * @interface IStockOrder
         * @property {number|null} [orderId] StockOrder orderId
         * @property {number|null} [code] StockOrder code
         * @property {pb.OrderType|null} [type] StockOrder type
         * @property {pb.OrderState|null} [state] StockOrder state
         * @property {number|null} [price] StockOrder price
         * @property {number|null} [volume] StockOrder volume
         * @property {number|null} [uid] StockOrder uid
         * @property {number|null} [ts] StockOrder ts
         * @property {number|null} [id] StockOrder id
         * @property {number|null} [node] StockOrder node
         * @property {number|null} [cost] StockOrder cost
         */

        /**
         * Constructs a new StockOrder.
         * @memberof pb
         * @classdesc Represents a StockOrder.
         * @implements IStockOrder
         * @constructor
         * @param {pb.IStockOrder=} [p] Properties to set
         */
        function StockOrder(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * StockOrder orderId.
         * @member {number} orderId
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StockOrder code.
         * @member {number} code
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.code = 0;

        /**
         * StockOrder type.
         * @member {pb.OrderType} type
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.type = 0;

        /**
         * StockOrder state.
         * @member {pb.OrderState} state
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.state = 0;

        /**
         * StockOrder price.
         * @member {number} price
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.price = 0;

        /**
         * StockOrder volume.
         * @member {number} volume
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.volume = 0;

        /**
         * StockOrder uid.
         * @member {number} uid
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.uid = 0;

        /**
         * StockOrder ts.
         * @member {number} ts
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StockOrder id.
         * @member {number} id
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.id = 0;

        /**
         * StockOrder node.
         * @member {number} node
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.node = 0;

        /**
         * StockOrder cost.
         * @member {number} cost
         * @memberof pb.StockOrder
         * @instance
         */
        StockOrder.prototype.cost = 0;

        /**
         * Encodes the specified StockOrder message. Does not implicitly {@link pb.StockOrder.verify|verify} messages.
         * @function encode
         * @memberof pb.StockOrder
         * @static
         * @param {pb.IStockOrder} m StockOrder message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        StockOrder.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.orderId != null && Object.hasOwnProperty.call(m, "orderId"))
                w.uint32(8).int64(m.orderId);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).int32(m.code);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(24).int32(m.type);
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                w.uint32(32).int32(m.state);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(41).double(m.price);
            if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                w.uint32(48).int32(m.volume);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(56).int32(m.uid);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(64).int64(m.ts);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(72).int32(m.id);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(80).int32(m.node);
            if (m.cost != null && Object.hasOwnProperty.call(m, "cost"))
                w.uint32(89).double(m.cost);
            return w;
        };

        /**
         * Decodes a StockOrder message from the specified reader or buffer.
         * @function decode
         * @memberof pb.StockOrder
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.StockOrder} StockOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        StockOrder.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.StockOrder();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.orderId = r.int64();
                    break;
                case 2:
                    m.code = r.int32();
                    break;
                case 3:
                    m.type = r.int32();
                    break;
                case 4:
                    m.state = r.int32();
                    break;
                case 5:
                    m.price = r.double();
                    break;
                case 6:
                    m.volume = r.int32();
                    break;
                case 7:
                    m.uid = r.int32();
                    break;
                case 8:
                    m.ts = r.int64();
                    break;
                case 9:
                    m.id = r.int32();
                    break;
                case 10:
                    m.node = r.int32();
                    break;
                case 11:
                    m.cost = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StockOrder;
    })();

    pb.StockOrderList = (function() {

        /**
         * Properties of a StockOrderList.
         * @memberof pb
         * @interface IStockOrderList
         * @property {Array.<pb.IStockOrder>|null} [items] StockOrderList items
         */

        /**
         * Constructs a new StockOrderList.
         * @memberof pb
         * @classdesc Represents a StockOrderList.
         * @implements IStockOrderList
         * @constructor
         * @param {pb.IStockOrderList=} [p] Properties to set
         */
        function StockOrderList(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * StockOrderList items.
         * @member {Array.<pb.IStockOrder>} items
         * @memberof pb.StockOrderList
         * @instance
         */
        StockOrderList.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified StockOrderList message. Does not implicitly {@link pb.StockOrderList.verify|verify} messages.
         * @function encode
         * @memberof pb.StockOrderList
         * @static
         * @param {pb.IStockOrderList} m StockOrderList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        StockOrderList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.StockOrder.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a StockOrderList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.StockOrderList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.StockOrderList} StockOrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        StockOrderList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.StockOrderList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.StockOrder.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StockOrderList;
    })();

    pb.StockOrderResult = (function() {

        /**
         * Properties of a StockOrderResult.
         * @memberof pb
         * @interface IStockOrderResult
         * @property {pb.IErrorInfo|null} [result] StockOrderResult result
         * @property {pb.IStockOrder|null} [order] StockOrderResult order
         */

        /**
         * Constructs a new StockOrderResult.
         * @memberof pb
         * @classdesc Represents a StockOrderResult.
         * @implements IStockOrderResult
         * @constructor
         * @param {pb.IStockOrderResult=} [p] Properties to set
         */
        function StockOrderResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * StockOrderResult result.
         * @member {pb.IErrorInfo|null|undefined} result
         * @memberof pb.StockOrderResult
         * @instance
         */
        StockOrderResult.prototype.result = null;

        /**
         * StockOrderResult order.
         * @member {pb.IStockOrder|null|undefined} order
         * @memberof pb.StockOrderResult
         * @instance
         */
        StockOrderResult.prototype.order = null;

        /**
         * Encodes the specified StockOrderResult message. Does not implicitly {@link pb.StockOrderResult.verify|verify} messages.
         * @function encode
         * @memberof pb.StockOrderResult
         * @static
         * @param {pb.IStockOrderResult} m StockOrderResult message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        StockOrderResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.ErrorInfo.encode(m.result, w.uint32(10).fork()).ldelim();
            if (m.order != null && Object.hasOwnProperty.call(m, "order"))
                $root.pb.StockOrder.encode(m.order, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a StockOrderResult message from the specified reader or buffer.
         * @function decode
         * @memberof pb.StockOrderResult
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.StockOrderResult} StockOrderResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        StockOrderResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.StockOrderResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.result = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 3:
                    m.order = $root.pb.StockOrder.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StockOrderResult;
    })();

    pb.StockPosition = (function() {

        /**
         * Properties of a StockPosition.
         * @memberof pb
         * @interface IStockPosition
         * @property {number|null} [code] StockPosition code
         * @property {number|null} [volumeFree] StockPosition volumeFree
         * @property {number|null} [volume] StockPosition volume
         * @property {number|null} [priceCost] StockPosition priceCost
         */

        /**
         * Constructs a new StockPosition.
         * @memberof pb
         * @classdesc Represents a StockPosition.
         * @implements IStockPosition
         * @constructor
         * @param {pb.IStockPosition=} [p] Properties to set
         */
        function StockPosition(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * StockPosition code.
         * @member {number} code
         * @memberof pb.StockPosition
         * @instance
         */
        StockPosition.prototype.code = 0;

        /**
         * StockPosition volumeFree.
         * @member {number} volumeFree
         * @memberof pb.StockPosition
         * @instance
         */
        StockPosition.prototype.volumeFree = 0;

        /**
         * StockPosition volume.
         * @member {number} volume
         * @memberof pb.StockPosition
         * @instance
         */
        StockPosition.prototype.volume = 0;

        /**
         * StockPosition priceCost.
         * @member {number} priceCost
         * @memberof pb.StockPosition
         * @instance
         */
        StockPosition.prototype.priceCost = 0;

        /**
         * Encodes the specified StockPosition message. Does not implicitly {@link pb.StockPosition.verify|verify} messages.
         * @function encode
         * @memberof pb.StockPosition
         * @static
         * @param {pb.IStockPosition} m StockPosition message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        StockPosition.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.volumeFree != null && Object.hasOwnProperty.call(m, "volumeFree"))
                w.uint32(16).int32(m.volumeFree);
            if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                w.uint32(24).int32(m.volume);
            if (m.priceCost != null && Object.hasOwnProperty.call(m, "priceCost"))
                w.uint32(33).double(m.priceCost);
            return w;
        };

        /**
         * Decodes a StockPosition message from the specified reader or buffer.
         * @function decode
         * @memberof pb.StockPosition
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.StockPosition} StockPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        StockPosition.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.StockPosition();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.int32();
                    break;
                case 2:
                    m.volumeFree = r.int32();
                    break;
                case 3:
                    m.volume = r.int32();
                    break;
                case 4:
                    m.priceCost = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StockPosition;
    })();

    pb.StockPositionList = (function() {

        /**
         * Properties of a StockPositionList.
         * @memberof pb
         * @interface IStockPositionList
         * @property {Array.<pb.IStockPosition>|null} [items] StockPositionList items
         */

        /**
         * Constructs a new StockPositionList.
         * @memberof pb
         * @classdesc Represents a StockPositionList.
         * @implements IStockPositionList
         * @constructor
         * @param {pb.IStockPositionList=} [p] Properties to set
         */
        function StockPositionList(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * StockPositionList items.
         * @member {Array.<pb.IStockPosition>} items
         * @memberof pb.StockPositionList
         * @instance
         */
        StockPositionList.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified StockPositionList message. Does not implicitly {@link pb.StockPositionList.verify|verify} messages.
         * @function encode
         * @memberof pb.StockPositionList
         * @static
         * @param {pb.IStockPositionList} m StockPositionList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        StockPositionList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.StockPosition.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a StockPositionList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.StockPositionList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.StockPositionList} StockPositionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        StockPositionList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.StockPositionList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.StockPosition.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StockPositionList;
    })();

    pb.CmdMncgExchange = (function() {

        /**
         * Properties of a CmdMncgExchange.
         * @memberof pb
         * @interface ICmdMncgExchange
         * @property {pb.ExchangeDirection|null} [direction] CmdMncgExchange direction
         * @property {number|null} [amount] CmdMncgExchange amount
         */

        /**
         * Constructs a new CmdMncgExchange.
         * @memberof pb
         * @classdesc Represents a CmdMncgExchange.
         * @implements ICmdMncgExchange
         * @constructor
         * @param {pb.ICmdMncgExchange=} [p] Properties to set
         */
        function CmdMncgExchange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdMncgExchange direction.
         * @member {pb.ExchangeDirection} direction
         * @memberof pb.CmdMncgExchange
         * @instance
         */
        CmdMncgExchange.prototype.direction = 0;

        /**
         * CmdMncgExchange amount.
         * @member {number} amount
         * @memberof pb.CmdMncgExchange
         * @instance
         */
        CmdMncgExchange.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdMncgExchange message. Does not implicitly {@link pb.CmdMncgExchange.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdMncgExchange
         * @static
         * @param {pb.ICmdMncgExchange} m CmdMncgExchange message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdMncgExchange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.direction != null && Object.hasOwnProperty.call(m, "direction"))
                w.uint32(8).int32(m.direction);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(16).int64(m.amount);
            return w;
        };

        /**
         * Decodes a CmdMncgExchange message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdMncgExchange
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdMncgExchange} CmdMncgExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdMncgExchange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdMncgExchange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.direction = r.int32();
                    break;
                case 2:
                    m.amount = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdMncgExchange;
    })();

    pb.CmdMncgExchangeReply = (function() {

        /**
         * Properties of a CmdMncgExchangeReply.
         * @memberof pb
         * @interface ICmdMncgExchangeReply
         * @property {pb.IErrorInfo|null} [result] CmdMncgExchangeReply result
         * @property {number|null} [account] CmdMncgExchangeReply account
         */

        /**
         * Constructs a new CmdMncgExchangeReply.
         * @memberof pb
         * @classdesc Represents a CmdMncgExchangeReply.
         * @implements ICmdMncgExchangeReply
         * @constructor
         * @param {pb.ICmdMncgExchangeReply=} [p] Properties to set
         */
        function CmdMncgExchangeReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdMncgExchangeReply result.
         * @member {pb.IErrorInfo|null|undefined} result
         * @memberof pb.CmdMncgExchangeReply
         * @instance
         */
        CmdMncgExchangeReply.prototype.result = null;

        /**
         * CmdMncgExchangeReply account.
         * @member {number} account
         * @memberof pb.CmdMncgExchangeReply
         * @instance
         */
        CmdMncgExchangeReply.prototype.account = 0;

        /**
         * Encodes the specified CmdMncgExchangeReply message. Does not implicitly {@link pb.CmdMncgExchangeReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdMncgExchangeReply
         * @static
         * @param {pb.ICmdMncgExchangeReply} m CmdMncgExchangeReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdMncgExchangeReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.ErrorInfo.encode(m.result, w.uint32(10).fork()).ldelim();
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(17).double(m.account);
            return w;
        };

        /**
         * Decodes a CmdMncgExchangeReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdMncgExchangeReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdMncgExchangeReply} CmdMncgExchangeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdMncgExchangeReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdMncgExchangeReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.result = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.account = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdMncgExchangeReply;
    })();

    pb.CmdMncgEditStock = (function() {

        /**
         * Properties of a CmdMncgEditStock.
         * @memberof pb
         * @interface ICmdMncgEditStock
         * @property {boolean|null} [removed] CmdMncgEditStock removed
         * @property {number|null} [code] CmdMncgEditStock code
         * @property {number|null} [id] CmdMncgEditStock id
         * @property {boolean|null} [isAiStock] CmdMncgEditStock isAiStock
         */

        /**
         * Constructs a new CmdMncgEditStock.
         * @memberof pb
         * @classdesc Represents a CmdMncgEditStock.
         * @implements ICmdMncgEditStock
         * @constructor
         * @param {pb.ICmdMncgEditStock=} [p] Properties to set
         */
        function CmdMncgEditStock(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdMncgEditStock removed.
         * @member {boolean} removed
         * @memberof pb.CmdMncgEditStock
         * @instance
         */
        CmdMncgEditStock.prototype.removed = false;

        /**
         * CmdMncgEditStock code.
         * @member {number} code
         * @memberof pb.CmdMncgEditStock
         * @instance
         */
        CmdMncgEditStock.prototype.code = 0;

        /**
         * CmdMncgEditStock id.
         * @member {number} id
         * @memberof pb.CmdMncgEditStock
         * @instance
         */
        CmdMncgEditStock.prototype.id = 0;

        /**
         * CmdMncgEditStock isAiStock.
         * @member {boolean} isAiStock
         * @memberof pb.CmdMncgEditStock
         * @instance
         */
        CmdMncgEditStock.prototype.isAiStock = false;

        /**
         * Encodes the specified CmdMncgEditStock message. Does not implicitly {@link pb.CmdMncgEditStock.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdMncgEditStock
         * @static
         * @param {pb.ICmdMncgEditStock} m CmdMncgEditStock message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdMncgEditStock.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.removed != null && Object.hasOwnProperty.call(m, "removed"))
                w.uint32(8).bool(m.removed);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).int32(m.code);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(24).int32(m.id);
            if (m.isAiStock != null && Object.hasOwnProperty.call(m, "isAiStock"))
                w.uint32(32).bool(m.isAiStock);
            return w;
        };

        /**
         * Decodes a CmdMncgEditStock message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdMncgEditStock
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdMncgEditStock} CmdMncgEditStock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdMncgEditStock.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdMncgEditStock();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.removed = r.bool();
                    break;
                case 2:
                    m.code = r.int32();
                    break;
                case 3:
                    m.id = r.int32();
                    break;
                case 4:
                    m.isAiStock = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdMncgEditStock;
    })();

    pb.CmdQueryStockOrder = (function() {

        /**
         * Properties of a CmdQueryStockOrder.
         * @memberof pb
         * @interface ICmdQueryStockOrder
         * @property {number|null} [uid] CmdQueryStockOrder uid
         * @property {number|null} [from] CmdQueryStockOrder from
         * @property {number|null} [to] CmdQueryStockOrder to
         * @property {number|null} [pageSize] CmdQueryStockOrder pageSize
         * @property {number|null} [orderId] CmdQueryStockOrder orderId
         * @property {number|null} [id] CmdQueryStockOrder id
         */

        /**
         * Constructs a new CmdQueryStockOrder.
         * @memberof pb
         * @classdesc Represents a CmdQueryStockOrder.
         * @implements ICmdQueryStockOrder
         * @constructor
         * @param {pb.ICmdQueryStockOrder=} [p] Properties to set
         */
        function CmdQueryStockOrder(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryStockOrder uid.
         * @member {number} uid
         * @memberof pb.CmdQueryStockOrder
         * @instance
         */
        CmdQueryStockOrder.prototype.uid = 0;

        /**
         * CmdQueryStockOrder from.
         * @member {number} from
         * @memberof pb.CmdQueryStockOrder
         * @instance
         */
        CmdQueryStockOrder.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryStockOrder to.
         * @member {number} to
         * @memberof pb.CmdQueryStockOrder
         * @instance
         */
        CmdQueryStockOrder.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryStockOrder pageSize.
         * @member {number} pageSize
         * @memberof pb.CmdQueryStockOrder
         * @instance
         */
        CmdQueryStockOrder.prototype.pageSize = 0;

        /**
         * CmdQueryStockOrder orderId.
         * @member {number} orderId
         * @memberof pb.CmdQueryStockOrder
         * @instance
         */
        CmdQueryStockOrder.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryStockOrder id.
         * @member {number} id
         * @memberof pb.CmdQueryStockOrder
         * @instance
         */
        CmdQueryStockOrder.prototype.id = 0;

        /**
         * Encodes the specified CmdQueryStockOrder message. Does not implicitly {@link pb.CmdQueryStockOrder.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryStockOrder
         * @static
         * @param {pb.ICmdQueryStockOrder} m CmdQueryStockOrder message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryStockOrder.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(16).int64(m.from);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(24).int64(m.to);
            if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                w.uint32(32).int32(m.pageSize);
            if (m.orderId != null && Object.hasOwnProperty.call(m, "orderId"))
                w.uint32(40).int64(m.orderId);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(48).int32(m.id);
            return w;
        };

        /**
         * Decodes a CmdQueryStockOrder message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryStockOrder
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryStockOrder} CmdQueryStockOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryStockOrder.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryStockOrder();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.from = r.int64();
                    break;
                case 3:
                    m.to = r.int64();
                    break;
                case 4:
                    m.pageSize = r.int32();
                    break;
                case 5:
                    m.orderId = r.int64();
                    break;
                case 6:
                    m.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryStockOrder;
    })();

    pb.CgdsConf = (function() {

        /**
         * Properties of a CgdsConf.
         * @memberof pb
         * @interface ICgdsConf
         * @property {number|null} [id] CgdsConf id
         * @property {number|null} [regTo] CgdsConf regTo
         * @property {number|null} [from] CgdsConf from
         * @property {number|null} [to] CgdsConf to
         * @property {string|null} [conf] CgdsConf conf
         * @property {string|null} [award] CgdsConf award
         * @property {number|null} [status] CgdsConf status
         * @property {string|null} [title] CgdsConf title
         * @property {string|null} [logo] CgdsConf logo
         * @property {string|null} [url] CgdsConf url
         */

        /**
         * Constructs a new CgdsConf.
         * @memberof pb
         * @classdesc Represents a CgdsConf.
         * @implements ICgdsConf
         * @constructor
         * @param {pb.ICgdsConf=} [p] Properties to set
         */
        function CgdsConf(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgdsConf id.
         * @member {number} id
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.id = 0;

        /**
         * CgdsConf regTo.
         * @member {number} regTo
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.regTo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CgdsConf from.
         * @member {number} from
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CgdsConf to.
         * @member {number} to
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CgdsConf conf.
         * @member {string} conf
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.conf = "";

        /**
         * CgdsConf award.
         * @member {string} award
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.award = "";

        /**
         * CgdsConf status.
         * @member {number} status
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.status = 0;

        /**
         * CgdsConf title.
         * @member {string} title
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.title = "";

        /**
         * CgdsConf logo.
         * @member {string} logo
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.logo = "";

        /**
         * CgdsConf url.
         * @member {string} url
         * @memberof pb.CgdsConf
         * @instance
         */
        CgdsConf.prototype.url = "";

        /**
         * Encodes the specified CgdsConf message. Does not implicitly {@link pb.CgdsConf.verify|verify} messages.
         * @function encode
         * @memberof pb.CgdsConf
         * @static
         * @param {pb.ICgdsConf} m CgdsConf message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgdsConf.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.regTo != null && Object.hasOwnProperty.call(m, "regTo"))
                w.uint32(16).int64(m.regTo);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(24).int64(m.from);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(32).int64(m.to);
            if (m.conf != null && Object.hasOwnProperty.call(m, "conf"))
                w.uint32(42).string(m.conf);
            if (m.award != null && Object.hasOwnProperty.call(m, "award"))
                w.uint32(50).string(m.award);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(56).int32(m.status);
            if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                w.uint32(66).string(m.title);
            if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
                w.uint32(74).string(m.logo);
            if (m.url != null && Object.hasOwnProperty.call(m, "url"))
                w.uint32(82).string(m.url);
            return w;
        };

        /**
         * Decodes a CgdsConf message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgdsConf
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgdsConf} CgdsConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgdsConf.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgdsConf();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.regTo = r.int64();
                    break;
                case 3:
                    m.from = r.int64();
                    break;
                case 4:
                    m.to = r.int64();
                    break;
                case 5:
                    m.conf = r.string();
                    break;
                case 6:
                    m.award = r.string();
                    break;
                case 7:
                    m.status = r.int32();
                    break;
                case 8:
                    m.title = r.string();
                    break;
                case 9:
                    m.logo = r.string();
                    break;
                case 10:
                    m.url = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgdsConf;
    })();

    pb.CgdsList = (function() {

        /**
         * Properties of a CgdsList.
         * @memberof pb
         * @interface ICgdsList
         * @property {Array.<pb.ICgdsConf>|null} [items] CgdsList items
         */

        /**
         * Constructs a new CgdsList.
         * @memberof pb
         * @classdesc Represents a CgdsList.
         * @implements ICgdsList
         * @constructor
         * @param {pb.ICgdsList=} [p] Properties to set
         */
        function CgdsList(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CgdsList items.
         * @member {Array.<pb.ICgdsConf>} items
         * @memberof pb.CgdsList
         * @instance
         */
        CgdsList.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified CgdsList message. Does not implicitly {@link pb.CgdsList.verify|verify} messages.
         * @function encode
         * @memberof pb.CgdsList
         * @static
         * @param {pb.ICgdsList} m CgdsList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CgdsList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.CgdsConf.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CgdsList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CgdsList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CgdsList} CgdsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CgdsList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CgdsList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.CgdsConf.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CgdsList;
    })();

    pb.CmdCgdsReg = (function() {

        /**
         * Properties of a CmdCgdsReg.
         * @memberof pb
         * @interface ICmdCgdsReg
         * @property {number|null} [id] CmdCgdsReg id
         */

        /**
         * Constructs a new CmdCgdsReg.
         * @memberof pb
         * @classdesc Represents a CmdCgdsReg.
         * @implements ICmdCgdsReg
         * @constructor
         * @param {pb.ICmdCgdsReg=} [p] Properties to set
         */
        function CmdCgdsReg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdCgdsReg id.
         * @member {number} id
         * @memberof pb.CmdCgdsReg
         * @instance
         */
        CmdCgdsReg.prototype.id = 0;

        /**
         * Encodes the specified CmdCgdsReg message. Does not implicitly {@link pb.CmdCgdsReg.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdCgdsReg
         * @static
         * @param {pb.ICmdCgdsReg} m CmdCgdsReg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdCgdsReg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            return w;
        };

        /**
         * Decodes a CmdCgdsReg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdCgdsReg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdCgdsReg} CmdCgdsReg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCgdsReg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdCgdsReg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdCgdsReg;
    })();

    pb.CmdCgdsRegReply = (function() {

        /**
         * Properties of a CmdCgdsRegReply.
         * @memberof pb
         * @interface ICmdCgdsRegReply
         * @property {pb.IErrorInfo|null} [result] CmdCgdsRegReply result
         * @property {pb.ICgdsStateItem|null} [cgdsStateItem] CmdCgdsRegReply cgdsStateItem
         */

        /**
         * Constructs a new CmdCgdsRegReply.
         * @memberof pb
         * @classdesc Represents a CmdCgdsRegReply.
         * @implements ICmdCgdsRegReply
         * @constructor
         * @param {pb.ICmdCgdsRegReply=} [p] Properties to set
         */
        function CmdCgdsRegReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdCgdsRegReply result.
         * @member {pb.IErrorInfo|null|undefined} result
         * @memberof pb.CmdCgdsRegReply
         * @instance
         */
        CmdCgdsRegReply.prototype.result = null;

        /**
         * CmdCgdsRegReply cgdsStateItem.
         * @member {pb.ICgdsStateItem|null|undefined} cgdsStateItem
         * @memberof pb.CmdCgdsRegReply
         * @instance
         */
        CmdCgdsRegReply.prototype.cgdsStateItem = null;

        /**
         * Encodes the specified CmdCgdsRegReply message. Does not implicitly {@link pb.CmdCgdsRegReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdCgdsRegReply
         * @static
         * @param {pb.ICmdCgdsRegReply} m CmdCgdsRegReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdCgdsRegReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.ErrorInfo.encode(m.result, w.uint32(10).fork()).ldelim();
            if (m.cgdsStateItem != null && Object.hasOwnProperty.call(m, "cgdsStateItem"))
                $root.pb.CgdsStateItem.encode(m.cgdsStateItem, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a CmdCgdsRegReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdCgdsRegReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdCgdsRegReply} CmdCgdsRegReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCgdsRegReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdCgdsRegReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.result = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.cgdsStateItem = $root.pb.CgdsStateItem.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdCgdsRegReply;
    })();

    pb.CmdCgdsRanking = (function() {

        /**
         * Properties of a CmdCgdsRanking.
         * @memberof pb
         * @interface ICmdCgdsRanking
         * @property {number|null} [id] CmdCgdsRanking id
         */

        /**
         * Constructs a new CmdCgdsRanking.
         * @memberof pb
         * @classdesc Represents a CmdCgdsRanking.
         * @implements ICmdCgdsRanking
         * @constructor
         * @param {pb.ICmdCgdsRanking=} [p] Properties to set
         */
        function CmdCgdsRanking(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdCgdsRanking id.
         * @member {number} id
         * @memberof pb.CmdCgdsRanking
         * @instance
         */
        CmdCgdsRanking.prototype.id = 0;

        /**
         * Encodes the specified CmdCgdsRanking message. Does not implicitly {@link pb.CmdCgdsRanking.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdCgdsRanking
         * @static
         * @param {pb.ICmdCgdsRanking} m CmdCgdsRanking message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdCgdsRanking.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            return w;
        };

        /**
         * Decodes a CmdCgdsRanking message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdCgdsRanking
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdCgdsRanking} CmdCgdsRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCgdsRanking.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdCgdsRanking();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdCgdsRanking;
    })();

    /**
     * PriceType enum.
     * @name pb.PriceType
     * @enum {number}
     * @property {number} PriceType_NULL=0 PriceType_NULL value
     * @property {number} Open=1 Open value
     * @property {number} Close=2 Close value
     * @property {number} High=3 High value
     * @property {number} Low=4 Low value
     */
    pb.PriceType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PriceType_NULL"] = 0;
        values[valuesById[1] = "Open"] = 1;
        values[valuesById[2] = "Close"] = 2;
        values[valuesById[3] = "High"] = 3;
        values[valuesById[4] = "Low"] = 4;
        return values;
    })();

    /**
     * ZsjcGameType enum.
     * @name pb.ZsjcGameType
     * @enum {number}
     * @property {number} kpjc=0 kpjc value
     * @property {number} drjc=1 drjc value
     * @property {number} spjc=2 spjc value
     */
    pb.ZsjcGameType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kpjc"] = 0;
        values[valuesById[1] = "drjc"] = 1;
        values[valuesById[2] = "spjc"] = 2;
        return values;
    })();

    pb.ZsjcOption = (function() {

        /**
         * Properties of a ZsjcOption.
         * @memberof pb
         * @interface IZsjcOption
         * @property {number|null} [ts] ZsjcOption ts
         * @property {pb.PriceType|null} [pt] ZsjcOption pt
         * @property {number|null} [money] ZsjcOption money
         */

        /**
         * Constructs a new ZsjcOption.
         * @memberof pb
         * @classdesc Represents a ZsjcOption.
         * @implements IZsjcOption
         * @constructor
         * @param {pb.IZsjcOption=} [p] Properties to set
         */
        function ZsjcOption(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ZsjcOption ts.
         * @member {number} ts
         * @memberof pb.ZsjcOption
         * @instance
         */
        ZsjcOption.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZsjcOption pt.
         * @member {pb.PriceType} pt
         * @memberof pb.ZsjcOption
         * @instance
         */
        ZsjcOption.prototype.pt = 0;

        /**
         * ZsjcOption money.
         * @member {number} money
         * @memberof pb.ZsjcOption
         * @instance
         */
        ZsjcOption.prototype.money = 0;

        /**
         * Encodes the specified ZsjcOption message. Does not implicitly {@link pb.ZsjcOption.verify|verify} messages.
         * @function encode
         * @memberof pb.ZsjcOption
         * @static
         * @param {pb.IZsjcOption} m ZsjcOption message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ZsjcOption.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(8).int64(m.ts);
            if (m.pt != null && Object.hasOwnProperty.call(m, "pt"))
                w.uint32(16).int32(m.pt);
            if (m.money != null && Object.hasOwnProperty.call(m, "money"))
                w.uint32(24).int32(m.money);
            return w;
        };

        /**
         * Decodes a ZsjcOption message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ZsjcOption
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ZsjcOption} ZsjcOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ZsjcOption.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ZsjcOption();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ts = r.int64();
                    break;
                case 2:
                    m.pt = r.int32();
                    break;
                case 3:
                    m.money = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ZsjcOption;
    })();

    pb.ZsjcGameData = (function() {

        /**
         * Properties of a ZsjcGameData.
         * @memberof pb
         * @interface IZsjcGameData
         * @property {pb.ZsjcGameType|null} [gameType] ZsjcGameData gameType
         * @property {number|null} [code] ZsjcGameData code
         * @property {number|null} [tsSettling] ZsjcGameData tsSettling
         * @property {boolean|null} [settled] ZsjcGameData settled
         * @property {pb.IZsjcOption|null} [first] ZsjcGameData first
         * @property {pb.IZsjcOption|null} [second] ZsjcGameData second
         */

        /**
         * Constructs a new ZsjcGameData.
         * @memberof pb
         * @classdesc Represents a ZsjcGameData.
         * @implements IZsjcGameData
         * @constructor
         * @param {pb.IZsjcGameData=} [p] Properties to set
         */
        function ZsjcGameData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ZsjcGameData gameType.
         * @member {pb.ZsjcGameType} gameType
         * @memberof pb.ZsjcGameData
         * @instance
         */
        ZsjcGameData.prototype.gameType = 0;

        /**
         * ZsjcGameData code.
         * @member {number} code
         * @memberof pb.ZsjcGameData
         * @instance
         */
        ZsjcGameData.prototype.code = 0;

        /**
         * ZsjcGameData tsSettling.
         * @member {number} tsSettling
         * @memberof pb.ZsjcGameData
         * @instance
         */
        ZsjcGameData.prototype.tsSettling = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZsjcGameData settled.
         * @member {boolean} settled
         * @memberof pb.ZsjcGameData
         * @instance
         */
        ZsjcGameData.prototype.settled = false;

        /**
         * ZsjcGameData first.
         * @member {pb.IZsjcOption|null|undefined} first
         * @memberof pb.ZsjcGameData
         * @instance
         */
        ZsjcGameData.prototype.first = null;

        /**
         * ZsjcGameData second.
         * @member {pb.IZsjcOption|null|undefined} second
         * @memberof pb.ZsjcGameData
         * @instance
         */
        ZsjcGameData.prototype.second = null;

        /**
         * Encodes the specified ZsjcGameData message. Does not implicitly {@link pb.ZsjcGameData.verify|verify} messages.
         * @function encode
         * @memberof pb.ZsjcGameData
         * @static
         * @param {pb.IZsjcGameData} m ZsjcGameData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ZsjcGameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                w.uint32(8).int32(m.gameType);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).int32(m.code);
            if (m.tsSettling != null && Object.hasOwnProperty.call(m, "tsSettling"))
                w.uint32(24).int64(m.tsSettling);
            if (m.settled != null && Object.hasOwnProperty.call(m, "settled"))
                w.uint32(32).bool(m.settled);
            if (m.first != null && Object.hasOwnProperty.call(m, "first"))
                $root.pb.ZsjcOption.encode(m.first, w.uint32(42).fork()).ldelim();
            if (m.second != null && Object.hasOwnProperty.call(m, "second"))
                $root.pb.ZsjcOption.encode(m.second, w.uint32(50).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a ZsjcGameData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ZsjcGameData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ZsjcGameData} ZsjcGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ZsjcGameData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ZsjcGameData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.gameType = r.int32();
                    break;
                case 2:
                    m.code = r.int32();
                    break;
                case 3:
                    m.tsSettling = r.int64();
                    break;
                case 4:
                    m.settled = r.bool();
                    break;
                case 5:
                    m.first = $root.pb.ZsjcOption.decode(r, r.uint32());
                    break;
                case 6:
                    m.second = $root.pb.ZsjcOption.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ZsjcGameData;
    })();

    pb.ZsjcGameList = (function() {

        /**
         * Properties of a ZsjcGameList.
         * @memberof pb
         * @interface IZsjcGameList
         * @property {Array.<pb.IZsjcGameData>|null} [items] ZsjcGameList items
         */

        /**
         * Constructs a new ZsjcGameList.
         * @memberof pb
         * @classdesc Represents a ZsjcGameList.
         * @implements IZsjcGameList
         * @constructor
         * @param {pb.IZsjcGameList=} [p] Properties to set
         */
        function ZsjcGameList(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ZsjcGameList items.
         * @member {Array.<pb.IZsjcGameData>} items
         * @memberof pb.ZsjcGameList
         * @instance
         */
        ZsjcGameList.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ZsjcGameList message. Does not implicitly {@link pb.ZsjcGameList.verify|verify} messages.
         * @function encode
         * @memberof pb.ZsjcGameList
         * @static
         * @param {pb.IZsjcGameList} m ZsjcGameList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ZsjcGameList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.ZsjcGameData.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ZsjcGameList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ZsjcGameList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ZsjcGameList} ZsjcGameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ZsjcGameList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ZsjcGameList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.ZsjcGameData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ZsjcGameList;
    })();

    pb.CmdBet = (function() {

        /**
         * Properties of a CmdBet.
         * @memberof pb
         * @interface ICmdBet
         * @property {number|null} [uid] CmdBet uid
         * @property {number|null} [money] CmdBet money
         * @property {number|null} [gameIndex] CmdBet gameIndex
         * @property {number|null} [betting] CmdBet betting
         * @property {string|null} [nickname] CmdBet nickname
         * @property {string|null} [icon] CmdBet icon
         * @property {string|null} [gender] CmdBet gender
         */

        /**
         * Constructs a new CmdBet.
         * @memberof pb
         * @classdesc Represents a CmdBet.
         * @implements ICmdBet
         * @constructor
         * @param {pb.ICmdBet=} [p] Properties to set
         */
        function CmdBet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdBet uid.
         * @member {number} uid
         * @memberof pb.CmdBet
         * @instance
         */
        CmdBet.prototype.uid = 0;

        /**
         * CmdBet money.
         * @member {number} money
         * @memberof pb.CmdBet
         * @instance
         */
        CmdBet.prototype.money = 0;

        /**
         * CmdBet gameIndex.
         * @member {number} gameIndex
         * @memberof pb.CmdBet
         * @instance
         */
        CmdBet.prototype.gameIndex = 0;

        /**
         * CmdBet betting.
         * @member {number} betting
         * @memberof pb.CmdBet
         * @instance
         */
        CmdBet.prototype.betting = 0;

        /**
         * CmdBet nickname.
         * @member {string} nickname
         * @memberof pb.CmdBet
         * @instance
         */
        CmdBet.prototype.nickname = "";

        /**
         * CmdBet icon.
         * @member {string} icon
         * @memberof pb.CmdBet
         * @instance
         */
        CmdBet.prototype.icon = "";

        /**
         * CmdBet gender.
         * @member {string} gender
         * @memberof pb.CmdBet
         * @instance
         */
        CmdBet.prototype.gender = "";

        /**
         * Encodes the specified CmdBet message. Does not implicitly {@link pb.CmdBet.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdBet
         * @static
         * @param {pb.ICmdBet} m CmdBet message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdBet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.money != null && Object.hasOwnProperty.call(m, "money"))
                w.uint32(16).int32(m.money);
            if (m.gameIndex != null && Object.hasOwnProperty.call(m, "gameIndex"))
                w.uint32(24).int32(m.gameIndex);
            if (m.betting != null && Object.hasOwnProperty.call(m, "betting"))
                w.uint32(32).int32(m.betting);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(42).string(m.nickname);
            if (m.icon != null && Object.hasOwnProperty.call(m, "icon"))
                w.uint32(50).string(m.icon);
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(58).string(m.gender);
            return w;
        };

        /**
         * Decodes a CmdBet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdBet
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdBet} CmdBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdBet.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdBet();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.money = r.int32();
                    break;
                case 3:
                    m.gameIndex = r.int32();
                    break;
                case 4:
                    m.betting = r.int32();
                    break;
                case 5:
                    m.nickname = r.string();
                    break;
                case 6:
                    m.icon = r.string();
                    break;
                case 7:
                    m.gender = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdBet;
    })();

    pb.CmdZsjcPlayerBettingList = (function() {

        /**
         * Properties of a CmdZsjcPlayerBettingList.
         * @memberof pb
         * @interface ICmdZsjcPlayerBettingList
         * @property {number|null} [code] CmdZsjcPlayerBettingList code
         * @property {number|null} [gametype] CmdZsjcPlayerBettingList gametype
         */

        /**
         * Constructs a new CmdZsjcPlayerBettingList.
         * @memberof pb
         * @classdesc Represents a CmdZsjcPlayerBettingList.
         * @implements ICmdZsjcPlayerBettingList
         * @constructor
         * @param {pb.ICmdZsjcPlayerBettingList=} [p] Properties to set
         */
        function CmdZsjcPlayerBettingList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdZsjcPlayerBettingList code.
         * @member {number} code
         * @memberof pb.CmdZsjcPlayerBettingList
         * @instance
         */
        CmdZsjcPlayerBettingList.prototype.code = 0;

        /**
         * CmdZsjcPlayerBettingList gametype.
         * @member {number} gametype
         * @memberof pb.CmdZsjcPlayerBettingList
         * @instance
         */
        CmdZsjcPlayerBettingList.prototype.gametype = 0;

        /**
         * Encodes the specified CmdZsjcPlayerBettingList message. Does not implicitly {@link pb.CmdZsjcPlayerBettingList.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdZsjcPlayerBettingList
         * @static
         * @param {pb.ICmdZsjcPlayerBettingList} m CmdZsjcPlayerBettingList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdZsjcPlayerBettingList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.gametype != null && Object.hasOwnProperty.call(m, "gametype"))
                w.uint32(16).int32(m.gametype);
            return w;
        };

        /**
         * Decodes a CmdZsjcPlayerBettingList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdZsjcPlayerBettingList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdZsjcPlayerBettingList} CmdZsjcPlayerBettingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdZsjcPlayerBettingList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdZsjcPlayerBettingList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.int32();
                    break;
                case 2:
                    m.gametype = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdZsjcPlayerBettingList;
    })();

    pb.ZsjcPlayerBettingList = (function() {

        /**
         * Properties of a ZsjcPlayerBettingList.
         * @memberof pb
         * @interface IZsjcPlayerBettingList
         * @property {number|null} [code] ZsjcPlayerBettingList code
         * @property {number|null} [gametype] ZsjcPlayerBettingList gametype
         * @property {Array.<pb.IRankingItem>|null} [Items] ZsjcPlayerBettingList Items
         */

        /**
         * Constructs a new ZsjcPlayerBettingList.
         * @memberof pb
         * @classdesc Represents a ZsjcPlayerBettingList.
         * @implements IZsjcPlayerBettingList
         * @constructor
         * @param {pb.IZsjcPlayerBettingList=} [p] Properties to set
         */
        function ZsjcPlayerBettingList(p) {
            this.Items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ZsjcPlayerBettingList code.
         * @member {number} code
         * @memberof pb.ZsjcPlayerBettingList
         * @instance
         */
        ZsjcPlayerBettingList.prototype.code = 0;

        /**
         * ZsjcPlayerBettingList gametype.
         * @member {number} gametype
         * @memberof pb.ZsjcPlayerBettingList
         * @instance
         */
        ZsjcPlayerBettingList.prototype.gametype = 0;

        /**
         * ZsjcPlayerBettingList Items.
         * @member {Array.<pb.IRankingItem>} Items
         * @memberof pb.ZsjcPlayerBettingList
         * @instance
         */
        ZsjcPlayerBettingList.prototype.Items = $util.emptyArray;

        /**
         * Encodes the specified ZsjcPlayerBettingList message. Does not implicitly {@link pb.ZsjcPlayerBettingList.verify|verify} messages.
         * @function encode
         * @memberof pb.ZsjcPlayerBettingList
         * @static
         * @param {pb.IZsjcPlayerBettingList} m ZsjcPlayerBettingList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ZsjcPlayerBettingList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.gametype != null && Object.hasOwnProperty.call(m, "gametype"))
                w.uint32(16).int32(m.gametype);
            if (m.Items != null && m.Items.length) {
                for (var i = 0; i < m.Items.length; ++i)
                    $root.pb.RankingItem.encode(m.Items[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ZsjcPlayerBettingList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ZsjcPlayerBettingList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ZsjcPlayerBettingList} ZsjcPlayerBettingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ZsjcPlayerBettingList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ZsjcPlayerBettingList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.int32();
                    break;
                case 2:
                    m.gametype = r.int32();
                    break;
                case 3:
                    if (!(m.Items && m.Items.length))
                        m.Items = [];
                    m.Items.push($root.pb.RankingItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ZsjcPlayerBettingList;
    })();

    pb.CmdZsjcBettingResultList = (function() {

        /**
         * Properties of a CmdZsjcBettingResultList.
         * @memberof pb
         * @interface ICmdZsjcBettingResultList
         * @property {number|null} [uid] CmdZsjcBettingResultList uid
         * @property {number|null} [code] CmdZsjcBettingResultList code
         * @property {number|null} [gametype] CmdZsjcBettingResultList gametype
         * @property {number|null} [from] CmdZsjcBettingResultList from
         * @property {number|null} [to] CmdZsjcBettingResultList to
         * @property {number|null} [total] CmdZsjcBettingResultList total
         */

        /**
         * Constructs a new CmdZsjcBettingResultList.
         * @memberof pb
         * @classdesc Represents a CmdZsjcBettingResultList.
         * @implements ICmdZsjcBettingResultList
         * @constructor
         * @param {pb.ICmdZsjcBettingResultList=} [p] Properties to set
         */
        function CmdZsjcBettingResultList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdZsjcBettingResultList uid.
         * @member {number} uid
         * @memberof pb.CmdZsjcBettingResultList
         * @instance
         */
        CmdZsjcBettingResultList.prototype.uid = 0;

        /**
         * CmdZsjcBettingResultList code.
         * @member {number} code
         * @memberof pb.CmdZsjcBettingResultList
         * @instance
         */
        CmdZsjcBettingResultList.prototype.code = 0;

        /**
         * CmdZsjcBettingResultList gametype.
         * @member {number} gametype
         * @memberof pb.CmdZsjcBettingResultList
         * @instance
         */
        CmdZsjcBettingResultList.prototype.gametype = 0;

        /**
         * CmdZsjcBettingResultList from.
         * @member {number} from
         * @memberof pb.CmdZsjcBettingResultList
         * @instance
         */
        CmdZsjcBettingResultList.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdZsjcBettingResultList to.
         * @member {number} to
         * @memberof pb.CmdZsjcBettingResultList
         * @instance
         */
        CmdZsjcBettingResultList.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdZsjcBettingResultList total.
         * @member {number} total
         * @memberof pb.CmdZsjcBettingResultList
         * @instance
         */
        CmdZsjcBettingResultList.prototype.total = 0;

        /**
         * Encodes the specified CmdZsjcBettingResultList message. Does not implicitly {@link pb.CmdZsjcBettingResultList.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdZsjcBettingResultList
         * @static
         * @param {pb.ICmdZsjcBettingResultList} m CmdZsjcBettingResultList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdZsjcBettingResultList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).int32(m.code);
            if (m.gametype != null && Object.hasOwnProperty.call(m, "gametype"))
                w.uint32(24).int32(m.gametype);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(32).int64(m.from);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(40).int64(m.to);
            if (m.total != null && Object.hasOwnProperty.call(m, "total"))
                w.uint32(48).int32(m.total);
            return w;
        };

        /**
         * Decodes a CmdZsjcBettingResultList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdZsjcBettingResultList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdZsjcBettingResultList} CmdZsjcBettingResultList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdZsjcBettingResultList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdZsjcBettingResultList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.code = r.int32();
                    break;
                case 3:
                    m.gametype = r.int32();
                    break;
                case 4:
                    m.from = r.int64();
                    break;
                case 5:
                    m.to = r.int64();
                    break;
                case 6:
                    m.total = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdZsjcBettingResultList;
    })();

    pb.ZsjcBettingResultItem = (function() {

        /**
         * Properties of a ZsjcBettingResultItem.
         * @memberof pb
         * @interface IZsjcBettingResultItem
         * @property {number|null} [uid] ZsjcBettingResultItem uid
         * @property {number|null} [code] ZsjcBettingResultItem code
         * @property {number|null} [gametype] ZsjcBettingResultItem gametype
         * @property {number|null} [betting] ZsjcBettingResultItem betting
         * @property {number|null} [money] ZsjcBettingResultItem money
         * @property {number|null} [bonus] ZsjcBettingResultItem bonus
         * @property {number|null} [tsBetting] ZsjcBettingResultItem tsBetting
         * @property {number|null} [tsSettling] ZsjcBettingResultItem tsSettling
         */

        /**
         * Constructs a new ZsjcBettingResultItem.
         * @memberof pb
         * @classdesc Represents a ZsjcBettingResultItem.
         * @implements IZsjcBettingResultItem
         * @constructor
         * @param {pb.IZsjcBettingResultItem=} [p] Properties to set
         */
        function ZsjcBettingResultItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ZsjcBettingResultItem uid.
         * @member {number} uid
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.uid = 0;

        /**
         * ZsjcBettingResultItem code.
         * @member {number} code
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.code = 0;

        /**
         * ZsjcBettingResultItem gametype.
         * @member {number} gametype
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.gametype = 0;

        /**
         * ZsjcBettingResultItem betting.
         * @member {number} betting
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.betting = 0;

        /**
         * ZsjcBettingResultItem money.
         * @member {number} money
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.money = 0;

        /**
         * ZsjcBettingResultItem bonus.
         * @member {number} bonus
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.bonus = 0;

        /**
         * ZsjcBettingResultItem tsBetting.
         * @member {number} tsBetting
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.tsBetting = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZsjcBettingResultItem tsSettling.
         * @member {number} tsSettling
         * @memberof pb.ZsjcBettingResultItem
         * @instance
         */
        ZsjcBettingResultItem.prototype.tsSettling = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ZsjcBettingResultItem message. Does not implicitly {@link pb.ZsjcBettingResultItem.verify|verify} messages.
         * @function encode
         * @memberof pb.ZsjcBettingResultItem
         * @static
         * @param {pb.IZsjcBettingResultItem} m ZsjcBettingResultItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ZsjcBettingResultItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).int32(m.code);
            if (m.gametype != null && Object.hasOwnProperty.call(m, "gametype"))
                w.uint32(24).int32(m.gametype);
            if (m.betting != null && Object.hasOwnProperty.call(m, "betting"))
                w.uint32(32).int32(m.betting);
            if (m.money != null && Object.hasOwnProperty.call(m, "money"))
                w.uint32(40).int32(m.money);
            if (m.bonus != null && Object.hasOwnProperty.call(m, "bonus"))
                w.uint32(48).int32(m.bonus);
            if (m.tsSettling != null && Object.hasOwnProperty.call(m, "tsSettling"))
                w.uint32(56).int64(m.tsSettling);
            if (m.tsBetting != null && Object.hasOwnProperty.call(m, "tsBetting"))
                w.uint32(64).int64(m.tsBetting);
            return w;
        };

        /**
         * Decodes a ZsjcBettingResultItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ZsjcBettingResultItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ZsjcBettingResultItem} ZsjcBettingResultItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ZsjcBettingResultItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ZsjcBettingResultItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.code = r.int32();
                    break;
                case 3:
                    m.gametype = r.int32();
                    break;
                case 4:
                    m.betting = r.int32();
                    break;
                case 5:
                    m.money = r.int32();
                    break;
                case 6:
                    m.bonus = r.int32();
                    break;
                case 8:
                    m.tsBetting = r.int64();
                    break;
                case 7:
                    m.tsSettling = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ZsjcBettingResultItem;
    })();

    pb.ZsjcBettingResult = (function() {

        /**
         * Properties of a ZsjcBettingResult.
         * @memberof pb
         * @interface IZsjcBettingResult
         * @property {Array.<pb.IZsjcBettingResultItem>|null} [Items] ZsjcBettingResult Items
         */

        /**
         * Constructs a new ZsjcBettingResult.
         * @memberof pb
         * @classdesc Represents a ZsjcBettingResult.
         * @implements IZsjcBettingResult
         * @constructor
         * @param {pb.IZsjcBettingResult=} [p] Properties to set
         */
        function ZsjcBettingResult(p) {
            this.Items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ZsjcBettingResult Items.
         * @member {Array.<pb.IZsjcBettingResultItem>} Items
         * @memberof pb.ZsjcBettingResult
         * @instance
         */
        ZsjcBettingResult.prototype.Items = $util.emptyArray;

        /**
         * Encodes the specified ZsjcBettingResult message. Does not implicitly {@link pb.ZsjcBettingResult.verify|verify} messages.
         * @function encode
         * @memberof pb.ZsjcBettingResult
         * @static
         * @param {pb.IZsjcBettingResult} m ZsjcBettingResult message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ZsjcBettingResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Items != null && m.Items.length) {
                for (var i = 0; i < m.Items.length; ++i)
                    $root.pb.ZsjcBettingResultItem.encode(m.Items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ZsjcBettingResult message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ZsjcBettingResult
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ZsjcBettingResult} ZsjcBettingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ZsjcBettingResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ZsjcBettingResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Items && m.Items.length))
                        m.Items = [];
                    m.Items.push($root.pb.ZsjcBettingResultItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ZsjcBettingResult;
    })();

    pb.CmdGetWeeklyAward = (function() {

        /**
         * Properties of a CmdGetWeeklyAward.
         * @memberof pb
         * @interface ICmdGetWeeklyAward
         * @property {string|null} [code] CmdGetWeeklyAward code
         */

        /**
         * Constructs a new CmdGetWeeklyAward.
         * @memberof pb
         * @classdesc Represents a CmdGetWeeklyAward.
         * @implements ICmdGetWeeklyAward
         * @constructor
         * @param {pb.ICmdGetWeeklyAward=} [p] Properties to set
         */
        function CmdGetWeeklyAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetWeeklyAward code.
         * @member {string} code
         * @memberof pb.CmdGetWeeklyAward
         * @instance
         */
        CmdGetWeeklyAward.prototype.code = "";

        /**
         * Encodes the specified CmdGetWeeklyAward message. Does not implicitly {@link pb.CmdGetWeeklyAward.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetWeeklyAward
         * @static
         * @param {pb.ICmdGetWeeklyAward} m CmdGetWeeklyAward message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetWeeklyAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(10).string(m.code);
            return w;
        };

        /**
         * Decodes a CmdGetWeeklyAward message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetWeeklyAward
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetWeeklyAward} CmdGetWeeklyAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetWeeklyAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetWeeklyAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetWeeklyAward;
    })();

    pb.CmdGetWeeklyAwardReply = (function() {

        /**
         * Properties of a CmdGetWeeklyAwardReply.
         * @memberof pb
         * @interface ICmdGetWeeklyAwardReply
         * @property {pb.IErrorInfo|null} [result] CmdGetWeeklyAwardReply result
         * @property {pb.IGameProperties|null} [award] CmdGetWeeklyAwardReply award
         */

        /**
         * Constructs a new CmdGetWeeklyAwardReply.
         * @memberof pb
         * @classdesc Represents a CmdGetWeeklyAwardReply.
         * @implements ICmdGetWeeklyAwardReply
         * @constructor
         * @param {pb.ICmdGetWeeklyAwardReply=} [p] Properties to set
         */
        function CmdGetWeeklyAwardReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetWeeklyAwardReply result.
         * @member {pb.IErrorInfo|null|undefined} result
         * @memberof pb.CmdGetWeeklyAwardReply
         * @instance
         */
        CmdGetWeeklyAwardReply.prototype.result = null;

        /**
         * CmdGetWeeklyAwardReply award.
         * @member {pb.IGameProperties|null|undefined} award
         * @memberof pb.CmdGetWeeklyAwardReply
         * @instance
         */
        CmdGetWeeklyAwardReply.prototype.award = null;

        /**
         * Encodes the specified CmdGetWeeklyAwardReply message. Does not implicitly {@link pb.CmdGetWeeklyAwardReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetWeeklyAwardReply
         * @static
         * @param {pb.ICmdGetWeeklyAwardReply} m CmdGetWeeklyAwardReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetWeeklyAwardReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.ErrorInfo.encode(m.result, w.uint32(10).fork()).ldelim();
            if (m.award != null && Object.hasOwnProperty.call(m, "award"))
                $root.pb.GameProperties.encode(m.award, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a CmdGetWeeklyAwardReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetWeeklyAwardReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetWeeklyAwardReply} CmdGetWeeklyAwardReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetWeeklyAwardReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetWeeklyAwardReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.result = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.award = $root.pb.GameProperties.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetWeeklyAwardReply;
    })();

    pb.CmdQueryEventLog = (function() {

        /**
         * Properties of a CmdQueryEventLog.
         * @memberof pb
         * @interface ICmdQueryEventLog
         * @property {pb.EventId|null} [eventId] CmdQueryEventLog eventId
         * @property {number|null} [uid] CmdQueryEventLog uid
         * @property {number|null} [from] CmdQueryEventLog from
         * @property {number|null} [to] CmdQueryEventLog to
         * @property {number|null} [total] CmdQueryEventLog total
         */

        /**
         * Constructs a new CmdQueryEventLog.
         * @memberof pb
         * @classdesc Represents a CmdQueryEventLog.
         * @implements ICmdQueryEventLog
         * @constructor
         * @param {pb.ICmdQueryEventLog=} [p] Properties to set
         */
        function CmdQueryEventLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryEventLog eventId.
         * @member {pb.EventId} eventId
         * @memberof pb.CmdQueryEventLog
         * @instance
         */
        CmdQueryEventLog.prototype.eventId = 0;

        /**
         * CmdQueryEventLog uid.
         * @member {number} uid
         * @memberof pb.CmdQueryEventLog
         * @instance
         */
        CmdQueryEventLog.prototype.uid = 0;

        /**
         * CmdQueryEventLog from.
         * @member {number} from
         * @memberof pb.CmdQueryEventLog
         * @instance
         */
        CmdQueryEventLog.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryEventLog to.
         * @member {number} to
         * @memberof pb.CmdQueryEventLog
         * @instance
         */
        CmdQueryEventLog.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryEventLog total.
         * @member {number} total
         * @memberof pb.CmdQueryEventLog
         * @instance
         */
        CmdQueryEventLog.prototype.total = 0;

        /**
         * Encodes the specified CmdQueryEventLog message. Does not implicitly {@link pb.CmdQueryEventLog.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryEventLog
         * @static
         * @param {pb.ICmdQueryEventLog} m CmdQueryEventLog message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryEventLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.eventId != null && Object.hasOwnProperty.call(m, "eventId"))
                w.uint32(8).int32(m.eventId);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(24).int64(m.from);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(32).int64(m.to);
            if (m.total != null && Object.hasOwnProperty.call(m, "total"))
                w.uint32(40).int32(m.total);
            return w;
        };

        /**
         * Decodes a CmdQueryEventLog message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryEventLog
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryEventLog} CmdQueryEventLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryEventLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryEventLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.eventId = r.int32();
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                case 3:
                    m.from = r.int64();
                    break;
                case 4:
                    m.to = r.int64();
                    break;
                case 5:
                    m.total = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryEventLog;
    })();

    pb.EventLog = (function() {

        /**
         * Properties of an EventLog.
         * @memberof pb
         * @interface IEventLog
         * @property {pb.EventId|null} [eventId] EventLog eventId
         * @property {number|null} [uid] EventLog uid
         * @property {number|null} [ts] EventLog ts
         * @property {string|null} [log] EventLog log
         */

        /**
         * Constructs a new EventLog.
         * @memberof pb
         * @classdesc Represents an EventLog.
         * @implements IEventLog
         * @constructor
         * @param {pb.IEventLog=} [p] Properties to set
         */
        function EventLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EventLog eventId.
         * @member {pb.EventId} eventId
         * @memberof pb.EventLog
         * @instance
         */
        EventLog.prototype.eventId = 0;

        /**
         * EventLog uid.
         * @member {number} uid
         * @memberof pb.EventLog
         * @instance
         */
        EventLog.prototype.uid = 0;

        /**
         * EventLog ts.
         * @member {number} ts
         * @memberof pb.EventLog
         * @instance
         */
        EventLog.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EventLog log.
         * @member {string} log
         * @memberof pb.EventLog
         * @instance
         */
        EventLog.prototype.log = "";

        /**
         * Encodes the specified EventLog message. Does not implicitly {@link pb.EventLog.verify|verify} messages.
         * @function encode
         * @memberof pb.EventLog
         * @static
         * @param {pb.IEventLog} m EventLog message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        EventLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.eventId != null && Object.hasOwnProperty.call(m, "eventId"))
                w.uint32(8).int32(m.eventId);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(24).int64(m.ts);
            if (m.log != null && Object.hasOwnProperty.call(m, "log"))
                w.uint32(34).string(m.log);
            return w;
        };

        /**
         * Decodes an EventLog message from the specified reader or buffer.
         * @function decode
         * @memberof pb.EventLog
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.EventLog} EventLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        EventLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.EventLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.eventId = r.int32();
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                case 3:
                    m.ts = r.int64();
                    break;
                case 4:
                    m.log = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EventLog;
    })();

    pb.Events = (function() {

        /**
         * Properties of an Events.
         * @memberof pb
         * @interface IEvents
         * @property {Array.<pb.IEventLog>|null} [items] Events items
         */

        /**
         * Constructs a new Events.
         * @memberof pb
         * @classdesc Represents an Events.
         * @implements IEvents
         * @constructor
         * @param {pb.IEvents=} [p] Properties to set
         */
        function Events(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Events items.
         * @member {Array.<pb.IEventLog>} items
         * @memberof pb.Events
         * @instance
         */
        Events.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified Events message. Does not implicitly {@link pb.Events.verify|verify} messages.
         * @function encode
         * @memberof pb.Events
         * @static
         * @param {pb.IEvents} m Events message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Events.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.EventLog.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes an Events message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Events
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.Events} Events
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Events.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.Events();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.EventLog.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Events;
    })();

    pb.ItemOrder = (function() {

        /**
         * Properties of an ItemOrder.
         * @memberof pb
         * @interface IItemOrder
         * @property {number|null} [itemId] ItemOrder itemId
         * @property {number|null} [activityId] ItemOrder activityId
         * @property {number|null} [count] ItemOrder count
         * @property {pb.AppFrom|null} [from] ItemOrder from
         */

        /**
         * Constructs a new ItemOrder.
         * @memberof pb
         * @classdesc Represents an ItemOrder.
         * @implements IItemOrder
         * @constructor
         * @param {pb.IItemOrder=} [p] Properties to set
         */
        function ItemOrder(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ItemOrder itemId.
         * @member {number} itemId
         * @memberof pb.ItemOrder
         * @instance
         */
        ItemOrder.prototype.itemId = 0;

        /**
         * ItemOrder activityId.
         * @member {number} activityId
         * @memberof pb.ItemOrder
         * @instance
         */
        ItemOrder.prototype.activityId = 0;

        /**
         * ItemOrder count.
         * @member {number} count
         * @memberof pb.ItemOrder
         * @instance
         */
        ItemOrder.prototype.count = 0;

        /**
         * ItemOrder from.
         * @member {pb.AppFrom} from
         * @memberof pb.ItemOrder
         * @instance
         */
        ItemOrder.prototype.from = 0;

        /**
         * Encodes the specified ItemOrder message. Does not implicitly {@link pb.ItemOrder.verify|verify} messages.
         * @function encode
         * @memberof pb.ItemOrder
         * @static
         * @param {pb.IItemOrder} m ItemOrder message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ItemOrder.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(8).int32(m.itemId);
            if (m.activityId != null && Object.hasOwnProperty.call(m, "activityId"))
                w.uint32(16).int32(m.activityId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(24).int32(m.count);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(32).int32(m.from);
            return w;
        };

        /**
         * Decodes an ItemOrder message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ItemOrder
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ItemOrder} ItemOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ItemOrder.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ItemOrder();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.itemId = r.int32();
                    break;
                case 2:
                    m.activityId = r.int32();
                    break;
                case 3:
                    m.count = r.int32();
                    break;
                case 4:
                    m.from = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ItemOrder;
    })();

    pb.CmdShopOrderReply = (function() {

        /**
         * Properties of a CmdShopOrderReply.
         * @memberof pb
         * @interface ICmdShopOrderReply
         * @property {pb.IErrorInfo|null} [result] CmdShopOrderReply result
         * @property {number|null} [orderId] CmdShopOrderReply orderId
         * @property {string|null} [wxXml] CmdShopOrderReply wxXml
         * @property {pb.PaymentType|null} [payType] CmdShopOrderReply payType
         */

        /**
         * Constructs a new CmdShopOrderReply.
         * @memberof pb
         * @classdesc Represents a CmdShopOrderReply.
         * @implements ICmdShopOrderReply
         * @constructor
         * @param {pb.ICmdShopOrderReply=} [p] Properties to set
         */
        function CmdShopOrderReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdShopOrderReply result.
         * @member {pb.IErrorInfo|null|undefined} result
         * @memberof pb.CmdShopOrderReply
         * @instance
         */
        CmdShopOrderReply.prototype.result = null;

        /**
         * CmdShopOrderReply orderId.
         * @member {number} orderId
         * @memberof pb.CmdShopOrderReply
         * @instance
         */
        CmdShopOrderReply.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdShopOrderReply wxXml.
         * @member {string} wxXml
         * @memberof pb.CmdShopOrderReply
         * @instance
         */
        CmdShopOrderReply.prototype.wxXml = "";

        /**
         * CmdShopOrderReply payType.
         * @member {pb.PaymentType} payType
         * @memberof pb.CmdShopOrderReply
         * @instance
         */
        CmdShopOrderReply.prototype.payType = 0;

        /**
         * Encodes the specified CmdShopOrderReply message. Does not implicitly {@link pb.CmdShopOrderReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdShopOrderReply
         * @static
         * @param {pb.ICmdShopOrderReply} m CmdShopOrderReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdShopOrderReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                $root.pb.ErrorInfo.encode(m.result, w.uint32(10).fork()).ldelim();
            if (m.orderId != null && Object.hasOwnProperty.call(m, "orderId"))
                w.uint32(16).int64(m.orderId);
            if (m.wxXml != null && Object.hasOwnProperty.call(m, "wxXml"))
                w.uint32(26).string(m.wxXml);
            if (m.payType != null && Object.hasOwnProperty.call(m, "payType"))
                w.uint32(32).int32(m.payType);
            return w;
        };

        /**
         * Decodes a CmdShopOrderReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdShopOrderReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdShopOrderReply} CmdShopOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdShopOrderReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdShopOrderReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.result = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.orderId = r.int64();
                    break;
                case 3:
                    m.wxXml = r.string();
                    break;
                case 4:
                    m.payType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdShopOrderReply;
    })();

    pb.CmdShopOrderQuery = (function() {

        /**
         * Properties of a CmdShopOrderQuery.
         * @memberof pb
         * @interface ICmdShopOrderQuery
         * @property {number|null} [uid] CmdShopOrderQuery uid
         * @property {number|null} [orderId] CmdShopOrderQuery orderId
         * @property {pb.AppFrom|null} [from] CmdShopOrderQuery from
         * @property {string|null} [wxResult] CmdShopOrderQuery wxResult
         */

        /**
         * Constructs a new CmdShopOrderQuery.
         * @memberof pb
         * @classdesc Represents a CmdShopOrderQuery.
         * @implements ICmdShopOrderQuery
         * @constructor
         * @param {pb.ICmdShopOrderQuery=} [p] Properties to set
         */
        function CmdShopOrderQuery(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdShopOrderQuery uid.
         * @member {number} uid
         * @memberof pb.CmdShopOrderQuery
         * @instance
         */
        CmdShopOrderQuery.prototype.uid = 0;

        /**
         * CmdShopOrderQuery orderId.
         * @member {number} orderId
         * @memberof pb.CmdShopOrderQuery
         * @instance
         */
        CmdShopOrderQuery.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdShopOrderQuery from.
         * @member {pb.AppFrom} from
         * @memberof pb.CmdShopOrderQuery
         * @instance
         */
        CmdShopOrderQuery.prototype.from = 0;

        /**
         * CmdShopOrderQuery wxResult.
         * @member {string} wxResult
         * @memberof pb.CmdShopOrderQuery
         * @instance
         */
        CmdShopOrderQuery.prototype.wxResult = "";

        /**
         * Encodes the specified CmdShopOrderQuery message. Does not implicitly {@link pb.CmdShopOrderQuery.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdShopOrderQuery
         * @static
         * @param {pb.ICmdShopOrderQuery} m CmdShopOrderQuery message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdShopOrderQuery.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.orderId != null && Object.hasOwnProperty.call(m, "orderId"))
                w.uint32(16).int64(m.orderId);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(24).int32(m.from);
            if (m.wxResult != null && Object.hasOwnProperty.call(m, "wxResult"))
                w.uint32(34).string(m.wxResult);
            return w;
        };

        /**
         * Decodes a CmdShopOrderQuery message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdShopOrderQuery
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdShopOrderQuery} CmdShopOrderQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdShopOrderQuery.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdShopOrderQuery();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.orderId = r.int64();
                    break;
                case 3:
                    m.from = r.int32();
                    break;
                case 4:
                    m.wxResult = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdShopOrderQuery;
    })();

    pb.CmdMobileBind = (function() {

        /**
         * Properties of a CmdMobileBind.
         * @memberof pb
         * @interface ICmdMobileBind
         * @property {string|null} [mobile] CmdMobileBind mobile
         * @property {string|null} [smsCode] CmdMobileBind smsCode
         */

        /**
         * Constructs a new CmdMobileBind.
         * @memberof pb
         * @classdesc Represents a CmdMobileBind.
         * @implements ICmdMobileBind
         * @constructor
         * @param {pb.ICmdMobileBind=} [p] Properties to set
         */
        function CmdMobileBind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdMobileBind mobile.
         * @member {string} mobile
         * @memberof pb.CmdMobileBind
         * @instance
         */
        CmdMobileBind.prototype.mobile = "";

        /**
         * CmdMobileBind smsCode.
         * @member {string} smsCode
         * @memberof pb.CmdMobileBind
         * @instance
         */
        CmdMobileBind.prototype.smsCode = "";

        /**
         * Encodes the specified CmdMobileBind message. Does not implicitly {@link pb.CmdMobileBind.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdMobileBind
         * @static
         * @param {pb.ICmdMobileBind} m CmdMobileBind message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdMobileBind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mobile != null && Object.hasOwnProperty.call(m, "mobile"))
                w.uint32(10).string(m.mobile);
            if (m.smsCode != null && Object.hasOwnProperty.call(m, "smsCode"))
                w.uint32(18).string(m.smsCode);
            return w;
        };

        /**
         * Decodes a CmdMobileBind message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdMobileBind
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdMobileBind} CmdMobileBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdMobileBind.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdMobileBind();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mobile = r.string();
                    break;
                case 2:
                    m.smsCode = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdMobileBind;
    })();

    pb.ActivityItem = (function() {

        /**
         * Properties of an ActivityItem.
         * @memberof pb
         * @interface IActivityItem
         * @property {number|null} [id] ActivityItem id
         * @property {string|null} [title] ActivityItem title
         * @property {string|null} [icon] ActivityItem icon
         * @property {string|null} [image] ActivityItem image
         * @property {number|null} [from] ActivityItem from
         * @property {number|null} [to] ActivityItem to
         * @property {number|null} [itemId] ActivityItem itemId
         */

        /**
         * Constructs a new ActivityItem.
         * @memberof pb
         * @classdesc Represents an ActivityItem.
         * @implements IActivityItem
         * @constructor
         * @param {pb.IActivityItem=} [p] Properties to set
         */
        function ActivityItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ActivityItem id.
         * @member {number} id
         * @memberof pb.ActivityItem
         * @instance
         */
        ActivityItem.prototype.id = 0;

        /**
         * ActivityItem title.
         * @member {string} title
         * @memberof pb.ActivityItem
         * @instance
         */
        ActivityItem.prototype.title = "";

        /**
         * ActivityItem icon.
         * @member {string} icon
         * @memberof pb.ActivityItem
         * @instance
         */
        ActivityItem.prototype.icon = "";

        /**
         * ActivityItem image.
         * @member {string} image
         * @memberof pb.ActivityItem
         * @instance
         */
        ActivityItem.prototype.image = "";

        /**
         * ActivityItem from.
         * @member {number} from
         * @memberof pb.ActivityItem
         * @instance
         */
        ActivityItem.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ActivityItem to.
         * @member {number} to
         * @memberof pb.ActivityItem
         * @instance
         */
        ActivityItem.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ActivityItem itemId.
         * @member {number} itemId
         * @memberof pb.ActivityItem
         * @instance
         */
        ActivityItem.prototype.itemId = 0;

        /**
         * Encodes the specified ActivityItem message. Does not implicitly {@link pb.ActivityItem.verify|verify} messages.
         * @function encode
         * @memberof pb.ActivityItem
         * @static
         * @param {pb.IActivityItem} m ActivityItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ActivityItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                w.uint32(18).string(m.title);
            if (m.icon != null && Object.hasOwnProperty.call(m, "icon"))
                w.uint32(26).string(m.icon);
            if (m.image != null && Object.hasOwnProperty.call(m, "image"))
                w.uint32(34).string(m.image);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(40).int64(m.from);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(48).int64(m.to);
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(56).int32(m.itemId);
            return w;
        };

        /**
         * Decodes an ActivityItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ActivityItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ActivityItem} ActivityItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ActivityItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.title = r.string();
                    break;
                case 3:
                    m.icon = r.string();
                    break;
                case 4:
                    m.image = r.string();
                    break;
                case 5:
                    m.from = r.int64();
                    break;
                case 6:
                    m.to = r.int64();
                    break;
                case 7:
                    m.itemId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ActivityItem;
    })();

    pb.ActivityConf = (function() {

        /**
         * Properties of an ActivityConf.
         * @memberof pb
         * @interface IActivityConf
         * @property {Array.<pb.IActivityItem>|null} [items] ActivityConf items
         */

        /**
         * Constructs a new ActivityConf.
         * @memberof pb
         * @classdesc Represents an ActivityConf.
         * @implements IActivityConf
         * @constructor
         * @param {pb.IActivityConf=} [p] Properties to set
         */
        function ActivityConf(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ActivityConf items.
         * @member {Array.<pb.IActivityItem>} items
         * @memberof pb.ActivityConf
         * @instance
         */
        ActivityConf.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ActivityConf message. Does not implicitly {@link pb.ActivityConf.verify|verify} messages.
         * @function encode
         * @memberof pb.ActivityConf
         * @static
         * @param {pb.IActivityConf} m ActivityConf message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ActivityConf.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.ActivityItem.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes an ActivityConf message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ActivityConf
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ActivityConf} ActivityConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityConf.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ActivityConf();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.ActivityItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ActivityConf;
    })();

    pb.ActivityLogs = (function() {

        /**
         * Properties of an ActivityLogs.
         * @memberof pb
         * @interface IActivityLogs
         * @property {Array.<number>|null} [ids] ActivityLogs ids
         */

        /**
         * Constructs a new ActivityLogs.
         * @memberof pb
         * @classdesc Represents an ActivityLogs.
         * @implements IActivityLogs
         * @constructor
         * @param {pb.IActivityLogs=} [p] Properties to set
         */
        function ActivityLogs(p) {
            this.ids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ActivityLogs ids.
         * @member {Array.<number>} ids
         * @memberof pb.ActivityLogs
         * @instance
         */
        ActivityLogs.prototype.ids = $util.emptyArray;

        /**
         * Encodes the specified ActivityLogs message. Does not implicitly {@link pb.ActivityLogs.verify|verify} messages.
         * @function encode
         * @memberof pb.ActivityLogs
         * @static
         * @param {pb.IActivityLogs} m ActivityLogs message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ActivityLogs.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ids != null && m.ids.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.ids.length; ++i)
                    w.int32(m.ids[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes an ActivityLogs message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ActivityLogs
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ActivityLogs} ActivityLogs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityLogs.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ActivityLogs();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.ids && m.ids.length))
                        m.ids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ids.push(r.int32());
                    } else
                        m.ids.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ActivityLogs;
    })();

    pb.CmdGoldAwardPrompt = (function() {

        /**
         * Properties of a CmdGoldAwardPrompt.
         * @memberof pb
         * @interface ICmdGoldAwardPrompt
         * @property {string|null} [text] CmdGoldAwardPrompt text
         * @property {number|null} [gold] CmdGoldAwardPrompt gold
         */

        /**
         * Constructs a new CmdGoldAwardPrompt.
         * @memberof pb
         * @classdesc Represents a CmdGoldAwardPrompt.
         * @implements ICmdGoldAwardPrompt
         * @constructor
         * @param {pb.ICmdGoldAwardPrompt=} [p] Properties to set
         */
        function CmdGoldAwardPrompt(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGoldAwardPrompt text.
         * @member {string} text
         * @memberof pb.CmdGoldAwardPrompt
         * @instance
         */
        CmdGoldAwardPrompt.prototype.text = "";

        /**
         * CmdGoldAwardPrompt gold.
         * @member {number} gold
         * @memberof pb.CmdGoldAwardPrompt
         * @instance
         */
        CmdGoldAwardPrompt.prototype.gold = 0;

        /**
         * Encodes the specified CmdGoldAwardPrompt message. Does not implicitly {@link pb.CmdGoldAwardPrompt.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGoldAwardPrompt
         * @static
         * @param {pb.ICmdGoldAwardPrompt} m CmdGoldAwardPrompt message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGoldAwardPrompt.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                w.uint32(10).string(m.text);
            if (m.gold != null && Object.hasOwnProperty.call(m, "gold"))
                w.uint32(16).int32(m.gold);
            return w;
        };

        /**
         * Decodes a CmdGoldAwardPrompt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGoldAwardPrompt
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGoldAwardPrompt} CmdGoldAwardPrompt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGoldAwardPrompt.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGoldAwardPrompt();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.text = r.string();
                    break;
                case 2:
                    m.gold = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGoldAwardPrompt;
    })();

    pb.CmdExchange = (function() {

        /**
         * Properties of a CmdExchange.
         * @memberof pb
         * @interface ICmdExchange
         * @property {pb.ExchangeType|null} [type] CmdExchange type
         * @property {number|null} [amount] CmdExchange amount
         * @property {number|null} [uid] CmdExchange uid
         */

        /**
         * Constructs a new CmdExchange.
         * @memberof pb
         * @classdesc Represents a CmdExchange.
         * @implements ICmdExchange
         * @constructor
         * @param {pb.ICmdExchange=} [p] Properties to set
         */
        function CmdExchange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdExchange type.
         * @member {pb.ExchangeType} type
         * @memberof pb.CmdExchange
         * @instance
         */
        CmdExchange.prototype.type = 0;

        /**
         * CmdExchange amount.
         * @member {number} amount
         * @memberof pb.CmdExchange
         * @instance
         */
        CmdExchange.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdExchange uid.
         * @member {number} uid
         * @memberof pb.CmdExchange
         * @instance
         */
        CmdExchange.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdExchange message. Does not implicitly {@link pb.CmdExchange.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdExchange
         * @static
         * @param {pb.ICmdExchange} m CmdExchange message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdExchange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(16).int64(m.amount);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(24).int64(m.uid);
            return w;
        };

        /**
         * Decodes a CmdExchange message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdExchange
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdExchange} CmdExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdExchange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdExchange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.type = r.int32();
                    break;
                case 2:
                    m.amount = r.int64();
                    break;
                case 3:
                    m.uid = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdExchange;
    })();

    /**
     * KType enum.
     * @name pb.KType
     * @enum {number}
     * @property {number} KType_NULL=0 KType_NULL value
     * @property {number} Real=1 Real value
     * @property {number} Min=2 Min value
     * @property {number} MinToday=3 MinToday value
     * @property {number} Min5=4 Min5 value
     * @property {number} Min15=5 Min15 value
     * @property {number} Min30=6 Min30 value
     * @property {number} Min60=7 Min60 value
     * @property {number} Day=10 Day value
     * @property {number} Day7=11 Day7 value
     * @property {number} Day30=12 Day30 value
     */
    pb.KType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "KType_NULL"] = 0;
        values[valuesById[1] = "Real"] = 1;
        values[valuesById[2] = "Min"] = 2;
        values[valuesById[3] = "MinToday"] = 3;
        values[valuesById[4] = "Min5"] = 4;
        values[valuesById[5] = "Min15"] = 5;
        values[valuesById[6] = "Min30"] = 6;
        values[valuesById[7] = "Min60"] = 7;
        values[valuesById[10] = "Day"] = 10;
        values[valuesById[11] = "Day7"] = 11;
        values[valuesById[12] = "Day30"] = 12;
        return values;
    })();

    /**
     * KStyle enum.
     * @name pb.KStyle
     * @enum {number}
     * @property {number} Random=0 Random value
     * @property {number} Wave=1 Wave value
     * @property {number} Up=2 Up value
     * @property {number} Down=3 Down value
     */
    pb.KStyle = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Random"] = 0;
        values[valuesById[1] = "Wave"] = 1;
        values[valuesById[2] = "Up"] = 2;
        values[valuesById[3] = "Down"] = 3;
        return values;
    })();

    pb.CmdQuoteQuery = (function() {

        /**
         * Properties of a CmdQuoteQuery.
         * @memberof pb
         * @interface ICmdQuoteQuery
         * @property {pb.KType|null} [ktype] CmdQuoteQuery ktype
         * @property {number|null} [code] CmdQuoteQuery code
         * @property {number|null} [from] CmdQuoteQuery from
         * @property {number|null} [total] CmdQuoteQuery total
         * @property {number|null} [to] CmdQuoteQuery to
         * @property {pb.KStyle|null} [kstyle] CmdQuoteQuery kstyle
         * @property {number|null} [reserve] CmdQuoteQuery reserve
         */

        /**
         * Constructs a new CmdQuoteQuery.
         * @memberof pb
         * @classdesc Represents a CmdQuoteQuery.
         * @implements ICmdQuoteQuery
         * @constructor
         * @param {pb.ICmdQuoteQuery=} [p] Properties to set
         */
        function CmdQuoteQuery(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQuoteQuery ktype.
         * @member {pb.KType} ktype
         * @memberof pb.CmdQuoteQuery
         * @instance
         */
        CmdQuoteQuery.prototype.ktype = 0;

        /**
         * CmdQuoteQuery code.
         * @member {number} code
         * @memberof pb.CmdQuoteQuery
         * @instance
         */
        CmdQuoteQuery.prototype.code = 0;

        /**
         * CmdQuoteQuery from.
         * @member {number} from
         * @memberof pb.CmdQuoteQuery
         * @instance
         */
        CmdQuoteQuery.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQuoteQuery total.
         * @member {number} total
         * @memberof pb.CmdQuoteQuery
         * @instance
         */
        CmdQuoteQuery.prototype.total = 0;

        /**
         * CmdQuoteQuery to.
         * @member {number} to
         * @memberof pb.CmdQuoteQuery
         * @instance
         */
        CmdQuoteQuery.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQuoteQuery kstyle.
         * @member {pb.KStyle} kstyle
         * @memberof pb.CmdQuoteQuery
         * @instance
         */
        CmdQuoteQuery.prototype.kstyle = 0;

        /**
         * CmdQuoteQuery reserve.
         * @member {number} reserve
         * @memberof pb.CmdQuoteQuery
         * @instance
         */
        CmdQuoteQuery.prototype.reserve = 0;

        /**
         * Encodes the specified CmdQuoteQuery message. Does not implicitly {@link pb.CmdQuoteQuery.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQuoteQuery
         * @static
         * @param {pb.ICmdQuoteQuery} m CmdQuoteQuery message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQuoteQuery.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ktype != null && Object.hasOwnProperty.call(m, "ktype"))
                w.uint32(8).int32(m.ktype);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).uint32(m.code);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(24).int64(m.from);
            if (m.total != null && Object.hasOwnProperty.call(m, "total"))
                w.uint32(32).int32(m.total);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(40).int64(m.to);
            if (m.kstyle != null && Object.hasOwnProperty.call(m, "kstyle"))
                w.uint32(48).int32(m.kstyle);
            if (m.reserve != null && Object.hasOwnProperty.call(m, "reserve"))
                w.uint32(56).int32(m.reserve);
            return w;
        };

        /**
         * Decodes a CmdQuoteQuery message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQuoteQuery
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQuoteQuery} CmdQuoteQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQuoteQuery.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQuoteQuery();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ktype = r.int32();
                    break;
                case 2:
                    m.code = r.uint32();
                    break;
                case 3:
                    m.from = r.int64();
                    break;
                case 4:
                    m.total = r.int32();
                    break;
                case 5:
                    m.to = r.int64();
                    break;
                case 6:
                    m.kstyle = r.int32();
                    break;
                case 7:
                    m.reserve = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQuoteQuery;
    })();

    pb.QuoteItem = (function() {

        /**
         * Properties of a QuoteItem.
         * @memberof pb
         * @interface IQuoteItem
         * @property {number|null} [code] QuoteItem code
         * @property {pb.KType|null} [ktype] QuoteItem ktype
         * @property {number|null} [timestamp] QuoteItem timestamp
         * @property {number|null} [price] QuoteItem price
         * @property {number|null} [volume] QuoteItem volume
         * @property {number|null} [amount] QuoteItem amount
         * @property {number|null} [count] QuoteItem count
         * @property {number|null} [open] QuoteItem open
         * @property {number|null} [close] QuoteItem close
         * @property {number|null} [high] QuoteItem high
         * @property {number|null} [low] QuoteItem low
         * @property {Array.<number>|null} [ask5Price] QuoteItem ask5Price
         * @property {Array.<number>|null} [ask5Volume] QuoteItem ask5Volume
         * @property {Array.<number>|null} [bid5Price] QuoteItem bid5Price
         * @property {Array.<number>|null} [bid5Volume] QuoteItem bid5Volume
         */

        /**
         * Constructs a new QuoteItem.
         * @memberof pb
         * @classdesc Represents a QuoteItem.
         * @implements IQuoteItem
         * @constructor
         * @param {pb.IQuoteItem=} [p] Properties to set
         */
        function QuoteItem(p) {
            this.ask5Price = [];
            this.ask5Volume = [];
            this.bid5Price = [];
            this.bid5Volume = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * QuoteItem code.
         * @member {number} code
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.code = 0;

        /**
         * QuoteItem ktype.
         * @member {pb.KType} ktype
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.ktype = 0;

        /**
         * QuoteItem timestamp.
         * @member {number} timestamp
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * QuoteItem price.
         * @member {number} price
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.price = 0;

        /**
         * QuoteItem volume.
         * @member {number} volume
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * QuoteItem amount.
         * @member {number} amount
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.amount = 0;

        /**
         * QuoteItem count.
         * @member {number} count
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * QuoteItem open.
         * @member {number} open
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.open = 0;

        /**
         * QuoteItem close.
         * @member {number} close
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.close = 0;

        /**
         * QuoteItem high.
         * @member {number} high
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.high = 0;

        /**
         * QuoteItem low.
         * @member {number} low
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.low = 0;

        /**
         * QuoteItem ask5Price.
         * @member {Array.<number>} ask5Price
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.ask5Price = $util.emptyArray;

        /**
         * QuoteItem ask5Volume.
         * @member {Array.<number>} ask5Volume
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.ask5Volume = $util.emptyArray;

        /**
         * QuoteItem bid5Price.
         * @member {Array.<number>} bid5Price
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.bid5Price = $util.emptyArray;

        /**
         * QuoteItem bid5Volume.
         * @member {Array.<number>} bid5Volume
         * @memberof pb.QuoteItem
         * @instance
         */
        QuoteItem.prototype.bid5Volume = $util.emptyArray;

        /**
         * Encodes the specified QuoteItem message. Does not implicitly {@link pb.QuoteItem.verify|verify} messages.
         * @function encode
         * @memberof pb.QuoteItem
         * @static
         * @param {pb.IQuoteItem} m QuoteItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        QuoteItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint32(m.code);
            if (m.ktype != null && Object.hasOwnProperty.call(m, "ktype"))
                w.uint32(16).int32(m.ktype);
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(24).int64(m.timestamp);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(33).double(m.price);
            if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                w.uint32(40).uint64(m.volume);
            if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                w.uint32(49).double(m.amount);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(56).uint64(m.count);
            if (m.open != null && Object.hasOwnProperty.call(m, "open"))
                w.uint32(65).double(m.open);
            if (m.close != null && Object.hasOwnProperty.call(m, "close"))
                w.uint32(73).double(m.close);
            if (m.high != null && Object.hasOwnProperty.call(m, "high"))
                w.uint32(81).double(m.high);
            if (m.low != null && Object.hasOwnProperty.call(m, "low"))
                w.uint32(89).double(m.low);
            if (m.ask5Price != null && m.ask5Price.length) {
                w.uint32(98).fork();
                for (var i = 0; i < m.ask5Price.length; ++i)
                    w.double(m.ask5Price[i]);
                w.ldelim();
            }
            if (m.ask5Volume != null && m.ask5Volume.length) {
                w.uint32(106).fork();
                for (var i = 0; i < m.ask5Volume.length; ++i)
                    w.uint64(m.ask5Volume[i]);
                w.ldelim();
            }
            if (m.bid5Price != null && m.bid5Price.length) {
                w.uint32(114).fork();
                for (var i = 0; i < m.bid5Price.length; ++i)
                    w.double(m.bid5Price[i]);
                w.ldelim();
            }
            if (m.bid5Volume != null && m.bid5Volume.length) {
                w.uint32(122).fork();
                for (var i = 0; i < m.bid5Volume.length; ++i)
                    w.uint64(m.bid5Volume[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a QuoteItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.QuoteItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.QuoteItem} QuoteItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        QuoteItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.QuoteItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.uint32();
                    break;
                case 2:
                    m.ktype = r.int32();
                    break;
                case 3:
                    m.timestamp = r.int64();
                    break;
                case 4:
                    m.price = r.double();
                    break;
                case 5:
                    m.volume = r.uint64();
                    break;
                case 6:
                    m.amount = r.double();
                    break;
                case 7:
                    m.count = r.uint64();
                    break;
                case 8:
                    m.open = r.double();
                    break;
                case 9:
                    m.close = r.double();
                    break;
                case 10:
                    m.high = r.double();
                    break;
                case 11:
                    m.low = r.double();
                    break;
                case 12:
                    if (!(m.ask5Price && m.ask5Price.length))
                        m.ask5Price = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ask5Price.push(r.double());
                    } else
                        m.ask5Price.push(r.double());
                    break;
                case 13:
                    if (!(m.ask5Volume && m.ask5Volume.length))
                        m.ask5Volume = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ask5Volume.push(r.uint64());
                    } else
                        m.ask5Volume.push(r.uint64());
                    break;
                case 14:
                    if (!(m.bid5Price && m.bid5Price.length))
                        m.bid5Price = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.bid5Price.push(r.double());
                    } else
                        m.bid5Price.push(r.double());
                    break;
                case 15:
                    if (!(m.bid5Volume && m.bid5Volume.length))
                        m.bid5Volume = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.bid5Volume.push(r.uint64());
                    } else
                        m.bid5Volume.push(r.uint64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return QuoteItem;
    })();

    pb.Quotes = (function() {

        /**
         * Properties of a Quotes.
         * @memberof pb
         * @interface IQuotes
         * @property {Array.<pb.IQuoteItem>|null} [items] Quotes items
         */

        /**
         * Constructs a new Quotes.
         * @memberof pb
         * @classdesc Represents a Quotes.
         * @implements IQuotes
         * @constructor
         * @param {pb.IQuotes=} [p] Properties to set
         */
        function Quotes(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Quotes items.
         * @member {Array.<pb.IQuoteItem>} items
         * @memberof pb.Quotes
         * @instance
         */
        Quotes.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified Quotes message. Does not implicitly {@link pb.Quotes.verify|verify} messages.
         * @function encode
         * @memberof pb.Quotes
         * @static
         * @param {pb.IQuotes} m Quotes message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Quotes.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.QuoteItem.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a Quotes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Quotes
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.Quotes} Quotes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Quotes.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.Quotes();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.QuoteItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Quotes;
    })();

    pb.QuoteSubscribeItem = (function() {

        /**
         * Properties of a QuoteSubscribeItem.
         * @memberof pb
         * @interface IQuoteSubscribeItem
         * @property {string|null} [code] QuoteSubscribeItem code
         * @property {boolean|null} [flag] QuoteSubscribeItem flag
         */

        /**
         * Constructs a new QuoteSubscribeItem.
         * @memberof pb
         * @classdesc Represents a QuoteSubscribeItem.
         * @implements IQuoteSubscribeItem
         * @constructor
         * @param {pb.IQuoteSubscribeItem=} [p] Properties to set
         */
        function QuoteSubscribeItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * QuoteSubscribeItem code.
         * @member {string} code
         * @memberof pb.QuoteSubscribeItem
         * @instance
         */
        QuoteSubscribeItem.prototype.code = "";

        /**
         * QuoteSubscribeItem flag.
         * @member {boolean} flag
         * @memberof pb.QuoteSubscribeItem
         * @instance
         */
        QuoteSubscribeItem.prototype.flag = false;

        /**
         * Encodes the specified QuoteSubscribeItem message. Does not implicitly {@link pb.QuoteSubscribeItem.verify|verify} messages.
         * @function encode
         * @memberof pb.QuoteSubscribeItem
         * @static
         * @param {pb.IQuoteSubscribeItem} m QuoteSubscribeItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        QuoteSubscribeItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(10).string(m.code);
            if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
                w.uint32(16).bool(m.flag);
            return w;
        };

        /**
         * Decodes a QuoteSubscribeItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.QuoteSubscribeItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.QuoteSubscribeItem} QuoteSubscribeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        QuoteSubscribeItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.QuoteSubscribeItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.string();
                    break;
                case 2:
                    m.flag = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return QuoteSubscribeItem;
    })();

    pb.CmdQuoteSubscribe = (function() {

        /**
         * Properties of a CmdQuoteSubscribe.
         * @memberof pb
         * @interface ICmdQuoteSubscribe
         * @property {Array.<pb.IQuoteSubscribeItem>|null} [items] CmdQuoteSubscribe items
         */

        /**
         * Constructs a new CmdQuoteSubscribe.
         * @memberof pb
         * @classdesc Represents a CmdQuoteSubscribe.
         * @implements ICmdQuoteSubscribe
         * @constructor
         * @param {pb.ICmdQuoteSubscribe=} [p] Properties to set
         */
        function CmdQuoteSubscribe(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQuoteSubscribe items.
         * @member {Array.<pb.IQuoteSubscribeItem>} items
         * @memberof pb.CmdQuoteSubscribe
         * @instance
         */
        CmdQuoteSubscribe.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified CmdQuoteSubscribe message. Does not implicitly {@link pb.CmdQuoteSubscribe.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQuoteSubscribe
         * @static
         * @param {pb.ICmdQuoteSubscribe} m CmdQuoteSubscribe message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQuoteSubscribe.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.QuoteSubscribeItem.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CmdQuoteSubscribe message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQuoteSubscribe
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQuoteSubscribe} CmdQuoteSubscribe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQuoteSubscribe.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQuoteSubscribe();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.QuoteSubscribeItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQuoteSubscribe;
    })();

    pb.CmdTradingDay = (function() {

        /**
         * Properties of a CmdTradingDay.
         * @memberof pb
         * @interface ICmdTradingDay
         * @property {number|null} [date] CmdTradingDay date
         * @property {number|null} [n] CmdTradingDay n
         */

        /**
         * Constructs a new CmdTradingDay.
         * @memberof pb
         * @classdesc Represents a CmdTradingDay.
         * @implements ICmdTradingDay
         * @constructor
         * @param {pb.ICmdTradingDay=} [p] Properties to set
         */
        function CmdTradingDay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdTradingDay date.
         * @member {number} date
         * @memberof pb.CmdTradingDay
         * @instance
         */
        CmdTradingDay.prototype.date = 0;

        /**
         * CmdTradingDay n.
         * @member {number} n
         * @memberof pb.CmdTradingDay
         * @instance
         */
        CmdTradingDay.prototype.n = 0;

        /**
         * Encodes the specified CmdTradingDay message. Does not implicitly {@link pb.CmdTradingDay.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdTradingDay
         * @static
         * @param {pb.ICmdTradingDay} m CmdTradingDay message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdTradingDay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.date != null && Object.hasOwnProperty.call(m, "date"))
                w.uint32(8).int32(m.date);
            if (m.n != null && Object.hasOwnProperty.call(m, "n"))
                w.uint32(16).int32(m.n);
            return w;
        };

        /**
         * Decodes a CmdTradingDay message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdTradingDay
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdTradingDay} CmdTradingDay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdTradingDay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdTradingDay();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.date = r.int32();
                    break;
                case 2:
                    m.n = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdTradingDay;
    })();

    pb.CmdTradingDayReply = (function() {

        /**
         * Properties of a CmdTradingDayReply.
         * @memberof pb
         * @interface ICmdTradingDayReply
         * @property {boolean|null} [isTradingDay] CmdTradingDayReply isTradingDay
         * @property {Array.<number>|null} [days] CmdTradingDayReply days
         */

        /**
         * Constructs a new CmdTradingDayReply.
         * @memberof pb
         * @classdesc Represents a CmdTradingDayReply.
         * @implements ICmdTradingDayReply
         * @constructor
         * @param {pb.ICmdTradingDayReply=} [p] Properties to set
         */
        function CmdTradingDayReply(p) {
            this.days = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdTradingDayReply isTradingDay.
         * @member {boolean} isTradingDay
         * @memberof pb.CmdTradingDayReply
         * @instance
         */
        CmdTradingDayReply.prototype.isTradingDay = false;

        /**
         * CmdTradingDayReply days.
         * @member {Array.<number>} days
         * @memberof pb.CmdTradingDayReply
         * @instance
         */
        CmdTradingDayReply.prototype.days = $util.emptyArray;

        /**
         * Encodes the specified CmdTradingDayReply message. Does not implicitly {@link pb.CmdTradingDayReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdTradingDayReply
         * @static
         * @param {pb.ICmdTradingDayReply} m CmdTradingDayReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdTradingDayReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isTradingDay != null && Object.hasOwnProperty.call(m, "isTradingDay"))
                w.uint32(8).bool(m.isTradingDay);
            if (m.days != null && m.days.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.days.length; ++i)
                    w.int32(m.days[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a CmdTradingDayReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdTradingDayReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdTradingDayReply} CmdTradingDayReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdTradingDayReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdTradingDayReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.isTradingDay = r.bool();
                    break;
                case 2:
                    if (!(m.days && m.days.length))
                        m.days = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.days.push(r.int32());
                    } else
                        m.days.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdTradingDayReply;
    })();

    pb.CmdRecommendStock = (function() {

        /**
         * Properties of a CmdRecommendStock.
         * @memberof pb
         * @interface ICmdRecommendStock
         * @property {number|null} [channelId] CmdRecommendStock channelId
         * @property {number|null} [from] CmdRecommendStock from
         * @property {number|null} [total] CmdRecommendStock total
         * @property {number|null} [to] CmdRecommendStock to
         */

        /**
         * Constructs a new CmdRecommendStock.
         * @memberof pb
         * @classdesc Represents a CmdRecommendStock.
         * @implements ICmdRecommendStock
         * @constructor
         * @param {pb.ICmdRecommendStock=} [p] Properties to set
         */
        function CmdRecommendStock(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRecommendStock channelId.
         * @member {number} channelId
         * @memberof pb.CmdRecommendStock
         * @instance
         */
        CmdRecommendStock.prototype.channelId = 0;

        /**
         * CmdRecommendStock from.
         * @member {number} from
         * @memberof pb.CmdRecommendStock
         * @instance
         */
        CmdRecommendStock.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdRecommendStock total.
         * @member {number} total
         * @memberof pb.CmdRecommendStock
         * @instance
         */
        CmdRecommendStock.prototype.total = 0;

        /**
         * CmdRecommendStock to.
         * @member {number} to
         * @memberof pb.CmdRecommendStock
         * @instance
         */
        CmdRecommendStock.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdRecommendStock message. Does not implicitly {@link pb.CmdRecommendStock.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRecommendStock
         * @static
         * @param {pb.ICmdRecommendStock} m CmdRecommendStock message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRecommendStock.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.channelId != null && Object.hasOwnProperty.call(m, "channelId"))
                w.uint32(8).int32(m.channelId);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(16).int64(m.from);
            if (m.total != null && Object.hasOwnProperty.call(m, "total"))
                w.uint32(24).int32(m.total);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(32).int64(m.to);
            return w;
        };

        /**
         * Decodes a CmdRecommendStock message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRecommendStock
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRecommendStock} CmdRecommendStock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRecommendStock.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRecommendStock();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.channelId = r.int32();
                    break;
                case 2:
                    m.from = r.int64();
                    break;
                case 3:
                    m.total = r.int32();
                    break;
                case 4:
                    m.to = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRecommendStock;
    })();

    pb.RecommendItem = (function() {

        /**
         * Properties of a RecommendItem.
         * @memberof pb
         * @interface IRecommendItem
         * @property {number|null} [code] RecommendItem code
         * @property {string|null} [price] RecommendItem price
         */

        /**
         * Constructs a new RecommendItem.
         * @memberof pb
         * @classdesc Represents a RecommendItem.
         * @implements IRecommendItem
         * @constructor
         * @param {pb.IRecommendItem=} [p] Properties to set
         */
        function RecommendItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecommendItem code.
         * @member {number} code
         * @memberof pb.RecommendItem
         * @instance
         */
        RecommendItem.prototype.code = 0;

        /**
         * RecommendItem price.
         * @member {string} price
         * @memberof pb.RecommendItem
         * @instance
         */
        RecommendItem.prototype.price = "";

        /**
         * Encodes the specified RecommendItem message. Does not implicitly {@link pb.RecommendItem.verify|verify} messages.
         * @function encode
         * @memberof pb.RecommendItem
         * @static
         * @param {pb.IRecommendItem} m RecommendItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RecommendItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint32(m.code);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(18).string(m.price);
            return w;
        };

        /**
         * Decodes a RecommendItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RecommendItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RecommendItem} RecommendItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RecommendItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RecommendItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.uint32();
                    break;
                case 2:
                    m.price = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecommendItem;
    })();

    pb.RecommendStockItem = (function() {

        /**
         * Properties of a RecommendStockItem.
         * @memberof pb
         * @interface IRecommendStockItem
         * @property {number|null} [channelId] RecommendStockItem channelId
         * @property {number|null} [ts] RecommendStockItem ts
         * @property {Array.<pb.IRecommendItem>|null} [list] RecommendStockItem list
         */

        /**
         * Constructs a new RecommendStockItem.
         * @memberof pb
         * @classdesc Represents a RecommendStockItem.
         * @implements IRecommendStockItem
         * @constructor
         * @param {pb.IRecommendStockItem=} [p] Properties to set
         */
        function RecommendStockItem(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecommendStockItem channelId.
         * @member {number} channelId
         * @memberof pb.RecommendStockItem
         * @instance
         */
        RecommendStockItem.prototype.channelId = 0;

        /**
         * RecommendStockItem ts.
         * @member {number} ts
         * @memberof pb.RecommendStockItem
         * @instance
         */
        RecommendStockItem.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecommendStockItem list.
         * @member {Array.<pb.IRecommendItem>} list
         * @memberof pb.RecommendStockItem
         * @instance
         */
        RecommendStockItem.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified RecommendStockItem message. Does not implicitly {@link pb.RecommendStockItem.verify|verify} messages.
         * @function encode
         * @memberof pb.RecommendStockItem
         * @static
         * @param {pb.IRecommendStockItem} m RecommendStockItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RecommendStockItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.channelId != null && Object.hasOwnProperty.call(m, "channelId"))
                w.uint32(8).int32(m.channelId);
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(16).int64(m.ts);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.pb.RecommendItem.encode(m.list[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RecommendStockItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RecommendStockItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RecommendStockItem} RecommendStockItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RecommendStockItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RecommendStockItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.channelId = r.int32();
                    break;
                case 2:
                    m.ts = r.int64();
                    break;
                case 3:
                    if (!(m.list && m.list.length))
                        m.list = [];
                    m.list.push($root.pb.RecommendItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RecommendStockItem;
    })();

    pb.CmdRecommendStockReply = (function() {

        /**
         * Properties of a CmdRecommendStockReply.
         * @memberof pb
         * @interface ICmdRecommendStockReply
         * @property {Array.<pb.IRecommendStockItem>|null} [items] CmdRecommendStockReply items
         * @property {number|null} [ts] CmdRecommendStockReply ts
         */

        /**
         * Constructs a new CmdRecommendStockReply.
         * @memberof pb
         * @classdesc Represents a CmdRecommendStockReply.
         * @implements ICmdRecommendStockReply
         * @constructor
         * @param {pb.ICmdRecommendStockReply=} [p] Properties to set
         */
        function CmdRecommendStockReply(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRecommendStockReply items.
         * @member {Array.<pb.IRecommendStockItem>} items
         * @memberof pb.CmdRecommendStockReply
         * @instance
         */
        CmdRecommendStockReply.prototype.items = $util.emptyArray;

        /**
         * CmdRecommendStockReply ts.
         * @member {number} ts
         * @memberof pb.CmdRecommendStockReply
         * @instance
         */
        CmdRecommendStockReply.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdRecommendStockReply message. Does not implicitly {@link pb.CmdRecommendStockReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRecommendStockReply
         * @static
         * @param {pb.ICmdRecommendStockReply} m CmdRecommendStockReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRecommendStockReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.RecommendStockItem.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(16).int64(m.ts);
            return w;
        };

        /**
         * Decodes a CmdRecommendStockReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRecommendStockReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRecommendStockReply} CmdRecommendStockReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRecommendStockReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRecommendStockReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.RecommendStockItem.decode(r, r.uint32()));
                    break;
                case 2:
                    m.ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRecommendStockReply;
    })();

    pb.CmdQuoteQueryFuture = (function() {

        /**
         * Properties of a CmdQuoteQueryFuture.
         * @memberof pb
         * @interface ICmdQuoteQueryFuture
         * @property {pb.KType|null} [ktype] CmdQuoteQueryFuture ktype
         * @property {number|null} [code] CmdQuoteQueryFuture code
         * @property {number|null} [from] CmdQuoteQueryFuture from
         * @property {number|null} [total] CmdQuoteQueryFuture total
         * @property {number|null} [to] CmdQuoteQueryFuture to
         * @property {number|null} [reserve] CmdQuoteQueryFuture reserve
         */

        /**
         * Constructs a new CmdQuoteQueryFuture.
         * @memberof pb
         * @classdesc Represents a CmdQuoteQueryFuture.
         * @implements ICmdQuoteQueryFuture
         * @constructor
         * @param {pb.ICmdQuoteQueryFuture=} [p] Properties to set
         */
        function CmdQuoteQueryFuture(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQuoteQueryFuture ktype.
         * @member {pb.KType} ktype
         * @memberof pb.CmdQuoteQueryFuture
         * @instance
         */
        CmdQuoteQueryFuture.prototype.ktype = 0;

        /**
         * CmdQuoteQueryFuture code.
         * @member {number} code
         * @memberof pb.CmdQuoteQueryFuture
         * @instance
         */
        CmdQuoteQueryFuture.prototype.code = 0;

        /**
         * CmdQuoteQueryFuture from.
         * @member {number} from
         * @memberof pb.CmdQuoteQueryFuture
         * @instance
         */
        CmdQuoteQueryFuture.prototype.from = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQuoteQueryFuture total.
         * @member {number} total
         * @memberof pb.CmdQuoteQueryFuture
         * @instance
         */
        CmdQuoteQueryFuture.prototype.total = 0;

        /**
         * CmdQuoteQueryFuture to.
         * @member {number} to
         * @memberof pb.CmdQuoteQueryFuture
         * @instance
         */
        CmdQuoteQueryFuture.prototype.to = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQuoteQueryFuture reserve.
         * @member {number} reserve
         * @memberof pb.CmdQuoteQueryFuture
         * @instance
         */
        CmdQuoteQueryFuture.prototype.reserve = 0;

        /**
         * Encodes the specified CmdQuoteQueryFuture message. Does not implicitly {@link pb.CmdQuoteQueryFuture.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQuoteQueryFuture
         * @static
         * @param {pb.ICmdQuoteQueryFuture} m CmdQuoteQueryFuture message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQuoteQueryFuture.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ktype != null && Object.hasOwnProperty.call(m, "ktype"))
                w.uint32(8).int32(m.ktype);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(16).uint32(m.code);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(24).int64(m.from);
            if (m.total != null && Object.hasOwnProperty.call(m, "total"))
                w.uint32(32).int32(m.total);
            if (m.to != null && Object.hasOwnProperty.call(m, "to"))
                w.uint32(40).int64(m.to);
            if (m.reserve != null && Object.hasOwnProperty.call(m, "reserve"))
                w.uint32(48).int32(m.reserve);
            return w;
        };

        /**
         * Decodes a CmdQuoteQueryFuture message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQuoteQueryFuture
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQuoteQueryFuture} CmdQuoteQueryFuture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQuoteQueryFuture.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQuoteQueryFuture();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ktype = r.int32();
                    break;
                case 2:
                    m.code = r.uint32();
                    break;
                case 3:
                    m.from = r.int64();
                    break;
                case 4:
                    m.total = r.int32();
                    break;
                case 5:
                    m.to = r.int64();
                    break;
                case 6:
                    m.reserve = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQuoteQueryFuture;
    })();

    pb.QuoteItemFuture = (function() {

        /**
         * Properties of a QuoteItemFuture.
         * @memberof pb
         * @interface IQuoteItemFuture
         * @property {number|null} [code] QuoteItemFuture code
         * @property {pb.KType|null} [ktype] QuoteItemFuture ktype
         * @property {number|null} [timestamp] QuoteItemFuture timestamp
         * @property {number|null} [open] QuoteItemFuture open
         * @property {number|null} [close] QuoteItemFuture close
         * @property {number|null} [high] QuoteItemFuture high
         * @property {number|null} [low] QuoteItemFuture low
         * @property {number|null} [volume] QuoteItemFuture volume
         * @property {number|null} [cclHold] QuoteItemFuture cclHold
         */

        /**
         * Constructs a new QuoteItemFuture.
         * @memberof pb
         * @classdesc Represents a QuoteItemFuture.
         * @implements IQuoteItemFuture
         * @constructor
         * @param {pb.IQuoteItemFuture=} [p] Properties to set
         */
        function QuoteItemFuture(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * QuoteItemFuture code.
         * @member {number} code
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.code = 0;

        /**
         * QuoteItemFuture ktype.
         * @member {pb.KType} ktype
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.ktype = 0;

        /**
         * QuoteItemFuture timestamp.
         * @member {number} timestamp
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * QuoteItemFuture open.
         * @member {number} open
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.open = 0;

        /**
         * QuoteItemFuture close.
         * @member {number} close
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.close = 0;

        /**
         * QuoteItemFuture high.
         * @member {number} high
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.high = 0;

        /**
         * QuoteItemFuture low.
         * @member {number} low
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.low = 0;

        /**
         * QuoteItemFuture volume.
         * @member {number} volume
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * QuoteItemFuture cclHold.
         * @member {number} cclHold
         * @memberof pb.QuoteItemFuture
         * @instance
         */
        QuoteItemFuture.prototype.cclHold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Encodes the specified QuoteItemFuture message. Does not implicitly {@link pb.QuoteItemFuture.verify|verify} messages.
         * @function encode
         * @memberof pb.QuoteItemFuture
         * @static
         * @param {pb.IQuoteItemFuture} m QuoteItemFuture message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        QuoteItemFuture.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint32(m.code);
            if (m.ktype != null && Object.hasOwnProperty.call(m, "ktype"))
                w.uint32(16).int32(m.ktype);
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(24).int64(m.timestamp);
            if (m.open != null && Object.hasOwnProperty.call(m, "open"))
                w.uint32(33).double(m.open);
            if (m.close != null && Object.hasOwnProperty.call(m, "close"))
                w.uint32(41).double(m.close);
            if (m.high != null && Object.hasOwnProperty.call(m, "high"))
                w.uint32(49).double(m.high);
            if (m.low != null && Object.hasOwnProperty.call(m, "low"))
                w.uint32(57).double(m.low);
            if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                w.uint32(64).uint64(m.volume);
            if (m.cclHold != null && Object.hasOwnProperty.call(m, "cclHold"))
                w.uint32(72).uint64(m.cclHold);
            return w;
        };

        /**
         * Decodes a QuoteItemFuture message from the specified reader or buffer.
         * @function decode
         * @memberof pb.QuoteItemFuture
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.QuoteItemFuture} QuoteItemFuture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        QuoteItemFuture.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.QuoteItemFuture();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.uint32();
                    break;
                case 2:
                    m.ktype = r.int32();
                    break;
                case 3:
                    m.timestamp = r.int64();
                    break;
                case 4:
                    m.open = r.double();
                    break;
                case 5:
                    m.close = r.double();
                    break;
                case 6:
                    m.high = r.double();
                    break;
                case 7:
                    m.low = r.double();
                    break;
                case 8:
                    m.volume = r.uint64();
                    break;
                case 9:
                    m.cclHold = r.uint64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return QuoteItemFuture;
    })();

    pb.QuotesFuture = (function() {

        /**
         * Properties of a QuotesFuture.
         * @memberof pb
         * @interface IQuotesFuture
         * @property {Array.<pb.IQuoteItemFuture>|null} [items] QuotesFuture items
         */

        /**
         * Constructs a new QuotesFuture.
         * @memberof pb
         * @classdesc Represents a QuotesFuture.
         * @implements IQuotesFuture
         * @constructor
         * @param {pb.IQuotesFuture=} [p] Properties to set
         */
        function QuotesFuture(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * QuotesFuture items.
         * @member {Array.<pb.IQuoteItemFuture>} items
         * @memberof pb.QuotesFuture
         * @instance
         */
        QuotesFuture.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified QuotesFuture message. Does not implicitly {@link pb.QuotesFuture.verify|verify} messages.
         * @function encode
         * @memberof pb.QuotesFuture
         * @static
         * @param {pb.IQuotesFuture} m QuotesFuture message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        QuotesFuture.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.QuoteItemFuture.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a QuotesFuture message from the specified reader or buffer.
         * @function decode
         * @memberof pb.QuotesFuture
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.QuotesFuture} QuotesFuture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        QuotesFuture.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.QuotesFuture();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.QuoteItemFuture.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return QuotesFuture;
    })();

    pb.CmdQueryAiStockList = (function() {

        /**
         * Properties of a CmdQueryAiStockList.
         * @memberof pb
         * @interface ICmdQueryAiStockList
         * @property {number|null} [rankFrom] CmdQueryAiStockList rankFrom
         * @property {number|null} [tsUpdateFrom] CmdQueryAiStockList tsUpdateFrom
         * @property {number|null} [total] CmdQueryAiStockList total
         * @property {Array.<number>|null} [codes] CmdQueryAiStockList codes
         */

        /**
         * Constructs a new CmdQueryAiStockList.
         * @memberof pb
         * @classdesc Represents a CmdQueryAiStockList.
         * @implements ICmdQueryAiStockList
         * @constructor
         * @param {pb.ICmdQueryAiStockList=} [p] Properties to set
         */
        function CmdQueryAiStockList(p) {
            this.codes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryAiStockList rankFrom.
         * @member {number} rankFrom
         * @memberof pb.CmdQueryAiStockList
         * @instance
         */
        CmdQueryAiStockList.prototype.rankFrom = 0;

        /**
         * CmdQueryAiStockList tsUpdateFrom.
         * @member {number} tsUpdateFrom
         * @memberof pb.CmdQueryAiStockList
         * @instance
         */
        CmdQueryAiStockList.prototype.tsUpdateFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CmdQueryAiStockList total.
         * @member {number} total
         * @memberof pb.CmdQueryAiStockList
         * @instance
         */
        CmdQueryAiStockList.prototype.total = 0;

        /**
         * CmdQueryAiStockList codes.
         * @member {Array.<number>} codes
         * @memberof pb.CmdQueryAiStockList
         * @instance
         */
        CmdQueryAiStockList.prototype.codes = $util.emptyArray;

        /**
         * Encodes the specified CmdQueryAiStockList message. Does not implicitly {@link pb.CmdQueryAiStockList.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryAiStockList
         * @static
         * @param {pb.ICmdQueryAiStockList} m CmdQueryAiStockList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryAiStockList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rankFrom != null && Object.hasOwnProperty.call(m, "rankFrom"))
                w.uint32(8).int32(m.rankFrom);
            if (m.tsUpdateFrom != null && Object.hasOwnProperty.call(m, "tsUpdateFrom"))
                w.uint32(16).int64(m.tsUpdateFrom);
            if (m.total != null && Object.hasOwnProperty.call(m, "total"))
                w.uint32(24).int32(m.total);
            if (m.codes != null && m.codes.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.codes.length; ++i)
                    w.int32(m.codes[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a CmdQueryAiStockList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryAiStockList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryAiStockList} CmdQueryAiStockList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryAiStockList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryAiStockList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.rankFrom = r.int32();
                    break;
                case 2:
                    m.tsUpdateFrom = r.int64();
                    break;
                case 3:
                    m.total = r.int32();
                    break;
                case 4:
                    if (!(m.codes && m.codes.length))
                        m.codes = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.codes.push(r.int32());
                    } else
                        m.codes.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryAiStockList;
    })();

    pb.AiStockItem = (function() {

        /**
         * Properties of an AiStockItem.
         * @memberof pb
         * @interface IAiStockItem
         * @property {number|null} [code] AiStockItem code
         * @property {string|null} [name] AiStockItem name
         * @property {string|null} [industry] AiStockItem industry
         * @property {number|null} [tsUpdated] AiStockItem tsUpdated
         * @property {number|null} [profitRanking] AiStockItem profitRanking
         * @property {number|null} [profitRate] AiStockItem profitRate
         * @property {number|null} [lastAskPrice] AiStockItem lastAskPrice
         * @property {number|null} [lastBidPrice] AiStockItem lastBidPrice
         * @property {number|null} [curAskPrice] AiStockItem curAskPrice
         * @property {number|null} [todaySignal] AiStockItem todaySignal
         * @property {number|null} [curAskTs] AiStockItem curAskTs
         * @property {number|null} [lastBidTs] AiStockItem lastBidTs
         * @property {number|null} [lastAskTs] AiStockItem lastAskTs
         */

        /**
         * Constructs a new AiStockItem.
         * @memberof pb
         * @classdesc Represents an AiStockItem.
         * @implements IAiStockItem
         * @constructor
         * @param {pb.IAiStockItem=} [p] Properties to set
         */
        function AiStockItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * AiStockItem code.
         * @member {number} code
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.code = 0;

        /**
         * AiStockItem name.
         * @member {string} name
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.name = "";

        /**
         * AiStockItem industry.
         * @member {string} industry
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.industry = "";

        /**
         * AiStockItem tsUpdated.
         * @member {number} tsUpdated
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.tsUpdated = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AiStockItem profitRanking.
         * @member {number} profitRanking
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.profitRanking = 0;

        /**
         * AiStockItem profitRate.
         * @member {number} profitRate
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.profitRate = 0;

        /**
         * AiStockItem lastAskPrice.
         * @member {number} lastAskPrice
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.lastAskPrice = 0;

        /**
         * AiStockItem lastBidPrice.
         * @member {number} lastBidPrice
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.lastBidPrice = 0;

        /**
         * AiStockItem curAskPrice.
         * @member {number} curAskPrice
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.curAskPrice = 0;

        /**
         * AiStockItem todaySignal.
         * @member {number} todaySignal
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.todaySignal = 0;

        /**
         * AiStockItem curAskTs.
         * @member {number} curAskTs
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.curAskTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AiStockItem lastBidTs.
         * @member {number} lastBidTs
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.lastBidTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AiStockItem lastAskTs.
         * @member {number} lastAskTs
         * @memberof pb.AiStockItem
         * @instance
         */
        AiStockItem.prototype.lastAskTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified AiStockItem message. Does not implicitly {@link pb.AiStockItem.verify|verify} messages.
         * @function encode
         * @memberof pb.AiStockItem
         * @static
         * @param {pb.IAiStockItem} m AiStockItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        AiStockItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint32(m.code);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.industry != null && Object.hasOwnProperty.call(m, "industry"))
                w.uint32(26).string(m.industry);
            if (m.tsUpdated != null && Object.hasOwnProperty.call(m, "tsUpdated"))
                w.uint32(32).int64(m.tsUpdated);
            if (m.profitRanking != null && Object.hasOwnProperty.call(m, "profitRanking"))
                w.uint32(40).int32(m.profitRanking);
            if (m.profitRate != null && Object.hasOwnProperty.call(m, "profitRate"))
                w.uint32(49).double(m.profitRate);
            if (m.lastAskPrice != null && Object.hasOwnProperty.call(m, "lastAskPrice"))
                w.uint32(57).double(m.lastAskPrice);
            if (m.lastBidPrice != null && Object.hasOwnProperty.call(m, "lastBidPrice"))
                w.uint32(65).double(m.lastBidPrice);
            if (m.curAskPrice != null && Object.hasOwnProperty.call(m, "curAskPrice"))
                w.uint32(73).double(m.curAskPrice);
            if (m.todaySignal != null && Object.hasOwnProperty.call(m, "todaySignal"))
                w.uint32(81).double(m.todaySignal);
            if (m.curAskTs != null && Object.hasOwnProperty.call(m, "curAskTs"))
                w.uint32(88).int64(m.curAskTs);
            if (m.lastBidTs != null && Object.hasOwnProperty.call(m, "lastBidTs"))
                w.uint32(96).int64(m.lastBidTs);
            if (m.lastAskTs != null && Object.hasOwnProperty.call(m, "lastAskTs"))
                w.uint32(104).int64(m.lastAskTs);
            return w;
        };

        /**
         * Decodes an AiStockItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AiStockItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.AiStockItem} AiStockItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        AiStockItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.AiStockItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.uint32();
                    break;
                case 2:
                    m.name = r.string();
                    break;
                case 3:
                    m.industry = r.string();
                    break;
                case 4:
                    m.tsUpdated = r.int64();
                    break;
                case 5:
                    m.profitRanking = r.int32();
                    break;
                case 6:
                    m.profitRate = r.double();
                    break;
                case 7:
                    m.lastAskPrice = r.double();
                    break;
                case 8:
                    m.lastBidPrice = r.double();
                    break;
                case 9:
                    m.curAskPrice = r.double();
                    break;
                case 10:
                    m.todaySignal = r.double();
                    break;
                case 11:
                    m.curAskTs = r.int64();
                    break;
                case 12:
                    m.lastBidTs = r.int64();
                    break;
                case 13:
                    m.lastAskTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return AiStockItem;
    })();

    pb.CmdQueryAiStockListReply = (function() {

        /**
         * Properties of a CmdQueryAiStockListReply.
         * @memberof pb
         * @interface ICmdQueryAiStockListReply
         * @property {Array.<pb.IAiStockItem>|null} [items] CmdQueryAiStockListReply items
         */

        /**
         * Constructs a new CmdQueryAiStockListReply.
         * @memberof pb
         * @classdesc Represents a CmdQueryAiStockListReply.
         * @implements ICmdQueryAiStockListReply
         * @constructor
         * @param {pb.ICmdQueryAiStockListReply=} [p] Properties to set
         */
        function CmdQueryAiStockListReply(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryAiStockListReply items.
         * @member {Array.<pb.IAiStockItem>} items
         * @memberof pb.CmdQueryAiStockListReply
         * @instance
         */
        CmdQueryAiStockListReply.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified CmdQueryAiStockListReply message. Does not implicitly {@link pb.CmdQueryAiStockListReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryAiStockListReply
         * @static
         * @param {pb.ICmdQueryAiStockListReply} m CmdQueryAiStockListReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryAiStockListReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.AiStockItem.encode(m.items[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CmdQueryAiStockListReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryAiStockListReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryAiStockListReply} CmdQueryAiStockListReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryAiStockListReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryAiStockListReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.AiStockItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryAiStockListReply;
    })();

    pb.CmdQueryAiSignal = (function() {

        /**
         * Properties of a CmdQueryAiSignal.
         * @memberof pb
         * @interface ICmdQueryAiSignal
         * @property {number|null} [code] CmdQueryAiSignal code
         */

        /**
         * Constructs a new CmdQueryAiSignal.
         * @memberof pb
         * @classdesc Represents a CmdQueryAiSignal.
         * @implements ICmdQueryAiSignal
         * @constructor
         * @param {pb.ICmdQueryAiSignal=} [p] Properties to set
         */
        function CmdQueryAiSignal(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryAiSignal code.
         * @member {number} code
         * @memberof pb.CmdQueryAiSignal
         * @instance
         */
        CmdQueryAiSignal.prototype.code = 0;

        /**
         * Encodes the specified CmdQueryAiSignal message. Does not implicitly {@link pb.CmdQueryAiSignal.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryAiSignal
         * @static
         * @param {pb.ICmdQueryAiSignal} m CmdQueryAiSignal message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryAiSignal.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint32(m.code);
            return w;
        };

        /**
         * Decodes a CmdQueryAiSignal message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryAiSignal
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryAiSignal} CmdQueryAiSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryAiSignal.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryAiSignal();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryAiSignal;
    })();

    pb.AiSignalItem = (function() {

        /**
         * Properties of an AiSignalItem.
         * @memberof pb
         * @interface IAiSignalItem
         * @property {number|null} [ts] AiSignalItem ts
         * @property {number|null} [flag] AiSignalItem flag
         * @property {number|null} [price] AiSignalItem price
         * @property {number|null} [ma10] AiSignalItem ma10
         * @property {number|null} [ma30] AiSignalItem ma30
         */

        /**
         * Constructs a new AiSignalItem.
         * @memberof pb
         * @classdesc Represents an AiSignalItem.
         * @implements IAiSignalItem
         * @constructor
         * @param {pb.IAiSignalItem=} [p] Properties to set
         */
        function AiSignalItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * AiSignalItem ts.
         * @member {number} ts
         * @memberof pb.AiSignalItem
         * @instance
         */
        AiSignalItem.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AiSignalItem flag.
         * @member {number} flag
         * @memberof pb.AiSignalItem
         * @instance
         */
        AiSignalItem.prototype.flag = 0;

        /**
         * AiSignalItem price.
         * @member {number} price
         * @memberof pb.AiSignalItem
         * @instance
         */
        AiSignalItem.prototype.price = 0;

        /**
         * AiSignalItem ma10.
         * @member {number} ma10
         * @memberof pb.AiSignalItem
         * @instance
         */
        AiSignalItem.prototype.ma10 = 0;

        /**
         * AiSignalItem ma30.
         * @member {number} ma30
         * @memberof pb.AiSignalItem
         * @instance
         */
        AiSignalItem.prototype.ma30 = 0;

        /**
         * Encodes the specified AiSignalItem message. Does not implicitly {@link pb.AiSignalItem.verify|verify} messages.
         * @function encode
         * @memberof pb.AiSignalItem
         * @static
         * @param {pb.IAiSignalItem} m AiSignalItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        AiSignalItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ts != null && Object.hasOwnProperty.call(m, "ts"))
                w.uint32(8).int64(m.ts);
            if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
                w.uint32(17).double(m.flag);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(25).double(m.price);
            if (m.ma10 != null && Object.hasOwnProperty.call(m, "ma10"))
                w.uint32(33).double(m.ma10);
            if (m.ma30 != null && Object.hasOwnProperty.call(m, "ma30"))
                w.uint32(41).double(m.ma30);
            return w;
        };

        /**
         * Decodes an AiSignalItem message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AiSignalItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.AiSignalItem} AiSignalItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        AiSignalItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.AiSignalItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ts = r.int64();
                    break;
                case 2:
                    m.flag = r.double();
                    break;
                case 3:
                    m.price = r.double();
                    break;
                case 4:
                    m.ma10 = r.double();
                    break;
                case 5:
                    m.ma30 = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return AiSignalItem;
    })();

    pb.CmdQueryAiSignalReply = (function() {

        /**
         * Properties of a CmdQueryAiSignalReply.
         * @memberof pb
         * @interface ICmdQueryAiSignalReply
         * @property {number|null} [code] CmdQueryAiSignalReply code
         * @property {string|null} [industry] CmdQueryAiSignalReply industry
         * @property {Array.<pb.IAiSignalItem>|null} [signals] CmdQueryAiSignalReply signals
         */

        /**
         * Constructs a new CmdQueryAiSignalReply.
         * @memberof pb
         * @classdesc Represents a CmdQueryAiSignalReply.
         * @implements ICmdQueryAiSignalReply
         * @constructor
         * @param {pb.ICmdQueryAiSignalReply=} [p] Properties to set
         */
        function CmdQueryAiSignalReply(p) {
            this.signals = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdQueryAiSignalReply code.
         * @member {number} code
         * @memberof pb.CmdQueryAiSignalReply
         * @instance
         */
        CmdQueryAiSignalReply.prototype.code = 0;

        /**
         * CmdQueryAiSignalReply industry.
         * @member {string} industry
         * @memberof pb.CmdQueryAiSignalReply
         * @instance
         */
        CmdQueryAiSignalReply.prototype.industry = "";

        /**
         * CmdQueryAiSignalReply signals.
         * @member {Array.<pb.IAiSignalItem>} signals
         * @memberof pb.CmdQueryAiSignalReply
         * @instance
         */
        CmdQueryAiSignalReply.prototype.signals = $util.emptyArray;

        /**
         * Encodes the specified CmdQueryAiSignalReply message. Does not implicitly {@link pb.CmdQueryAiSignalReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdQueryAiSignalReply
         * @static
         * @param {pb.ICmdQueryAiSignalReply} m CmdQueryAiSignalReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdQueryAiSignalReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint32(m.code);
            if (m.industry != null && Object.hasOwnProperty.call(m, "industry"))
                w.uint32(18).string(m.industry);
            if (m.signals != null && m.signals.length) {
                for (var i = 0; i < m.signals.length; ++i)
                    $root.pb.AiSignalItem.encode(m.signals[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a CmdQueryAiSignalReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdQueryAiSignalReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdQueryAiSignalReply} CmdQueryAiSignalReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdQueryAiSignalReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdQueryAiSignalReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.uint32();
                    break;
                case 2:
                    m.industry = r.string();
                    break;
                case 3:
                    if (!(m.signals && m.signals.length))
                        m.signals = [];
                    m.signals.push($root.pb.AiSignalItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdQueryAiSignalReply;
    })();

    pb.QuotesService = (function() {

        /**
         * Constructs a new QuotesService service.
         * @memberof pb
         * @classdesc Represents a QuotesService
         * @extends protobuf.rpc.Service
         * @constructor
         * @param {protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function QuotesService(rpcImpl, requestDelimited, responseDelimited) {
            protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (QuotesService.prototype = Object.create(protobuf.rpc.Service.prototype)).constructor = QuotesService;

        /**
         * Callback as used by {@link pb.QuotesService#quotesQuery}.
         * @memberof pb.QuotesService
         * @typedef QuotesQueryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.Quotes} [response] Quotes
         */

        /**
         * Calls QuotesQuery.
         * @function quotesQuery
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQuoteQuery} request CmdQuoteQuery message or plain object
         * @param {pb.QuotesService.QuotesQueryCallback} callback Node-style callback called with the error, if any, and Quotes
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(QuotesService.prototype.quotesQuery = function quotesQuery(request, callback) {
            return this.rpcCall(quotesQuery, $root.pb.CmdQuoteQuery, $root.pb.Quotes, request, callback);
        }, "name", { value: "QuotesQuery" });

        /**
         * Calls QuotesQuery.
         * @function quotesQuery
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQuoteQuery} request CmdQuoteQuery message or plain object
         * @returns {Promise<pb.Quotes>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.QuotesService#quotesSubscribe}.
         * @memberof pb.QuotesService
         * @typedef QuotesSubscribeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls QuotesSubscribe.
         * @function quotesSubscribe
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQuoteSubscribe} request CmdQuoteSubscribe message or plain object
         * @param {pb.QuotesService.QuotesSubscribeCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(QuotesService.prototype.quotesSubscribe = function quotesSubscribe(request, callback) {
            return this.rpcCall(quotesSubscribe, $root.pb.CmdQuoteSubscribe, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "QuotesSubscribe" });

        /**
         * Calls QuotesSubscribe.
         * @function quotesSubscribe
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQuoteSubscribe} request CmdQuoteSubscribe message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.QuotesService#isTradingDay}.
         * @memberof pb.QuotesService
         * @typedef IsTradingDayCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdTradingDayReply} [response] CmdTradingDayReply
         */

        /**
         * Calls IsTradingDay.
         * @function isTradingDay
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdTradingDay} request CmdTradingDay message or plain object
         * @param {pb.QuotesService.IsTradingDayCallback} callback Node-style callback called with the error, if any, and CmdTradingDayReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(QuotesService.prototype.isTradingDay = function isTradingDay(request, callback) {
            return this.rpcCall(isTradingDay, $root.pb.CmdTradingDay, $root.pb.CmdTradingDayReply, request, callback);
        }, "name", { value: "IsTradingDay" });

        /**
         * Calls IsTradingDay.
         * @function isTradingDay
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdTradingDay} request CmdTradingDay message or plain object
         * @returns {Promise<pb.CmdTradingDayReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.QuotesService#queryTradingDay}.
         * @memberof pb.QuotesService
         * @typedef QueryTradingDayCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdTradingDayReply} [response] CmdTradingDayReply
         */

        /**
         * Calls QueryTradingDay.
         * @function queryTradingDay
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdTradingDay} request CmdTradingDay message or plain object
         * @param {pb.QuotesService.QueryTradingDayCallback} callback Node-style callback called with the error, if any, and CmdTradingDayReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(QuotesService.prototype.queryTradingDay = function queryTradingDay(request, callback) {
            return this.rpcCall(queryTradingDay, $root.pb.CmdTradingDay, $root.pb.CmdTradingDayReply, request, callback);
        }, "name", { value: "QueryTradingDay" });

        /**
         * Calls QueryTradingDay.
         * @function queryTradingDay
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdTradingDay} request CmdTradingDay message or plain object
         * @returns {Promise<pb.CmdTradingDayReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.QuotesService#queryAiStockList}.
         * @memberof pb.QuotesService
         * @typedef QueryAiStockListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdQueryAiStockListReply} [response] CmdQueryAiStockListReply
         */

        /**
         * Calls QueryAiStockList.
         * @function queryAiStockList
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQueryAiStockList} request CmdQueryAiStockList message or plain object
         * @param {pb.QuotesService.QueryAiStockListCallback} callback Node-style callback called with the error, if any, and CmdQueryAiStockListReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(QuotesService.prototype.queryAiStockList = function queryAiStockList(request, callback) {
            return this.rpcCall(queryAiStockList, $root.pb.CmdQueryAiStockList, $root.pb.CmdQueryAiStockListReply, request, callback);
        }, "name", { value: "QueryAiStockList" });

        /**
         * Calls QueryAiStockList.
         * @function queryAiStockList
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQueryAiStockList} request CmdQueryAiStockList message or plain object
         * @returns {Promise<pb.CmdQueryAiStockListReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.QuotesService#queryAiSignal}.
         * @memberof pb.QuotesService
         * @typedef QueryAiSignalCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdQueryAiSignalReply} [response] CmdQueryAiSignalReply
         */

        /**
         * Calls QueryAiSignal.
         * @function queryAiSignal
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQueryAiSignal} request CmdQueryAiSignal message or plain object
         * @param {pb.QuotesService.QueryAiSignalCallback} callback Node-style callback called with the error, if any, and CmdQueryAiSignalReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(QuotesService.prototype.queryAiSignal = function queryAiSignal(request, callback) {
            return this.rpcCall(queryAiSignal, $root.pb.CmdQueryAiSignal, $root.pb.CmdQueryAiSignalReply, request, callback);
        }, "name", { value: "QueryAiSignal" });

        /**
         * Calls QueryAiSignal.
         * @function queryAiSignal
         * @memberof pb.QuotesService
         * @instance
         * @param {pb.ICmdQueryAiSignal} request CmdQueryAiSignal message or plain object
         * @returns {Promise<pb.CmdQueryAiSignalReply>} Promise
         * @variation 2
         */

        return QuotesService;
    })();

    pb.QuotesFutureService = (function() {

        /**
         * Constructs a new QuotesFutureService service.
         * @memberof pb
         * @classdesc Represents a QuotesFutureService
         * @extends protobuf.rpc.Service
         * @constructor
         * @param {protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function QuotesFutureService(rpcImpl, requestDelimited, responseDelimited) {
            protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (QuotesFutureService.prototype = Object.create(protobuf.rpc.Service.prototype)).constructor = QuotesFutureService;

        /**
         * Callback as used by {@link pb.QuotesFutureService#quotesQuery}.
         * @memberof pb.QuotesFutureService
         * @typedef QuotesQueryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.QuotesFuture} [response] QuotesFuture
         */

        /**
         * Calls QuotesQuery.
         * @function quotesQuery
         * @memberof pb.QuotesFutureService
         * @instance
         * @param {pb.ICmdQuoteQueryFuture} request CmdQuoteQueryFuture message or plain object
         * @param {pb.QuotesFutureService.QuotesQueryCallback} callback Node-style callback called with the error, if any, and QuotesFuture
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(QuotesFutureService.prototype.quotesQuery = function quotesQuery(request, callback) {
            return this.rpcCall(quotesQuery, $root.pb.CmdQuoteQueryFuture, $root.pb.QuotesFuture, request, callback);
        }, "name", { value: "QuotesQuery" });

        /**
         * Calls QuotesQuery.
         * @function quotesQuery
         * @memberof pb.QuotesFutureService
         * @instance
         * @param {pb.ICmdQuoteQueryFuture} request CmdQuoteQueryFuture message or plain object
         * @returns {Promise<pb.QuotesFuture>} Promise
         * @variation 2
         */

        return QuotesFutureService;
    })();

    /**
     * Platform enum.
     * @name pb.Platform
     * @enum {number}
     * @property {number} Platform_Null=0 Platform_Null value
     * @property {number} Platform_Andriod=1 Platform_Andriod value
     * @property {number} Platform_Apple=2 Platform_Apple value
     * @property {number} Platform_WeChatMinProgram=3 Platform_WeChatMinProgram value
     */
    pb.Platform = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Platform_Null"] = 0;
        values[valuesById[1] = "Platform_Andriod"] = 1;
        values[valuesById[2] = "Platform_Apple"] = 2;
        values[valuesById[3] = "Platform_WeChatMinProgram"] = 3;
        return values;
    })();

    /**
     * AppFrom enum.
     * @name pb.AppFrom
     * @enum {number}
     * @property {number} Ios_000=0 Ios_000 value
     * @property {number} Android_001=1 Android_001 value
     * @property {number} Android_201=201 Android_201 value
     * @property {number} Android_204=204 Android_204 value
     * @property {number} Android_205=205 Android_205 value
     * @property {number} Android_206=206 Android_206 value
     * @property {number} Android_208=208 Android_208 value
     * @property {number} Android_209=209 Android_209 value
     * @property {number} Android_210=210 Android_210 value
     * @property {number} Android_211=211 Android_211 value
     * @property {number} Android_212=212 Android_212 value
     * @property {number} Android_301=301 Android_301 value
     * @property {number} Android_302=302 Android_302 value
     * @property {number} Android_601=601 Android_601 value
     * @property {number} Android_1000=1000 Android_1000 value
     * @property {number} Android_1204=1204 Android_1204 value
     * @property {number} Android_1205=1205 Android_1205 value
     * @property {number} Android_1208=1208 Android_1208 value
     * @property {number} Android_1212=1212 Android_1212 value
     * @property {number} WebsiteAndriod=4999 WebsiteAndriod value
     * @property {number} WebsiteIos=6666 WebsiteIos value
     * @property {number} IosAppleStore=6667 IosAppleStore value
     * @property {number} Ipad=6668 Ipad value
     * @property {number} WeChatMinProgram=8888 WeChatMinProgram value
     * @property {number} Website3th=9999 Website3th value
     * @property {number} Test=10000 Test value
     */
    pb.AppFrom = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Ios_000"] = 0;
        values[valuesById[1] = "Android_001"] = 1;
        values[valuesById[201] = "Android_201"] = 201;
        values[valuesById[204] = "Android_204"] = 204;
        values[valuesById[205] = "Android_205"] = 205;
        values[valuesById[206] = "Android_206"] = 206;
        values[valuesById[208] = "Android_208"] = 208;
        values[valuesById[209] = "Android_209"] = 209;
        values[valuesById[210] = "Android_210"] = 210;
        values[valuesById[211] = "Android_211"] = 211;
        values[valuesById[212] = "Android_212"] = 212;
        values[valuesById[301] = "Android_301"] = 301;
        values[valuesById[302] = "Android_302"] = 302;
        values[valuesById[601] = "Android_601"] = 601;
        values[valuesById[1000] = "Android_1000"] = 1000;
        values[valuesById[1204] = "Android_1204"] = 1204;
        values[valuesById[1205] = "Android_1205"] = 1205;
        values[valuesById[1208] = "Android_1208"] = 1208;
        values[valuesById[1212] = "Android_1212"] = 1212;
        values[valuesById[4999] = "WebsiteAndriod"] = 4999;
        values[valuesById[6666] = "WebsiteIos"] = 6666;
        values[valuesById[6667] = "IosAppleStore"] = 6667;
        values[valuesById[6668] = "Ipad"] = 6668;
        values[valuesById[8888] = "WeChatMinProgram"] = 8888;
        values[valuesById[9999] = "Website3th"] = 9999;
        values[valuesById[10000] = "Test"] = 10000;
        return values;
    })();

    /**
     * LoginType enum.
     * @name pb.LoginType
     * @enum {number}
     * @property {number} LoginType_NULL=0 LoginType_NULL value
     * @property {number} MobilePhoneId=1 MobilePhoneId value
     * @property {number} WeChat=2 WeChat value
     * @property {number} QQ=3 QQ value
     * @property {number} WeChat_MiniProg=4 WeChat_MiniProg value
     * @property {number} AppTest=98 AppTest value
     * @property {number} WebTest=99 WebTest value
     */
    pb.LoginType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LoginType_NULL"] = 0;
        values[valuesById[1] = "MobilePhoneId"] = 1;
        values[valuesById[2] = "WeChat"] = 2;
        values[valuesById[3] = "QQ"] = 3;
        values[valuesById[4] = "WeChat_MiniProg"] = 4;
        values[valuesById[98] = "AppTest"] = 98;
        values[valuesById[99] = "WebTest"] = 99;
        return values;
    })();

    /**
     * AdPosition enum.
     * @name pb.AdPosition
     * @enum {number}
     * @property {number} AdPosition_NULL=0 AdPosition_NULL value
     * @property {number} AdPosition_Startup=1 AdPosition_Startup value
     * @property {number} AdPosition_Main=2 AdPosition_Main value
     * @property {number} AdPosition_Exit=3 AdPosition_Exit value
     * @property {number} AdPosition_Plugin=4 AdPosition_Plugin value
     * @property {number} AdPosition_CgdsList=5 AdPosition_CgdsList value
     * @property {number} AdPosition_AiStockList=6 AdPosition_AiStockList value
     * @property {number} AdPosition_Qihuo=7 AdPosition_Qihuo value
     * @property {number} AdPosition_DailyAward=8 AdPosition_DailyAward value
     * @property {number} AdPosition_7Award=9 AdPosition_7Award value
     * @property {number} AdPosition_Dxxl=10 AdPosition_Dxxl value
     * @property {number} AdPosition_Qhxl=11 AdPosition_Qhxl value
     * @property {number} AdPosition_Tjdxl=12 AdPosition_Tjdxl value
     * @property {number} AdPosition_Broker=13 AdPosition_Broker value
     * @property {number} AdPosition_Cg=14 AdPosition_Cg value
     */
    pb.AdPosition = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AdPosition_NULL"] = 0;
        values[valuesById[1] = "AdPosition_Startup"] = 1;
        values[valuesById[2] = "AdPosition_Main"] = 2;
        values[valuesById[3] = "AdPosition_Exit"] = 3;
        values[valuesById[4] = "AdPosition_Plugin"] = 4;
        values[valuesById[5] = "AdPosition_CgdsList"] = 5;
        values[valuesById[6] = "AdPosition_AiStockList"] = 6;
        values[valuesById[7] = "AdPosition_Qihuo"] = 7;
        values[valuesById[8] = "AdPosition_DailyAward"] = 8;
        values[valuesById[9] = "AdPosition_7Award"] = 9;
        values[valuesById[10] = "AdPosition_Dxxl"] = 10;
        values[valuesById[11] = "AdPosition_Qhxl"] = 11;
        values[valuesById[12] = "AdPosition_Tjdxl"] = 12;
        values[valuesById[13] = "AdPosition_Broker"] = 13;
        values[valuesById[14] = "AdPosition_Cg"] = 14;
        return values;
    })();

    pb.AdClicked = (function() {

        /**
         * Properties of an AdClicked.
         * @memberof pb
         * @interface IAdClicked
         * @property {number|null} [id] AdClicked id
         * @property {number|null} [pos] AdClicked pos
         * @property {string|null} [url] AdClicked url
         * @property {string|null} [title] AdClicked title
         * @property {number|null} [uid] AdClicked uid
         * @property {pb.AppFrom|null} [from] AdClicked from
         * @property {number|null} [gold] AdClicked gold
         * @property {number|null} [diamond] AdClicked diamond
         * @property {number|null} [coupon] AdClicked coupon
         */

        /**
         * Constructs a new AdClicked.
         * @memberof pb
         * @classdesc Represents an AdClicked.
         * @implements IAdClicked
         * @constructor
         * @param {pb.IAdClicked=} [p] Properties to set
         */
        function AdClicked(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * AdClicked id.
         * @member {number} id
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.id = 0;

        /**
         * AdClicked pos.
         * @member {number} pos
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.pos = 0;

        /**
         * AdClicked url.
         * @member {string} url
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.url = "";

        /**
         * AdClicked title.
         * @member {string} title
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.title = "";

        /**
         * AdClicked uid.
         * @member {number} uid
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.uid = 0;

        /**
         * AdClicked from.
         * @member {pb.AppFrom} from
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.from = 0;

        /**
         * AdClicked gold.
         * @member {number} gold
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.gold = 0;

        /**
         * AdClicked diamond.
         * @member {number} diamond
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.diamond = 0;

        /**
         * AdClicked coupon.
         * @member {number} coupon
         * @memberof pb.AdClicked
         * @instance
         */
        AdClicked.prototype.coupon = 0;

        /**
         * Encodes the specified AdClicked message. Does not implicitly {@link pb.AdClicked.verify|verify} messages.
         * @function encode
         * @memberof pb.AdClicked
         * @static
         * @param {pb.IAdClicked} m AdClicked message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        AdClicked.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
                w.uint32(16).int32(m.pos);
            if (m.url != null && Object.hasOwnProperty.call(m, "url"))
                w.uint32(26).string(m.url);
            if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                w.uint32(34).string(m.title);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(40).int32(m.uid);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(48).int32(m.from);
            if (m.gold != null && Object.hasOwnProperty.call(m, "gold"))
                w.uint32(56).int32(m.gold);
            if (m.diamond != null && Object.hasOwnProperty.call(m, "diamond"))
                w.uint32(64).int32(m.diamond);
            if (m.coupon != null && Object.hasOwnProperty.call(m, "coupon"))
                w.uint32(72).int32(m.coupon);
            return w;
        };

        /**
         * Decodes an AdClicked message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AdClicked
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.AdClicked} AdClicked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        AdClicked.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.AdClicked();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.pos = r.int32();
                    break;
                case 3:
                    m.url = r.string();
                    break;
                case 4:
                    m.title = r.string();
                    break;
                case 5:
                    m.uid = r.int32();
                    break;
                case 6:
                    m.from = r.int32();
                    break;
                case 7:
                    m.gold = r.int32();
                    break;
                case 8:
                    m.diamond = r.int32();
                    break;
                case 9:
                    m.coupon = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return AdClicked;
    })();

    pb.CmdRegistry = (function() {

        /**
         * Properties of a CmdRegistry.
         * @memberof pb
         * @interface ICmdRegistry
         * @property {string|null} [account] CmdRegistry account
         * @property {pb.LoginType|null} [type] CmdRegistry type
         * @property {string|null} [pwd] CmdRegistry pwd
         * @property {string|null} [smsCode] CmdRegistry smsCode
         * @property {pb.AppFrom|null} [from] CmdRegistry from
         * @property {boolean|null} [websocket] CmdRegistry websocket
         * @property {string|null} [unionId] CmdRegistry unionId
         * @property {number|null} [inviter] CmdRegistry inviter
         */

        /**
         * Constructs a new CmdRegistry.
         * @memberof pb
         * @classdesc Represents a CmdRegistry.
         * @implements ICmdRegistry
         * @constructor
         * @param {pb.ICmdRegistry=} [p] Properties to set
         */
        function CmdRegistry(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdRegistry account.
         * @member {string} account
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.account = "";

        /**
         * CmdRegistry type.
         * @member {pb.LoginType} type
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.type = 0;

        /**
         * CmdRegistry pwd.
         * @member {string} pwd
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.pwd = "";

        /**
         * CmdRegistry smsCode.
         * @member {string} smsCode
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.smsCode = "";

        /**
         * CmdRegistry from.
         * @member {pb.AppFrom} from
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.from = 0;

        /**
         * CmdRegistry websocket.
         * @member {boolean} websocket
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.websocket = false;

        /**
         * CmdRegistry unionId.
         * @member {string} unionId
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.unionId = "";

        /**
         * CmdRegistry inviter.
         * @member {number} inviter
         * @memberof pb.CmdRegistry
         * @instance
         */
        CmdRegistry.prototype.inviter = 0;

        /**
         * Encodes the specified CmdRegistry message. Does not implicitly {@link pb.CmdRegistry.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdRegistry
         * @static
         * @param {pb.ICmdRegistry} m CmdRegistry message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdRegistry.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(10).string(m.account);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(16).int32(m.type);
            if (m.pwd != null && Object.hasOwnProperty.call(m, "pwd"))
                w.uint32(26).string(m.pwd);
            if (m.smsCode != null && Object.hasOwnProperty.call(m, "smsCode"))
                w.uint32(34).string(m.smsCode);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(40).int32(m.from);
            if (m.websocket != null && Object.hasOwnProperty.call(m, "websocket"))
                w.uint32(48).bool(m.websocket);
            if (m.unionId != null && Object.hasOwnProperty.call(m, "unionId"))
                w.uint32(58).string(m.unionId);
            if (m.inviter != null && Object.hasOwnProperty.call(m, "inviter"))
                w.uint32(64).int32(m.inviter);
            return w;
        };

        /**
         * Decodes a CmdRegistry message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdRegistry
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdRegistry} CmdRegistry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdRegistry.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdRegistry();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.account = r.string();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.pwd = r.string();
                    break;
                case 4:
                    m.smsCode = r.string();
                    break;
                case 5:
                    m.from = r.int32();
                    break;
                case 6:
                    m.websocket = r.bool();
                    break;
                case 7:
                    m.unionId = r.string();
                    break;
                case 8:
                    m.inviter = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdRegistry;
    })();

    pb.CmdLogin = (function() {

        /**
         * Properties of a CmdLogin.
         * @memberof pb
         * @interface ICmdLogin
         * @property {string|null} [account] CmdLogin account
         * @property {pb.LoginType|null} [type] CmdLogin type
         * @property {string|null} [pwd] CmdLogin pwd
         * @property {pb.AppFrom|null} [from] CmdLogin from
         * @property {boolean|null} [websocket] CmdLogin websocket
         * @property {string|null} [unionId] CmdLogin unionId
         * @property {number|null} [inviter] CmdLogin inviter
         */

        /**
         * Constructs a new CmdLogin.
         * @memberof pb
         * @classdesc Represents a CmdLogin.
         * @implements ICmdLogin
         * @constructor
         * @param {pb.ICmdLogin=} [p] Properties to set
         */
        function CmdLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdLogin account.
         * @member {string} account
         * @memberof pb.CmdLogin
         * @instance
         */
        CmdLogin.prototype.account = "";

        /**
         * CmdLogin type.
         * @member {pb.LoginType} type
         * @memberof pb.CmdLogin
         * @instance
         */
        CmdLogin.prototype.type = 0;

        /**
         * CmdLogin pwd.
         * @member {string} pwd
         * @memberof pb.CmdLogin
         * @instance
         */
        CmdLogin.prototype.pwd = "";

        /**
         * CmdLogin from.
         * @member {pb.AppFrom} from
         * @memberof pb.CmdLogin
         * @instance
         */
        CmdLogin.prototype.from = 0;

        /**
         * CmdLogin websocket.
         * @member {boolean} websocket
         * @memberof pb.CmdLogin
         * @instance
         */
        CmdLogin.prototype.websocket = false;

        /**
         * CmdLogin unionId.
         * @member {string} unionId
         * @memberof pb.CmdLogin
         * @instance
         */
        CmdLogin.prototype.unionId = "";

        /**
         * CmdLogin inviter.
         * @member {number} inviter
         * @memberof pb.CmdLogin
         * @instance
         */
        CmdLogin.prototype.inviter = 0;

        /**
         * Encodes the specified CmdLogin message. Does not implicitly {@link pb.CmdLogin.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdLogin
         * @static
         * @param {pb.ICmdLogin} m CmdLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(10).string(m.account);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(16).int32(m.type);
            if (m.pwd != null && Object.hasOwnProperty.call(m, "pwd"))
                w.uint32(26).string(m.pwd);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(32).int32(m.from);
            if (m.websocket != null && Object.hasOwnProperty.call(m, "websocket"))
                w.uint32(40).bool(m.websocket);
            if (m.unionId != null && Object.hasOwnProperty.call(m, "unionId"))
                w.uint32(50).string(m.unionId);
            if (m.inviter != null && Object.hasOwnProperty.call(m, "inviter"))
                w.uint32(56).int32(m.inviter);
            return w;
        };

        /**
         * Decodes a CmdLogin message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdLogin} CmdLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.account = r.string();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.pwd = r.string();
                    break;
                case 4:
                    m.from = r.int32();
                    break;
                case 5:
                    m.websocket = r.bool();
                    break;
                case 6:
                    m.unionId = r.string();
                    break;
                case 7:
                    m.inviter = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdLogin;
    })();

    pb.CmdLoginReply = (function() {

        /**
         * Properties of a CmdLoginReply.
         * @memberof pb
         * @interface ICmdLoginReply
         * @property {pb.IErrorInfo|null} [err] CmdLoginReply err
         * @property {number|null} [uid] CmdLoginReply uid
         * @property {string|null} [token] CmdLoginReply token
         * @property {string|null} [gameAddr] CmdLoginReply gameAddr
         */

        /**
         * Constructs a new CmdLoginReply.
         * @memberof pb
         * @classdesc Represents a CmdLoginReply.
         * @implements ICmdLoginReply
         * @constructor
         * @param {pb.ICmdLoginReply=} [p] Properties to set
         */
        function CmdLoginReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdLoginReply err.
         * @member {pb.IErrorInfo|null|undefined} err
         * @memberof pb.CmdLoginReply
         * @instance
         */
        CmdLoginReply.prototype.err = null;

        /**
         * CmdLoginReply uid.
         * @member {number} uid
         * @memberof pb.CmdLoginReply
         * @instance
         */
        CmdLoginReply.prototype.uid = 0;

        /**
         * CmdLoginReply token.
         * @member {string} token
         * @memberof pb.CmdLoginReply
         * @instance
         */
        CmdLoginReply.prototype.token = "";

        /**
         * CmdLoginReply gameAddr.
         * @member {string} gameAddr
         * @memberof pb.CmdLoginReply
         * @instance
         */
        CmdLoginReply.prototype.gameAddr = "";

        /**
         * Encodes the specified CmdLoginReply message. Does not implicitly {@link pb.CmdLoginReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdLoginReply
         * @static
         * @param {pb.ICmdLoginReply} m CmdLoginReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdLoginReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.err != null && Object.hasOwnProperty.call(m, "err"))
                $root.pb.ErrorInfo.encode(m.err, w.uint32(10).fork()).ldelim();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(16).int32(m.uid);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(26).string(m.token);
            if (m.gameAddr != null && Object.hasOwnProperty.call(m, "gameAddr"))
                w.uint32(34).string(m.gameAddr);
            return w;
        };

        /**
         * Decodes a CmdLoginReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdLoginReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdLoginReply} CmdLoginReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdLoginReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdLoginReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.err = $root.pb.ErrorInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.uid = r.int32();
                    break;
                case 3:
                    m.token = r.string();
                    break;
                case 4:
                    m.gameAddr = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdLoginReply;
    })();

    pb.CmdGetCaptcha = (function() {

        /**
         * Properties of a CmdGetCaptcha.
         * @memberof pb
         * @interface ICmdGetCaptcha
         * @property {string|null} [account] CmdGetCaptcha account
         */

        /**
         * Constructs a new CmdGetCaptcha.
         * @memberof pb
         * @classdesc Represents a CmdGetCaptcha.
         * @implements ICmdGetCaptcha
         * @constructor
         * @param {pb.ICmdGetCaptcha=} [p] Properties to set
         */
        function CmdGetCaptcha(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetCaptcha account.
         * @member {string} account
         * @memberof pb.CmdGetCaptcha
         * @instance
         */
        CmdGetCaptcha.prototype.account = "";

        /**
         * Encodes the specified CmdGetCaptcha message. Does not implicitly {@link pb.CmdGetCaptcha.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetCaptcha
         * @static
         * @param {pb.ICmdGetCaptcha} m CmdGetCaptcha message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetCaptcha.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(10).string(m.account);
            return w;
        };

        /**
         * Decodes a CmdGetCaptcha message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetCaptcha
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetCaptcha} CmdGetCaptcha
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetCaptcha.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetCaptcha();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.account = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetCaptcha;
    })();

    pb.CmdGetCaptchaReply = (function() {

        /**
         * Properties of a CmdGetCaptchaReply.
         * @memberof pb
         * @interface ICmdGetCaptchaReply
         * @property {Uint8Array|null} [captcha] CmdGetCaptchaReply captcha
         */

        /**
         * Constructs a new CmdGetCaptchaReply.
         * @memberof pb
         * @classdesc Represents a CmdGetCaptchaReply.
         * @implements ICmdGetCaptchaReply
         * @constructor
         * @param {pb.ICmdGetCaptchaReply=} [p] Properties to set
         */
        function CmdGetCaptchaReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetCaptchaReply captcha.
         * @member {Uint8Array} captcha
         * @memberof pb.CmdGetCaptchaReply
         * @instance
         */
        CmdGetCaptchaReply.prototype.captcha = $util.newBuffer([]);

        /**
         * Encodes the specified CmdGetCaptchaReply message. Does not implicitly {@link pb.CmdGetCaptchaReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetCaptchaReply
         * @static
         * @param {pb.ICmdGetCaptchaReply} m CmdGetCaptchaReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetCaptchaReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.captcha != null && Object.hasOwnProperty.call(m, "captcha"))
                w.uint32(10).bytes(m.captcha);
            return w;
        };

        /**
         * Decodes a CmdGetCaptchaReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetCaptchaReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetCaptchaReply} CmdGetCaptchaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetCaptchaReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetCaptchaReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.captcha = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetCaptchaReply;
    })();

    pb.CmdGetSms = (function() {

        /**
         * Properties of a CmdGetSms.
         * @memberof pb
         * @interface ICmdGetSms
         * @property {string|null} [account] CmdGetSms account
         * @property {string|null} [captcha] CmdGetSms captcha
         */

        /**
         * Constructs a new CmdGetSms.
         * @memberof pb
         * @classdesc Represents a CmdGetSms.
         * @implements ICmdGetSms
         * @constructor
         * @param {pb.ICmdGetSms=} [p] Properties to set
         */
        function CmdGetSms(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGetSms account.
         * @member {string} account
         * @memberof pb.CmdGetSms
         * @instance
         */
        CmdGetSms.prototype.account = "";

        /**
         * CmdGetSms captcha.
         * @member {string} captcha
         * @memberof pb.CmdGetSms
         * @instance
         */
        CmdGetSms.prototype.captcha = "";

        /**
         * Encodes the specified CmdGetSms message. Does not implicitly {@link pb.CmdGetSms.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGetSms
         * @static
         * @param {pb.ICmdGetSms} m CmdGetSms message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGetSms.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(10).string(m.account);
            if (m.captcha != null && Object.hasOwnProperty.call(m, "captcha"))
                w.uint32(18).string(m.captcha);
            return w;
        };

        /**
         * Decodes a CmdGetSms message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGetSms
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGetSms} CmdGetSms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGetSms.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGetSms();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.account = r.string();
                    break;
                case 2:
                    m.captcha = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGetSms;
    })();

    pb.CmdResetPwd = (function() {

        /**
         * Properties of a CmdResetPwd.
         * @memberof pb
         * @interface ICmdResetPwd
         * @property {string|null} [account] CmdResetPwd account
         * @property {string|null} [pwd] CmdResetPwd pwd
         * @property {string|null} [captcha] CmdResetPwd captcha
         */

        /**
         * Constructs a new CmdResetPwd.
         * @memberof pb
         * @classdesc Represents a CmdResetPwd.
         * @implements ICmdResetPwd
         * @constructor
         * @param {pb.ICmdResetPwd=} [p] Properties to set
         */
        function CmdResetPwd(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdResetPwd account.
         * @member {string} account
         * @memberof pb.CmdResetPwd
         * @instance
         */
        CmdResetPwd.prototype.account = "";

        /**
         * CmdResetPwd pwd.
         * @member {string} pwd
         * @memberof pb.CmdResetPwd
         * @instance
         */
        CmdResetPwd.prototype.pwd = "";

        /**
         * CmdResetPwd captcha.
         * @member {string} captcha
         * @memberof pb.CmdResetPwd
         * @instance
         */
        CmdResetPwd.prototype.captcha = "";

        /**
         * Encodes the specified CmdResetPwd message. Does not implicitly {@link pb.CmdResetPwd.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdResetPwd
         * @static
         * @param {pb.ICmdResetPwd} m CmdResetPwd message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdResetPwd.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.account != null && Object.hasOwnProperty.call(m, "account"))
                w.uint32(10).string(m.account);
            if (m.pwd != null && Object.hasOwnProperty.call(m, "pwd"))
                w.uint32(18).string(m.pwd);
            if (m.captcha != null && Object.hasOwnProperty.call(m, "captcha"))
                w.uint32(26).string(m.captcha);
            return w;
        };

        /**
         * Decodes a CmdResetPwd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdResetPwd
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdResetPwd} CmdResetPwd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdResetPwd.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdResetPwd();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.account = r.string();
                    break;
                case 2:
                    m.pwd = r.string();
                    break;
                case 3:
                    m.captcha = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdResetPwd;
    })();

    pb.CmdPay = (function() {

        /**
         * Properties of a CmdPay.
         * @memberof pb
         * @interface ICmdPay
         * @property {number|null} [uid] CmdPay uid
         * @property {number|null} [orderId] CmdPay orderId
         */

        /**
         * Constructs a new CmdPay.
         * @memberof pb
         * @classdesc Represents a CmdPay.
         * @implements ICmdPay
         * @constructor
         * @param {pb.ICmdPay=} [p] Properties to set
         */
        function CmdPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdPay uid.
         * @member {number} uid
         * @memberof pb.CmdPay
         * @instance
         */
        CmdPay.prototype.uid = 0;

        /**
         * CmdPay orderId.
         * @member {number} orderId
         * @memberof pb.CmdPay
         * @instance
         */
        CmdPay.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified CmdPay message. Does not implicitly {@link pb.CmdPay.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdPay
         * @static
         * @param {pb.ICmdPay} m CmdPay message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.orderId != null && Object.hasOwnProperty.call(m, "orderId"))
                w.uint32(16).int64(m.orderId);
            return w;
        };

        /**
         * Decodes a CmdPay message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdPay
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdPay} CmdPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdPay();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.orderId = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdPay;
    })();

    pb.LoginService = (function() {

        /**
         * Constructs a new LoginService service.
         * @memberof pb
         * @classdesc Represents a LoginService
         * @extends protobuf.rpc.Service
         * @constructor
         * @param {protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function LoginService(rpcImpl, requestDelimited, responseDelimited) {
            protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (LoginService.prototype = Object.create(protobuf.rpc.Service.prototype)).constructor = LoginService;

        /**
         * Callback as used by {@link pb.LoginService#registry}.
         * @memberof pb.LoginService
         * @typedef RegistryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls Registry.
         * @function registry
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdRegistry} request CmdRegistry message or plain object
         * @param {pb.LoginService.RegistryCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LoginService.prototype.registry = function registry(request, callback) {
            return this.rpcCall(registry, $root.pb.CmdRegistry, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "Registry" });

        /**
         * Calls Registry.
         * @function registry
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdRegistry} request CmdRegistry message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LoginService#login}.
         * @memberof pb.LoginService
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdLoginReply} [response] CmdLoginReply
         */

        /**
         * Calls Login.
         * @function login
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdLogin} request CmdLogin message or plain object
         * @param {pb.LoginService.LoginCallback} callback Node-style callback called with the error, if any, and CmdLoginReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LoginService.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.pb.CmdLogin, $root.pb.CmdLoginReply, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdLogin} request CmdLogin message or plain object
         * @returns {Promise<pb.CmdLoginReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LoginService#getCaptcha}.
         * @memberof pb.LoginService
         * @typedef GetCaptchaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdGetCaptchaReply} [response] CmdGetCaptchaReply
         */

        /**
         * Calls GetCaptcha.
         * @function getCaptcha
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdGetCaptcha} request CmdGetCaptcha message or plain object
         * @param {pb.LoginService.GetCaptchaCallback} callback Node-style callback called with the error, if any, and CmdGetCaptchaReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LoginService.prototype.getCaptcha = function getCaptcha(request, callback) {
            return this.rpcCall(getCaptcha, $root.pb.CmdGetCaptcha, $root.pb.CmdGetCaptchaReply, request, callback);
        }, "name", { value: "GetCaptcha" });

        /**
         * Calls GetCaptcha.
         * @function getCaptcha
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdGetCaptcha} request CmdGetCaptcha message or plain object
         * @returns {Promise<pb.CmdGetCaptchaReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LoginService#getSms}.
         * @memberof pb.LoginService
         * @typedef GetSmsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls GetSms.
         * @function getSms
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdGetSms} request CmdGetSms message or plain object
         * @param {pb.LoginService.GetSmsCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LoginService.prototype.getSms = function getSms(request, callback) {
            return this.rpcCall(getSms, $root.pb.CmdGetSms, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "GetSms" });

        /**
         * Calls GetSms.
         * @function getSms
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdGetSms} request CmdGetSms message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LoginService#resetPwd}.
         * @memberof pb.LoginService
         * @typedef ResetPwdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls ResetPwd.
         * @function resetPwd
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdResetPwd} request CmdResetPwd message or plain object
         * @param {pb.LoginService.ResetPwdCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LoginService.prototype.resetPwd = function resetPwd(request, callback) {
            return this.rpcCall(resetPwd, $root.pb.CmdResetPwd, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "ResetPwd" });

        /**
         * Calls ResetPwd.
         * @function resetPwd
         * @memberof pb.LoginService
         * @instance
         * @param {pb.ICmdResetPwd} request CmdResetPwd message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        return LoginService;
    })();

    /**
     * SyncAct enum.
     * @name pb.SyncAct
     * @enum {number}
     * @property {number} SyncAct_NULL=0 SyncAct_NULL value
     * @property {number} Set=1 Set value
     * @property {number} Del=2 Del value
     */
    pb.SyncAct = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SyncAct_NULL"] = 0;
        values[valuesById[1] = "Set"] = 1;
        values[valuesById[2] = "Del"] = 2;
        return values;
    })();

    /**
     * ServerCmdId enum.
     * @name pb.ServerCmdId
     * @enum {number}
     * @property {number} ServerCmdId_NULL=0 ServerCmdId_NULL value
     * @property {number} ReloadGameConf=1 ReloadGameConf value
     */
    pb.ServerCmdId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ServerCmdId_NULL"] = 0;
        values[valuesById[1] = "ReloadGameConf"] = 1;
        return values;
    })();

    pb.CmdNewUidReply = (function() {

        /**
         * Properties of a CmdNewUidReply.
         * @memberof pb
         * @interface ICmdNewUidReply
         * @property {number|null} [uid] CmdNewUidReply uid
         */

        /**
         * Constructs a new CmdNewUidReply.
         * @memberof pb
         * @classdesc Represents a CmdNewUidReply.
         * @implements ICmdNewUidReply
         * @constructor
         * @param {pb.ICmdNewUidReply=} [p] Properties to set
         */
        function CmdNewUidReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdNewUidReply uid.
         * @member {number} uid
         * @memberof pb.CmdNewUidReply
         * @instance
         */
        CmdNewUidReply.prototype.uid = 0;

        /**
         * Encodes the specified CmdNewUidReply message. Does not implicitly {@link pb.CmdNewUidReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdNewUidReply
         * @static
         * @param {pb.ICmdNewUidReply} m CmdNewUidReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdNewUidReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).uint32(m.uid);
            return w;
        };

        /**
         * Decodes a CmdNewUidReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdNewUidReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdNewUidReply} CmdNewUidReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdNewUidReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdNewUidReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdNewUidReply;
    })();

    pb.CmdNewRoomIdReply = (function() {

        /**
         * Properties of a CmdNewRoomIdReply.
         * @memberof pb
         * @interface ICmdNewRoomIdReply
         * @property {number|null} [id] CmdNewRoomIdReply id
         */

        /**
         * Constructs a new CmdNewRoomIdReply.
         * @memberof pb
         * @classdesc Represents a CmdNewRoomIdReply.
         * @implements ICmdNewRoomIdReply
         * @constructor
         * @param {pb.ICmdNewRoomIdReply=} [p] Properties to set
         */
        function CmdNewRoomIdReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdNewRoomIdReply id.
         * @member {number} id
         * @memberof pb.CmdNewRoomIdReply
         * @instance
         */
        CmdNewRoomIdReply.prototype.id = 0;

        /**
         * Encodes the specified CmdNewRoomIdReply message. Does not implicitly {@link pb.CmdNewRoomIdReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdNewRoomIdReply
         * @static
         * @param {pb.ICmdNewRoomIdReply} m CmdNewRoomIdReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdNewRoomIdReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            return w;
        };

        /**
         * Decodes a CmdNewRoomIdReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdNewRoomIdReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdNewRoomIdReply} CmdNewRoomIdReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdNewRoomIdReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdNewRoomIdReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdNewRoomIdReply;
    })();

    pb.CmdGateAddr = (function() {

        /**
         * Properties of a CmdGateAddr.
         * @memberof pb
         * @interface ICmdGateAddr
         * @property {number|null} [uid] CmdGateAddr uid
         */

        /**
         * Constructs a new CmdGateAddr.
         * @memberof pb
         * @classdesc Represents a CmdGateAddr.
         * @implements ICmdGateAddr
         * @constructor
         * @param {pb.ICmdGateAddr=} [p] Properties to set
         */
        function CmdGateAddr(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGateAddr uid.
         * @member {number} uid
         * @memberof pb.CmdGateAddr
         * @instance
         */
        CmdGateAddr.prototype.uid = 0;

        /**
         * Encodes the specified CmdGateAddr message. Does not implicitly {@link pb.CmdGateAddr.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGateAddr
         * @static
         * @param {pb.ICmdGateAddr} m CmdGateAddr message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGateAddr.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            return w;
        };

        /**
         * Decodes a CmdGateAddr message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGateAddr
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGateAddr} CmdGateAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGateAddr.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGateAddr();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGateAddr;
    })();

    pb.CmdGateAddrReply = (function() {

        /**
         * Properties of a CmdGateAddrReply.
         * @memberof pb
         * @interface ICmdGateAddrReply
         * @property {number|null} [uid] CmdGateAddrReply uid
         * @property {string|null} [addr] CmdGateAddrReply addr
         */

        /**
         * Constructs a new CmdGateAddrReply.
         * @memberof pb
         * @classdesc Represents a CmdGateAddrReply.
         * @implements ICmdGateAddrReply
         * @constructor
         * @param {pb.ICmdGateAddrReply=} [p] Properties to set
         */
        function CmdGateAddrReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGateAddrReply uid.
         * @member {number} uid
         * @memberof pb.CmdGateAddrReply
         * @instance
         */
        CmdGateAddrReply.prototype.uid = 0;

        /**
         * CmdGateAddrReply addr.
         * @member {string} addr
         * @memberof pb.CmdGateAddrReply
         * @instance
         */
        CmdGateAddrReply.prototype.addr = "";

        /**
         * Encodes the specified CmdGateAddrReply message. Does not implicitly {@link pb.CmdGateAddrReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGateAddrReply
         * @static
         * @param {pb.ICmdGateAddrReply} m CmdGateAddrReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGateAddrReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.addr != null && Object.hasOwnProperty.call(m, "addr"))
                w.uint32(18).string(m.addr);
            return w;
        };

        /**
         * Decodes a CmdGateAddrReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGateAddrReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGateAddrReply} CmdGateAddrReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGateAddrReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGateAddrReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.addr = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGateAddrReply;
    })();

    pb.CmdUserLogin = (function() {

        /**
         * Properties of a CmdUserLogin.
         * @memberof pb
         * @interface ICmdUserLogin
         * @property {number|null} [uid] CmdUserLogin uid
         * @property {pb.LoginType|null} [type] CmdUserLogin type
         * @property {pb.AppFrom|null} [from] CmdUserLogin from
         * @property {string|null} [ip] CmdUserLogin ip
         */

        /**
         * Constructs a new CmdUserLogin.
         * @memberof pb
         * @classdesc Represents a CmdUserLogin.
         * @implements ICmdUserLogin
         * @constructor
         * @param {pb.ICmdUserLogin=} [p] Properties to set
         */
        function CmdUserLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUserLogin uid.
         * @member {number} uid
         * @memberof pb.CmdUserLogin
         * @instance
         */
        CmdUserLogin.prototype.uid = 0;

        /**
         * CmdUserLogin type.
         * @member {pb.LoginType} type
         * @memberof pb.CmdUserLogin
         * @instance
         */
        CmdUserLogin.prototype.type = 0;

        /**
         * CmdUserLogin from.
         * @member {pb.AppFrom} from
         * @memberof pb.CmdUserLogin
         * @instance
         */
        CmdUserLogin.prototype.from = 0;

        /**
         * CmdUserLogin ip.
         * @member {string} ip
         * @memberof pb.CmdUserLogin
         * @instance
         */
        CmdUserLogin.prototype.ip = "";

        /**
         * Encodes the specified CmdUserLogin message. Does not implicitly {@link pb.CmdUserLogin.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUserLogin
         * @static
         * @param {pb.ICmdUserLogin} m CmdUserLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUserLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(16).int32(m.type);
            if (m.from != null && Object.hasOwnProperty.call(m, "from"))
                w.uint32(24).int32(m.from);
            if (m.ip != null && Object.hasOwnProperty.call(m, "ip"))
                w.uint32(34).string(m.ip);
            return w;
        };

        /**
         * Decodes a CmdUserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUserLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUserLogin} CmdUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUserLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUserLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.type = r.int32();
                    break;
                case 3:
                    m.from = r.int32();
                    break;
                case 4:
                    m.ip = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUserLogin;
    })();

    pb.CmdUserLoginReply = (function() {

        /**
         * Properties of a CmdUserLoginReply.
         * @memberof pb
         * @interface ICmdUserLoginReply
         * @property {number|null} [uid] CmdUserLoginReply uid
         * @property {string|null} [token] CmdUserLoginReply token
         * @property {string|null} [addr] CmdUserLoginReply addr
         */

        /**
         * Constructs a new CmdUserLoginReply.
         * @memberof pb
         * @classdesc Represents a CmdUserLoginReply.
         * @implements ICmdUserLoginReply
         * @constructor
         * @param {pb.ICmdUserLoginReply=} [p] Properties to set
         */
        function CmdUserLoginReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUserLoginReply uid.
         * @member {number} uid
         * @memberof pb.CmdUserLoginReply
         * @instance
         */
        CmdUserLoginReply.prototype.uid = 0;

        /**
         * CmdUserLoginReply token.
         * @member {string} token
         * @memberof pb.CmdUserLoginReply
         * @instance
         */
        CmdUserLoginReply.prototype.token = "";

        /**
         * CmdUserLoginReply addr.
         * @member {string} addr
         * @memberof pb.CmdUserLoginReply
         * @instance
         */
        CmdUserLoginReply.prototype.addr = "";

        /**
         * Encodes the specified CmdUserLoginReply message. Does not implicitly {@link pb.CmdUserLoginReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUserLoginReply
         * @static
         * @param {pb.ICmdUserLoginReply} m CmdUserLoginReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUserLoginReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(18).string(m.token);
            if (m.addr != null && Object.hasOwnProperty.call(m, "addr"))
                w.uint32(26).string(m.addr);
            return w;
        };

        /**
         * Decodes a CmdUserLoginReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUserLoginReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUserLoginReply} CmdUserLoginReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUserLoginReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUserLoginReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.token = r.string();
                    break;
                case 3:
                    m.addr = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUserLoginReply;
    })();

    pb.CmdUserGameLogin = (function() {

        /**
         * Properties of a CmdUserGameLogin.
         * @memberof pb
         * @interface ICmdUserGameLogin
         * @property {number|null} [uid] CmdUserGameLogin uid
         * @property {number|null} [nodeId] CmdUserGameLogin nodeId
         */

        /**
         * Constructs a new CmdUserGameLogin.
         * @memberof pb
         * @classdesc Represents a CmdUserGameLogin.
         * @implements ICmdUserGameLogin
         * @constructor
         * @param {pb.ICmdUserGameLogin=} [p] Properties to set
         */
        function CmdUserGameLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUserGameLogin uid.
         * @member {number} uid
         * @memberof pb.CmdUserGameLogin
         * @instance
         */
        CmdUserGameLogin.prototype.uid = 0;

        /**
         * CmdUserGameLogin nodeId.
         * @member {number} nodeId
         * @memberof pb.CmdUserGameLogin
         * @instance
         */
        CmdUserGameLogin.prototype.nodeId = 0;

        /**
         * Encodes the specified CmdUserGameLogin message. Does not implicitly {@link pb.CmdUserGameLogin.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUserGameLogin
         * @static
         * @param {pb.ICmdUserGameLogin} m CmdUserGameLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUserGameLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.nodeId != null && Object.hasOwnProperty.call(m, "nodeId"))
                w.uint32(16).int32(m.nodeId);
            return w;
        };

        /**
         * Decodes a CmdUserGameLogin message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUserGameLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUserGameLogin} CmdUserGameLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUserGameLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUserGameLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.nodeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUserGameLogin;
    })();

    pb.CmdUserGameLogout = (function() {

        /**
         * Properties of a CmdUserGameLogout.
         * @memberof pb
         * @interface ICmdUserGameLogout
         * @property {number|null} [uid] CmdUserGameLogout uid
         */

        /**
         * Constructs a new CmdUserGameLogout.
         * @memberof pb
         * @classdesc Represents a CmdUserGameLogout.
         * @implements ICmdUserGameLogout
         * @constructor
         * @param {pb.ICmdUserGameLogout=} [p] Properties to set
         */
        function CmdUserGameLogout(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUserGameLogout uid.
         * @member {number} uid
         * @memberof pb.CmdUserGameLogout
         * @instance
         */
        CmdUserGameLogout.prototype.uid = 0;

        /**
         * Encodes the specified CmdUserGameLogout message. Does not implicitly {@link pb.CmdUserGameLogout.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUserGameLogout
         * @static
         * @param {pb.ICmdUserGameLogout} m CmdUserGameLogout message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUserGameLogout.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            return w;
        };

        /**
         * Decodes a CmdUserGameLogout message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUserGameLogout
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUserGameLogout} CmdUserGameLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUserGameLogout.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUserGameLogout();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUserGameLogout;
    })();

    pb.CmdUserGameData = (function() {

        /**
         * Properties of a CmdUserGameData.
         * @memberof pb
         * @interface ICmdUserGameData
         * @property {number|null} [uid] CmdUserGameData uid
         */

        /**
         * Constructs a new CmdUserGameData.
         * @memberof pb
         * @classdesc Represents a CmdUserGameData.
         * @implements ICmdUserGameData
         * @constructor
         * @param {pb.ICmdUserGameData=} [p] Properties to set
         */
        function CmdUserGameData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUserGameData uid.
         * @member {number} uid
         * @memberof pb.CmdUserGameData
         * @instance
         */
        CmdUserGameData.prototype.uid = 0;

        /**
         * Encodes the specified CmdUserGameData message. Does not implicitly {@link pb.CmdUserGameData.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUserGameData
         * @static
         * @param {pb.ICmdUserGameData} m CmdUserGameData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUserGameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            return w;
        };

        /**
         * Decodes a CmdUserGameData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUserGameData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUserGameData} CmdUserGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUserGameData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUserGameData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUserGameData;
    })();

    pb.CmdUserGameDataReply = (function() {

        /**
         * Properties of a CmdUserGameDataReply.
         * @memberof pb
         * @interface ICmdUserGameDataReply
         * @property {pb.IGameData|null} [gd] CmdUserGameDataReply gd
         * @property {number|null} [roomId] CmdUserGameDataReply roomId
         * @property {number|null} [roomAtNode] CmdUserGameDataReply roomAtNode
         */

        /**
         * Constructs a new CmdUserGameDataReply.
         * @memberof pb
         * @classdesc Represents a CmdUserGameDataReply.
         * @implements ICmdUserGameDataReply
         * @constructor
         * @param {pb.ICmdUserGameDataReply=} [p] Properties to set
         */
        function CmdUserGameDataReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdUserGameDataReply gd.
         * @member {pb.IGameData|null|undefined} gd
         * @memberof pb.CmdUserGameDataReply
         * @instance
         */
        CmdUserGameDataReply.prototype.gd = null;

        /**
         * CmdUserGameDataReply roomId.
         * @member {number} roomId
         * @memberof pb.CmdUserGameDataReply
         * @instance
         */
        CmdUserGameDataReply.prototype.roomId = 0;

        /**
         * CmdUserGameDataReply roomAtNode.
         * @member {number} roomAtNode
         * @memberof pb.CmdUserGameDataReply
         * @instance
         */
        CmdUserGameDataReply.prototype.roomAtNode = 0;

        /**
         * Encodes the specified CmdUserGameDataReply message. Does not implicitly {@link pb.CmdUserGameDataReply.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdUserGameDataReply
         * @static
         * @param {pb.ICmdUserGameDataReply} m CmdUserGameDataReply message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdUserGameDataReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gd != null && Object.hasOwnProperty.call(m, "gd"))
                $root.pb.GameData.encode(m.gd, w.uint32(10).fork()).ldelim();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(16).int32(m.roomId);
            if (m.roomAtNode != null && Object.hasOwnProperty.call(m, "roomAtNode"))
                w.uint32(24).int32(m.roomAtNode);
            return w;
        };

        /**
         * Decodes a CmdUserGameDataReply message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdUserGameDataReply
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdUserGameDataReply} CmdUserGameDataReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdUserGameDataReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdUserGameDataReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.gd = $root.pb.GameData.decode(r, r.uint32());
                    break;
                case 2:
                    m.roomId = r.int32();
                    break;
                case 3:
                    m.roomAtNode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdUserGameDataReply;
    })();

    pb.CmdGameProperties = (function() {

        /**
         * Properties of a CmdGameProperties.
         * @memberof pb
         * @interface ICmdGameProperties
         * @property {number|null} [uid] CmdGameProperties uid
         * @property {Array.<pb.IGamePropertyItem>|null} [properties] CmdGameProperties properties
         * @property {string|null} [memo] CmdGameProperties memo
         * @property {boolean|null} [backbag] CmdGameProperties backbag
         */

        /**
         * Constructs a new CmdGameProperties.
         * @memberof pb
         * @classdesc Represents a CmdGameProperties.
         * @implements ICmdGameProperties
         * @constructor
         * @param {pb.ICmdGameProperties=} [p] Properties to set
         */
        function CmdGameProperties(p) {
            this.properties = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdGameProperties uid.
         * @member {number} uid
         * @memberof pb.CmdGameProperties
         * @instance
         */
        CmdGameProperties.prototype.uid = 0;

        /**
         * CmdGameProperties properties.
         * @member {Array.<pb.IGamePropertyItem>} properties
         * @memberof pb.CmdGameProperties
         * @instance
         */
        CmdGameProperties.prototype.properties = $util.emptyArray;

        /**
         * CmdGameProperties memo.
         * @member {string} memo
         * @memberof pb.CmdGameProperties
         * @instance
         */
        CmdGameProperties.prototype.memo = "";

        /**
         * CmdGameProperties backbag.
         * @member {boolean} backbag
         * @memberof pb.CmdGameProperties
         * @instance
         */
        CmdGameProperties.prototype.backbag = false;

        /**
         * Encodes the specified CmdGameProperties message. Does not implicitly {@link pb.CmdGameProperties.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdGameProperties
         * @static
         * @param {pb.ICmdGameProperties} m CmdGameProperties message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdGameProperties.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.properties != null && m.properties.length) {
                for (var i = 0; i < m.properties.length; ++i)
                    $root.pb.GamePropertyItem.encode(m.properties[i], w.uint32(18).fork()).ldelim();
            }
            if (m.memo != null && Object.hasOwnProperty.call(m, "memo"))
                w.uint32(26).string(m.memo);
            if (m.backbag != null && Object.hasOwnProperty.call(m, "backbag"))
                w.uint32(32).bool(m.backbag);
            return w;
        };

        /**
         * Decodes a CmdGameProperties message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdGameProperties
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdGameProperties} CmdGameProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdGameProperties.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdGameProperties();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    if (!(m.properties && m.properties.length))
                        m.properties = [];
                    m.properties.push($root.pb.GamePropertyItem.decode(r, r.uint32()));
                    break;
                case 3:
                    m.memo = r.string();
                    break;
                case 4:
                    m.backbag = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdGameProperties;
    })();

    pb.ServerCmd = (function() {

        /**
         * Properties of a ServerCmd.
         * @memberof pb
         * @interface IServerCmd
         * @property {pb.ServerCmdId|null} [id] ServerCmd id
         * @property {Uint8Array|null} [parameters] ServerCmd parameters
         */

        /**
         * Constructs a new ServerCmd.
         * @memberof pb
         * @classdesc Represents a ServerCmd.
         * @implements IServerCmd
         * @constructor
         * @param {pb.IServerCmd=} [p] Properties to set
         */
        function ServerCmd(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ServerCmd id.
         * @member {pb.ServerCmdId} id
         * @memberof pb.ServerCmd
         * @instance
         */
        ServerCmd.prototype.id = 0;

        /**
         * ServerCmd parameters.
         * @member {Uint8Array} parameters
         * @memberof pb.ServerCmd
         * @instance
         */
        ServerCmd.prototype.parameters = $util.newBuffer([]);

        /**
         * Encodes the specified ServerCmd message. Does not implicitly {@link pb.ServerCmd.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerCmd
         * @static
         * @param {pb.IServerCmd} m ServerCmd message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ServerCmd.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.parameters != null && Object.hasOwnProperty.call(m, "parameters"))
                w.uint32(18).bytes(m.parameters);
            return w;
        };

        /**
         * Decodes a ServerCmd message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerCmd
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.ServerCmd} ServerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ServerCmd.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.ServerCmd();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.parameters = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ServerCmd;
    })();

    pb.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof pb
         * @interface IMessage
         * @property {pb.MessageId|null} [id] Message id
         * @property {Uint8Array|null} [buf] Message buf
         */

        /**
         * Constructs a new Message.
         * @memberof pb
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {pb.IMessage=} [p] Properties to set
         */
        function Message(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Message id.
         * @member {pb.MessageId} id
         * @memberof pb.Message
         * @instance
         */
        Message.prototype.id = 0;

        /**
         * Message buf.
         * @member {Uint8Array} buf
         * @memberof pb.Message
         * @instance
         */
        Message.prototype.buf = $util.newBuffer([]);

        /**
         * Encodes the specified Message message. Does not implicitly {@link pb.Message.verify|verify} messages.
         * @function encode
         * @memberof pb.Message
         * @static
         * @param {pb.IMessage} m Message message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Message.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.buf != null && Object.hasOwnProperty.call(m, "buf"))
                w.uint32(18).bytes(m.buf);
            return w;
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Message
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.Message();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.buf = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Message;
    })();

    pb.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof pb
         * @interface IRoom
         * @property {pb.SyncAct|null} [act] Room act
         * @property {number|null} [id] Room id
         * @property {pb.GameType|null} [game] Room game
         * @property {number|null} [max] Room max
         * @property {number|null} [cur] Room cur
         * @property {number|null} [node] Room node
         */

        /**
         * Constructs a new Room.
         * @memberof pb
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {pb.IRoom=} [p] Properties to set
         */
        function Room(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Room act.
         * @member {pb.SyncAct} act
         * @memberof pb.Room
         * @instance
         */
        Room.prototype.act = 0;

        /**
         * Room id.
         * @member {number} id
         * @memberof pb.Room
         * @instance
         */
        Room.prototype.id = 0;

        /**
         * Room game.
         * @member {pb.GameType} game
         * @memberof pb.Room
         * @instance
         */
        Room.prototype.game = 0;

        /**
         * Room max.
         * @member {number} max
         * @memberof pb.Room
         * @instance
         */
        Room.prototype.max = 0;

        /**
         * Room cur.
         * @member {number} cur
         * @memberof pb.Room
         * @instance
         */
        Room.prototype.cur = 0;

        /**
         * Room node.
         * @member {number} node
         * @memberof pb.Room
         * @instance
         */
        Room.prototype.node = 0;

        /**
         * Encodes the specified Room message. Does not implicitly {@link pb.Room.verify|verify} messages.
         * @function encode
         * @memberof pb.Room
         * @static
         * @param {pb.IRoom} m Room message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Room.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.act != null && Object.hasOwnProperty.call(m, "act"))
                w.uint32(8).int32(m.act);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(16).int32(m.id);
            if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                w.uint32(24).int32(m.game);
            if (m.max != null && Object.hasOwnProperty.call(m, "max"))
                w.uint32(32).int32(m.max);
            if (m.cur != null && Object.hasOwnProperty.call(m, "cur"))
                w.uint32(40).int32(m.cur);
            if (m.node != null && Object.hasOwnProperty.call(m, "node"))
                w.uint32(48).int32(m.node);
            return w;
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Room
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.Room();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.act = r.int32();
                    break;
                case 2:
                    m.id = r.int32();
                    break;
                case 3:
                    m.game = r.int32();
                    break;
                case 4:
                    m.max = r.int32();
                    break;
                case 5:
                    m.cur = r.int32();
                    break;
                case 6:
                    m.node = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Room;
    })();

    pb.RoomList = (function() {

        /**
         * Properties of a RoomList.
         * @memberof pb
         * @interface IRoomList
         * @property {Array.<pb.IRoom>|null} [items] RoomList items
         */

        /**
         * Constructs a new RoomList.
         * @memberof pb
         * @classdesc Represents a RoomList.
         * @implements IRoomList
         * @constructor
         * @param {pb.IRoomList=} [p] Properties to set
         */
        function RoomList(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomList items.
         * @member {Array.<pb.IRoom>} items
         * @memberof pb.RoomList
         * @instance
         */
        RoomList.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified RoomList message. Does not implicitly {@link pb.RoomList.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomList
         * @static
         * @param {pb.IRoomList} m RoomList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RoomList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.pb.Room.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RoomList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.RoomList} RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RoomList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.RoomList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb.Room.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomList;
    })();

    pb.PlayerNode = (function() {

        /**
         * Properties of a PlayerNode.
         * @memberof pb
         * @interface IPlayerNode
         * @property {number|null} [uid] PlayerNode uid
         * @property {number|null} [nodeId] PlayerNode nodeId
         */

        /**
         * Constructs a new PlayerNode.
         * @memberof pb
         * @classdesc Represents a PlayerNode.
         * @implements IPlayerNode
         * @constructor
         * @param {pb.IPlayerNode=} [p] Properties to set
         */
        function PlayerNode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerNode uid.
         * @member {number} uid
         * @memberof pb.PlayerNode
         * @instance
         */
        PlayerNode.prototype.uid = 0;

        /**
         * PlayerNode nodeId.
         * @member {number} nodeId
         * @memberof pb.PlayerNode
         * @instance
         */
        PlayerNode.prototype.nodeId = 0;

        /**
         * Encodes the specified PlayerNode message. Does not implicitly {@link pb.PlayerNode.verify|verify} messages.
         * @function encode
         * @memberof pb.PlayerNode
         * @static
         * @param {pb.IPlayerNode} m PlayerNode message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        PlayerNode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(8).int32(m.uid);
            if (m.nodeId != null && Object.hasOwnProperty.call(m, "nodeId"))
                w.uint32(16).int32(m.nodeId);
            return w;
        };

        /**
         * Decodes a PlayerNode message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlayerNode
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.PlayerNode} PlayerNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerNode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.PlayerNode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uid = r.int32();
                    break;
                case 2:
                    m.nodeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerNode;
    })();

    pb.BroadcastMsg = (function() {

        /**
         * Properties of a BroadcastMsg.
         * @memberof pb
         * @interface IBroadcastMsg
         * @property {pb.MessageId|null} [id] BroadcastMsg id
         * @property {Uint8Array|null} [buf] BroadcastMsg buf
         * @property {Array.<number>|null} [uids] BroadcastMsg uids
         */

        /**
         * Constructs a new BroadcastMsg.
         * @memberof pb
         * @classdesc Represents a BroadcastMsg.
         * @implements IBroadcastMsg
         * @constructor
         * @param {pb.IBroadcastMsg=} [p] Properties to set
         */
        function BroadcastMsg(p) {
            this.uids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BroadcastMsg id.
         * @member {pb.MessageId} id
         * @memberof pb.BroadcastMsg
         * @instance
         */
        BroadcastMsg.prototype.id = 0;

        /**
         * BroadcastMsg buf.
         * @member {Uint8Array} buf
         * @memberof pb.BroadcastMsg
         * @instance
         */
        BroadcastMsg.prototype.buf = $util.newBuffer([]);

        /**
         * BroadcastMsg uids.
         * @member {Array.<number>} uids
         * @memberof pb.BroadcastMsg
         * @instance
         */
        BroadcastMsg.prototype.uids = $util.emptyArray;

        /**
         * Encodes the specified BroadcastMsg message. Does not implicitly {@link pb.BroadcastMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.BroadcastMsg
         * @static
         * @param {pb.IBroadcastMsg} m BroadcastMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        BroadcastMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.buf != null && Object.hasOwnProperty.call(m, "buf"))
                w.uint32(18).bytes(m.buf);
            if (m.uids != null && m.uids.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.uids.length; ++i)
                    w.int32(m.uids[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a BroadcastMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.BroadcastMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.BroadcastMsg} BroadcastMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.BroadcastMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.buf = r.bytes();
                    break;
                case 3:
                    if (!(m.uids && m.uids.length))
                        m.uids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.uids.push(r.int32());
                    } else
                        m.uids.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BroadcastMsg;
    })();

    pb.CmdCgsConf = (function() {

        /**
         * Properties of a CmdCgsConf.
         * @memberof pb
         * @interface ICmdCgsConf
         * @property {number|null} [id] CmdCgsConf id
         * @property {string|null} [awardJson] CmdCgsConf awardJson
         */

        /**
         * Constructs a new CmdCgsConf.
         * @memberof pb
         * @classdesc Represents a CmdCgsConf.
         * @implements ICmdCgsConf
         * @constructor
         * @param {pb.ICmdCgsConf=} [p] Properties to set
         */
        function CmdCgsConf(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CmdCgsConf id.
         * @member {number} id
         * @memberof pb.CmdCgsConf
         * @instance
         */
        CmdCgsConf.prototype.id = 0;

        /**
         * CmdCgsConf awardJson.
         * @member {string} awardJson
         * @memberof pb.CmdCgsConf
         * @instance
         */
        CmdCgsConf.prototype.awardJson = "";

        /**
         * Encodes the specified CmdCgsConf message. Does not implicitly {@link pb.CmdCgsConf.verify|verify} messages.
         * @function encode
         * @memberof pb.CmdCgsConf
         * @static
         * @param {pb.ICmdCgsConf} m CmdCgsConf message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CmdCgsConf.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.awardJson != null && Object.hasOwnProperty.call(m, "awardJson"))
                w.uint32(18).string(m.awardJson);
            return w;
        };

        /**
         * Decodes a CmdCgsConf message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CmdCgsConf
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {pb.CmdCgsConf} CmdCgsConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CmdCgsConf.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pb.CmdCgsConf();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.awardJson = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CmdCgsConf;
    })();

    pb.MasterService = (function() {

        /**
         * Constructs a new MasterService service.
         * @memberof pb
         * @classdesc Represents a MasterService
         * @extends protobuf.rpc.Service
         * @constructor
         * @param {protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function MasterService(rpcImpl, requestDelimited, responseDelimited) {
            protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (MasterService.prototype = Object.create(protobuf.rpc.Service.prototype)).constructor = MasterService;

        /**
         * Callback as used by {@link pb.MasterService#newUid}.
         * @memberof pb.MasterService
         * @typedef NewUidCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdNewUidReply} [response] CmdNewUidReply
         */

        /**
         * Calls NewUid.
         * @function newUid
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @param {pb.MasterService.NewUidCallback} callback Node-style callback called with the error, if any, and CmdNewUidReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.newUid = function newUid(request, callback) {
            return this.rpcCall(newUid, $root.pb.VoidRequest, $root.pb.CmdNewUidReply, request, callback);
        }, "name", { value: "NewUid" });

        /**
         * Calls NewUid.
         * @function newUid
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @returns {Promise<pb.CmdNewUidReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#getGateAddr}.
         * @memberof pb.MasterService
         * @typedef GetGateAddrCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdGateAddrReply} [response] CmdGateAddrReply
         */

        /**
         * Calls GetGateAddr.
         * @function getGateAddr
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdGateAddr} request CmdGateAddr message or plain object
         * @param {pb.MasterService.GetGateAddrCallback} callback Node-style callback called with the error, if any, and CmdGateAddrReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.getGateAddr = function getGateAddr(request, callback) {
            return this.rpcCall(getGateAddr, $root.pb.CmdGateAddr, $root.pb.CmdGateAddrReply, request, callback);
        }, "name", { value: "GetGateAddr" });

        /**
         * Calls GetGateAddr.
         * @function getGateAddr
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdGateAddr} request CmdGateAddr message or plain object
         * @returns {Promise<pb.CmdGateAddrReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#userLogin}.
         * @memberof pb.MasterService
         * @typedef UserLoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdUserLoginReply} [response] CmdUserLoginReply
         */

        /**
         * Calls UserLogin.
         * @function userLogin
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdUserLogin} request CmdUserLogin message or plain object
         * @param {pb.MasterService.UserLoginCallback} callback Node-style callback called with the error, if any, and CmdUserLoginReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.userLogin = function userLogin(request, callback) {
            return this.rpcCall(userLogin, $root.pb.CmdUserLogin, $root.pb.CmdUserLoginReply, request, callback);
        }, "name", { value: "UserLogin" });

        /**
         * Calls UserLogin.
         * @function userLogin
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdUserLogin} request CmdUserLogin message or plain object
         * @returns {Promise<pb.CmdUserLoginReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#userGameLogin}.
         * @memberof pb.MasterService
         * @typedef UserGameLoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.VoidReply} [response] VoidReply
         */

        /**
         * Calls UserGameLogin.
         * @function userGameLogin
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdUserGameLogin} request CmdUserGameLogin message or plain object
         * @param {pb.MasterService.UserGameLoginCallback} callback Node-style callback called with the error, if any, and VoidReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.userGameLogin = function userGameLogin(request, callback) {
            return this.rpcCall(userGameLogin, $root.pb.CmdUserGameLogin, $root.pb.VoidReply, request, callback);
        }, "name", { value: "UserGameLogin" });

        /**
         * Calls UserGameLogin.
         * @function userGameLogin
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdUserGameLogin} request CmdUserGameLogin message or plain object
         * @returns {Promise<pb.VoidReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#userGameLogout}.
         * @memberof pb.MasterService
         * @typedef UserGameLogoutCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.VoidReply} [response] VoidReply
         */

        /**
         * Calls UserGameLogout.
         * @function userGameLogout
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdUserGameLogout} request CmdUserGameLogout message or plain object
         * @param {pb.MasterService.UserGameLogoutCallback} callback Node-style callback called with the error, if any, and VoidReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.userGameLogout = function userGameLogout(request, callback) {
            return this.rpcCall(userGameLogout, $root.pb.CmdUserGameLogout, $root.pb.VoidReply, request, callback);
        }, "name", { value: "UserGameLogout" });

        /**
         * Calls UserGameLogout.
         * @function userGameLogout
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdUserGameLogout} request CmdUserGameLogout message or plain object
         * @returns {Promise<pb.VoidReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#newRoomId}.
         * @memberof pb.MasterService
         * @typedef NewRoomIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdNewRoomIdReply} [response] CmdNewRoomIdReply
         */

        /**
         * Calls NewRoomId.
         * @function newRoomId
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @param {pb.MasterService.NewRoomIdCallback} callback Node-style callback called with the error, if any, and CmdNewRoomIdReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.newRoomId = function newRoomId(request, callback) {
            return this.rpcCall(newRoomId, $root.pb.VoidRequest, $root.pb.CmdNewRoomIdReply, request, callback);
        }, "name", { value: "NewRoomId" });

        /**
         * Calls NewRoomId.
         * @function newRoomId
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @returns {Promise<pb.CmdNewRoomIdReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#syncRooms}.
         * @memberof pb.MasterService
         * @typedef SyncRoomsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.VoidReply} [response] VoidReply
         */

        /**
         * Calls SyncRooms.
         * @function syncRooms
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IRoomList} request RoomList message or plain object
         * @param {pb.MasterService.SyncRoomsCallback} callback Node-style callback called with the error, if any, and VoidReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.syncRooms = function syncRooms(request, callback) {
            return this.rpcCall(syncRooms, $root.pb.RoomList, $root.pb.VoidReply, request, callback);
        }, "name", { value: "SyncRooms" });

        /**
         * Calls SyncRooms.
         * @function syncRooms
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IRoomList} request RoomList message or plain object
         * @returns {Promise<pb.VoidReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#enterRoom}.
         * @memberof pb.MasterService
         * @typedef EnterRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdRoomEnterReply} [response] CmdRoomEnterReply
         */

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdRoomEnter} request CmdRoomEnter message or plain object
         * @param {pb.MasterService.EnterRoomCallback} callback Node-style callback called with the error, if any, and CmdRoomEnterReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.enterRoom = function enterRoom(request, callback) {
            return this.rpcCall(enterRoom, $root.pb.CmdRoomEnter, $root.pb.CmdRoomEnterReply, request, callback);
        }, "name", { value: "EnterRoom" });

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof pb.MasterService
         * @instance
         * @param {pb.ICmdRoomEnter} request CmdRoomEnter message or plain object
         * @returns {Promise<pb.CmdRoomEnterReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.MasterService#heartBeat}.
         * @memberof pb.MasterService
         * @typedef HeartBeatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.VoidReply} [response] VoidReply
         */

        /**
         * Calls HeartBeat.
         * @function heartBeat
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @param {pb.MasterService.HeartBeatCallback} callback Node-style callback called with the error, if any, and VoidReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MasterService.prototype.heartBeat = function heartBeat(request, callback) {
            return this.rpcCall(heartBeat, $root.pb.VoidRequest, $root.pb.VoidReply, request, callback);
        }, "name", { value: "HeartBeat" });

        /**
         * Calls HeartBeat.
         * @function heartBeat
         * @memberof pb.MasterService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @returns {Promise<pb.VoidReply>} Promise
         * @variation 2
         */

        return MasterService;
    })();

    pb.GameService = (function() {

        /**
         * Constructs a new GameService service.
         * @memberof pb
         * @classdesc Represents a GameService
         * @extends protobuf.rpc.Service
         * @constructor
         * @param {protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GameService(rpcImpl, requestDelimited, responseDelimited) {
            protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GameService.prototype = Object.create(protobuf.rpc.Service.prototype)).constructor = GameService;

        /**
         * Callback as used by {@link pb.GameService#getGameData}.
         * @memberof pb.GameService
         * @typedef GetGameDataCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdUserGameDataReply} [response] CmdUserGameDataReply
         */

        /**
         * Calls GetGameData.
         * @function getGameData
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdUserGameData} request CmdUserGameData message or plain object
         * @param {pb.GameService.GetGameDataCallback} callback Node-style callback called with the error, if any, and CmdUserGameDataReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.getGameData = function getGameData(request, callback) {
            return this.rpcCall(getGameData, $root.pb.CmdUserGameData, $root.pb.CmdUserGameDataReply, request, callback);
        }, "name", { value: "GetGameData" });

        /**
         * Calls GetGameData.
         * @function getGameData
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdUserGameData} request CmdUserGameData message or plain object
         * @returns {Promise<pb.CmdUserGameDataReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#addGameProperties}.
         * @memberof pb.GameService
         * @typedef AddGamePropertiesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls AddGameProperties.
         * @function addGameProperties
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdGameProperties} request CmdGameProperties message or plain object
         * @param {pb.GameService.AddGamePropertiesCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.addGameProperties = function addGameProperties(request, callback) {
            return this.rpcCall(addGameProperties, $root.pb.CmdGameProperties, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "AddGameProperties" });

        /**
         * Calls AddGameProperties.
         * @function addGameProperties
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdGameProperties} request CmdGameProperties message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#resetGameProperties}.
         * @memberof pb.GameService
         * @typedef ResetGamePropertiesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls ResetGameProperties.
         * @function resetGameProperties
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdGameProperties} request CmdGameProperties message or plain object
         * @param {pb.GameService.ResetGamePropertiesCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.resetGameProperties = function resetGameProperties(request, callback) {
            return this.rpcCall(resetGameProperties, $root.pb.CmdGameProperties, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "ResetGameProperties" });

        /**
         * Calls ResetGameProperties.
         * @function resetGameProperties
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdGameProperties} request CmdGameProperties message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#openCgs}.
         * @memberof pb.GameService
         * @typedef OpenCgsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls OpenCgs.
         * @function openCgs
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdCgsConf} request CmdCgsConf message or plain object
         * @param {pb.GameService.OpenCgsCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.openCgs = function openCgs(request, callback) {
            return this.rpcCall(openCgs, $root.pb.CmdCgsConf, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "OpenCgs" });

        /**
         * Calls OpenCgs.
         * @function openCgs
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdCgsConf} request CmdCgsConf message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#closeCgs}.
         * @memberof pb.GameService
         * @typedef CloseCgsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls CloseCgs.
         * @function closeCgs
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdCgsConf} request CmdCgsConf message or plain object
         * @param {pb.GameService.CloseCgsCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.closeCgs = function closeCgs(request, callback) {
            return this.rpcCall(closeCgs, $root.pb.CmdCgsConf, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "CloseCgs" });

        /**
         * Calls CloseCgs.
         * @function closeCgs
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdCgsConf} request CmdCgsConf message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#setCgsAward}.
         * @memberof pb.GameService
         * @typedef SetCgsAwardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls SetCgsAward.
         * @function setCgsAward
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdCgsConf} request CmdCgsConf message or plain object
         * @param {pb.GameService.SetCgsAwardCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.setCgsAward = function setCgsAward(request, callback) {
            return this.rpcCall(setCgsAward, $root.pb.CmdCgsConf, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "SetCgsAward" });

        /**
         * Calls SetCgsAward.
         * @function setCgsAward
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdCgsConf} request CmdCgsConf message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#execute}.
         * @memberof pb.GameService
         * @typedef ExecuteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ErrorInfo} [response] ErrorInfo
         */

        /**
         * Calls Execute.
         * @function execute
         * @memberof pb.GameService
         * @instance
         * @param {pb.IServerCmd} request ServerCmd message or plain object
         * @param {pb.GameService.ExecuteCallback} callback Node-style callback called with the error, if any, and ErrorInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.execute = function execute(request, callback) {
            return this.rpcCall(execute, $root.pb.ServerCmd, $root.pb.ErrorInfo, request, callback);
        }, "name", { value: "Execute" });

        /**
         * Calls Execute.
         * @function execute
         * @memberof pb.GameService
         * @instance
         * @param {pb.IServerCmd} request ServerCmd message or plain object
         * @returns {Promise<pb.ErrorInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#process}.
         * @memberof pb.GameService
         * @typedef ProcessCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.Message} [response] Message
         */

        /**
         * Calls Process.
         * @function process
         * @memberof pb.GameService
         * @instance
         * @param {pb.IMessage} request Message message or plain object
         * @param {pb.GameService.ProcessCallback} callback Node-style callback called with the error, if any, and Message
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.process = function process(request, callback) {
            return this.rpcCall(process, $root.pb.Message, $root.pb.Message, request, callback);
        }, "name", { value: "Process" });

        /**
         * Calls Process.
         * @function process
         * @memberof pb.GameService
         * @instance
         * @param {pb.IMessage} request Message message or plain object
         * @returns {Promise<pb.Message>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#sendMessage}.
         * @memberof pb.GameService
         * @typedef SendMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.VoidReply} [response] VoidReply
         */

        /**
         * Calls SendMessage.
         * @function sendMessage
         * @memberof pb.GameService
         * @instance
         * @param {pb.IMessage} request Message message or plain object
         * @param {pb.GameService.SendMessageCallback} callback Node-style callback called with the error, if any, and VoidReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.sendMessage = function sendMessage(request, callback) {
            return this.rpcCall(sendMessage, $root.pb.Message, $root.pb.VoidReply, request, callback);
        }, "name", { value: "SendMessage" });

        /**
         * Calls SendMessage.
         * @function sendMessage
         * @memberof pb.GameService
         * @instance
         * @param {pb.IMessage} request Message message or plain object
         * @returns {Promise<pb.VoidReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#syncRooms}.
         * @memberof pb.GameService
         * @typedef SyncRoomsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.RoomList} [response] RoomList
         */

        /**
         * Calls SyncRooms.
         * @function syncRooms
         * @memberof pb.GameService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @param {pb.GameService.SyncRoomsCallback} callback Node-style callback called with the error, if any, and RoomList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.syncRooms = function syncRooms(request, callback) {
            return this.rpcCall(syncRooms, $root.pb.VoidRequest, $root.pb.RoomList, request, callback);
        }, "name", { value: "SyncRooms" });

        /**
         * Calls SyncRooms.
         * @function syncRooms
         * @memberof pb.GameService
         * @instance
         * @param {pb.IVoidRequest} request VoidRequest message or plain object
         * @returns {Promise<pb.RoomList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#forwardRoomMsg}.
         * @memberof pb.GameService
         * @typedef ForwardRoomMsgCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.Message} [response] Message
         */

        /**
         * Calls ForwardRoomMsg.
         * @function forwardRoomMsg
         * @memberof pb.GameService
         * @instance
         * @param {pb.IMessage} request Message message or plain object
         * @param {pb.GameService.ForwardRoomMsgCallback} callback Node-style callback called with the error, if any, and Message
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.forwardRoomMsg = function forwardRoomMsg(request, callback) {
            return this.rpcCall(forwardRoomMsg, $root.pb.Message, $root.pb.Message, request, callback);
        }, "name", { value: "ForwardRoomMsg" });

        /**
         * Calls ForwardRoomMsg.
         * @function forwardRoomMsg
         * @memberof pb.GameService
         * @instance
         * @param {pb.IMessage} request Message message or plain object
         * @returns {Promise<pb.Message>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#createRoom}.
         * @memberof pb.GameService
         * @typedef CreateRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdRoomCreateReply} [response] CmdRoomCreateReply
         */

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdRoomCreate} request CmdRoomCreate message or plain object
         * @param {pb.GameService.CreateRoomCallback} callback Node-style callback called with the error, if any, and CmdRoomCreateReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.createRoom = function createRoom(request, callback) {
            return this.rpcCall(createRoom, $root.pb.CmdRoomCreate, $root.pb.CmdRoomCreateReply, request, callback);
        }, "name", { value: "CreateRoom" });

        /**
         * Calls CreateRoom.
         * @function createRoom
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdRoomCreate} request CmdRoomCreate message or plain object
         * @returns {Promise<pb.CmdRoomCreateReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#enterRoom}.
         * @memberof pb.GameService
         * @typedef EnterRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdRoomEnterReply} [response] CmdRoomEnterReply
         */

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdRoomEnter} request CmdRoomEnter message or plain object
         * @param {pb.GameService.EnterRoomCallback} callback Node-style callback called with the error, if any, and CmdRoomEnterReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.enterRoom = function enterRoom(request, callback) {
            return this.rpcCall(enterRoom, $root.pb.CmdRoomEnter, $root.pb.CmdRoomEnterReply, request, callback);
        }, "name", { value: "EnterRoom" });

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdRoomEnter} request CmdRoomEnter message or plain object
         * @returns {Promise<pb.CmdRoomEnterReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.GameService#leaveRoom}.
         * @memberof pb.GameService
         * @typedef LeaveRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CmdRoomLeaveReply} [response] CmdRoomLeaveReply
         */

        /**
         * Calls LeaveRoom.
         * @function leaveRoom
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdRoomLeave} request CmdRoomLeave message or plain object
         * @param {pb.GameService.LeaveRoomCallback} callback Node-style callback called with the error, if any, and CmdRoomLeaveReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameService.prototype.leaveRoom = function leaveRoom(request, callback) {
            return this.rpcCall(leaveRoom, $root.pb.CmdRoomLeave, $root.pb.CmdRoomLeaveReply, request, callback);
        }, "name", { value: "LeaveRoom" });

        /**
         * Calls LeaveRoom.
         * @function leaveRoom
         * @memberof pb.GameService
         * @instance
         * @param {pb.ICmdRoomLeave} request CmdRoomLeave message or plain object
         * @returns {Promise<pb.CmdRoomLeaveReply>} Promise
         * @variation 2
         */

        return GameService;
    })();

    return pb;
})();