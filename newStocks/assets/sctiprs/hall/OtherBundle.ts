import LoadUtils from "../utils/LoadUtils"

export default {

    _bundle: null,

    url: 'other',

    opt: null,

    nodes: {},

    index: 10,

    /**
     * 
     * @param cb 
     */
    bundleOther(cb?) {
        if (!this._bundle) {
            LoadUtils.loadBundle(this.url, this.opt).then((bundle) => {
                console.log('bundle other end');
                this._bundle = bundle;
                cb && (cb());
            })
        }
    },

    /**
     * 
     * @param url 
     * @param cb 
     */
    loadPre(url, cb?) {
        let callback = () => {
            this._bundle.load(url, cc.Prefab, (err, pre) => {
                if (!err) {
                    cc.find('Canvas').addChild(this.nodes[url] = cc.instantiate(pre), this.index);
                    this.nodes[url].active = true;
                    cb && (cb(this.nodes[url]))
                }
            })
        }

        if (!this._bundle) {
            this.bundleOther(callback);
        }

        else {
            callback();
        }
    },


    removeBundle() {
        this._bundle.releaseAll();
        cc.assetManager.removeBundle(this._bundle);
    }

}