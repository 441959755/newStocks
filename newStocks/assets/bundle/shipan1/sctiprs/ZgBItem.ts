import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZgBItem extends cc.Component {

    text = '';

    start() {

    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'b') {
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, this.text);
        }
    }
}
