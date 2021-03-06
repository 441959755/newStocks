
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    nameLabel: cc.Label = null;

    @property(cc.Label)
    codeLabel: cc.Label = null;

    @property(cc.EditBox)
    priceLabel: cc.EditBox = null;

    @property(cc.Label)
    mrslLabel: cc.Label = null;

    @property(cc.Label)
    kmgsLabel: cc.Label = null;

    @property(cc.Button)
    mrxdBtn: cc.Button = null;

    curData = null;

    kyzc = null;

    kmsl = null;

    cursl = null;

    @property([cc.Button])
    AllBtnNode: cc.Button[] = [];

    @property(cc.Node)
    wtcdBtn: cc.Node = null;

    onShow(data) {

        this.wtcdBtn.active = false;

        this.AllBtnNode.forEach(el => {
            el.interactable = true;
            el.enableAutoGrayEffect = false;
        })

        if (!data) {
            this.priceLabel.string = '0';
        }
        else {
            this.curData = data;
            this.nameLabel.string = this.curData.name;

            let code = this.curData.code + '';
            if (code.length >= 7) {
                code = code.slice(1);
            }

            this.codeLabel.string = code;

            this.priceLabel.string = ComUtils.changeTwoDecimal(this.curData.price) + '';
        }

        this.mrslLabel.string = '0';


        if (GameCfg.GameType == pb.GameType.MoNiChaoGu) {

            this.kyzc = GameData.mncgDataList.account;

            if (GameData.mncgDataList.orderList && GameData.mncgDataList.orderList.items) {

                GameData.mncgDataList.orderList.items.forEach(el => {

                    if (el.code == this.curData.code && el.type == pb.OrderType.AskLimit) {

                        this.AllBtnNode.forEach(el => {
                            el.interactable = false;
                            el.enableAutoGrayEffect = true;
                        })
                        this.wtcdBtn.active = true;

                        this.mrslLabel.string = el.volume
                        // this.node.active = false;
                        // GlobalEvent.emit(EventCfg.OPENMNCDLAYER);

                    }

                });
            }
        }

        else if (GameCfg.GameType == pb.GameType.ChaoGuDaSai) {

            GameData.cgdsStateList.forEach(el => {

                if (el.id == GameData.SpStockData.id) {

                    this.kyzc = el.state.account;

                    if (el.state.orderList && el.state.orderList.items) {

                        el.state.orderList.items.forEach(el1 => {

                            if (el1.code == this.curData.code && el1.type == pb.OrderType.AskLimit) {
                                // this.node.active = false;
                                // GlobalEvent.emit(EventCfg.OPENMNCDLAYER);

                                this.AllBtnNode.forEach(el => {
                                    el.interactable = false;
                                    el.enableAutoGrayEffect = true;
                                })

                                this.wtcdBtn.active = true;
                                this.mrslLabel.string = el1.volume;
                            }

                        });
                    }
                }
            })
        }

        if (!this.kyzc) {
            this.kmgsLabel.string = '0';
            this.kmsl = 0;
        }
        else {
            let num = parseInt(this.kyzc / 100 / this.curData.price + '');
            this.kmsl = num * 100;
            this.kmgsLabel.string = this.kmsl + '';
        }

        if (!this.kyzc || !this.kmsl) {
            this.mrxdBtn.interactable = false;
            this.mrxdBtn.enableAutoGrayEffect = true;
        }
        else {
            this.mrxdBtn.interactable = true;
            this.mrxdBtn.enableAutoGrayEffect = false;
        }
    }

    onEnable() {
        this.cursl = 0;
    }

    isZhangTing(price) {

        let code = this.curData.code + '';
        if (code.length >= 7) {
            code = code.slice(1);
        }
        let p = 1.1;
        if (code.slice(0, 2) == '30' || code.slice(0, 3) == '688') {
            p = 1.2;
        }

        if ((this.curData.close * p) < price) {
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '???????????????????????????????????????');
            return false;
        }
        return true;
    }

    isDieTing(price) {
        let code = this.curData.code + '';
        if (code.length >= 7) {
            code = code.slice(1);
        }
        let p = 0.8;
        // if (code.slice(0, 2) == '30' || code.slice(0, 3) == '688') {
        //     p = 1.2;
        // }

        if ((this.curData.close * p) > price) {
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????????????????????????????');
            return false;
        }
        return true;
    }

    onBtnClick(event) {
        let name = event.target.name;
        if (name == 'closeBtn') {
            this.node.active = false;
        }
        //??????????????????  ???
        else if (name == 'sp_znxg_sub') {
            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }




            this.curData.price -= 0.01;
            this.priceLabel.string = ComUtils.changeTwoDecimal(this.curData.price) + '';
        }

        else if (name == 'sp_znxg_add') {
            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }
            this.curData.price += 0.01;
            this.priceLabel.string = ComUtils.changeTwoDecimal(this.curData.price) + '';
        }

        //????????????
        else if (name == 'sp_znxg_subd') {

            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }

            if (this.cursl > this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }

            if (!this.cursl) {
                return;
            }
            this.cursl -= 100;
            this.mrslLabel.string = this.cursl + '';
        }

        else if (name == 'sp_znxg_addd') {
            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }

            if (this.cursl + 100 > this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }

            this.cursl += 100;
            this.mrslLabel.string = this.cursl + '';

        }
        //??????
        else if (name == 'sp_znxg_qc') {
            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }
            this.cursl = this.kmsl;
            this.mrslLabel.string = this.cursl + '';
        }
        //1/2
        else if (name == 'sp_znxg_fc1') {
            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }
            if (!this.kmsl) { return };
            let num = parseInt(this.kmsl / 100 / 2 + '') * 100;
            this.cursl = num;
            this.mrslLabel.string = this.cursl + '';

        }
        //1/3
        else if (name == 'sp_znxg_fc2') {
            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }
            if (!this.kmsl) { return };
            let num = parseInt(this.kmsl / 100 / 3 + '') * 100;
            this.cursl = num;
            this.mrslLabel.string = this.cursl + '';
        }
        //1/4
        else if (name == 'sp_znxg_fc3') {
            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }
            if (!this.kmsl) { return };
            let num = parseInt(this.kmsl / 100 / 4 + '') * 100;
            this.cursl = num;
            this.mrslLabel.string = this.cursl + '';
        }
        //????????????
        else if (name == 'sp_znxg_mrxd') {

            this.curData.price = parseFloat(this.priceLabel.string);

            if (!this.kmsl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');
                return;
            }
            if (!this.cursl) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????????????????');
                return;
            }
            GlobalEvent.emit(EventCfg.SHOWLOADING);

            let id = 0
            if (GameData.SpStockData && GameData.SpStockData.id) {
                id = GameData.SpStockData.id;
            }
            this.curData.price = ComUtils.changeTwoDecimal(this.curData.price);

            if (!this.isZhangTing(this.curData.price)) {
                return;
            }


            let info = {
                code: this.curData.code,
                type: pb.OrderType.AskLimit,
                price: this.curData.price,
                volume: this.cursl,
                uid: GameData.userID,
                amount: this.curData.price * this.cursl,
                id: id,
            }

           // let message = pb.CmdStockOrder.create(info);
            let buff = pb.CmdStockOrder.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_Game_Order, buff, (res) => {
                console.log('??????????????????:' + JSON.stringify(res));
                GlobalEvent.emit(EventCfg.HIDELOADING);
                if (res.orderId) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????!');
                    //   GameData.nodeMaps.set(this.curData.code, res.node);

                    this.node.active = false;
                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.result.err);
                }
            })

        }

        else if (name == 'xl_btn_cxwt') {
            let id = 0, hisList = [];
            if (GameData.SpStockData && GameData.SpStockData.id) {
                id = GameData.SpStockData.id;
            }

            if (GameCfg.GameType == pb.GameType.MoNiChaoGu) {
                hisList = GameData.mncgDataList.orderList.items;
            }

            else if (GameCfg.GameType == pb.GameType.ChaoGuDaSai) {
                GameData.cgdsStateList.forEach(el => {
                    if (el.id == GameData.SpStockData.id) {
                        if (el.state.orderList && el.state.orderList.items) {
                            hisList = el.state.orderList.items;
                        }
                    }
                })
            }

            console.log(JSON.stringify(hisList));

            let node, type, orderId;

            hisList.forEach(el => {
                if (el.code == this.curData.code && el.type == pb.OrderType.AskLimit) {
                    node = el.node;
                    type = el.type;
                    orderId = el.orderId;
                }
            })

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            let info = {
                orderId: orderId,
                type: type,
                code: this.curData.code,
                uid: GameData.userID,
                id: id,
                node: node,
            }

            if (info.type == pb.OrderType.AskLimit) {
                info.type = pb.OrderType.AskLimit_Cancel;
            }
            else if (info.type == pb.OrderType.BidLimit) {
                info.type = pb.OrderType.BidLimit_Cancel;
            }

            console.log(JSON.stringify(info));

         //   let message = pb.CmdStockOrderCancel.create(info);
            let buff = pb.CmdStockOrderCancel.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_Game_OrderCancel, buff, (res) => {
                GlobalEvent.emit(EventCfg.HIDELOADING);
                console.log('??????????????????' + JSON.stringify(res));
                if (res.err) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err);
                }
                else {
                    this.node.active = false;
                }
            })

        }

    }

}
