
import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ZnzgControl from "./ZnzgControl";


export default {

    gpData: null,

    maList: null,

    difList: null,

    deaList: null,

    macdList: null,

    JXState: 0,

    MACDState: 0,

    MACDMIN: 0,

    MACDMAX: 0,

    KList: null,
    DList: null,
    JList: null,

    BollList: null,

    disMin: 0,
    disMax: 0,

    kdis: 0,
    sdis: 0,

    BollState: 0,

    BOllFlag: 0,

    EXPMA1: null,
    EXPMA2: null,

    RSI1: null,
    RSI2: null,
    RSI3: null,

    RSIState: 0,

    VOlList: null,

    curState: 'S',

    _str: null,

    RSIRecord: null,

    macdH1: 0,
    macdH2: 0,
    macdL1: null,
    macdL2: null,

    FlagDing1: false,
    FlagDing2: false,
    FlagDing3: false,
    FlagDing4: false,
    DIF1: 0,
    DIF2: 0,

    DIF3: 0,
    DIF4: 0,
    FlagDing: false,
    FlagDi: false,

    kdjH1: 0,
    kdjH2: 0,
    kdjl1: 0,
    kdjl2: 0,
    kdjflag1: false,
    kdjflag2: false,

    kdjflag3: false,
    kdjflag4: false,

    d3: 0,
    d4: 0,
    k3: 0,
    k4: 0,
    j3: 0,
    j4: 0,

    d2: 0,
    d1: 0,
    k1: 0,
    k2: 0,
    j1: 0,
    j2: 0,

    highVol: 0,
    volhk: 0,
    RSICB: false,
    RSICS: false,

    KDJCS: false,
    KDJCB: false,

    preBollInfo: null,

    MAIndex: 0,

    MAIndex1: 0,

    MAIndex2: 0,

    EXPSTART: false,

    EXPEND: false,

    MAIdnexData: [],

    MACDIndex: [],

    KDJIndex: [],

    BOLLIndex: [],

    EXPMAIndex: [],

    RSIIndex: [],

    VOLIndex: [],

    initData() {
        this.gpData = GameCfg.data[0].data;
        this.maList = DrawData.MaList;
        this.difList = DrawData.DIFList;
        this.deaList = DrawData.DEAList;
        this.macdList = DrawData.MACDList;
        this.KList = DrawData.KList;
        this.DList = DrawData.DList;
        this.JList = DrawData.JList;
        this.BollList = DrawData.BollList;
        this.EXPMA1 = DrawData.EXPMA1;
        this.EXPMA2 = DrawData.EXPMA2;
        this.RSI1 = DrawData.Rs6;
        this.RSI2 = DrawData.Rs12;
        this.RSI3 = DrawData.Rs24;
        this.VOlList = DrawData.VolList;

        this.MAIndex = GameCfg.MAs.indexOf(GameCfg.GameSet.MA[0]);
        this.MAIndex1 = GameCfg.MAs.indexOf(GameCfg.GameSet.MA[1]);
        this.MAIndex2 = GameCfg.MAs.indexOf(GameCfg.GameSet.MA[2]);
    },

    startSockIndex() {
        let reserved = 100;
        for (let i = reserved; i < this.gpData.length; i++) {
            this.judgeMaIndex(i);
            this.judgeMACDIndex(i);
            this.judgeKDJIndex(i);
            this.judgeBOLLIndex(i);
            this.judgeEXPMAIndex(i);
            this.judgeRSIIndex(i);
            this.judgeVOLIndex(i);
        }
    },

    judgeMaIndex(index) {

        //股价穿越均线  组合训练
        {
            let str;
            //1)股价上穿均线
            if (this.gpData[index].close > this.maList[index][this.MAIndex]) {
                if (this.maList[index][this.MAIndex] > this.maList[index - 1][this.MAIndex]) {
                    let b = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
                    if (this.gpData[index].close > b) {

                        if (this.curState != 'B') {
                            str = '上穿MA' + GameCfg.MAs[this.MAIndex] + '均线';
                            this.curState = 'B';
                            this.MAIdnexData.push({ index: index, name: str })
                            return;
                        }

                    }
                }
            }

            //2)股价下穿均线
            if (this.gpData[index - 1].close > this.maList[index - 1][this.MAIndex]) {
                if (this.gpData[index].close < this.maList[index][this.MAIndex]) {
                    //S
                    if (this.curState != 'S') {
                        this.curState = 'S';
                    }
                }
            }
        }


        //均线交叉  组合训练
        {
            //3）均线金叉
            if (this.maList[index][this.MAIndex1] > this.maList[index][this.MAIndex2] && this.gpData[index].close > this.maList[index][this.MAIndex2]) {
                if (this.maList[index][this.MAIndex1] >= this.maList[index - 1][this.MAIndex1] && this.maList[index][this.MAIndex2] >= this.maList[index - 1][this.MAIndex2]) {
                    if (this.JXState == 0) {
                        this.JXState = 1;
                        //  if (this.curState != 'B') {
                        //  this.onCreateTipsItem('均线金叉')
                        this.MAIdnexData.push({ index: index, name: '均线金叉' })
                        return;
                    } else {
                        if (this.JXState == 2) {
                            //   let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
                            //    if (this.gpData[index].close > max) {
                            this.JXState = 1;

                            // if (this.curState != 'B') {
                            //this.onCreateTipsItem('均线金叉')
                            //       this.curState = 'B';
                            this.MAIdnexData.push({ index: index, name: '均线金叉' })
                            return;
                        }
                    }

                }

            }

        }

        //1组合训练
        {
            //短线转向买点
            if (this.maList[index][this.MAIndex1] > this.maList[index][this.MAIndex2]) {
                if (this.maList[index][this.MAIndex1] > this.maList[index - 1][this.MAIndex1]) {
                    if (this.gpData[index].close > this.maList[index][this.MAIndex1] && this.gpData[index - 1].close < this.maList[index - 1][this.MAIndex1]) {
                        let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
                        if (this.gpData[index].close > max) {
                            //B
                            this.MAIdnexData.push({ index: index, name: '短线转向买点' });
                            return;
                        }
                    }
                }
            }

            //乖离过大买点
            if ((this.maList[index][0] - this.gpData[index].close) / this.maList[index][0] >= 0.12) {
                let min = Math.min(this.gpData[index - 1].close, this.gpData[index - 1].open);
                if (this.gpData[index].close > min) {
                    this.MAIdnexData.push({ index: index, name: '乖离过大买点' });
                    return;
                }
            }
        }

    },

    judgeMACDIndex(index) {

        //MACD金叉  经典用法
        {
            //1) MACD 金叉
            if (this.difList[index - 1] <= this.deaList[index - 1]) {
                if (this.difList[index] > this.deaList[index]) {

                    this.MACDIndex.push({ index: index, name: 'MACD金叉' });
                    return;

                }
            }
        }

        //0轴穿越  经典用法
        {
            //3）DIF向上穿越0轴
            if (this.difList[index - 1] < 0) {
                if (this.difList[index] > 0) {

                    this.MACDIndex.push({ index: index, name: '穿越0轴' });
                    return;

                }
            }

        }

        //MACD背离  经典用法
        {
            let high = this.gpData[index].high;
            let low = this.gpData[index].low;

            if (this.difList[index] >= this.deaList[index] && this.difList[index] >= 0) {
                this.macdL1 = 0;
                this.macdL2 = 0;
                this.DIF4 = 0;
                this.DIF3 = 0;
                this.FlagDing3 = false;
                this.FlagDing4 = false;
                if (!this.FlagDing1) {
                    this.macdH1 = Math.max(this.macdH1, high);
                    this.DIF1 = Math.max(this.DIF1, this.difList[index]);
                }
                else if (high > this.macdH1) {
                    this.macdH2 = Math.max(this.macdH2, high);
                    this.DIF2 = Math.max(this.DIF2, this.difList[index]);

                    if (this.gpData[index + 1]) {
                        if (this.gpData[index + 1].high < this.gpData[index].high) {
                            this.FlagDing2 = true;
                        }
                        else {
                            this.FlagDing2 = false;
                        }
                    }
                }

            }
            else if (this.difList[index] < this.deaList[index] && this.DIF1 > 0) {
                if (!this.FlagDing1) {
                    this.FlagDing1 = true;
                }

            }

            // if (this.FlagDing1 && this.FlagDing2) {
            //     if (this.macdH2 > this.macdH1 && this.DIF2 <= this.DIF1) {
            //         this._str = '上涨过程中，当股价一波高过一波，而对应的DIF（白线）的波峰却没有新高，反而逐渐变低了，即为股价的ＭＡＣＤ顶背离现象，预示着股价将要回落下跌，短线可做为卖出信号“S”。'
            //         this.macdH1 = this.macdH2;
            //         this.macdH2 = 0;
            //         this.FlagDing1 = false;
            //         this.FlagDing2 = false;
            //         this.macdL1 = 0;
            //         this.macdL2 = 0;
            //         this.DIF4 = 0;
            //         this.DIF3 = 0;
            //         this.DIF1 = this.DIF2;
            //         this.DIF2 = 0;
            //         if (this.curState != 'S') {
            //             this.onCreateTipsItem('MACD顶背离');
            //             this.curState = 'S';
            //             ;
            //         }


            //     } else {
            //         this.macdH1 = this.macdH2;
            //         this.macdH2 = 0;
            //         this.FlagDing1 = false;
            //         this.FlagDing2 = false;

            //         this.DIF2 = 0;
            //         this.DIF1 = this.DIF2;
            //         this.macdL1 = 0;
            //         this.macdL2 = 0;
            //         this.DIF4 = 0;
            //         this.DIF3 = 0;
            //     }
            // }

            if (this.difList[index] < this.deaList[index] && this.difList[index] < 0) {
                this.macdH1 = 0;
                this.macdH2 = 0;
                this.FlagDing1 = false;
                this.FlagDing2 = false;
                this.DIF2 = 0;
                this.DIF1 = 0;

                if (!this.macdL1) {
                    this.macdL1 = low;
                    this.DIF3 = this.difList[index];
                }
                if (!this.FlagDing3) {
                    this.macdL1 = Math.min(this.macdL1, low);
                    this.DIF3 = Math.min(this.DIF1, this.difList[index]);
                } else if (low < this.macdL1) {
                    if (!this.macdL2) {
                        this.macdL2 = low;
                        this.DIF4 = this.difList[index];
                    }
                    this.macdL2 = Math.min(low, this.macdL2);
                    this.DIF4 = Math.min(this.DIF2, this.difList[index]);

                    if (this.gpData[index + 1]) {
                        if (this.gpData[index + 1].low > this.gpData[index].low) {
                            this.FlagDing4 = true;
                        }
                        else {
                            this.FlagDing4 = false;
                        }
                    }

                }


            }
            else if (this.difList[index] > this.deaList[index] && this.DIF3 < 0) {
                if (!this.FlagDing3) {
                    this.FlagDing3 = true;
                }

            }

            if (this.FlagDing3 && this.FlagDing4 && this.macdL2) {
                if (this.macdL2 < this.macdL1 && this.DIF4 >= this.DIF3) {
                    this.macdH1 = 0;
                    this.macdH2 = 0;

                    this.DIF2 = 0;
                    this.DIF1 = 0;
                    this.FlagDing3 = false;
                    this.FlagDing4 = false;
                    this.macdL1 = this.macdL2;
                    this.macdL2 = null;
                    this.DIF4 = 0;
                    this.DIF3 = this.DIF4;
                    //5）MACD底背离
                    //   if (this.curState != 'B') {
                    //   this.onCreateTipsItem('MACD底背离');
                    this.MACDIndex.push({ index: index, name: 'MACD背离' });
                    return;

                } else {
                    this.macdH1 = 0;
                    this.macdH2 = 0;

                    this.DIF2 = 0;
                    this.DIF1 = 0;
                    this.FlagDing3 = false;
                    this.FlagDing4 = false;
                    this.macdL1 = this.macdL2;
                    this.macdL2 = null;
                    this.DIF4 = 0;
                    this.DIF3 = this.DIF4;
                }
            }
        }

        //柱最大值转向  经典用法
        {
            //7）绿柱最低值转向
            //  if (this.gpData[index - 1].close < this.gpData[index - 2].close) {
            if (this.macdList[index] < 0) {

                this.MACDMAX = 0;

                if (this.MACDState != 1) {
                    this.MACDMIN = Math.max(Math.abs(this.macdList[index - 1]), this.MACDMIN);

                    if (Math.abs(this.macdList[index]) < Math.abs(this.macdList[index - 1])) {

                        if (this.macdList[index] >= this.difList[index] || this.difList[index] > 0) {
                            if (this.difList[index] > this.difList[index - 1]) {
                                //B
                                this.MACDState = 1;

                                this.MACDIndex.push({ index: index, name: '绿柱最低值转向' });
                                return;
                            }
                        }
                    }
                }


                // if (this.MACDState == 1 && Math.abs(this.macdList[index]) > this.MACDMIN) {
                //     if (Math.abs(this.macdList[index]) >= 0.04) {
                //         //s
                //         this.MACDState = 2;
                //         this._str = '若买入信号Ｂ后，绿柱又放大了，一旦大于前面最大值（“绿柱再次放大”），则需要止损，即算卖出信号Ｓ，卖出个股！'
                //         if (this.curState != 'S') {
                //             this.onCreateTipsItem('绿柱再次放大');
                //             this.curState = 'S';
                //             ;
                //         }
                //     }
                // }
            }

            if (this.MACDState == 0) {
                if (this.macdList[index - 1] < 0) {
                    if (this.macdList[index] > 0) {
                        this.MACDState = 1;

                        this.MACDIndex.push({ index: index, name: '红绿柱转向' });
                        return;

                    }
                }
            }

            if (this.MACDState == 2 && this.macdList[index] > 0) {
                if (this.macdList[index] > this.macdList[index - 1]) {
                    if (this.deaList[index] > this.deaList[index - 1]) {
                        let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
                        if (this.gpData[index].close >= max) {
                            if (this.macdList[index] >= 0.04) {
                                this.MACDState = 1;

                                this.MACDIndex.push({ index: index, name: '红柱再次放大' });
                                return;
                            }
                        }
                    }
                }
            }
        }
    },

    judgeKDJIndex(index) {

        //经典用法  KDJ金叉
        {
            if (this.KList[index - 1] < this.DList[index - 1]) {
                if (this.KList[index] > this.DList[index]) {
                    if (this.DList[index] > this.DList[index - 1]) {

                        if (this.KList[index] > this.DList[index]) {
                            //2）KDJ低位金叉
                            if (this.KList[index] < 30) {

                                this.KDJIndex.push({ index: index, name: 'KDJ低位金叉' });
                                return;
                            }
                            //3）KDJ中位金叉
                            else if (this.KList[index] <= 70 && this.KList[index] >= 30) {

                                this.KDJIndex.push({ index: index, name: 'KDJ中位金叉' });
                                return
                            }
                            //4）KDJ高位金叉
                            else if (this.KList[index] > 70) {

                                this.KDJIndex.push({ index: index, name: 'KDJ高位金叉' });
                                return;
                            }
                        }
                    }
                }
            }

        }

        //超买超卖  经典用法
        {
            // 3）KDJ超买
            if (this.JList[index - 3] >= 100 && this.JList[index - 2] >= 100 && this.JList[index - 1] >= 100) {
                this.KDJCS = true;
            }
            let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);



            // 4）KDJ超卖
            if (this.JList[index - 3] <= 0 && this.JList[index - 2] <= 0 && this.JList[index - 1] <= 0) {
                this.KDJCB = true;
            }
            let min = Math.min(this.gpData[index - 1].close, this.gpData[index - 1].open);
            if (this.gpData[index].close > min && this.gpData[index].low >= this.gpData[index - 1].low && this.KDJCB) {
                //B

                this.KDJCB = false;

                this.KDJIndex.push({ index: index, name: 'KDJ超卖' })
                    ;
                return;
            }
        }

        //经典用法   KDJ背离
        {

            let high = this.gpData[index].high;
            let low = this.gpData[index].low;

            if (this.KList[index] > 50 && this.KList[index] >= this.DList[index]) {
                this.kdjl1 = 0;
                this.kdjl2 = 0;
                this.d3 = 0;
                this.d4 = 0;
                this.k3 = 0;
                this.k4 = 0;
                this.j3 = 0;
                this.j4 = 0;
                this.kdjflag3 = false
                this.kdjflag4 = false;
                if (!this.kdjflag1) {
                    this.kdjH1 = Math.max(this.kdjH1, high);
                    this.d1 = Math.max(this.d1, this.DList[index]);
                    this.k1 = Math.max(this.k1, this.KList[index]);
                    this.j1 = Math.max(this.j1, this.JList[index]);

                } else if (high > this.kdjH1) {
                    //  if (!this.kdjflag2) {
                    this.kdjH2 = Math.max(this.kdjH2, high);
                    this.d2 = Math.max(this.d2, this.DList[index]);
                    this.k2 = Math.max(this.k2, this.KList[index]);
                    this.j2 = Math.max(this.j2, this.JList[index]);
                    //  }

                    if (this.gpData[index + 1]) {
                        if (this.gpData[index + 1].high < this.gpData[index].high) {
                            this.kdjflag2 = true;
                        }
                        else {
                            this.kdjflag2 = false;
                        }
                    }
                }


            }
            else if (this.KList[index] < this.DList[index] && this.kdjH1) {
                if (!this.kdjflag1) {
                    this.kdjflag1 = true;
                }
            }

            // if (this.kdjH2 && this.kdjflag1 && this.kdjflag2) {

            //     if (this.k2 < this.k1 && this.j2 < this.j1) {
            //         //5）KDJ顶背离
            //         this.kdjflag1 = false;
            //         this.FlagDing = true;
            //         this.FlagDi = false;
            //         this.kdjl1 = 0;
            //         this.kdjl2 = 0;
            //         this.d3 = 0;
            //         this.d4 = 0;
            //         this.k3 = 0;
            //         this.k4 = 0;
            //         this.j3 = 0;
            //         this.j4 = 0;
            //         this.kdjH1 = this.kdjH2;
            //         this.kdjH2 = 0;
            //         this.d1 = this.d2;
            //         this.d2 = 0;
            //         this.k1 = this.k2;
            //         this.k2 = 0;
            //         this.j1 = this.j2;
            //         this.j2 = 0;
            //         this._str = '上涨过程中，当股价一波高于一波，而对应的D值的波峰却没有新高，反而逐渐变低，即为股价的KDJ顶背离，预示着股价将要回调下跌，可做短线卖出信号“Ｓ”。'

            //         if (this.curState != 'S') {
            //             this.onCreateTipsItem('KDJ顶背离');
            //             this.curState = 'S';
            //             ;
            //         }

            //     }
            //     else {
            //         this.kdjl1 = 0;
            //         this.kdjl2 = 0;
            //         this.d3 = 0;
            //         this.d4 = 0;
            //         this.k3 = 0;
            //         this.k4 = 0;
            //         this.j3 = 0;
            //         this.j4 = 0;

            //         this.FlagDing = false;
            //         this.FlagDi = false;

            //         this.kdjH1 = this.kdjH2;
            //         this.kdjH2 = 0;
            //         this.d1 = this.d2;
            //         this.d2 = 0;
            //         this.k1 = this.k2;
            //         this.k2 = 0;
            //         this.j1 = this.j2;
            //         this.j2 = 0;
            //     }

            // }

            if (this.KList[index] < 50 && this.KList[index] < this.DList[index]) {

                this.FlagDing = false;
                this.FlagDi = false;

                this.kdjH1 = 0;
                this.kdjH2 = 0;
                this.d1 = 0;
                this.d2 = 0;
                this.k1 = 0;
                this.k2 = 0;
                this.j1 = 0;
                this.j2 = 0;
                if (!this.kdjflag3) {
                    if (!this.kdjl1) {
                        this.kdjl1 = low;
                        this.d3 = this.DList[index];
                        this.k3 = this.KList[index];
                        this.j3 = this.JList[index];
                    }
                    this.kdjl1 = Math.min(this.kdjl1, low);
                    this.d3 = Math.min(this.d3, this.DList[index]);
                    this.k3 = Math.min(this.k3, this.KList[index]);
                    this.j3 = Math.min(this.j3, this.JList[index]);
                } else if (low < this.kdjl1) {
                    // if (!this.kdjflag4) {
                    if (!this.kdjl2) {
                        this.kdjl2 = low;
                        this.d4 = this.DList[index];
                        this.k4 = this.KList[index];
                        this.j4 = this.JList[index];
                    }
                    this.kdjl2 = Math.min(this.kdjl2, low);
                    this.d4 = Math.min(this.d4, this.DList[index]);
                    this.k4 = Math.min(this.k4, this.KList[index]);
                    this.j4 = Math.min(this.j4, this.JList[index]);

                    if (this.gpData[index + 1]) {
                        if (this.gpData[index + 1].low > this.gpData[index].low) {
                            this.kdjflag4 = true;
                        }
                        else {
                            this.kdjflag4 = false;
                        }
                    }
                    //  }
                }
            }
            else if (this.KList[index] > this.DList[index] && this.kdjl1) {
                if (!this.kdjflag3) {
                    this.kdjflag3 = true;
                }
            }

            if (this.kdjl2 && this.kdjflag3 && this.kdjflag4) {
                if (this.k4 > this.k3 && this.j4 > this.j3) {

                    this.kdjflag3 = false
                    this.kdjflag4 = false;
                    this.FlagDing = false;
                    this.FlagDi = true;
                    this.kdjl1 = this.kdjl2;
                    this.kdjl2 = 0;
                    this.kdjH1 = 0;
                    this.kdjH2 = 0;
                    this.d1 = 0;
                    this.d2 = 0;
                    this.k1 = 0;
                    this.k2 = 0;
                    this.j1 = 0;
                    this.j2 = 0;

                    this.d3 = this.d4;
                    this.d4 = 0;
                    this.k3 = this.k4;
                    this.k4 = 0;
                    this.j3 = this.j4;
                    this.j4 = 0;
                    //6）KDJ底背离

                    this.KDJIndex.push({ index: index, name: 'KDJ背离' })
                        ;
                    return;


                } else {
                    this.kdjH1 = 0;
                    this.kdjH2 = 0;
                    this.d1 = 0;
                    this.d2 = 0;
                    this.k1 = 0;
                    this.k2 = 0;
                    this.j1 = 0;
                    this.j2 = 0;
                    this.kdjflag3 = false
                    this.kdjflag4 = false;
                    this.FlagDing = false;
                    this.FlagDi = true;
                    this.kdjl1 = this.kdjl2;
                    this.kdjl2 = 0;


                    this.d3 = this.d4;
                    this.d4 = 0;
                    this.k3 = this.k4;
                    this.k4 = 0;
                    this.j3 = this.j4;
                    this.j4 = 0;
                }
                this.kdjflag1 = false;
            }
        }
    },

    judgeBOLLIndex(index) {

        let dis = this.BollList[index][1] - this.BollList[index][2];

        if (!this.disMin) {
            this.disMin = dis;
        }

        if (this.BollState == 0) {
            this.disMax = Math.max(dis, this.disMax);
            this.disMin = Math.min(dis, this.disMin);
            if (dis <= this.disMax * 2 / 3) {

                this.BollState = 2;
                this.disMin = Math.min(dis, this.disMin);
            }
            else if (dis > 1.5 * this.disMin) {

                this.BollState = 1;
                this.disMax = Math.max(dis, this.disMax);
            }
        }

        if (this.BollState == 1) {
            if (dis <= this.disMax * 2 / 3) {
                // if (this.BollList == 1) {
                this.disMin = dis;
                //    }

                this.BollState = 2;
                this.disMin = Math.min(dis, this.disMin);
            }
            else if (dis > 1.5 * this.disMin) {

                this.BollState = 1;
                this.disMax = Math.max(dis, this.disMax);
            }

        }
        else if (this.BollState == 2) {
            if (dis > 1.5 * this.disMin) {
                //   if (this.BollList == 2) {
                this.disMax = 0;
                //    }
                this.BollState = 1;
                this.disMax = Math.max(dis, this.disMax);
            }
            else if (dis <= this.disMax * 2 / 3) {

                this.BollState = 2;
                this.disMin = Math.min(dis, this.disMin);
            }

        }

        //经典用法  布林带中轨
        {
            //1) 股价突破中轨
            if (this.BollList[index][0] >= this.BollList[index - 1][0] && this.BollList[index][1] >= this.BollList[index - 1][1] ||
                this.BollList[index][1] >= this.BollList[index - 1][1] && this.BollList[index][2] >= this.BollList[index - 1][2] ||
                this.BollList[index][0] >= this.BollList[index - 1][0] && this.BollList[index][2] >= this.BollList[index - 1][2]) {
                if (this.gpData[index - 1].low < this.BollList[index - 1][0] && this.gpData[index].close > this.BollList[index][0]) {
                    if (this.gpData[index].close > this.gpData[index - 1].close && this.gpData[index].low > this.gpData[index - 1].low) {
                        //B


                        this.preBollInfo = 1;
                        //    this.onCreateTipsItem('股价突破中轨');
                        //      this.curState = 'B';
                        this.BOLLIndex.push({ index: index, name: '股价突破中轨' })
                            ;
                        return;
                    }
                }
            }


        }

        // 7）布林带上轨阻力
        let fu = 0;
        if (index >= 4) {
            fu = (this.BollList[index][0] - this.BollList[index - 4][0]) / this.BollList[index - 4][0];
            if (Math.abs(fu) < 0.01) {

                // /6）布林带下轨支撑
                // if (this.gpData[index - 1].close > this.BollList[index - 1][2]) {
                if (this.gpData[index - 1].low <= this.BollList[index - 1][2]) {
                    if (this.gpData[index].low > this.gpData[index - 1].low) {
                        let min = Math.min(this.gpData[index].open, this.gpData[index].close);
                        let premin = Math.min(this.gpData[index - 1].open, this.gpData[index].close)
                        if (min >= premin) {
                            if (this.BollList[index][0] > this.BollList[index - 1][0] || this.BollList[index][1] > this.BollList[index - 1][1] || this.BollList[index][2] > this.BollList[index - 1][2]) {
                                //b

                                //   if (this.curState != 'B') {
                                this.preBollInfo = 6;
                                //  this.onCreateTipsItem('布林带下轨支撑');
                                //      this.curState = 'B';
                                this.BOLLIndex.push({ index: index, name: '布林带下轨支撑' })
                                    ;
                                return;
                            }
                        }

                    }
                }



            }
        }

        //经典用法   单边突破上轨
        {
            //3）股价触碰上轨
            // if (this.gpData[index].high >= this.BollList[index][1]) {
            //     if (this.gpData[index].close < this.BollList[index][1]) {
            //         let max = Math.max(this.gpData[index - 1].open, this.gpData[index - 1].close);
            //         if (this.gpData[index].close < max) {
            //             //s
            //             this._str = '股价由下向上突破上轨，但没有效站稳上轨时；或股价远离上轨后，转向回落时；可作为短线卖出信号“S”，止赢个股！'

            //             if (this.curState != 'S') {
            //                 this.preBollInfo = 3;
            //                 this.onCreateTipsItem('股价触碰上轨');
            //                 this.curState = 'S';
            //                 ;
            //             }
            //         }
            //         else if (this.BollList[index][0] <= this.BollList[index - 1][0]) {
            //             if (this.BollList[index][1] <= this.BollList[index - 1][1] || this.BollList[index][2] <= this.BollList[index - 1][2]) {
            //                 //s
            //                 this._str = '股价由下向上突破上轨，但没有效站稳上轨时；或股价远离上轨后，转向回落时；可作为短线卖出信号“S”，止赢个股！'

            //                 if (this.curState != 'S') {
            //                     this.preBollInfo = 3;
            //                     this.onCreateTipsItem('股价触碰上轨');
            //                     this.curState = 'S';
            //                     ;
            //                 }
            //             }
            //         }

            //     }
            // }

            //4）股价突破上轨
            if (this.BollState == 1) {
                if (this.gpData[index].close > this.BollList[index][1]) {
                    //B

                    //  if (this.curState != 'B') {
                    this.preBollInfo = 4;
                    // this.onCreateTipsItem('股价突破上轨');
                    //    this.curState = 'B';
                    this.BOLLIndex.push({ index: index, name: '股价突破上轨' })
                        ;
                    return;
                }
            }

            // if (this.preBollInfo == 4 && this.gpData[index].close < this.BollList[index][1]) {
            //     this._str = '布林带喇叭开口情形下，当价格沿BOLL上轨突破运行时，可做短线买入信号“B”；该情况下一般为爆发性单边上涨行情，坚定持股，直至价格脱离上轨区域，股价跌破中轨时，再做卖出信号“S”；'

            //     if (this.curState != 's') {
            //         this.preBollInfo = 0;
            //         this.onCreateTipsItem('股价止损');
            //         this.curState = 's';
            //         ;
            //     }
            // }
        }

        //经典用法  上下轨间震荡
        {
            //5）股价跌破下轨
            // if (this.BollState == 1) {
            //     if (this.gpData[index - 1].close >= this.BollList[index - 1][2]) {
            //         if (this.gpData[index].close < this.BollList[index][2]) {
            //             //s
            //             this._str = '布林带喇叭开口情形下，当价格沿BOLL下轨跌破时，可做短线卖出信号“Ｓ”；该情况下一般为爆发性单边杀跌行情，持币观望！'

            //             if (this.curState != 'S') {
            //                 this.preBollInfo = 5;
            //                 this.onCreateTipsItem('股价跌破下轨');
            //                 this.curState = 'S';
            //                 ;
            //             }
            //         }
            //     }
            // }




        }

    },

    judgeEXPMAIndex(index) {

        //经典用法
        {
            //短线转向买点
            if (this.EXPMA1[index] > this.EXPMA2[index]) {
                if (this.EXPMA1[index] > this.EXPMA1[index - 1]) {
                    if (this.gpData[index].close > this.EXPMA1[index] && this.gpData[index - 1].close < this.EXPMA1[index - 1]) {
                        let max = Math.max(this.gpData[index - 1].open, this.gpData[index - 1].close);
                        if (this.gpData[index].close > max) {
                            //   if (this.gpData[index].low > this.gpData[index - 1].low) {
                            //B
                            this._str = '1）EXP 金叉后，且白线exp1趋势向上；3）此时若股价上涨又从下有效站上exp1时,即股价再次反转向上时；则可做短线买入信号“B”！'

                            // if (this.curState != 'B') {
                            //  this.onCreateTipsItem('短线转向买点');
                            //     this.curState = 'B';
                            this.EXPMAIndex.push({ index: index, name: '短线转向买点' })
                                ;
                            //   }
                            //  }

                        }
                    }
                }
            }

            //短线转向卖点

            // if (this.EXPMA1[index] <= this.EXPMA1[index - 1]) {
            //     if (this.gpData[index].close < this.EXPMA1[index] && this.gpData[index - 1].close > this.EXPMA1[index - 1]) {
            //         let min = Math.min(this.gpData[index - 1].open, this.gpData[index - 1].close);
            //         if (this.gpData[index].low < min) {
            //             this._str = '1）当白线exp1趋势转向下时； 2） 此时若股价有效跌破exp1线时, 且股价反转跌破上日K线； 则可做短线卖出信号"S" !'

            //             if (this.curState != 'S') {
            //                 this.onCreateTipsItem('短线转向卖点');
            //                 this.curState = 'S';
            //                 ;
            //             }
            //         }

            //     }
            // }

            // 乖离过大买点

            if (this.EXPMA1[index] < this.EXPMA2[index]) {
                if ((this.EXPMA1[index] - this.gpData[index].close) / this.EXPMA1[index] >= 0.1) {
                    let min = Math.min(this.gpData[index - 1].close, this.gpData[index - 1].open);
                    if (this.gpData[index].close > min) {
                        if (this.gpData[index].low > this.gpData[index - 1].low) {
                            this._str = '1）下跌过程中，当股价下跌远离exp1过大时（比如超过-10%时）；2）此后接下来若股价不再创新低时，则短线会有超跌反弹；短线可做买入信号“B”.'

                            //  if (this.curState != 'B') {
                            // this.onCreateTipsItem('乖离过大买点');
                            //      this.curState = 'B';
                            this.EXPMAIndex.push({ index: index, name: '乖离过大买点' })
                                ;
                            //  }
                        }
                    }

                }
            }

            // //乖离过大卖点
            // if (this.EXPMA1[index] > this.EXPMA2[index]) {
            //     if ((this.gpData[index].close - this.EXPMA1[index]) / this.EXPMA1[index] >= 0.1) {
            //         let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
            //         if (this.gpData[index].close < max) {
            //             //s
            //             this._str = '1）上涨过程中，当股价上涨远离Exp1过大时（比如超过10%时）；2）此时后若股价收盘价未再创新高时，则股价会做超买回落；短线可做卖出信号“S”.'

            //             if (this.curState != 'S') {
            //                 this.onCreateTipsItem('乖离过大卖点');
            //                 this.curState = 'S';
            //                 ;
            //             }
            //         }
            //     }
            // }
        }

        //EXPMA金叉  经典用法
        {
            if (this.EXPMA1[index - 1] < this.EXPMA2[index - 1] || !this.EXPSTART) {
                this.EXPSTART = true;
                if (this.EXPMA2[index] >= this.EXPMA2[index - 1] && this.EXPMA1[index] >= this.EXPMA1[index - 1]) {
                    if (this.EXPMA1[index] > this.EXPMA2[index]) {
                        //B
                        this._str = '白色EXP1均线上穿黄色EXP2均线(EXP2均线走平和向上趋势)；可做短线买入信号"B"。'

                        // if (this.curState != 'B') {

                        //   this.onCreateTipsItem('EXP均线金叉');
                        //    this.curState = 'B';
                        this.EXPMAIndex.push({ index: index, name: 'EXP均线金叉' })
                            ;
                        //  }
                    }
                }
            }

            //EXP均线死叉
            // if (this.EXPMA1[index - 1] > this.EXPMA2[index - 1] || !this.EXPEND) {
            //     this.EXPEND = true;
            //     if (this.EXPMA1[index] < this.EXPMA2[index]) {
            //         //s
            //         this._str = '1）当黄色EXP2均线走平转向下趋势时,2）此时若白色EXP1均线死叉黄色EXP2均线时； 可做短线卖出信号"S"， 卖出个股！'

            //         if (this.curState != 'S') {

            //             this.onCreateTipsItem('EXP均线死叉');
            //             this.curState = 'S';

            //             ;
            //         }
            //     }
            // }
        }

    },

    judgeRSIIndex(index) {

        //RSI金叉  经典用法
        {
            //  {//RSI金叉
            if (this.RSI1[index - 1] < this.RSI3[index - 1]) {
                if (this.RSI1[index] > this.RSI3[index]) {
                    //B

                    //  if (this.curState != 'B') {
                    //     this.onCreateTipsItem('RSI金叉');
                    //      this.curState = 'B';
                    this.RSIIndex.push({ index: index, name: 'RSI金叉' })
                        ;
                    return;
                }
            }

            // if (this.RSI1[index - 1] > this.RSI3[index - 1]) {
            //     if (this.RSI1[index] > this.RSI2[index] || this.RSI2[index] > this.RSI3[index]) {
            //         this._str = '当黄线RSI1从下向上穿越紫线RSI3时, 称为RSI1金叉! 可作为买入信号"B"，短线买入个股。'

            //         if (this.curState != 'B') {
            //             this.onCreateTipsItem('RSI金叉');
            //             this.curState = 'B';
            //             StrategyAIData.onBuyFunc();
            //             ;
            //         }
            //     }
            // }

            //     if (this.RSI1[index - 1] < this.RSI3[index - 1]) {
            //         if (this.RSI1[index] > this.RSI3[index]) {
            //             this._str = '当黄线RSI1从下向上穿越紫线RSI3时, 称为RSI1金叉! 可作为买入信号"B"，短线买入个股。'

            //             if (this.curState != 'B') {
            //                 this.onCreateTipsItem('RSI金叉');
            //                 this.curState = 'B';
            //                 StrategyAIData.onBuyFunc();
            //                 ;
            //             }
            //         }
            //     }
            // }

        }

        //经典用法  超买超卖
        {
            {//RSI超卖
                if (this.RSI1[index - 1] < 20) {
                    this.RSICS = true;
                }
                let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
                if (this.gpData[index].close >= max && this.RSICS) {
                    if (this.RSI1[index] > this.RSI1[index - 1] && this.RSI2[index] > this.RSI2[index - 1]) {

                        this.RSICS = false;
                        this.RSIState = 2;
                        this.RSIRecord = this.gpData[index - 1].close;

                        this.RSIIndex.push({ index: index, name: 'RSI超卖' })
                        return;
                    }

                }

            }


        }

        //经典用法
        {
            //高位钝化买点
            if (this.RSI2[index] >= 75) {
                if (this.RSI1[index] > this.RSI2[index] && this.RSI2[index] > this.RSI3[index]) {
                    if (this.RSI1[index] > this.RSI1[index - 1]) {
                        let max = Math.max(this.gpData[index - 1].open, this.gpData[index - 1].close);
                        if (this.gpData[index].close > max) {
                            //B
                            this.RSIState = 1;


                            this.RSIIndex.push({ index: index, name: '高位钝化买点' })
                                ;

                        }
                    }
                }
            } else {
                if (this.RSIState == 1 && this.RSI2[index] < 75) {
                    //s
                    this.RSIState = 0;

                }
            }

        }

    },

    judgeVOLIndex(index) {
        //均量线金叉
        if (this.VOlList[index][0] > this.VOlList[index][1]) {
            if (this.gpData[index].value > this.VOlList[index][0]) {
                if (this.gpData[index].value > this.VOlList[index][1]) {
                    if (this.VOlList[index][1] > this.VOlList[index - 1][0]) {
                        if (this.gpData[index].close > this.gpData[index].open) {
                            //b

                            this.VOLIndex.push({ index: index, name: '均量线金叉' })

                            this.highVol = this.gpData[index].value;
                            this.volhk = this.gpData[index].high;
                            ;

                        }

                    }
                }
            }

        }


        //倍量阳柱(阳线）
        {
            if (this.gpData[index].value >= 1.9 * this.gpData[index - 1].value) {
                if (this.gpData[index].close > this.gpData[index - 1].close) {
                    let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
                    if (this.gpData[index].close >= max && this.gpData[index].close > this.gpData[index].open) {
                        if (this.gpData[index].value > this.VOlList[index][0] && this.gpData[index].value > this.VOlList[index][1]) {
                            //TODO还有一个条件没写


                            this.VOLIndex.push({ index: index, name: '倍量阳柱' })

                            this.highVol = this.gpData[index].value;
                            this.volhk = this.gpData[index].high;
                            ;

                        }
                    }
                }

            }

        }

        //量价齐升
        {
            if (this.gpData[index].value > this.gpData[index - 1].value) {
                if (this.gpData[index].value > this.VOlList[index][0]) {
                    if (this.gpData[index].value > this.VOlList[index][1]) {
                        let max = Math.max(this.gpData[index - 1].close, this.gpData[index - 1].open);
                        if (this.gpData[index].close >= max) {
                            //TODO 长期什么鬼

                            this.VOLIndex.push({ index: index, name: '量价齐升' })

                            this.highVol = this.gpData[index].value;
                            this.volhk = this.gpData[index].high;
                            ;

                        }
                    }
                }
            }
        }


        this.highVol = Math.max(this.highVol, this.gpData[index].value);
        this.volhk = Math.max(this.gpData[index].high, this.volhk);

    },

    clearData() {
        this.gpData = null;

        this.maList = null;

        this.difList = null;

        this.deaList = null;

        this.macdList = null;

        this.JXState = 0;

        this.MACDState = 0;

        this.MACDMIN = 0;

        this.MACDMAX = 0;

        this.KList = null;
        this.DList = null;
        this.JList = null;

        this.BollList = null;

        this.disMin = 0;
        this.disMax = 0;

        this.kdis = 0;
        this.sdis = 0;

        this.BollState = 0;

        this.BOllFlag = 0;

        this.EXPMA1 = null;
        this.EXPMA2 = null;

        this.RSI1 = null;
        this.RSI2 = null;
        this.RSI3 = null;

        this.RSIState = 0;

        this.VOlList = null;

        this.textInfo = [];

        this.curState = 'S';

        this._str = null;

        this.RSIRecord = null;

        this.macdH1 = 0;
        this.macdH2 = 0;
        this.macdL1 = null;
        this.macdL2 = null;

        this.FlagDing1 = false;
        this.FlagDing2 = false;
        this.FlagDing3 = false;
        this.FlagDing4 = false;
        this.DIF1 = 0;
        this.DIF2 = 0;

        this.DIF3 = 0;
        this.DIF4 = 0;
        this.FlagDing = false;
        this.FlagDi = false;

        this.kdjH1 = 0;
        this.kdjH2 = 0;
        this.kdjl1 = 0;
        this.kdjl2 = 0;
        this.kdjflag1 = false;
        this.kdjflag2 = false;

        this.kdjflag3 = false;
        this.kdjflag4 = false;

        this.d3 = 0;
        this.d4 = 0;
        this.k3 = 0;
        this.k4 = 0;
        this.j3 = 0;
        this.j4 = 0;

        this.d2 = 0;
        this.d1 = 0;
        this.k1 = 0;
        this.k2 = 0;
        this.j1 = 0;
        this.j2 = 0;

        this.highVol = 0;
        this.volhk = 0;
        this.RSICB = false;
        this.RSICS = false;

        this.KDJCS = false;
        this.KDJCB = false;

        this.preBollInfo = null;

        this.MAIndex = 0;

        this.MAIndex1 = 0;

        this.MAIndex2 = 0;

        this.EXPSTART = false;

        this.EXPEND = false;

        this.MAIdnexData = [];

        this.MACDIndex = [];

        this.KDJIndex = [];

        this.BOLLIndex = [];

        this.EXPMAIndex = [];

        this.RSIIndex = [];

        this.VOLIndex = [];
    },

    /**
     * 获取最后一个信号
     */
    getlastStockIndex() {

        let index = Math.max(this.MAIdnexData[this.MAIdnexData.length - 1]?.index || 0,
            this.MACDIndex[this.MACDIndex.length - 1]?.index || 0,
            this.KDJIndex[this.KDJIndex.length - 1]?.index || 0,
            this.BOLLIndex[this.BOLLIndex.length - 1]?.index || 0,
            this.EXPMAIndex[this.EXPMAIndex.length - 1]?.index || 0,
            this.RSIIndex[this.RSIIndex.length - 1]?.index || 0,
            this.VOLIndex[this.VOLIndex.length - 1]?.index || 0);

        if (this.MAIdnexData[this.MAIdnexData.length - 1] && this.MAIdnexData[this.MAIdnexData.length - 1].index == index) {
            return this.MAIdnexData;
        }

        else if (this.MACDIndex[this.MACDIndex.length - 1] && this.MACDIndex[this.MACDIndex.length - 1].index == index) {
            return this.MACDIndex;
        }

        else if (this.KDJIndex[this.KDJIndex.length - 1] && this.KDJIndex[this.KDJIndex.length - 1].index == index) {
            return this.KDJIndex;
        }

        else if (this.BOLLIndex[this.BOLLIndex.length - 1] && this.BOLLIndex[this.BOLLIndex.length - 1].index == index) {
            return this.BOLLIndex;
        }

        else if (this.EXPMAIndex[this.EXPMAIndex.length - 1] && this.EXPMAIndex[this.EXPMAIndex.length - 1].index == index) {
            return this.EXPMAIndex;
        }

        else if (this.RSIIndex[this.RSIIndex.length - 1] && this.RSIIndex[this.RSIIndex.length - 1].index == index) {
            return this.RSIIndex;
        }

        else if (this.VOLIndex[this.VOLIndex.length - 1] && this.VOLIndex[this.VOLIndex.length - 1].index == index) {
            return this.VOLIndex;
        }
    },

    /**
     * 获取上涨概率
     */
    getRiseProbability() {
        let list = this.getlastStockIndex();
        ZnzgControl.lastStockIndexList = list;
        ZnzgControl.lastIndexName = list[list.length - 1].name;
        ZnzgControl.lastIndexTime = this.gpData[list[list.length - 1].index].day;

        list.forEach(el => {

            if (el.name == list[list.length - 1].name) {

                if (this.gpData[el.index + 1] && this.gpData[el.index + 1].close > this.gpData[el.index].close) {
                    ZnzgControl.rise1Probability += 1;
                }

                if (this.gpData[el.index + 3] && this.gpData[el.index + 3].close > this.gpData[el.index].close) {
                    ZnzgControl.rise3Probability += 1;
                }

                if (this.gpData[el.index + 5] && this.gpData[el.index + 5].close > this.gpData[el.index].close) {
                    ZnzgControl.rise5Probability += 1;
                }

                ZnzgControl.indexCount += 1;
            }
        });

        ZnzgControl.rise1Probability = ComUtils.changeTwoDecimal(ZnzgControl.rise1Probability / ZnzgControl.indexCount * 100);
        ZnzgControl.rise3Probability = ComUtils.changeTwoDecimal(ZnzgControl.rise3Probability / ZnzgControl.indexCount * 100);
        ZnzgControl.rise5Probability = ComUtils.changeTwoDecimal(ZnzgControl.rise5Probability / ZnzgControl.indexCount * 100);
    },


}