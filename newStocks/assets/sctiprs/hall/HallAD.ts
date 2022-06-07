import GameData from "../GameData";
import LoadUtils from "../utils/LoadUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallAD extends cc.Component {

    @property(cc.Sprite)
    imgAd: cc.Sprite = null;

    id = null;

    version = 0;

    start() {

        if (!GameData.adConf) {
            return;
        }

        this.id = GameData.adConf.main[0].id;

        LoadUtils.loadRemote(GameData.adConf.main[0].img).then((texture) => {
            this.imgAd.spriteFrame = new cc.SpriteFrame(texture);
        })
    }

    onBtnClick(event, curdata) {
        let name = event.target.name;

        if (name == 'imgAd') {
            let url = '';
            GameData.adConf.ad.forEach(el => {
                if (el.id == this.id) {
                    url = el.url;
                }
            });
            cc.sys.openURL(url);
        }
    }

}
