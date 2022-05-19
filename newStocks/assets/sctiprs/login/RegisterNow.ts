
import LLWConfing from "../../common/config/LLWConfing";
import HttpUtils from "../../common/net/HttpUtils";
import { pb } from "../../proto/proto";
import EventCfg from "../Utils/EventCfg";
import GlobalEvent from "../Utils/GlobalEvent";
import PopupManager from "../Utils/PopupManager";
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

    cb = null;

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
        let name = event.target.name;
        if (name == 'closeBtn') {
            this.node.active = false;
            GlobalEvent.emit(EventCfg.SHOWLOGIN);
        }
        else if (name == 'send') {
            this.getAuthCode();
        }

        else if (name == 'labelproto') {
            //用户协议

            PopupManager.openNode(cc.find('Canvas'), null, 'prefabs/prococol', 10, (node) => {
                let handle = node.getComponent('Prococol');
                handle && (handle.onShow('用户协议', LLWConfing.LoginUrl + 'user/decripation1000.html'));
            })
        }

        else if (name == 'login_zc') {
            if (!RegUtils.isPhoneNumber(parseInt(this.phone.string))) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的手机号');
                return;
            }
            let pw = this.password.string;
            if (!pw || pw.length <= 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '密码不能为空');
                return;
            }

            if (this.authcode.string.length <= 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '验证码不能为空');
                return;
            }

            if (!this.toggle.isChecked) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '用户协议请知晓！');
                return;
            }

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            let data = {
                account: this.phone.string,
                type: pb.LoginType.MobilePhoneId,
                pwd: this.password.string,
                smsCode: this.authcode.string,
                form: LLWConfing.AppFrom,
            }

            let url = LLWConfing.LoginUrl + '/r';
            let message = pb.CmdRegistry.create(data);
            let buff = pb.CmdRegistry.encode(message).finish();
            HttpUtils.sendRequest({ data: buff, url: url, method: 'POST' }).then((res) => {
                let decode = pb.CmdLoginReply.decode(new Uint8Array(res));
                if (decode.err.err) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, decode.err.err);
                    return;
                }
                this.node.active = false;
                GlobalEvent.emit(EventCfg.SHOWLOGIN);
            })
        }
    }

    getAuthCode() {

        if (this.cb) { return }

        let pNum = this.phone.string;
        if (!RegUtils.isPhoneNumber(pNum)) {
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的手机号');
            return;
        }

        let data = {
            account: pNum,
        }

        let message = pb.CmdGetSms.create(data);
        let buff = pb.CmdGetSms.encode(message).finish();

        let url = LLWConfing.LoginUrl + '/sms';

        HttpUtils.sendRequest({ data: buff, url: url, method: 'POST' }).then((res) => {

        }, (ret) => {
            console.log(ret);
        })

        let count = 60;

        this.cb = setInterval(() => {
            count--;
            this.authcodeLabel.string = '重新发送:' + count;
            if (count <= 0) {
                this.cb && (clearInterval(this.cb));
                this.cb = null;
                this.authcodeLabel.string = '获取验证码';
            }
        }, 1000);

    }


    protected onDisable(): void {
        this.cb && (clearInterval(this.cb));
        this.cb = null;
    }


    // update (dt) {}
}
