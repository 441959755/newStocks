import { pb } from "../../proto/proto";
import GameCfg from "../GameCfg";
import GameData from "../GameData";

export default {
    /**
     * 
     * @param number 
     * @returns 保留2位小数
     */
    changeTwoDecimal(number) {
        if (!number) { return 0.00 }
        return number.toFixed(2);
    },


    /**
     * 
     * @param number 
     * @returns 改变单位
     */
    numberConvertUnit(number) {
        let str;
        str = parseInt(number);
        if (str >= 100000000) {
            str = (this.changeTwoDecimal(str / 100000000) + '') + '亿';
        }
        else if (str >= 10000) {
            str = (this.changeTwoDecimal(str / 10000) + '') + '万';
        }
        return str;
    },

    /**
     * 
     * @param fame 
     * @returns 
     */
    getChenghaoByFame(fame) {
        if (fame <= 99) {
            return '股市小白';
        }
        else if (fame <= 249) {
            return '股市新手';
        }
        else if (fame <= 499) {
            return '股市菜鸡';
        }
        else if (fame <= 999) {
            return '初级股民';
        }
        else if (fame <= 1999) {
            return '中级股民';
        }
        else if (fame <= 2999) {
            return '高级股民';
        }
        else if (fame <= 3999) {
            return '股市牛人';
        }
        else if (fame <= 4999) {
            return '股市大神';
        }
        else if (fame >= 5000) {
            return '股市至尊';
        }
    },

    /**
     * 获取均线
     * @returns 
     */
    getJJJunXian() {

        let arr = [];
        let smArr = GameData.jjpkSet;

        if (smArr.isMA1 && arr.indexOf(smArr.MA1) == -1) {
            arr.push(smArr.MA1);
        }
        else {
            arr.push(0);
        }


        if (smArr.isMA2 && arr.indexOf(smArr.MA2) == -1) {
            arr.push(smArr.MA2);
        }
        else {
            arr.push(0);
        }

        if (smArr.isMA3 && arr.indexOf(smArr.MA3) == -1) {
            arr.push(smArr.MA3);
        }
        else {
            arr.push(0);
        }

        if (smArr.isMA4 && arr.indexOf(smArr.MA4) == -1) {
            arr.push(smArr.MA4);
        }
        else {
            arr.push(0);
        }

        if (smArr.isMA5 && arr.indexOf(smArr.MA5) == -1) {
            arr.push(smArr.MA5);
        }
        else {
            arr.push(0);
        }

        if (smArr.isMA6 && arr.indexOf(smArr.MA6) == -1) {
            arr.push(smArr.MA6);
        }
        else {
            arr.push(0);
        }

        arr = Array.from(new Set(arr));
        return arr;
    },

    onCurWXIsEnterGame(type?) {
        let data = {
            status: 0,
            count: 0,
        }
        let free, adCount, todayCount;
        if (!type) { type = GameCfg.GameType }

        if (type == pb.GameType.ShuangMang) {
            data.status = 1;
            data.count = 1;
            return data;
        }
        else if (type == pb.GameType.QiHuo || type == pb.GameType.DingXiang) {
            free = 3;
            adCount = 0;
            todayCount = GameData.todayGameCount[type];
        }

        let curCount = free - todayCount;
        if (curCount > 0) {
            data.status = 1;
        }

        else {
            curCount = adCount + curCount;
            if (curCount > 0) {
                data.status = 2;
            }
            else {
                data.status = 3;
            }
        }
        data.count = curCount;
        return data;
    }


}