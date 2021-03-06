
import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnxgItem extends cc.Component {

    @property([cc.Label])
    label: cc.Label[] = [];

    _curData = null;

    @property(cc.Node)
    yiShouCang: cc.Node = null;

    onLoad() {

        GlobalEvent.on('collectListUpdate', this.yiShouCangIsShow.bind(this), this);
        //更新列表
        GlobalEvent.on('updateCollectList', this.yiShouCangIsShow.bind(this), this);
    }

    onDestroy() {
        GlobalEvent.off('collectListUpdate');
        GlobalEvent.off('updateCollectList');
    }

    onShow(data, index) {
        let code = data.code + '';
        if (code.length >= 7) {
            code = code.slice(1);
        }

        this._curData = data;
        this.label[0].string = index + 1 || '--';
        // GameData.ZNCurIndex = index + 1;
        if (index + 1 > 3 && !GameData.vipStatus) {
            this.label[1].string = 'VIP';
            this.label[2].string = '******';
        }
        else {
            this.label[1].string = code || '--';
            this.label[2].string = data.name || '--';
        }

        this.label[3].string = data.industry || '--';
        this.label[4].string = data.lastBidPrice || '--';
        if (data.todaySignal && data.todaySignal < 0) {
            this.label[5].string = '建议买入';
        }

        if (data.todaySignal && data.todaySignal > 0) {
            this.label[5].string = '建议卖出';
        }

        if (data.todaySignal && data.todaySignal == 0) {
            this.label[5].string = '建议观望';
        }

        this.yiShouCangIsShow();
    }

    setIndex(index) {
        this.label[0].string = index + '';
    }

    yiShouCangIsShow() {
        this.yiShouCang.active = false;

        GameData.aiStockList.forEach(el => {
            if (this._curData && el == this._curData.code) {
                this.yiShouCang.active = true;
            }
        })
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'shoucangBtn') {

            if (!GameData.vipStatus) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '开启VIP或解锁该功能取限制');
                return;
            }

            let info = {
                removed: false,
                code: this._curData.code,
                isAiStock: true,
            }

         //   let message = pb.CmdMncgEditStock.create(info);
            let buff = pb.CmdMncgEditStock.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_EditAiStockList, buff, (res) => {

            })
            GameData.aiStockList.push(this._curData.code);
            this.yiShouCang.active = true;

            GlobalEvent.emit('shouCangAdd', this._curData);

        }
        else if (name == 'item') {
            GlobalEvent.emit(EventCfg.OPENZNDRAW, this._curData.code);
        }

    }
}

