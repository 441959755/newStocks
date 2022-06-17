import FitUtils from "../utils/FitUtils";
import PopupManager from "../utils/PopupManager";
import GameBundle from "./GameBundle";
import OtherBundle from "./OtherBundle";
import SchoolBundle from "./SchoolBundle";
import ShiPanBundle from "./ShiPanBundle";
import WealBundle from "./WealBundle";


const { ccclass, property } = cc._decorator;

@ccclass
export default class HallControl extends cc.Component {

    onLoad() {
        FitUtils.resetSize(this.node);

        PopupManager.init();

    }


    start() {

    }


    protected onDestroy(): void {
        OtherBundle.removeBundle();
        SchoolBundle.removeBundle();
        WealBundle.removeBundle();
        ShiPanBundle.removeBundle();
        GameBundle.removeBundle();
    }

}
