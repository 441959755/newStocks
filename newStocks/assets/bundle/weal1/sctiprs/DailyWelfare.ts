
import LLWSDK from "../../../common/sdk/LLWSDK";

import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class DailyWelfare extends cc.Component {

    @property(cc.Node)
    labels: cc.Node = null;

    @property(cc.Node)
    masks: cc.Node = null;

    dailyAwards = null;

    count = 0;

    @property(cc.Button)
    btn_lqjl: cc.Button = null;

    start() {
        this.dailyAwards = GameData.gameConf.daily_awards_wx;
        console.log('每日看广告奖励配置' + JSON.stringify(this.dailyAwards));
        console.log('今日领取次数：' + GameData.gameData.todayAdtimes);

        this.count = parseInt(GameData.gameData.todayAdtimes) || 0;
        //奖励配置
        this.labels.children.forEach((el, index) => {
            let label = el.getComponent(cc.Label);
            label && (label.string = 'X' + this.dailyAwards[index][0].v);
        })

        this.onShow();
    }

    protected onDisable(): void {
        GameData.gameData.todayAdtimes = parseInt(this.count + '');
    }

    onShow() {
        if (this.count >= 6) {
            this.btn_lqjl.interactable = false;
            this.btn_lqjl.enableAutoGrayEffect = true;
        }
        else {
            this.btn_lqjl.interactable = true;
            this.btn_lqjl.enableAutoGrayEffect = false;
        }

        this.masks.children.forEach((el, index) => {
            if (index + 1 <= this.count) {
                el.active = true;
            }
            else {
                el.active = false;
            }
        })
    }

    onBtnClick(event, customData) {

        let name = event.target.name;

        if (name == 'sys_close') {
            this.node.active = false;
        }

        else if (name == 'fl_mfzs_lqjl') {

            LLWSDK.getSDK().showVideoAd((flag) => {
                if (flag) {
                    (<any>window).socket.send(pb.MessageId.Req_Hall_GetDailyAdAward, null, () => {

                    })
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '成功领取奖励!');
                    this.count += 1;
                    this.onShow();
                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '观看完整视频才可以成功领取奖励');
                }
            })

        }

    }
}
