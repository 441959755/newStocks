

import GameData from "../GameData";
import LoadUtils from "../utils/LoadUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginAD extends cc.Component {

    @property(cc.Sprite)
    bgSprite: cc.Sprite = null;

    @property(cc.Label)
    label: cc.Label = null;

    callback = null;

    count = 5;


    start() {

    }

    protected onEnable(): void {

        if (GameData.adConf) {

            LoadUtils.loadRemote(GameData.adConf.launch[0].img).then((texture) => {
                this.bgSprite.spriteFrame = new cc.SpriteFrame(texture);
                this.label.string = '跳过 5';
                this.count = 5;
                this.callback = setInterval(() => {
                    if (this.count < 0) {
                        this.node.active = false;
                        return;
                    }
                    else {
                        this.label.string = '跳过 ' + this.count;
                    }
                    this.count--;

                }, 1000);
            })

        }
    }


    protected onDisable(): void {
        clearInterval(this.callback);
        this.callback = null;
    }

    onBtnClick(event, customData) {
        let name = event.target.name;
        if (name == 'loginAD') {
            if (this.count >= 0) {
                // let url = '';
                // GameData.adConf.ad.forEach(el => {
                //     if(el.id==GameData.adConf.l)
                // });
                cc.sys.openURL(GameData.adConf.launch[0].url);

            }
            else {

            }

        }
    }


}
