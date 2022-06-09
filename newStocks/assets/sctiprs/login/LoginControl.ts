import LLWConfing from "../../common/config/LLWConfing";
import GameData from "../GameData";
import AudioUtils from "../utils/AudioUtils";
import ConfUtils from "../utils/ConfUtils";
import FitUtils from "../utils/FitUtils";
import LoadUtils from "../utils/LoadUtils";
import LocalStorageUtils from "../utils/LocalStorageUtils";
import PopupManager from "../utils/PopupManager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginControl extends cc.Component {

    @property(cc.Node)
    loginAD: cc.Node = null;

    @property(cc.Node)
    loginLayer: cc.Node = null;

    protected onLoad(): void {

        FitUtils.resetSize(this.node);

        PopupManager.init();

        AudioUtils.getAudioVolume();
        AudioUtils.loadAudios('audio');

        this.loginAD.active = false;
        this.loginLayer.active = false;

        this.loadConf();

        this.initConfData();
    }

    protected start(): void {
        cc.macro.ENABLE_MULTI_TOUCH = false;

        cc.Button.prototype._onTouchEnded = function (t) {
            if (this.interactable && this.enabledInHierarchy) {
                AudioUtils.playEffect('click', false);
                if (this._pressed) {
                    cc.Component.EventHandler.emitEvents(this.clickEvents, t);
                    this.node.emit('click', true);
                }
                this._pressed = !1;
                this._updateState();
                t.stopPropagation();
            }
        }
    }

    loadConf() {

        //切换账号
        if (GameData.appConf && GameData.gameConf && GameData.adConf && GameData.stockList && GameData.contractlist) {
            this.loginLayer.active = true;
            return;
        }

        //
        let url = LLWConfing.LoginUrl + '/conf/';
        let url1 = LLWConfing.LoginUrl + '/';

        Promise.all([LoadUtils.loadRemote(url1 + 'app.conf'), LoadUtils.loadRemote(url + 'game.conf'), LoadUtils.loadRemote(url + 'ad.conf'), LoadUtils.loadRemote(url + 'stocklist.dat'), LoadUtils.loadRemote(url + 'contractlist.dat')])
            .then((results) => {

                LocalStorageUtils.setItem('APPCONF', results[0]._nativeAsset);
                GameData.appConf = JSON.parse(results[0]._nativeAsset);
                console.log(GameData.appConf);

                LocalStorageUtils.setItem('GAMECONF', results[1]._nativeAsset);
                GameData.gameConf = JSON.parse(results[1]._nativeAsset);
                console.log(GameData.gameConf);

                LocalStorageUtils.setItem('ADCONF', results[2]._nativeAsset);
                GameData.adConf = JSON.parse(results[2]._nativeAsset);
                console.log(GameData.adConf);

                LocalStorageUtils.setItem('STOCKLIST', results[3]._nativeAsset);
                GameData.stockList = (results[3]._nativeAsset).split('\n');
                console.log(GameData.stockList);

                LocalStorageUtils.setItem('CONTRACTLIST', results[4]._nativeAsset);
                GameData.contractlist = (results[4]._nativeAsset).split('\n');
                console.log(GameData.contractlist);

                this.loginAD.active = true;

            }, function (reason) {
                // console.log(reason);
                GameData.appConf = JSON.parse(LocalStorageUtils.getItem('APPCONF'));
                GameData.gameConf = JSON.parse(LocalStorageUtils.getItem('GAMECONF'));
                GameData.adConf = JSON.parse(LocalStorageUtils.getItem('ADCONF'));
                GameData.stockList = JSON.parse(LocalStorageUtils.getItem('STOCKLIST'));
                GameData.contractlist = JSON.parse(LocalStorageUtils.getItem('CONTRACTLIST'));

                this.loginAD.active = true;

            });
        setTimeout(() => {
            this.loginLayer.active = true;
        }, 1500);

    }

    initConfData() {

        GameData.account = LocalStorageUtils.getItem('ACCOUNT') || '';

        GameData.password = localStorage.getItem('PASSWORD') || '';

        GameData.smSet = ConfUtils.getConf('SMSET');

        GameData.jjpkSet = ConfUtils.getConf('JJPKSET');

        GameData.dxSet = ConfUtils.getConf('DXSET');

        GameData.qhSet = ConfUtils.getConf('QHSET');

        GameData.tjdSet = ConfUtils.getConf("TJDSET");

        GameData.fsSet = ConfUtils.getConf("FSSET");

    }


}
