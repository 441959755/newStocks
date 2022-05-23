import GameData from "../GameData";
import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import LocalStorageUtils from "../utils/LocalStorageUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    @property(cc.EditBox)
    account: cc.EditBox = null;

    @property(cc.EditBox)
    password: cc.EditBox = null;

    protected onEnable(): void {

        let acc = GameData.account;

        if (acc && acc != "undefined") {
            this.account.string = acc;
        }

        let pass = GameData.password;

        if (pass && pass != "undefined") {
            this.password.string = pass;
        }

    }

    onBtnClick(event, curtomData) {
        let name = event.target.name;

        //忘记密码
        if (name == 'forget') {
            GlobalEvent.emit(EventCfg.SHOWRESET);
            this.node.active = false;
        }

        //注册
        else if (name == 'zc') {
            GlobalEvent.emit(EventCfg.SHOWREG);
            this.node.active = false;
        }

        //登入
        else if (name == 'login_dl') {

            if (this.password.string == '' || this.account.string == '') {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的账号或密码');
                return;
            }

            GlobalEvent.emit(EventCfg.LOGINSERVER, { uid: this.account.string, pw: this.password.string });
        }
    }
}
