import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class MnxgItem1 extends cc.Component {

    @property([cc.Label])
    labels: cc.Label[] = [];

    _code = null;

    _curData = null;
    onLoad() {

        GlobalEvent.on(EventCfg.SYNCQUOTEITEM, (info) => {
            if (this._code == info.code) {
                this.setLabel(info);
            }
        }, this);
    }

    setLabel(info) {
        if (this._code != info.code || !info.price) { return };
        this.labels[2].string = ComUtils.changeTwoDecimal(info.price) + '';

        this.labels[3].string = ComUtils.changeTwoDecimal(this._curData.priceCost) + '';
        this.labels[4].string = this._curData.volume;

        let zd = info.price - this._curData.priceCost;
        if (zd < 0) {
            this.labels[5].node.color = new cc.Color().fromHEX('#31a633');
            this.labels[6].node.color = new cc.Color().fromHEX('#31a633');
        }
        else {
            this.labels[5].node.color = new cc.Color().fromHEX('#e94343');
            this.labels[6].node.color = new cc.Color().fromHEX('#e94343');
        }

        this.labels[5].string = ComUtils.changeTwoDecimal(zd) + '';
        let zdf = zd / this._curData.priceCost * 100;
        this.labels[6].string = ComUtils.changeTwoDecimal(zdf) + '%';

        this.labels[7].string = ComUtils.changeTwoDecimal(info.high) + '';
        this.labels[8].string = ComUtils.changeTwoDecimal(info.low) + '';
        let sy = (info.price - this._curData.priceCost) * this._curData.volume;
        if (sy > 0) {
            this.labels[9].node.color = new cc.Color().fromHEX('#e94343');
        } else {
            this.labels[9].node.color = new cc.Color().fromHEX('#31a633');
        }
        this.labels[9].string = ComUtils.changeTwoDecimal(sy) + '';
        //   GlobalEvent.emit(EventCfg.UPDATECCASSET, sy);
    }

    onShow(code, data: any, info) {

        if (!this._code || this._code != code) {

            this._code = code;
            this._curData = data;

            let items = ConfUtils.getGPItemInfo(this._code);
            if (items) {
                this.labels[1].string = items[1];
            }
            code = this._code + '';
            if (code.length >= 7) {
                code = code.slice(1);
            }
            this.labels[0].string = code;
        }

        if (info) {
            this.setLabel(info)
        }
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        //???????????????
        if (name == 'item1') {
            GlobalEvent.emit(EventCfg.OPENZNDRAW, this._code);
        }
    }

}
