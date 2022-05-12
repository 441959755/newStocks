import LLWConfing from "../../common/config/LLWConfing";
import { pb } from "../../proto/proto";
import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginLayer extends cc.Component {

    @property(cc.Node)
    leftNode: cc.Node = null;

    @property(cc.Node)
    login: cc.Node = null;

    @property(cc.Node)
    reset: cc.Node = null;

    @property(cc.Node)
    reg: cc.Node = null;

    @property(cc.Node)
    qq: cc.Node = null;

    @property(cc.Node)
    wechat: cc.Node = null;

    protected onLoad(): void {

        GlobalEvent.on(EventCfg.SHOWLOGIN, () => { this.login.active = true }, this);
        GlobalEvent.on(EventCfg.HIDELOGIN, () => { this.login.active = false }, this);

        GlobalEvent.on(EventCfg.SHOWRESET, () => { this.reset.active = true }, this);
        GlobalEvent.on(EventCfg.HIDERESET, () => { this.reset.active = false }, this);

        GlobalEvent.on(EventCfg.SHOWREG, () => { this.reg.active = true }, this);
        GlobalEvent.on(EventCfg.HIDEREG, () => { this.reg.active = false }, this);
    }

    protected onEnable(): void {
        this.qq.active = true;
        this.wechat.active = true;

        if (LLWConfing.AppFrom == pb.AppFrom.WeChatMinProgram) {
            this.qq.active = false;
        }
        else if (LLWConfing.AppFrom == pb.AppFrom.Website3th) {
            this.qq.active = false;
            this.wechat.active = false;
        }

        this.leftNode.active = true;
        this.login.active = true;
        this.reset.active = false;
        this.reg.active = false;
    }

    protected onDestroy(): void {
        GlobalEvent.off(EventCfg.SHOWLOGIN);
        GlobalEvent.off(EventCfg.HIDELOGIN);

        GlobalEvent.off(EventCfg.SHOWRESET);
        GlobalEvent.off(EventCfg.HIDERESET);

        GlobalEvent.off(EventCfg.SHOWREG);
        GlobalEvent.off(EventCfg.HIDEREG);
    }


}
