import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
import DrawUtils from "../../../sctiprs/utils/DrawUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgDraw extends cc.Component {

    @property(cc.Graphics)
    drawBg: cc.Graphics = null;

    @property(cc.Graphics)
    drawMa: cc.Graphics = null;

    @property(cc.Graphics)
    drawVol: cc.Graphics = null;

    @property(cc.Graphics)
    drawPCM: cc.Graphics = null;

    bottomValue = null;

    disValue = null;

    topValue = null;

    topVol = null;

    bottomVol = null;

    hz_width = null;

    beg = null;

    sign = false;

    start() {

    }

    protected onEnable(): void {

        let viewData = GameCfg.data[0].data;

        if (!viewData) {
            console.log('znzgDrawMa onEnable view is null:' + viewData);
            return;
        }

        DrawUtils.drawClear(this.drawBg);
        DrawUtils.drawClear(this.drawMa);
        DrawUtils.drawClear(this.drawVol);
        DrawUtils.drawClear(this.drawPCM);

        DrawUtils.lineWidth(this.drawBg, 2);
        DrawUtils.lineWidth(this.drawMa, 2);
        DrawUtils.lineWidth(this.drawVol, 2);
        DrawUtils.lineWidth(this.drawPCM, 2);

        this.bottomValue = viewData[viewData.length - 50].low;

        this.topValue = 0;

        this.hz_width = (this.drawBg.node.width - 20) / 50;

        this.topVol = 0;

        this.bottomVol = viewData[viewData.length - 50].value;

        this.beg = viewData.length - 50;
        for (let i = viewData.length - 50; i < viewData.length; i++) {
            this.topValue = Math.max(this.topValue, viewData[i].high);     //最高价
            this.bottomValue = Math.min(this.bottomValue, viewData[i].low); //最低价

            this.topVol = Math.max(this.topVol, viewData[i].value);
            this.bottomVol = Math.min(this.bottomVol, viewData[i].value);

        }

        this.disValue = this.topValue - this.bottomValue;

        for (let index = viewData.length - 50; index < viewData.length; index++) {
            this.drawCandle(viewData[index], index);
            this.drawMaLine(index);
            this.drawVolLine(viewData[index], index);
        }
    }

    drawCandle(el, index) {
        let initY = 0;
        let drawBox = this.drawBg.node.height;
        let some = index - this.beg;
        let startX = some == 0 ? 10 : 10 + (some * this.hz_width);
        let endX = 10 + ((some + 1) * this.hz_width);
        //根据区间价格决定坐标
        let openValue = (el.open - this.bottomValue);
        let openY = openValue / this.disValue * drawBox + initY;
        let closeValue = (el.close - this.bottomValue)
        let closeY = closeValue / this.disValue * drawBox + initY;

        //判断颜色
        // let hz_color;
        //没涨没跌
        let lowPrice, highPrice;

        if (el.open == el.close) {
            this.drawBg.strokeColor = GameCfg.HZ_white;
            DrawUtils.drawLine(this.drawBg, startX, openY, endX, openY);
            lowPrice = el.open;
            highPrice = el.open;
        }

        //跌了
        else {
            let hy, by;
            if (el.open > el.close) {
                lowPrice = el.close;
                highPrice = el.open;
                hy = openY;
                by = closeY;

            }
            //涨了
            else if (el.open < el.close) {
                lowPrice = el.open;
                highPrice = el.close;
                hy = closeY;
                by = openY;

            }
            let flag = el.open > el.close;

            this.sign = !!DrawData.getRaisingLimit(index);

            this.drawRect(this.drawBg, startX + 2, by, this.hz_width - 2, hy - by, flag);
        }

        //画最高价、
        if (el.high >= highPrice) {
            let highY = (el.high - this.bottomValue) / this.disValue * drawBox + initY;
            let highX = startX + (this.hz_width) / 2;
            let hy = openY > closeY ? openY : closeY;
            DrawUtils.drawLine(this.drawBg, highX, highY, highX, hy);
        }

        //画最低
        if (el.low <= lowPrice) {
            let lowY = (el.low - this.bottomValue) / this.disValue * drawBox + initY;
            let lowX = startX + (this.hz_width) / 2;
            let hy = openY < closeY ? openY : closeY;
            DrawUtils.drawLine(this.drawBg, lowX, lowY, lowX, hy);
        }

    }

    /**
     * //MA
     * @param index 
     * @returns 
     */
    drawMaLine(index) {

        if (!DrawData.MaList[index]) {
            return;
        }

        let drawBox = this.drawMa.node.height, initY = 0, madata = 0;

        //每段数据绘制
        for (let i = 0; i < GameCfg.MAs.length; i++) {

            if (index >= GameCfg.MAs[i]) {
                //平均的位置
                let preMAY = (DrawData.MaList[index - 1][i] - this.bottomValue) / this.disValue * drawBox + initY;
                let preMAX = 10 + ((index - 1 - this.beg) * this.hz_width) + this.hz_width / 2;

                let MAY = (DrawData.MaList[index][i] - this.bottomValue) / this.disValue * drawBox + initY;
                let MAX = 10 + ((index - this.beg) * this.hz_width) + this.hz_width / 2;

                this.drawMa.strokeColor = GameCfg.MAColor[i];
                DrawUtils.drawLine(this.drawMa, preMAX, preMAY, MAX, MAY, i);
            }
        }
    }


    drawVolLine(el, index) {
        let some = index - this.beg;

        let startX = some == 0 ? 10 : 10 + (some * this.hz_width);

        let endX = 10 + ((some + 1) * this.hz_width);

        let hight = el.value * (this.drawVol.node.height / this.topVol);

        let width = endX - startX;

        this.drawRect(this.drawVol, startX, 0, width, hight, el.open > el.close);

        //均量线 白
        if (!DrawData.VolList[index]) {
            return;
        }

        //每段数据绘制
        for (let i = 0; i < GameCfg.VOLGraph.length; i++) {
            if (index >= GameCfg.VOLGraph[i]) {

                let preY = DrawData.VolList[index - 1][i] * (this.drawPCM.node.height / this.topVol);

                let preX = 10 + ((some - 1) * this.hz_width) + width / 2

                //平均的位置
                let VOlPointY = DrawData.VolList[index][i] * (this.drawPCM.node.height / this.topVol);

                let VOlPointX = startX + width / 2;

                this.drawPCM.strokeColor = GameCfg.VOLColor[i];

                DrawUtils.drawLine(this.drawPCM, preX, preY, VOlPointX, VOlPointY);
            }
        }
    }

    drawRect(ctx, x, y, w, h, flag?) {
        let col;
        if (flag) {
            //   if (GameCfg.GameSet.isBW) {
            col = new cc.Color().fromHEX('#54ffff');
            // } else {
            //     col = new cc.Color().fromHEX('#00BA50');
            // }
            if (this.sign) {
                //  if (GameCfg.GameSet.isBW) {
                col = new cc.Color().fromHEX('#3972F6');
                // } else {
                //     col = new cc.Color().fromHEX('#2B8917');
                // }
            }
            ctx.strokeColor = col;
        } else if (flag != undefined) {
            //  if (GameCfg.GameSet.isBW) {
            col = new cc.Color().fromHEX('#ea233b');
            // } else {
            //     col = new cc.Color().fromHEX('#e2233e');
            // }
            ctx.strokeColor = col;
            if (!this.sign) {
                col = null;
            }
        }
        DrawUtils.drawRect(ctx, x + 2, y, w - 5, h, col);
    }



}
