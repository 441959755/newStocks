
import LLWConfing from "../../../common/config/LLWConfing";
import LLWSDK from "../../../common/sdk/LLWSDK";
import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShopControl extends cc.Component {

    @property(cc.Node)
    brickMall: cc.Node = null;

    @property(cc.Node)
    goldMall: cc.Node = null;

    @property(cc.Node)
    lotteryMall: cc.Node = null;

    @property([cc.Toggle])
    toggles: cc.Toggle[] = [];

    @property([cc.Label])
    infoLabels: cc.Label[] = [];

    diamondCfg = null;

    goldCfg = null;

    couponCfg = null;

    @property([cc.Node])
    diamondItems: cc.Node[] = [];

    @property([cc.Node])
    goldItems: cc.Node[] = [];

    @property([cc.Node])
    couponItems: cc.Node[] = [];

    @property(cc.Sprite)
    headImg: cc.Sprite = null;

    @property(cc.EditBox)
    editBox: cc.EditBox = null;

    @property(cc.Node)
    depict: cc.Node = null;

    @property(cc.Node)
    succeed: cc.Node = null;

    @property(cc.Node)
    selcect: cc.Node = null;

    _curType = 0;

    @property(cc.Node)
    vipNode: cc.Node = null;

    onLoad() {
        GlobalEvent.on(EventCfg.GOLDCHANGE, this.initPlayerInfo.bind(this), this);
        GlobalEvent.on(EventCfg.DIAMONDCHANGE, this.initPlayerInfo.bind(this), this);
        GlobalEvent.on(EventCfg.LOTTERYCHANGE, this.initPlayerInfo.bind(this), this);
        GlobalEvent.on(EventCfg.HEADIMGCHANGE, this.initPlayerInfo.bind(this), this);
        GlobalEvent.on(EventCfg.LEVELCHANGE, this.initPlayerInfo.bind(this), this);
        GlobalEvent.on(EventCfg.NAMECHANGE, this.initPlayerInfo.bind(this), this);
        GlobalEvent.on(EventCfg.VIPCHANGE, this.initPlayerInfo.bind(this), this);

        this.editBox.node.on('editing-did-ended', edit => {
            let str = parseInt(edit.string);
            if (this.isPhoneNumber(str)) {

            }
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????????????????????????????');
                this.editBox.string = '';
                return;
            }
        }, this);
    }

    onDestroy() {
        GlobalEvent.off(EventCfg.GOLDCHANGE);
        GlobalEvent.off(EventCfg.DIAMONDCHANGE);
        GlobalEvent.off(EventCfg.LOTTERYCHANGE);
        GlobalEvent.off(EventCfg.HEADIMGCHANGE);
        GlobalEvent.off(EventCfg.LEVELCHANGE);
        GlobalEvent.off(EventCfg.NAMECHANGE);
        GlobalEvent.off(EventCfg.VIPCHANGE);
    }

    start() {
        // this.brickMall.active = true;
        // this.goldMall.active = false;
        // this.lotteryMall.active = false;
        // this.toggles[0].isChecked = true;
        // this.toggles[1].isChecked = false;
        // this.toggles[2].isChecked = false;
        // this._curType = 0;
        this.initPlayerInfo();
        this.init();
    }

    onShow(type) {
        if (type == 1) {
            this.brickMall.active = true;
            this.goldMall.active = false;
            this.lotteryMall.active = false;
            this.toggles[0].isChecked = true;
            this.toggles[1].isChecked = false;
            this.toggles[2].isChecked = false;
            this._curType = 0;
        }
        else {
            this.brickMall.active = false;
            this.goldMall.active = true;
            this.lotteryMall.active = false;
            this.toggles[1].isChecked = true;
            this.toggles[0].isChecked = false;
            this.toggles[2].isChecked = false;
            this._curType = 1;
        }
    }

    getBindMobild() {
        return GameData.gameData.mobile;
    }

    init() {
        this.diamondCfg = GameData.gameConf.item_diamond;
        this.couponCfg = GameData.gameConf.item_coupon;
        this.goldCfg = GameData.gameConf.item_gold;

        this.diamondCfg.forEach((el, index) => {
            this.diamondItems[index].getChildByName('label').getComponent(cc.Label).string = el.title;
            this.diamondItems[index].getChildByName('bank_pricebg').getChildByName('New Label').
                getComponent(cc.Label).string = Math.abs(el.costs[0].v) + '???';
        });

        this.couponCfg.forEach((el, index) => {
            this.couponItems[index] && (this.couponItems[index].getChildByName('label').getComponent(cc.Label).string = el.title,
                this.couponItems[index].getChildByName('bank_pricebg').getChildByName('node').getChildByName('la').
                    getComponent(cc.Label).string = Math.abs(el.costs[0].v) + ''
            )
        });

        this.goldCfg.forEach((el, index) => {
            this.goldItems[index].getChildByName('label').getComponent(cc.Label).string = el.title;
            this.goldItems[index].getChildByName('bank_pricebg').getChildByName('node').getChildByName('la').
                getComponent(cc.Label).string = Math.abs(el.costs[0].v) + '';
        });

        this.editBox.string = this.getBindMobild() || '';
    }

    initPlayerInfo() {

        this.infoLabels[0].string = '?????????' + GameData.userName;
        this.infoLabels[1].string = 'LV  ???' + GameData.properties[pb.GamePropertyId.Level];
        this.infoLabels[2].string = 'ID  ???' + GameData.userID;
        this.infoLabels[4].string = '?????????' + GameData.properties[pb.GamePropertyId.Gold];
        this.infoLabels[3].string = '?????????' + GameData.properties[pb.GamePropertyId.Diamond];
        this.infoLabels[5].string = '?????????' + GameData.properties[pb.GamePropertyId.Coupon];
        this.headImg.spriteFrame = GameData.headImg || GameData.imgs['0'];

        this.vipNode.active = GameData.vipStatus;
    }


    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'black') {
            this.node.active = false;
        }

        else if (name == 'bank_leftbt_jkf') {
            console.log('????????????');

            LLWSDK.getSDK().copyborad('ylcwy888');

            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????');

        }

        //??????????????????
        else if (name == 'bank_bdsj') {

            if (this.isPhoneNumber(this.editBox.string)) {

                let info = {
                    mobile: this.editBox.string,
                }

                // let CmdMobileBind = pb.CmdMobileBind;
                // let message = CmdMobileBind.create(info);
                let buff = pb.CmdMobileBind.encode(info).finish();

                (<any>window).socket.send(pb.MessageId.Req_Hall_MobileBind, buff, (res) => {
                    console.log('?????????????????????' + JSON.stringify(res));
                    if (!res.err) {
                        GameData.gameData.mobile = this.editBox.string;
                    }
                    else {
                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '???????????????????????????');
                    }

                })
            }
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '???????????????????????????');
            }
        }

        else if (name == 'bank_pricebg') {
            let index = parseInt(curdata);
            this.onBankPrice(index);

        }

        else if (name == 'bank_block') {
            let index = parseInt(curdata);
            this.depict.active = true;
            this.depict.getComponent('Shopdepict').onShow(this._curType, index, this.onBankPrice.bind(this));
        }

    }

    onBankPrice(index) {
        //????????????
        if (this._curType == 0) {
            this.selcect.active = true;
            this.selcect.getComponent('ShopSelect').onShow(index, this.diamondCfg[index].id, this.Orders.bind(this));
            //  this.Orders(index, this.diamondCfg[index].id);
        }
        //????????????
        else if (this._curType == 1) {
            if (GameData.properties[pb.GamePropertyId.Diamond] > Math.abs(this.goldCfg[index].costs[0].v)) {

                this.Orders(index, this.goldCfg[index].id);
            }
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????');
            }

        }
        //??????
        else if (this._curType == 2) {
            if (this.getBindMobild()) {
                if (GameData.properties[pb.GamePropertyId.Coupon] > Math.abs(this.couponCfg[index].costs[0].v)) {
                    this.Orders(index, this.couponCfg[index].id);
                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????');
                }
            }
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????????????????');
            }
        }
    }


    Orders(index, id) {

        let obj = {
            itemId: id,
            count: 1,
            // from: pb.AppFrom.Android_001
            from: LLWConfing.AppFrom,
        }

        console.log(JSON.stringify(obj));

        // let ItemOrder = pb.ItemOrder;
        // let message = ItemOrder.create(obj);
        let buff = pb.ItemOrder.encode(obj).finish();

        (<any>window).socket.send(pb.MessageId.Req_Hall_ShopOrder, buff, (res) => {
            console.log('?????????????????????' + JSON.stringify(res));
            if (!res.result.err) {

                if (this._curType) {
                    this.succeed.active = true;
                    this.succeed.getComponent('ShopSucced').onShow(this._curType, index);
                }

                else {
                    // { "result": { }, "orderId": "20211108095453344", "wxXml": "<xml>\n\t<appid>wx2f88189155732f56</appid>\n\t<nonce_str>8lkxygFE</nonce_str>\n\t<package>Sign=WXPay</package>\n\t<partnerid>1434220902</partnerid>\n\t<prepayid>wx08095453853690c04651fcb5f8e26d0000</prepayid>\n\t<timestamp>1636336493</timestamp>\n\t<sign>46a411f32aaa32ad7b31b93b8582cb06</sign>\n</xml>", "payType": "WechatPay" }
                    let wxXml = res.wxXml, xmlDoc;
                    let orderId = res.orderId;

                    if (window.DOMParser) {
                        let parser = new DOMParser();
                        xmlDoc = parser.parseFromString(wxXml, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(wxXml);
                    }

                    let appid, nonce_str, partnerid, prepayid, timestamp, sign
                    appid = xmlDoc.getElementsByTagName("appid")[0].childNodes[0].nodeValue + '';
                    nonce_str = xmlDoc.getElementsByTagName("nonce_str")[0].childNodes[0].nodeValue + '';
                    partnerid = xmlDoc.getElementsByTagName("partnerid")[0].childNodes[0].nodeValue + '';
                    prepayid = xmlDoc.getElementsByTagName("prepayid")[0].childNodes[0].nodeValue + '';
                    timestamp = xmlDoc.getElementsByTagName("timestamp")[0].childNodes[0].nodeValue + '';
                    sign = xmlDoc.getElementsByTagName("sign")[0].childNodes[0].nodeValue + '';

                    LLWSDK.getSDK().callWXPayToJava(appid, partnerid, prepayid, nonce_str, timestamp, sign);

                }
            }
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err);
            }

        })
    }

    onToggleClick(event, curdata) {

        let name = event.node._name;
        if (name == 'toggle1') {
            this.brickMall.active = true;
            this.goldMall.active = false;
            this.lotteryMall.active = false;
            this._curType = 0;
        }
        else if (name == 'toggle2') {
            this.brickMall.active = false;
            this.goldMall.active = true;
            this.lotteryMall.active = false;
            this._curType = 1;

        }
        else if (name == 'toggle3') {
            this.brickMall.active = false;
            this.goldMall.active = false;
            this.lotteryMall.active = true;
            this._curType = 2;

        }
    }

    //??????????????????
    isPhoneNumber(tel) {
        var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
        return reg.test(tel);
    }
}
