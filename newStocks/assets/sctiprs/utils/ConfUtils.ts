import GameData from "../GameData";
import EventCfg from "./EventCfg";
import GlobalEvent from "./GlobalEvent";
import LocalStorageUtils from "./LocalStorageUtils"

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
    }

}
