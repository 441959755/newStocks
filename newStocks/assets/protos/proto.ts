declare global {
    // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

    /** Namespace pb. */
    export namespace pb {

        /** Constant enum. */
        enum Constant {
            Constant_NULL = 0,
            MsgHead_Len = 10,
            MsgMaxBody_Len = 1024000
        }

        /** ErrorCode enum. */
        enum ErrorCode {
            CS_OK = 0,
            CS_UNKNOW = 1,
            CS_SERVER_ERROR = 2,
            CS_INVALID_PARAMETER = 3,
            CS_INVALID_ACCOUNT = 4,
            CS_INVALID_PASSWORD = 5,
            CS_TIMEOUT = 6,
            CS_CHECK_FAILURE = 7,
            CS_CHECK_FAILURE_CAPITAL = 8,
            CS_CHECK_FAILURE_STOCK = 9,
            CS_CHECK_FAILURE_ORDER = 10,
            CS_NO_TRADING_TIME = 11,
            CS_NO_REGISTRY_TIME = 12,
            CS_NO_REGISTRY = 13,
            CS_ALREADY_REGISTRY = 14,
            CS_CHECK_FAILURE_CGDS_ID = 15,
            CS_CHECK_FAILURE_TIME = 16,
            CS_CHECK_FAILURE_PROPERTY = 17,
            CS_CHECK_FAILURE_TOKEN = 18,
            CS_ALREADY_UNLOCK = 19,
            CS_CHECK_PHONE_UNREGISTRY = 20,
            CS_CHECK_PHONE_UNBOUND = 21,
            CS_CHECK_ACCOUNT_FORBIDDEN = 22,
            CS_INVALID_SMSCODE = 23,
            CS_CHECK_FAILURE_ONCE = 24,
            CS_PAYMENT_FAILURE = 25,
            CS_ROOM_INVALID = 100,
            CS_ROOM_FULL = 101,
            CS_ROOM_FAIL_CHECKIN = 102,
            CS_ROOM_NOT_READY = 103
        }

        /** MessageId enum. */
        enum MessageId {
            MessageId_NULL = 0,
            Cmd_Save_Stock2Db = 101,
            Cmd_Make_StockList = 103,
            Sync_S2C_QuoteItem = 1000,
            Sync_S2C_GameProperty = 1002,
            Sync_S2C_GameCounter = 1004,
            Sync_S2C_GameSmxl = 1006,
            Sync_S2C_GameCg = 1008,
            Sync_S2C_GameMncg = 1010,
            Sync_S2C_GameCgds = 1012,
            Sync_S2C_FirstLoginToday = 1014,
            Sync_S2C_GameCg_GD = 1016,
            Sync_S2C_GameTimes = 1018,
            Sync_S2C_StockOrderResult = 1020,
            Sync_S2C_MutipleLogin = 1022,
            Sync_S2C_TaskProgress = 1024,
            Sync_S2C_ActivityConf = 1026,
            Sync_S2C_GameCgdsItem = 1028,
            Sync_S2C_GoldAwardPrompt = 1030,
            Sync_S2C_UnregistryAccount = 1032,
            Sync_S2C_CgdsConf = 1034,
            Sync_S2C_RecommendStock = 1036,
            Sync_S2C_InviterState = 1037,
            Sync_S2C_Broadcast = 1100,
            Sync_S2C_Message = 1102,
            Sync_C2S_GameHeart = 1200,
            Sync_C2S_Message = 1202,
            Sync_C2S_PaymentOk = 1204,
            Req_QuoteSubscribe = 2001,
            Rep_QuoteSubscribe = 2002,
            Req_QuoteQuery = 2003,
            Rep_QuoteQuery = 2004,
            Req_QuoteQueryFuture = 2005,
            Rep_QuoteQueryFuture = 2006,
            Req_IsTradingDay = 2007,
            Rep_IsTradingDay = 2008,
            Req_QueryTradingDay = 2009,
            Rep_QueryTradingDay = 2010,
            Req_QueryAiStockList = 2011,
            Rep_QueryAiStockList = 2012,
            Req_QueryAiSignal = 2013,
            Rep_QueryAiSignal = 2014,
            Req_EditAiStockList = 2015,
            Rep_EditAiStockList = 2016,
            Req_RecommendStock = 2017,
            Rep_RecommendStock = 2018,
            Req_Hall_UploadIcon = 3001,
            Rep_Hall_UploadIcon = 3002,
            Req_Hall_DownloadIcon = 3003,
            Rep_Hall_DownploadIcon = 3004,
            Req_Hall_EditIcon = 3005,
            Rep_Hall_EditIcon = 3006,
            Req_Hall_EditNick = 3007,
            Rep_Hall_EditNick = 3008,
            Req_Hall_EditLocation = 3009,
            Rep_Hall_EditLocation = 3010,
            Req_Hall_EditGender = 3011,
            Rep_Hall_EditGender = 3012,
            Req_Hall_BackBag = 3013,
            Rep_Hall_BackBag = 3014,
            Req_Hall_GetItem = 3015,
            Rep_Hall_GetItem = 3016,
            Req_Hall_EditFavorList = 3017,
            Rep_Hall_EditFavorList = 3018,
            Req_Hall_QueryPlayer = 3019,
            Rep_Hall_QueryPlayer = 3020,
            Req_Hall_SaveStudyProgress = 3021,
            Rep_Hall_SaveStudyProgress = 3022,
            Req_Hall_GetDailyTaskAward = 3023,
            Rep_Hall_GetDailyTaskAward = 3024,
            Req_Hall_UnlockGame = 3025,
            Rep_Hall_UnlockGame = 3026,
            Req_Hall_GetWeeklyAward = 3027,
            Rep_Hall_GetWeeklyAward = 3028,
            Req_Hall_QueryEventLog = 3029,
            Rep_Hall_QueryEventLog = 3030,
            Req_Hall_ShopOrder = 3031,
            Rep_Hall_ShopOrder = 3032,
            Req_Hall_ShopOrderQuery = 3033,
            Rep_Hall_ShopOrderQuery = 3034,
            Req_Hall_MobileBind = 3035,
            Rep_Hall_MobileBind = 3036,
            Req_Hall_ResetGameCounter = 3037,
            Rep_Hall_ResetGameCounter = 3038,
            Req_Hall_GetLevelRanking = 3039,
            Rep_Hall_GetLevelRanking = 3040,
            Req_Hall_GetFameRanking = 3041,
            Rep_Hall_GetFameRanking = 3042,
            Req_Hall_GetFameRankingWeekly = 3043,
            Rep_Hall_GetFameRankingWeekly = 3044,
            Req_Hall_GetActivityLogs = 3045,
            Rep_Hall_GetActivityLogs = 3046,
            Req_Hall_GetDailyAdAward = 3047,
            Rep_Hall_GetDailyAdAward = 3048,
            Req_Hall_Get7Award = 3049,
            Rep_Hall_Get7Award = 3050,
            Req_Hall_GetBrokenAward = 3051,
            Rep_Hall_GetBrokenAward = 3052,
            Req_Hall_Exchange = 3053,
            Rep_Hall_Exchange = 3054,
            Req_Hall_GetInviterAward = 3055,
            Rep_Hall_GetInviterAward = 3056,
            Req_Hall_Unregistry = 3997,
            Rep_Hall_Unregistry = 3998,
            Req_Hall_Logout = 3999,
            Rep_Hall_Logout = 4000,
            Req_Game_Login = 4001,
            Rep_Game_Login = 4002,
            Req_Game_Start = 4003,
            Rep_Game_Start = 4004,
            Req_Game_Over = 4005,
            Rep_Game_Over = 4006,
            Req_Game_QueryGameResult = 4007,
            Rep_Game_QueryGameResult = 4008,
            Req_Game_GetGameOperation = 4009,
            Rep_Game_GetGameOperation = 4010,
            Req_Game_SmxlReport = 4011,
            Rep_Game_SmxlReport = 4012,
            Req_Game_SmxlReset = 4013,
            Rep_Game_SmxlReset = 4014,
            Req_Game_CgsGetConf = 4015,
            Rep_Game_CgsGetConf = 4016,
            Req_Game_CgsGetClearanceRank = 4017,
            Rep_Game_CgsGetClearanceRank = 4018,
            Req_Game_CgsGetStageRank = 4019,
            Rep_Game_CgsGetStageRank = 4020,
            Req_Game_CgsGetSeasonRank = 4021,
            Rep_Game_CgsGetSeasonRank = 4022,
            Req_Game_CgsGetStageAward = 4023,
            Rep_Game_CgsGetStageAward = 4024,
            Req_Game_OrderQuery = 4025,
            Rep_Game_OrderQuery = 4026,
            Req_Game_Order = 4027,
            Rep_Game_Order = 4028,
            Req_Game_OrderCancel = 4029,
            Rep_Game_OrderCancel = 4030,
            Req_Game_MncgExchange = 4031,
            Rep_Game_MncgExchange = 4032,
            Req_Game_MncgEditStockList = 4033,
            Rep_Game_MncgEditStockList = 4034,
            Req_Game_CgdsList = 4035,
            Rep_Game_CgdsList = 4036,
            Req_Game_CgdsReg = 4037,
            Rep_Game_CgdsReg = 4038,
            Req_Game_CgdsRanking = 4039,
            Rep_Game_CgdsRanking = 4040,
            Req_Game_ZsjcBettingList = 4041,
            Rep_Game_ZsjcBettingList = 4042,
            Req_Game_ZsjcBet = 4043,
            Rep_Game_ZsjcBet = 4044,
            Req_Game_ZsjcRanking = 4045,
            Rep_Game_ZsjcRanking = 4046,
            Req_Game_ZsjcPlayerBettingList = 4047,
            Rep_Game_ZsjcPlayerBettingList = 4048,
            Req_Game_ZsjcBettingResultList = 4049,
            Rep_Game_ZsjcBettingResultList = 4050,
            Req_Room_Create = 5003,
            Rep_Room_Create = 5004,
            Req_Room_Enter = 5005,
            Rep_Room_Enter = 5006,
            Req_Room_Leave = 5007,
            Rep_Room_Leave = 5008,
            Req_Room_Ready = 5009,
            Rep_Room_Ready = 5010,
            Sync_Room_Enter = 5200,
            Sync_Room_Leave = 5202,
            Sync_Room_Enter_Self = 5204,
            Sync_Room_Leave_Self = 5206,
            Sync_Room_LostConn = 5208,
            Sync_Room_ReConn = 5210,
            Sync_Room_Ready = 5212,
            Sync_Room_GameStatus = 5214,
            Sync_Room_GameOp = 5216,
            Sync_Room_GameResult = 5218,
            S2S_HeartBeat = 10001,
            S2S_Update_PlayerProperty = 10003,
            S2S_Update_PlayerGameCounter = 10005,
            S2S_OrderCancel = 10007,
            S2S_Sync_Cgds = 10009,
            S2S_Set_CgdsTitle = 10011,
            S2S_Set_CgdsLogo = 10013,
            S2S_Set_CgdsUrl = 10015,
            S2S_Set_CgdsConf = 10017,
            S2S_Set_CgdsAward = 10019,
            S2S_Open_Cgds = 10021,
            S2S_Close_Cgds = 10023,
            S2S_Reload_Cgds = 10025,
            S2S_Reload_GameConf = 10027,
            S2S_Sync_ZsjcBetting = 10028,
            S2S_Sync_ZsjcState = 10030,
            S2S_Update_DailyTaskProgress = 10032,
            S2S_Sync_Pay = 10034,
            S2S_Sync_PaymentQuery = 10036,
            S2S_Sync_InviteUser = 10037
        }

        /** Properties of a MessageHead. */
        interface IMessageHead {

            /** MessageHead messageId */
            messageId?: (number | null);

            /** MessageHead messageLen */
            messageLen?: (number | null);
        }

        /** Represents a MessageHead. */
        class MessageHead implements IMessageHead {

            /**
             * Constructs a new MessageHead.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IMessageHead);

            /** MessageHead messageId. */
            public messageId: number;

            /** MessageHead messageLen. */
            public messageLen: number;

            /**
             * Encodes the specified MessageHead message. Does not implicitly {@link pb.MessageHead.verify|verify} messages.
             * @param m MessageHead message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IMessageHead, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MessageHead message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns MessageHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.MessageHead;
        }

        /** Properties of an ErrorInfo. */
        interface IErrorInfo {

            /** ErrorInfo code */
            code?: (number | null);

            /** ErrorInfo err */
            err?: (string | null);
        }

        /** Represents an ErrorInfo. */
        class ErrorInfo implements IErrorInfo {

            /**
             * Constructs a new ErrorInfo.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IErrorInfo);

            /** ErrorInfo code. */
            public code: number;

            /** ErrorInfo err. */
            public err: string;

            /**
             * Encodes the specified ErrorInfo message. Does not implicitly {@link pb.ErrorInfo.verify|verify} messages.
             * @param m ErrorInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IErrorInfo, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ErrorInfo;
        }

        /** Properties of a VoidRequest. */
        interface IVoidRequest {
        }

        /** Represents a VoidRequest. */
        class VoidRequest implements IVoidRequest {

            /**
             * Constructs a new VoidRequest.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IVoidRequest);

            /**
             * Encodes the specified VoidRequest message. Does not implicitly {@link pb.VoidRequest.verify|verify} messages.
             * @param m VoidRequest message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IVoidRequest, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a VoidRequest message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns VoidRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.VoidRequest;
        }

        /** Properties of a VoidReply. */
        interface IVoidReply {
        }

        /** Represents a VoidReply. */
        class VoidReply implements IVoidReply {

            /**
             * Constructs a new VoidReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IVoidReply);

            /**
             * Encodes the specified VoidReply message. Does not implicitly {@link pb.VoidReply.verify|verify} messages.
             * @param m VoidReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IVoidReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a VoidReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns VoidReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.VoidReply;
        }

        /** FeeType enum. */
        enum FeeType {
            FeeType_NULL = 0,
            FeeType_RMB = 1,
            FeeType_Diamond = 2,
            FeeType_Coupon = 3
        }

        /** PaymentType enum. */
        enum PaymentType {
            PaymentType_NULL = 0,
            WechatPay = 1,
            ApplePay = 2,
            WechatMiniPay = 3
        }

        /** ItemOrderState enum. */
        enum ItemOrderState {
            ItemOrderState_Init = 0,
            Pay = 1,
            EMS = 2
        }

        /** MessageType enum. */
        enum MessageType {
            MessageType_NULL = 0,
            SystemNotice = 1,
            Popup_Adv = 2,
            Chat = 9,
            RoomChat = 10,
            RoomInvite = 11
        }

        /** GameType enum. */
        enum GameType {
            GameType_NULL = 0,
            ShuangMang = 3,
            DingXiang = 4,
            FenShi = 5,
            ZhiBiao = 10,
            TiaoJianDan = 11,
            QiHuo = 6,
            TiaoZhan = 16,
            JJ_PK = 1,
            JJ_DuoKong = 2,
            JJ_ChuangGuan = 9,
            JJ_QiHuo = 15,
            MoNiChaoGu = 12,
            ChaoGuDaSai = 13,
            GeGuJingChai = 7,
            DaPanJingChai = 8,
            ZhengGu = 17,
            JianGu = 18,
            MaxGameType = 30
        }

        /** GamePropertyId enum. */
        enum GamePropertyId {
            Gold = 0,
            Diamond = 1,
            Vip = 2,
            Exp = 3,
            Level = 4,
            Fame = 5,
            Coupon = 6,
            SVip = 7,
            UnlockDxxl = 20,
            UnlockQhxl = 21,
            UnlockTjdxl = 22,
            UnlockZbxl = 23,
            SVipExpiration = 25,
            K = 26,
            Tester = 27,
            VipExpiration = 28,
            RMB = 29,
            SVip30 = 30,
            SVip31 = 31,
            SVip32 = 32,
            SVip33 = 33,
            SVip34 = 34,
            SVip35 = 35,
            SVip36 = 36,
            SVip37 = 37,
            SVip38 = 38,
            SVip39 = 39,
            SVip40 = 40,
            SVip41 = 41,
            SVip42 = 42,
            SVip43 = 43,
            SVip44 = 44,
            SVip45 = 45,
            SVip46 = 46,
            SVip47 = 47,
            SVip48 = 48,
            SVip49 = 49,
            SVip50 = 50,
            SVip51 = 51,
            SVip52 = 52,
            SVip53 = 53,
            SVip54 = 54,
            SVip55 = 55,
            SVip56 = 56,
            SVip57 = 57,
            SVip58 = 58,
            SVip59 = 59,
            Max = 60
        }

        /** EventId enum. */
        enum EventId {
            EventId_NULL = 0,
            EventId_WeeklyAward = 1,
            EventId_Zsjc = 2
        }

        /** TaskId enum. */
        enum TaskId {
            Pk = 0,
            Dk = 1,
            Zsjc = 2,
            Ggjc = 3,
            Cg = 4,
            MaxDailyTaskId = 5,
            MaxStudyTaskId = 8
        }

        /** GameOperationId enum. */
        enum GameOperationId {
            GameOperationId_NULL = 0,
            Ask = 1,
            Bid = 2,
            Wait = 3,
            Hold = 4,
            Bid_Force = 5,
            Ask_Force = 6,
            Short = 8,
            Long = 9,
            END = 150
        }

        /** GamePkResult enum. */
        enum GamePkResult {
            Draw = 0,
            Win = 1,
            Lost = 2,
            Giveup = -1
        }

        /** ExchangeType enum. */
        enum ExchangeType {
            ExchangeType_NULL = 0,
            ExchangeType_K2Coupon = 1,
            ExchangeType_K2Capital = 2
        }

        /** ExchangeDirection enum. */
        enum ExchangeDirection {
            ExchangeDirection_NULL = 0,
            Forward = 1,
            Reverse = 2
        }

        /** OrderType enum. */
        enum OrderType {
            OrderType_NULL = 0,
            AskMarket = 1,
            BidMarket = 2,
            AskLimit = 3,
            BidLimit = 4,
            AskLimit_Cancel = 5,
            BidLimit_Cancel = 6,
            BidMarket_Auto = 7
        }

        /** OrderState enum. */
        enum OrderState {
            Init = 0,
            Partial = 1,
            Done = 2,
            ManulCancel = 3,
            AutoCancel = 4
        }

        /** Properties of a BackbagGrid. */
        interface IBackbagGrid {

            /** BackbagGrid properties */
            properties?: (string | null);

            /** BackbagGrid ts */
            ts?: (number | null);

            /** BackbagGrid memo */
            memo?: (string | null);
        }

        /** Represents a BackbagGrid. */
        class BackbagGrid implements IBackbagGrid {

            /**
             * Constructs a new BackbagGrid.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IBackbagGrid);

            /** BackbagGrid properties. */
            public properties: string;

            /** BackbagGrid ts. */
            public ts: number;

            /** BackbagGrid memo. */
            public memo: string;

            /**
             * Encodes the specified BackbagGrid message. Does not implicitly {@link pb.BackbagGrid.verify|verify} messages.
             * @param m BackbagGrid message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IBackbagGrid, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a BackbagGrid message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BackbagGrid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.BackbagGrid;
        }

        /** Properties of a Backbag. */
        interface IBackbag {

            /** Backbag grids */
            grids?: (pb.IBackbagGrid[] | null);
        }

        /** Represents a Backbag. */
        class Backbag implements IBackbag {

            /**
             * Constructs a new Backbag.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IBackbag);

            /** Backbag grids. */
            public grids: pb.IBackbagGrid[];

            /**
             * Encodes the specified Backbag message. Does not implicitly {@link pb.Backbag.verify|verify} messages.
             * @param m Backbag message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IBackbag, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Backbag message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Backbag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.Backbag;
        }

        /** Properties of a GameCounter. */
        interface IGameCounter {

            /** GameCounter game */
            game?: (pb.GameType | null);

            /** GameCounter win */
            win?: (number | null);

            /** GameCounter lose */
            lose?: (number | null);
        }

        /** Represents a GameCounter. */
        class GameCounter implements IGameCounter {

            /**
             * Constructs a new GameCounter.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGameCounter);

            /** GameCounter game. */
            public game: pb.GameType;

            /** GameCounter win. */
            public win: number;

            /** GameCounter lose. */
            public lose: number;

            /**
             * Encodes the specified GameCounter message. Does not implicitly {@link pb.GameCounter.verify|verify} messages.
             * @param m GameCounter message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGameCounter, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameCounter message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameCounter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GameCounter;
        }

        /** Properties of a GameCounters. */
        interface IGameCounters {

            /** GameCounters items */
            items?: (pb.IGameCounter[] | null);
        }

        /** Represents a GameCounters. */
        class GameCounters implements IGameCounters {

            /**
             * Constructs a new GameCounters.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGameCounters);

            /** GameCounters items. */
            public items: pb.IGameCounter[];

            /**
             * Encodes the specified GameCounters message. Does not implicitly {@link pb.GameCounters.verify|verify} messages.
             * @param m GameCounters message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGameCounters, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameCounters message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameCounters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GameCounters;
        }

        /** Properties of a TodayGameTimes. */
        interface ITodayGameTimes {

            /** TodayGameTimes counter */
            counter?: (number[] | null);
        }

        /** Represents a TodayGameTimes. */
        class TodayGameTimes implements ITodayGameTimes {

            /**
             * Constructs a new TodayGameTimes.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ITodayGameTimes);

            /** TodayGameTimes counter. */
            public counter: number[];

            /**
             * Encodes the specified TodayGameTimes message. Does not implicitly {@link pb.TodayGameTimes.verify|verify} messages.
             * @param m TodayGameTimes message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ITodayGameTimes, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a TodayGameTimes message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns TodayGameTimes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.TodayGameTimes;
        }

        /** Properties of a SmxlState. */
        interface ISmxlState {

            /** SmxlState resetTs */
            resetTs?: (number | null);

            /** SmxlState resetCounter */
            resetCounter?: (number | null);

            /** SmxlState resetTsPremonth */
            resetTsPremonth?: (number | null);

            /** SmxlState lastMonthReportTs */
            lastMonthReportTs?: (number | null);

            /** SmxlState goldInit */
            goldInit?: (number | null);

            /** SmxlState gold */
            gold?: (number | null);

            /** SmxlState todayTs */
            todayTs?: (number | null);

            /** SmxlState todayTimes */
            todayTimes?: (number | null);
        }

        /** Represents a SmxlState. */
        class SmxlState implements ISmxlState {

            /**
             * Constructs a new SmxlState.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ISmxlState);

            /** SmxlState resetTs. */
            public resetTs: number;

            /** SmxlState resetCounter. */
            public resetCounter: number;

            /** SmxlState resetTsPremonth. */
            public resetTsPremonth: number;

            /** SmxlState lastMonthReportTs. */
            public lastMonthReportTs: number;

            /** SmxlState goldInit. */
            public goldInit: number;

            /** SmxlState gold. */
            public gold: number;

            /** SmxlState todayTs. */
            public todayTs: number;

            /** SmxlState todayTimes. */
            public todayTimes: number;

            /**
             * Encodes the specified SmxlState message. Does not implicitly {@link pb.SmxlState.verify|verify} messages.
             * @param m SmxlState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ISmxlState, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SmxlState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SmxlState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.SmxlState;
        }

        /** Properties of a CgLogAward. */
        interface ICgLogAward {

            /** CgLogAward stage */
            stage?: (number | null);

            /** CgLogAward awarded */
            awarded?: (boolean | null);

            /** CgLogAward gotten */
            gotten?: (boolean | null);
        }

        /** Represents a CgLogAward. */
        class CgLogAward implements ICgLogAward {

            /**
             * Constructs a new CgLogAward.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgLogAward);

            /** CgLogAward stage. */
            public stage: number;

            /** CgLogAward awarded. */
            public awarded: boolean;

            /** CgLogAward gotten. */
            public gotten: boolean;

            /**
             * Encodes the specified CgLogAward message. Does not implicitly {@link pb.CgLogAward.verify|verify} messages.
             * @param m CgLogAward message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgLogAward, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgLogAward message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgLogAward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgLogAward;
        }

        /** Properties of a CgState. */
        interface ICgState {

            /** CgState seasonId */
            seasonId?: (number | null);

            /** CgState stage */
            stage?: (number | null);

            /** CgState progress */
            progress?: (number | null);

            /** CgState lifes */
            lifes?: (number | null);

            /** CgState win */
            win?: (number | null);

            /** CgState lose */
            lose?: (number | null);

            /** CgState clearance */
            clearance?: (boolean | null);

            /** CgState awards */
            awards?: (pb.ICgLogAward[] | null);
        }

        /** Represents a CgState. */
        class CgState implements ICgState {

            /**
             * Constructs a new CgState.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgState);

            /** CgState seasonId. */
            public seasonId: number;

            /** CgState stage. */
            public stage: number;

            /** CgState progress. */
            public progress: number;

            /** CgState lifes. */
            public lifes: number;

            /** CgState win. */
            public win: number;

            /** CgState lose. */
            public lose: number;

            /** CgState clearance. */
            public clearance: boolean;

            /** CgState awards. */
            public awards: pb.ICgLogAward[];

            /**
             * Encodes the specified CgState message. Does not implicitly {@link pb.CgState.verify|verify} messages.
             * @param m CgState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgState, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgState;
        }

        /** Properties of a MncgState. */
        interface IMncgState {

            /** MncgState account */
            account?: (number | null);

            /** MncgState orderList */
            orderList?: (pb.IStockOrderList | null);

            /** MncgState positionList */
            positionList?: (pb.IStockPositionList | null);

            /** MncgState stockList */
            stockList?: (number[] | null);
        }

        /** Represents a MncgState. */
        class MncgState implements IMncgState {

            /**
             * Constructs a new MncgState.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IMncgState);

            /** MncgState account. */
            public account: number;

            /** MncgState orderList. */
            public orderList?: (pb.IStockOrderList | null);

            /** MncgState positionList. */
            public positionList?: (pb.IStockPositionList | null);

            /** MncgState stockList. */
            public stockList: number[];

            /**
             * Encodes the specified MncgState message. Does not implicitly {@link pb.MncgState.verify|verify} messages.
             * @param m MncgState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IMncgState, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MncgState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns MncgState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.MncgState;
        }

        /** Properties of a CgdsStateItem. */
        interface ICgdsStateItem {

            /** CgdsStateItem id */
            id?: (number | null);

            /** CgdsStateItem state */
            state?: (pb.IMncgState | null);
        }

        /** Represents a CgdsStateItem. */
        class CgdsStateItem implements ICgdsStateItem {

            /**
             * Constructs a new CgdsStateItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgdsStateItem);

            /** CgdsStateItem id. */
            public id: number;

            /** CgdsStateItem state. */
            public state?: (pb.IMncgState | null);

            /**
             * Encodes the specified CgdsStateItem message. Does not implicitly {@link pb.CgdsStateItem.verify|verify} messages.
             * @param m CgdsStateItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgdsStateItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgdsStateItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgdsStateItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgdsStateItem;
        }

        /** Properties of a CgdsState. */
        interface ICgdsState {

            /** CgdsState items */
            items?: (pb.ICgdsStateItem[] | null);
        }

        /** Represents a CgdsState. */
        class CgdsState implements ICgdsState {

            /**
             * Constructs a new CgdsState.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgdsState);

            /** CgdsState items. */
            public items: pb.ICgdsStateItem[];

            /**
             * Encodes the specified CgdsState message. Does not implicitly {@link pb.CgdsState.verify|verify} messages.
             * @param m CgdsState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgdsState, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgdsState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgdsState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgdsState;
        }

        /** Properties of a CgdsStockListItem. */
        interface ICgdsStockListItem {

            /** CgdsStockListItem id */
            id?: (number | null);

            /** CgdsStockListItem stockList */
            stockList?: (number[] | null);
        }

        /** Represents a CgdsStockListItem. */
        class CgdsStockListItem implements ICgdsStockListItem {

            /**
             * Constructs a new CgdsStockListItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgdsStockListItem);

            /** CgdsStockListItem id. */
            public id: number;

            /** CgdsStockListItem stockList. */
            public stockList: number[];

            /**
             * Encodes the specified CgdsStockListItem message. Does not implicitly {@link pb.CgdsStockListItem.verify|verify} messages.
             * @param m CgdsStockListItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgdsStockListItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgdsStockListItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgdsStockListItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgdsStockListItem;
        }

        /** Properties of a ZsjcState. */
        interface IZsjcState {

            /** ZsjcState items */
            items?: (pb.IZsjcGameData[] | null);
        }

        /** Represents a ZsjcState. */
        class ZsjcState implements IZsjcState {

            /**
             * Constructs a new ZsjcState.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IZsjcState);

            /** ZsjcState items. */
            public items: pb.IZsjcGameData[];

            /**
             * Encodes the specified ZsjcState message. Does not implicitly {@link pb.ZsjcState.verify|verify} messages.
             * @param m ZsjcState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IZsjcState, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ZsjcState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ZsjcState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ZsjcState;
        }

        /** Properties of a Tasks. */
        interface ITasks {

            /** Tasks study */
            study?: (pb.ITaskItem[] | null);

            /** Tasks daily */
            daily?: (pb.ITaskItem[] | null);
        }

        /** Represents a Tasks. */
        class Tasks implements ITasks {

            /**
             * Constructs a new Tasks.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ITasks);

            /** Tasks study. */
            public study: pb.ITaskItem[];

            /** Tasks daily. */
            public daily: pb.ITaskItem[];

            /**
             * Encodes the specified Tasks message. Does not implicitly {@link pb.Tasks.verify|verify} messages.
             * @param m Tasks message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ITasks, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Tasks message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Tasks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.Tasks;
        }

        /** Properties of an InviterState. */
        interface IInviterState {

            /** InviterState Total */
            Total?: (number | null);

            /** InviterState Awarded */
            Awarded?: (number[] | null);
        }

        /** Represents an InviterState. */
        class InviterState implements IInviterState {

            /**
             * Constructs a new InviterState.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IInviterState);

            /** InviterState Total. */
            public Total: number;

            /** InviterState Awarded. */
            public Awarded: number[];

            /**
             * Encodes the specified InviterState message. Does not implicitly {@link pb.InviterState.verify|verify} messages.
             * @param m InviterState message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IInviterState, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an InviterState message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns InviterState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.InviterState;
        }

        /** Properties of a GameData. */
        interface IGameData {

            /** GameData uid */
            uid?: (number | null);

            /** GameData nickname */
            nickname?: (string | null);

            /** GameData icon */
            icon?: (string | null);

            /** GameData properties */
            properties?: (number[] | null);

            /** GameData counters */
            counters?: (pb.IGameCounter[] | null);

            /** GameData smlxState */
            smlxState?: (pb.ISmxlState | null);

            /** GameData cgState */
            cgState?: (pb.ICgState | null);

            /** GameData today */
            today?: (number | null);

            /** GameData todayTimes */
            todayTimes?: (number[] | null);

            /** GameData stockList */
            stockList?: (number[] | null);

            /** GameData zsjcState */
            zsjcState?: (pb.IZsjcState | null);

            /** GameData location */
            location?: (string | null);

            /** GameData gender */
            gender?: (string | null);

            /** GameData favorList */
            favorList?: (number[] | null);

            /** GameData tasks */
            tasks?: (pb.ITasks | null);

            /** GameData week */
            week?: (number | null);

            /** GameData mobile */
            mobile?: (string | null);

            /** GameData aiStockList */
            aiStockList?: (number[] | null);

            /** GameData cgdsStockList */
            cgdsStockList?: (pb.ICgdsStockListItem[] | null);

            /** GameData todayAdtimes */
            todayAdtimes?: (number | null);

            /** GameData award7 */
            award7?: (number[] | null);

            /** GameData isEditedNick */
            isEditedNick?: (boolean | null);

            /** GameData isEditedIcon */
            isEditedIcon?: (boolean | null);

            /** GameData cgdsStockListLast */
            cgdsStockListLast?: (number[] | null);

            /** GameData inviterState */
            inviterState?: (pb.IInviterState | null);

            /** GameData isBindedMobile */
            isBindedMobile?: (boolean | null);
        }

        /** Represents a GameData. */
        class GameData implements IGameData {

            /**
             * Constructs a new GameData.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGameData);

            /** GameData uid. */
            public uid: number;

            /** GameData nickname. */
            public nickname: string;

            /** GameData icon. */
            public icon: string;

            /** GameData properties. */
            public properties: number[];

            /** GameData counters. */
            public counters: pb.IGameCounter[];

            /** GameData smlxState. */
            public smlxState?: (pb.ISmxlState | null);

            /** GameData cgState. */
            public cgState?: (pb.ICgState | null);

            /** GameData today. */
            public today: number;

            /** GameData todayTimes. */
            public todayTimes: number[];

            /** GameData stockList. */
            public stockList: number[];

            /** GameData zsjcState. */
            public zsjcState?: (pb.IZsjcState | null);

            /** GameData location. */
            public location: string;

            /** GameData gender. */
            public gender: string;

            /** GameData favorList. */
            public favorList: number[];

            /** GameData tasks. */
            public tasks?: (pb.ITasks | null);

            /** GameData week. */
            public week: number;

            /** GameData mobile. */
            public mobile: string;

            /** GameData aiStockList. */
            public aiStockList: number[];

            /** GameData cgdsStockList. */
            public cgdsStockList: pb.ICgdsStockListItem[];

            /** GameData todayAdtimes. */
            public todayAdtimes: number;

            /** GameData award7. */
            public award7: number[];

            /** GameData isEditedNick. */
            public isEditedNick: boolean;

            /** GameData isEditedIcon. */
            public isEditedIcon: boolean;

            /** GameData cgdsStockListLast. */
            public cgdsStockListLast: number[];

            /** GameData inviterState. */
            public inviterState?: (pb.IInviterState | null);

            /** GameData isBindedMobile. */
            public isBindedMobile: boolean;

            /**
             * Encodes the specified GameData message. Does not implicitly {@link pb.GameData.verify|verify} messages.
             * @param m GameData message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGameData, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GameData;
        }

        /** Properties of a GamePropertyItem. */
        interface IGamePropertyItem {

            /** GamePropertyItem id */
            id?: (pb.GamePropertyId | null);

            /** GamePropertyItem oldValue */
            oldValue?: (number | null);

            /** GamePropertyItem newValue */
            newValue?: (number | null);
        }

        /** Represents a GamePropertyItem. */
        class GamePropertyItem implements IGamePropertyItem {

            /**
             * Constructs a new GamePropertyItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGamePropertyItem);

            /** GamePropertyItem id. */
            public id: pb.GamePropertyId;

            /** GamePropertyItem oldValue. */
            public oldValue: number;

            /** GamePropertyItem newValue. */
            public newValue: number;

            /**
             * Encodes the specified GamePropertyItem message. Does not implicitly {@link pb.GamePropertyItem.verify|verify} messages.
             * @param m GamePropertyItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGamePropertyItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GamePropertyItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GamePropertyItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GamePropertyItem;
        }

        /** Properties of a GameProperties. */
        interface IGameProperties {

            /** GameProperties items */
            items?: (pb.IGamePropertyItem[] | null);
        }

        /** Represents a GameProperties. */
        class GameProperties implements IGameProperties {

            /**
             * Constructs a new GameProperties.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGameProperties);

            /** GameProperties items. */
            public items: pb.IGamePropertyItem[];

            /**
             * Encodes the specified GameProperties message. Does not implicitly {@link pb.GameProperties.verify|verify} messages.
             * @param m GameProperties message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGameProperties, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameProperties message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GameProperties;
        }

        /** Properties of a GameOperationItem. */
        interface IGameOperationItem {

            /** GameOperationItem opId */
            opId?: (pb.GameOperationId | null);

            /** GameOperationItem code */
            code?: (number | null);

            /** GameOperationItem kType */
            kType?: (pb.KType | null);

            /** GameOperationItem kTs */
            kTs?: (number | null);

            /** GameOperationItem kOffset */
            kOffset?: (number | null);

            /** GameOperationItem price */
            price?: (number | null);

            /** GameOperationItem volume */
            volume?: (number | null);

            /** GameOperationItem opTs */
            opTs?: (number | null);

            /** GameOperationItem volFraction */
            volFraction?: (number | null);
        }

        /** Represents a GameOperationItem. */
        class GameOperationItem implements IGameOperationItem {

            /**
             * Constructs a new GameOperationItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGameOperationItem);

            /** GameOperationItem opId. */
            public opId: pb.GameOperationId;

            /** GameOperationItem code. */
            public code: number;

            /** GameOperationItem kType. */
            public kType: pb.KType;

            /** GameOperationItem kTs. */
            public kTs: number;

            /** GameOperationItem kOffset. */
            public kOffset: number;

            /** GameOperationItem price. */
            public price: number;

            /** GameOperationItem volume. */
            public volume: number;

            /** GameOperationItem opTs. */
            public opTs: number;

            /** GameOperationItem volFraction. */
            public volFraction: number;

            /**
             * Encodes the specified GameOperationItem message. Does not implicitly {@link pb.GameOperationItem.verify|verify} messages.
             * @param m GameOperationItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGameOperationItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameOperationItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameOperationItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GameOperationItem;
        }

        /** Properties of a GameOperations. */
        interface IGameOperations {

            /** GameOperations items */
            items?: (pb.IGameOperationItem[] | null);

            /** GameOperations junXian */
            junXian?: (number[] | null);
        }

        /** Represents a GameOperations. */
        class GameOperations implements IGameOperations {

            /**
             * Constructs a new GameOperations.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGameOperations);

            /** GameOperations items. */
            public items: pb.IGameOperationItem[];

            /** GameOperations junXian. */
            public junXian: number[];

            /**
             * Encodes the specified GameOperations message. Does not implicitly {@link pb.GameOperations.verify|verify} messages.
             * @param m GameOperations message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGameOperations, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameOperations message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameOperations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GameOperations;
        }

        /** Properties of a GameResult. */
        interface IGameResult {

            /** GameResult uid */
            uid?: (number | null);

            /** GameResult gType */
            gType?: (pb.GameType | null);

            /** GameResult quotesCode */
            quotesCode?: (number | null);

            /** GameResult kType */
            kType?: (pb.KType | null);

            /** GameResult kFrom */
            kFrom?: (number | null);

            /** GameResult kTo */
            kTo?: (number | null);

            /** GameResult stockProfitRate */
            stockProfitRate?: (number | null);

            /** GameResult userProfitRate */
            userProfitRate?: (number | null);

            /** GameResult userCapital */
            userCapital?: (number | null);

            /** GameResult userProfit */
            userProfit?: (number | null);

            /** GameResult ts */
            ts?: (number | null);

            /** GameResult rank */
            rank?: (number | null);

            /** GameResult refId */
            refId?: (number | null);

            /** GameResult kStartup */
            kStartup?: (number | null);

            /** GameResult kStop */
            kStop?: (number | null);
        }

        /** Represents a GameResult. */
        class GameResult implements IGameResult {

            /**
             * Constructs a new GameResult.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IGameResult);

            /** GameResult uid. */
            public uid: number;

            /** GameResult gType. */
            public gType: pb.GameType;

            /** GameResult quotesCode. */
            public quotesCode: number;

            /** GameResult kType. */
            public kType: pb.KType;

            /** GameResult kFrom. */
            public kFrom: number;

            /** GameResult kTo. */
            public kTo: number;

            /** GameResult stockProfitRate. */
            public stockProfitRate: number;

            /** GameResult userProfitRate. */
            public userProfitRate: number;

            /** GameResult userCapital. */
            public userCapital: number;

            /** GameResult userProfit. */
            public userProfit: number;

            /** GameResult ts. */
            public ts: number;

            /** GameResult rank. */
            public rank: number;

            /** GameResult refId. */
            public refId: number;

            /** GameResult kStartup. */
            public kStartup: number;

            /** GameResult kStop. */
            public kStop: number;

            /**
             * Encodes the specified GameResult message. Does not implicitly {@link pb.GameResult.verify|verify} messages.
             * @param m GameResult message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IGameResult, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameResult message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.GameResult;
        }

        /** Properties of a CmdGameLogin. */
        interface ICmdGameLogin {

            /** CmdGameLogin uid */
            uid?: (number | null);

            /** CmdGameLogin token */
            token?: (string | null);
        }

        /** Represents a CmdGameLogin. */
        class CmdGameLogin implements ICmdGameLogin {

            /**
             * Constructs a new CmdGameLogin.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGameLogin);

            /** CmdGameLogin uid. */
            public uid: number;

            /** CmdGameLogin token. */
            public token: string;

            /**
             * Encodes the specified CmdGameLogin message. Does not implicitly {@link pb.CmdGameLogin.verify|verify} messages.
             * @param m CmdGameLogin message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGameLogin, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGameLogin message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGameLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGameLogin;
        }

        /** Properties of a CmdGameLoginReply. */
        interface ICmdGameLoginReply {

            /** CmdGameLoginReply result */
            result?: (pb.IErrorInfo | null);

            /** CmdGameLoginReply data */
            data?: (pb.IGameData | null);
        }

        /** Represents a CmdGameLoginReply. */
        class CmdGameLoginReply implements ICmdGameLoginReply {

            /**
             * Constructs a new CmdGameLoginReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGameLoginReply);

            /** CmdGameLoginReply result. */
            public result?: (pb.IErrorInfo | null);

            /** CmdGameLoginReply data. */
            public data?: (pb.IGameData | null);

            /**
             * Encodes the specified CmdGameLoginReply message. Does not implicitly {@link pb.CmdGameLoginReply.verify|verify} messages.
             * @param m CmdGameLoginReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGameLoginReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGameLoginReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGameLoginReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGameLoginReply;
        }

        /** Properties of a CmdUploadIcon. */
        interface ICmdUploadIcon {

            /** CmdUploadIcon uid */
            uid?: (number | null);

            /** CmdUploadIcon icon */
            icon?: (Uint8Array | null);
        }

        /** Represents a CmdUploadIcon. */
        class CmdUploadIcon implements ICmdUploadIcon {

            /**
             * Constructs a new CmdUploadIcon.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUploadIcon);

            /** CmdUploadIcon uid. */
            public uid: number;

            /** CmdUploadIcon icon. */
            public icon: Uint8Array;

            /**
             * Encodes the specified CmdUploadIcon message. Does not implicitly {@link pb.CmdUploadIcon.verify|verify} messages.
             * @param m CmdUploadIcon message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUploadIcon, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUploadIcon message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUploadIcon
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUploadIcon;
        }

        /** Properties of a PlayerInfo. */
        interface IPlayerInfo {

            /** PlayerInfo uid */
            uid?: (number | null);

            /** PlayerInfo nick */
            nick?: (string | null);

            /** PlayerInfo icon */
            icon?: (string | null);

            /** PlayerInfo gender */
            gender?: (string | null);

            /** PlayerInfo location */
            location?: (string | null);

            /** PlayerInfo properties */
            properties?: (number[] | null);

            /** PlayerInfo counters */
            counters?: (pb.IGameCounter[] | null);
        }

        /** Represents a PlayerInfo. */
        class PlayerInfo implements IPlayerInfo {

            /**
             * Constructs a new PlayerInfo.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IPlayerInfo);

            /** PlayerInfo uid. */
            public uid: number;

            /** PlayerInfo nick. */
            public nick: string;

            /** PlayerInfo icon. */
            public icon: string;

            /** PlayerInfo gender. */
            public gender: string;

            /** PlayerInfo location. */
            public location: string;

            /** PlayerInfo properties. */
            public properties: number[];

            /** PlayerInfo counters. */
            public counters: pb.IGameCounter[];

            /**
             * Encodes the specified PlayerInfo message. Does not implicitly {@link pb.PlayerInfo.verify|verify} messages.
             * @param m PlayerInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IPlayerInfo, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PlayerInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.PlayerInfo;
        }

        /** Properties of a CmdEditFavorList. */
        interface ICmdEditFavorList {

            /** CmdEditFavorList removed */
            removed?: (boolean | null);

            /** CmdEditFavorList uid */
            uid?: (number | null);
        }

        /** Represents a CmdEditFavorList. */
        class CmdEditFavorList implements ICmdEditFavorList {

            /**
             * Constructs a new CmdEditFavorList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdEditFavorList);

            /** CmdEditFavorList removed. */
            public removed: boolean;

            /** CmdEditFavorList uid. */
            public uid: number;

            /**
             * Encodes the specified CmdEditFavorList message. Does not implicitly {@link pb.CmdEditFavorList.verify|verify} messages.
             * @param m CmdEditFavorList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdEditFavorList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdEditFavorList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdEditFavorList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdEditFavorList;
        }

        /** Properties of a CmdGetItem. */
        interface ICmdGetItem {

            /** CmdGetItem ts */
            ts?: (number | null);
        }

        /** Represents a CmdGetItem. */
        class CmdGetItem implements ICmdGetItem {

            /**
             * Constructs a new CmdGetItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetItem);

            /** CmdGetItem ts. */
            public ts: number;

            /**
             * Encodes the specified CmdGetItem message. Does not implicitly {@link pb.CmdGetItem.verify|verify} messages.
             * @param m CmdGetItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetItem;
        }

        /** Properties of a CmdResetGameCounter. */
        interface ICmdResetGameCounter {

            /** CmdResetGameCounter game */
            game?: (pb.GameType | null);
        }

        /** Represents a CmdResetGameCounter. */
        class CmdResetGameCounter implements ICmdResetGameCounter {

            /**
             * Constructs a new CmdResetGameCounter.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdResetGameCounter);

            /** CmdResetGameCounter game. */
            public game: pb.GameType;

            /**
             * Encodes the specified CmdResetGameCounter message. Does not implicitly {@link pb.CmdResetGameCounter.verify|verify} messages.
             * @param m CmdResetGameCounter message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdResetGameCounter, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdResetGameCounter message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdResetGameCounter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdResetGameCounter;
        }

        /** Properties of a TaskItem. */
        interface ITaskItem {

            /** TaskItem taskId */
            taskId?: (number | null);

            /** TaskItem progress */
            progress?: (number | null);

            /** TaskItem award */
            award?: (number | null);

            /** TaskItem got */
            got?: (number | null);
        }

        /** Represents a TaskItem. */
        class TaskItem implements ITaskItem {

            /**
             * Constructs a new TaskItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ITaskItem);

            /** TaskItem taskId. */
            public taskId: number;

            /** TaskItem progress. */
            public progress: number;

            /** TaskItem award. */
            public award: number;

            /** TaskItem got. */
            public got: number;

            /**
             * Encodes the specified TaskItem message. Does not implicitly {@link pb.TaskItem.verify|verify} messages.
             * @param m TaskItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ITaskItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a TaskItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns TaskItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.TaskItem;
        }

        /** Properties of a CmdStudyProgress. */
        interface ICmdStudyProgress {

            /** CmdStudyProgress index */
            index?: (number | null);

            /** CmdStudyProgress progress */
            progress?: (number | null);

            /** CmdStudyProgress award */
            award?: (number | null);
        }

        /** Represents a CmdStudyProgress. */
        class CmdStudyProgress implements ICmdStudyProgress {

            /**
             * Constructs a new CmdStudyProgress.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdStudyProgress);

            /** CmdStudyProgress index. */
            public index: number;

            /** CmdStudyProgress progress. */
            public progress: number;

            /** CmdStudyProgress award. */
            public award: number;

            /**
             * Encodes the specified CmdStudyProgress message. Does not implicitly {@link pb.CmdStudyProgress.verify|verify} messages.
             * @param m CmdStudyProgress message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdStudyProgress, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdStudyProgress message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdStudyProgress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdStudyProgress;
        }

        /** Properties of a CmdGetDailyAward. */
        interface ICmdGetDailyAward {

            /** CmdGetDailyAward index */
            index?: (number | null);

            /** CmdGetDailyAward adClicked */
            adClicked?: (boolean | null);
        }

        /** Represents a CmdGetDailyAward. */
        class CmdGetDailyAward implements ICmdGetDailyAward {

            /**
             * Constructs a new CmdGetDailyAward.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetDailyAward);

            /** CmdGetDailyAward index. */
            public index: number;

            /** CmdGetDailyAward adClicked. */
            public adClicked: boolean;

            /**
             * Encodes the specified CmdGetDailyAward message. Does not implicitly {@link pb.CmdGetDailyAward.verify|verify} messages.
             * @param m CmdGetDailyAward message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetDailyAward, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetDailyAward message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetDailyAward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetDailyAward;
        }

        /** Properties of a CmdDailyTaskProgress. */
        interface ICmdDailyTaskProgress {

            /** CmdDailyTaskProgress uid */
            uid?: (number | null);

            /** CmdDailyTaskProgress taskId */
            taskId?: (number | null);
        }

        /** Represents a CmdDailyTaskProgress. */
        class CmdDailyTaskProgress implements ICmdDailyTaskProgress {

            /**
             * Constructs a new CmdDailyTaskProgress.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdDailyTaskProgress);

            /** CmdDailyTaskProgress uid. */
            public uid: number;

            /** CmdDailyTaskProgress taskId. */
            public taskId: number;

            /**
             * Encodes the specified CmdDailyTaskProgress message. Does not implicitly {@link pb.CmdDailyTaskProgress.verify|verify} messages.
             * @param m CmdDailyTaskProgress message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdDailyTaskProgress, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdDailyTaskProgress message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdDailyTaskProgress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdDailyTaskProgress;
        }

        /** Properties of a CmdGetInviterAward. */
        interface ICmdGetInviterAward {

            /** CmdGetInviterAward propertyId */
            propertyId?: (number | null);

            /** CmdGetInviterAward count */
            count?: (number | null);
        }

        /** Represents a CmdGetInviterAward. */
        class CmdGetInviterAward implements ICmdGetInviterAward {

            /**
             * Constructs a new CmdGetInviterAward.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetInviterAward);

            /** CmdGetInviterAward propertyId. */
            public propertyId: number;

            /** CmdGetInviterAward count. */
            public count: number;

            /**
             * Encodes the specified CmdGetInviterAward message. Does not implicitly {@link pb.CmdGetInviterAward.verify|verify} messages.
             * @param m CmdGetInviterAward message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetInviterAward, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetInviterAward message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetInviterAward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetInviterAward;
        }

        /** Properties of a CmdGameStart. */
        interface ICmdGameStart {

            /** CmdGameStart game */
            game?: (pb.GameType | null);

            /** CmdGameStart isJunxian */
            isJunxian?: (boolean | null);
        }

        /** Represents a CmdGameStart. */
        class CmdGameStart implements ICmdGameStart {

            /**
             * Constructs a new CmdGameStart.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGameStart);

            /** CmdGameStart game. */
            public game: pb.GameType;

            /** CmdGameStart isJunxian. */
            public isJunxian: boolean;

            /**
             * Encodes the specified CmdGameStart message. Does not implicitly {@link pb.CmdGameStart.verify|verify} messages.
             * @param m CmdGameStart message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGameStart, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGameStart message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGameStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGameStart;
        }

        /** Properties of a CmdGameOver. */
        interface ICmdGameOver {

            /** CmdGameOver result */
            result?: (pb.IGameResult | null);

            /** CmdGameOver operations */
            operations?: (pb.IGameOperations | null);
        }

        /** Represents a CmdGameOver. */
        class CmdGameOver implements ICmdGameOver {

            /**
             * Constructs a new CmdGameOver.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGameOver);

            /** CmdGameOver result. */
            public result?: (pb.IGameResult | null);

            /** CmdGameOver operations. */
            public operations?: (pb.IGameOperations | null);

            /**
             * Encodes the specified CmdGameOver message. Does not implicitly {@link pb.CmdGameOver.verify|verify} messages.
             * @param m CmdGameOver message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGameOver, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGameOver message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGameOver
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGameOver;
        }

        /** Properties of a CmdGameOverReply. */
        interface ICmdGameOverReply {

            /** CmdGameOverReply ts */
            ts?: (number | null);
        }

        /** Represents a CmdGameOverReply. */
        class CmdGameOverReply implements ICmdGameOverReply {

            /**
             * Constructs a new CmdGameOverReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGameOverReply);

            /** CmdGameOverReply ts. */
            public ts: number;

            /**
             * Encodes the specified CmdGameOverReply message. Does not implicitly {@link pb.CmdGameOverReply.verify|verify} messages.
             * @param m CmdGameOverReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGameOverReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGameOverReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGameOverReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGameOverReply;
        }

        /** Properties of a CmdQueryGameResult. */
        interface ICmdQueryGameResult {

            /** CmdQueryGameResult uid */
            uid?: (number | null);

            /** CmdQueryGameResult gType */
            gType?: (pb.GameType | null);

            /** CmdQueryGameResult from */
            from?: (number | null);

            /** CmdQueryGameResult to */
            to?: (number | null);

            /** CmdQueryGameResult pageSize */
            pageSize?: (number | null);

            /** CmdQueryGameResult ts */
            ts?: (number | null);
        }

        /** Represents a CmdQueryGameResult. */
        class CmdQueryGameResult implements ICmdQueryGameResult {

            /**
             * Constructs a new CmdQueryGameResult.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryGameResult);

            /** CmdQueryGameResult uid. */
            public uid: number;

            /** CmdQueryGameResult gType. */
            public gType: pb.GameType;

            /** CmdQueryGameResult from. */
            public from: number;

            /** CmdQueryGameResult to. */
            public to: number;

            /** CmdQueryGameResult pageSize. */
            public pageSize: number;

            /** CmdQueryGameResult ts. */
            public ts: number;

            /**
             * Encodes the specified CmdQueryGameResult message. Does not implicitly {@link pb.CmdQueryGameResult.verify|verify} messages.
             * @param m CmdQueryGameResult message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryGameResult, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryGameResult message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryGameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryGameResult;
        }

        /** Properties of a CmdQueryGameResultReply. */
        interface ICmdQueryGameResultReply {

            /** CmdQueryGameResultReply results */
            results?: (pb.IGameResult[] | null);
        }

        /** Represents a CmdQueryGameResultReply. */
        class CmdQueryGameResultReply implements ICmdQueryGameResultReply {

            /**
             * Constructs a new CmdQueryGameResultReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryGameResultReply);

            /** CmdQueryGameResultReply results. */
            public results: pb.IGameResult[];

            /**
             * Encodes the specified CmdQueryGameResultReply message. Does not implicitly {@link pb.CmdQueryGameResultReply.verify|verify} messages.
             * @param m CmdQueryGameResultReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryGameResultReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryGameResultReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryGameResultReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryGameResultReply;
        }

        /** Properties of a CmdGetGameOperations. */
        interface ICmdGetGameOperations {

            /** CmdGetGameOperations uid */
            uid?: (number | null);

            /** CmdGetGameOperations ts */
            ts?: (number | null);
        }

        /** Represents a CmdGetGameOperations. */
        class CmdGetGameOperations implements ICmdGetGameOperations {

            /**
             * Constructs a new CmdGetGameOperations.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetGameOperations);

            /** CmdGetGameOperations uid. */
            public uid: number;

            /** CmdGetGameOperations ts. */
            public ts: number;

            /**
             * Encodes the specified CmdGetGameOperations message. Does not implicitly {@link pb.CmdGetGameOperations.verify|verify} messages.
             * @param m CmdGetGameOperations message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetGameOperations, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetGameOperations message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetGameOperations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetGameOperations;
        }

        /** Properties of a CmdUnlockGame. */
        interface ICmdUnlockGame {

            /** CmdUnlockGame gType */
            gType?: (pb.GameType | null);
        }

        /** Represents a CmdUnlockGame. */
        class CmdUnlockGame implements ICmdUnlockGame {

            /**
             * Constructs a new CmdUnlockGame.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUnlockGame);

            /** CmdUnlockGame gType. */
            public gType: pb.GameType;

            /**
             * Encodes the specified CmdUnlockGame message. Does not implicitly {@link pb.CmdUnlockGame.verify|verify} messages.
             * @param m CmdUnlockGame message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUnlockGame, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUnlockGame message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUnlockGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUnlockGame;
        }

        /** Properties of a CmdGetSmxlReportReply. */
        interface ICmdGetSmxlReportReply {

            /** CmdGetSmxlReportReply capitalInit */
            capitalInit?: (number | null);

            /** CmdGetSmxlReportReply capitalFinal */
            capitalFinal?: (number | null);

            /** CmdGetSmxlReportReply profitRate */
            profitRate?: (number | null);

            /** CmdGetSmxlReportReply winCount */
            winCount?: (number | null);

            /** CmdGetSmxlReportReply winCode */
            winCode?: (number | null);

            /** CmdGetSmxlReportReply winRate */
            winRate?: (number | null);

            /** CmdGetSmxlReportReply loseCount */
            loseCount?: (number | null);

            /** CmdGetSmxlReportReply loseCode */
            loseCode?: (number | null);

            /** CmdGetSmxlReportReply loseRate */
            loseRate?: (number | null);

            /** CmdGetSmxlReportReply count */
            count?: (number | null);

            /** CmdGetSmxlReportReply rankCaptial */
            rankCaptial?: (number | null);

            /** CmdGetSmxlReportReply rankRate */
            rankRate?: (number | null);

            /** CmdGetSmxlReportReply ts */
            ts?: (number | null);
        }

        /** Represents a CmdGetSmxlReportReply. */
        class CmdGetSmxlReportReply implements ICmdGetSmxlReportReply {

            /**
             * Constructs a new CmdGetSmxlReportReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetSmxlReportReply);

            /** CmdGetSmxlReportReply capitalInit. */
            public capitalInit: number;

            /** CmdGetSmxlReportReply capitalFinal. */
            public capitalFinal: number;

            /** CmdGetSmxlReportReply profitRate. */
            public profitRate: number;

            /** CmdGetSmxlReportReply winCount. */
            public winCount: number;

            /** CmdGetSmxlReportReply winCode. */
            public winCode: number;

            /** CmdGetSmxlReportReply winRate. */
            public winRate: number;

            /** CmdGetSmxlReportReply loseCount. */
            public loseCount: number;

            /** CmdGetSmxlReportReply loseCode. */
            public loseCode: number;

            /** CmdGetSmxlReportReply loseRate. */
            public loseRate: number;

            /** CmdGetSmxlReportReply count. */
            public count: number;

            /** CmdGetSmxlReportReply rankCaptial. */
            public rankCaptial: number;

            /** CmdGetSmxlReportReply rankRate. */
            public rankRate: number;

            /** CmdGetSmxlReportReply ts. */
            public ts: number;

            /**
             * Encodes the specified CmdGetSmxlReportReply message. Does not implicitly {@link pb.CmdGetSmxlReportReply.verify|verify} messages.
             * @param m CmdGetSmxlReportReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetSmxlReportReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetSmxlReportReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetSmxlReportReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetSmxlReportReply;
        }

        /** Properties of a CmdRoomCreate. */
        interface ICmdRoomCreate {

            /** CmdRoomCreate game */
            game?: (pb.GameType | null);

            /** CmdRoomCreate uid */
            uid?: (number | null);

            /** CmdRoomCreate node */
            node?: (number | null);

            /** CmdRoomCreate capital */
            capital?: (number | null);

            /** CmdRoomCreate pwd */
            pwd?: (string | null);

            /** CmdRoomCreate junXian */
            junXian?: (number[] | null);

            /** CmdRoomCreate wxHeadicon */
            wxHeadicon?: (string | null);
        }

        /** Represents a CmdRoomCreate. */
        class CmdRoomCreate implements ICmdRoomCreate {

            /**
             * Constructs a new CmdRoomCreate.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRoomCreate);

            /** CmdRoomCreate game. */
            public game: pb.GameType;

            /** CmdRoomCreate uid. */
            public uid: number;

            /** CmdRoomCreate node. */
            public node: number;

            /** CmdRoomCreate capital. */
            public capital: number;

            /** CmdRoomCreate pwd. */
            public pwd: string;

            /** CmdRoomCreate junXian. */
            public junXian: number[];

            /** CmdRoomCreate wxHeadicon. */
            public wxHeadicon: string;

            /**
             * Encodes the specified CmdRoomCreate message. Does not implicitly {@link pb.CmdRoomCreate.verify|verify} messages.
             * @param m CmdRoomCreate message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRoomCreate, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRoomCreate message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRoomCreate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRoomCreate;
        }

        /** Properties of a CmdRoomCreateReply. */
        interface ICmdRoomCreateReply {

            /** CmdRoomCreateReply err */
            err?: (pb.IErrorInfo | null);

            /** CmdRoomCreateReply id */
            id?: (number | null);
        }

        /** Represents a CmdRoomCreateReply. */
        class CmdRoomCreateReply implements ICmdRoomCreateReply {

            /**
             * Constructs a new CmdRoomCreateReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRoomCreateReply);

            /** CmdRoomCreateReply err. */
            public err?: (pb.IErrorInfo | null);

            /** CmdRoomCreateReply id. */
            public id: number;

            /**
             * Encodes the specified CmdRoomCreateReply message. Does not implicitly {@link pb.CmdRoomCreateReply.verify|verify} messages.
             * @param m CmdRoomCreateReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRoomCreateReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRoomCreateReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRoomCreateReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRoomCreateReply;
        }

        /** Properties of a CmdRoomEnter. */
        interface ICmdRoomEnter {

            /** CmdRoomEnter id */
            id?: (number | null);

            /** CmdRoomEnter game */
            game?: (pb.GameType | null);

            /** CmdRoomEnter uid */
            uid?: (number | null);

            /** CmdRoomEnter node */
            node?: (number | null);

            /** CmdRoomEnter pwd */
            pwd?: (string | null);

            /** CmdRoomEnter junXian */
            junXian?: (number[] | null);

            /** CmdRoomEnter wxHeadicon */
            wxHeadicon?: (string | null);
        }

        /** Represents a CmdRoomEnter. */
        class CmdRoomEnter implements ICmdRoomEnter {

            /**
             * Constructs a new CmdRoomEnter.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRoomEnter);

            /** CmdRoomEnter id. */
            public id: number;

            /** CmdRoomEnter game. */
            public game: pb.GameType;

            /** CmdRoomEnter uid. */
            public uid: number;

            /** CmdRoomEnter node. */
            public node: number;

            /** CmdRoomEnter pwd. */
            public pwd: string;

            /** CmdRoomEnter junXian. */
            public junXian: number[];

            /** CmdRoomEnter wxHeadicon. */
            public wxHeadicon: string;

            /**
             * Encodes the specified CmdRoomEnter message. Does not implicitly {@link pb.CmdRoomEnter.verify|verify} messages.
             * @param m CmdRoomEnter message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRoomEnter, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRoomEnter message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRoomEnter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRoomEnter;
        }

        /** Properties of a CmdRoomEnterReply. */
        interface ICmdRoomEnterReply {

            /** CmdRoomEnterReply err */
            err?: (pb.IErrorInfo | null);

            /** CmdRoomEnterReply id */
            id?: (number | null);

            /** CmdRoomEnterReply node */
            node?: (number | null);
        }

        /** Represents a CmdRoomEnterReply. */
        class CmdRoomEnterReply implements ICmdRoomEnterReply {

            /**
             * Constructs a new CmdRoomEnterReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRoomEnterReply);

            /** CmdRoomEnterReply err. */
            public err?: (pb.IErrorInfo | null);

            /** CmdRoomEnterReply id. */
            public id: number;

            /** CmdRoomEnterReply node. */
            public node: number;

            /**
             * Encodes the specified CmdRoomEnterReply message. Does not implicitly {@link pb.CmdRoomEnterReply.verify|verify} messages.
             * @param m CmdRoomEnterReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRoomEnterReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRoomEnterReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRoomEnterReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRoomEnterReply;
        }

        /** Properties of a CmdRoomLeave. */
        interface ICmdRoomLeave {

            /** CmdRoomLeave id */
            id?: (number | null);

            /** CmdRoomLeave uid */
            uid?: (number | null);
        }

        /** Represents a CmdRoomLeave. */
        class CmdRoomLeave implements ICmdRoomLeave {

            /**
             * Constructs a new CmdRoomLeave.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRoomLeave);

            /** CmdRoomLeave id. */
            public id: number;

            /** CmdRoomLeave uid. */
            public uid: number;

            /**
             * Encodes the specified CmdRoomLeave message. Does not implicitly {@link pb.CmdRoomLeave.verify|verify} messages.
             * @param m CmdRoomLeave message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRoomLeave, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRoomLeave message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRoomLeave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRoomLeave;
        }

        /** Properties of a CmdRoomLeaveReply. */
        interface ICmdRoomLeaveReply {

            /** CmdRoomLeaveReply err */
            err?: (pb.IErrorInfo | null);
        }

        /** Represents a CmdRoomLeaveReply. */
        class CmdRoomLeaveReply implements ICmdRoomLeaveReply {

            /**
             * Constructs a new CmdRoomLeaveReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRoomLeaveReply);

            /** CmdRoomLeaveReply err. */
            public err?: (pb.IErrorInfo | null);

            /**
             * Encodes the specified CmdRoomLeaveReply message. Does not implicitly {@link pb.CmdRoomLeaveReply.verify|verify} messages.
             * @param m CmdRoomLeaveReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRoomLeaveReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRoomLeaveReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRoomLeaveReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRoomLeaveReply;
        }

        /** Properties of a SyncRoomEnter. */
        interface ISyncRoomEnter {

            /** SyncRoomEnter id */
            id?: (number | null);

            /** SyncRoomEnter game */
            game?: (pb.GameType | null);

            /** SyncRoomEnter player */
            player?: (pb.IGameData | null);

            /** SyncRoomEnter junXian */
            junXian?: (number[] | null);

            /** SyncRoomEnter wxHeadicon */
            wxHeadicon?: (string | null);
        }

        /** Represents a SyncRoomEnter. */
        class SyncRoomEnter implements ISyncRoomEnter {

            /**
             * Constructs a new SyncRoomEnter.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ISyncRoomEnter);

            /** SyncRoomEnter id. */
            public id: number;

            /** SyncRoomEnter game. */
            public game: pb.GameType;

            /** SyncRoomEnter player. */
            public player?: (pb.IGameData | null);

            /** SyncRoomEnter junXian. */
            public junXian: number[];

            /** SyncRoomEnter wxHeadicon. */
            public wxHeadicon: string;

            /**
             * Encodes the specified SyncRoomEnter message. Does not implicitly {@link pb.SyncRoomEnter.verify|verify} messages.
             * @param m SyncRoomEnter message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ISyncRoomEnter, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SyncRoomEnter message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SyncRoomEnter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.SyncRoomEnter;
        }

        /** Properties of a SyncRoomLeave. */
        interface ISyncRoomLeave {

            /** SyncRoomLeave id */
            id?: (number | null);

            /** SyncRoomLeave game */
            game?: (pb.GameType | null);

            /** SyncRoomLeave uid */
            uid?: (number | null);
        }

        /** Represents a SyncRoomLeave. */
        class SyncRoomLeave implements ISyncRoomLeave {

            /**
             * Constructs a new SyncRoomLeave.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ISyncRoomLeave);

            /** SyncRoomLeave id. */
            public id: number;

            /** SyncRoomLeave game. */
            public game: pb.GameType;

            /** SyncRoomLeave uid. */
            public uid: number;

            /**
             * Encodes the specified SyncRoomLeave message. Does not implicitly {@link pb.SyncRoomLeave.verify|verify} messages.
             * @param m SyncRoomLeave message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ISyncRoomLeave, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SyncRoomLeave message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SyncRoomLeave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.SyncRoomLeave;
        }

        /** Properties of a RoomPlayerStatus. */
        interface IRoomPlayerStatus {

            /** RoomPlayerStatus id */
            id?: (number | null);

            /** RoomPlayerStatus uid */
            uid?: (number | null);

            /** RoomPlayerStatus ready */
            ready?: (boolean | null);
        }

        /** Represents a RoomPlayerStatus. */
        class RoomPlayerStatus implements IRoomPlayerStatus {

            /**
             * Constructs a new RoomPlayerStatus.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomPlayerStatus);

            /** RoomPlayerStatus id. */
            public id: number;

            /** RoomPlayerStatus uid. */
            public uid: number;

            /** RoomPlayerStatus ready. */
            public ready: boolean;

            /**
             * Encodes the specified RoomPlayerStatus message. Does not implicitly {@link pb.RoomPlayerStatus.verify|verify} messages.
             * @param m RoomPlayerStatus message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomPlayerStatus, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomPlayerStatus message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomPlayerStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomPlayerStatus;
        }

        /** Properties of a RoomGameStatus. */
        interface IRoomGameStatus {

            /** RoomGameStatus id */
            id?: (number | null);

            /** RoomGameStatus status */
            status?: (number | null);
        }

        /** Represents a RoomGameStatus. */
        class RoomGameStatus implements IRoomGameStatus {

            /**
             * Constructs a new RoomGameStatus.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomGameStatus);

            /** RoomGameStatus id. */
            public id: number;

            /** RoomGameStatus status. */
            public status: number;

            /**
             * Encodes the specified RoomGameStatus message. Does not implicitly {@link pb.RoomGameStatus.verify|verify} messages.
             * @param m RoomGameStatus message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomGameStatus, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomGameStatus message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomGameStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomGameStatus;
        }

        /** Properties of a RoomGameOp. */
        interface IRoomGameOp {

            /** RoomGameOp id */
            id?: (number | null);

            /** RoomGameOp uid */
            uid?: (number | null);

            /** RoomGameOp ops */
            ops?: (Uint8Array | null);
        }

        /** Represents a RoomGameOp. */
        class RoomGameOp implements IRoomGameOp {

            /**
             * Constructs a new RoomGameOp.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomGameOp);

            /** RoomGameOp id. */
            public id: number;

            /** RoomGameOp uid. */
            public uid: number;

            /** RoomGameOp ops. */
            public ops: Uint8Array;

            /**
             * Encodes the specified RoomGameOp message. Does not implicitly {@link pb.RoomGameOp.verify|verify} messages.
             * @param m RoomGameOp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomGameOp, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomGameOp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomGameOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomGameOp;
        }

        /** Properties of a RoomGameResult. */
        interface IRoomGameResult {

            /** RoomGameResult id */
            id?: (number | null);

            /** RoomGameResult result */
            result?: (Uint8Array | null);
        }

        /** Represents a RoomGameResult. */
        class RoomGameResult implements IRoomGameResult {

            /**
             * Constructs a new RoomGameResult.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomGameResult);

            /** RoomGameResult id. */
            public id: number;

            /** RoomGameResult result. */
            public result: Uint8Array;

            /**
             * Encodes the specified RoomGameResult message. Does not implicitly {@link pb.RoomGameResult.verify|verify} messages.
             * @param m RoomGameResult message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomGameResult, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomGameResult message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomGameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomGameResult;
        }

        /** Properties of a RoomData. */
        interface IRoomData {

            /** RoomData id */
            id?: (number | null);

            /** RoomData game */
            game?: (pb.GameType | null);

            /** RoomData data */
            data?: (Uint8Array | null);

            /** RoomData auto */
            auto?: (number | null);

            /** RoomData creator */
            creator?: (number | null);
        }

        /** Represents a RoomData. */
        class RoomData implements IRoomData {

            /**
             * Constructs a new RoomData.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomData);

            /** RoomData id. */
            public id: number;

            /** RoomData game. */
            public game: pb.GameType;

            /** RoomData data. */
            public data: Uint8Array;

            /** RoomData auto. */
            public auto: number;

            /** RoomData creator. */
            public creator: number;

            /**
             * Encodes the specified RoomData message. Does not implicitly {@link pb.RoomData.verify|verify} messages.
             * @param m RoomData message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomData, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomData;
        }

        /** Properties of a RoomPlayer. */
        interface IRoomPlayer {

            /** RoomPlayer gd */
            gd?: (pb.IGameData | null);

            /** RoomPlayer ready */
            ready?: (boolean | null);

            /** RoomPlayer giveup */
            giveup?: (boolean | null);

            /** RoomPlayer ops */
            ops?: (pb.IGameOperations | null);

            /** RoomPlayer result */
            result?: (pb.IGameResult | null);

            /** RoomPlayer curPos */
            curPos?: (number | null);

            /** RoomPlayer junXian */
            junXian?: (number[] | null);

            /** RoomPlayer wxHeadicon */
            wxHeadicon?: (string | null);
        }

        /** Represents a RoomPlayer. */
        class RoomPlayer implements IRoomPlayer {

            /**
             * Constructs a new RoomPlayer.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomPlayer);

            /** RoomPlayer gd. */
            public gd?: (pb.IGameData | null);

            /** RoomPlayer ready. */
            public ready: boolean;

            /** RoomPlayer giveup. */
            public giveup: boolean;

            /** RoomPlayer ops. */
            public ops?: (pb.IGameOperations | null);

            /** RoomPlayer result. */
            public result?: (pb.IGameResult | null);

            /** RoomPlayer curPos. */
            public curPos: number;

            /** RoomPlayer junXian. */
            public junXian: number[];

            /** RoomPlayer wxHeadicon. */
            public wxHeadicon: string;

            /**
             * Encodes the specified RoomPlayer message. Does not implicitly {@link pb.RoomPlayer.verify|verify} messages.
             * @param m RoomPlayer message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomPlayer, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomPlayer message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomPlayer;
        }

        /** Properties of a RoomGameData. */
        interface IRoomGameData {

            /** RoomGameData id */
            id?: (number | null);

            /** RoomGameData game */
            game?: (pb.GameType | null);

            /** RoomGameData status */
            status?: (number | null);

            /** RoomGameData capital */
            capital?: (number | null);

            /** RoomGameData code */
            code?: (number | null);

            /** RoomGameData ktype */
            ktype?: (pb.KType | null);

            /** RoomGameData tsQuoteFrom */
            tsQuoteFrom?: (number | null);

            /** RoomGameData tsQuoteTo */
            tsQuoteTo?: (number | null);

            /** RoomGameData tsQuoteStart */
            tsQuoteStart?: (number | null);

            /** RoomGameData players */
            players?: (pb.IRoomPlayer[] | null);

            /** RoomGameData tsGameFrom */
            tsGameFrom?: (number | null);

            /** RoomGameData tsGameCur */
            tsGameCur?: (number | null);

            /** RoomGameData quotes */
            quotes?: (pb.IQuotes | null);

            /** RoomGameData quotesFuture */
            quotesFuture?: (pb.IQuotesFuture | null);
        }

        /** Represents a RoomGameData. */
        class RoomGameData implements IRoomGameData {

            /**
             * Constructs a new RoomGameData.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomGameData);

            /** RoomGameData id. */
            public id: number;

            /** RoomGameData game. */
            public game: pb.GameType;

            /** RoomGameData status. */
            public status: number;

            /** RoomGameData capital. */
            public capital: number;

            /** RoomGameData code. */
            public code: number;

            /** RoomGameData ktype. */
            public ktype: pb.KType;

            /** RoomGameData tsQuoteFrom. */
            public tsQuoteFrom: number;

            /** RoomGameData tsQuoteTo. */
            public tsQuoteTo: number;

            /** RoomGameData tsQuoteStart. */
            public tsQuoteStart: number;

            /** RoomGameData players. */
            public players: pb.IRoomPlayer[];

            /** RoomGameData tsGameFrom. */
            public tsGameFrom: number;

            /** RoomGameData tsGameCur. */
            public tsGameCur: number;

            /** RoomGameData quotes. */
            public quotes?: (pb.IQuotes | null);

            /** RoomGameData quotesFuture. */
            public quotesFuture?: (pb.IQuotesFuture | null);

            /**
             * Encodes the specified RoomGameData message. Does not implicitly {@link pb.RoomGameData.verify|verify} messages.
             * @param m RoomGameData message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomGameData, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomGameData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomGameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomGameData;
        }

        /** Properties of a Notice. */
        interface INotice {

            /** Notice sender */
            sender?: (number | null);

            /** Notice receiver */
            receiver?: (number | null);

            /** Notice type */
            type?: (pb.MessageType | null);

            /** Notice text */
            text?: (string | null);

            /** Notice ts */
            ts?: (number | null);

            /** Notice node */
            node?: (number | null);
        }

        /** Represents a Notice. */
        class Notice implements INotice {

            /**
             * Constructs a new Notice.
             * @param [p] Properties to set
             */
            constructor(p?: pb.INotice);

            /** Notice sender. */
            public sender: number;

            /** Notice receiver. */
            public receiver: number;

            /** Notice type. */
            public type: pb.MessageType;

            /** Notice text. */
            public text: string;

            /** Notice ts. */
            public ts: number;

            /** Notice node. */
            public node: number;

            /**
             * Encodes the specified Notice message. Does not implicitly {@link pb.Notice.verify|verify} messages.
             * @param m Notice message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.INotice, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Notice message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Notice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.Notice;
        }

        /** Properties of a CgsConf. */
        interface ICgsConf {

            /** CgsConf id */
            id?: (number | null);

            /** CgsConf from */
            from?: (number | null);

            /** CgsConf to */
            to?: (number | null);

            /** CgsConf conf */
            conf?: (string | null);

            /** CgsConf award */
            award?: (string | null);

            /** CgsConf status */
            status?: (number | null);

            /** CgsConf people */
            people?: (number[] | null);
        }

        /** Represents a CgsConf. */
        class CgsConf implements ICgsConf {

            /**
             * Constructs a new CgsConf.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgsConf);

            /** CgsConf id. */
            public id: number;

            /** CgsConf from. */
            public from: number;

            /** CgsConf to. */
            public to: number;

            /** CgsConf conf. */
            public conf: string;

            /** CgsConf award. */
            public award: string;

            /** CgsConf status. */
            public status: number;

            /** CgsConf people. */
            public people: number[];

            /**
             * Encodes the specified CgsConf message. Does not implicitly {@link pb.CgsConf.verify|verify} messages.
             * @param m CgsConf message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgsConf, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgsConf message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgsConf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgsConf;
        }

        /** Properties of a RankingItem. */
        interface IRankingItem {

            /** RankingItem uid */
            uid?: (number | null);

            /** RankingItem nickname */
            nickname?: (string | null);

            /** RankingItem icon */
            icon?: (string | null);

            /** RankingItem gender */
            gender?: (string | null);

            /** RankingItem location */
            location?: (string | null);

            /** RankingItem cgsClearance */
            cgsClearance?: (number | null);

            /** RankingItem cgsNetwin */
            cgsNetwin?: (number | null);

            /** RankingItem cgsProgress */
            cgsProgress?: (number | null);

            /** RankingItem cgdsAccount */
            cgdsAccount?: (number | null);

            /** RankingItem zsjcCount */
            zsjcCount?: (number | null);

            /** RankingItem level */
            level?: (number | null);

            /** RankingItem fame */
            fame?: (number | null);

            /** RankingItem cgdsCapital */
            cgdsCapital?: (number | null);

            /** RankingItem zsjcBettingItem */
            zsjcBettingItem?: (number | null);

            /** RankingItem zsjcBettingAmount */
            zsjcBettingAmount?: (number | null);

            /** RankingItem vipExpired */
            vipExpired?: (number | null);
        }

        /** Represents a RankingItem. */
        class RankingItem implements IRankingItem {

            /**
             * Constructs a new RankingItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRankingItem);

            /** RankingItem uid. */
            public uid: number;

            /** RankingItem nickname. */
            public nickname: string;

            /** RankingItem icon. */
            public icon: string;

            /** RankingItem gender. */
            public gender: string;

            /** RankingItem location. */
            public location: string;

            /** RankingItem cgsClearance. */
            public cgsClearance: number;

            /** RankingItem cgsNetwin. */
            public cgsNetwin: number;

            /** RankingItem cgsProgress. */
            public cgsProgress: number;

            /** RankingItem cgdsAccount. */
            public cgdsAccount: number;

            /** RankingItem zsjcCount. */
            public zsjcCount: number;

            /** RankingItem level. */
            public level: number;

            /** RankingItem fame. */
            public fame: number;

            /** RankingItem cgdsCapital. */
            public cgdsCapital: number;

            /** RankingItem zsjcBettingItem. */
            public zsjcBettingItem: number;

            /** RankingItem zsjcBettingAmount. */
            public zsjcBettingAmount: number;

            /** RankingItem vipExpired. */
            public vipExpired: number;

            /**
             * Encodes the specified RankingItem message. Does not implicitly {@link pb.RankingItem.verify|verify} messages.
             * @param m RankingItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRankingItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RankingItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RankingItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RankingItem;
        }

        /** Properties of a RankingList. */
        interface IRankingList {

            /** RankingList id */
            id?: (number | null);

            /** RankingList Items */
            Items?: (pb.IRankingItem[] | null);
        }

        /** Represents a RankingList. */
        class RankingList implements IRankingList {

            /**
             * Constructs a new RankingList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRankingList);

            /** RankingList id. */
            public id: number;

            /** RankingList Items. */
            public Items: pb.IRankingItem[];

            /**
             * Encodes the specified RankingList message. Does not implicitly {@link pb.RankingList.verify|verify} messages.
             * @param m RankingList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRankingList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RankingList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RankingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RankingList;
        }

        /** Properties of a CmdCgsRanking. */
        interface ICmdCgsRanking {

            /** CmdCgsRanking id */
            id?: (number | null);

            /** CmdCgsRanking stage */
            stage?: (number | null);
        }

        /** Represents a CmdCgsRanking. */
        class CmdCgsRanking implements ICmdCgsRanking {

            /**
             * Constructs a new CmdCgsRanking.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdCgsRanking);

            /** CmdCgsRanking id. */
            public id: number;

            /** CmdCgsRanking stage. */
            public stage: number;

            /**
             * Encodes the specified CmdCgsRanking message. Does not implicitly {@link pb.CmdCgsRanking.verify|verify} messages.
             * @param m CmdCgsRanking message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdCgsRanking, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdCgsRanking message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdCgsRanking
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdCgsRanking;
        }

        /** Properties of a JjPlayer. */
        interface IJjPlayer {

            /** JjPlayer gd */
            gd?: (pb.IGameData | null);

            /** JjPlayer ops */
            ops?: (pb.IGameOperations | null);

            /** JjPlayer result */
            result?: (pb.IGameResult | null);
        }

        /** Represents a JjPlayer. */
        class JjPlayer implements IJjPlayer {

            /**
             * Constructs a new JjPlayer.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IJjPlayer);

            /** JjPlayer gd. */
            public gd?: (pb.IGameData | null);

            /** JjPlayer ops. */
            public ops?: (pb.IGameOperations | null);

            /** JjPlayer result. */
            public result?: (pb.IGameResult | null);

            /**
             * Encodes the specified JjPlayer message. Does not implicitly {@link pb.JjPlayer.verify|verify} messages.
             * @param m JjPlayer message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IJjPlayer, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a JjPlayer message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns JjPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.JjPlayer;
        }

        /** Properties of a JjGame. */
        interface IJjGame {

            /** JjGame code */
            code?: (number | null);

            /** JjGame ktype */
            ktype?: (pb.KType | null);

            /** JjGame tsQuoteFrom */
            tsQuoteFrom?: (number | null);

            /** JjGame tsQuoteTo */
            tsQuoteTo?: (number | null);

            /** JjGame tsQuoteStart */
            tsQuoteStart?: (number | null);

            /** JjGame quotes */
            quotes?: (pb.IQuotes | null);

            /** JjGame quotesFuture */
            quotesFuture?: (pb.IQuotesFuture | null);

            /** JjGame players */
            players?: (pb.IJjPlayer[] | null);

            /** JjGame capital */
            capital?: (number | null);
        }

        /** Represents a JjGame. */
        class JjGame implements IJjGame {

            /**
             * Constructs a new JjGame.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IJjGame);

            /** JjGame code. */
            public code: number;

            /** JjGame ktype. */
            public ktype: pb.KType;

            /** JjGame tsQuoteFrom. */
            public tsQuoteFrom: number;

            /** JjGame tsQuoteTo. */
            public tsQuoteTo: number;

            /** JjGame tsQuoteStart. */
            public tsQuoteStart: number;

            /** JjGame quotes. */
            public quotes?: (pb.IQuotes | null);

            /** JjGame quotesFuture. */
            public quotesFuture?: (pb.IQuotesFuture | null);

            /** JjGame players. */
            public players: pb.IJjPlayer[];

            /** JjGame capital. */
            public capital: number;

            /**
             * Encodes the specified JjGame message. Does not implicitly {@link pb.JjGame.verify|verify} messages.
             * @param m JjGame message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IJjGame, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a JjGame message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns JjGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.JjGame;
        }

        /** Properties of a CmdCgsGetStageAward. */
        interface ICmdCgsGetStageAward {

            /** CmdCgsGetStageAward id */
            id?: (number | null);

            /** CmdCgsGetStageAward stage */
            stage?: (number | null);

            /** CmdCgsGetStageAward double */
            double?: (boolean | null);
        }

        /** Represents a CmdCgsGetStageAward. */
        class CmdCgsGetStageAward implements ICmdCgsGetStageAward {

            /**
             * Constructs a new CmdCgsGetStageAward.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdCgsGetStageAward);

            /** CmdCgsGetStageAward id. */
            public id: number;

            /** CmdCgsGetStageAward stage. */
            public stage: number;

            /** CmdCgsGetStageAward double. */
            public double: boolean;

            /**
             * Encodes the specified CmdCgsGetStageAward message. Does not implicitly {@link pb.CmdCgsGetStageAward.verify|verify} messages.
             * @param m CmdCgsGetStageAward message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdCgsGetStageAward, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdCgsGetStageAward message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdCgsGetStageAward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdCgsGetStageAward;
        }

        /** Properties of a CmdStockOrder. */
        interface ICmdStockOrder {

            /** CmdStockOrder code */
            code?: (number | null);

            /** CmdStockOrder type */
            type?: (pb.OrderType | null);

            /** CmdStockOrder price */
            price?: (number | null);

            /** CmdStockOrder volume */
            volume?: (number | null);

            /** CmdStockOrder amount */
            amount?: (number | null);

            /** CmdStockOrder uid */
            uid?: (number | null);

            /** CmdStockOrder id */
            id?: (number | null);
        }

        /** Represents a CmdStockOrder. */
        class CmdStockOrder implements ICmdStockOrder {

            /**
             * Constructs a new CmdStockOrder.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdStockOrder);

            /** CmdStockOrder code. */
            public code: number;

            /** CmdStockOrder type. */
            public type: pb.OrderType;

            /** CmdStockOrder price. */
            public price: number;

            /** CmdStockOrder volume. */
            public volume: number;

            /** CmdStockOrder amount. */
            public amount: number;

            /** CmdStockOrder uid. */
            public uid: number;

            /** CmdStockOrder id. */
            public id: number;

            /**
             * Encodes the specified CmdStockOrder message. Does not implicitly {@link pb.CmdStockOrder.verify|verify} messages.
             * @param m CmdStockOrder message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdStockOrder, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdStockOrder message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdStockOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdStockOrder;
        }

        /** Properties of a CmdStockOrderReply. */
        interface ICmdStockOrderReply {

            /** CmdStockOrderReply orderId */
            orderId?: (number | null);

            /** CmdStockOrderReply node */
            node?: (number | null);

            /** CmdStockOrderReply result */
            result?: (pb.IErrorInfo | null);
        }

        /** Represents a CmdStockOrderReply. */
        class CmdStockOrderReply implements ICmdStockOrderReply {

            /**
             * Constructs a new CmdStockOrderReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdStockOrderReply);

            /** CmdStockOrderReply orderId. */
            public orderId: number;

            /** CmdStockOrderReply node. */
            public node: number;

            /** CmdStockOrderReply result. */
            public result?: (pb.IErrorInfo | null);

            /**
             * Encodes the specified CmdStockOrderReply message. Does not implicitly {@link pb.CmdStockOrderReply.verify|verify} messages.
             * @param m CmdStockOrderReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdStockOrderReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdStockOrderReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdStockOrderReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdStockOrderReply;
        }

        /** Properties of a CmdStockOrderCancel. */
        interface ICmdStockOrderCancel {

            /** CmdStockOrderCancel orderId */
            orderId?: (number | null);

            /** CmdStockOrderCancel type */
            type?: (pb.OrderType | null);

            /** CmdStockOrderCancel code */
            code?: (number | null);

            /** CmdStockOrderCancel uid */
            uid?: (number | null);

            /** CmdStockOrderCancel id */
            id?: (number | null);

            /** CmdStockOrderCancel node */
            node?: (number | null);
        }

        /** Represents a CmdStockOrderCancel. */
        class CmdStockOrderCancel implements ICmdStockOrderCancel {

            /**
             * Constructs a new CmdStockOrderCancel.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdStockOrderCancel);

            /** CmdStockOrderCancel orderId. */
            public orderId: number;

            /** CmdStockOrderCancel type. */
            public type: pb.OrderType;

            /** CmdStockOrderCancel code. */
            public code: number;

            /** CmdStockOrderCancel uid. */
            public uid: number;

            /** CmdStockOrderCancel id. */
            public id: number;

            /** CmdStockOrderCancel node. */
            public node: number;

            /**
             * Encodes the specified CmdStockOrderCancel message. Does not implicitly {@link pb.CmdStockOrderCancel.verify|verify} messages.
             * @param m CmdStockOrderCancel message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdStockOrderCancel, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdStockOrderCancel message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdStockOrderCancel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdStockOrderCancel;
        }

        /** Properties of a StockOrder. */
        interface IStockOrder {

            /** StockOrder orderId */
            orderId?: (number | null);

            /** StockOrder code */
            code?: (number | null);

            /** StockOrder type */
            type?: (pb.OrderType | null);

            /** StockOrder state */
            state?: (pb.OrderState | null);

            /** StockOrder price */
            price?: (number | null);

            /** StockOrder volume */
            volume?: (number | null);

            /** StockOrder uid */
            uid?: (number | null);

            /** StockOrder ts */
            ts?: (number | null);

            /** StockOrder id */
            id?: (number | null);

            /** StockOrder node */
            node?: (number | null);

            /** StockOrder cost */
            cost?: (number | null);
        }

        /** Represents a StockOrder. */
        class StockOrder implements IStockOrder {

            /**
             * Constructs a new StockOrder.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IStockOrder);

            /** StockOrder orderId. */
            public orderId: number;

            /** StockOrder code. */
            public code: number;

            /** StockOrder type. */
            public type: pb.OrderType;

            /** StockOrder state. */
            public state: pb.OrderState;

            /** StockOrder price. */
            public price: number;

            /** StockOrder volume. */
            public volume: number;

            /** StockOrder uid. */
            public uid: number;

            /** StockOrder ts. */
            public ts: number;

            /** StockOrder id. */
            public id: number;

            /** StockOrder node. */
            public node: number;

            /** StockOrder cost. */
            public cost: number;

            /**
             * Encodes the specified StockOrder message. Does not implicitly {@link pb.StockOrder.verify|verify} messages.
             * @param m StockOrder message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IStockOrder, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a StockOrder message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StockOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.StockOrder;
        }

        /** Properties of a StockOrderList. */
        interface IStockOrderList {

            /** StockOrderList items */
            items?: (pb.IStockOrder[] | null);
        }

        /** Represents a StockOrderList. */
        class StockOrderList implements IStockOrderList {

            /**
             * Constructs a new StockOrderList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IStockOrderList);

            /** StockOrderList items. */
            public items: pb.IStockOrder[];

            /**
             * Encodes the specified StockOrderList message. Does not implicitly {@link pb.StockOrderList.verify|verify} messages.
             * @param m StockOrderList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IStockOrderList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a StockOrderList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StockOrderList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.StockOrderList;
        }

        /** Properties of a StockOrderResult. */
        interface IStockOrderResult {

            /** StockOrderResult result */
            result?: (pb.IErrorInfo | null);

            /** StockOrderResult order */
            order?: (pb.IStockOrder | null);
        }

        /** Represents a StockOrderResult. */
        class StockOrderResult implements IStockOrderResult {

            /**
             * Constructs a new StockOrderResult.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IStockOrderResult);

            /** StockOrderResult result. */
            public result?: (pb.IErrorInfo | null);

            /** StockOrderResult order. */
            public order?: (pb.IStockOrder | null);

            /**
             * Encodes the specified StockOrderResult message. Does not implicitly {@link pb.StockOrderResult.verify|verify} messages.
             * @param m StockOrderResult message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IStockOrderResult, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a StockOrderResult message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StockOrderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.StockOrderResult;
        }

        /** Properties of a StockPosition. */
        interface IStockPosition {

            /** StockPosition code */
            code?: (number | null);

            /** StockPosition volumeFree */
            volumeFree?: (number | null);

            /** StockPosition volume */
            volume?: (number | null);

            /** StockPosition priceCost */
            priceCost?: (number | null);
        }

        /** Represents a StockPosition. */
        class StockPosition implements IStockPosition {

            /**
             * Constructs a new StockPosition.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IStockPosition);

            /** StockPosition code. */
            public code: number;

            /** StockPosition volumeFree. */
            public volumeFree: number;

            /** StockPosition volume. */
            public volume: number;

            /** StockPosition priceCost. */
            public priceCost: number;

            /**
             * Encodes the specified StockPosition message. Does not implicitly {@link pb.StockPosition.verify|verify} messages.
             * @param m StockPosition message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IStockPosition, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a StockPosition message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StockPosition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.StockPosition;
        }

        /** Properties of a StockPositionList. */
        interface IStockPositionList {

            /** StockPositionList items */
            items?: (pb.IStockPosition[] | null);
        }

        /** Represents a StockPositionList. */
        class StockPositionList implements IStockPositionList {

            /**
             * Constructs a new StockPositionList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IStockPositionList);

            /** StockPositionList items. */
            public items: pb.IStockPosition[];

            /**
             * Encodes the specified StockPositionList message. Does not implicitly {@link pb.StockPositionList.verify|verify} messages.
             * @param m StockPositionList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IStockPositionList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a StockPositionList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StockPositionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.StockPositionList;
        }

        /** Properties of a CmdMncgExchange. */
        interface ICmdMncgExchange {

            /** CmdMncgExchange direction */
            direction?: (pb.ExchangeDirection | null);

            /** CmdMncgExchange amount */
            amount?: (number | null);
        }

        /** Represents a CmdMncgExchange. */
        class CmdMncgExchange implements ICmdMncgExchange {

            /**
             * Constructs a new CmdMncgExchange.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdMncgExchange);

            /** CmdMncgExchange direction. */
            public direction: pb.ExchangeDirection;

            /** CmdMncgExchange amount. */
            public amount: number;

            /**
             * Encodes the specified CmdMncgExchange message. Does not implicitly {@link pb.CmdMncgExchange.verify|verify} messages.
             * @param m CmdMncgExchange message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdMncgExchange, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdMncgExchange message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdMncgExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdMncgExchange;
        }

        /** Properties of a CmdMncgExchangeReply. */
        interface ICmdMncgExchangeReply {

            /** CmdMncgExchangeReply result */
            result?: (pb.IErrorInfo | null);

            /** CmdMncgExchangeReply account */
            account?: (number | null);
        }

        /** Represents a CmdMncgExchangeReply. */
        class CmdMncgExchangeReply implements ICmdMncgExchangeReply {

            /**
             * Constructs a new CmdMncgExchangeReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdMncgExchangeReply);

            /** CmdMncgExchangeReply result. */
            public result?: (pb.IErrorInfo | null);

            /** CmdMncgExchangeReply account. */
            public account: number;

            /**
             * Encodes the specified CmdMncgExchangeReply message. Does not implicitly {@link pb.CmdMncgExchangeReply.verify|verify} messages.
             * @param m CmdMncgExchangeReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdMncgExchangeReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdMncgExchangeReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdMncgExchangeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdMncgExchangeReply;
        }

        /** Properties of a CmdMncgEditStock. */
        interface ICmdMncgEditStock {

            /** CmdMncgEditStock removed */
            removed?: (boolean | null);

            /** CmdMncgEditStock code */
            code?: (number | null);

            /** CmdMncgEditStock id */
            id?: (number | null);

            /** CmdMncgEditStock isAiStock */
            isAiStock?: (boolean | null);
        }

        /** Represents a CmdMncgEditStock. */
        class CmdMncgEditStock implements ICmdMncgEditStock {

            /**
             * Constructs a new CmdMncgEditStock.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdMncgEditStock);

            /** CmdMncgEditStock removed. */
            public removed: boolean;

            /** CmdMncgEditStock code. */
            public code: number;

            /** CmdMncgEditStock id. */
            public id: number;

            /** CmdMncgEditStock isAiStock. */
            public isAiStock: boolean;

            /**
             * Encodes the specified CmdMncgEditStock message. Does not implicitly {@link pb.CmdMncgEditStock.verify|verify} messages.
             * @param m CmdMncgEditStock message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdMncgEditStock, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdMncgEditStock message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdMncgEditStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdMncgEditStock;
        }

        /** Properties of a CmdQueryStockOrder. */
        interface ICmdQueryStockOrder {

            /** CmdQueryStockOrder uid */
            uid?: (number | null);

            /** CmdQueryStockOrder from */
            from?: (number | null);

            /** CmdQueryStockOrder to */
            to?: (number | null);

            /** CmdQueryStockOrder pageSize */
            pageSize?: (number | null);

            /** CmdQueryStockOrder orderId */
            orderId?: (number | null);

            /** CmdQueryStockOrder id */
            id?: (number | null);
        }

        /** Represents a CmdQueryStockOrder. */
        class CmdQueryStockOrder implements ICmdQueryStockOrder {

            /**
             * Constructs a new CmdQueryStockOrder.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryStockOrder);

            /** CmdQueryStockOrder uid. */
            public uid: number;

            /** CmdQueryStockOrder from. */
            public from: number;

            /** CmdQueryStockOrder to. */
            public to: number;

            /** CmdQueryStockOrder pageSize. */
            public pageSize: number;

            /** CmdQueryStockOrder orderId. */
            public orderId: number;

            /** CmdQueryStockOrder id. */
            public id: number;

            /**
             * Encodes the specified CmdQueryStockOrder message. Does not implicitly {@link pb.CmdQueryStockOrder.verify|verify} messages.
             * @param m CmdQueryStockOrder message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryStockOrder, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryStockOrder message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryStockOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryStockOrder;
        }

        /** Properties of a CgdsConf. */
        interface ICgdsConf {

            /** CgdsConf id */
            id?: (number | null);

            /** CgdsConf regTo */
            regTo?: (number | null);

            /** CgdsConf from */
            from?: (number | null);

            /** CgdsConf to */
            to?: (number | null);

            /** CgdsConf conf */
            conf?: (string | null);

            /** CgdsConf award */
            award?: (string | null);

            /** CgdsConf status */
            status?: (number | null);

            /** CgdsConf title */
            title?: (string | null);

            /** CgdsConf logo */
            logo?: (string | null);

            /** CgdsConf url */
            url?: (string | null);
        }

        /** Represents a CgdsConf. */
        class CgdsConf implements ICgdsConf {

            /**
             * Constructs a new CgdsConf.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgdsConf);

            /** CgdsConf id. */
            public id: number;

            /** CgdsConf regTo. */
            public regTo: number;

            /** CgdsConf from. */
            public from: number;

            /** CgdsConf to. */
            public to: number;

            /** CgdsConf conf. */
            public conf: string;

            /** CgdsConf award. */
            public award: string;

            /** CgdsConf status. */
            public status: number;

            /** CgdsConf title. */
            public title: string;

            /** CgdsConf logo. */
            public logo: string;

            /** CgdsConf url. */
            public url: string;

            /**
             * Encodes the specified CgdsConf message. Does not implicitly {@link pb.CgdsConf.verify|verify} messages.
             * @param m CgdsConf message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgdsConf, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgdsConf message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgdsConf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgdsConf;
        }

        /** Properties of a CgdsList. */
        interface ICgdsList {

            /** CgdsList items */
            items?: (pb.ICgdsConf[] | null);
        }

        /** Represents a CgdsList. */
        class CgdsList implements ICgdsList {

            /**
             * Constructs a new CgdsList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICgdsList);

            /** CgdsList items. */
            public items: pb.ICgdsConf[];

            /**
             * Encodes the specified CgdsList message. Does not implicitly {@link pb.CgdsList.verify|verify} messages.
             * @param m CgdsList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICgdsList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CgdsList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CgdsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CgdsList;
        }

        /** Properties of a CmdCgdsReg. */
        interface ICmdCgdsReg {

            /** CmdCgdsReg id */
            id?: (number | null);
        }

        /** Represents a CmdCgdsReg. */
        class CmdCgdsReg implements ICmdCgdsReg {

            /**
             * Constructs a new CmdCgdsReg.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdCgdsReg);

            /** CmdCgdsReg id. */
            public id: number;

            /**
             * Encodes the specified CmdCgdsReg message. Does not implicitly {@link pb.CmdCgdsReg.verify|verify} messages.
             * @param m CmdCgdsReg message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdCgdsReg, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdCgdsReg message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdCgdsReg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdCgdsReg;
        }

        /** Properties of a CmdCgdsRegReply. */
        interface ICmdCgdsRegReply {

            /** CmdCgdsRegReply result */
            result?: (pb.IErrorInfo | null);

            /** CmdCgdsRegReply cgdsStateItem */
            cgdsStateItem?: (pb.ICgdsStateItem | null);
        }

        /** Represents a CmdCgdsRegReply. */
        class CmdCgdsRegReply implements ICmdCgdsRegReply {

            /**
             * Constructs a new CmdCgdsRegReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdCgdsRegReply);

            /** CmdCgdsRegReply result. */
            public result?: (pb.IErrorInfo | null);

            /** CmdCgdsRegReply cgdsStateItem. */
            public cgdsStateItem?: (pb.ICgdsStateItem | null);

            /**
             * Encodes the specified CmdCgdsRegReply message. Does not implicitly {@link pb.CmdCgdsRegReply.verify|verify} messages.
             * @param m CmdCgdsRegReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdCgdsRegReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdCgdsRegReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdCgdsRegReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdCgdsRegReply;
        }

        /** Properties of a CmdCgdsRanking. */
        interface ICmdCgdsRanking {

            /** CmdCgdsRanking id */
            id?: (number | null);
        }

        /** Represents a CmdCgdsRanking. */
        class CmdCgdsRanking implements ICmdCgdsRanking {

            /**
             * Constructs a new CmdCgdsRanking.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdCgdsRanking);

            /** CmdCgdsRanking id. */
            public id: number;

            /**
             * Encodes the specified CmdCgdsRanking message. Does not implicitly {@link pb.CmdCgdsRanking.verify|verify} messages.
             * @param m CmdCgdsRanking message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdCgdsRanking, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdCgdsRanking message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdCgdsRanking
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdCgdsRanking;
        }

        /** PriceType enum. */
        enum PriceType {
            PriceType_NULL = 0,
            Open = 1,
            Close = 2,
            High = 3,
            Low = 4
        }

        /** ZsjcGameType enum. */
        enum ZsjcGameType {
            kpjc = 0,
            drjc = 1,
            spjc = 2
        }

        /** Properties of a ZsjcOption. */
        interface IZsjcOption {

            /** ZsjcOption ts */
            ts?: (number | null);

            /** ZsjcOption pt */
            pt?: (pb.PriceType | null);

            /** ZsjcOption money */
            money?: (number | null);
        }

        /** Represents a ZsjcOption. */
        class ZsjcOption implements IZsjcOption {

            /**
             * Constructs a new ZsjcOption.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IZsjcOption);

            /** ZsjcOption ts. */
            public ts: number;

            /** ZsjcOption pt. */
            public pt: pb.PriceType;

            /** ZsjcOption money. */
            public money: number;

            /**
             * Encodes the specified ZsjcOption message. Does not implicitly {@link pb.ZsjcOption.verify|verify} messages.
             * @param m ZsjcOption message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IZsjcOption, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ZsjcOption message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ZsjcOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ZsjcOption;
        }

        /** Properties of a ZsjcGameData. */
        interface IZsjcGameData {

            /** ZsjcGameData gameType */
            gameType?: (pb.ZsjcGameType | null);

            /** ZsjcGameData code */
            code?: (number | null);

            /** ZsjcGameData tsSettling */
            tsSettling?: (number | null);

            /** ZsjcGameData settled */
            settled?: (boolean | null);

            /** ZsjcGameData first */
            first?: (pb.IZsjcOption | null);

            /** ZsjcGameData second */
            second?: (pb.IZsjcOption | null);
        }

        /** Represents a ZsjcGameData. */
        class ZsjcGameData implements IZsjcGameData {

            /**
             * Constructs a new ZsjcGameData.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IZsjcGameData);

            /** ZsjcGameData gameType. */
            public gameType: pb.ZsjcGameType;

            /** ZsjcGameData code. */
            public code: number;

            /** ZsjcGameData tsSettling. */
            public tsSettling: number;

            /** ZsjcGameData settled. */
            public settled: boolean;

            /** ZsjcGameData first. */
            public first?: (pb.IZsjcOption | null);

            /** ZsjcGameData second. */
            public second?: (pb.IZsjcOption | null);

            /**
             * Encodes the specified ZsjcGameData message. Does not implicitly {@link pb.ZsjcGameData.verify|verify} messages.
             * @param m ZsjcGameData message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IZsjcGameData, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ZsjcGameData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ZsjcGameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ZsjcGameData;
        }

        /** Properties of a ZsjcGameList. */
        interface IZsjcGameList {

            /** ZsjcGameList items */
            items?: (pb.IZsjcGameData[] | null);
        }

        /** Represents a ZsjcGameList. */
        class ZsjcGameList implements IZsjcGameList {

            /**
             * Constructs a new ZsjcGameList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IZsjcGameList);

            /** ZsjcGameList items. */
            public items: pb.IZsjcGameData[];

            /**
             * Encodes the specified ZsjcGameList message. Does not implicitly {@link pb.ZsjcGameList.verify|verify} messages.
             * @param m ZsjcGameList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IZsjcGameList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ZsjcGameList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ZsjcGameList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ZsjcGameList;
        }

        /** Properties of a CmdBet. */
        interface ICmdBet {

            /** CmdBet uid */
            uid?: (number | null);

            /** CmdBet money */
            money?: (number | null);

            /** CmdBet gameIndex */
            gameIndex?: (number | null);

            /** CmdBet betting */
            betting?: (number | null);

            /** CmdBet nickname */
            nickname?: (string | null);

            /** CmdBet icon */
            icon?: (string | null);

            /** CmdBet gender */
            gender?: (string | null);
        }

        /** Represents a CmdBet. */
        class CmdBet implements ICmdBet {

            /**
             * Constructs a new CmdBet.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdBet);

            /** CmdBet uid. */
            public uid: number;

            /** CmdBet money. */
            public money: number;

            /** CmdBet gameIndex. */
            public gameIndex: number;

            /** CmdBet betting. */
            public betting: number;

            /** CmdBet nickname. */
            public nickname: string;

            /** CmdBet icon. */
            public icon: string;

            /** CmdBet gender. */
            public gender: string;

            /**
             * Encodes the specified CmdBet message. Does not implicitly {@link pb.CmdBet.verify|verify} messages.
             * @param m CmdBet message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdBet, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdBet message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdBet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdBet;
        }

        /** Properties of a CmdZsjcPlayerBettingList. */
        interface ICmdZsjcPlayerBettingList {

            /** CmdZsjcPlayerBettingList code */
            code?: (number | null);

            /** CmdZsjcPlayerBettingList gametype */
            gametype?: (number | null);
        }

        /** Represents a CmdZsjcPlayerBettingList. */
        class CmdZsjcPlayerBettingList implements ICmdZsjcPlayerBettingList {

            /**
             * Constructs a new CmdZsjcPlayerBettingList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdZsjcPlayerBettingList);

            /** CmdZsjcPlayerBettingList code. */
            public code: number;

            /** CmdZsjcPlayerBettingList gametype. */
            public gametype: number;

            /**
             * Encodes the specified CmdZsjcPlayerBettingList message. Does not implicitly {@link pb.CmdZsjcPlayerBettingList.verify|verify} messages.
             * @param m CmdZsjcPlayerBettingList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdZsjcPlayerBettingList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdZsjcPlayerBettingList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdZsjcPlayerBettingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdZsjcPlayerBettingList;
        }

        /** Properties of a ZsjcPlayerBettingList. */
        interface IZsjcPlayerBettingList {

            /** ZsjcPlayerBettingList code */
            code?: (number | null);

            /** ZsjcPlayerBettingList gametype */
            gametype?: (number | null);

            /** ZsjcPlayerBettingList Items */
            Items?: (pb.IRankingItem[] | null);
        }

        /** Represents a ZsjcPlayerBettingList. */
        class ZsjcPlayerBettingList implements IZsjcPlayerBettingList {

            /**
             * Constructs a new ZsjcPlayerBettingList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IZsjcPlayerBettingList);

            /** ZsjcPlayerBettingList code. */
            public code: number;

            /** ZsjcPlayerBettingList gametype. */
            public gametype: number;

            /** ZsjcPlayerBettingList Items. */
            public Items: pb.IRankingItem[];

            /**
             * Encodes the specified ZsjcPlayerBettingList message. Does not implicitly {@link pb.ZsjcPlayerBettingList.verify|verify} messages.
             * @param m ZsjcPlayerBettingList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IZsjcPlayerBettingList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ZsjcPlayerBettingList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ZsjcPlayerBettingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ZsjcPlayerBettingList;
        }

        /** Properties of a CmdZsjcBettingResultList. */
        interface ICmdZsjcBettingResultList {

            /** CmdZsjcBettingResultList uid */
            uid?: (number | null);

            /** CmdZsjcBettingResultList code */
            code?: (number | null);

            /** CmdZsjcBettingResultList gametype */
            gametype?: (number | null);

            /** CmdZsjcBettingResultList from */
            from?: (number | null);

            /** CmdZsjcBettingResultList to */
            to?: (number | null);

            /** CmdZsjcBettingResultList total */
            total?: (number | null);
        }

        /** Represents a CmdZsjcBettingResultList. */
        class CmdZsjcBettingResultList implements ICmdZsjcBettingResultList {

            /**
             * Constructs a new CmdZsjcBettingResultList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdZsjcBettingResultList);

            /** CmdZsjcBettingResultList uid. */
            public uid: number;

            /** CmdZsjcBettingResultList code. */
            public code: number;

            /** CmdZsjcBettingResultList gametype. */
            public gametype: number;

            /** CmdZsjcBettingResultList from. */
            public from: number;

            /** CmdZsjcBettingResultList to. */
            public to: number;

            /** CmdZsjcBettingResultList total. */
            public total: number;

            /**
             * Encodes the specified CmdZsjcBettingResultList message. Does not implicitly {@link pb.CmdZsjcBettingResultList.verify|verify} messages.
             * @param m CmdZsjcBettingResultList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdZsjcBettingResultList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdZsjcBettingResultList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdZsjcBettingResultList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdZsjcBettingResultList;
        }

        /** Properties of a ZsjcBettingResultItem. */
        interface IZsjcBettingResultItem {

            /** ZsjcBettingResultItem uid */
            uid?: (number | null);

            /** ZsjcBettingResultItem code */
            code?: (number | null);

            /** ZsjcBettingResultItem gametype */
            gametype?: (number | null);

            /** ZsjcBettingResultItem betting */
            betting?: (number | null);

            /** ZsjcBettingResultItem money */
            money?: (number | null);

            /** ZsjcBettingResultItem bonus */
            bonus?: (number | null);

            /** ZsjcBettingResultItem tsBetting */
            tsBetting?: (number | null);

            /** ZsjcBettingResultItem tsSettling */
            tsSettling?: (number | null);
        }

        /** Represents a ZsjcBettingResultItem. */
        class ZsjcBettingResultItem implements IZsjcBettingResultItem {

            /**
             * Constructs a new ZsjcBettingResultItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IZsjcBettingResultItem);

            /** ZsjcBettingResultItem uid. */
            public uid: number;

            /** ZsjcBettingResultItem code. */
            public code: number;

            /** ZsjcBettingResultItem gametype. */
            public gametype: number;

            /** ZsjcBettingResultItem betting. */
            public betting: number;

            /** ZsjcBettingResultItem money. */
            public money: number;

            /** ZsjcBettingResultItem bonus. */
            public bonus: number;

            /** ZsjcBettingResultItem tsBetting. */
            public tsBetting: number;

            /** ZsjcBettingResultItem tsSettling. */
            public tsSettling: number;

            /**
             * Encodes the specified ZsjcBettingResultItem message. Does not implicitly {@link pb.ZsjcBettingResultItem.verify|verify} messages.
             * @param m ZsjcBettingResultItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IZsjcBettingResultItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ZsjcBettingResultItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ZsjcBettingResultItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ZsjcBettingResultItem;
        }

        /** Properties of a ZsjcBettingResult. */
        interface IZsjcBettingResult {

            /** ZsjcBettingResult Items */
            Items?: (pb.IZsjcBettingResultItem[] | null);
        }

        /** Represents a ZsjcBettingResult. */
        class ZsjcBettingResult implements IZsjcBettingResult {

            /**
             * Constructs a new ZsjcBettingResult.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IZsjcBettingResult);

            /** ZsjcBettingResult Items. */
            public Items: pb.IZsjcBettingResultItem[];

            /**
             * Encodes the specified ZsjcBettingResult message. Does not implicitly {@link pb.ZsjcBettingResult.verify|verify} messages.
             * @param m ZsjcBettingResult message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IZsjcBettingResult, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ZsjcBettingResult message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ZsjcBettingResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ZsjcBettingResult;
        }

        /** Properties of a CmdGetWeeklyAward. */
        interface ICmdGetWeeklyAward {

            /** CmdGetWeeklyAward code */
            code?: (string | null);
        }

        /** Represents a CmdGetWeeklyAward. */
        class CmdGetWeeklyAward implements ICmdGetWeeklyAward {

            /**
             * Constructs a new CmdGetWeeklyAward.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetWeeklyAward);

            /** CmdGetWeeklyAward code. */
            public code: string;

            /**
             * Encodes the specified CmdGetWeeklyAward message. Does not implicitly {@link pb.CmdGetWeeklyAward.verify|verify} messages.
             * @param m CmdGetWeeklyAward message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetWeeklyAward, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetWeeklyAward message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetWeeklyAward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetWeeklyAward;
        }

        /** Properties of a CmdGetWeeklyAwardReply. */
        interface ICmdGetWeeklyAwardReply {

            /** CmdGetWeeklyAwardReply result */
            result?: (pb.IErrorInfo | null);

            /** CmdGetWeeklyAwardReply award */
            award?: (pb.IGameProperties | null);
        }

        /** Represents a CmdGetWeeklyAwardReply. */
        class CmdGetWeeklyAwardReply implements ICmdGetWeeklyAwardReply {

            /**
             * Constructs a new CmdGetWeeklyAwardReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetWeeklyAwardReply);

            /** CmdGetWeeklyAwardReply result. */
            public result?: (pb.IErrorInfo | null);

            /** CmdGetWeeklyAwardReply award. */
            public award?: (pb.IGameProperties | null);

            /**
             * Encodes the specified CmdGetWeeklyAwardReply message. Does not implicitly {@link pb.CmdGetWeeklyAwardReply.verify|verify} messages.
             * @param m CmdGetWeeklyAwardReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetWeeklyAwardReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetWeeklyAwardReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetWeeklyAwardReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetWeeklyAwardReply;
        }

        /** Properties of a CmdQueryEventLog. */
        interface ICmdQueryEventLog {

            /** CmdQueryEventLog eventId */
            eventId?: (pb.EventId | null);

            /** CmdQueryEventLog uid */
            uid?: (number | null);

            /** CmdQueryEventLog from */
            from?: (number | null);

            /** CmdQueryEventLog to */
            to?: (number | null);

            /** CmdQueryEventLog total */
            total?: (number | null);
        }

        /** Represents a CmdQueryEventLog. */
        class CmdQueryEventLog implements ICmdQueryEventLog {

            /**
             * Constructs a new CmdQueryEventLog.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryEventLog);

            /** CmdQueryEventLog eventId. */
            public eventId: pb.EventId;

            /** CmdQueryEventLog uid. */
            public uid: number;

            /** CmdQueryEventLog from. */
            public from: number;

            /** CmdQueryEventLog to. */
            public to: number;

            /** CmdQueryEventLog total. */
            public total: number;

            /**
             * Encodes the specified CmdQueryEventLog message. Does not implicitly {@link pb.CmdQueryEventLog.verify|verify} messages.
             * @param m CmdQueryEventLog message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryEventLog, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryEventLog message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryEventLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryEventLog;
        }

        /** Properties of an EventLog. */
        interface IEventLog {

            /** EventLog eventId */
            eventId?: (pb.EventId | null);

            /** EventLog uid */
            uid?: (number | null);

            /** EventLog ts */
            ts?: (number | null);

            /** EventLog log */
            log?: (string | null);
        }

        /** Represents an EventLog. */
        class EventLog implements IEventLog {

            /**
             * Constructs a new EventLog.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IEventLog);

            /** EventLog eventId. */
            public eventId: pb.EventId;

            /** EventLog uid. */
            public uid: number;

            /** EventLog ts. */
            public ts: number;

            /** EventLog log. */
            public log: string;

            /**
             * Encodes the specified EventLog message. Does not implicitly {@link pb.EventLog.verify|verify} messages.
             * @param m EventLog message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IEventLog, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an EventLog message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns EventLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.EventLog;
        }

        /** Properties of an Events. */
        interface IEvents {

            /** Events items */
            items?: (pb.IEventLog[] | null);
        }

        /** Represents an Events. */
        class Events implements IEvents {

            /**
             * Constructs a new Events.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IEvents);

            /** Events items. */
            public items: pb.IEventLog[];

            /**
             * Encodes the specified Events message. Does not implicitly {@link pb.Events.verify|verify} messages.
             * @param m Events message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IEvents, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an Events message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Events
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.Events;
        }

        /** Properties of an ItemOrder. */
        interface IItemOrder {

            /** ItemOrder itemId */
            itemId?: (number | null);

            /** ItemOrder activityId */
            activityId?: (number | null);

            /** ItemOrder count */
            count?: (number | null);

            /** ItemOrder from */
            from?: (pb.AppFrom | null);
        }

        /** Represents an ItemOrder. */
        class ItemOrder implements IItemOrder {

            /**
             * Constructs a new ItemOrder.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IItemOrder);

            /** ItemOrder itemId. */
            public itemId: number;

            /** ItemOrder activityId. */
            public activityId: number;

            /** ItemOrder count. */
            public count: number;

            /** ItemOrder from. */
            public from: pb.AppFrom;

            /**
             * Encodes the specified ItemOrder message. Does not implicitly {@link pb.ItemOrder.verify|verify} messages.
             * @param m ItemOrder message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IItemOrder, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ItemOrder message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ItemOrder
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ItemOrder;
        }

        /** Properties of a CmdShopOrderReply. */
        interface ICmdShopOrderReply {

            /** CmdShopOrderReply result */
            result?: (pb.IErrorInfo | null);

            /** CmdShopOrderReply orderId */
            orderId?: (number | null);

            /** CmdShopOrderReply wxXml */
            wxXml?: (string | null);

            /** CmdShopOrderReply payType */
            payType?: (pb.PaymentType | null);
        }

        /** Represents a CmdShopOrderReply. */
        class CmdShopOrderReply implements ICmdShopOrderReply {

            /**
             * Constructs a new CmdShopOrderReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdShopOrderReply);

            /** CmdShopOrderReply result. */
            public result?: (pb.IErrorInfo | null);

            /** CmdShopOrderReply orderId. */
            public orderId: number;

            /** CmdShopOrderReply wxXml. */
            public wxXml: string;

            /** CmdShopOrderReply payType. */
            public payType: pb.PaymentType;

            /**
             * Encodes the specified CmdShopOrderReply message. Does not implicitly {@link pb.CmdShopOrderReply.verify|verify} messages.
             * @param m CmdShopOrderReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdShopOrderReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdShopOrderReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdShopOrderReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdShopOrderReply;
        }

        /** Properties of a CmdShopOrderQuery. */
        interface ICmdShopOrderQuery {

            /** CmdShopOrderQuery uid */
            uid?: (number | null);

            /** CmdShopOrderQuery orderId */
            orderId?: (number | null);

            /** CmdShopOrderQuery from */
            from?: (pb.AppFrom | null);

            /** CmdShopOrderQuery wxResult */
            wxResult?: (string | null);
        }

        /** Represents a CmdShopOrderQuery. */
        class CmdShopOrderQuery implements ICmdShopOrderQuery {

            /**
             * Constructs a new CmdShopOrderQuery.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdShopOrderQuery);

            /** CmdShopOrderQuery uid. */
            public uid: number;

            /** CmdShopOrderQuery orderId. */
            public orderId: number;

            /** CmdShopOrderQuery from. */
            public from: pb.AppFrom;

            /** CmdShopOrderQuery wxResult. */
            public wxResult: string;

            /**
             * Encodes the specified CmdShopOrderQuery message. Does not implicitly {@link pb.CmdShopOrderQuery.verify|verify} messages.
             * @param m CmdShopOrderQuery message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdShopOrderQuery, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdShopOrderQuery message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdShopOrderQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdShopOrderQuery;
        }

        /** Properties of a CmdMobileBind. */
        interface ICmdMobileBind {

            /** CmdMobileBind mobile */
            mobile?: (string | null);

            /** CmdMobileBind smsCode */
            smsCode?: (string | null);
        }

        /** Represents a CmdMobileBind. */
        class CmdMobileBind implements ICmdMobileBind {

            /**
             * Constructs a new CmdMobileBind.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdMobileBind);

            /** CmdMobileBind mobile. */
            public mobile: string;

            /** CmdMobileBind smsCode. */
            public smsCode: string;

            /**
             * Encodes the specified CmdMobileBind message. Does not implicitly {@link pb.CmdMobileBind.verify|verify} messages.
             * @param m CmdMobileBind message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdMobileBind, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdMobileBind message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdMobileBind
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdMobileBind;
        }

        /** Properties of an ActivityItem. */
        interface IActivityItem {

            /** ActivityItem id */
            id?: (number | null);

            /** ActivityItem title */
            title?: (string | null);

            /** ActivityItem icon */
            icon?: (string | null);

            /** ActivityItem image */
            image?: (string | null);

            /** ActivityItem from */
            from?: (number | null);

            /** ActivityItem to */
            to?: (number | null);

            /** ActivityItem itemId */
            itemId?: (number | null);
        }

        /** Represents an ActivityItem. */
        class ActivityItem implements IActivityItem {

            /**
             * Constructs a new ActivityItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IActivityItem);

            /** ActivityItem id. */
            public id: number;

            /** ActivityItem title. */
            public title: string;

            /** ActivityItem icon. */
            public icon: string;

            /** ActivityItem image. */
            public image: string;

            /** ActivityItem from. */
            public from: number;

            /** ActivityItem to. */
            public to: number;

            /** ActivityItem itemId. */
            public itemId: number;

            /**
             * Encodes the specified ActivityItem message. Does not implicitly {@link pb.ActivityItem.verify|verify} messages.
             * @param m ActivityItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IActivityItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ActivityItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ActivityItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ActivityItem;
        }

        /** Properties of an ActivityConf. */
        interface IActivityConf {

            /** ActivityConf items */
            items?: (pb.IActivityItem[] | null);
        }

        /** Represents an ActivityConf. */
        class ActivityConf implements IActivityConf {

            /**
             * Constructs a new ActivityConf.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IActivityConf);

            /** ActivityConf items. */
            public items: pb.IActivityItem[];

            /**
             * Encodes the specified ActivityConf message. Does not implicitly {@link pb.ActivityConf.verify|verify} messages.
             * @param m ActivityConf message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IActivityConf, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ActivityConf message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ActivityConf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ActivityConf;
        }

        /** Properties of an ActivityLogs. */
        interface IActivityLogs {

            /** ActivityLogs ids */
            ids?: (number[] | null);
        }

        /** Represents an ActivityLogs. */
        class ActivityLogs implements IActivityLogs {

            /**
             * Constructs a new ActivityLogs.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IActivityLogs);

            /** ActivityLogs ids. */
            public ids: number[];

            /**
             * Encodes the specified ActivityLogs message. Does not implicitly {@link pb.ActivityLogs.verify|verify} messages.
             * @param m ActivityLogs message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IActivityLogs, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ActivityLogs message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ActivityLogs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ActivityLogs;
        }

        /** Properties of a CmdGoldAwardPrompt. */
        interface ICmdGoldAwardPrompt {

            /** CmdGoldAwardPrompt text */
            text?: (string | null);

            /** CmdGoldAwardPrompt gold */
            gold?: (number | null);
        }

        /** Represents a CmdGoldAwardPrompt. */
        class CmdGoldAwardPrompt implements ICmdGoldAwardPrompt {

            /**
             * Constructs a new CmdGoldAwardPrompt.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGoldAwardPrompt);

            /** CmdGoldAwardPrompt text. */
            public text: string;

            /** CmdGoldAwardPrompt gold. */
            public gold: number;

            /**
             * Encodes the specified CmdGoldAwardPrompt message. Does not implicitly {@link pb.CmdGoldAwardPrompt.verify|verify} messages.
             * @param m CmdGoldAwardPrompt message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGoldAwardPrompt, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGoldAwardPrompt message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGoldAwardPrompt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGoldAwardPrompt;
        }

        /** Properties of a CmdExchange. */
        interface ICmdExchange {

            /** CmdExchange type */
            type?: (pb.ExchangeType | null);

            /** CmdExchange amount */
            amount?: (number | null);

            /** CmdExchange uid */
            uid?: (number | null);
        }

        /** Represents a CmdExchange. */
        class CmdExchange implements ICmdExchange {

            /**
             * Constructs a new CmdExchange.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdExchange);

            /** CmdExchange type. */
            public type: pb.ExchangeType;

            /** CmdExchange amount. */
            public amount: number;

            /** CmdExchange uid. */
            public uid: number;

            /**
             * Encodes the specified CmdExchange message. Does not implicitly {@link pb.CmdExchange.verify|verify} messages.
             * @param m CmdExchange message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdExchange, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdExchange message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdExchange;
        }

        /** KType enum. */
        enum KType {
            KType_NULL = 0,
            Real = 1,
            Min = 2,
            MinToday = 3,
            Min5 = 4,
            Min15 = 5,
            Min30 = 6,
            Min60 = 7,
            Day = 10,
            Day7 = 11,
            Day30 = 12
        }

        /** KStyle enum. */
        enum KStyle {
            Random = 0,
            Wave = 1,
            Up = 2,
            Down = 3
        }

        /** Properties of a CmdQuoteQuery. */
        interface ICmdQuoteQuery {

            /** CmdQuoteQuery ktype */
            ktype?: (pb.KType | null);

            /** CmdQuoteQuery code */
            code?: (number | null);

            /** CmdQuoteQuery from */
            from?: (number | null);

            /** CmdQuoteQuery total */
            total?: (number | null);

            /** CmdQuoteQuery to */
            to?: (number | null);

            /** CmdQuoteQuery kstyle */
            kstyle?: (pb.KStyle | null);

            /** CmdQuoteQuery reserve */
            reserve?: (number | null);
        }

        /** Represents a CmdQuoteQuery. */
        class CmdQuoteQuery implements ICmdQuoteQuery {

            /**
             * Constructs a new CmdQuoteQuery.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQuoteQuery);

            /** CmdQuoteQuery ktype. */
            public ktype: pb.KType;

            /** CmdQuoteQuery code. */
            public code: number;

            /** CmdQuoteQuery from. */
            public from: number;

            /** CmdQuoteQuery total. */
            public total: number;

            /** CmdQuoteQuery to. */
            public to: number;

            /** CmdQuoteQuery kstyle. */
            public kstyle: pb.KStyle;

            /** CmdQuoteQuery reserve. */
            public reserve: number;

            /**
             * Encodes the specified CmdQuoteQuery message. Does not implicitly {@link pb.CmdQuoteQuery.verify|verify} messages.
             * @param m CmdQuoteQuery message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQuoteQuery, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQuoteQuery message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQuoteQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQuoteQuery;
        }

        /** Properties of a QuoteItem. */
        interface IQuoteItem {

            /** QuoteItem code */
            code?: (number | null);

            /** QuoteItem ktype */
            ktype?: (pb.KType | null);

            /** QuoteItem timestamp */
            timestamp?: (number | null);

            /** QuoteItem price */
            price?: (number | null);

            /** QuoteItem volume */
            volume?: (number | null);

            /** QuoteItem amount */
            amount?: (number | null);

            /** QuoteItem count */
            count?: (number | null);

            /** QuoteItem open */
            open?: (number | null);

            /** QuoteItem close */
            close?: (number | null);

            /** QuoteItem high */
            high?: (number | null);

            /** QuoteItem low */
            low?: (number | null);

            /** QuoteItem ask5Price */
            ask5Price?: (number[] | null);

            /** QuoteItem ask5Volume */
            ask5Volume?: (number[] | null);

            /** QuoteItem bid5Price */
            bid5Price?: (number[] | null);

            /** QuoteItem bid5Volume */
            bid5Volume?: (number[] | null);
        }

        /** Represents a QuoteItem. */
        class QuoteItem implements IQuoteItem {

            /**
             * Constructs a new QuoteItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IQuoteItem);

            /** QuoteItem code. */
            public code: number;

            /** QuoteItem ktype. */
            public ktype: pb.KType;

            /** QuoteItem timestamp. */
            public timestamp: number;

            /** QuoteItem price. */
            public price: number;

            /** QuoteItem volume. */
            public volume: number;

            /** QuoteItem amount. */
            public amount: number;

            /** QuoteItem count. */
            public count: number;

            /** QuoteItem open. */
            public open: number;

            /** QuoteItem close. */
            public close: number;

            /** QuoteItem high. */
            public high: number;

            /** QuoteItem low. */
            public low: number;

            /** QuoteItem ask5Price. */
            public ask5Price: number[];

            /** QuoteItem ask5Volume. */
            public ask5Volume: number[];

            /** QuoteItem bid5Price. */
            public bid5Price: number[];

            /** QuoteItem bid5Volume. */
            public bid5Volume: number[];

            /**
             * Encodes the specified QuoteItem message. Does not implicitly {@link pb.QuoteItem.verify|verify} messages.
             * @param m QuoteItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IQuoteItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a QuoteItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns QuoteItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.QuoteItem;
        }

        /** Properties of a Quotes. */
        interface IQuotes {

            /** Quotes items */
            items?: (pb.IQuoteItem[] | null);
        }

        /** Represents a Quotes. */
        class Quotes implements IQuotes {

            /**
             * Constructs a new Quotes.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IQuotes);

            /** Quotes items. */
            public items: pb.IQuoteItem[];

            /**
             * Encodes the specified Quotes message. Does not implicitly {@link pb.Quotes.verify|verify} messages.
             * @param m Quotes message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IQuotes, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Quotes message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Quotes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.Quotes;
        }

        /** Properties of a QuoteSubscribeItem. */
        interface IQuoteSubscribeItem {

            /** QuoteSubscribeItem code */
            code?: (string | null);

            /** QuoteSubscribeItem flag */
            flag?: (boolean | null);
        }

        /** Represents a QuoteSubscribeItem. */
        class QuoteSubscribeItem implements IQuoteSubscribeItem {

            /**
             * Constructs a new QuoteSubscribeItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IQuoteSubscribeItem);

            /** QuoteSubscribeItem code. */
            public code: string;

            /** QuoteSubscribeItem flag. */
            public flag: boolean;

            /**
             * Encodes the specified QuoteSubscribeItem message. Does not implicitly {@link pb.QuoteSubscribeItem.verify|verify} messages.
             * @param m QuoteSubscribeItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IQuoteSubscribeItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a QuoteSubscribeItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns QuoteSubscribeItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.QuoteSubscribeItem;
        }

        /** Properties of a CmdQuoteSubscribe. */
        interface ICmdQuoteSubscribe {

            /** CmdQuoteSubscribe items */
            items?: (pb.IQuoteSubscribeItem[] | null);
        }

        /** Represents a CmdQuoteSubscribe. */
        class CmdQuoteSubscribe implements ICmdQuoteSubscribe {

            /**
             * Constructs a new CmdQuoteSubscribe.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQuoteSubscribe);

            /** CmdQuoteSubscribe items. */
            public items: pb.IQuoteSubscribeItem[];

            /**
             * Encodes the specified CmdQuoteSubscribe message. Does not implicitly {@link pb.CmdQuoteSubscribe.verify|verify} messages.
             * @param m CmdQuoteSubscribe message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQuoteSubscribe, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQuoteSubscribe message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQuoteSubscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQuoteSubscribe;
        }

        /** Properties of a CmdTradingDay. */
        interface ICmdTradingDay {

            /** CmdTradingDay date */
            date?: (number | null);

            /** CmdTradingDay n */
            n?: (number | null);
        }

        /** Represents a CmdTradingDay. */
        class CmdTradingDay implements ICmdTradingDay {

            /**
             * Constructs a new CmdTradingDay.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdTradingDay);

            /** CmdTradingDay date. */
            public date: number;

            /** CmdTradingDay n. */
            public n: number;

            /**
             * Encodes the specified CmdTradingDay message. Does not implicitly {@link pb.CmdTradingDay.verify|verify} messages.
             * @param m CmdTradingDay message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdTradingDay, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdTradingDay message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdTradingDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdTradingDay;
        }

        /** Properties of a CmdTradingDayReply. */
        interface ICmdTradingDayReply {

            /** CmdTradingDayReply isTradingDay */
            isTradingDay?: (boolean | null);

            /** CmdTradingDayReply days */
            days?: (number[] | null);
        }

        /** Represents a CmdTradingDayReply. */
        class CmdTradingDayReply implements ICmdTradingDayReply {

            /**
             * Constructs a new CmdTradingDayReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdTradingDayReply);

            /** CmdTradingDayReply isTradingDay. */
            public isTradingDay: boolean;

            /** CmdTradingDayReply days. */
            public days: number[];

            /**
             * Encodes the specified CmdTradingDayReply message. Does not implicitly {@link pb.CmdTradingDayReply.verify|verify} messages.
             * @param m CmdTradingDayReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdTradingDayReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdTradingDayReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdTradingDayReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdTradingDayReply;
        }

        /** Properties of a CmdRecommendStock. */
        interface ICmdRecommendStock {

            /** CmdRecommendStock channelId */
            channelId?: (number | null);

            /** CmdRecommendStock from */
            from?: (number | null);

            /** CmdRecommendStock total */
            total?: (number | null);

            /** CmdRecommendStock to */
            to?: (number | null);
        }

        /** Represents a CmdRecommendStock. */
        class CmdRecommendStock implements ICmdRecommendStock {

            /**
             * Constructs a new CmdRecommendStock.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRecommendStock);

            /** CmdRecommendStock channelId. */
            public channelId: number;

            /** CmdRecommendStock from. */
            public from: number;

            /** CmdRecommendStock total. */
            public total: number;

            /** CmdRecommendStock to. */
            public to: number;

            /**
             * Encodes the specified CmdRecommendStock message. Does not implicitly {@link pb.CmdRecommendStock.verify|verify} messages.
             * @param m CmdRecommendStock message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRecommendStock, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRecommendStock message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRecommendStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRecommendStock;
        }

        /** Properties of a RecommendItem. */
        interface IRecommendItem {

            /** RecommendItem code */
            code?: (number | null);

            /** RecommendItem price */
            price?: (string | null);
        }

        /** Represents a RecommendItem. */
        class RecommendItem implements IRecommendItem {

            /**
             * Constructs a new RecommendItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRecommendItem);

            /** RecommendItem code. */
            public code: number;

            /** RecommendItem price. */
            public price: string;

            /**
             * Encodes the specified RecommendItem message. Does not implicitly {@link pb.RecommendItem.verify|verify} messages.
             * @param m RecommendItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRecommendItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RecommendItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RecommendItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RecommendItem;
        }

        /** Properties of a RecommendStockItem. */
        interface IRecommendStockItem {

            /** RecommendStockItem channelId */
            channelId?: (number | null);

            /** RecommendStockItem ts */
            ts?: (number | null);

            /** RecommendStockItem list */
            list?: (pb.IRecommendItem[] | null);
        }

        /** Represents a RecommendStockItem. */
        class RecommendStockItem implements IRecommendStockItem {

            /**
             * Constructs a new RecommendStockItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRecommendStockItem);

            /** RecommendStockItem channelId. */
            public channelId: number;

            /** RecommendStockItem ts. */
            public ts: number;

            /** RecommendStockItem list. */
            public list: pb.IRecommendItem[];

            /**
             * Encodes the specified RecommendStockItem message. Does not implicitly {@link pb.RecommendStockItem.verify|verify} messages.
             * @param m RecommendStockItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRecommendStockItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RecommendStockItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RecommendStockItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RecommendStockItem;
        }

        /** Properties of a CmdRecommendStockReply. */
        interface ICmdRecommendStockReply {

            /** CmdRecommendStockReply items */
            items?: (pb.IRecommendStockItem[] | null);

            /** CmdRecommendStockReply ts */
            ts?: (number | null);
        }

        /** Represents a CmdRecommendStockReply. */
        class CmdRecommendStockReply implements ICmdRecommendStockReply {

            /**
             * Constructs a new CmdRecommendStockReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRecommendStockReply);

            /** CmdRecommendStockReply items. */
            public items: pb.IRecommendStockItem[];

            /** CmdRecommendStockReply ts. */
            public ts: number;

            /**
             * Encodes the specified CmdRecommendStockReply message. Does not implicitly {@link pb.CmdRecommendStockReply.verify|verify} messages.
             * @param m CmdRecommendStockReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRecommendStockReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRecommendStockReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRecommendStockReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRecommendStockReply;
        }

        /** Properties of a CmdQuoteQueryFuture. */
        interface ICmdQuoteQueryFuture {

            /** CmdQuoteQueryFuture ktype */
            ktype?: (pb.KType | null);

            /** CmdQuoteQueryFuture code */
            code?: (number | null);

            /** CmdQuoteQueryFuture from */
            from?: (number | null);

            /** CmdQuoteQueryFuture total */
            total?: (number | null);

            /** CmdQuoteQueryFuture to */
            to?: (number | null);

            /** CmdQuoteQueryFuture reserve */
            reserve?: (number | null);
        }

        /** Represents a CmdQuoteQueryFuture. */
        class CmdQuoteQueryFuture implements ICmdQuoteQueryFuture {

            /**
             * Constructs a new CmdQuoteQueryFuture.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQuoteQueryFuture);

            /** CmdQuoteQueryFuture ktype. */
            public ktype: pb.KType;

            /** CmdQuoteQueryFuture code. */
            public code: number;

            /** CmdQuoteQueryFuture from. */
            public from: number;

            /** CmdQuoteQueryFuture total. */
            public total: number;

            /** CmdQuoteQueryFuture to. */
            public to: number;

            /** CmdQuoteQueryFuture reserve. */
            public reserve: number;

            /**
             * Encodes the specified CmdQuoteQueryFuture message. Does not implicitly {@link pb.CmdQuoteQueryFuture.verify|verify} messages.
             * @param m CmdQuoteQueryFuture message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQuoteQueryFuture, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQuoteQueryFuture message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQuoteQueryFuture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQuoteQueryFuture;
        }

        /** Properties of a QuoteItemFuture. */
        interface IQuoteItemFuture {

            /** QuoteItemFuture code */
            code?: (number | null);

            /** QuoteItemFuture ktype */
            ktype?: (pb.KType | null);

            /** QuoteItemFuture timestamp */
            timestamp?: (number | null);

            /** QuoteItemFuture open */
            open?: (number | null);

            /** QuoteItemFuture close */
            close?: (number | null);

            /** QuoteItemFuture high */
            high?: (number | null);

            /** QuoteItemFuture low */
            low?: (number | null);

            /** QuoteItemFuture volume */
            volume?: (number | null);

            /** QuoteItemFuture cclHold */
            cclHold?: (number | null);
        }

        /** Represents a QuoteItemFuture. */
        class QuoteItemFuture implements IQuoteItemFuture {

            /**
             * Constructs a new QuoteItemFuture.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IQuoteItemFuture);

            /** QuoteItemFuture code. */
            public code: number;

            /** QuoteItemFuture ktype. */
            public ktype: pb.KType;

            /** QuoteItemFuture timestamp. */
            public timestamp: number;

            /** QuoteItemFuture open. */
            public open: number;

            /** QuoteItemFuture close. */
            public close: number;

            /** QuoteItemFuture high. */
            public high: number;

            /** QuoteItemFuture low. */
            public low: number;

            /** QuoteItemFuture volume. */
            public volume: number;

            /** QuoteItemFuture cclHold. */
            public cclHold: number;

            /**
             * Encodes the specified QuoteItemFuture message. Does not implicitly {@link pb.QuoteItemFuture.verify|verify} messages.
             * @param m QuoteItemFuture message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IQuoteItemFuture, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a QuoteItemFuture message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns QuoteItemFuture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.QuoteItemFuture;
        }

        /** Properties of a QuotesFuture. */
        interface IQuotesFuture {

            /** QuotesFuture items */
            items?: (pb.IQuoteItemFuture[] | null);
        }

        /** Represents a QuotesFuture. */
        class QuotesFuture implements IQuotesFuture {

            /**
             * Constructs a new QuotesFuture.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IQuotesFuture);

            /** QuotesFuture items. */
            public items: pb.IQuoteItemFuture[];

            /**
             * Encodes the specified QuotesFuture message. Does not implicitly {@link pb.QuotesFuture.verify|verify} messages.
             * @param m QuotesFuture message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IQuotesFuture, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a QuotesFuture message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns QuotesFuture
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.QuotesFuture;
        }

        /** Properties of a CmdQueryAiStockList. */
        interface ICmdQueryAiStockList {

            /** CmdQueryAiStockList rankFrom */
            rankFrom?: (number | null);

            /** CmdQueryAiStockList tsUpdateFrom */
            tsUpdateFrom?: (number | null);

            /** CmdQueryAiStockList total */
            total?: (number | null);

            /** CmdQueryAiStockList codes */
            codes?: (number[] | null);
        }

        /** Represents a CmdQueryAiStockList. */
        class CmdQueryAiStockList implements ICmdQueryAiStockList {

            /**
             * Constructs a new CmdQueryAiStockList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryAiStockList);

            /** CmdQueryAiStockList rankFrom. */
            public rankFrom: number;

            /** CmdQueryAiStockList tsUpdateFrom. */
            public tsUpdateFrom: number;

            /** CmdQueryAiStockList total. */
            public total: number;

            /** CmdQueryAiStockList codes. */
            public codes: number[];

            /**
             * Encodes the specified CmdQueryAiStockList message. Does not implicitly {@link pb.CmdQueryAiStockList.verify|verify} messages.
             * @param m CmdQueryAiStockList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryAiStockList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryAiStockList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryAiStockList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryAiStockList;
        }

        /** Properties of an AiStockItem. */
        interface IAiStockItem {

            /** AiStockItem code */
            code?: (number | null);

            /** AiStockItem name */
            name?: (string | null);

            /** AiStockItem industry */
            industry?: (string | null);

            /** AiStockItem tsUpdated */
            tsUpdated?: (number | null);

            /** AiStockItem profitRanking */
            profitRanking?: (number | null);

            /** AiStockItem profitRate */
            profitRate?: (number | null);

            /** AiStockItem lastAskPrice */
            lastAskPrice?: (number | null);

            /** AiStockItem lastBidPrice */
            lastBidPrice?: (number | null);

            /** AiStockItem curAskPrice */
            curAskPrice?: (number | null);

            /** AiStockItem todaySignal */
            todaySignal?: (number | null);

            /** AiStockItem curAskTs */
            curAskTs?: (number | null);

            /** AiStockItem lastBidTs */
            lastBidTs?: (number | null);

            /** AiStockItem lastAskTs */
            lastAskTs?: (number | null);
        }

        /** Represents an AiStockItem. */
        class AiStockItem implements IAiStockItem {

            /**
             * Constructs a new AiStockItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IAiStockItem);

            /** AiStockItem code. */
            public code: number;

            /** AiStockItem name. */
            public name: string;

            /** AiStockItem industry. */
            public industry: string;

            /** AiStockItem tsUpdated. */
            public tsUpdated: number;

            /** AiStockItem profitRanking. */
            public profitRanking: number;

            /** AiStockItem profitRate. */
            public profitRate: number;

            /** AiStockItem lastAskPrice. */
            public lastAskPrice: number;

            /** AiStockItem lastBidPrice. */
            public lastBidPrice: number;

            /** AiStockItem curAskPrice. */
            public curAskPrice: number;

            /** AiStockItem todaySignal. */
            public todaySignal: number;

            /** AiStockItem curAskTs. */
            public curAskTs: number;

            /** AiStockItem lastBidTs. */
            public lastBidTs: number;

            /** AiStockItem lastAskTs. */
            public lastAskTs: number;

            /**
             * Encodes the specified AiStockItem message. Does not implicitly {@link pb.AiStockItem.verify|verify} messages.
             * @param m AiStockItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IAiStockItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an AiStockItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns AiStockItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.AiStockItem;
        }

        /** Properties of a CmdQueryAiStockListReply. */
        interface ICmdQueryAiStockListReply {

            /** CmdQueryAiStockListReply items */
            items?: (pb.IAiStockItem[] | null);
        }

        /** Represents a CmdQueryAiStockListReply. */
        class CmdQueryAiStockListReply implements ICmdQueryAiStockListReply {

            /**
             * Constructs a new CmdQueryAiStockListReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryAiStockListReply);

            /** CmdQueryAiStockListReply items. */
            public items: pb.IAiStockItem[];

            /**
             * Encodes the specified CmdQueryAiStockListReply message. Does not implicitly {@link pb.CmdQueryAiStockListReply.verify|verify} messages.
             * @param m CmdQueryAiStockListReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryAiStockListReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryAiStockListReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryAiStockListReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryAiStockListReply;
        }

        /** Properties of a CmdQueryAiSignal. */
        interface ICmdQueryAiSignal {

            /** CmdQueryAiSignal code */
            code?: (number | null);
        }

        /** Represents a CmdQueryAiSignal. */
        class CmdQueryAiSignal implements ICmdQueryAiSignal {

            /**
             * Constructs a new CmdQueryAiSignal.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryAiSignal);

            /** CmdQueryAiSignal code. */
            public code: number;

            /**
             * Encodes the specified CmdQueryAiSignal message. Does not implicitly {@link pb.CmdQueryAiSignal.verify|verify} messages.
             * @param m CmdQueryAiSignal message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryAiSignal, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryAiSignal message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryAiSignal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryAiSignal;
        }

        /** Properties of an AiSignalItem. */
        interface IAiSignalItem {

            /** AiSignalItem ts */
            ts?: (number | null);

            /** AiSignalItem flag */
            flag?: (number | null);

            /** AiSignalItem price */
            price?: (number | null);

            /** AiSignalItem ma10 */
            ma10?: (number | null);

            /** AiSignalItem ma30 */
            ma30?: (number | null);
        }

        /** Represents an AiSignalItem. */
        class AiSignalItem implements IAiSignalItem {

            /**
             * Constructs a new AiSignalItem.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IAiSignalItem);

            /** AiSignalItem ts. */
            public ts: number;

            /** AiSignalItem flag. */
            public flag: number;

            /** AiSignalItem price. */
            public price: number;

            /** AiSignalItem ma10. */
            public ma10: number;

            /** AiSignalItem ma30. */
            public ma30: number;

            /**
             * Encodes the specified AiSignalItem message. Does not implicitly {@link pb.AiSignalItem.verify|verify} messages.
             * @param m AiSignalItem message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IAiSignalItem, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an AiSignalItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns AiSignalItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.AiSignalItem;
        }

        /** Properties of a CmdQueryAiSignalReply. */
        interface ICmdQueryAiSignalReply {

            /** CmdQueryAiSignalReply code */
            code?: (number | null);

            /** CmdQueryAiSignalReply industry */
            industry?: (string | null);

            /** CmdQueryAiSignalReply signals */
            signals?: (pb.IAiSignalItem[] | null);
        }

        /** Represents a CmdQueryAiSignalReply. */
        class CmdQueryAiSignalReply implements ICmdQueryAiSignalReply {

            /**
             * Constructs a new CmdQueryAiSignalReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdQueryAiSignalReply);

            /** CmdQueryAiSignalReply code. */
            public code: number;

            /** CmdQueryAiSignalReply industry. */
            public industry: string;

            /** CmdQueryAiSignalReply signals. */
            public signals: pb.IAiSignalItem[];

            /**
             * Encodes the specified CmdQueryAiSignalReply message. Does not implicitly {@link pb.CmdQueryAiSignalReply.verify|verify} messages.
             * @param m CmdQueryAiSignalReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdQueryAiSignalReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdQueryAiSignalReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdQueryAiSignalReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdQueryAiSignalReply;
        }

        /** Represents a QuotesService */
        class QuotesService extends protobuf.rpc.Service {

            /**
             * Constructs a new QuotesService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls QuotesQuery.
             * @param request CmdQuoteQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and Quotes
             */
            public quotesQuery(request: pb.ICmdQuoteQuery, callback: pb.QuotesService.QuotesQueryCallback): void;

            /**
             * Calls QuotesQuery.
             * @param request CmdQuoteQuery message or plain object
             * @returns Promise
             */
            public quotesQuery(request: pb.ICmdQuoteQuery): Promise<pb.Quotes>;

            /**
             * Calls QuotesSubscribe.
             * @param request CmdQuoteSubscribe message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public quotesSubscribe(request: pb.ICmdQuoteSubscribe, callback: pb.QuotesService.QuotesSubscribeCallback): void;

            /**
             * Calls QuotesSubscribe.
             * @param request CmdQuoteSubscribe message or plain object
             * @returns Promise
             */
            public quotesSubscribe(request: pb.ICmdQuoteSubscribe): Promise<pb.ErrorInfo>;

            /**
             * Calls IsTradingDay.
             * @param request CmdTradingDay message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdTradingDayReply
             */
            public isTradingDay(request: pb.ICmdTradingDay, callback: pb.QuotesService.IsTradingDayCallback): void;

            /**
             * Calls IsTradingDay.
             * @param request CmdTradingDay message or plain object
             * @returns Promise
             */
            public isTradingDay(request: pb.ICmdTradingDay): Promise<pb.CmdTradingDayReply>;

            /**
             * Calls QueryTradingDay.
             * @param request CmdTradingDay message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdTradingDayReply
             */
            public queryTradingDay(request: pb.ICmdTradingDay, callback: pb.QuotesService.QueryTradingDayCallback): void;

            /**
             * Calls QueryTradingDay.
             * @param request CmdTradingDay message or plain object
             * @returns Promise
             */
            public queryTradingDay(request: pb.ICmdTradingDay): Promise<pb.CmdTradingDayReply>;

            /**
             * Calls QueryAiStockList.
             * @param request CmdQueryAiStockList message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdQueryAiStockListReply
             */
            public queryAiStockList(request: pb.ICmdQueryAiStockList, callback: pb.QuotesService.QueryAiStockListCallback): void;

            /**
             * Calls QueryAiStockList.
             * @param request CmdQueryAiStockList message or plain object
             * @returns Promise
             */
            public queryAiStockList(request: pb.ICmdQueryAiStockList): Promise<pb.CmdQueryAiStockListReply>;

            /**
             * Calls QueryAiSignal.
             * @param request CmdQueryAiSignal message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdQueryAiSignalReply
             */
            public queryAiSignal(request: pb.ICmdQueryAiSignal, callback: pb.QuotesService.QueryAiSignalCallback): void;

            /**
             * Calls QueryAiSignal.
             * @param request CmdQueryAiSignal message or plain object
             * @returns Promise
             */
            public queryAiSignal(request: pb.ICmdQueryAiSignal): Promise<pb.CmdQueryAiSignalReply>;
        }

        namespace QuotesService {

            /**
             * Callback as used by {@link pb.QuotesService#quotesQuery}.
             * @param error Error, if any
             * @param [response] Quotes
             */
            type QuotesQueryCallback = (error: (Error | null), response?: pb.Quotes) => void;

            /**
             * Callback as used by {@link pb.QuotesService#quotesSubscribe}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type QuotesSubscribeCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.QuotesService#isTradingDay}.
             * @param error Error, if any
             * @param [response] CmdTradingDayReply
             */
            type IsTradingDayCallback = (error: (Error | null), response?: pb.CmdTradingDayReply) => void;

            /**
             * Callback as used by {@link pb.QuotesService#queryTradingDay}.
             * @param error Error, if any
             * @param [response] CmdTradingDayReply
             */
            type QueryTradingDayCallback = (error: (Error | null), response?: pb.CmdTradingDayReply) => void;

            /**
             * Callback as used by {@link pb.QuotesService#queryAiStockList}.
             * @param error Error, if any
             * @param [response] CmdQueryAiStockListReply
             */
            type QueryAiStockListCallback = (error: (Error | null), response?: pb.CmdQueryAiStockListReply) => void;

            /**
             * Callback as used by {@link pb.QuotesService#queryAiSignal}.
             * @param error Error, if any
             * @param [response] CmdQueryAiSignalReply
             */
            type QueryAiSignalCallback = (error: (Error | null), response?: pb.CmdQueryAiSignalReply) => void;
        }

        /** Represents a QuotesFutureService */
        class QuotesFutureService extends protobuf.rpc.Service {

            /**
             * Constructs a new QuotesFutureService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls QuotesQuery.
             * @param request CmdQuoteQueryFuture message or plain object
             * @param callback Node-style callback called with the error, if any, and QuotesFuture
             */
            public quotesQuery(request: pb.ICmdQuoteQueryFuture, callback: pb.QuotesFutureService.QuotesQueryCallback): void;

            /**
             * Calls QuotesQuery.
             * @param request CmdQuoteQueryFuture message or plain object
             * @returns Promise
             */
            public quotesQuery(request: pb.ICmdQuoteQueryFuture): Promise<pb.QuotesFuture>;
        }

        namespace QuotesFutureService {

            /**
             * Callback as used by {@link pb.QuotesFutureService#quotesQuery}.
             * @param error Error, if any
             * @param [response] QuotesFuture
             */
            type QuotesQueryCallback = (error: (Error | null), response?: pb.QuotesFuture) => void;
        }

        /** Platform enum. */
        enum Platform {
            Platform_Null = 0,
            Platform_Andriod = 1,
            Platform_Apple = 2,
            Platform_WeChatMinProgram = 3
        }

        /** AppFrom enum. */
        enum AppFrom {
            Ios_000 = 0,
            Android_001 = 1,
            Android_201 = 201,
            Android_204 = 204,
            Android_205 = 205,
            Android_206 = 206,
            Android_208 = 208,
            Android_209 = 209,
            Android_210 = 210,
            Android_211 = 211,
            Android_212 = 212,
            Android_301 = 301,
            Android_302 = 302,
            Android_601 = 601,
            Android_1000 = 1000,
            Android_1204 = 1204,
            Android_1205 = 1205,
            Android_1208 = 1208,
            Android_1212 = 1212,
            WebsiteAndriod = 4999,
            WebsiteIos = 6666,
            IosAppleStore = 6667,
            Ipad = 6668,
            WeChatMinProgram = 8888,
            Website3th = 9999,
            Test = 10000
        }

        /** LoginType enum. */
        enum LoginType {
            LoginType_NULL = 0,
            MobilePhoneId = 1,
            WeChat = 2,
            QQ = 3,
            WeChat_MiniProg = 4,
            AppTest = 98,
            WebTest = 99
        }

        /** AdPosition enum. */
        enum AdPosition {
            AdPosition_NULL = 0,
            AdPosition_Startup = 1,
            AdPosition_Main = 2,
            AdPosition_Exit = 3,
            AdPosition_Plugin = 4,
            AdPosition_CgdsList = 5,
            AdPosition_AiStockList = 6,
            AdPosition_Qihuo = 7,
            AdPosition_DailyAward = 8,
            AdPosition_7Award = 9,
            AdPosition_Dxxl = 10,
            AdPosition_Qhxl = 11,
            AdPosition_Tjdxl = 12,
            AdPosition_Broker = 13,
            AdPosition_Cg = 14
        }

        /** Properties of an AdClicked. */
        interface IAdClicked {

            /** AdClicked id */
            id?: (number | null);

            /** AdClicked pos */
            pos?: (number | null);

            /** AdClicked url */
            url?: (string | null);

            /** AdClicked title */
            title?: (string | null);

            /** AdClicked uid */
            uid?: (number | null);

            /** AdClicked from */
            from?: (pb.AppFrom | null);

            /** AdClicked gold */
            gold?: (number | null);

            /** AdClicked diamond */
            diamond?: (number | null);

            /** AdClicked coupon */
            coupon?: (number | null);
        }

        /** Represents an AdClicked. */
        class AdClicked implements IAdClicked {

            /**
             * Constructs a new AdClicked.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IAdClicked);

            /** AdClicked id. */
            public id: number;

            /** AdClicked pos. */
            public pos: number;

            /** AdClicked url. */
            public url: string;

            /** AdClicked title. */
            public title: string;

            /** AdClicked uid. */
            public uid: number;

            /** AdClicked from. */
            public from: pb.AppFrom;

            /** AdClicked gold. */
            public gold: number;

            /** AdClicked diamond. */
            public diamond: number;

            /** AdClicked coupon. */
            public coupon: number;

            /**
             * Encodes the specified AdClicked message. Does not implicitly {@link pb.AdClicked.verify|verify} messages.
             * @param m AdClicked message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IAdClicked, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an AdClicked message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns AdClicked
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.AdClicked;
        }

        /** Properties of a CmdRegistry. */
        interface ICmdRegistry {

            /** CmdRegistry account */
            account?: (string | null);

            /** CmdRegistry type */
            type?: (pb.LoginType | null);

            /** CmdRegistry pwd */
            pwd?: (string | null);

            /** CmdRegistry smsCode */
            smsCode?: (string | null);

            /** CmdRegistry from */
            from?: (pb.AppFrom | null);

            /** CmdRegistry websocket */
            websocket?: (boolean | null);

            /** CmdRegistry unionId */
            unionId?: (string | null);

            /** CmdRegistry inviter */
            inviter?: (number | null);
        }

        /** Represents a CmdRegistry. */
        class CmdRegistry implements ICmdRegistry {

            /**
             * Constructs a new CmdRegistry.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdRegistry);

            /** CmdRegistry account. */
            public account: string;

            /** CmdRegistry type. */
            public type: pb.LoginType;

            /** CmdRegistry pwd. */
            public pwd: string;

            /** CmdRegistry smsCode. */
            public smsCode: string;

            /** CmdRegistry from. */
            public from: pb.AppFrom;

            /** CmdRegistry websocket. */
            public websocket: boolean;

            /** CmdRegistry unionId. */
            public unionId: string;

            /** CmdRegistry inviter. */
            public inviter: number;

            /**
             * Encodes the specified CmdRegistry message. Does not implicitly {@link pb.CmdRegistry.verify|verify} messages.
             * @param m CmdRegistry message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdRegistry, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdRegistry message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdRegistry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdRegistry;
        }

        /** Properties of a CmdLogin. */
        interface ICmdLogin {

            /** CmdLogin account */
            account?: (string | null);

            /** CmdLogin type */
            type?: (pb.LoginType | null);

            /** CmdLogin pwd */
            pwd?: (string | null);

            /** CmdLogin from */
            from?: (pb.AppFrom | null);

            /** CmdLogin websocket */
            websocket?: (boolean | null);

            /** CmdLogin unionId */
            unionId?: (string | null);

            /** CmdLogin inviter */
            inviter?: (number | null);
        }

        /** Represents a CmdLogin. */
        class CmdLogin implements ICmdLogin {

            /**
             * Constructs a new CmdLogin.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdLogin);

            /** CmdLogin account. */
            public account: string;

            /** CmdLogin type. */
            public type: pb.LoginType;

            /** CmdLogin pwd. */
            public pwd: string;

            /** CmdLogin from. */
            public from: pb.AppFrom;

            /** CmdLogin websocket. */
            public websocket: boolean;

            /** CmdLogin unionId. */
            public unionId: string;

            /** CmdLogin inviter. */
            public inviter: number;

            /**
             * Encodes the specified CmdLogin message. Does not implicitly {@link pb.CmdLogin.verify|verify} messages.
             * @param m CmdLogin message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdLogin, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdLogin message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdLogin;
        }

        /** Properties of a CmdLoginReply. */
        interface ICmdLoginReply {

            /** CmdLoginReply err */
            err?: (pb.IErrorInfo | null);

            /** CmdLoginReply uid */
            uid?: (number | null);

            /** CmdLoginReply token */
            token?: (string | null);

            /** CmdLoginReply gameAddr */
            gameAddr?: (string | null);
        }

        /** Represents a CmdLoginReply. */
        class CmdLoginReply implements ICmdLoginReply {

            /**
             * Constructs a new CmdLoginReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdLoginReply);

            /** CmdLoginReply err. */
            public err?: (pb.IErrorInfo | null);

            /** CmdLoginReply uid. */
            public uid: number;

            /** CmdLoginReply token. */
            public token: string;

            /** CmdLoginReply gameAddr. */
            public gameAddr: string;

            /**
             * Encodes the specified CmdLoginReply message. Does not implicitly {@link pb.CmdLoginReply.verify|verify} messages.
             * @param m CmdLoginReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdLoginReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdLoginReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdLoginReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdLoginReply;
        }

        /** Properties of a CmdGetCaptcha. */
        interface ICmdGetCaptcha {

            /** CmdGetCaptcha account */
            account?: (string | null);
        }

        /** Represents a CmdGetCaptcha. */
        class CmdGetCaptcha implements ICmdGetCaptcha {

            /**
             * Constructs a new CmdGetCaptcha.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetCaptcha);

            /** CmdGetCaptcha account. */
            public account: string;

            /**
             * Encodes the specified CmdGetCaptcha message. Does not implicitly {@link pb.CmdGetCaptcha.verify|verify} messages.
             * @param m CmdGetCaptcha message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetCaptcha, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetCaptcha message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetCaptcha
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetCaptcha;
        }

        /** Properties of a CmdGetCaptchaReply. */
        interface ICmdGetCaptchaReply {

            /** CmdGetCaptchaReply captcha */
            captcha?: (Uint8Array | null);
        }

        /** Represents a CmdGetCaptchaReply. */
        class CmdGetCaptchaReply implements ICmdGetCaptchaReply {

            /**
             * Constructs a new CmdGetCaptchaReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetCaptchaReply);

            /** CmdGetCaptchaReply captcha. */
            public captcha: Uint8Array;

            /**
             * Encodes the specified CmdGetCaptchaReply message. Does not implicitly {@link pb.CmdGetCaptchaReply.verify|verify} messages.
             * @param m CmdGetCaptchaReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetCaptchaReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetCaptchaReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetCaptchaReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetCaptchaReply;
        }

        /** Properties of a CmdGetSms. */
        interface ICmdGetSms {

            /** CmdGetSms account */
            account?: (string | null);

            /** CmdGetSms captcha */
            captcha?: (string | null);
        }

        /** Represents a CmdGetSms. */
        class CmdGetSms implements ICmdGetSms {

            /**
             * Constructs a new CmdGetSms.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGetSms);

            /** CmdGetSms account. */
            public account: string;

            /** CmdGetSms captcha. */
            public captcha: string;

            /**
             * Encodes the specified CmdGetSms message. Does not implicitly {@link pb.CmdGetSms.verify|verify} messages.
             * @param m CmdGetSms message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGetSms, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGetSms message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGetSms
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGetSms;
        }

        /** Properties of a CmdResetPwd. */
        interface ICmdResetPwd {

            /** CmdResetPwd account */
            account?: (string | null);

            /** CmdResetPwd pwd */
            pwd?: (string | null);

            /** CmdResetPwd captcha */
            captcha?: (string | null);
        }

        /** Represents a CmdResetPwd. */
        class CmdResetPwd implements ICmdResetPwd {

            /**
             * Constructs a new CmdResetPwd.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdResetPwd);

            /** CmdResetPwd account. */
            public account: string;

            /** CmdResetPwd pwd. */
            public pwd: string;

            /** CmdResetPwd captcha. */
            public captcha: string;

            /**
             * Encodes the specified CmdResetPwd message. Does not implicitly {@link pb.CmdResetPwd.verify|verify} messages.
             * @param m CmdResetPwd message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdResetPwd, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdResetPwd message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdResetPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdResetPwd;
        }

        /** Properties of a CmdPay. */
        interface ICmdPay {

            /** CmdPay uid */
            uid?: (number | null);

            /** CmdPay orderId */
            orderId?: (number | null);
        }

        /** Represents a CmdPay. */
        class CmdPay implements ICmdPay {

            /**
             * Constructs a new CmdPay.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdPay);

            /** CmdPay uid. */
            public uid: number;

            /** CmdPay orderId. */
            public orderId: number;

            /**
             * Encodes the specified CmdPay message. Does not implicitly {@link pb.CmdPay.verify|verify} messages.
             * @param m CmdPay message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdPay, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdPay message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdPay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdPay;
        }

        /** Represents a LoginService */
        class LoginService extends protobuf.rpc.Service {

            /**
             * Constructs a new LoginService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Registry.
             * @param request CmdRegistry message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public registry(request: pb.ICmdRegistry, callback: pb.LoginService.RegistryCallback): void;

            /**
             * Calls Registry.
             * @param request CmdRegistry message or plain object
             * @returns Promise
             */
            public registry(request: pb.ICmdRegistry): Promise<pb.ErrorInfo>;

            /**
             * Calls Login.
             * @param request CmdLogin message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdLoginReply
             */
            public login(request: pb.ICmdLogin, callback: pb.LoginService.LoginCallback): void;

            /**
             * Calls Login.
             * @param request CmdLogin message or plain object
             * @returns Promise
             */
            public login(request: pb.ICmdLogin): Promise<pb.CmdLoginReply>;

            /**
             * Calls GetCaptcha.
             * @param request CmdGetCaptcha message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdGetCaptchaReply
             */
            public getCaptcha(request: pb.ICmdGetCaptcha, callback: pb.LoginService.GetCaptchaCallback): void;

            /**
             * Calls GetCaptcha.
             * @param request CmdGetCaptcha message or plain object
             * @returns Promise
             */
            public getCaptcha(request: pb.ICmdGetCaptcha): Promise<pb.CmdGetCaptchaReply>;

            /**
             * Calls GetSms.
             * @param request CmdGetSms message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public getSms(request: pb.ICmdGetSms, callback: pb.LoginService.GetSmsCallback): void;

            /**
             * Calls GetSms.
             * @param request CmdGetSms message or plain object
             * @returns Promise
             */
            public getSms(request: pb.ICmdGetSms): Promise<pb.ErrorInfo>;

            /**
             * Calls ResetPwd.
             * @param request CmdResetPwd message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public resetPwd(request: pb.ICmdResetPwd, callback: pb.LoginService.ResetPwdCallback): void;

            /**
             * Calls ResetPwd.
             * @param request CmdResetPwd message or plain object
             * @returns Promise
             */
            public resetPwd(request: pb.ICmdResetPwd): Promise<pb.ErrorInfo>;
        }

        namespace LoginService {

            /**
             * Callback as used by {@link pb.LoginService#registry}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type RegistryCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.LoginService#login}.
             * @param error Error, if any
             * @param [response] CmdLoginReply
             */
            type LoginCallback = (error: (Error | null), response?: pb.CmdLoginReply) => void;

            /**
             * Callback as used by {@link pb.LoginService#getCaptcha}.
             * @param error Error, if any
             * @param [response] CmdGetCaptchaReply
             */
            type GetCaptchaCallback = (error: (Error | null), response?: pb.CmdGetCaptchaReply) => void;

            /**
             * Callback as used by {@link pb.LoginService#getSms}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type GetSmsCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.LoginService#resetPwd}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type ResetPwdCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;
        }

        /** SyncAct enum. */
        enum SyncAct {
            SyncAct_NULL = 0,
            Set = 1,
            Del = 2
        }

        /** ServerCmdId enum. */
        enum ServerCmdId {
            ServerCmdId_NULL = 0,
            ReloadGameConf = 1
        }

        /** Properties of a CmdNewUidReply. */
        interface ICmdNewUidReply {

            /** CmdNewUidReply uid */
            uid?: (number | null);
        }

        /** Represents a CmdNewUidReply. */
        class CmdNewUidReply implements ICmdNewUidReply {

            /**
             * Constructs a new CmdNewUidReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdNewUidReply);

            /** CmdNewUidReply uid. */
            public uid: number;

            /**
             * Encodes the specified CmdNewUidReply message. Does not implicitly {@link pb.CmdNewUidReply.verify|verify} messages.
             * @param m CmdNewUidReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdNewUidReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdNewUidReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdNewUidReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdNewUidReply;
        }

        /** Properties of a CmdNewRoomIdReply. */
        interface ICmdNewRoomIdReply {

            /** CmdNewRoomIdReply id */
            id?: (number | null);
        }

        /** Represents a CmdNewRoomIdReply. */
        class CmdNewRoomIdReply implements ICmdNewRoomIdReply {

            /**
             * Constructs a new CmdNewRoomIdReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdNewRoomIdReply);

            /** CmdNewRoomIdReply id. */
            public id: number;

            /**
             * Encodes the specified CmdNewRoomIdReply message. Does not implicitly {@link pb.CmdNewRoomIdReply.verify|verify} messages.
             * @param m CmdNewRoomIdReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdNewRoomIdReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdNewRoomIdReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdNewRoomIdReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdNewRoomIdReply;
        }

        /** Properties of a CmdGateAddr. */
        interface ICmdGateAddr {

            /** CmdGateAddr uid */
            uid?: (number | null);
        }

        /** Represents a CmdGateAddr. */
        class CmdGateAddr implements ICmdGateAddr {

            /**
             * Constructs a new CmdGateAddr.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGateAddr);

            /** CmdGateAddr uid. */
            public uid: number;

            /**
             * Encodes the specified CmdGateAddr message. Does not implicitly {@link pb.CmdGateAddr.verify|verify} messages.
             * @param m CmdGateAddr message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGateAddr, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGateAddr message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGateAddr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGateAddr;
        }

        /** Properties of a CmdGateAddrReply. */
        interface ICmdGateAddrReply {

            /** CmdGateAddrReply uid */
            uid?: (number | null);

            /** CmdGateAddrReply addr */
            addr?: (string | null);
        }

        /** Represents a CmdGateAddrReply. */
        class CmdGateAddrReply implements ICmdGateAddrReply {

            /**
             * Constructs a new CmdGateAddrReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGateAddrReply);

            /** CmdGateAddrReply uid. */
            public uid: number;

            /** CmdGateAddrReply addr. */
            public addr: string;

            /**
             * Encodes the specified CmdGateAddrReply message. Does not implicitly {@link pb.CmdGateAddrReply.verify|verify} messages.
             * @param m CmdGateAddrReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGateAddrReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGateAddrReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGateAddrReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGateAddrReply;
        }

        /** Properties of a CmdUserLogin. */
        interface ICmdUserLogin {

            /** CmdUserLogin uid */
            uid?: (number | null);

            /** CmdUserLogin type */
            type?: (pb.LoginType | null);

            /** CmdUserLogin from */
            from?: (pb.AppFrom | null);

            /** CmdUserLogin ip */
            ip?: (string | null);
        }

        /** Represents a CmdUserLogin. */
        class CmdUserLogin implements ICmdUserLogin {

            /**
             * Constructs a new CmdUserLogin.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUserLogin);

            /** CmdUserLogin uid. */
            public uid: number;

            /** CmdUserLogin type. */
            public type: pb.LoginType;

            /** CmdUserLogin from. */
            public from: pb.AppFrom;

            /** CmdUserLogin ip. */
            public ip: string;

            /**
             * Encodes the specified CmdUserLogin message. Does not implicitly {@link pb.CmdUserLogin.verify|verify} messages.
             * @param m CmdUserLogin message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUserLogin, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUserLogin message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUserLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUserLogin;
        }

        /** Properties of a CmdUserLoginReply. */
        interface ICmdUserLoginReply {

            /** CmdUserLoginReply uid */
            uid?: (number | null);

            /** CmdUserLoginReply token */
            token?: (string | null);

            /** CmdUserLoginReply addr */
            addr?: (string | null);
        }

        /** Represents a CmdUserLoginReply. */
        class CmdUserLoginReply implements ICmdUserLoginReply {

            /**
             * Constructs a new CmdUserLoginReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUserLoginReply);

            /** CmdUserLoginReply uid. */
            public uid: number;

            /** CmdUserLoginReply token. */
            public token: string;

            /** CmdUserLoginReply addr. */
            public addr: string;

            /**
             * Encodes the specified CmdUserLoginReply message. Does not implicitly {@link pb.CmdUserLoginReply.verify|verify} messages.
             * @param m CmdUserLoginReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUserLoginReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUserLoginReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUserLoginReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUserLoginReply;
        }

        /** Properties of a CmdUserGameLogin. */
        interface ICmdUserGameLogin {

            /** CmdUserGameLogin uid */
            uid?: (number | null);

            /** CmdUserGameLogin nodeId */
            nodeId?: (number | null);
        }

        /** Represents a CmdUserGameLogin. */
        class CmdUserGameLogin implements ICmdUserGameLogin {

            /**
             * Constructs a new CmdUserGameLogin.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUserGameLogin);

            /** CmdUserGameLogin uid. */
            public uid: number;

            /** CmdUserGameLogin nodeId. */
            public nodeId: number;

            /**
             * Encodes the specified CmdUserGameLogin message. Does not implicitly {@link pb.CmdUserGameLogin.verify|verify} messages.
             * @param m CmdUserGameLogin message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUserGameLogin, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUserGameLogin message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUserGameLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUserGameLogin;
        }

        /** Properties of a CmdUserGameLogout. */
        interface ICmdUserGameLogout {

            /** CmdUserGameLogout uid */
            uid?: (number | null);
        }

        /** Represents a CmdUserGameLogout. */
        class CmdUserGameLogout implements ICmdUserGameLogout {

            /**
             * Constructs a new CmdUserGameLogout.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUserGameLogout);

            /** CmdUserGameLogout uid. */
            public uid: number;

            /**
             * Encodes the specified CmdUserGameLogout message. Does not implicitly {@link pb.CmdUserGameLogout.verify|verify} messages.
             * @param m CmdUserGameLogout message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUserGameLogout, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUserGameLogout message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUserGameLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUserGameLogout;
        }

        /** Properties of a CmdUserGameData. */
        interface ICmdUserGameData {

            /** CmdUserGameData uid */
            uid?: (number | null);
        }

        /** Represents a CmdUserGameData. */
        class CmdUserGameData implements ICmdUserGameData {

            /**
             * Constructs a new CmdUserGameData.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUserGameData);

            /** CmdUserGameData uid. */
            public uid: number;

            /**
             * Encodes the specified CmdUserGameData message. Does not implicitly {@link pb.CmdUserGameData.verify|verify} messages.
             * @param m CmdUserGameData message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUserGameData, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUserGameData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUserGameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUserGameData;
        }

        /** Properties of a CmdUserGameDataReply. */
        interface ICmdUserGameDataReply {

            /** CmdUserGameDataReply gd */
            gd?: (pb.IGameData | null);

            /** CmdUserGameDataReply roomId */
            roomId?: (number | null);

            /** CmdUserGameDataReply roomAtNode */
            roomAtNode?: (number | null);
        }

        /** Represents a CmdUserGameDataReply. */
        class CmdUserGameDataReply implements ICmdUserGameDataReply {

            /**
             * Constructs a new CmdUserGameDataReply.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdUserGameDataReply);

            /** CmdUserGameDataReply gd. */
            public gd?: (pb.IGameData | null);

            /** CmdUserGameDataReply roomId. */
            public roomId: number;

            /** CmdUserGameDataReply roomAtNode. */
            public roomAtNode: number;

            /**
             * Encodes the specified CmdUserGameDataReply message. Does not implicitly {@link pb.CmdUserGameDataReply.verify|verify} messages.
             * @param m CmdUserGameDataReply message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdUserGameDataReply, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdUserGameDataReply message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdUserGameDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdUserGameDataReply;
        }

        /** Properties of a CmdGameProperties. */
        interface ICmdGameProperties {

            /** CmdGameProperties uid */
            uid?: (number | null);

            /** CmdGameProperties properties */
            properties?: (pb.IGamePropertyItem[] | null);

            /** CmdGameProperties memo */
            memo?: (string | null);

            /** CmdGameProperties backbag */
            backbag?: (boolean | null);
        }

        /** Represents a CmdGameProperties. */
        class CmdGameProperties implements ICmdGameProperties {

            /**
             * Constructs a new CmdGameProperties.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdGameProperties);

            /** CmdGameProperties uid. */
            public uid: number;

            /** CmdGameProperties properties. */
            public properties: pb.IGamePropertyItem[];

            /** CmdGameProperties memo. */
            public memo: string;

            /** CmdGameProperties backbag. */
            public backbag: boolean;

            /**
             * Encodes the specified CmdGameProperties message. Does not implicitly {@link pb.CmdGameProperties.verify|verify} messages.
             * @param m CmdGameProperties message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdGameProperties, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdGameProperties message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdGameProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdGameProperties;
        }

        /** Properties of a ServerCmd. */
        interface IServerCmd {

            /** ServerCmd id */
            id?: (pb.ServerCmdId | null);

            /** ServerCmd parameters */
            parameters?: (Uint8Array | null);
        }

        /** Represents a ServerCmd. */
        class ServerCmd implements IServerCmd {

            /**
             * Constructs a new ServerCmd.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IServerCmd);

            /** ServerCmd id. */
            public id: pb.ServerCmdId;

            /** ServerCmd parameters. */
            public parameters: Uint8Array;

            /**
             * Encodes the specified ServerCmd message. Does not implicitly {@link pb.ServerCmd.verify|verify} messages.
             * @param m ServerCmd message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IServerCmd, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ServerCmd message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ServerCmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.ServerCmd;
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message id */
            id?: (pb.MessageId | null);

            /** Message buf */
            buf?: (Uint8Array | null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IMessage);

            /** Message id. */
            public id: pb.MessageId;

            /** Message buf. */
            public buf: Uint8Array;

            /**
             * Encodes the specified Message message. Does not implicitly {@link pb.Message.verify|verify} messages.
             * @param m Message message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IMessage, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.Message;
        }

        /** Properties of a Room. */
        interface IRoom {

            /** Room act */
            act?: (pb.SyncAct | null);

            /** Room id */
            id?: (number | null);

            /** Room game */
            game?: (pb.GameType | null);

            /** Room max */
            max?: (number | null);

            /** Room cur */
            cur?: (number | null);

            /** Room node */
            node?: (number | null);
        }

        /** Represents a Room. */
        class Room implements IRoom {

            /**
             * Constructs a new Room.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoom);

            /** Room act. */
            public act: pb.SyncAct;

            /** Room id. */
            public id: number;

            /** Room game. */
            public game: pb.GameType;

            /** Room max. */
            public max: number;

            /** Room cur. */
            public cur: number;

            /** Room node. */
            public node: number;

            /**
             * Encodes the specified Room message. Does not implicitly {@link pb.Room.verify|verify} messages.
             * @param m Room message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoom, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.Room;
        }

        /** Properties of a RoomList. */
        interface IRoomList {

            /** RoomList items */
            items?: (pb.IRoom[] | null);
        }

        /** Represents a RoomList. */
        class RoomList implements IRoomList {

            /**
             * Constructs a new RoomList.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IRoomList);

            /** RoomList items. */
            public items: pb.IRoom[];

            /**
             * Encodes the specified RoomList message. Does not implicitly {@link pb.RoomList.verify|verify} messages.
             * @param m RoomList message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IRoomList, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomList message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RoomList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.RoomList;
        }

        /** Properties of a PlayerNode. */
        interface IPlayerNode {

            /** PlayerNode uid */
            uid?: (number | null);

            /** PlayerNode nodeId */
            nodeId?: (number | null);
        }

        /** Represents a PlayerNode. */
        class PlayerNode implements IPlayerNode {

            /**
             * Constructs a new PlayerNode.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IPlayerNode);

            /** PlayerNode uid. */
            public uid: number;

            /** PlayerNode nodeId. */
            public nodeId: number;

            /**
             * Encodes the specified PlayerNode message. Does not implicitly {@link pb.PlayerNode.verify|verify} messages.
             * @param m PlayerNode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IPlayerNode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PlayerNode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PlayerNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.PlayerNode;
        }

        /** Properties of a BroadcastMsg. */
        interface IBroadcastMsg {

            /** BroadcastMsg id */
            id?: (pb.MessageId | null);

            /** BroadcastMsg buf */
            buf?: (Uint8Array | null);

            /** BroadcastMsg uids */
            uids?: (number[] | null);
        }

        /** Represents a BroadcastMsg. */
        class BroadcastMsg implements IBroadcastMsg {

            /**
             * Constructs a new BroadcastMsg.
             * @param [p] Properties to set
             */
            constructor(p?: pb.IBroadcastMsg);

            /** BroadcastMsg id. */
            public id: pb.MessageId;

            /** BroadcastMsg buf. */
            public buf: Uint8Array;

            /** BroadcastMsg uids. */
            public uids: number[];

            /**
             * Encodes the specified BroadcastMsg message. Does not implicitly {@link pb.BroadcastMsg.verify|verify} messages.
             * @param m BroadcastMsg message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.IBroadcastMsg, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a BroadcastMsg message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BroadcastMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.BroadcastMsg;
        }

        /** Properties of a CmdCgsConf. */
        interface ICmdCgsConf {

            /** CmdCgsConf id */
            id?: (number | null);

            /** CmdCgsConf awardJson */
            awardJson?: (string | null);
        }

        /** Represents a CmdCgsConf. */
        class CmdCgsConf implements ICmdCgsConf {

            /**
             * Constructs a new CmdCgsConf.
             * @param [p] Properties to set
             */
            constructor(p?: pb.ICmdCgsConf);

            /** CmdCgsConf id. */
            public id: number;

            /** CmdCgsConf awardJson. */
            public awardJson: string;

            /**
             * Encodes the specified CmdCgsConf message. Does not implicitly {@link pb.CmdCgsConf.verify|verify} messages.
             * @param m CmdCgsConf message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: pb.ICmdCgsConf, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a CmdCgsConf message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CmdCgsConf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader | Uint8Array), l?: number): pb.CmdCgsConf;
        }

        /** Represents a MasterService */
        class MasterService extends protobuf.rpc.Service {

            /**
             * Constructs a new MasterService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls NewUid.
             * @param request VoidRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdNewUidReply
             */
            public newUid(request: pb.IVoidRequest, callback: pb.MasterService.NewUidCallback): void;

            /**
             * Calls NewUid.
             * @param request VoidRequest message or plain object
             * @returns Promise
             */
            public newUid(request: pb.IVoidRequest): Promise<pb.CmdNewUidReply>;

            /**
             * Calls GetGateAddr.
             * @param request CmdGateAddr message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdGateAddrReply
             */
            public getGateAddr(request: pb.ICmdGateAddr, callback: pb.MasterService.GetGateAddrCallback): void;

            /**
             * Calls GetGateAddr.
             * @param request CmdGateAddr message or plain object
             * @returns Promise
             */
            public getGateAddr(request: pb.ICmdGateAddr): Promise<pb.CmdGateAddrReply>;

            /**
             * Calls UserLogin.
             * @param request CmdUserLogin message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdUserLoginReply
             */
            public userLogin(request: pb.ICmdUserLogin, callback: pb.MasterService.UserLoginCallback): void;

            /**
             * Calls UserLogin.
             * @param request CmdUserLogin message or plain object
             * @returns Promise
             */
            public userLogin(request: pb.ICmdUserLogin): Promise<pb.CmdUserLoginReply>;

            /**
             * Calls UserGameLogin.
             * @param request CmdUserGameLogin message or plain object
             * @param callback Node-style callback called with the error, if any, and VoidReply
             */
            public userGameLogin(request: pb.ICmdUserGameLogin, callback: pb.MasterService.UserGameLoginCallback): void;

            /**
             * Calls UserGameLogin.
             * @param request CmdUserGameLogin message or plain object
             * @returns Promise
             */
            public userGameLogin(request: pb.ICmdUserGameLogin): Promise<pb.VoidReply>;

            /**
             * Calls UserGameLogout.
             * @param request CmdUserGameLogout message or plain object
             * @param callback Node-style callback called with the error, if any, and VoidReply
             */
            public userGameLogout(request: pb.ICmdUserGameLogout, callback: pb.MasterService.UserGameLogoutCallback): void;

            /**
             * Calls UserGameLogout.
             * @param request CmdUserGameLogout message or plain object
             * @returns Promise
             */
            public userGameLogout(request: pb.ICmdUserGameLogout): Promise<pb.VoidReply>;

            /**
             * Calls NewRoomId.
             * @param request VoidRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdNewRoomIdReply
             */
            public newRoomId(request: pb.IVoidRequest, callback: pb.MasterService.NewRoomIdCallback): void;

            /**
             * Calls NewRoomId.
             * @param request VoidRequest message or plain object
             * @returns Promise
             */
            public newRoomId(request: pb.IVoidRequest): Promise<pb.CmdNewRoomIdReply>;

            /**
             * Calls SyncRooms.
             * @param request RoomList message or plain object
             * @param callback Node-style callback called with the error, if any, and VoidReply
             */
            public syncRooms(request: pb.IRoomList, callback: pb.MasterService.SyncRoomsCallback): void;

            /**
             * Calls SyncRooms.
             * @param request RoomList message or plain object
             * @returns Promise
             */
            public syncRooms(request: pb.IRoomList): Promise<pb.VoidReply>;

            /**
             * Calls EnterRoom.
             * @param request CmdRoomEnter message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdRoomEnterReply
             */
            public enterRoom(request: pb.ICmdRoomEnter, callback: pb.MasterService.EnterRoomCallback): void;

            /**
             * Calls EnterRoom.
             * @param request CmdRoomEnter message or plain object
             * @returns Promise
             */
            public enterRoom(request: pb.ICmdRoomEnter): Promise<pb.CmdRoomEnterReply>;

            /**
             * Calls HeartBeat.
             * @param request VoidRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VoidReply
             */
            public heartBeat(request: pb.IVoidRequest, callback: pb.MasterService.HeartBeatCallback): void;

            /**
             * Calls HeartBeat.
             * @param request VoidRequest message or plain object
             * @returns Promise
             */
            public heartBeat(request: pb.IVoidRequest): Promise<pb.VoidReply>;
        }

        namespace MasterService {

            /**
             * Callback as used by {@link pb.MasterService#newUid}.
             * @param error Error, if any
             * @param [response] CmdNewUidReply
             */
            type NewUidCallback = (error: (Error | null), response?: pb.CmdNewUidReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#getGateAddr}.
             * @param error Error, if any
             * @param [response] CmdGateAddrReply
             */
            type GetGateAddrCallback = (error: (Error | null), response?: pb.CmdGateAddrReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#userLogin}.
             * @param error Error, if any
             * @param [response] CmdUserLoginReply
             */
            type UserLoginCallback = (error: (Error | null), response?: pb.CmdUserLoginReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#userGameLogin}.
             * @param error Error, if any
             * @param [response] VoidReply
             */
            type UserGameLoginCallback = (error: (Error | null), response?: pb.VoidReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#userGameLogout}.
             * @param error Error, if any
             * @param [response] VoidReply
             */
            type UserGameLogoutCallback = (error: (Error | null), response?: pb.VoidReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#newRoomId}.
             * @param error Error, if any
             * @param [response] CmdNewRoomIdReply
             */
            type NewRoomIdCallback = (error: (Error | null), response?: pb.CmdNewRoomIdReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#syncRooms}.
             * @param error Error, if any
             * @param [response] VoidReply
             */
            type SyncRoomsCallback = (error: (Error | null), response?: pb.VoidReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#enterRoom}.
             * @param error Error, if any
             * @param [response] CmdRoomEnterReply
             */
            type EnterRoomCallback = (error: (Error | null), response?: pb.CmdRoomEnterReply) => void;

            /**
             * Callback as used by {@link pb.MasterService#heartBeat}.
             * @param error Error, if any
             * @param [response] VoidReply
             */
            type HeartBeatCallback = (error: (Error | null), response?: pb.VoidReply) => void;
        }

        /** Represents a GameService */
        class GameService extends protobuf.rpc.Service {

            /**
             * Constructs a new GameService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls GetGameData.
             * @param request CmdUserGameData message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdUserGameDataReply
             */
            public getGameData(request: pb.ICmdUserGameData, callback: pb.GameService.GetGameDataCallback): void;

            /**
             * Calls GetGameData.
             * @param request CmdUserGameData message or plain object
             * @returns Promise
             */
            public getGameData(request: pb.ICmdUserGameData): Promise<pb.CmdUserGameDataReply>;

            /**
             * Calls AddGameProperties.
             * @param request CmdGameProperties message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public addGameProperties(request: pb.ICmdGameProperties, callback: pb.GameService.AddGamePropertiesCallback): void;

            /**
             * Calls AddGameProperties.
             * @param request CmdGameProperties message or plain object
             * @returns Promise
             */
            public addGameProperties(request: pb.ICmdGameProperties): Promise<pb.ErrorInfo>;

            /**
             * Calls ResetGameProperties.
             * @param request CmdGameProperties message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public resetGameProperties(request: pb.ICmdGameProperties, callback: pb.GameService.ResetGamePropertiesCallback): void;

            /**
             * Calls ResetGameProperties.
             * @param request CmdGameProperties message or plain object
             * @returns Promise
             */
            public resetGameProperties(request: pb.ICmdGameProperties): Promise<pb.ErrorInfo>;

            /**
             * Calls OpenCgs.
             * @param request CmdCgsConf message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public openCgs(request: pb.ICmdCgsConf, callback: pb.GameService.OpenCgsCallback): void;

            /**
             * Calls OpenCgs.
             * @param request CmdCgsConf message or plain object
             * @returns Promise
             */
            public openCgs(request: pb.ICmdCgsConf): Promise<pb.ErrorInfo>;

            /**
             * Calls CloseCgs.
             * @param request CmdCgsConf message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public closeCgs(request: pb.ICmdCgsConf, callback: pb.GameService.CloseCgsCallback): void;

            /**
             * Calls CloseCgs.
             * @param request CmdCgsConf message or plain object
             * @returns Promise
             */
            public closeCgs(request: pb.ICmdCgsConf): Promise<pb.ErrorInfo>;

            /**
             * Calls SetCgsAward.
             * @param request CmdCgsConf message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public setCgsAward(request: pb.ICmdCgsConf, callback: pb.GameService.SetCgsAwardCallback): void;

            /**
             * Calls SetCgsAward.
             * @param request CmdCgsConf message or plain object
             * @returns Promise
             */
            public setCgsAward(request: pb.ICmdCgsConf): Promise<pb.ErrorInfo>;

            /**
             * Calls Execute.
             * @param request ServerCmd message or plain object
             * @param callback Node-style callback called with the error, if any, and ErrorInfo
             */
            public execute(request: pb.IServerCmd, callback: pb.GameService.ExecuteCallback): void;

            /**
             * Calls Execute.
             * @param request ServerCmd message or plain object
             * @returns Promise
             */
            public execute(request: pb.IServerCmd): Promise<pb.ErrorInfo>;

            /**
             * Calls Process.
             * @param request Message message or plain object
             * @param callback Node-style callback called with the error, if any, and Message
             */
            public process(request: pb.IMessage, callback: pb.GameService.ProcessCallback): void;

            /**
             * Calls Process.
             * @param request Message message or plain object
             * @returns Promise
             */
            public process(request: pb.IMessage): Promise<pb.Message>;

            /**
             * Calls SendMessage.
             * @param request Message message or plain object
             * @param callback Node-style callback called with the error, if any, and VoidReply
             */
            public sendMessage(request: pb.IMessage, callback: pb.GameService.SendMessageCallback): void;

            /**
             * Calls SendMessage.
             * @param request Message message or plain object
             * @returns Promise
             */
            public sendMessage(request: pb.IMessage): Promise<pb.VoidReply>;

            /**
             * Calls SyncRooms.
             * @param request VoidRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RoomList
             */
            public syncRooms(request: pb.IVoidRequest, callback: pb.GameService.SyncRoomsCallback): void;

            /**
             * Calls SyncRooms.
             * @param request VoidRequest message or plain object
             * @returns Promise
             */
            public syncRooms(request: pb.IVoidRequest): Promise<pb.RoomList>;

            /**
             * Calls ForwardRoomMsg.
             * @param request Message message or plain object
             * @param callback Node-style callback called with the error, if any, and Message
             */
            public forwardRoomMsg(request: pb.IMessage, callback: pb.GameService.ForwardRoomMsgCallback): void;

            /**
             * Calls ForwardRoomMsg.
             * @param request Message message or plain object
             * @returns Promise
             */
            public forwardRoomMsg(request: pb.IMessage): Promise<pb.Message>;

            /**
             * Calls CreateRoom.
             * @param request CmdRoomCreate message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdRoomCreateReply
             */
            public createRoom(request: pb.ICmdRoomCreate, callback: pb.GameService.CreateRoomCallback): void;

            /**
             * Calls CreateRoom.
             * @param request CmdRoomCreate message or plain object
             * @returns Promise
             */
            public createRoom(request: pb.ICmdRoomCreate): Promise<pb.CmdRoomCreateReply>;

            /**
             * Calls EnterRoom.
             * @param request CmdRoomEnter message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdRoomEnterReply
             */
            public enterRoom(request: pb.ICmdRoomEnter, callback: pb.GameService.EnterRoomCallback): void;

            /**
             * Calls EnterRoom.
             * @param request CmdRoomEnter message or plain object
             * @returns Promise
             */
            public enterRoom(request: pb.ICmdRoomEnter): Promise<pb.CmdRoomEnterReply>;

            /**
             * Calls LeaveRoom.
             * @param request CmdRoomLeave message or plain object
             * @param callback Node-style callback called with the error, if any, and CmdRoomLeaveReply
             */
            public leaveRoom(request: pb.ICmdRoomLeave, callback: pb.GameService.LeaveRoomCallback): void;

            /**
             * Calls LeaveRoom.
             * @param request CmdRoomLeave message or plain object
             * @returns Promise
             */
            public leaveRoom(request: pb.ICmdRoomLeave): Promise<pb.CmdRoomLeaveReply>;
        }

        namespace GameService {

            /**
             * Callback as used by {@link pb.GameService#getGameData}.
             * @param error Error, if any
             * @param [response] CmdUserGameDataReply
             */
            type GetGameDataCallback = (error: (Error | null), response?: pb.CmdUserGameDataReply) => void;

            /**
             * Callback as used by {@link pb.GameService#addGameProperties}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type AddGamePropertiesCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.GameService#resetGameProperties}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type ResetGamePropertiesCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.GameService#openCgs}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type OpenCgsCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.GameService#closeCgs}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type CloseCgsCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.GameService#setCgsAward}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type SetCgsAwardCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.GameService#execute}.
             * @param error Error, if any
             * @param [response] ErrorInfo
             */
            type ExecuteCallback = (error: (Error | null), response?: pb.ErrorInfo) => void;

            /**
             * Callback as used by {@link pb.GameService#process}.
             * @param error Error, if any
             * @param [response] Message
             */
            type ProcessCallback = (error: (Error | null), response?: pb.Message) => void;

            /**
             * Callback as used by {@link pb.GameService#sendMessage}.
             * @param error Error, if any
             * @param [response] VoidReply
             */
            type SendMessageCallback = (error: (Error | null), response?: pb.VoidReply) => void;

            /**
             * Callback as used by {@link pb.GameService#syncRooms}.
             * @param error Error, if any
             * @param [response] RoomList
             */
            type SyncRoomsCallback = (error: (Error | null), response?: pb.RoomList) => void;

            /**
             * Callback as used by {@link pb.GameService#forwardRoomMsg}.
             * @param error Error, if any
             * @param [response] Message
             */
            type ForwardRoomMsgCallback = (error: (Error | null), response?: pb.Message) => void;

            /**
             * Callback as used by {@link pb.GameService#createRoom}.
             * @param error Error, if any
             * @param [response] CmdRoomCreateReply
             */
            type CreateRoomCallback = (error: (Error | null), response?: pb.CmdRoomCreateReply) => void;

            /**
             * Callback as used by {@link pb.GameService#enterRoom}.
             * @param error Error, if any
             * @param [response] CmdRoomEnterReply
             */
            type EnterRoomCallback = (error: (Error | null), response?: pb.CmdRoomEnterReply) => void;

            /**
             * Callback as used by {@link pb.GameService#leaveRoom}.
             * @param error Error, if any
             * @param [response] CmdRoomLeaveReply
             */
            type LeaveRoomCallback = (error: (Error | null), response?: pb.CmdRoomLeaveReply) => void;
        }
    }

}
export { }