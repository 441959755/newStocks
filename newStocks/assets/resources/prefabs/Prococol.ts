

const { ccclass, property } = cc._decorator;

@ccclass
export default class Prococol extends cc.Component {


    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.WebView)
    webView: cc.WebView = null;


    onShow(title, url) {
        this.label.string = title;
        this.webView.url = url;
    }

    onBtnClick(event, curtomData) {
        let name = event.target.name;
        if (name == 'closeBtn') {
            this.node.active = false;
        }
    }
}
