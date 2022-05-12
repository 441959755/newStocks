

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingHandle extends cc.Component {

    @property(cc.Node)
    loading: cc.Node = null;

    @property(cc.Label)
    label: cc.Label = null;

    callback = null;

    protected onEnable(): void {

        this.loading.angle = 0;

        let arr = ['...', '..', '.'];

        let index = 0;

        this.callback = setInterval(() => {
            this.loading.angle -= 10;
            if (index > 2) {
                index = 0;
            }
            this.label.string = '拼命加载中' + arr[index++];
        }, 100);
    }

    protected onDisable(): void {
        clearInterval(this.callback);
        this.callback = null;
    }
}
