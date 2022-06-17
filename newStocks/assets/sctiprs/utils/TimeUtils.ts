import { pb } from "../../proto/proto";
import GameCfg from "../GameCfg";
import GameData from "../GameData";


export default {

    interval: null,

    vipTimeCB: [],

    getVipTime(cb) {

        let obj = {
            day: null,
            hours: null,
            minute: null,
        }

        this.vipTimeCB.push(cb);

        let self = this;
        let call = function () {
            let dis = GameData.properties[pb.GamePropertyId.VipExpiration] - new Date().getTime() / 1000;
            obj.day = parseInt(dis / (60 * 60 * 24) + '');
            dis = dis - obj.day * (60 * 60 * 24);
            obj.hours = parseInt(dis / (60 * 60) + '');

            dis = dis - obj.hours * (60 * 60);
            obj.minute = parseInt(dis / 60 + '');

            self.vipTimeCB.forEach(el => {
                el(obj);
            })
        }

        call();

        if (!this.interval) {
            this.interval = setInterval(() => {
                call();
            }, 60 * 1000)
        }
    },

    /**
     * 
     * @param time 
     * @returns 
     */
    fromatTime1(time) {

        time = time + '';
        time = time.replace(/-/g, '');
        let y, m, d;
        if (time.length < 10) {
            y = time.slice(0, 4);
            m = time.slice(4, 6);
            d = time.slice(6);

        }
        else {
            let f = new Date(time * 1000);
            y = f.getFullYear();
            m = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
            d = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();

        }

        time = y + '' + m + '' + d;
        return time;
    },


    /**
     * 
     * @param time 
     * @returns 
     */
    formatTime(time) {
        time = (time + '').replace(/-/g, '');
        let year, month, day;
        if (time.length < 10) {
            year = time.slice(0, 4);
            month = time.slice(4, 6);
            day = time.slice(6);
            time = year + '/' + month + '/' + day;
        }
        else if (time.length >= 10) {
            let f = new Date(parseInt(time) * 1000);
            year = f.getFullYear();
            month = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
            day = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();

            if (GameCfg.selectZline == pb.KType.Min5) {
                let h = f.getHours() >= 10 ? f.getHours() : '0' + f.getHours();
                let m = f.getMinutes() >= 10 ? f.getMinutes() : '0' + f.getMinutes();
                time = year + '/' + month + '/' + day + ' ' + h + ':' + m;
            }
            time = year + '/' + month + '/' + day;

        }
        return time;
    },



    /**
     * 
     * @param time 
     * @returns 
     */
    getYMDHMS(time) {
        time = new Date(time);
        let year = time.getFullYear(),
            month = time.getMonth() + 1,
            date = time.getDate(),
            hours = time.getHours(),
            minute = time.getMinutes(),
            second = time.getSeconds();

        if (month < 10) { month = '0' + month }

        if (date < 10) { date = '0' + date }

        if (hours < 10) { hours = '0' + hours }

        if (minute < 10) { minute = '0' + minute }

        if (second < 10) { second = '0' + second }
        return {
            year: year,
            month: month,
            date: date,
            hours: hours,
            minute: minute,
            second: second
        }
    },

    /**
     * 
     * @param time 
     * @returns 时间戳  精确到秒
     */
    getTimestamp(time) {
        if (!time) { return 0 }
        time = (time + '').replace(/-/g, '');

        if (time.length == 10) {
            return time;
        }

        let y = time.slice(0, 4);
        let m = time.slice(4, 6);
        let d = time.slice(6);

        let t = new Date(y + '-' + m + '-' + d);
        return t.getTime() / 1000;

    },

    /**
     * 
     * @param time 
     * @returns 时：分：秒  
     */
    getSFMTamp(time) {
        time = new Date(parseInt(time) * 1000);
        let h, m, s;
        h = time.getHours() >= 10 ? time.getHours() : '0' + time.getHours();
        m = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes();
        s = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds();

        return h + ':' + m + ':' + s;
    },


    /**
     * 
     * @param time1 时间戳
     * @returns //时分
     */
    getSFMTamp1(time1) {
        let time = new Date(parseInt(time1) * 1000);
        let hours, minute;
        hours = time.getHours();
        minute = time.getMinutes();

        if (hours < 10) { hours = '0' + hours }
        if (minute < 10) { minute = '0' + minute }

        return hours + ':' + minute;

    },

    /**
     * 
     * @param str 
     * @returns 是否当天
     */
    isToday(str) {

        if (new Date(str).toDateString() == new Date().toDateString()) {
            return true;
        }
        return false;
    },

    /**
     * 
     * @returns 当前年月日
     */
    getCurYearMonthDay() {

        let f = new Date();
        let year = f.getFullYear();
        let month = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
        let day = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();

        return year + '' + month + '' + day;
    }









}