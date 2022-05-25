import { pb } from "../proto/proto";
import LocalStorageUtils from "./utils/LocalStorageUtils";

export default {

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


    appConf: null,
    adConf: null,

    gameConf: null,

    stocklist: null,
    contractlist: null,

    userID: null,   //uid
    token: null,    //token
    gender: null,   //性别
    userName: null,
    headImg: null,

    properties: null,//属性
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

    gamedata: null,

    get vipStatus() {
        return (new Date().getTime() / 1000 > this.properties[pb.GamePropertyId.VipExpiration]);
    },

    smSet: null,

    jjpkSet: null,

    dxSet: null,

    qhSet: null,

    tjdSet: null,

    fsSet: null,

    zbSet: null,

}
