
import GameCfg from "../GameCfg";
import GameData from "../GameData";
import EventCfg from "./EventCfg";
import GlobalEvent from "./GlobalEvent";
import LocalStorageUtils from "./LocalStorageUtils"
import TimeUtils from "./TimeUtils";

const confData = {

    line: 'k线',

    taotal: 256,    //总条数

    reserve: 106,   //预留条数  

    year: '随机',

    month: '随机',

    day: '随机',

    isShowVol: true,

    isBW: true,

    isMA1: true,
    MA1: 5,

    isMA2: true,
    MA2: 10,

    isMA3: true,
    MA3: 20,

    isMA4: true,
    MA4: 30,

    isMA5: true,
    MA5: 60,

    isMA6: true,
    MA6: 120,

    isFC: false,

    isSound: true,

    isAuto: false,  //是否自动

    kSpeed: 0.2,    //速度

    //dx
    kNotice: true,
    jxNotice: true,
    stopCheckNotice: true,
    market: '随机行情',
    search: '随机选股',


    //zb
    select: '均线',
    strategy: '股价穿越均线',
    showSign: true,
    MA: [20, 10, 30, -8],
    VOL: [5, 20],
    MACD: [12, 26, 9],
    BOLL: [20],
    KDJ: [9],
    RSI: [6, 12, 24],
    EXPMA: [12, 50],

    //qh
    JYS: '随机',
    LXPZ: '随机',
    HY: '随机',

    KLine: 150,

    ZLine: '日线',
}

