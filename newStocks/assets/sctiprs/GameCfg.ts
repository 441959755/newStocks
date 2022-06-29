
export default {

    /**
     * 游戏类型
     */
    GameType: null,

    /**
     * 游戏设置
     */
    GameSet: null,

    beg_end: [],

    GAMEFUPAN: null,

    huizhidatas: 0,

    hz_width: 0,

    selectZline: null,  //pb.KType

    MAColor: [cc.Color.WHITE, cc.Color.YELLOW, new cc.Color().fromHEX('#e94343'), cc.Color.BLUE, new cc.Color().fromHEX('#31a633'), cc.Color.ORANGE],

    BOLLColor: [cc.Color.WHITE, cc.Color.YELLOW, new cc.Color().fromHEX('#e94343')],

    VOLColor: [cc.Color.WHITE, cc.Color.YELLOW],

    tipsDealColor: [],

    K_D_J_Line: [],

    DIF_LINE_COL: null,

    DEA_LINE_COL: null,

    MACD_COL: [],

    RSI_COLOR: [],

    CCL_COL: null,

    EXPMA_COL: [],

    /**
     * 均线
     */
    MAs: [10, 20, 30],

    BOLL: [20],

    MACD: [12, 26, 9],

    KDJ: [9, 3, 3],

    RSI: [6, 12, 24],

    EXPMA: [12, 50],

    VOLGraph: [5, 10],

    HZ_white: cc.Color.WHITE,

    GAMEFUPANDATA: null,

    data: [{ name: '', code: '', data: [], circulate: 0, ktype: 0, tsGameFrom: null, tsGameCur: null }],

    history: { //游戏记录
        huizhidatas: 0,
        allRate: 0,       //总利率
    },

    // TIMETEMP: [],   //玩的记录时间戳

    mark: [], //标签信息

    notice: [],      //通知栏

    fill: [],         //bg填充颜色

    GAMEWAIT: false,  //游戏走完，等待游戏结果

    eachHand: 0,    //每手

    enterGameConf: null,  //进入游戏的选择

    historyType: null,   //哪进入复盘的

    blockHistoy: [],

    RoomGameData: null,//游戲結果

    GAMEFRTD: false,  //是否断线重连

    JJ_XUNLIAN: false,  //

    ziChan: null,

    allRate: null,

    finalfund: null,

    labelRed: new cc.Color().fromHEX('#e94343'),
    labelGreen: new cc.Color().fromHEX('#31a633'),


}   