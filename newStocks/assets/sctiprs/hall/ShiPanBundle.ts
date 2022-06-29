import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import LoadUtils from "../utils/LoadUtils";


export default {

    _bundle: null,

    url: 'shipan',

    opt: null,

    nodes: {},

    /**
   * 
   */
    bundleShiPan(cb?) {
        if (!this._bundle) {
            LoadUtils.loadBundle(this.url, this.opt).then((bundle) => {
                console.log('bundle shipan end');
                this._bundle = bundle;
                cb && (cb());
            })
        }
    },


    /**
       * 
       * @param url 
       */
    loadPre(url, cb?, index?) {
        index = index ? index : 0;
        let callback = () => {
            this._bundle.load(url, cc.Prefab, (err, pre) => {
                if (!err) {
                    cc.find('Canvas').addChild(this.nodes[url] = cc.instantiate(pre), 30 + index);
                    cb && (cb(this.nodes[url]))
                }
            })
        }

        if (!this._bundle) {
            this.bundleShiPan(callback);
        }
        else {
            callback();
        }

    },

    /**
     * 
     */
    removeBundle() {
        this._bundle.releaseAll();

        cc.assetManager.removeBundle(this._bundle);
    }

}