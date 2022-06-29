import GameData from "../GameData";
import FitUtils from "../utils/FitUtils";
import GlobalEvent from "../utils/GlobalEvent";
import PopupManager from "../utils/PopupManager";
import GameBundle from "./GameBundle";
import OtherBundle from "./OtherBundle";
import SchoolBundle from "./SchoolBundle";
import ShiPanBundle from "./ShiPanBundle";
import WealBundle from "./WealBundle";


const { ccclass, property } = cc._decorator;

@ccclass
export default class HallControl extends cc.Component {

    leaveRoomFlag = false;

    onLoad() {
        FitUtils.resetSize(this.node);

        PopupManager.init();

        GlobalEvent.on('LOADGAME', this.onLoadGame.bind(this), this);

        GlobalEvent.on('onShowGobroke', this.onShowGobroke.bind(this), this);
    }

    onLoadGame() {
        GameData.haoYouFangData && (GameData.haoYouFangData = null)
        ///  this.gameLayer.zIndex = 50;
        GameBundle.loadPre('gameLayer');
        this.leaveRoomFlag = true;
    }

    protected onDestroy(): void {
        OtherBundle.removeBundle();
        SchoolBundle.removeBundle();
        WealBundle.removeBundle();
        ShiPanBundle.removeBundle();
        GameBundle.removeBundle();
    }

    onShowGobroke() {
        PopupManager.openNode(this.node, null, 'Prefabs/pop/gobrokeBox', 48, null);
    }

}
