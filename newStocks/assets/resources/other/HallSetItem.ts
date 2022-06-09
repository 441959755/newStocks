import GlobalEvent from "../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallSetItem extends cc.Component {


    onItemBtnClick(event, name) {
        let str = this.node.getComponent(cc.Label).string;
        GlobalEvent.emit('ItemValue', str);
    }
}
