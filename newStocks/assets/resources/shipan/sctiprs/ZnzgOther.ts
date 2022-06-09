

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgOther extends cc.Component {


    start() {

    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'blackNode') {
            this.node.active = false;
        }
    }

    onToggleClick(event, data) {

    }
}
