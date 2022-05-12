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

    start() {

        let acc = localStorage.getItem('ACCOUNT');

        if (acc) {
            this.account.string = acc;
        }

        let pass = LocalStorageUtils.getItem("PASSWORD");

        if (pass) {
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

        else if (name == 'login_dl') {
            if (this.password.string == '' || this.account.string == '') {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的账号或密码');
                return;
            }

            GlobalEvent.emit(EventCfg.LOGINSERVER);
        }
    }
}
