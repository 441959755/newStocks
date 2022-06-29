
import { pb } from "../../../protos/proto";
import GameData from "../../../sctiprs/GameData";
import StockData from "../../../sctiprs/StockData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import List from "../../../sctiprs/utils/List";
import LoadUtils from "../../../sctiprs/utils/LoadUtils";
import PopupManager from "../../../sctiprs/utils/PopupManager";
import ZnzgControl from "./ZnzgControl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgHandle extends cc.Component {

    @property(cc.EditBox)
    edit: cc.EditBox = null;

    @property(cc.Node)
    tipsNode: cc.Node = null;

    @property(List)
    listv: List = null;

    items = null;

    protected onLoad(): void {

        this.edit.node.on('editing-did-ended', (edit) => {
            this.items = null;
            let str = edit.string;
            if (str == '') { return }
            str = (str.split(' '))[0]
            let datas = GameData.stockList;
            let flag = false, tt = [];
            for (let i = 0; i < datas.length; i++) {
                let arr = datas[i].split('|');
                let str1 = arr[0];
                if (tt.length >= 100) {
                    break;
                }

                if (str1.indexOf(str) != -1) {
                    tt.push(datas[i]);
                    flag = true;
                }

                else if (arr[1] && arr[1].indexOf(str) != -1) {
                    tt.push(datas[i]);
                    flag = true;
                }
            }
            if (!flag) {
                edit.string = '';
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '没有找查到您要的股票');
            }
            else {
                let items = tt[0].split('|');
                let code = items[0] + '';
                if (code.length >= 7) {
                    code = code.slice(1);
                }
                this.edit.string = code + ' ' + items[1];
                this.items = items;
            }
        }, this);

        GlobalEvent.on('ZNZGITEMUPDATE', () => {
            this.listv.numItems = ZnzgControl.listData.length;
        }, this);

    }

    protected start(): void {
        ZnzgControl.searchNode = this.node;
        ZnzgControl.scoreNode = this.node.parent.children[1];
        ZnzgControl.otherNode = this.node.parent.children[2];

        StockData.setDrawColor();
    }

    protected onEnable(): void {

        this.items = null;
        if (ZnzgControl.listData.length <= 0) {
            this.tipsNode.active = true;
        }
        else {
            this.tipsNode.active = false;
        }

        setTimeout(() => {
            this.listv.numItems = ZnzgControl.listData.length;
            this.quoteSubscribe(true);
        }, 200);

    }

    onListRender(item, index) {
        item.getComponent('ZnzgItem').onShow(ZnzgControl.listData[index], index);
    }

    onBtnClick(event, data) {

        let name = event.target.name;

        if (name == 'zg_ljzg') {

            if (!this.items) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '您输入的信息有误，请输入正确的股票代码或股票名称。');
                return;
            }

            let code = this.items[0] + '';
            if (code.length >= 7) {
                code = code.slice(1);
            }

            if (!GameData.vipStatus) {
                PopupManager.LoadTipsBox('确认开始对 ' + this.items[1] + this.items[0] + ' 进行诊股（非VIP用户，每天仅限诊断1支股票）', () => {
                    let flag = false;

                    ZnzgControl.listData.forEach(el => {
                        if (el.code != code && el.time == new Date().toLocaleDateString()) {
                            flag = true;
                        }
                    })

                    if (flag) {
                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '今天次数已用完！');
                        return;
                    }
                    else {
                        this.getCodeData(code);
                    }
                })
            }
            else {
                this.getCodeData(code);
            }

        }
        else if (name == 'blackNode') {
            this.node.parent.parent.active = false;
        }
    }

    //订阅或取消时时行情
    quoteSubscribe(flag) {

        let info = {
            items: [{ code: '002667', flag: true }]
        }

        ZnzgControl.listData.forEach(el => {
            info.items.push({ code: el.code + '', flag: flag })
        })

        console.log('quoteSubscribe:' + JSON.stringify(info));

        let message = pb.CmdQuoteSubscribe.create(info);

        let buff = pb.CmdQuoteSubscribe.encode(message).finish();

        (<any>window).socket.send(pb.MessageId.Req_QuoteSubscribe, buff, info => {
            console.log('订阅：' + JSON.stringify(info));
        })
    }

    getCodeData(code) {

        let url = 'http://f10app.165566.com/';        // pcf10/pstk0003/sz;     //kcpcf10/{rptname}/{stockcode}.json';
        //科创股
        if (code.slice(0, 3) == '688') {
            url += 'kcpcf10';
        }
        //非科创股
        else {
            url += 'pcf10';
        }

        let str;
        //沪市
        if (code.slice(0, 2) == '60' || code.slice(0, 2) == '68') {
            str = 'sh' + code + '.json';
        }

        //深市
        else {
            str = 'sz' + code + '.json';
        }

        LoadUtils.loadRemote(url + '/pstk0003/' + str).then((ret) => {

            ZnzgControl.csrc_indu_name = ret.json[0].csrc_indu_name;

            let time = new Date().toLocaleDateString();

            ZnzgControl.listData = {
                name: ret.json[0].a_stocksname,
                code: ret.json[0].stockcode,
                csrc_indu_name: ret.json[0].csrc_indu_name,
                time: time,
                pri_biz: ret.json[0].pri_biz,
                type: ret.json[0].com_cls_code
            };

            this.listv.numItems = ZnzgControl.listData.length;

            if (ZnzgControl.listData.length <= 0) {
                this.tipsNode.active = true;
            }
            else {
                this.tipsNode.active = false;
            }

            ZnzgControl.searchCode = ret.json[0].stockcode;
            ZnzgControl.searchName = ret.json[0].a_stocksname;
            ZnzgControl.pri_biz = ret.json[0].pri_biz;

            ZnzgControl.type = ret.json[0].com_cls_code;
            ZnzgControl.searTime = time;

            this.quoteSubscribe(true)

            ZnzgControl.scoreNode.active = true;

        })
    }

    protected onDisable(): void {
        this.quoteSubscribe(false);
    }

    protected onDestroy(): void {
        GlobalEvent.off('ZNZGITEMUPDATE');
    }

}
