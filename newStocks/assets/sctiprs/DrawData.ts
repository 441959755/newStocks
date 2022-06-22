import { pb } from "../proto/proto";
import GameCfg from "./GameCfg";
import TimeUtils from "./utils/TimeUtils";


export default {
    MinMaList: null,
    MaList: null,
    BollList: null,
    VolList: null,
    DIFList: null,
    DEAList: null,
    MACDList: null,
    KList: null,
    DList: null,
    JList: null,
    UPRS: null,
    DOWNRS: null,
    UPRS12: null,
    DOWNRS12: null,
    UPRS24: null,
    DOWNRS24: null,
    Rs6: null,
    Rs12: null,
    Rs24: null,
    EXPMA1: null,
    EXPMA2: null,
    BTX: null,

    initDrawData(data) {
        if (data.length <= 0) {
            console.log('DrawData initDrawData data is null:' + data);
            return;
        }
        this.MinMaList = [];
        this.MaList = [];
        this.BollList = [];
        this.VolList = [];
        this.DIFList = [];
        this.DEAList = [];
        this.MACDList = [];
        this.KList = [];
        this.DList = [];
        this.JList = [];
        this.UPRS = [];
        this.DOWNRS = [];
        this.UPRS12 = [];
        this.DOWNRS12 = [];
        this.UPRS24 = [];
        this.DOWNRS24 = [];
        this.Rs6 = [];
        this.Rs12 = [];
        this.Rs24 = [];
        this.EXPMA1 = [];
        this.EXPMA2 = [];
        this.BTX = [];

        let data5 = 5, k = 2, N = GameCfg.BOLL[0], EMA1Data = GameCfg.MACD[0], EMA2Data = GameCfg.MACD[1], DEAData = GameCfg.MACD[2];
        let EMA12 = 0, EMA26 = 0;
        //   try {
        data.forEach((el, index) => {

            //BTX
            if (GameCfg.GameSet.line == '宝塔线') {
                let arr = [];
                if (index == 0) {
                    arr[0] = el.open;
                    arr[1] = el.close;
                    arr[2] = false;
                } else {
                    arr[0] = this.BTX[index - 1][1];
                    arr[1] = el.close;
                    arr[2] = false;
                }
                this.BTX.push(arr);
            }

            //EXPMA2
            if (GameCfg.GameType == pb.GameType.ZhiBiao) {
                if (index == 0) {
                    this.EXPMA1.push(el.close);
                    this.EXPMA2.push(el.close);
                } else {
                    let EXPMA1, EXPMA2;
                    EXPMA1 = (el.close - this.EXPMA1[index - 1]) * 2 / (GameCfg.EXPMA[0] + 1) + this.EXPMA1[index - 1];

                    EXPMA2 = (el.close - this.EXPMA2[index - 1]) * 2 / (GameCfg.EXPMA[1] + 1) + this.EXPMA2[index - 1];
                    this.EXPMA1.push(EXPMA1);
                    this.EXPMA2.push(EXPMA2);
                }
            }

            //MaList
            if (index + 1 >= GameCfg.MAs[0]) {
                this.MaList[index] = [];

                for (let i = 0; i < GameCfg.MAs.length; i++) {
                    //   if (index + 1 >= GameCfg.MAs[i]) {
                    let MaStart = index + 1 - parseInt(GameCfg.MAs[i]);
                    if (MaStart < 0) {
                        break;
                    }
                    let sumUp = 0;
                    //天数的总和
                    for (let t = MaStart; t <= index; t++) {
                        sumUp += parseFloat(data[t].close);
                    }
                    //平均的位置
                    let MAY = (sumUp / GameCfg.MAs[i]);
                    this.MaList[index].push(MAY);
                    //  }
                }
            } else {
                this.MaList.push(null);
            }

            //MinMaList
            {
                let sun = 0
                for (let q = 0; q <= index; q++) {
                    sun += data[q].close;
                }
                this.MinMaList[index] = sun / (index + 1);
            }


            //BollList
            if (index >= N - 1) {
                this.BollList[index] = [];
                let num = 0;
                let i = index + 1 - N;
                for (; i <= index; i++) {
                    num += parseFloat(data[i].close);
                }
                let MBY = 0
                MBY = (num / N)//- this.bottomValue) / this.disValue * drawBox;
                //  if (index == N - 1) {
                //  this.BollList[index].push(MBY)
                //  } else {
                //  let MD = Math.sqrt(Math.pow(el.close - MBY, 2) / (N));
                let it = 0;

                for (let t = (index - (N - 1)); t <= index; t++) {
                    it += (Math.pow(data[t].close - MBY, 2));
                }

                let MD = Math.sqrt(it / (N));

                let UP = MBY + k * MD;

                let DN = MBY - k * MD;

                this.BollList[index].push(MBY)
                this.BollList[index].push(UP)
                this.BollList[index].push(DN)
                // }
            } else {
                this.BollList.push(null);
            }

            //均量线 白VolList
            if (index >= data5 - 1) {
                this.VolList[index] = [];
                //每段数据绘制
                for (let i = 0; i < GameCfg.VOLGraph.length; i++) {
                    if (index >= (GameCfg.VOLGraph[i] - 1)) {
                        let MaStart = index + 1 - GameCfg.VOLGraph[i];
                        let sumUp = 0;
                        //天数的总和
                        for (let t = MaStart; t <= index; t++) {
                            sumUp += parseFloat(data[t].value);
                        }
                        //平均的位置
                        let VOlPointY = (sumUp / GameCfg.VOLGraph[i]);
                        this.VolList[index].push(VOlPointY);
                    }
                }
            } else {
                this.VolList.push(null);
            }

            if (index < GameCfg.KDJ[0] - 1) {
                this.KList.push(50);
                this.DList.push(50);
                this.JList.push(50);
            }

            let RSV = 0;
            if (index == 0) {
                EMA12 = parseFloat(el.close);
                EMA26 = parseFloat(el.close);
                //   let dif = EMA12 - EMA26;
                this.DIFList.push(0);
                this.DEAList.push(0);
                this.MACDList.push(0);

                this.Rs6.push(null);
                this.Rs12.push(null);
                this.Rs24.push(null);
                this.UPRS.push(0);
                this.DOWNRS.push(0);
                this.UPRS12.push(0);
                this.DOWNRS12.push(0);
                this.UPRS24.push(0);
                this.DOWNRS24.push(0);

            } else {
                EMA12 = (EMA12 * (EMA1Data - 1) + parseFloat(el.close) * 2) / (EMA1Data + 1);
                EMA26 = (EMA26 * (EMA2Data - 1) + parseFloat(el.close) * 2) / (EMA2Data + 1);
                let dif = EMA12 - EMA26
                let dea = (this.DEAList[index - 1] * (DEAData - 1) + dif * 2) / (DEAData + 1);
                let macd = (dif - dea) * 2;
                this.DIFList.push(dif);
                this.DEAList.push(dea);
                this.MACDList.push(macd);


                if (index >= GameCfg.KDJ[0] - 1) {
                    this.n_low = el.low;
                    this.n_high = el.high;
                    for (let t = (index + 1) - GameCfg.KDJ[0]; t <= index; t++) {
                        this.n_low = Math.min(this.n_low, data[t].low);
                        this.n_high = Math.max(this.n_high, data[t].high);
                    }
                    RSV = (el.close - this.n_low) / (this.n_high - this.n_low) * 100;
                    let k = (2 / 3) * this.KList[this.KList.length - 1] + 1 / 3 * RSV;
                    let d = (2 / 3) * this.DList[this.DList.length - 1] + 1 / 3 * k;
                    let j = 3 * k - 2 * d;
                    this.KList.push(k);
                    this.DList.push(d);
                    this.JList.push(j);
                }

                if (el.close < data[index - 1].close) {

                    this.DOWNRS.push(this.DOWNRS[index - 1] * (GameCfg.RSI[0] - 1) / GameCfg.RSI[0] + (data[index - 1].close - el.close) / GameCfg.RSI[0])
                    this.UPRS.push(this.UPRS[index - 1] * (GameCfg.RSI[0] - 1) / GameCfg.RSI[0] + (0) / GameCfg.RSI[0]);

                    this.UPRS12.push(this.UPRS12[index - 1] * (GameCfg.RSI[1] - 1) / GameCfg.RSI[1] + (0) / GameCfg.RSI[1])
                    this.DOWNRS12.push(this.DOWNRS12[index - 1] * (GameCfg.RSI[1] - 1) / GameCfg.RSI[1] + (data[index - 1].close - el.close) / GameCfg.RSI[1]);

                    this.UPRS24.push(this.UPRS24[index - 1] * (GameCfg.RSI[2] - 1) / GameCfg.RSI[2] + (0) / GameCfg.RSI[2])
                    this.DOWNRS24.push(this.DOWNRS24[index - 1] * (GameCfg.RSI[2] - 1) / GameCfg.RSI[2] + (data[index - 1].close - el.close) / GameCfg.RSI[2]);

                } else {

                    this.DOWNRS.push(this.DOWNRS[index - 1] * (GameCfg.RSI[0] - 1) / GameCfg.RSI[0] + (0) / GameCfg.RSI[0])
                    this.UPRS.push(this.UPRS[index - 1] * (GameCfg.RSI[0] - 1) / GameCfg.RSI[0] + (el.close - data[index - 1].close) / GameCfg.RSI[0]);

                    this.UPRS12.push(this.UPRS12[index - 1] * (GameCfg.RSI[1] - 1) / GameCfg.RSI[1] + (el.close - data[index - 1].close) / GameCfg.RSI[1])
                    this.DOWNRS12.push(this.DOWNRS12[index - 1] * (GameCfg.RSI[1] - 1) / GameCfg.RSI[1] + (0) / GameCfg.RSI[1]);

                    this.UPRS24.push(this.UPRS24[index - 1] * (GameCfg.RSI[2] - 1) / GameCfg.RSI[2] + (el.close - data[index - 1].close) / GameCfg.RSI[2])
                    this.DOWNRS24.push(this.DOWNRS24[index - 1] * (GameCfg.RSI[2] - 1) / GameCfg.RSI[2] + (0) / GameCfg.RSI[2]);
                }

                if (index >= GameCfg.RSI[0] - 1) {

                    let UP6 = 0, DOWN6 = 0;

                    UP6 = this.UPRS[index];
                    DOWN6 = this.DOWNRS[index];
                    let RS;
                    if (DOWN6 == 0) {
                        RS = 0;
                    } else {

                        RS = (UP6) / (DOWN6);
                    }

                    this.Rs6.push(100 * RS / (1 + RS));
                } else {
                    this.Rs6.push(null);
                }

                if (index >= GameCfg.RSI[1] - 1) {

                    let UP12 = 0, DOWN12 = 0;

                    UP12 = this.UPRS12[index];
                    DOWN12 = this.DOWNRS12[index];
                    let RS;
                    if (DOWN12 == 0) {
                        RS = 0;
                    } else {

                        RS = UP12 / DOWN12;
                    }

                    this.Rs12.push(100 * RS / (1 + RS));
                } else {
                    this.Rs12.push(null);
                }

                if (index >= GameCfg.RSI[2] - 1) {

                    let UP24 = 0, DOWN24 = 0;

                    UP24 = this.UPRS24[index];
                    DOWN24 = this.DOWNRS24[index];
                    let RS;
                    if (DOWN24 == 0) {
                        RS = 0;
                    } else {

                        RS = UP24 / DOWN24;
                    }

                    this.Rs24.push(100 * RS / (1 + RS));
                } else {
                    this.Rs24.push(null);
                }
            }

        });
    },
    //     catch(e) {
    //     console.log('DrawData initDrawData err:' + e);
    // }

    //}

    /**
     * 获取涨停盘
     * 
   **/
    getRaisingLimit(index, flag?) {

        if (GameCfg.GameType == pb.GameType.QiHuo) {
            return 0;
        }

        let limitUP = 0;

        let code = GameCfg.data[0].code + '';

        if (code.length >= 7) {
            code = code.slice(1);
        }

        let str = code.slice(0, 2);
        let str1 = code.slice(0, 3);
        let gpData = GameCfg.data[0].data;

        if (gpData[index - 1] && gpData[index]) {
            let rate = (gpData[index].close - gpData[index - 1].close) / gpData[index - 1].close * 100;

            if (str == '60' || str == '00') {
                if (rate >= 9.95) {
                    limitUP = 1;
                }
                else if (rate <= -9.95) {
                    limitUP = 2;
                }
            }
            else if (str1 == '688') {
                if (rate >= 19.94) {
                    limitUP = 1;
                }
                else if (rate <= -19.94) {
                    limitUP = 2;
                }
            }
            else if (str1 == '300') {
                let time = TimeUtils.fromatTime1(gpData[index].day);
                if (time >= 20200824) {
                    if (rate >= 19.94) {
                        limitUP = 1;
                    }
                    else if (rate <= -19.94) {
                        limitUP = 2;
                    }
                }
                else if (time < 20200824) {
                    if (rate >= 9.95) {
                        limitUP = 1;
                    }
                    else if (rate <= -9.95) {
                        limitUP = 2;
                    }
                }
            }
            if (flag) {
                if (gpData[index].close == gpData[index].high) {
                    if (gpData[index].close == gpData[index].low) {
                        if (gpData[index].close == gpData[index].open) {
                            if (rate >= 4.88) {
                                limitUP = 1;
                            }
                            else if (rate <= -4.88) {
                                limitUP = 2;
                            }
                        }
                    }
                }
            }

        }
        return limitUP;
    }


}