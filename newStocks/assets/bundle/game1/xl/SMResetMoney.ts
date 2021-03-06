
import LLWSDK from '../../../common/sdk/LLWSDK';
import GameData from '../../../sctiprs/GameData';
//import GameData from '../../../sctiprs/GameData';
import EventCfg from '../../../sctiprs/utils/EventCfg';
import GlobalEvent from '../../../sctiprs/utils/GlobalEvent';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SMResetMoney extends cc.Component {

    @property(cc.Label)
    resetMoneyLa: cc.Label = null;

    @property(cc.Label)
    resetLa: cc.Label = null;

    @property(cc.Label)
    tipsLabel: cc.Label = null;

    diamond = 0;

    gold = 0;

    //  onEnable() {
    // if ( GameData.smxlState.gold <= GameCfgText.smxlCfg.capital_min.value) {
    //     this.diamond = Math.abs(GameCfgText.smxlCfg.capital_min.cost[0].v);
    //     this.resetMoneyLa.string = this.diamond + '钻石';
    //     this.resetLa.string = this.diamond + '钻石';
    // }
    // else if ( GameData.smxlState.gold >= GameCfgText.smxlCfg.capital_max.value) {
    //     this.gold = Math.abs(GameCfgText.smxlCfg.capital_max.cost[0].v);
    //     this.resetMoneyLa.string = this.gold + '金币';
    //     this.resetLa.string = this.gold + '金币';
    // }
    //}

    protected onEnable(): void {

        if (GameData.vipStatus) {
            if (GameData.smxlState.gold < 10000) {
                this.tipsLabel.string = '您的当前资金不足1万，无法开启训练，重置获赠5万资金';
            }
            else if (GameData.smxlState.gold > 1000000000) {
                this.tipsLabel.string = '您的资金已经太多了，重置回到初始状态';
            }
        }
        else {
            if (GameData.smxlState.gold < 10000) {
                this.tipsLabel.string = '您的当前资金不足1万，无法开启训练，观看视频获赠5万资金';
            }
            else if (GameData.smxlState.gold > 1000000000) {
                this.tipsLabel.string = '您的资金已经太多了，是否消耗1000金币重置到初始状态';
            }
        }

    }

    onBtnClick(event, target) {
        let name = event.target.name;

        //点击重置
        if (name == 'smxl_btn_cz') {
            // if (this.diamond && GameData.properties[pb.GamePropertyId.Diamond] < this.diamond) {
            //     GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '钻石不足');
            //     return;
            // }
            // else if (this.gold && GameData.properties[pb.GamePropertyId.Gold] < this.gold) {
            //     GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '金币不足');
            //     return;
            // }
            let self = this;
            if (GameData.vipStatus) {
                this.sendSmxlReset();
            }
            else {
                if (GameData.smxlState.gold < 10000) {

                    LLWSDK.getSDK().showVideoAd((flag) => {
                        if (flag) {
                            this.sendSmxlReset();
                        }
                        else {
                            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '观看完整视频才可以重置成功');
                        }
                    })
                }
                else if (GameData.smxlState.gold > 1000000000) {
                    if (GameData.properties[pb.GamePropertyId.Gold] < 1000) {
                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '金币不足');
                        return;
                    }
                    this.sendSmxlReset();
                }
            }
        }

        else if (name == 'closeSetBtn') {
            this.node.active = false;
        }
    }

    sendSmxlReset() {
        let self = this;
        (<any>window).socket.send(pb.MessageId.Req_Game_SmxlReset, null, (data) => {
            console.log('重置' + JSON.stringify(data));

            if (data && !data.code) {
                self.node.active = false;
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '双盲本月当前金币重置成功。');

            } else {
                console.log('重置失败:' + JSON.stringify(data));
            }
        })
    }
}
