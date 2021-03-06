
import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnxgItem1 extends cc.Component {

    @property([cc.Label])
    label: cc.Label[] = [];

    _curData = null;

    AIstr = null;

    onShow(data, index) {
        let code = data.code + '';
        if (code.length >= 7) {
            code = code.slice(1);
        }
        this._curData = data;
        index += 1;
        this.label[0].string = index;
        //  GameData.ZNCurIndex = index;
        if (index + 1 > 3 && !GameData.vipStatus) {
            this.label[1].string = 'VIP';
            this.label[2].string = '******';
        }
        else {
            this.label[1].string = code || '--';
            this.label[2].string = data.name || '--';
        }

        this.label[3].string = data.lastAskPrice || '--';
        this.label[4].string = data.lastBidPrice || '--';
        this.label[5].string = (data.profitRate || '--') + '%';

        if (data.lastBidPrice > 0) {
            this.label[4].node.color = new cc.Color().fromHEX('#e94343');
        }

        if (data.profitRate > 0) {
            this.label[5].node.color = new cc.Color().fromHEX('#e94343');
        }

        if (data.todaySignal && data.todaySignal < 0) {
            this.AIstr = '建议买入';
        }

        if (data.todaySignal && data.todaySignal > 0) {
            this.AIstr = '建议卖出';
        }

        if (data.todaySignal && data.todaySignal > 0) {
            this.AIstr = '建议观望';
        }
    }

    onBtnClick(event, data) {

        let name = event.target.name;
        if (name == 'item1') {
            GlobalEvent.emit(EventCfg.OPENZNDRAW, this._curData.code, this.AIstr);
        }

    }
}
