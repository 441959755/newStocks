
import LLWConfing from "../../common/config/LLWConfing";
import LLWSDK from "../../common/sdk/LLWSDK";

import GameData from "../GameData";
import ActionUtils from "../utils/ActionUtils";
import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import PopupManager from "../utils/PopupManager";
import TimeUtils from "../utils/TimeUtils";
import OtherBundle from "./OtherBundle";
import WealBundle from "./WealBundle";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallTopHandle extends cc.Component {

    @property(cc.Label)
    vipTimeLabel: cc.Label = null;

    onLoad() {
        //vip
        GlobalEvent.on(EventCfg.VIPCHANGE, this.setVIPstatus.bind(this), this);
    }

    start() {
        this.setVIPstatus();
    }

    setVIPstatus() {
        //vip状态
        if (GameData.vipStatus) {
            TimeUtils.getVipTime(this.SetVIPDisTime.bind(this));
        }
        else {
            this.vipTimeLabel.string = 'VIP';
        }
    }

    SetVIPDisTime(obj) {
        this.vipTimeLabel.string = obj.day + '天' + obj.hours + '时';
    }

    onBtnClick(event, customData) {

        let name = event.target.name;
        //设置
        if (name == 'xl_topbtn_xlsz') {
            OtherBundle.loadPre('hallSetLayer', (node) => { ActionUtils.openNode(node) });
        }

        //vip说明
        else if (name == 'main_tb_vip') {
            OtherBundle.loadPre('vipExplain', (node) => { ActionUtils.openNode(node) });
        }

        else if (name == 'main_tb_qq') {

            if (LLWConfing.AppFrom == pb.AppFrom.WeChatMinProgram) {
                LLWSDK.getSDK().openCustomerServiceConversation();
                return;
            }
            let str = '';
            str = 'Prefabs/sericeBox';

            PopupManager.openNode(this.node.parent, null, str, 11, (node) => {
                let handle = node.getComponent('SericeBox1');
                handle.onShow('客服');
                ActionUtils.openNode(node);
            })
        }

        else if (name == 'main_smbt_gg1') {
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/noticeLayer', 10, (node) => {
                ActionUtils.openNode(node);
            });
        }

        else if (name == 'main_topbt_fl') {
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/welfare', 11, (node) => {
                ActionUtils.openNode(node);
            });
        }

        else if (name == 'main_topbt_ph') {
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/rankingList', 10, (node) => {
                ActionUtils.openNode(node);
            })
        }

        else if (name == 'main_topbt_share') {
            LLWSDK.getSDK().shareAppMessage(1);
        }

        else if (name == 'main_topbt_invite') {
            // PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/InviteLayer', 11, (node) => {
            //     ActionUtils.openNode(node);
            // })

            WealBundle.loadPre('inviteLayer', (node) => {
                ActionUtils.openNode(node);
            })
        }

    }

    protected onDestroy(): void {
        GlobalEvent.off(EventCfg.VIPCHANGE);
    }
}
