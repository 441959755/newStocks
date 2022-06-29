
import GameCfg from "../../../sctiprs/GameCfg";
import SchoolBundle from "../../../sctiprs/hall/SchoolBundle";
import ShiPanBundle from "../../../sctiprs/hall/ShiPanBundle";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import LoadUtils from "../../../sctiprs/utils/LoadUtils";
import ZnzgControl from "./ZnzgControl";
import ZnzgStockIndex from "./ZnzgStockIndex";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgOther extends cc.Component {

    @property([cc.Label])
    pageLabels: cc.Label[] = [];

    @property([cc.Toggle])
    toggles: cc.Toggle[] = [];

    @property([cc.Node])
    pages: cc.Node[] = [];

    @property([cc.Label])
    page2Labels: cc.Label[] = [];

    @property([cc.Label])
    page3Labels: cc.Label[] = [];

    tb3 = null;

    ystb = null;

    start() {
        this.toggles[0].isChecked = true;
        this.toggles[1].isChecked = false;
        this.toggles[2].isChecked = false;
        this.pages[0].active = true;
        this.pages[1].active = false;
        this.pages[2].active = false;
    }

    setLabelColor(number, label) {
        if (number > 0) {
            label.node.color = cc.Color.RED;
        }
        else {
            label.node.color = cc.Color.GREEN;
        }
    }

    protected onEnable(): void {
        //page1
        this.pageLabels[0].string = ZnzgControl.searchName + '    ' + ZnzgControl.searchCode;
        this.pageLabels[1].string = ZnzgControl.csrc_indu_name;
        this.pageLabels[2].string = ZnzgControl.pri_biz;

        this.pageLabels[3].string = ComUtils.numberConvertUnit1(ZnzgControl.f137);
        this.setLabelColor(ZnzgControl.f137, this.pageLabels[3]);
        this.pageLabels[4].string = ComUtils.numberConvertUnit1(ZnzgControl.f434);
        this.setLabelColor(ZnzgControl.f434, this.pageLabels[4]);
        this.pageLabels[5].string = ComUtils.numberConvertUnit1(ZnzgControl.f459);
        this.setLabelColor(ZnzgControl.f459, this.pageLabels[5]);



        this.pageLabels[6].string = ComUtils.numberConvertUnit1(ZnzgControl.shizhi);
        this.pageLabels[7].string = ComUtils.numberConvertUnit1(ZnzgControl.fl_shr * 10000);
        this.pageLabels[8].string = ComUtils.numberConvertUnit1(ZnzgControl.inc_j * 10000);
        this.pageLabels[9].string = ComUtils.numberConvertUnit1(ZnzgControl.net_inc_ded * 10000);
        this.pageLabels[10].string = ComUtils.changeTwoDecimal(ZnzgControl.syl);

        this.pageLabels[11].string = ComUtils.changeTwoDecimal(ZnzgControl.rev_yoy_gr) + '%';//
        this.pageLabels[12].string = ComUtils.numberConvertUnit1(ZnzgControl.bb100000 * 10000);//
        this.pageLabels[13].string = ComUtils.changeTwoDecimal(ZnzgControl.bb200000 * 100 / ZnzgControl.bb100000) + '%';//
        this.pageLabels[14].string = ComUtils.changeTwoDecimal(ZnzgControl.roe) + '%';//
        this.pageLabels[15].string = ComUtils.numberConvertUnit1(ZnzgControl.c100000 * 10000);//


        this.pageLabels[16].string = ComUtils.numberConvertUnit1(ZnzgControl.total * 10000);//
        this.pageLabels[17].string = ComUtils.changeTwoDecimal((ZnzgControl.fl_shr * 10000) / (ZnzgControl.total * 10000) * 100) + '%';//
        this.pageLabels[18].string = ComUtils.changeTwoDecimal(ZnzgControl.epsp);
        this.pageLabels[19].string = ComUtils.changeTwoDecimal(ZnzgControl.sel_nint) + '%';

        this.pageLabels[20].string = ZnzgControl.pj_pe_dlt_issed + '';
        this.pageLabels[21].string = ComUtils.changeTwoDecimal(ZnzgControl.ni_ded_yoy_gr) + '%';
        this.pageLabels[22].string = ComUtils.numberConvertUnit1(ZnzgControl.bb200000);//

        this.pageLabels[23].string = ComUtils.changeTwoDecimal(this.tb3) + '%';
        this.setLabelColor(this.tb3, this.pageLabels[23]);

        this.pageLabels[24].string = ComUtils.changeTwoDecimal(ZnzgControl.roe_yoy_gr) + '%';
        this.setLabelColor(ZnzgControl.roe_yoy_gr, this.pageLabels[24]);

        this.pageLabels[25].string = ComUtils.changeTwoDecimal(ZnzgControl.c100000_yoy_gr) + '%';//
        this.setLabelColor(ZnzgControl.c100000_yoy_gr, this.pageLabels[25]);//
        this.selectPage(0);

        //page2 

        this.page2Labels[0].string = ZnzgControl.searchName;
        this.page2Labels[1].string = ZnzgControl.searchCode;
        this.page2Labels[2].string = ZnzgControl.indexCount + '';
        this.page2Labels[3].string = ZnzgControl.rise1Probability + '';
        this.page2Labels[4].string = ZnzgControl.rise3Probability + '';
        this.page2Labels[5].string = ZnzgControl.rise5Probability + '';
        this.page2Labels[6].string = ZnzgControl.lastIndexName + '';
        this.page2Labels[7].string = ZnzgControl.lastIndexTime + '';

        let flag = false
        for (const key in ZnzgControl.indicatorsShow) {
            if (key.slice(0, 4) == ZnzgControl.lastIndexName.slice(0, 4)) {
                this.page2Labels[8].string = ZnzgControl.indicatorsShow[key];
                flag = true;
            }
        }

        //page3

        let str = ZnzgControl.searchName + '(' + ZnzgControl.searchCode + ') ，';
        let num1 = 0, num2 = 0;
        if (ZnzgControl.shizhi > 30000000000) {
            num1 = 3;
        }
        else if (ZnzgControl.shizhi > 10000000000) {
            num1 = 2;
        }
        else if (ZnzgControl.shizhi < 10000000000) {
            num1 = 1;
        }

        if (ZnzgControl.total > 10000000000) {
            num2 = 3;
        }
        else if (ZnzgControl.shizhi > 500000000) {
            num2 = 2;
        }
        else if (ZnzgControl.shizhi < 500000000) {
            num2 = 1;
        }

        let t = num1 > num2 ? num1 : num2;

        if (t == 1) {
            str += '小盘股 ,';
        }
        else if (t == 2) {
            str += '中盘股 ,';
        }
        else if (t == 3) {
            str += '大盘股 ,';
        }

        if (ZnzgControl.total == ZnzgControl.fl_shr) {
            str += '全流通股 ,';
        }

        str += '根据当前季报显示,';

        if (this.ystb > 0) {
            str += '企业营收同比增加 ,';
        }

        else {
            str += '企业营收同比减少 ,';
        }

        if (ZnzgControl.sel_nint > 0.4) {
            str += '企业获利能力大幅增强 .'
        }
        else if (ZnzgControl.sel_nint > 0) {
            str += '企业获利能力增强 .';
        }
        else {
            str += '企业获利能力减弱 .';
        }

        if (ZnzgControl.rev_yoy_gr > 0) {
            str += '盈利增速步入上升通道, ';
        }
        else {
            str += '盈利增速减退 ,';
        }

        if (ZnzgControl.roe_yoy_gr > 0) {
            str += '企业回报股东能力增强 ,';
        }
        else {
            str += '企业回报股东能力减弱 ,';
        }


        if (this.tb3 > 0) {
            str += '财务杠杆风险加大. ';
        }
        else {
            str += '资产结构得到优化 .';
        }

        if (ZnzgControl.f137 > 0 && ZnzgControl.f459 > 0 && ZnzgControl.f434 > 0) {
            str += '过去10日主力资金持续流入' + ComUtils.numberConvertUnit1(ZnzgControl.f459);
        }

        str += '技术上 ' + ZnzgControl.lastIndexName + '信号,';
        let gpData = GameCfg.data[0].data;
        if (gpData.length <= 0) {
            return;
        }
        let flag1 = (gpData[gpData.length - 1].day == ZnzgControl.lastIndexTime);

        let arr = ZnzgStockIndex.maList[ZnzgStockIndex.maList.length - 1];

        let flag2 = false;
        if (arr[0] > arr[1] && arr[1] > arr[2]) {
            flag2 = true;
        }

        if (flag1 && flag2) {
            str += '均线呈多头排列，股价处于上升行情稳定期，建议买入.';
        }
        else if (flag1 && !flag2) {
            str += '具体信号内容+但股价长期走势不明朗，建议观望或短线操作.';
        }
        else if (!flag1 && flag2) {
            str += '均线呈多头排列，股价处于上升行情稳定期，建议出现具体进场信号进场.';
        }
        else {
            str += '股价长期走势不明朗，同时没有短期进场信号，建议暂时观望.';
        }

        this.page3Labels[0].string = str;
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        //返回
        if (name == 'blackNode') {
            this.node.active = false;
        }
        //查看
        else if (name == 'zg_jsm_ck') {
            ShiPanBundle.loadPre('znzgDraw', null, 10);
        }
        //去学院学习
        else if (name == 'zg_jsm_qxyxx') {

            ZnzgControl.searchNode.active = false;
            ZnzgControl.scoreNode.active = false;
            ZnzgControl.otherNode.active = false;
            this.node.parent.parent.active = false;

            GameCfg.GameType = 'STUDY';
            SchoolBundle.schoolProgress = data;
            SchoolBundle.bundleSchool('school');
        }
    }

    onToggleClick(event, data) {
        this.selectPage(parseInt(data));
    }

    getCodeData(code, call?) {
        let url = 'http://f10app.165566.com/';
        //科创股
        if (code.slice(0, 3) == '688') {
            url += 'kcpcf10';
        }
        //非科创股
        else {
            url += 'pcf10';
        }

        let str;
        let secid = '';
        //沪市
        if (code.slice(0, 2) == '60' || code.slice(0, 2) == '68') {
            str = 'sh' + code + '.json';
            secid = '1';
        }

        //深市
        else {
            str = 'sz' + code + '.json';
            secid = '0';
        }

        let post = '', post1 = '', post2 = '';

        if (ZnzgControl.type == 1) {// 一般类
            post += "/stk0015/";
            post1 += "/stk0017/";
            post2 += '/stk0016/';
        }

        else if (ZnzgControl.type == 2) // 非银行金融
        {
            post += "/stk0021/";
            post1 += "/stk0023/";
            post2 += '/stk0022/';
        }

        else if (ZnzgControl.type == 3) // 银行
        {
            post += "/stk0018/";
            post1 += "/stk0020/";
            post2 += '/stk0019/';
        }


        let url1 = ' https://push2.eastmoney.com/api/qt/stock/get?secid=' + secid + '.' + code + '&fields=f434,f459,f137,f162,f163,f116';

        Promise.all(
            [LoadUtils.loadRemote(url + '/pstk0021/' + str),
            LoadUtils.loadRemote(url + '/stk0019/' + str),
            LoadUtils.loadRemote(url + '/pstk0085/' + str),
            LoadUtils.loadRemote(url + '/stk0014//' + str),

            LoadUtils.loadRemote(url + post + str),
            LoadUtils.loadRemote(url + post1 + str),
            LoadUtils.loadRemote(url1),

            LoadUtils.loadRemote(url + post2 + str),
            ]).then((ret) => {

                ZnzgControl.total = ret[0].json[0].total;
                ZnzgControl.fl_shr = ret[0].json[0].fl_shr;

                ZnzgControl.bp100000 = ret[1].json[0].bp100000;
                ZnzgControl.bp500000 = ret[1].json[0].bp500000;
                ZnzgControl.bp500000_yoy_gr = ret[1].json[0].bp500000_yoy_gr;

                ZnzgControl.hold_fl_mktcap = ret[2].json[0].hold_fl_mktcap;
                ZnzgControl.hold_fl_pct = ret[2].json[0].hold_fl_pct;
                ZnzgControl.hold_fl_vol = ret[2].json[0].hold_fl_vol;

                ZnzgControl.epsp = ret[3].json[0].epsp;
                ZnzgControl.net_inc_ded = ret[3].json[0].net_inc_ded;

                ZnzgControl.sel_nint = ret[3].json[0].sel_nint;
                ZnzgControl.rev_yoy_gr = ret[3].json[0].rev_yoy_gr;
                ZnzgControl.roe_yoy_gr = ret[3].json[0].roe_yoy_gr;
                ZnzgControl.or_onf = ret[3].json[0].or_onf;
                ZnzgControl.or_ocn = ret[3].json[0].or_ocn;
                ZnzgControl.roe = ret[3].json[0].roe;
                ZnzgControl.ni_ded_yoy_gr = ret[3].json[0].ni_ded_yoy_gr;
                ZnzgControl.inc_j = ret[3].json[0].inc_j;
                ZnzgControl.bb200000_yoy_gr = ret[4].json[0].bb200000_yoy_gr;

                if (ZnzgControl.type == 1) {
                    ZnzgControl.bb100000 = ret[4].json[0].b100000;
                    ZnzgControl.bb200000 = ret[4].json[0].b200000;
                }
                else if (ZnzgControl.type == 2) {
                    ZnzgControl.bb100000 = ret[4].json[0].fb100000;
                    ZnzgControl.bb200000 = ret[4].json[0].fb200000;
                }
                else if (ZnzgControl.type == 3) {
                    ZnzgControl.bb100000 = ret[4].json[0].bb100000;
                    ZnzgControl.bb200000 = ret[4].json[0].bb200000;
                }

                if (ret[4].json[4]) {
                    let bb41, bb42;
                    if (ZnzgControl.type == 1) {
                        bb41 = ret[4].json[4].b100000;
                        bb42 = ret[4].json[4].b200000;
                    }
                    else if (ZnzgControl.type == 2) {
                        bb41 = ret[4].json[4].fb100000;
                        bb42 = ret[4].json[0].fb200000;
                    }
                    else if (ZnzgControl.type == 3) {
                        bb41 = ret[4].json[4].bb100000;
                        bb42 = ret[4].json[4].bb200000;
                    }
                    let value1 = ZnzgControl.bb200000 * 100 / ZnzgControl.bb100000;
                    let value2 = bb42 * 100 / bb41;
                    this.tb3 = (value1 - value2) / value2;
                }

                if (ZnzgControl.type == 1) {
                    ZnzgControl.c100000 = ret[5].json[0].c100000;
                    ZnzgControl.c100000_yoy_gr = ret[5].json[0].c100000_yoy_gr;
                }

                else if (ZnzgControl.type == 2) {
                    ZnzgControl.c100000 = ret[5].json[0].fc100000;
                    ZnzgControl.c100000_yoy_gr = ret[5].json[0].fc100000_yoy_gr;
                }

                else if (ZnzgControl.type == 3) {
                    ZnzgControl.c100000 = ret[5].json[0].bc100000;
                    ZnzgControl.c100000_yoy_gr = ret[5].json[0].bc100000_yoy_gr;
                }

                console.log(ret[6]._$nativeAsset);
                let pa = JSON.parse(ret[6]._$nativeAsset);
                ZnzgControl.f137 = pa.data.f137;
                ZnzgControl.f434 = pa.data.f434;
                ZnzgControl.f459 = pa.data.f459;
                ZnzgControl.shizhi = pa.data.f116;
                ZnzgControl.syl = pa.data.f163 / 100;

                if (ZnzgControl.type == 1) {
                    this.ystb = ret[7].json[0].p110101_yoy_gr;
                }
                else if (ZnzgControl.type == 2) {
                    this.ystb = ret[7].json[0].fp100000_yoy_gr;
                }
                else if (ZnzgControl.type == 3) {
                    this.ystb = ret[7].json[0].bp100000_yoy_gr;
                }

                call && (call());
            })

    }


    selectPage(index) {
        this.pages.forEach((el, i) => {
            if (index == i) {
                el.active = true;
            }
            else {
                el.active = false;
            }
        })
    }

}
