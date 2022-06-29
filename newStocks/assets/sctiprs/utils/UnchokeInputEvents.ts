

const { ccclass, property } = cc._decorator;

@ccclass
//@menu("i18n:MAIN_MENU.component.ui/Unchoke Input Events")
export default class UnchokeInputEvents extends cc.Component {
    /** 是否吞噬事件 */
    private _isSwallow: boolean = false;

    onLoad() {
        this.node.on('touchstart', (event) => {
            // if (this.node.name == 'touch1') {
            //     this.node.parent.getChildByName('content').active = false;
            // } else {
            this.node.parent.active = false;
            //  }
        }, this);
    }

    onEnable() {
        if (this.node._touchListener) {
            this.node._touchListener.setSwallowTouches(this._isSwallow);
        }
    }

    onDestroy() {
        this.node.off('touchstart');
    }
}


