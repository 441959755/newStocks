import LLWSDK from "../../../common/sdk/LLWSDK";

import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class InviteHandle extends cc.Component {

    @property([cc.Label])
    labels: cc.Label[] = [];

    @property(cc.Button)
    btnInvite1: cc.Button = null;

    @property(cc.Button)
    btnInvite2: cc.Button = null;

    inviterData = null;

    protected onLoad(): void {
        GlobalEvent.on('INVITEUP', this.onShow.bind(this), this)
    }

    start() {
        this.onShow();
    }

    onShow() {

        this.inviterData = GameData.gameData.inviterState;

        if (this.inviterData) {
            this.labels[0].string = (this.inviterData.Total - this.inviterData.Awarded[pb.GamePropertyId.Gold]) + '/' + this.inviterData.Total;

            this.labels[1].string = this.inviterData.Awarded[pb.GamePropertyId.Gold] * 500 + '';

            this.labels[2].string = this.inviterData.Total * 500 - this.inviterData.Awarded[pb.GamePropertyId.Gold] * 500 + '';
            if (this.inviterData.Total - this.inviterData.Awarded[pb.GamePropertyId.Gold] > 0) {
                this.btnInvite1.interactable = true;
                this.btnInvite1.enableAutoGrayEffect = false;
            }
            else {
                this.btnInvite1.interactable = false;
                this.btnInvite1.enableAutoGrayEffect = true;
            }

            this.labels[3].string = (this.inviterData.Total - this.inviterData.Awarded[pb.GamePropertyId.Vip]) + '/' + this.inviterData.Total;

            this.labels[4].string = this.inviterData.Awarded[pb.GamePropertyId.Vip] / 10 * 3 + '';

            let t = parseInt(this.inviterData.Total / 10 * 3 - this.inviterData.Awarded[pb.GamePropertyId.Vip] / 10 * 3 + '');



            this.labels[5].string = parseInt(t / 3 + '') * 3 + '';

            if ((this.inviterData.Total - this.inviterData.Awarded[pb.GamePropertyId.Vip]) / 3 >= 3) {
                this.btnInvite2.interactable = true;
                this.btnInvite2.enableAutoGrayEffect = false;
            }
            else {
                this.btnInvite2.interactable = false;
                this.btnInvite2.enableAutoGrayEffect = true;
            }
        }
        else {
            this.btnInvite2.interactable = false;
            this.btnInvite2.enableAutoGrayEffect = true;
            this.btnInvite1.interactable = false;
            this.btnInvite1.enableAutoGrayEffect = true;
        }
    }

    protected onDestroy(): void {
        GlobalEvent.off('INVITEUP');
    }

    onBtnClick(event, customData) {
        let name = event.target.name;
        if (name == 'closeBtn') {
            this.node.active = false;
        }

        //????????????
        else if (name == 'jxzx_lq1') {

            if (!this.inviterData) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????');
            }
            else {
                this.getInviterAward(pb.GamePropertyId.Gold, this.inviterData.Total - this.inviterData.Awarded[pb.GamePropertyId.Gold])
            }
        }

        //??????VIP
        else if (name == 'jxzx_lq2') {
            if (!this.inviterData) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????');
            }
            else {
                this.getInviterAward(pb.GamePropertyId.Vip, parseInt((this.inviterData.Total - this.inviterData.Awarded[pb.GamePropertyId.Vip]) / 10 + '') * 10)
            }
        }

        //??????
        else if (name == 'main_yq_yqhy') {
            LLWSDK.getSDK().shareAppMessage(1);
        }
    }

    getInviterAward(type, count) {

        let info = {
            propertyId: type,
            count: count,
        }
        console.log('??????' + type + '    ' + count);
        console.log(JSON.stringify(info));

        // let CmdGetInviterAward = pb.CmdGetInviterAward;
        // let message = CmdGetInviterAward.create(info);
        let buff = pb.CmdGetInviterAward.encode(info).finish();

        (<any>window).socket.send(pb.MessageId.Req_Hall_GetInviterAward, buff, (res) => {
            console.log('??????????????????' + JSON.stringify(res));
            if (res.err) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err);
            }
            else {
                if (type == pb.GamePropertyId.Gold) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????:' + count * 500 + '?????????');
                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????:' + (count / 10) * 3 + '???VIP');
                }
            }
        })
    }

    // let info = {
    //     code: this.curData.code,
    //     type: pb.OrderType.BidLimit,
    //     price: this.curData.price,
    //     volume: this.curSellCount,
    //     uid: GameData.userID,
    //     amount: this.curData.price * this.curSellCount,
    //     id: id,
    // }

    // let CmdStockOrder = pb.CmdStockOrder;
    // let message = CmdStockOrder.create(info);
    // let buff = CmdStockOrder.encode(message).finish();

    // socket.send(pb.MessageId.Req_Game_Order, buff, (res) => {

    //     console.log('??????????????????:' + JSON.stringify(res));

    //     GlobalEvent.emit(EventCfg.HIDELOADING);

    //     if (res.orderId) {

    //         GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????!');

    //         this.node.active = false;
    //     }
    //     else {
    //         GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.result.err);
    //     }
    // })

}
