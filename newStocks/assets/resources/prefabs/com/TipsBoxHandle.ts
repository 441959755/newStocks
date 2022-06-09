
const { ccclass, property } = cc._decorator;

@ccclass
export default class TipsBoxHandle extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    btnAffirm: cc.Node = null;

    @property(cc.Node)
    btnCancel: cc.Node = null;

    _call = null;

    onShow(text, call?) {
        this.label.string = text;
        this._call = call;
        this.btnCancel.active = this._call;
    }


    onClick(event, data) {
        let name = event.target.name;
        if (name == 'qdBtn') {
            this.node.active = false;
            this._call && (this._call());
        } else if (name == 'qxBtn') {
            this.node.active = false;
        }
    }

    onDestroy() {
        this.node.off('contentText');
    }
}
