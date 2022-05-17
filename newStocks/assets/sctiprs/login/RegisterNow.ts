import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import RegUtils from "../utils/RegUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RegisterNow extends cc.Component {

    @property(cc.EditBox)
    phone: cc.EditBox = null;

    @property(cc.EditBox)
    password: cc.EditBox = null;

    @property(cc.EditBox)
    authcode: cc.EditBox = null;

    @property(cc.Label)
    authcodeLabel: cc.Label = null;

    @property(cc.Toggle)
    toggle: cc.Toggle = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.phone.node.on('editing-did-ended', edit => {
            if (!RegUtils.isPhoneNumber(parseInt(edit.string))) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的手机的号码');
                this.phone.string = '';
                return;
            }
        }, this);

        this.password.node.on('editing-did-ended', edit => {
            let str = edit.string;
            if (!str || str.length <= 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '密码不能为空');
                this.password.string = '';
                return;
            }
        }, this);

        this.authcode.node.on('editing-did-ended', edit => {
            let str = edit.string;
            if (!str || str.length <= 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '验证码不能为空');
                this.authcode.string = '';
                return;
            }
        }, this);
    }

    protected onEnable(): void {
        this.authcodeLabel.string = '获取验证码';
        this.phone.string = '';
        this.authcode.string = '';
        this.password.string = '';
    }

    onBtnClick(event, curtomData) {
        let name = event.targte.name;
        if (name == 'closeBtn') {
            this.node.active = false;
            GlobalEvent.emit(EventCfg.SHOWLOGIN);
        }
        else if (name == 'send') {
            this.getAuthCode();
        }
    }

    getAuthCode() {

    }

    // update (dt) {}
}
