

import GameData from "../../../sctiprs/GameData";
import OtherBundle from "../../../sctiprs/hall/OtherBundle";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import PopupManager from "../../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PLayerInfoHandle extends cc.Component {

    @property(cc.EditBox)
    editBox: cc.EditBox = null;

    @property(cc.Node)
    tckNode: cc.Node = null;

    @property([cc.Node])
    layers: cc.Node[] = [];

    @property(cc.Sprite)
    headImg: cc.Sprite = null;

    @property(cc.Node)
    otherNode: cc.Node = null;

    @property(cc.Toggle)
    toggle1: cc.Toggle = null;

    @property(cc.Sprite)
    vipImg: cc.Sprite = null;

    onLoad() {
        GlobalEvent.on(EventCfg.HEADIMGCHANGE, this.setUserInfo.bind(this), this);

        GlobalEvent.on(EventCfg.VIPCHANGE, this.setUserInfo.bind(this), this);

        GlobalEvent.on('openDefHeadLayer', this.openDefHeadLayer.bind(this), this);
    }

    start() {
        this.setUserInfo();
    }

    setUserInfo() {

        this.headImg.spriteFrame = GameData.headImg || GameData.imgs['0'];

        this.vipImg.enabled = GameData.vipStatus;
    }

    onDestroy() {
        GlobalEvent.off(EventCfg.HEADIMGCHANGE);
        GlobalEvent.off(EventCfg.VIPCHANGE);
        GlobalEvent.off('openDefHeadLayer');
    }

    onEnable() {
        this.layers.forEach((el, index) => {
            if (index == 0) {
                el.active = true;
            } else {
                el.active = false;
            }
        })
        this.toggle1.isChecked = true;
    }

    onToggleClick(event, data) {
        let ind = parseInt(data);
        this.layers.forEach((el, index) => {
            if (index == ind) {
                el.active = true;
            } else {
                el.active = false;
            }
        })
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'closeBtn') {
            this.node.active = false;
        }
    }

    openDefHeadLayer() {
        OtherBundle.loadPre('playeInfo/defHead');
    }
}
