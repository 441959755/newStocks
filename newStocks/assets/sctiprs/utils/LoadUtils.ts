

export default {

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

    }

}