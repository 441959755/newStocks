import { pb } from "../../protos/proto";
import GameCfg from "../GameCfg";
import ActionUtils from "../utils/ActionUtils";
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


    /**
  * 设置
  */
    openSetLayer() {
        let str = '';

        switch (GameCfg.GameType) {
            case pb.GameType.ZhiBiao:
                str = 'xl/ZBSetLayer';
                break;
            case pb.GameType.ShuangMang:

            case pb.GameType.TiaoJianDan:
                str = 'xl/SMSetLayer';
                break;
            case pb.GameType.DingXiang:
                str = 'xl/DXSetLayer';
                break;
            case pb.GameType.QiHuo:
                str = 'xl/QHSetLayer';
                break;
        }

        this.loadPre(str, (node) => {
            ActionUtils.openNode(node);
        }, 10)
    },

    /**
  * 历史记录
  */
    openHisLayer() {
        let str = '';
        switch (GameCfg.GameType) {
            case pb.GameType.ZhiBiao:
                str = 'xl/ZBHistoryLayer';
                break;
            case pb.GameType.ShuangMang:
                str = 'xl/HistoryLayerSM';
                break;
            case pb.GameType.DingXiang:
                str = 'xl/DXHistoryLayer';
                break;
            case pb.GameType.QiHuo:
                str = 'xl/QHHistoryLayer';
                break;
            case pb.GameType.TiaoJianDan:
                str = 'tjd/TJDHistoryLayer';
                break;
        }

        this.loadPre(str, (node) => {
            ActionUtils.openNode(node);
        }, 10)
    },


    removeBundle() {
        this._bundle.releaseAll();
        cc.assetManager.removeBundle(this._bundle);
    }
}