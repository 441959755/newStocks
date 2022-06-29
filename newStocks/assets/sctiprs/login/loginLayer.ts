import LLWConfing from "../../common/config/LLWConfing";
import LLWSDK from "../../common/sdk/LLWSDK";

import GameData from "../GameData";
import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import Socket from '../../common/net/Socket';
import HttpMgr from "../HttpMgr";
import { pb } from "../../protos/proto";

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

        GlobalEvent.on(EventCfg.LOGINSERVER, this.loginServer.bind(this), this);
    }

    loginServer(obj) {
        GlobalEvent.emit(EventCfg.SHOWLOADING);
        let uid = obj.uid;
        let pw = obj.pw;

        LLWSDK.getSDK().login(this.loginResultCallback.bind(this), uid, pw);
    }

    loginResultCallback(decode) {

        console.log('loginResultCallback:' + JSON.stringify(decode));

        if (decode.err.err) {
            GlobalEvent.emit(EventCfg.HIDELOADING);
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, decode.err.err);
            return;
        }

        decode.token && (GameData.token = decode.token);
        decode.uid && (GameData.userID = decode.uid);

        (<any>window).socket = new Socket(decode.gameAddr, HttpMgr.loginSocket)

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

        if (LLWConfing.AppFrom == pb.AppFrom.WeChatMinProgram) {
            LLWSDK.getSDK().login();
        }
    }

    onBtnClick(event, data) {
        let name = event.target.name;

        if (name == 'login_wxdl') {
            //微信
            LLWSDK.getSDK().getUserInfo1(GameData.loginCode, null, this.loginResultCallback);
        }
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
