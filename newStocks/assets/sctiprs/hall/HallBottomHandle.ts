
import ActionUtils from "../utils/ActionUtils";
import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import PopupManager from "../utils/PopupManager";
import OtherBundle from "./OtherBundle";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallBottomHandle extends cc.Component {

    protected onLoad(): void {

        //通知界面
        GlobalEvent.on('OPENNOTICELAYER', this.openNoticelayer.bind(this), this);

        //打开排行榜
        GlobalEvent.on('OPENRANKINGLIST', this.openRankingList.bind(this), this);

    }

    //打开公告
    openNoticelayer() {
        PopupManager.openNode(cc.find('Canvas'), null, 'prefabs/noticeLayer', 10, null);
    }

    //打开排行榜
    openRankingList() {
        OtherBundle.loadPre('rankingList', (node) => { ActionUtils.openNode(node) });
    }

    // //打开商城
    // openShopLayer(type) {
    //     PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/shop/shop', 88, (node) => {
    //         type && (node.getComponent('ShopControl').onShow(type));
    //     })
    // }

    onClick(event, customData) {

        let name = event.target.name;

        //公告
        if (name == 'main_smbt_gg1') {
            this.openNoticelayer();
        }

        //好友
        else if (name == 'main_smbt_hy1') {

            OtherBundle.loadPre('friendLayer', (node) => { ActionUtils.openNode(node) });
        }

        //反馈
        else if (name == 'main_smbt_fk1') {
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '敬请期待！');
        }

        //任务
        else if (name == 'main_smbt_rw1') {

            OtherBundle.loadPre('taskLayer', (node) => { ActionUtils.openNode(node) });
        }

        //排行
        else if (name == 'main_smbt_ph1') {
            // this.openRankingList();

            OtherBundle.loadPre('rankingList', (node) => { ActionUtils.openNode(node) });
        }

        //商城
        else if (name == 'main_smbt_sc1') {
            OtherBundle.loadPre('shop/shop', (node) => {
                ActionUtils.openNode(node);
                node && (node.getComponent('ShopControl').onShow(1));
            })
        }
    }

    protected onDestroy(): void {
        GlobalEvent.off('OPENNOTICELAYER');
        GlobalEvent.off('OPENRANKINGLIST');
    }

}
