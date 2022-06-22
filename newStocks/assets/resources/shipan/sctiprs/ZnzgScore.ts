import { pb } from "../../../proto/proto";
import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import StockData from "../../../sctiprs/StockData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";
import ZnzgControl from "./ZnzgControl";
import ZnzgStockIndex from "./ZnzgStockIndex";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgScore extends cc.Component {

    @property(cc.Label)
    nameLabel: cc.Label = null;

    @property(cc.Label)
    codeLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Label)
    timeLabel: cc.Label = null;

    @property(cc.Label)
    infoLabel: cc.Label = null;

    @property(cc.Sprite)
    scoreSp: cc.Sprite = null;

    @property([cc.Sprite])
    starSp: cc.Sprite[] = [];

    @property(cc.Graphics)
    gaphicsNode: cc.Graphics = null;

    onLoad() {

    }

    protected start(): void {
        ZnzgControl.scoreNode = this.node;
    }

    protected onEnable(): void {

        this.nameLabel.string = ZnzgControl.searchName;
        this.codeLabel.string = ZnzgControl.searchCode;

        this.timeLabel.string = '诊断日期：' + ZnzgControl.searTime;

        GlobalEvent.emit(EventCfg.SHOWLOADING);
        this.getStockQuotes();
    }

    getScore() {
        GlobalEvent.emit(EventCfg.HIDELOADING);
        let score1 = 0, score2 = 0, score3 = 0, score4 = 0;

        if (ZnzgControl.syl > ZnzgControl.pj_pe_dlt_issed * 1.5) {
            score1 += (1 * 0.1);
        }
        else if (ZnzgControl.syl > ZnzgControl.pj_pe_dlt_issed && ZnzgControl.syl < ZnzgControl.pj_pe_dlt_issed * 1.5) {
            score1 += (3 * 0.1);
        }
        else if (ZnzgControl.syl < ZnzgControl.pj_pe_dlt_issed) {
            score1 += (5 * 0.1);
        }

        if (ZnzgControl.sel_nint < 0) {
            score1 += (1 * 0.3);
        }
        else if (ZnzgControl.sel_nint < 20) {
            score1 += (2 * 0.3);
        }
        else if (ZnzgControl.sel_nint < 40) {
            score1 += (3 * 0.3);
        }
        else if (ZnzgControl.sel_nint < 60) {
            score1 += (4 * 0.3);
        } else {
            score1 += (5 * 0.3);
        }

        if (ZnzgControl.rev_yoy_gr > 0) {
            score1 += (4 * 0.2);
        }
        else {
            score1 += (2 * 0.2);
        }


        if (ZnzgControl.roe > 0) {
            score1 += (4 * 0.2);
        }
        else {
            score1 += (2 * 0.2);
        }

        if ((ZnzgControl.bb200000 * 100 / ZnzgControl.bb100000) > 0) {
            score1 += (4 * 0.2);
        }
        else {
            score1 += (2 * 0.2);
        }



        if (ZnzgControl.f137 >= 0) {
            score2 += (4 * 0.4);
        }
        else {
            score2 -= (2 * 0.4);
        }

        if (ZnzgControl.f434 >= 0) {
            score2 += (5 * 0.3);
        }
        else {
            score2 -= (1 * 0.3);
        }

        if (ZnzgControl.f459 >= 0) {
            score2 += (4 * 0.2);
        }
        else {
            score2 -= (2 * 0.2);
        }


        let malist = ZnzgStockIndex.maList[ZnzgControl.lastStockIndexList[ZnzgControl.lastStockIndexList.length - 1].index];

        let tt = ''
        if (malist[0] > malist[1] && malist[1] > malist[2]) {
            score3 += (5 * 0.55);
            tt = '股价处于明确上涨趋势中。';
        }
        else if (malist[0] < malist[1] && malist[1] < malist[2]) {
            score3 += (1 * 0.55);
            tt = '均线呈空头排列：股价处于下跌趋势中。'
        }
        else {
            score3 += (2 * 0.55);
            tt = '股价长期走势不明确。';
        }

        let gpData = GameCfg.data[0].data;

        if (gpData[gpData.length - 1].day == ZnzgControl.lastIndexTime) {
            score3 += (4 * 0.15);
        }
        else {
            score3 += (1 * 0.15);
        }

        if (ZnzgControl.lastIndexName.indexOf('上穿MA') != -1 || ZnzgControl.lastIndexName == '均线金叉') {
            score3 += (5 * 0.3);
        }
        else if (ZnzgControl.lastIndexName == 'MACD背离' ||
            ZnzgControl.lastIndexName == '穿越0轴' ||
            ZnzgControl.lastIndexName == 'KDJ金叉') {
            score3 += (2 * 0.3);
        }
        else {
            score3 += (1 * 0.3);
        }

        let zf = (gpData[gpData.length - 1] - gpData[gpData.length - 1 - 10]) / gpData[gpData.length - 1 - 10];

        if (zf < -0.3) {
            score4 += 0;
        }
        else if (zf < 0) {
            score4 += (1 * 0.4);
        }
        else if (zf < 0.2) {
            score4 += (2 * 0.4);
        }
        else if (zf < 0.4) {
            score4 += (3 * 0.4);
        }
        else {
            score4 += (5 * 0.4);
        }

        let score = score1 * 0.20 + score2 * 0.20 + score3 * 0.40 + score4 * 0.20;

        score = Math.floor(score / 1 * 20);

        if (score < 30) {
            score += 15;
        }
        else if (score <= 40) {
            score += 12;
        }
        else if (score <= 50) {
            score += 9;
        }
        else if (score <= 60) {
            score += 5;
        }
        else if (score <= 70) {
            score += 3;
        }

        this.scoreLabel.string = parseInt(score + '') + '';
        this.scoreSp.fillRange = score / 100;

        this.starSp[0].fillRange = score1 * 0.2;
        this.starSp[1].fillRange = score2 * 0.2;
        this.starSp[2].fillRange = score3 * 0.4;

        let infostr = '基本面方面,'
        if (score1 < 2.5) {
            infostr += '该公司基本面普通，适当关注即可.'
        }
        else if (score1 <= 3.5) {
            infostr += '该公司基本面尚可但无过多亮点。'
        }
        else {
            infostr += '该公司基本面良好业绩持续向好。'
        }
        infostr += '数据显示该公司'

        if (ZnzgControl.f459 > 0 && ZnzgControl.f434 > 0 && ZnzgControl.f137 > 0) {
            infostr += '近十日主力资金持续流入。';
        }
        else if (ZnzgControl.f459 < 0 && ZnzgControl.f434 < 0 && ZnzgControl.f137 < 0) {
            infostr += '近十日主力资金持续流出';
        }
        else if (score2 > 3) {
            infostr += '近期主力资金总体流入大于流出。';
        }
        else if (score2 < 2) {
            infostr += '近期主力资金总体流出大于流入。';
        }

        infostr += '技术形态显示';
        infostr += tt;
        this.infoLabel.string = infostr;

        let v1 = this.getTweenPoint(cc.v2(0, 0), cc.v2(0, 121), score1 * 0.2 / 1)

        let v2 = this.getTweenPoint(cc.v2(0, 0), cc.v2(104, -64), (score3 * 0.4) / 2);

        let v3 = this.getTweenPoint(cc.v2(0, 0), cc.v2(-104, -64), (score2 * 0.2) / 1);


        this.gaphicsNode.moveTo(v1.x, v1.y);
        this.gaphicsNode.lineTo(v2.x, v2.y);
        this.gaphicsNode.lineTo(v3.x, v3.y);
        this.gaphicsNode.lineTo(v1);
        this.gaphicsNode.fillColor = new cc.Color().fromHEX('#64c8ff');
        this.gaphicsNode.fillColor.a = 60;
        this.gaphicsNode.fill();
        this.gaphicsNode.stroke();

        // let point = this.getTweenPoint(cc.v2(0, 0), cc.v2(10, 10), 0.8);
        // console.log(point);
    }

    getTweenPoint(start, end, progress) {

        let num = (end.sub(start)).normalize();
        let dis = cc.Vec2.distance(start, end);
        return num.mul(dis * progress);
    }


    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'zg_ckxq') {
            ZnzgControl.otherNode.getComponent('ZnzgOther').getCodeData(ZnzgControl.searchCode, () => {
                ZnzgControl.otherNode.active = true;
            })
        }
        else if (name == 'blackNode') {
            this.node.active = false;
        }
    }

    /**
     * 获取股票行情
     */
    getStockQuotes() {

        let data = {
            ktype: pb.KType.Day,
            kstyle: pb.KStyle.Random,
            code: ZnzgControl.searchCode,
            from: null,
            total: 1000,
            to: TimeUtils.fromatTime1(new Date().getTime() / 1000),
            reserve: null,
        }

        GlobalHandle.getStockQuotes(data, (flag) => {
            if (flag) {

                StockData.gpDataDay = GameCfg.data[0].data;

                DrawData.initDrawData(GameCfg.data[0].data);
                ZnzgStockIndex.initData();
                ZnzgStockIndex.startSockIndex();
                ZnzgStockIndex.getRiseProbability();

                this.getScore()

            }
        })
    }

    protected onDisable(): void {
        ZnzgStockIndex.clearData();
    }
}
