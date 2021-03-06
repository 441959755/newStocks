
import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnxgItem2 extends cc.Component {

    @property([cc.Label])
    label: cc.Label[] = [];

    _curData = null;

    onLoad() {
        let tp;

        GlobalEvent.on(EventCfg.CMDQUOTITEM, (res1) => {

            if (this._curData && res1.items[0].code == this._curData.code) {

                tp = TimeUtils.fromatTime1(res1.items[0].timestamp);

                let me = {
                    code: this._curData.code,
                }

               // let message1 = pb.CmdQueryAiSignal.create(me);
                let buff1 = pb.CmdQueryAiSignal.encode(me).finish();

                (<any>window).socket.send(pb.MessageId.Req_QueryAiSignal, buff1)
            }

        }, this);

        GlobalEvent.on('AISIGNAL', (res) => {
            if (this._curData && res.code == this._curData.code) {
                console.log('获取AI操作：' + JSON.stringify(res));
                let signals = res.signals;
                if (signals.length <= 0) {
                    this.label[7].string = '持币观望';
                }
                else {
                    if (parseInt(tp) - signals[signals.length - 1].ts <= 1) {
                        if (signals[signals.length - 1].flag < 0) {
                            this.label[7].string = '建议买入';

                        }
                        else {
                            this.label[7].string = '建议卖出';
                        }
                    }
                    else {
                        if (signals[signals.length - 1].flag < 0) {
                            this.label[7].string = '持股观望';
                        }
                        else {
                            this.label[7].string = '持币观望';
                        }
                    }
                }

                GameData.AISignal[this._curData.code + ''] = this.label[7].string;
            }
        }, this);
    }

    onShow(data, index) {

        let code = data.code + '';
        if (code.length >= 7) {
            code = code.slice(1);
        }
        this._curData = data;
        this.label[0].string = index;
        this.label[1].string = code || '--';
        this.label[2].string = this._curData.name || '--';
        this.label[3].string = this._curData.lastBidPrice || '--';
        this.label[4].string = this._curData.lastAskPrice || '--';
        this.label[5].string = this._curData.curAskPrice || '--';
        this.label[6].string = this._curData.profitRate || '--';
        this.label[7].string = '--';
        if (GameData.AISignal[data.code + '']) {
            this.label[7].string = GameData.AISignal[data.code + ''];
        }
        else {
            var d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            let t;
            //   if (h < 15 || (h > 15 && h < 16 && m < 30)) {
            t = parseInt((d.getTime() - 24 * 60 * 60 * 1000) / 1000 + '');
            // }
            // else {
            //     t = parseInt(d.getTime() / 1000 + '');
            // }
            let info1 = {
                ktype: pb.KType.Min,
                code: parseInt(data.code),
                to: t,
                total: 1,
            }
          //  let message = pb.CmdQuoteQuery.create(info1);
            let buff = pb.CmdQuoteQuery.encode(info1).finish();
            (<any>window).socket.send(pb.MessageId.Req_QuoteQuery, buff);
        }
    }


    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'shanchuBtn') {
            let info = {
                removed: true,
                code: this._curData.code,
                isAiStock: true,
            }

            //let CmdMncgEditStock = pb.CmdMncgEditStock;
          //  let message = CmdMncgEditStock.create(info);
            let buff = pb.CmdMncgEditStock.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_EditAiStockList, buff, (res) => {

            })

            let index = GameData.aiStockList.indexOf(this._curData.code);
            if (index != -1) {
                GameData.aiStockList.splice(index, 1);
            }

            GlobalEvent.emit('collectListUpdate');
            //更新列表
            GlobalEvent.emit('updateCollectList');
        }
        else if (name == 'item2') {
            GlobalEvent.emit(EventCfg.OPENZNDRAW, this._curData.code, this.label[7].string);
        }

    }

    onDestroy() {
        GlobalEvent.off(EventCfg.CMDQUOTITEM);
        GlobalEvent.off('AISIGNAL');
    }

}
