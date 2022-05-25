import FitUtils from "../utils/FitUtils";
import PopupManager from "../utils/PopupManager";
import SchoolBundle from "./SchoolBundle";

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
        SchoolBundle.removeBundle();
    }

    // update (dt) {}
}
