

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
    MAs: [],

    BOLL: [20],

    MACD: [12, 26, 9],

    KDJ: [9, 3, 3],

    RSI: [6, 12, 24],

    EXPMA: [12, 50],

    VOLGraph: [5, 10],

    HZ_white: cc.Color.WHITE,

    GAMEFUPANDATA: null,

    data: [{ name: '', code: '', data: [], circulate: 0, ktype: 0, tsGameFrom: null, tsGameCur: null }],

}   