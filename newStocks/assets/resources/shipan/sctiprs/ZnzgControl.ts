import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import LocalStorageUtils from "../../../sctiprs/utils/LocalStorageUtils";


export default {

    searchNode: null,

    scoreNode: null,

    otherNode: null,

    /**
     * 记录
     */
    _listData: [],

    get listData() {

        if (this._listData.length <= 0) {
            let listData = LocalStorageUtils.getItem('ZNZGLIST');
            if (listData) {
                this._listData = JSON.parse(listData);
            }
        }
        return this._listData;
    },

    set listData(val: any) {

        for (let i = 0; i < this._listData.length; i++) {
            if (this._listData[i].code == val.code) {
                return;
            }
        }

        this._listData.push(val);

        LocalStorageUtils.setItem('ZNZGLIST', JSON.stringify(this._listData));
    },

    searchCode: null,

    searchName: null,

    searTime: null,

    type: null,

    shizhi: null,

    syl: null,

    /**
     * 主营业务
     */
    pri_biz: null,

    /**
     * 所属板块
     */
    csrc_indu_name: null,

    /**
     * 总股本
     */
    total: null,

    inc_j: null,

    net_inc_ded: null,

    /**
     * 流通股股数
     */
    fl_shr: null,
    ni_ded_yoy_gr: null,
    /**
     * 营业收入
     */
    bp100000: null,

    /**
     * 流通股市值
     */
    hold_fl_mktcap: null,

    /**
     * 流通股比例
     */
    hold_fl_pct: null,

    /**
     * 流通股数量
     */
    hold_fl_vol: null,

    /**
     * 每股收益
     */
    epsp: null,

    /**
     * 净利润
     */
    bp500000: null,

    /**
     * 净利润同比
     */
    bp500000_yoy_gr: null,

    /**
     * 市盈率
     */
    pe_dlt_issed: null,

    /**
     * 平均行业市盈率
     */
    pj_pe_dlt_issed: 0.00,

    /**
     * 营业收入同比增长率
     */
    rev_yoy_gr: null,

    //  bp500000_yoy_gr: null,

    /**
     * 资产总计
     */
    bb100000: null,

    /**
     * 负债合计
     */
    bb200000: null,

    /**
     * 负债合计同比
     */
    bb200000_yoy_gr: null,


    /**
     * 净资产收益率
     */
    roe: null,

    /**
        * 净资产收益率(同比增长率)
        */

    roe_yoy_gr: null,

    // roe_yoy_gr:null,

    /**
     * 经营现金净流量
     */
    or_onf: null,

    /**
     * 经营活动产生的现金流量净额/经营活动净收益
     */
    or_ocn: null,

    /**
     * 今日
     */
    f137: null,

    /**
     * 5日
     */
    f434: null,

    /**
     * 10日
     */
    f459: null,

    /**
     * 次日上涨概率
     */
    rise1Probability: 0,

    /**
     * 3日上涨概率
     */
    rise3Probability: 0,

    /**
     * 5日上涨概率
     */
    rise5Probability: 0,

    /**
     * 指标出现次数
     */
    indexCount: 0,

    /**
     * 最后出现指标名字
     */
    lastIndexName: '',

    /**
     * 最后指标时间
     */
    lastIndexTime: null,

    c100000: null,

    c100000_yoy_gr: null,

    sel_nint: null,

    indicatorsShow: {
        '上穿MA均线': '股价由均线下方穿越到均线上方，并且收盘价高于均线，代表短期市场表现偏强。但是持续性如何要看穿越均线的周期大小以及整体大势是上涨还是下跌。',
        '均线金叉': '均线金叉是均线的常见用法之一。短期均线上穿长期均线为金叉,反之是死叉 。但如果长期均线向下或变缓，同时短期均线向上穿越就不能叫金叉，死叉也如此。单纯的金叉买入并不能很好的作为进场依据。仍然要具体情况具体分析',
        '均量线多头': '均量线是一种反映一定时期内市场平均成交情况亦即交投趋势的技术性指标。如果5日、10日与40日均量线均向上运行，说明本轮上攻行情刚刚启动。在一轮主升浪当中，仅用10日均量线也可以寻找出买入信号，即在10日均量线走出圆弧底形态时可以考虑买入。',
        '红绿柱转向': '该信号可用作阶段性的反弹判断。当绿柱出现相对极值，后续走势反向概率较大。该信号最好使用在大趋势向上的行情中，用以判断阶段性回调结束，如在下跌趋势中使用效果一般',
        'MACD金叉': 'MACD由两条曲线和一组红绿柱线组成。两条曲线中波动变化大的是DIF线，通常为白线或红线，相对平稳的是DEA线(MACD线)，通常为黄线。当DIF线上穿DEA线时，这种技术形态叫做MACD金叉，通常为买入信号。该信号也是最常用的技术信号之一',
        '穿越0轴': 'DIFF 与 DEA 均为正值,即都在零轴线以上时，大势属多头市场，DIFF 向上突破 DEA，可作买入信号。0轴穿越信号和金叉信号结合使用效果更佳',
        'MACD背离': '底背离一般出现在价格的低位区。MACD指标图形上的由绿柱构成的图形的走势是一底比一底小，即当价格的低点比前一次低点低，而指标的低点却比前一次的低点高，这叫底背离现象。底背离通常表明短期内可能反弹向上，是短期买入的信号。',
        'KDJ超卖': 'kdj值在20以下为超卖区,说明市场中80%的人都在卖出该股。在此区间为相对价格低位，一旦出现金叉，是较好的买入机会。',
        'KDJ金叉': 'kdj金叉是指以K线从下向上与D线交叉为例，K线上穿D线并形成有效的向上突破是金叉，为买入信号。在多头趋势中使用或是配合上kdj超卖区使用效果较好。',
        'KDJ背离': '当股价K线图上的股票走势一谷比一谷低，股价在向下跌，而KDJ曲线图上的KDJ指标的走势是在低位一底比一底高，这叫底背离现象。底背离现象一般是股价将低位反转的信号，表明股价中短期内即将上涨，是买入的信号。kdj底背离和macd底背离有异曲同工之效',
        'RSI金叉': 'RSI指标6日线上穿12日线，形成金叉。单纯的rsi金叉并不能很好的形成买信号，需配合上趋势判断指标，如股价在30或60日均线上时说明中长期走势为多头，此时配合rsi进场信号使用胜率会增加。',
        'RSI超卖': '与macd和kdj背离逻辑相似。当股价持续创新低但是rsi并未新低时，此时形成背离。均预示短期走势有反弹的概率。至于持续性如何，需结合趋势指标共同判断。',
        '倍量阳柱': '倍量阳柱是当日成交量是昨日成交量的两倍、当日收盘价在昨日收盘价上面、成交量是昨日的两倍、此K线组合叫阳柱倍量、如果形态出现在股价底部此形态是反转信号。阳柱倍量说明多方主力攻击力量增加导致、K线组合出现在波段低点说明多方主力反攻开始、波段底部出现阳柱倍量意味着估计进一步上涨可能性非常大。',
        '量价齐升': '是指在市场或单个股票在大量买入盘的推动下，价格出现持续上涨，即价格涨了，买卖交易量也放大了。显示市场或单个股票的由主动买盘的买入而上涨，较为健康。',
    }





}
