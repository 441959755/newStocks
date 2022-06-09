
import { pb } from "../../../proto/proto";
import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import PopupManager from "../../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WinLossItem extends cc.Component {

    @property(cc.Label)
    label1: cc.Label = null;

    @property(cc.Label)
    label2: cc.Label = null;

    @property(cc.Button)
    resetBtn: cc.Button = null;

    winNum = 0;
    loseNum = 0;
    nameStr = '';
    GameType = 0;

    onShow() {
        this.label2.string = this.winNum + '  胜               ' + this.loseNum + '  负';
        this.label1.string = this.nameStr + ':';

        if (this.winNum == 0 && this.loseNum == 0) {
            this.resetBtn.enableAutoGrayEffect = true;
            this.resetBtn.interactable = false;
        }
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'playerInfo_btn_cz') {
            let cost;
            if (GameData.gameConf.counter_reset_cost) {
                cost = Math.abs(GameData.gameConf.counter_reset_cost[0].v);
            }

            let diamond = cost || 50;

            if (new Date().getTime() / 1000 < GameData.properties[pb.GamePropertyId.VipExpiration] || GameData.properties[pb.GamePropertyId.Diamond] >= diamond) {

                PopupManager.LoadTipsBox('重置 ' + this.nameStr + ' 战绩,\n 战绩将清零,重新开始统计', () => {
                    GlobalEvent.emit(EventCfg.SHOWLOADING);
                    let data = {
                        game: this.GameType,
                    }

                    let message = pb.CmdResetGameCounter.create(data);
                    let buff = pb.CmdResetGameCounter.encode(message).finish();

                    (<any>window).socket.send(pb.MessageId.Req_Hall_ResetGameCounter, buff, (info) => {
                        console.log('onCmdEditInfoConvertToBuff:' + JSON.stringify(info));
                        if (!info.code) {
                            this.label2.string = 0 + '  胜              ' + 0 + '  负';
                            this.resetBtn.enableAutoGrayEffect = true;
                            this.resetBtn.interactable = false;
                        } else {
                            console.log('图片有误!:' + info.code + info.err);
                        }
                        GlobalEvent.emit(EventCfg.HIDELOADING);
                    })
                })

            }
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, 'VIP用户或钻石大于' + diamond + '才能重置');
            }
        }
    }
}
