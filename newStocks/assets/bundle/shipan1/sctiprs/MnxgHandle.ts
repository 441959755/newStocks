
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import List from "../../../sctiprs/utils/List";


const { ccclass, property } = cc._decorator;

@ccclass
export default class MnxgHandle extends cc.Component {

    @property(cc.Node)
    content1: cc.Node = null;

    @property(cc.Node)
    content2: cc.Node = null;

    @property(cc.Node)
    tipsNode: cc.Node = null;

    @property(cc.Node)
    item1: cc.Node = null;

    @property(cc.Node)
    item2: cc.Node = null;

    @property(cc.Label)
    zzcLa: cc.Label = null;

    @property(cc.Label)
    kczcLa: cc.Label = null;

    @property(cc.Label)
    cczcLa: cc.Label = null;

    @property(cc.Label)
    wtzcLa: cc.Label = null;

    @property(cc.Node)
    scorllNode: cc.Node = null;

    @property(cc.Node)
    scorllNode1: cc.Node = null;

    @property(cc.Node)
    sNode: cc.Node = null;

    @property(cc.Node)
    lNode: cc.Node = null;

    @property(cc.Node)
    dhzc: cc.Node = null;

    @property(cc.Label)
    title: cc.Label = null;

    _flag = true;

    @property(cc.Node)
    sp_topbtn_phb: cc.Node = null;

    _curArr: any = {};

    @property([cc.Toggle])
    toggle: cc.Toggle[] = [];

    positionList = [];

    selfStockList = [];

    @property(List)
    listV: List = null;

    @property(List)
    listV1: List = null;

    onEnable() {
        //添加删除
        GlobalEvent.on(EventCfg.ADDZXGP, this.onAddZx.bind(this), this);

        //跟新资产数据
        GlobalEvent.on(EventCfg.CHANGEMNCGACCOUNT, this.onUpdateMycgData.bind(this), this);
    }

    onUptateCCAsset(info) {

        let data = {
            account: 0,
            orderList: null,
            positionList: null,
        };

        data = GameData.mncgDataList;

        let wt = 0, cc = 0, kc = 0;
        kc = parseInt(data.account + '');

        if (data.orderList && data.orderList.items) {
            data.orderList.items.forEach(el => {
                if (el.state == pb.OrderState.Init) {
                    wt += el.volume * (el.price);
                }
            });
        }

        if (data.positionList && data.positionList.items) {

            data.positionList.items.forEach(el => {
                if (this._curArr[el.code + '']) {
                    cc += (el.volume * (this._curArr[el.code + ''].price));
                }
                else {
                    cc += (el.volume * (el.priceCost));
                }
            });
        }

        this.cczcLa.string = parseInt(cc + '') + '';

        let zzc = kc + cc + wt;

        this.zzcLa.string = parseInt(zzc + '') + '';
    }

    onShow(data?) {

        GameCfg.GameType = pb.GameType.MoNiChaoGu;
        this.dhzc.active = true;
        this.title.string = '模拟炒股';
        this.sp_topbtn_phb.active = false;
        this.tipsNode.active = false;
        let shen = 1399001;

        let lu = '1';

        //订阅时时行情
        GlobalEvent.on(EventCfg.SYNCQUOTEITEM, (data) => {

            if (data.code == shen) {
                this.onUpdateSLLabel(data, this.sNode);
            }

            else if (data.code == lu) {
                this.onUpdateSLLabel(data, this.lNode);
            }
            else {
                this._curArr[data.code + ''] = data;
                //        GlobalEvent.emit('UPDATEITEMDATA', data);
                this.onUptateCCAsset(data);
            }

        }, this);

        this.onAddZx();

        //初始资产数据
        this.onUpdateMycgData();

    }

    upDateAsset(data) {
        let arr = [], curGold = 0;

        arr = GameData.mncgDataList.positionList.items;

        arr.forEach(el => {
            if (el.code == data.code) {
                curGold = data.price * el.volume - el.volume * el.priceCost
            }
        })

        this.zzcLa.string = parseInt(parseInt(this.zzcLa.string) + curGold + '') + '';
        this.cczcLa.string = parseInt(parseInt(this.cczcLa.string) + curGold + '') + '';
    }

    onUpdateSLLabel(info, node) {

        let label1 = node.getChildByName('label1').getComponent(cc.Label);
        let label2 = node.getChildByName('label2').getComponent(cc.Label);

        label1.string = ComUtils.changeTwoDecimal(info.price);

        let zd = info.price - info.close;

        let zdf = zd / info.close * 100;

        if (zd > 0) {
            label1.node.color = new cc.Color().fromHEX('#e94343');
            label2.node.color = new cc.Color().fromHEX('#e94343');
        }

        else {
            label1.node.color = new cc.Color().fromHEX('#31a633');
            label2.node.color = new cc.Color().fromHEX('#31a633');
        }

        label2.string = ComUtils.changeTwoDecimal(zd) + '  ' + ComUtils.changeTwoDecimal(zdf) + '%';
    }

