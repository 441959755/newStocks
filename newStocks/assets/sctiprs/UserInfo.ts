

import GameData from "./GameData";
import OtherBundle from "./hall/OtherBundle";
import EventCfg from "./utils/EventCfg";
import GlobalEvent from "./utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UserInfo extends cc.Component {

    @property(cc.Sprite)
    userHead: cc.Sprite = null;

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Label)
    userLevel: cc.Label = null;

    @property(cc.Node)
    userSex: cc.Node = null;

    @property(cc.Node)
    userVip: cc.Node = null;

    @property(cc.SpriteFrame)
    defultHead: cc.SpriteFrame = null;

    _userInfo: any = null;

    get userInfo() {
        return this._userInfo;
    }

    set userInfo(val) {
        this._userInfo = val;
        this.onUserInfoShow();
    }

    protected onLoad(): void {
        //性别更改
        GlobalEvent.on(EventCfg.GENDERCHANGE, this.setUserGender.bind(this), this);

        //头像更改
        GlobalEvent.on(EventCfg.HEADIMGCHANGE, this.setUserHead.bind(this), this);

        //名字更改
        GlobalEvent.on(EventCfg.NAMECHANGE, this.setUserInfo.bind(this), this);

        //等级更改
        GlobalEvent.on(EventCfg.LEVELCHANGE, this.setUserInfo.bind(this), this);

        //vip
        GlobalEvent.on(EventCfg.VIPCHANGE, this.setUserInfo.bind(this), this);

        GameData.imgs['0'] = this.defultHead;
    }

    setUserGender() {

        if (this._userInfo.userID == GameData.userID) {
            if (GameData.gender == 1) {
                this.userSex.active = false;
            } else {
                this.userSex.active = true;
            }
        }
        else {

        }

    }

    setUserHead() {

        //自己
        if (this._userInfo.userID == GameData.userID) {
            this.userHead.spriteFrame = GameData.headImg || this.defultHead;
        }
        //他人
        else {

        }

    }


    setUserInfo() {

        if (this._userInfo.userID == GameData.userID) {
            this.userLevel.string = 'LV:' + (GameData.properties[pb.GamePropertyId.Level] || 1) + '';
            this.userName.string = GameData.userName || GameData.userID;
            this.userVip.active = GameData.vipStatus;
        }
        else {

        }
    }


    onUserInfoShow() {
        //设置用户信息
        this.setUserInfo();

        //设置用户头像
        this.setUserHead();

        this.setUserGender();

    }


    onUserInfoBtnClick(event, customEventData) {
        let name = event.target.name;
        //打开个人中心
        if (name == 'userinfobg') {
            OtherBundle.loadPre('playerInfo/playerInfoLayer');
        }

    }

    protected onDestroy(): void {

        GlobalEvent.off(EventCfg.GENDERCHANGE);
        GlobalEvent.off(EventCfg.HEADIMGCHANGE);

        GlobalEvent.off(EventCfg.NAMECHANGE);
        GlobalEvent.off(EventCfg.LEVELCHANGE);

        GlobalEvent.off(EventCfg.VIPCHANGE);
    }


}
