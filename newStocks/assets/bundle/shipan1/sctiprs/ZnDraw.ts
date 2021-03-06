
import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import HttpMgr from "../../../sctiprs/HttpMgr";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";



const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnDraw extends cc.Component {

    code = null;

    name = null;

    gpDataMin = [];  //分时数据

    gpDataDay = []  //日k数据

    gpDataDay7 = []  //周k数据

    gpDataMonth = [] //月k数据

    ktype = null;

    @property([cc.Label])
    cLabel: cc.Label[] = [];

    @property([cc.Toggle])
    toggles: cc.Toggle[] = [];

    @property(cc.Label)
    uLabel: cc.Label = null;

    @property(cc.Node)
    drawBox: cc.Node = null;

    @property([cc.Node])
    BGrap: cc.Node[] = [];

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    mask: cc.Node = null;

    @property(cc.Node)
    addMark: cc.Node = null;

    yearEarnings = null;

    latestEarnings = null;

    @property(cc.Node)
    laNode: cc.Node = null;

    @property(cc.Node)
    mnLaNode: cc.Node = null;

    @property(cc.Node)
    zn_b_node: cc.Node = null;

    @property(cc.Node)
    mn_b_node: cc.Node = null;

    @property(cc.Node)
    cg_b_node: cc.Node = null;

    @property(cc.Node)
    box3: cc.Node = null;

    @property(cc.Node)
    t_grap_node: cc.Node = null;

    @property(cc.Node)
    d_grap_node: cc.Node = null;

    @property(cc.Node)
    ziXunBtn: cc.Node = null;

    @property(cc.Node)
    yiShouCang: cc.Node = null;

    EnterGameLayer: cc.Node = null;

    @property(cc.Node)
    btnSelect: cc.Node = null;

    @property(cc.Node)
    touchNode: cc.Node = null;

    @property(cc.Label)
    changeLabel: cc.Label = null;

    @property(cc.Node)
    drawcopy: cc.Node = null;

    @property(cc.Node)
    toggle2mask: cc.Node = null;

    ori_width = 0;
    now_width = 0;

    t_label = [];
    t_labelv = [];
    d_label = [];
    d_labelv = [];

    _timeStamp = null;

    _volume = 0;
    _amount = 0;

    onLoad() {

        //更新选择label信息
        GlobalEvent.on('onClickPosUpdateLabel', (index) => {

            if (index < GameCfg.beg_end[0] || index >= GameCfg.beg_end[1]) { return }

            let time, kp, sp, zg, zd, cjl, cje;

            let arr = [];
            if (this.ktype == pb.KType.Min) {
                if (this.gpDataMin.length <= 0 || !this.gpDataMin[index]) {
                    return;
                }
                //  index = this.gpDataMin.length - 1;
                let tt = this.gpDataMin[index].timestamp + '';
                let h, m;
                if (tt.length < 10) {
                    h = tt.slice(0, 2);
                    m = tt.slice(2, 4);
                } else {
                    let t = new Date(this.gpDataMin[index].timestamp * 1000);
                    h = t.getHours();
                    m = t.getMinutes();
                }

                let h1 = h >= 10 ? h : '0' + h;
                let m1 = m >= 10 ? m : '0' + m;
                time = h1 + ':' + m1;
                arr = this.gpDataMin;


                kp = ComUtils.changeTwoDecimal(arr[index].open);
                cjl = ComUtils.numberConvertUnit(parseInt(arr[index].volume / 100 + '')) + '手';
                cje = ComUtils.numberConvertUnit(arr[index].amount);

                let jg = ComUtils.changeTwoDecimal(this.gpDataMin[index].amount / this.gpDataMin[index].volume);
                zd = ComUtils.changeTwoDecimal(arr[index].price - arr[index].close);
                let zdf = ComUtils.changeTwoDecimal(zd / arr[index].close * 100);

                this.uLabel.string = time + '    ' + '价格： ' + (kp) + '    ' + '均价：' + jg + '    ' + '涨跌额：' + zd + '    ' + '涨跌幅：' + zdf + '%    ' + '成交量：' + cjl + '    ' + '成交额：' + cje;
                return;
            }
            else if (this.ktype == pb.KType.Day) {
                if (this.gpDataDay.length <= 0 || !this.gpDataDay[index]) {
                    return;
                }
                time = TimeUtils.formatTime(this.gpDataDay[index].timestamp);
                arr = this.gpDataDay;
            }
            else if (this.ktype == pb.KType.Day7) {
                if (this.gpDataDay7.length <= 0 || !this.gpDataDay7[index]) {
                    return;
                }
                time = TimeUtils.formatTime(this.gpDataDay7[index].timestamp);
                arr = this.gpDataDay7;
            }
            else {
                if (this.gpDataMonth.length <= 0 || !this.gpDataMonth[index]) {
                    return;
                }
                time = TimeUtils.formatTime(this.gpDataMonth[index].timestamp);
                arr = this.gpDataMonth;
            }
            kp = ComUtils.changeTwoDecimal(arr[index].open);
            sp = ComUtils.changeTwoDecimal(arr[index].close);
            zg = ComUtils.changeTwoDecimal(arr[index].high);
            zd = ComUtils.changeTwoDecimal(arr[index].low);

            cjl = ComUtils.numberConvertUnit(parseInt(arr[index].volume / 100 + '')) + '手';
            cje = ComUtils.numberConvertUnit(arr[index].amount);

            this.uLabel.string = time + '    ' + '开盘：' + (kp) + '    ' + '收盘：' + sp + '    ' + '最高：' + zg + '    ' + '最低：' + zd + '    ' + '成交量：' + cjl + '    ' + '成交额：' + cje;
        }, this);


        GlobalEvent.on('selectBtn', this.selectBtn.bind(this), this);
    }

    start() {
        //找到更新买1...卖1...label跟新
        this.box3.children.forEach(e => {
            if (e.name == 'node2' || e.name == 'node3') {
                e.children.forEach(el => {
                    if (el.name == 't_label') {
                        this.t_label.push(el.getComponent(cc.Label));

                    }

                    else if (el.name == 't_label1') {
                        this.t_labelv.push(el.getComponent(cc.Label));
                    }

                    else if (el.name == 'd_label') {
                        this.d_label.push(el.getComponent(cc.Label));
                    }

                    else if (el.name == 'd_label1') {
                        this.d_labelv.push(el.getComponent(cc.Label));
                    }
                })
            }
        })
    }

    //不同模式UI样式
    onUIShow() {
        if (GameCfg.GameType == pb.GameType.ChaoGuDaSai) {
            this.zn_b_node.active = false;
            this.mn_b_node.active = false;
            this.cg_b_node.active = true;
            this.addMark.active = false;
            this.laNode.active = false;
            this.mnLaNode.active = true;

            this.toggles[1].node.active = false;
            if (this.toggles[0].isChecked) {
                this.box3.active = true;
                this.t_grap_node.width = this.now_width;
                this.d_grap_node.width = this.now_width;
            }
            else {
                this.box3.active = false;
                this.t_grap_node.width = this.ori_width;
                this.d_grap_node.width = this.ori_width;
            }
        }
        //模拟选股
        else if (GameCfg.GameType == pb.GameType.MoNiChaoGu) {

            this.mn_b_node.active = true;
            this.zn_b_node.active = false;
            this.cg_b_node.active = false;
            this.toggles[1].node.active = true;
            if (this.toggles[0].isChecked) {
                this.box3.active = true;
                this.t_grap_node.width = this.now_width;
                this.d_grap_node.width = this.now_width;
                this.addMark.opacity = 0;
                this.laNode.active = false;
                this.mnLaNode.active = true;
            }
            else {
                if (this.toggles[1].isChecked) {
                    this.addMark.opacity = 255;
                    this.laNode.active = true;
                    this.mnLaNode.active = false;
                } else {
                    this.laNode.active = false;
                    this.mnLaNode.active = true;
                    this.addMark.opacity = 0;
                }
                this.box3.active = false;
                this.t_grap_node.width = this.ori_width;
                this.d_grap_node.width = this.ori_width;
            }
        }
        //智能选股
        else if (GameCfg.GameType == 'ZNXG') {
            this.toggles[1].node.active = true;
            this.cg_b_node.active = false;
            this.zn_b_node.active = true;
            this.mn_b_node.active = false;

            if (this.toggles[1].isChecked) {
                this.laNode.active = true;
                this.mnLaNode.active = false;
                this.addMark.opacity = 255;
            }
            else {
                this.addMark.opacity = 0;
                this.laNode.active = false;
                this.mnLaNode.active = false;
            }
            this.box3.active = false;
            this.t_grap_node.width = this.ori_width;
            this.d_grap_node.width = this.ori_width;
        }
    }

    onSyncQuotation(data) {
        if (!this.node.active) { return }
        //同步行情
        console.log('同步行情');
        if (data.code == this.code) {
            //同步时 把以前的数据清掉

            if (!this._timeStamp) {
                this._timeStamp = (data.timestamp + '').slice(2, 4);

                let le = this.gpDataMin.length;
                if (le > 0) {
                    this._amount = data.amount;
                    this._volume = data.volume;
                    this.gpDataMin.forEach(el => {
                        data.amount -= (el.amount)
                        data.volume -= (el.volume)
                    })
                }
                else if (le == 0) {
                    this._amount = data.amount;
                    this._volume = data.volume;
                }

                this.gpDataMin.push(data);
            }
            else if (this._timeStamp == ((data.timestamp + '').slice(2, 4))) {
                let le = this.gpDataMin.length;
                data.amount = (data.amount - this._amount)
                data.volume = (data.volume - this._volume)
                this.gpDataMin[le - 1] = data;

            }
            else if (this._timeStamp != ((data.timestamp + '').slice(2, 4))) {
                this._timeStamp = (data.timestamp + '').slice(2, 4);
                let a = data.amount;
                let v = data.volume;
                data.amount = (data.amount - this._amount)
                data.volume = (data.volume - this._volume)
                this.gpDataMin.push(data);
                this._amount = a;
                this._volume = v;
            }

            if (this.ktype == pb.KType.Min) {
                this.setBoxLabel(data);
                this.setCurLabelData();
            }

            this.onShowCgData();
        }
    }

    onEnable() {

        //保留绘制宽度
        this.ori_width = this.drawcopy.width;
        this.now_width = this.drawcopy.width - this.box3.width - 10;

        GlobalEvent.on(EventCfg.SYNCQUOTEITEM, this.onSyncQuotation.bind(this), this);

        if (GameCfg.GameType == pb.GameType.MoNiChaoGu && !GameData.vipStatus) {
            this.toggle2mask.active = true;
        }
        else {
            this.toggle2mask.active = false;
        }
    }

    //当前持股数据
    onShowCgData() {
        let price;

        if (!this.gpDataMin[this.gpDataMin.length - 1]) { return }

        price = this.gpDataMin[this.gpDataMin.length - 1].price;

        let label1 = this.mnLaNode.children[0].getComponent(cc.Label);
        let label2 = this.mnLaNode.children[1].getComponent(cc.Label);
        let label3 = this.mnLaNode.children[2].getComponent(cc.Label);
        let label4 = this.mnLaNode.children[3].getComponent(cc.Label);
        let label5 = this.mnLaNode.children[4].getComponent(cc.Label);

        let cjl = 0, mrj = 0, zj = 0, zd = 0, sy = 0;

        if (GameCfg.GameType == pb.GameType.MoNiChaoGu) {

            if (GameData.mncgDataList.positionList && GameData.mncgDataList.positionList.items) {
                GameData.mncgDataList.positionList.items.forEach(el => {
                    if (el.code == this.code) {
                        cjl = el.volume;
                        mrj = el.priceCost;
                        zj = el.volume * el.priceCost;
                        zd = price - el.priceCost;
                        sy = (price - el.priceCost) * el.volume;
                    }
                })
            }
        }
        else if (GameCfg.GameType == pb.GameType.ChaoGuDaSai) {
            GameData.cgdsStateList.forEach(el => {
                if (el.state.positionList && el.state.positionList.items) {
                    el.state.positionList.items.forEach(element => {
                        if (element.code == this.code) {
                            cjl = element.volume;
                            mrj = element.priceCost;
                            zj = element.volume * element.priceCost;
                            zd = price - element.priceCost;
                            sy = (price - element.priceCost) * element.volume;
                        }

                    });
                }
            })
        }

        label1.string = '持股量：' + parseInt(cjl + '');
        label2.string = '买入均价：' + ComUtils.changeTwoDecimal(mrj);
        label3.string = '买入总价：' + ComUtils.changeTwoDecimal(zj);
        label4.string = '涨跌：' + ComUtils.changeTwoDecimal(zd);
        label5.string = '收益：' + ComUtils.changeTwoDecimal(sy);
    }

    // 更新买1...卖1...label跟新
    setBoxLabel(info) {
        let zs = this.gpDataDay[this.gpDataDay.length - 1].close;
        this.t_label.forEach((el, index) => {

            this.d_label[index].string = ComUtils.changeTwoDecimal(info.ask5Price[index]);

            if (info.bid5Price[index] > zs) {
                this.d_label[index].node.color = new cc.Color().fromHEX('#e94343');
            }
            else if (info.bid5Price[index] < zs) {
                this.d_label[index].node.color = new cc.Color().fromHEX('#31a633');
            }
            else {
                this.d_label[index].node.color = cc.Color.WHITE;
            }

            this.d_labelv[index].string = parseInt(info.ask5Volume[index] / 100 + '');

            el.string = ComUtils.changeTwoDecimal(info.bid5Price[index]);

            if (info.ask5Price[index] > zs) {
                el.node.color = new cc.Color().fromHEX('#e94343');
            }

            else if (info.ask5Price[index] < zs) {
                el.node.color = new cc.Color().fromHEX('#31a633');
            }

            else {
                el.node.color = cc.Color.WHITE;
            }

            this.t_labelv[index].string = parseInt(info.bid5Volume[index] / 100 + '');
        })
    }

    //每次打开显示
    onShow(code, str) {

        GameCfg.GAMEFUPAN = true;

        this.laNode.active = false;
        this.addMark.active = true;
        this.addMark.opacity = 0;

        this.mask.active = false;

        this.BGrap[0].active = true;
        this.BGrap[1].active = true;
        this.BGrap[2].active = false;
        this.BGrap[3].active = false;
        this.BGrap[4].active = false;

        this.code = code;


        this.initData();

        if (GameCfg.GameType == pb.GameType.MoNiChaoGu || GameCfg.GameType == pb.GameType.ChaoGuDaSai) {

        } else {
            //订阅
            this.CmdQuoteSubscribe(true);
        }

        this.getGPDataDay();


        if (GameCfg.GameType == 'ZNXG') {

            if (GameData.aiStockList.indexOf(parseInt(this.code)) != -1) {
                this.yiShouCang.active = true;
                this.ziXunBtn.active = true;
            }
            else {
                this.yiShouCang.active = false;
                this.ziXunBtn.active = false;
            }
            this.toggles[1].isChecked = true;
            this.toggles[0].isChecked = false;
            this.toggles[2].isChecked = false;
            this.toggles[3].isChecked = false;
            this.toggles[4].isChecked = false;
            this.btnSelect.active = true;
        }
        else {
            this.toggles[0].isChecked = true;
            this.toggles[2].isChecked = false;
            this.toggles[3].isChecked = false;
            this.toggles[4].isChecked = false;
            this.toggles[1].isChecked = false;
            this.btnSelect.active = false;
        }
    }

    //获取AI买卖操作
    onQueryAISignal() {

        let me = {
            code: this.code,
        }

      //  let message1 = pb.CmdQueryAiSignal.create(me);
        let buff1 = pb.CmdQueryAiSignal.encode(me).finish();

        (<any>window).socket.send(pb.MessageId.Req_QueryAiSignal, buff1, (res) => {

            console.log('AI买卖信号：' + JSON.stringify(res));
            let label3 = this.laNode.getChildByName('label3').getComponent(cc.Label);
            let label1 = this.laNode.getChildByName('label1').getComponent(cc.Label);
            let label2 = this.laNode.getChildByName('label2').getComponent(cc.Label);
            let arr = [];
            let price;
            let signals = res.signals;

            signals.forEach((el, index) => {
                for (let i = 0; i < this.gpDataDay.length; i++) {
                    if (el.ts == this.gpDataDay[i].timestamp) {
                        //买
                        if (el.flag < 0) {
                            GlobalEvent.emit(EventCfg.ONADDMARK, { type: 2, index: i + 1 });
                        }
                        else if (el.flag > 0) {
                            GlobalEvent.emit(EventCfg.ONADDMARK, { type: 3, index: i + 1 });
                        }
                    }
                }

                if (index % 2 != 0) {
                    let rate = (el.price - price) / price * 100;
                    arr.push(rate);
                }
                else {
                    price = el.price;
                }
            });

            let num = 0;
            arr.forEach(el => {
                num += el;
            })

            let num1 = 0;
            if (arr[arr.length - 1]) {
                num1 = arr[arr.length - 1];
            }

            if (signals.length <= 0) {
                label1.string = '近一年收益：0.00%';
                label2.string = '最近的收益：0.00%';
                label3.string = '今日决策：' + '持币观望';
            }
            else {
                label1.string = '近一年收益：' + ComUtils.changeTwoDecimal(num) + '%';
                label2.string = '最近的收益：' + ComUtils.changeTwoDecimal(num1) + '%';

                if (this.gpDataDay[this.gpDataDay.length - 1].timestamp - signals[signals.length - 1].ts <= 1) {
                    if (signals[signals.length - 1].flag < 0) {
                        label3.string = '今日决策：' + '建议买入';
                    }
                    else {
                        label3.string = '今日决策：' + '建议卖出';
                    }
                }
                else {
                    if (signals[signals.length - 1].flag < 0) {
                        label3.string = '今日决策：' + '持股观望';
                    }
                    else {
                        label3.string = '今日决策：' + '持币观望';
                    }
                }
            }

            this.onDraw();
        });
    }

    //绘制颜色初始
    initData() {
        GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.jjpkSet));

        GameCfg.MAColor[0] = new cc.Color().fromHEX('#ffffff');
        GameCfg.MAColor[1] = new cc.Color().fromHEX('#ebeb12');

        GameCfg.MAColor[2] = new cc.Color().fromHEX('#e814ed');
        GameCfg.MAColor[3] = new cc.Color().fromHEX('#14ed14');
        GameCfg.MAColor[4] = new cc.Color().fromHEX('#1c9ce6');
        GameCfg.MAColor[5] = new cc.Color().fromHEX('#d47026');

        GameCfg.BOLLColor[0] = cc.Color.WHITE;
        GameCfg.BOLLColor[1] = new cc.Color().fromHEX('#f0dc05');
        GameCfg.BOLLColor[2] = new cc.Color().fromHEX('#d85cfc');

        GameCfg.VOLColor[0] = new cc.Color().fromHEX('#ffffff');
        GameCfg.VOLColor[1] = new cc.Color().fromHEX('#ebeb12');

        GameCfg.tipsDealColor[0] = new cc.Color().fromHEX('#02230c');
        GameCfg.tipsDealColor[1] = new cc.Color().fromHEX('#2d0202');

        GameCfg.K_D_J_Line[0] = cc.Color.WHITE;
        GameCfg.K_D_J_Line[1] = new cc.Color().fromHEX('#f0dc05');
        GameCfg.K_D_J_Line[2] = new cc.Color().fromHEX('#d85cfc');

        GameCfg.DIF_LINE_COL = cc.Color.WHITE;
        GameCfg.DEA_LINE_COL = new cc.Color().fromHEX('#f0dc05');

        GameCfg.MACD_COL[0] = new cc.Color().fromHEX('#f11111');
        GameCfg.MACD_COL[1] = new cc.Color().fromHEX('#0fee1e');

        GameCfg.RSI_COLOR[0] = cc.Color.WHITE;
        GameCfg.RSI_COLOR[1] = new cc.Color().fromHEX('#f0dc05');
        GameCfg.RSI_COLOR[2] = new cc.Color().fromHEX('#d85cfc');

        GameCfg.CCL_COL = cc.Color.WHITE;

        GameCfg.EXPMA_COL[0] = new cc.Color().fromHEX('#ffffff');
        GameCfg.EXPMA_COL[1] = new cc.Color().fromHEX('#ebeb12');

        let j = 0;
        for (let i = 1; i <= 6; i++) {
            if (GameCfg.GameSet['isMA' + i]) {
                GameCfg.MAs[j++] = parseInt(GameCfg.GameSet['MA' + i + 'Date']);
            }
        }
    }

    //获取分时股票数据
    getGPDataMin() {
        GlobalEvent.emit(EventCfg.SHOWLOADING);
        this.ktype = pb.KType.MinToday;
        let curDate = new Date();
        let hour = curDate.getHours();
        let minute = curDate.getMinutes();

        // let from, to;
        // //获取上一天的数据
        // if (hour < 9 || (hour == 9 && minute < 30)) {
        //     let time = curDate.getTime() - (24 + hour) * 60 * 60 * 1000;
        //     from = parseInt(new Date(time).getTime() / 1000 + '');
        //     to = parseInt(new Date(time + 23 * 60 * 60 * 1000).getTime() / 1000 + '');
        //     this.isSync = false;
        // }
        // else {
        //     let time = curDate.getTime() - (hour) * 60 * 60 * 1000;
        //     from = parseInt(new Date(time).getTime() / 1000 + '');
        //     to = parseInt(curDate.getTime() / 1000 + '');
        //     this.isSync = true;
        // }

        let info1 = {
            ktype: this.ktype,
            code: this.code,
            // to: to,
            // from: from,
        };

      //  let message = pb.CmdQuoteQuery.create(info1);
        let buff = pb.CmdQuoteQuery.encode(info1).finish();


        (<any>window).socket.send(pb.MessageId.Req_QuoteQuery, buff, info => {
            GlobalEvent.emit(EventCfg.HIDELOADING);
            console.log('分数据：' + JSON.stringify(info));
            if (!info.items || info.items.length <= 0) {
                GlobalEvent.emit('clearGraphics');
            }

            this.gpDataMin = info.items;
            if (this.gpDataMin[this.gpDataMin.length - 1]) {
                this._amount = this.gpDataMin[this.gpDataMin.length - 1].amount;
                this._volume = this.gpDataMin[this.gpDataMin.length - 1].volume;
                for (let i = this.gpDataMin.length - 1; i >= 1; i--) {
                    this.gpDataMin[i].amount = this.gpDataMin[i].amount - this.gpDataMin[i - 1].amount;

                    this.gpDataMin[i].volume = this.gpDataMin[i].volume - this.gpDataMin[i - 1].volume;
                }
            }

            this.onUIShow();

            this.onShowCgData();
            //查询AI操作
            this.onQueryAISignal();

            this.setCurLabelData();
        });

    }

    //第三方接口  获取股票数据
    getHttpGPData(type) {

        let code;
        code = this.code + '';
        if ((code + '').length >= 7) {
            code = (code + '').slice(1);
        }
        if (code[0] == 6) {
            code += '1';
        }
        else if (code[0] == 3) {
            code += '2';
        }
        else if (code[0] == 0) {
            code += '2';
        }
        let data = {
            TYPE: type,
            rtntype: 5,
            authorityType: false,
            id: code
        }

        HttpMgr.getGPData(data, (res) => {

            if (!res || res.length <= 0) {
                GlobalEvent.emit('clearGraphics');
                return;
            }

            if (res.length > 200) {
                res = res.slice(res.length - 200, res.length);
            }

            if (type == 'mk') {
                this.gpDataMonth = res;
            }
            else if (type == 'wk') {
                this.gpDataDay7 = res;
            }
            else if (type == 'k') {
                this.gpDataDay = res;
            }

            this.onDraw();
        })
    }

    //订阅股票  获取时时数据
    CmdQuoteSubscribe(flag) {
        let info = {
            items: [{ code: this.code + '', flag: flag }]
        }
        console.log('订阅：' + JSON.stringify(info));
        // let CmdQuoteSubscribe = pb.CmdQuoteSubscribe;
        // let message = CmdQuoteSubscribe.create(info);
        let buff = pb.CmdQuoteSubscribe.encode(info).finish();

        (<any>window).socket.send(pb.MessageId.Req_QuoteSubscribe, buff, info => {
            console.log('订阅：' + JSON.stringify(info));
        })
    }


    //设置label数据
    setCurLabelData() {
        GlobalEvent.emit(EventCfg.HIDELOADING);
        if (!this.gpDataMin[this.gpDataMin.length - 1]) { return }
        let data = this.gpDataMin[this.gpDataMin.length - 1] || this.gpDataDay[this.gpDataDay.length - 1];
        let preData;

        preData = this.gpDataMin[0];

        let items = ConfUtils.getGPItemInfo(this.code);
        let code = this.code;

        if ((code + '').length >= 7) {
            code = (code + '').slice(1);
        }

        if (items) {
            this.cLabel[0].string = items[1];
            this.name = items[1];
        }
        else {
            console.log('当前配置上没有');
        }

        this.cLabel[1].string = code;

        if (GameCfg.GameType == 'ZNXG' && !GameData.vipStatus) {
            //    if (GameData.ZNCurIndex > 3) {
            this.cLabel[0].string = 'VIP';
            this.cLabel[1].string = '******';
            //    }
        }

        this.cLabel[2].string = ComUtils.changeTwoDecimal(data.price) + '';
        let zf = data.price - preData.close;
        let zfl = (data.price - preData.close) / preData.close * 100;
        this.cLabel[3].string = ComUtils.changeTwoDecimal(zf) + '    ' + ComUtils.changeTwoDecimal(zfl) + '%';

        this.cLabel[4].string = ComUtils.changeTwoDecimal(data.high) + '';
        this.cLabel[5].string = ComUtils.changeTwoDecimal(data.open) + '';

        let zf1 = (data.high - data.low) / preData.close * 100;
        this.cLabel[6].string = ComUtils.changeTwoDecimal(zf1) + '%';
        this.cLabel[7].string = ComUtils.numberConvertUnit(this._volume / 100) + '手';

        this.cLabel[8].string = ComUtils.changeTwoDecimal(data.low) + '';
        this.cLabel[9].string = ComUtils.changeTwoDecimal(preData.close) + '';

        if (items) {
            let hs = this._volume / items[4] * 100;
            if (!items || items[4] == 0 || hs > 1) {
                hs = 1
            }
            this.cLabel[10].string = ComUtils.changeTwoDecimal(hs) + '%';
        } else {
            this.cLabel[10].string = 1 + '';
        }

        this.cLabel[11].string = ComUtils.numberConvertUnit(this._amount) + '';

        if (zf < 0) {
            this.cLabel[2].node.color = new cc.Color().fromHEX('#31a633');
            this.cLabel[3].node.color = new cc.Color().fromHEX('#31a633');
        }
        else {
            this.cLabel[2].node.color = new cc.Color().fromHEX('#e94343');
            this.cLabel[3].node.color = new cc.Color().fromHEX('#e94343');
        }
    }

    //绘制
    onDraw() {
        this.toggles.forEach((el, index) => {
            if (el.isChecked) {
                let arr = [];
                if (index == 0) {
                    this.ktype = pb.KType.Min;
                    arr = this.gpDataMin;
                    // arr.forEach(el => {
                    //     el.close = el.price;
                    // })
                }
                else if (index == 1 || index == 2) {
                    if (index == 1) {
                        this.addMark.opacity = 255;
                    }
                    this.ktype = pb.KType.Day;
                    arr = this.gpDataDay;
                }
                else if (index == 3) {
                    this.ktype = pb.KType.Day7;
                    arr = this.gpDataDay7;
                }
                else if (index == 4) {
                    this.ktype = 30;
                    arr = this.gpDataMonth;
                }
                this.touchNode.getComponent('ZnxgTouch').ktype = this.ktype;
                GameCfg.huizhidatas = arr.length;
                GameData.huizhidatas = arr.length;
                GameCfg.beg_end = [];

                GameCfg.beg_end[1] = GameCfg.huizhidatas;
                GameCfg.beg_end[0] = 0;
                if (GameCfg.huizhidatas > 100) {
                    GameCfg.beg_end[0] = GameCfg.beg_end[1] - 100;
                }
                if (GameCfg.beg_end[0] < 0) {
                    GameCfg.beg_end[0] = 0;
                }

                if (this.ktype == pb.KType.Min) {
                    GameCfg.beg_end[0] = 0;
                }

                let mixWidth = 6;
                let maxWidth = 70;
                let drawWidth = this.drawBox.width;
                GameCfg.hz_width = drawWidth / (GameCfg.beg_end[1] - GameCfg.beg_end[0]);
                if (GameCfg.hz_width > maxWidth) {
                    GameCfg.hz_width = maxWidth;
                } else if (GameCfg.hz_width < mixWidth) {
                    GameCfg.hz_width = mixWidth;
                }

                // if (this.ktype == pb.KType.Min) {
                //     GameCfg.hz_width = this.node.width / 240;
                // }

                let arr1 = [];
                arr.forEach((el, index) => {

                    let data = {
                        day: el.timestamp,
                        open: el.open || 0,
                        close: el.price || 0,
                        high: el.high || 0,
                        low: el.low || 0,
                        price: el.amount || 0,
                        value: el.volume || 0,
                    }

                    arr1.push(data);
                })

                if (!arr1 || arr1.length == 0) {
                    return;
                }

                GlobalEvent.emit('onClickPosUpdateLabel', arr1.length - 1);

                DrawData.initData(arr1);
                GlobalEvent.emit('onDrawGrap', arr1, this.ktype);
            }
        })
    }

    //获取股票 每天 参数
    getGPDataDay() {
        this.ktype = pb.KType.Day;
        let to = TimeUtils.getCurYearMonthDay();
        let info1 = {
            ktype: this.ktype,
            code: this.code,
            to: to,
            total: 250,
        }
        //let message = pb.CmdQuoteQuery.create(info1);
        let buff = pb.CmdQuoteQuery.encode(info1).finish();

        GlobalEvent.emit(EventCfg.SHOWLOADING);

        (<any>window).socket.send(pb.MessageId.Req_QuoteQuery, buff, info => {
            GlobalEvent.emit(EventCfg.HIDELOADING);
            if (!info.items || info.items.length <= 0) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '获取的行情为空');
                GlobalEvent.emit('clearGraphics');
                return;
            }
            this.gpDataDay = info.items;
            this.getGPDataMin();
        });
    }

    onToggleClick(event, data) {
        let name = event.node.name;
        this.onUIShow();
        this.btnSelect.active = true;
        this.touchNode.active = true;
        this.addMark.opacity = 0;
        if (name == 'toggle1') {

            this.btnSelect.active = false;
            this.mask.active = false;
            this.BGrap[0].active = true;
            this.BGrap[1].active = true;
            this.BGrap[2].active = false;
            this.BGrap[3].active = false;
            this.BGrap[4].active = false;
            //  this.touchNode.active = false;
            if (!this.gpDataMin.length) {
                this.getGPDataMin();
            }
            else {
                this.onDraw();
            }
        }

        else if (name == 'toggle2') {

            if (!this.gpDataDay.length) {
                this.getGPDataDay();
            }
            else {
                this.onDraw();
            }
        }

        else if (name == 'toggle3') {

            if (!this.gpDataDay.length) {
                this.ktype = pb.KType.Day;
                this.getGPDataDay();
            }
            else {
                this.onDraw();
            }
        }

        else if (name == 'toggle4') {
            if (!this.gpDataDay7.length) {
                this.getHttpGPData('wk');

            }
            else {
                this.onDraw();
            }
        }

        else if (name == 'toggle5') {
            if (!this.gpDataMonth.length) {
                this.getHttpGPData('mk');

            }
            else {
                this.onDraw();
            }
        }
    }

    onDisable() {
        this.gpDataMin = [];  //分时数据
        this.gpDataDay = []  //日k数据
        this.gpDataDay7 = []  //周k数据
        this.gpDataMonth = [] //月k数据
        GameCfg.GAMEFUPAN = null;
        this._timeStamp = null;
        this._volume = 0;
        this._amount = 0;
        this.addMark.opacity = 255;
        this.addMark.active = false;
        //订阅
        if (GameCfg.GameType == pb.GameType.MoNiChaoGu || GameCfg.GameType == pb.GameType.ChaoGuDaSai) {

        } else {
            this.CmdQuoteSubscribe(false);
        }

        //找到更新买1...卖1...label跟新
        this.box3.children.forEach(e => {
            if (e.name == 'node2' || e.name == 'node3') {
                e.children.forEach(el => {
                    if (el.name == 't_label' || el.name == 't_label1' || el.name == 'd_label' || el.name == 'd_label1') {
                        el.color = cc.Color.WHITE;
                        el.getComponent(cc.Label).string = '0.00';
                    }
                })
            }
        })

    }

    selectBtn(type) {
        if (type == 0) {
            this.mask.active = false;
            this.BGrap[0].active = true;
            this.BGrap[1].active = true;
            this.BGrap[2].active = false;
            this.BGrap[3].active = false;
            this.BGrap[4].active = false;
        }
        else if (type == 1) {
            this.mask.active = true;
            this.BGrap[2].active = true;
            this.BGrap[3].active = false;
            this.BGrap[4].active = false;
        }

        else if (type == 2) {
            this.mask.active = true;
            this.BGrap[2].active = false;
            this.BGrap[3].active = true;
            this.BGrap[4].active = false;
        }
        else if (type == 3) {
            this.mask.active = true;
            this.BGrap[2].active = false;
            this.BGrap[3].active = false;
            this.BGrap[4].active = true;
        }
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }

        //点击模以
        else if (name == 'sp_btn_moni') {
            GlobalEvent.emit(EventCfg.OPENMNXG);
        }

        else if (name == 'sp_btn_xunlian') {

            if (GameCfg.GameType == 'ZNXG') {
                if (new Date().getTime() / 1000 > GameData.properties[pb.GamePropertyId.VipExpiration]) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '非vip用户，不能跳转训练该股');
                    return;
                }
            }

            PopupManager.openNode(this.node, null, 'Prefabs/enterXLGame', null, (node) => {

                let handle = node.getComponent('EnterXLGame');

                let items = ConfUtils.getGPItemInfo(this.code);

                handle.onShow(this.code, items[1], this.gpDataDay)
            })
        }

        else if (name == 'sp_btn_shoucang') {

            if (!GameData.vipStatus) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '开启VIP或解锁该功能取限制');
                return;
            }

            let info = {
                removed: false,
                code: this.code,
                isAiStock: true,
            }

           // let message = pb.CmdMncgEditStock.create(info);
            let buff = pb.CmdMncgEditStock.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_EditAiStockList, buff, (res) => {

            })
            GameData.aiStockList.push(this.code);
            GlobalEvent.emit('updateCollectList');
            this.yiShouCang.active = true;
        }

        else if (name == 'sp_mncg_zixuan2') {
            if (GameData.selfStockList.indexOf(this.code) != -1) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '该股票已添加');
                return;
            }
            let info = {
                removed: false,
                code: this.code,
                isAiStock: false,
            }

            //let message = pb.CmdMncgEditStock.create(info);
            let buff = pb.CmdMncgEditStock.encode(info).finish();
            (<any>window).socket.send(pb.MessageId.Req_Game_MncgEditStockList, buff, (res) => {

            })
            GameData.selfStockList.push(this.code);
            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '股票添加成功！');
        }

        //模拟点击买入
        else if (name == 'sp_btn_mairu') {
            let price;

            price = this.gpDataMin[this.gpDataMin.length - 1].price;

            let data = {
                code: this.code,
                price: price,
                name: this.name,
                close: this.gpDataMin[0].close
            }
            GlobalEvent.emit(EventCfg.OPENBUYBOX, data);
        }

        //模拟点击卖出
        else if (name == 'sp_btn_maichu') {
            let price;

            price = this.gpDataMin[this.gpDataMin.length - 1].price;

            let data = {
                code: this.code,
                price: price,
                name: this.name,
            }
            GlobalEvent.emit(EventCfg.OPENSELLBOX, data);
        }

        else if (name == 'toggle2mask') {
            if (GameCfg.GameType == pb.GameType.MoNiChaoGu && !GameData.vipStatus) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '开启VIP或解锁该功能取限制');
                return;
            }
        }
    }

    onDestroy() {
        GlobalEvent.off('onClickPosUpdateLabel');
        GlobalEvent.off('selectBtn');
    }



}