    CmdQuoteSubscribe(flag) {

        let arr1, arr2;

        arr1 = [];

        arr1 = GameData.selfStockList;

        arr2 = [];

        arr2 = GameData.mncgDataList.positionList.items;

        let arr = [];

        arr2.forEach(el => {
            if (el.code) {
                arr.push(el.code + '');
            }
        });

        arr1.forEach(el => {
            arr.push(el + '');
        });


        {
            let info = {
                items: [{ code: '1399001', flag: flag },
                { code: '1', flag: flag }],
            }

            arr.forEach(el => {
                info.items.push({ code: el, flag: flag })
            });

            console.log('arr' + JSON.stringify(arr));

            console.log('订阅：' + JSON.stringify(info));


          //  let message = pb.CmdQuoteSubscribe.create(info);

            let buff = pb.CmdQuoteSubscribe.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_QuoteSubscribe, buff, info => {
                console.log('订阅：' + JSON.stringify(info));
            })
        }
    }

    //资产数据
    onUpdateMycgData() {
        let data = {
            account: 0,
            orderList: null,
            positionList: null,
        };

        data = GameData.mncgDataList;

        this.onShowScorll2();

        this.kczcLa.string = parseInt(data.account + '') + '';

        let wt = 0, cc = 0;

        if (data.orderList && data.orderList.items) {
            data.orderList.items.forEach(el => {
                if (el.state == pb.OrderState.Init) {
                    wt += el.volume * el.price;
                }
            });
            this.wtzcLa.string = parseInt(wt + '') + '';
        }
        else {
            this.wtzcLa.string = '0';
        }
        if (data.positionList && data.positionList.items) {

            data.positionList.items.forEach(el => {

                cc += (el.volume * el.priceCost);
            });

            this.cczcLa.string = parseInt(cc + '') + '';
        }
        else {
            this.cczcLa.string = '0';
        }

        let zzc = parseInt(data.account + '') + parseInt(cc + '') + parseInt(wt + '');

        this.zzcLa.string = parseInt(zzc + '') + '';
    }

    onDisable() {
        //订阅
        this.CmdQuoteSubscribe(false);

        this.toggle[0].isChecked = true;
        this.toggle[1].isChecked = false;
        this.scorllNode.active = true;
        this.scorllNode1.active = false;
        GlobalEvent.off(EventCfg.ADDZXGP);
        GlobalEvent.off(EventCfg.SYNCQUOTEITEM);
        GlobalEvent.off(EventCfg.CMDQUOTITEM);
        GlobalEvent.off(EventCfg.CHANGEMNCGACCOUNT);
        GameData.SpStockData = null;
    }

    onBtnClick(event, data) {
        let name = event.target.name;

        if (name == 'blackbtn') {
            GameCfg.GameType = null;
            this.node.active = false;
        }

        //记录
        else if (name == 'sp_topbtn_jyjl') {
            GlobalEvent.emit(EventCfg.OPENMNHISLAYER, GameData.userID);
        }

        //添加自选
        else if (name == 'sp_topbtn_tianjia') {
            GlobalEvent.emit(EventCfg.OPENADDZXGPBOX);
        }

        //帮组
        else if (name == 'sp_topbtn_help') {
            PopupManager.openHelpLayer();
        }

        else if (name == 'sp_mncg_arrqh') {
            this._flag = !this._flag;
            this.sNode.active = this._flag;
            this.lNode.active = !this._flag;
        }

        //越换资产
        else if (name == 'sp_mncg_dhzc') {
            GlobalEvent.emit(EventCfg.OPENDHZCLLAYER);
        }

        else if (name == 'sp_topbtn_mr') {
            GlobalEvent.emit(EventCfg.OPENBUYBOX);
        }

        else if (name == 'sp_topbtn_mc') {
            GlobalEvent.emit(EventCfg.OPENSELLBOX);
        }

        else if (name == 'sp_topbtn_cd') {
            GlobalEvent.emit(EventCfg.OPENMNCDLAYER);
        }

        else if (name == 'sp_topbtn_phb') {
            GlobalEvent.emit(EventCfg.OPENCGDSPH, GameData.SpStockData);
        }

    }


    onToggleClick(event, data) {

        let name = event.node.name;

        if (name == 'toggle1') {
            this.scorllNode.active = true;
            this.scorllNode1.active = false;
            if (this.content1.children.length > 0) {
                this.tipsNode.active = false;
            }
            else {
                this.tipsNode.active = true;
            }
        }

        else if (name == 'toggle2') {
            this.scorllNode.active = false;
            this.scorllNode1.active = true;
            this.onShowScorll2();

            if (this.content2.children.length > 0) {
                this.tipsNode.active = false;
            }
            else {
                this.tipsNode.active = true;
            }
        }
    }

    onShowScorll2() {
        this.positionList = [];
        GameData.mncgDataList.positionList.items.forEach(e => {
            if (e.volume) {
                this.positionList.push(e);
            }
        });
        this.listV1.numItems = this.positionList.length;
    }

    onListRender1(item: cc.Node, idx: number) {
        let handle = item.getComponent('MnxgItem1');
        handle.onShow(this.positionList[idx].code, this.positionList[idx], this._curArr[this.positionList[idx].code + '']);
    }

    onAddZx() {

        this.selfStockList = GameData.selfStockList;

        if (this.selfStockList.length > 0) {
            this.listV.numItems = this.selfStockList.length;
            this.tipsNode.active = false;
        }

        else {
            this.tipsNode.active = true;
        }

        this.CmdQuoteSubscribe(true);
    }

    onListRender(item: cc.Node, idx: number) {
        let handle = item.getComponent('MnxgItem');
        handle.onShow(this.selfStockList[idx], this._curArr[this.selfStockList[idx] + '']);
    }

}
