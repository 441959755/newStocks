
export default {

    getItem(key) {
        return cc.sys.localStorage.getItem(key);
    },

    setItem(key, val) {
        cc.sys.localStorage.setItem(key, val);
    },

    removeItem(key) {
        cc.sys.localStorage.removeItem(key);
    }

}