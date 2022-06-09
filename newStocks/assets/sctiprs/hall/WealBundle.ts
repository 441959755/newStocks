import EventCfg from "../utils/EventCfg"
import GlobalEvent from "../utils/GlobalEvent"
import LoadUtils from "../utils/LoadUtils";


export default {

    _bundle: null,

    url: 'weal',

    opt: null,

    nodes: {},

    /**
     * 
     */
    bundleWeal(cb?) {
        GlobalEvent.emit(EventCfg.SHOWLOADING);
        if (!this._bundle) {
            LoadUtils.loadBundle(this.url, this.opt).then((bundle) => {
                this._bundle = bundle;
                GlobalEvent.emit(EventCfg.HIDELOADING);
                cb && (cb());
            })
        }
    },

    /**
     * 
     * @param url 
     */
    loadPre(url, cb?) {

        let callback = () => {
            this._bundle.load(url, cc.Prefab, (err, pre) => {
                if (!err) {
                    cc.find('Canvas').addChild(this.nodes[url] = cc.instantiate(pre), 50);
                    cb && (cb(this.nodes[url]))
                }
            })
        }

        if (!this._bundle) {
            this.bundleWeal(callback);
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