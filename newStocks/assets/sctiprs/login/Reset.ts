import LLWConfing from "../../common/config/LLWConfing";
import HttpUtils from "../../common/net/HttpUtils";
import { pb } from "../../proto/proto";
import GameData from "../GameData";
import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import RegUtils from "../utils/RegUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Reset extends cc.Component {

    @property(cc.EditBox)
    phone: cc.EditBox = null;

    @property(cc.EditBox)
    password: cc.EditBox = null;

    @property(cc.EditBox)
    authCode: cc.EditBox = null;

    @property(cc.Label)
    authcodeLabel: cc.Label = null;

    cb = null;

    timecount = 0;

    onload() {
        this.phone.node.on('editing-did-ended', edit => {
            let str = parseInt(edit.string);
            if (!RegUtils.isPhoneNumber(str)) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的手机号码。');
                return;
            }
        }, this);

        this.password.node.on('editing-did-ended', edit => {
            if (!edit.string || edit.string.length <= 6) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '密码长度不能小于6位');
                return;
            }
        }, this);

        this.authCode.node.on('editing-did-ended', edit => {
            if (!edit.string || edit.string.length <= 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '验证码不能为空');
                return;
            }
        }, this);
    }

    protected onEnable(): void {
        this.authcodeLabel.string = '获取验证码';
        this.phone.string = '';
        this.password.string = '';
        this.authCode.string = '';
    }

    onBtnClick(event, curtomData) {
        let name = event.target.name;


        if (name == 'closeBtn') {
            this.node.active = false;
            GlobalEvent.emit(EventCfg.SHOWLOGIN);
        }

        else if (name == 'send') {
            if (this.timecount > 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '验证码已发送');
                return;
            }
            this.sendAuthCode();
        }

        else if (name == 'login_qd') {
            if (!RegUtils.isPhoneNumber(parseInt(this.phone.string))) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '手机号码输入有误，请重新输入');
                return;
            }

            if (!this.password.string) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '密码能不能为空');
                return;
            }

            if (!this.authCode.string) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '验证码不能为空');
                return;
            }

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            let data = {
                account: this.phone.string,
                pwd: this.password.string,
                captcha: this.authCode.string,
            }

            let url = LLWConfing.LoginUrl + '/p';
            let message = pb.CmdResetPwd.create(data);
            let buff = pb.CmdResetPwd.encode(message).finish();

            HttpUtils.sendRequest({ data: buff, url: url, method: 'POST' }).then((res) => {
                let decode = pb.ErrorInfo.decode(new Uint8Array(res));
                if (decode.err) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, decode.err);
                    return;
                }

                GameData.account = this.phone.string;
                GameData.password = this.password.string;
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '修改成功！');
                this.node.active = false;
                GlobalEvent.emit(EventCfg.SHOWLOGIN);

            }, (ret) => {
                console.log(ret);
            })
        }
    }

    sendAuthCode() {

        if (!RegUtils.isPhoneNumber(parseInt(this.phone.string))) {
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的手机号码');
            return;
        }

        let url = LLWConfing.LoginUrl + '/sms';
        let data = {
            account: this.phone.string,
        }
        let CmdGetSms = pb.CmdGetSms.create(data);
        let buff = pb.CmdGetSms.encode(CmdGetSms).finish();

        HttpUtils.sendRequest({ url: url, data: buff, method: 'POST' }).then((res) => {

        }, (res) => {
            console.log(res);
        })

        this.timecount = 60;

        this.cb = setInterval(() => {
            if (this.timecount <= 0) {
                this.cb && (clearInterval(this.cb));
                this.cb = null;
                this.authcodeLabel.string = '获取验证码';
            }
            this.timecount--;

            this.authcodeLabel.string = '重新发送：' + this.timecount;

        }, 1000);
    }

    protected onDisable(): void {
        this.cb && (clearInterval(this.cb));
        this.cb = null;

    }


}
