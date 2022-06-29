import { pb } from "../protos/proto";
import GameCfg from "./GameCfg";
import EventCfg from "./utils/EventCfg";
import GlobalEvent from "./utils/GlobalEvent";
import LocalStorageUtils from "./utils/LocalStorageUtils";

export default {

    loginCode: null,

    /**
     * 账号
     */
    _account: null,

    get account() {
        return this._account;
    },

    set account(val) {
        this._account = val;
        LocalStorageUtils.setItem('ACCOUNT', val);
    },

    /**
     * 密码
     */
    _password: null,

    get password() {
        return this._password;
    },

    set password(val) {
        this._password = val;
        LocalStorageUtils.setItem('PASSWORD', val);
    },


    _properties: [],

    get properties() {
        return this._properties;
    },

    set properties(val) {
        this._properties = val;
        GlobalEvent.emit(EventCfg.DIAMONDCHANGE);
        GlobalEvent.emit(EventCfg.GOLDCHANGE);
        GlobalEvent.emit(EventCfg.LEVELCHANGE);
        GlobalEvent.emit(EventCfg.EXPCHANGE);
        GlobalEvent.emit(EventCfg.VIPCHANGE);
    },



    imgs: {},     //下载的所有图片
    playersInfo: {},  //查询的所有玩家信息

    firstGame: false,  //首次登入

    GameCounters: null,


    activityConf: null,
    appConf: null,
    adConf: null,

    gameConf: null,

    contractlist: null,

    userID: null,   //uid
    token: null,    //token
    gender: null,   //性别
    userName: null,
    headImg: null,
    headImgurl: null,


    smxlState: null,  //双盲状态
    cgState: null,    //

    location: null,  //地区
    counters: null,
    todayTimes: null,//今日游戏次数

    aiStockList: null,  //智能
    stockList: null,//
    cgdsStockList: null,
    taskStudy: null,
    taskDaily: null,

    gameData: null,

    get vipStatus() {
        return !(new Date().getTime() / 1000 > this.properties[pb.GamePropertyId.VipExpiration]);
    },

    huizhidatas: 0,

    smSet: null,

    jjpkSet: null,

    dxSet: null,

    qhSet: null,

    tjdSet: null,

    fsSet: null,

    zbSet: null,

    SmxlState: null,

    todayGameCount: null,

    RoomType: null,

    roomId: null,

    jjCapital: null,

    players: [],

    selfEnterRoomData: null,

    AISignal: {},   //ai操作标识

    mncgDataList: null,  //模拟炒股数据

    selfStockList: [],  //自选收藏列表

    SpStockData: null,

    cgdsStateList: [],

    sysBroadcastLsit: [],

    _adSucceed: 0,

    set adSucceed(val) {
        if (val < 0) {
            val = 0;
        }
        let time = new Date().toLocaleDateString();
        LocalStorageUtils.setItem(time + 'AD' + GameCfg.GameType, val);
        this._adSucceed = val;
    },

    get adSucceed() {
        if (!this._adSucceed) {
            let time = new Date().toLocaleDateString();
            this._adSucceed = parseInt(LocalStorageUtils.getItem(time + 'AD' + GameCfg.GameType));
        }

        return this._adSucceed;
    },

    /**
     * 邀请ID
     */
    queryUid: null,

    query: null,

    queryType: null,

    /**
     * 玩家信息
     */
    Players: [],

    /**
     * 报名费
     */
    JJCapital: 0,

    CGSConfData: null,

    haoYouFangData: null,

    zhibiaoHisSet: {},

    //保存选择的股票
    DXHistoryInfo: [],

    QHHistoryInfo: [],

    ZBHistoryInfo: [],

    CGSSAVELEVEL: null,

    otherHead: null,

}
