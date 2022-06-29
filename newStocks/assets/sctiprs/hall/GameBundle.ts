import LoadUtils from "../utils/LoadUtils";

export default {

    _bundle: null,

    url: 'game1',

    opt: null,

    nodes: {},

    index: '30',

    /**
   * 
   * @param cb 
   */
    bundleGame(cb?) {

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
    loadPre(url, cb?, index?, parent?) {
        let callback = () => {
            this._bundle.load(url, cc.Prefab, (err, pre) => {
                if (!err) {

                    if (!parent) {
                        parent = cc.find('Canvas');
                    }

                    parent.addChild(this.nodes[url] = cc.instantiate(pre), this.index + index);
                    this.nodes[url].active = true;
                    cb && (cb(this.nodes[url]))
                }
            })
        }

        if (!this._bundle) {
            this.bundleGame(callback);
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