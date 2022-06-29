
import LLWConfing from "../../common/config/LLWConfing";
import { pb } from "../../protos/proto";
import GameData from "../GameData";
import ActionUtils from "../utils/ActionUtils";
import GlobalEvent from "../utils/GlobalEvent";
import LoadUtils from "../utils/LoadUtils";
import PopupManager from "../utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallRightCenter extends cc.Component {

    @property(cc.Node)
    rewardCenterBtn: cc.Node = null;

    @property(cc.Node)
    xsBtn: cc.Node = null;

    @property(cc.Node)
    cgdsBtn: cc.Node = null;

    @property(cc.Node)
    cgsBtn: cc.Node = null;

    @property(cc.Node)
    vip7Btn: cc.Node = null;

    @property(cc.Node)
    otherBtn: cc.Node = null;

    rewardCenterData = null;

    rewardCenterNode = null;

    activity = [];

    onLoad() {
        this.rewardCenterBtn.active = false;

        //获取是否有奖励
        GlobalEvent.on('getRewardCenter', this.getRewardCenter.bind(this), this);

        //是否领取完
        GlobalEvent.on('REWARDITEM', (count) => {
            console.log(count);
            if (count > 0) {
                this.rewardCenterBtn.active = true;
            }
            else {
                this.rewardCenterBtn.active = false;
            }
        }, this);

        GlobalEvent.on('setXSBtnShowOrHide', this.setXSBtnShowOrHide.bind(this), this);

        GlobalEvent.on('setVip7BtnShowOrHide', this.setVip7BtnShowOrHide.bind(this), this);
    }

    start() {

        if (LLWConfing.AppFrom == pb.AppFrom.WeChatMinProgram) {
            return;
        }

        else {

            (<any>window).socket.send(pb.MessageId.Req_Hall_GetActivityLogs, null, (res) => {
                this.activity = res.ids;
                console.log('getActivity:' + JSON.stringify(res));

                //炒股大赛
                this.setCgdsBtnShowOrHide();
                //新手礼包
                this.setXSBtnShowOrHide();
                //7天VIP
                this.setVip7BtnShowOrHide();
                //闯关赛
                this.setCgsBtnShowOrHide();
                //其他
                this.setOtherBtnShowOrHide();
            })

        }

        this.getRewardCenter();
    }

    setXSBtnShowOrHide() {

        //参与过的
        if (this.activity.indexOf(GameData.appConf.pop[4].activity_id) >= 0) {
            this.xsBtn.active = false;
        }
        //没
        else {
            let flag = false;
            GameData.activityConf.forEach(el => {
                if (el.id == GameData.appConf.pop[4].activity_id) {
                    let curTime = new Date().getTime() / 1000;
                    if (curTime < el.to && curTime >= el.from) {
                        this.xsBtn.active = true;
                        flag = true;
                    }
                    else {
                        this.xsBtn.active = false;
                    }
                }
            });
            this.xsBtn.active = flag;
        }
    }

    setVip7BtnShowOrHide() {
        //参与过的
        if (this.activity.indexOf(GameData.appConf.pop[5].activity_id) >= 0) {
            this.vip7Btn.active = false;
            return;
        }
        //没
        else {
            let flag = false;
            GameData.activityConf.forEach(el => {
                if (el.id == GameData.appConf.pop[5].activity_id) {
                    let curTime = new Date().getTime() / 1000;
                    if (curTime < el.to && curTime >= el.from) {
                        this.vip7Btn.active = true;
                        flag = true;
                    }
                    else {
                        this.vip7Btn.active = false;
                    }
                }
            });
            this.vip7Btn.active = flag;
        }
    }

    setCgdsBtnShowOrHide() {
        let flag = false;
        GameData.activityConf.forEach(el => {
            if (el.title == GameData.appConf.pop[2].name) {
                let curTime = new Date().getTime() / 1000;
                if (curTime < el.to && curTime >= el.from) {

                    let iconUrl = LLWConfing.LoginUrl + '/img/activity/cgds_icon.png';
                    LoadUtils.loadRemote(iconUrl).then((res) => {
                        this.cgdsBtn.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res);
                        this.cgdsBtn.active = true;
                        flag = true;
                    }, () => {
                        this.cgdsBtn.active = false;
                    })

                }
                else {
                    this.cgdsBtn.active = false;
                }
            }
        });
        this.cgdsBtn.active = flag;
    }

    setCgsBtnShowOrHide() {
        let flag = false;
        GameData.activityConf.forEach(el => {
            if (el.title == GameData.appConf.pop[3].name) {
                let curTime = new Date().getTime() / 1000;
                if (curTime < el.to && curTime >= el.from) {
                    let iconUrl = LLWConfing.LoginUrl + '/img/activity/cgs_icon.png';
                    LoadUtils.loadRemote(iconUrl).then((res) => {
                        this.cgsBtn.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res);
                        this.cgsBtn.active = true;
                        flag = true;
                    }, () => {
                        this.cgsBtn.active = false;
                        flag = false;
                    })
                }
                else {
                    this.cgsBtn.active = false;
                }
            }
        });
        this.cgsBtn.active = flag;
    }

    setOtherBtnShowOrHide() {
        let flag = false;
        let arrstr = ['炒股大赛', '闯关赛', '首充', '7天VIP活动', '7天VIP'];
        GameData.activityConf.forEach(el => {

            if (arrstr.indexOf(el.title) < 0) {

                let curTime = new Date().getTime() / 1000;

                if (this.activity.indexOf(el.id) >= 0) {
                    this.otherBtn.active = false;
                }
                else if (curTime < el.to && curTime >= el.from) {
                    let iconUrl = LLWConfing.LoginUrl + '/img/activity/' + el.id + '_icon.png';
                    LoadUtils.loadRemote(iconUrl).then((sp) => {
                        this.otherBtn.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(sp);
                        this.otherBtn.active = true;
                        flag = true;
                    }, () => {
                        this.otherBtn.active = false;
                        flag = false;
                    })
                }
                else {
                    this.otherBtn.active = false;
                }
            }
        });
        this.otherBtn.active = flag;
    }

    getRewardCenter(call?) {
        (<any>window).socket.send(pb.MessageId.Req_Hall_BackBag, null, (info) => {
            console.log('getRewardCenter:' + JSON.stringify(info));
            if (info && info.grids.length > 0) {
                this.rewardCenterBtn.active = true;
            }
            else {
                this.rewardCenterBtn.active = false;
            }
            this.rewardCenterData = info.grids || [];
            call && (call);
        })
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'rewardCentertBtn') {
            PopupManager.openNode(cc.find('Canvas'), this.rewardCenterNode, 'prefabs/RewardCenter/rewardCenter', 12, (node) => {
                ActionUtils.openNode(node);
                this.rewardCenterNode = node;
                let handle = this.rewardCenterNode.getComponent('RewardCenter');
                if (handle) {
                    handle.rewardData = this.rewardCenterData;
                    handle.onShow();
                }
            })
        }

        else if (name == 'main_banner_sclb') {
            PopupManager.openNewPackage();
        }

        else if (name == 'main_banner_cgds') {
            PopupManager.openCgdsNotice();
        }

        else if (name == 'main_banner_viptyk') {
            PopupManager.open7DayVIP();
        }

        else if (name == 'main_banner_cgs') {
            PopupManager.openCgsNotice();
        }

        else if (name == 'main_banner_other') {
            PopupManager.openactiveTheme();
        }
    }

    onDestroy() {
        GlobalEvent.off('getRewardCenter');
        GlobalEvent.off('REWARDITEM');
        GlobalEvent.off('setXSBtnShowOrHide');
        GlobalEvent.off('setVip7BtnShowOrHide');
    }

}
