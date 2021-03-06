
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class MnxgItem extends cc.Component {

    @property([cc.Label])
    labs: cc.Label[] = [];

    _code = null;

    items = null;

    onLoad() {

        GlobalEvent.on(EventCfg.SYNCQUOTEITEM, (info) => {

            if (this._code == info.code) {
                this.setLabel(info);
            }

        }, this);
    }

    onShow(data?, info?) {
        if ((!this._code || this._code != data) && data) {

            if (data) {
                this._code = data;
            }

            this.items = ConfUtils.getGPItemInfo(this._code);

            if (this.items) {
                this.labs[1].string = this.items[1];
            }

            let code = this._code + '';

            if (code.length >= 7) {
                code = code.slice(1);
            }
            this.labs[0].string = code;

            info && (this.setLabel(info));
        }
    }

    setLabel(info) {

        this.labs[2].string = ComUtils.changeTwoDecimal(info.price) + '';

        let zd = info.price - info.close;
        if (zd < 0) {
            this.labs[3].node.color = new cc.Color().fromHEX('#31a633');
            this.labs[4].node.color = new cc.Color().fromHEX('#31a633');
            this.labs[5].node.color = new cc.Color().fromHEX('#31a633');
        }
        else {
            this.labs[3].node.color = new cc.Color().fromHEX('#e94343');
            this.labs[4].node.color = new cc.Color().fromHEX('#e94343');
            this.labs[5].node.color = new cc.Color().fromHEX('#e94343');
        }

        this.labs[3].string = ComUtils.changeTwoDecimal(zd) + '';
        let zdf = zd / info.close * 100;
        this.labs[4].string = ComUtils.changeTwoDecimal(zdf) + '%';
        this.labs[5].string = ComUtils.changeTwoDecimal(info.open) + '';
        this.labs[6].string = ComUtils.changeTwoDecimal(info.close) + '';
        this.labs[7].string = ComUtils.changeTwoDecimal(info.high) + '';
        this.labs[8].string = ComUtils.changeTwoDecimal(info.low) + '';
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        //???????????????
        if (name == 'item') {

            if (this.items[3] != 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }

            GlobalEvent.emit(EventCfg.OPENZNDRAW, this._code);
        }

        //??????
        else if (name == 'sp_btn_shanchu') {
            let id = 0;
            if (GameData.SpStockData && GameData.SpStockData.id) {
                id = GameData.SpStockData.id;
            }

            let info = {
                removed: true,
                code: this._code,
                isAiStock: false,
                id: id,
            }

          //  let message = pb.CmdMncgEditStock.create(info);
            let buff = pb.CmdMncgEditStock.encode(info).finish();
            (<any>window).socket.send(pb.MessageId.Req_Game_MncgEditStockList, buff, (res) => {

            })

            if (GameCfg.GameType == pb.GameType.MoNiChaoGu) {
                let index = GameData.selfStockList.indexOf(this._code);
                GameData.selfStockList.splice(index, 1);

            }
            else if (GameCfg.GameType == pb.GameType.ChaoGuDaSai) {
                GameData.cgdsStockList.forEach(el => {
                    if (el.id == GameData.SpStockData.id) {
                        let index = el.stockList.indexOf(this._code);
                        el.stockList.splice(index, 1);
                    }
                })
            }

            GlobalEvent.emit(EventCfg.ADDZXGP);

        }
    }
}