export default {

    /**
     * 
     * @param str 
     * @returns 
     */
    getConf(str) {
        let conf = LocalStorageUtils.getItem(str);
        if (conf) {
            return JSON.parse(conf);
        }
        return confData;
    },

    /**
     * 
     */
    getHisCode(str) {
        let hisCode = LocalStorageUtils.getItem(str);
        if (hisCode) {
            return JSON.parse(hisCode);
        }
        return [];
    },

    /**
     * 
     * @returns 
     */
    get SelectBk() {

        if (!this._selectBK) {
            let selectBK = LocalStorageUtils.getItem('SELECTBK');
            if (selectBK) {
                this._selectBK = JSON.parse(selectBK);
            }
            else {
                this._selectBK = [1, 1, 1, 1, 1, 1];
            }
        }

        return this._selectBK;
    },

    set SelectBk(val) {
        this._selectBK = val;
        LocalStorageUtils.setItem('SELECTBK', val);
    },

    /**
     * 
     * @param id 
     * @param cb 
     * @returns 
     */
    getSwitchConf(id, cb?) {

        let flag = false;

        GameData.appConf.module.forEach(el => {
            if (el.id == id) {
                flag = el.switch;
            }
        });

        if (cb && !flag) {
            cb();
        }
        else {
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '暂未开放，敬请期待！');
        }
    },

    /**
     * 
     * @param item 
     * @returns 
     */
    getGPItemInfo(item) {
        let items;
        for (let i = 0; i < GameData.stockList.length; i++) {
            if (GameData.stockList[i] == '') {
                continue;
            }
            let arr = GameData.stockList[i].split('|');
            if (arr[0].indexOf(item) != -1 || arr[1].indexOf(item) != -1) {
                items = arr;
                break;
            }
        }

        return items;
    },

    getQHItemInfo(item) {
        let index = -1;
        for (let i = 0; i < GameData.contractlist.length; i++) {
            if (GameData.contractlist[i].indexOf(item) != -1) {
                index = i;
                break;
            }
            let arr = GameData.contractlist[i].split('|');

            if ((arr[2] + arr[3]) == item) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            return GameData.contractlist[index].split('|');
        } else {
            console.log('没有找打期货' + item);
            return;
        }
    },

    /**
     * 
     * @param str 股票名字
     * @returns 股票时间
     */
    getTimeByCodeName1(str) {
        str = str.split(' ')[0];
        let items;
        for (let i = 0; i < GameData.stockList.length; i++) {
            let arr = GameData.stockList[i].split('|');
            if (arr[0].indexOf(str) != -1 || arr[1].indexOf(str) != -1) {
                items = arr;
                break;
            }
        }

        if (!items) {
            console.log('getTimeByCodeName1 parameters str is err:' + str);
            return;
        }

        let data = {
            start: null,
            end: null,
        }
        data.start = items[2];
        data.end = items[3];
        if (items[3] == 0) {
            let f = new Date();
            let y = f.getFullYear() + '';
            let m = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
            let d = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();
            data.end = y + '' + m + '' + d;
        }
        return data;
    },


    /**
     * 
     * @returns 随机股票
     */
    getItemsByTime1() {
        let le = parseInt(Math.random() * GameData.stockList.length + '');
        while (le--) {
            let items = GameData.stockList[le].split('|');
            if (items[3] == 0) {
                return items;
            }
            if (le <= 0) {
                le = GameData.stockList.length - 1;
            }
        }
    },

    //随机SM一只股票
    getGPSMByRandom(cb?) {

        let data = {
            ktype: pb.KType.Day,
            kstyle: pb.KStyle.Random,
            code: null,
            from: null,
            total: 250,
            to: 0,
            reserve: 100,
        }

        let le = parseInt(Math.random() * GameData.stockList.length + '');

        let items = GameData.stockList[le].split('|');

        data.code = items[0];

        let start = items[2], end = items[3], sc;

        if (end == 0) {

            sc = new Date().getTime() - 24 * 60 * 60 * 1000 * data.total;

        } else {

            let year = end.slice(0, 4);
            let month = end.slice(4, 6);
            let day = end.slice(6);

            let d = new Date(year + '-' + month + '-' + day);

            sc = d.getTime() - 24 * 60 * 60 * 1000 * data.total;
        }

        if (parseInt(start) < 20100101) {
            start = '20100601';
        }

        let year = start.slice(0, 4);
        let month = start.slice(4, 6);
        let day = start.slice(6);

        //开始的时间戳
        let d = new Date(year + '-' + month + '-' + day);
        ///console.log(d); 
        let t = d.getTime() + 24 * 60 * 60 * 1000 * 100;

        if (sc <= 0) {
            this.getGPSMByRandom();
            return;
        }
        else if (sc < t) {
            this.getGPSMByRandom();
            return;
        }
        else {
            //随机的时间戳
            let s = Math.random() * (sc - t) + t;

            let f = new Date(s);
            {
                let ye = f.getFullYear();
                let mon = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);

                let da = f.getDate() >= 10 ? f.getDate() : '0' + (f.getDate());

                data.from = ye + '' + mon + '' + da;
            }

            GameCfg.data[0].data = [];
            GameCfg.data[0].name = items[1];
            GameCfg.data[0].code = items[0];
            GameCfg.data[0].circulate = items[4];
            GameCfg.data[0].ktype = data.ktype;

            GameCfg.enterGameConf = data;
        }
    },

    //随机DX一只股票
    getGPDXByRandom(cb?) {

        let data = {
            ktype: GameCfg.enterGameConf.ktype,
            kstyle: GameCfg.enterGameConf.kstyle,
            code: null,
            from: null,
            total: parseInt(GameData.dxSet.KLine) + 100,
            to: 0,
            reserve: 100,
        };

        let items;

        let le = parseInt(Math.random() * GameData.stockList.length + '');

        items = GameData.stockList[le].split('|');

        data.code = items[0];
        // data.kstyle = pb.KStyle.Random;

        let start = items[2],
            end = items[3],
            sc;
        if (end == 0) {

            sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000;

        } else {
            let year = end.slice(0, 4);
            let month = end.slice(4, 6);
            let day = end.slice(6);

            let d = new Date(year + '-' + month + '-' + day);


            sc = d.getTime() - data.total * 24 * 60 * 60 * 1000;

        }

        if (parseInt(start) < 20100101) {
            start = '20100101';
        }

        let year = start.slice(0, 4);
        let month = start.slice(4, 6);
        let day = start.slice(6);

        let d = new Date(year + '-' + month + '-' + day);

        let t;

        t = d.getTime() + 24 * 60 * 60 * 1000 * 100 * 2;

        if (sc < t && GameData.dxSet.year == '随机' && GameData.dxSet.search == '随机选股') {
            this.getGPDXByRandom();
            return;
        }

        let s = Math.random() * (sc - t) + t;

        let f = new Date(s);

        {
            let ye = f.getFullYear();
            let mon = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);

            let da = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();

            data.from = ye + '' + mon + '' + da;
        }

        GameCfg.data[0].code = items[0];

        GameCfg.data[0].data = [];
        GameCfg.data[0].name = items[1];

        GameCfg.data[0].circulate = items[4];
        GameCfg.enterGameConf = data;

        console.log('给的数据:' + JSON.stringify(data));
    },


    getGPZBByRandom(cb?) {
        let data = {
            ktype: GameCfg.enterGameConf.ktype,     //4 30分钟  5  60分钟  10  日   11周
            kstyle: 0,      // 0随机行情   1震荡行情  2单边向上行情 3单边向下行情
            code: null,       //股票代码（0表示忽略和随机）
            from: null,       //// 开始时间戳（不能为0，查询日K行情的格式为：YYYYMMDD；查询分时行情的格式为：HHMMSS）
            total: parseInt(GameData.zbSet.KLine) + 100,  // K线条数
            to: 0,           //	// 结束时间戳（0表示忽略该参数；格式同from）
            reserve: 100,
        }

        let items;

        let le = parseInt(Math.random() * GameData.stockList.length + '');
        items = GameData.stockList[le].split('|');
        data.code = items[0];
        let start = items[2], end = items[3], sc;
        if (end == 0) {
            if (GameData.zbSet.ZLine == '周线') {
                sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000 * 7;
            } else {
                sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000;
            }
        } else {
            let year = end.slice(0, 4);
            let month = end.slice(4, 6);
            let day = end.slice(6);

            let d = new Date(year + '-' + month + '-' + day);
            if (GameData.zbSet.ZLine == '周线') {
                sc = d.getTime() - data.total * 24 * 60 * 60 * 1000 * 7;
            }
            else {
                sc = d.getTime() - data.total * 24 * 60 * 60 * 1000;
            }
        }

        if (parseInt(start) < 20100101) {
            start = '20100101';
        }

        let year = start.slice(0, 4);
        let month = start.slice(4, 6);
        let day = start.slice(6);


        let d = new Date(year + '-' + month + '-' + day);

        let t;

        if (GameData.zbSet.ZLine == '周线') {
            t = d.getTime() + 24 * 60 * 60 * 1000 * 100 * 7 * 2;
        }
        else {
            t = d.getTime() + 24 * 60 * 60 * 1000 * 100 * 2;
        }

        if (sc < t && GameData.zbSet.year == '随机' && GameData.zbSet.search == '随机选股') {
            this.getGPDXByRandom();
            return;
        }

        let s = Math.random() * (sc - t) + t;

        let f = new Date(s);

        {
            let ye = f.getFullYear();
            let mon = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);

            let da = f.getDate() >= 10 ? f.getDate() : '0' + (f.getDate());

            data.from = ye + '' + mon + '' + da;
        }

        GameCfg.data[0].data = [];
        GameCfg.data[0].name = items[1];
        GameCfg.data[0].code = items[0];
        GameCfg.data[0].circulate = items[4];
        console.log('给的数据:' + JSON.stringify(data));
        GameCfg.enterGameConf = data;

    },


    //随机QH一只期货
    getQHQHByRandom(cb?) {

        let data = {
            ktype: GameCfg.enterGameConf.ktype,
            kstyle: pb.KStyle.Random,
            code: null,
            from: null,
            total: parseInt(GameData.qhSet.KLine) + 100,
            to: 0,
            reserve: 100,
        };

        let rom = parseInt(Math.random() * GameData.contractlist.length + '');

        let items = GameData.contractlist[rom].split('|');

        data.code = items[0];

        let tim = this.QHGetTimeByCodeName(data.code)

        data.ktype = pb.KType.Day;

        let start = tim.start, end = tim.end, sc;

        if (end == 0) {
            sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000;
        } else {
            let year = end.slice(0, 4);
            let month = end.slice(4, 6);
            let day = end.slice(6);

            let d = new Date(year + '-' + month + '-' + day);
            sc = d.getTime() - data.total * 24 * 60 * 60 * 1000;
        }
        let f;
        if (start == 0) {
            f = new Date(sc);
        } else {
            let year = start.slice(0, 4);
            let month = start.slice(4, 6);
            let day = start.slice(6);

            let d = new Date(year + '-' + month + '-' + day);
            ///console.log(d);
            let t = d.getTime() + 100 * 24 * 60 * 60 * 1000;

            let s = Math.random() * (sc - t) + t;

            f = new Date(s);
        }

        if (sc <= f.getTime()) {
            this.getQHQHByRandom(cb);
            return;
        }

        {
            let ye = f.getFullYear();
            let mon = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);

            let da = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();

            data.from = ye + '' + mon + '' + da;
        }
        GameCfg.enterGameConf = data;

        GameCfg.data[0].code = items[0];
        GameCfg.data[0].data = [];
        GameCfg.data[0].name = items[1] + '  ' + items[2] + items[3];
        console.log(JSON.stringify(data));

    },

    /**
* 根据期货的名字获取股票的范围
*/
    QHGetTimeByCodeName(str) {
        let index = -1;

        for (let i = 0; i < GameData.contractlist.length; i++) {
            if (GameData.contractlist[i].indexOf(str) != -1) {
                index = i;
                break;
            }
        }

        if (index != -1) {

            let data = {
                start: null,
                end: null,
            };

            let items = GameData.contractlist[index].split('|');

            if (TimeUtils.getTimestamp(items[5]) > parseInt(items[7])) {
                data.start = items[5];
            } else {
                let now = new Date(parseInt(items[7]) * 1000);
                let y = now.getFullYear();
                let m = now.getMonth() + 1;
                let d = now.getDate();
                data.start = y + "" + (m < 10 ? "0" + m : m) + "" + (d < 10 ? "0" + d : d);
            }

            if (TimeUtils.getTimestamp(items[6]) < parseInt(items[8])) {
                data.end = items[6];
            } else {
                let now = new Date(parseInt(items[8]) * 1000);
                let y = now.getFullYear();
                let m = now.getMonth() + 1;
                let d = now.getDate();
                data.end = y + "" + (m < 10 ? "0" + m : m) + "" + (d < 10 ? "0" + d : d);
            }

            return data;
        }
    },


    getTimeByItems(time) {
        let arr = [];
        for (let i = 0; i < this.stockList.length; i++) {

            let items = this.stockList[i].split('|');

            let start = items[2];
            let end;
            if (items[3] == 0) {
                // data.end = ComUtils.getCurYearMonthDay();
                let f = new Date();
                let y = f.getFullYear() + '';
                let m = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
                let d = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();
                let sc = TimeUtils.GetPreMonthDay(y + '-' + m + '-' + d, 2);

                y = sc.y;
                m = sc.m >= 10 ? sc.m : '0' + sc.m;
                d = sc.d >= 10 ? sc.d : '0' + sc.d;
                end = y + '' + m + '' + d;
            } else {
                end = items[3];
            }
            if ((parseInt(time) - 100) > parseInt(start) && (parseInt(time) + 100) < parseInt(end)) {
                arr.push(items);
            }

        }

        let index = parseInt(Math.random() * arr.length + '');
        return arr[index];

    }



}
