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
        LocalStorageUtils.setItem('ACCOUNT', this.account.string);
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
        LocalStorageUtils.setItem('PASSWORD', this.password.string);
    },


    appConf: null,
    adConf: null,

    gameConf: null,

    stocklist: null,
    contractlist: null,

    userID: null,
    token: null,
}
