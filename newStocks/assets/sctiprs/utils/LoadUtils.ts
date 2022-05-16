

export default {

    /**
     * 
     * @param url 
     * @returns 
     */
    loadRemote(url) {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(url, (err, text) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(text);
                }
            })
        })
    },

    /**
     * 
     * @param url 
     * @returns 
     */
    load(url) {
        return new Promise((resolve, reject) => {
            cc.resources.load(url, (err, prefab) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(prefab);
                }
            })
        })
    },

    /**
     * 
     * @param str 
     * @param cb 
     */
    loadScene(str, cb?) {
        cc.director.loadScene(str, cb);
    },

    /**
     * 
     * @param url 
     * @param opt 
     * @returns 
     */
    loadBundle(url, opt?) {
        return new Promise((resolve, reject) => {
            const options = opt;
            cc.assetManager.loadBundle(url, options, (err, bundle) => {
                if (!err) {
                    resolve(bundle);
                }
                else {
                    reject(err);
                }
            })
        })
    }



}