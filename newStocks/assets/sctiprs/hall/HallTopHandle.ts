
import GameData from "../GameData";

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
            ComUtils.getVIPDisTime(this.SetVIPDisTime.bind(this));
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
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/hallSetLayer', 11, (node) => {
                ActionUtils.openBox(node);
            })
        }

        //vip说明
        else if (name == 'main_tb_vip') {
            PopupManager.loadVipExplain();
        }

        else if (name == 'main_tb_qq') {
            let str = '';
            if (LLWConfig.PLATTYPE == PlatDefine.PLAT_WECHAT) {
                // str = 'Prefabs/sericeBox1';
                LLWSDK.getSDK().openCustomerServiceConversation();
                return;
            }
            else {
                str = 'Prefabs/sericeBox';
            }

            PopupManager.openNode(this.node.parent, null, str, 11, (node) => {
                let handle = node.getComponent('SericeBox1');
                handle.onShow('客服');
                ActionUtils.openBox(node);
            })
        }

        else if (name == 'main_smbt_gg1') {
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/noticeLayer', 10, (node) => {
                ActionUtils.openBox(node);
            });
        }

        else if (name == 'main_topbt_fl') {
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/welfare', 11, (node) => {
                ActionUtils.openBox(node);
            });
        }

        else if (name == 'main_topbt_ph') {
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/rankingList', 10, (node) => {
                ActionUtils.openBox(node);
            })
        }

        else if (name == 'main_topbt_share') {
            LLWSDK.getSDK().shareAppMessage(1);
        }

        else if (name == 'main_topbt_invite') {
            PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/InviteLayer', 11, (node) => {
                ActionUtils.openBox(node);
            })
        }

    }

    protected onDestroy(): void {
        GlobalEvent.off(EventCfg.VIPCHANGE);
    }
}