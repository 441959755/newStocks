

const { ccclass, property } = cc._decorator;

@ccclass
export default class TipsText extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    callback = null;

    onShow(str) {
        if (!this.callback) {
            this.label.string = str;
            this.callback = setTimeout(() => {
                cc.tween(this.node)
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this.node.active = false;
                    })
                    .start()
            }, 1500)
        }

    }

    protected onDisable(): void {
        this.node.opacity = 255;
        clearTimeout(this.callback);
        this.callback = null;
    }
}
