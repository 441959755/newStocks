import FitUtils from "../utils/FitUtils";
import PopupManager from "../utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallControl extends cc.Component {

    onLoad() {
        FitUtils.resetSize(this.node);

        PopupManager.init();
    }


    start() {

    }

    // update (dt) {}
}
