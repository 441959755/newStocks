
import LLWConfing from "../../../common/config/LLWConfing";
import LLWSDK from "../../../common/sdk/LLWSDK";

import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import LoadUtils from "../../../sctiprs/utils/LoadUtils";
import PopupManager from "../../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ActivityTheme extends cc.Component {

    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Sprite)
    btn: cc.Sprite = null;

    @property(cc.Label)
    tips: cc.Label = null;

    bgSp: cc.SpriteFrame = null;

    btnSp: cc.SpriteFrame = null;

    itemData = null;


    protected start(): void {

        let arrstr = ['炒股大赛', '闯关赛', '首充', '7天VIP活动', '7天VIP'];

        GameData.activityConf.forEach(el => {
            if (arrstr.indexOf(el.title) < 0) {
                this.itemData = el;
            }
        });

        if (!this.itemData) {
            this.node.active = false;
            return;
        }
        else {
            let bgurl = LLWConfing.LoginUrl + '/img/activity/' + this.itemData.id + '_bg.png';
            let btnUrl = LLWConfing.LoginUrl + '/img/activity/' + this.itemData.id + '_btn.png';

            Promise.all([LoadUtils.loadRemote(bgurl), LoadUtils.loadRemote(btnUrl)]).then((results) => {
                this.bgSp = new cc.SpriteFrame(results[0]);
                this.btnSp = new cc.SpriteFrame(results[1]);
                this.onShow();
            }, () => {
                this.node.active = false;
                return;
            })
        }
    }

    onShow() {
        this.bg.spriteFrame = this.bgSp;
        this.btn.spriteFrame = this.btnSp;
        let from = new Date(this.itemData.from * 1000);
        let to = new Date(this.itemData.to * 1000);
        let fromTime = from.getFullYear() + '年' + (from.getMonth() + 1) + '月' + from.getDate() + '日';
        let toTime = to.getFullYear() + '年' + (to.getMonth() + 1) + '月' + to.getDate() + '日';

        this.tips.string = fromTime + ' -- ' + toTime;
    }


    onBtnClick(event, curdata) {
        let name = event.target.name;
        switch (name) {
            case 'bg':
                this.node.active = false;
                break;
            case 'btnActive':
                this.shopVip(this.itemData.id);
                break;
            default:
                break;
        }
    }

    shopVip(id) {


        let obj = {
            itemId: id,
            count: 1,
            // from: pb.AppFrom.Android_001
            from: LLWConfing.AppFrom
        }

       // let message = pb.ItemOrder.create(obj);
        let buff = pb.ItemOrder.encode(obj).finish();
        (<any>window).socket.send(pb.MessageId.Req_Hall_ShopOrder, buff, (res) => {
            console.log('商城下购买应答' + JSON.stringify(res));
            if (!res.result.err) {
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
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err);
            }

        })
    }

    onDisable() {
        //PopupManager.arrPop.remove(7);
    }

}