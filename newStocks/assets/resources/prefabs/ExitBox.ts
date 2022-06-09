
import GameData from "../../sctiprs/GameData";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
import LoadUtils from "../../sctiprs/utils/LoadUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ExitBox extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;

    id = null;

    version = 0;

    start() {
        this.id = GameData.adConf.exit[0].id;
        let version = cc.sys.localStorage.getItem('LAUNCHAD');
        if (!version) {
            cc.sys.localStorage.setItem('LAUNCHAD', GameData.adConf.launch[0].version);
            version = GameData.adConf.launch[0].version;
        }
        this.version = version;

        LoadUtils.loadRemote(GameData.adConf.exit[0].img).then((sp) => {
            this.img.spriteFrame = new cc.SpriteFrame(sp);
        })
    }

    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'imgAD') {
            let url = '';
            GameData.adConf.ad.forEach(el => {
                if (el.id == this.id) {
                    url = el.url;
                }
            });
            cc.sys.openURL(url);
        }

        else if (name == 'sys_tck_qd') {
            cc.game.end();
        }

        else if (name == 'sys_tck_qx') {
            this.node.active = false;
        }
    }
}
