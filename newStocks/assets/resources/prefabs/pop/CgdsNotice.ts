
import LLWConfing from "../../../common/config/LLWConfing";
import GameData from "../../../sctiprs/GameData";
import ActionUtils from "../../../sctiprs/utils/ActionUtils";
import LoadUtils from "../../../sctiprs/utils/LoadUtils";
import PopupManager from "../../../sctiprs/utils/PopupManager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class CgdsNotice extends cc.Component {

    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Sprite)
    btn: cc.Sprite = null;

    @property(cc.Label)
    tips: cc.Label = null;

    bgSp: cc.SpriteFrame = null;

    btnSp: cc.SpriteFrame = null;


    protected start(): void {

        let bgurl = LLWConfing.LoginUrl + '/img/activity/cgds_bg.png';
        let btnUrl = LLWConfing.LoginUrl + '/img/activity/cgds_btn.png'
        //GlobalEvent.emit(EventCfg.SHOWLOADING);

        Promise.all([LoadUtils.loadRemote(bgurl), LoadUtils.loadRemote(btnUrl)]).then((res) => {
            this.bgSp = new cc.SpriteFrame(res[0]);
            this.btnSp = new cc.SpriteFrame(res[1]);
            this.onShow();
        }, () => {
            this.node.active = false;
        })
    }


    onShow() {
        this.bg.spriteFrame = this.bgSp;
        this.btn.spriteFrame = this.btnSp;
        this.tips.string = GameData.appConf.pop[2].text;
        // GlobalEvent.emit(EventCfg.HIDELOADING);
    }


    onBtnClick(event, curdata) {
        let name = event.target.name;
        switch (name) {
            case 'mask':
                this.node.active = false;
                break;
            case 'btnActive':
                this.node.active = false;
                // GlobalEvent.emit(EventCfg.OPENCGDS);
                PopupManager.openNode(this.node.parent, null, 'prefabs/sericeBox1', 11, (node) => {
                    let handle = node.getComponent('SericeBox1');
                    handle.onShow('下载完整版，参与比赛获取奖金');
                    ActionUtils.openNode(node);
                })
                break;
            default:
                break;
        }
    }

    onDisable() {
        // PopupManager.arrPop.remove(3);
    }


}
