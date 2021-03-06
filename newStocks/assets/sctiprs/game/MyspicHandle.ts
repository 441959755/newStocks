import GlobalEvent from '../utils/GlobalEvent';
import EventCfg from '../utils/EventCfg';
import DrawUtils from '../utils/DrawUtils';
import { pb } from '../../protos/proto';
import GameCfg from '../GameCfg';

const { ccclass, property } = cc._decorator;

@ccclass
export default class MyspicHandle extends cc.Component {

    @property(cc.Graphics)
    draw: cc.Graphics = null;

    bottomValue = 0;

    topValue = 0;

    disValue = 0;

    btxPreCloseY = null;     ///宝塔前一日收盘价

    btxPreOpenY = null;

    btxChg = false;        ///宝塔线前一日的涨跌

    myspicData = [];

    flag = false;

    onLoad() {

        GlobalEvent.on(EventCfg.MYSPICCLICK, () => {
            this.flag = !this.flag;
            this.draw.node.active = this.flag;

        }, this);

        GlobalEvent.on('onDraw', this.onDraw.bind(this), this);

        if (GameCfg.GameType != pb.GameType.DingXiang) {
            this.draw.node.active = false;
            return;
        }


        this.flag = false;

        this.draw.node.active = this.flag;

    }

    onDisable() {
        this.draw.clear();
    }

    onDestroy() {
        GlobalEvent.off('onDraw');
        GlobalEvent.off(EventCfg.MYSPICCLICK);
    }

    onEnable() {
        if (!GameCfg.GAMEFUPAN) {
            this.getMyspic();
        }
        else {
            this.flag = false;
            this.draw.node.active = this.flag;
        }
    }

    onDraw() {
        this.draw.clear();
        let viewData = this.myspicData;
        if (!viewData || viewData.length <= 0) {
            //  console.log('指数的数据为空');
            return;
        }

        this.bottomValue = viewData[0].low;
        this.topValue = 0;

        for (let i = GameCfg.beg_end[0]; i < GameCfg.beg_end[1]; i++) {
            if (viewData[i] && viewData[i].low) {
                this.topValue = Math.max(this.topValue, viewData[i].high);
                this.bottomValue = Math.min(this.bottomValue, viewData[i].low);
            }
        }

        this.disValue = this.topValue - this.bottomValue;
        for (let index = GameCfg.beg_end[0]; index < GameCfg.beg_end[1]; index++) {
            if (viewData[index]) {
                this.onDrawMyspic(viewData[index], index);
            }
        }
    }

    onDrawMyspic(el, index) {

        let initY = 0;
        let drawBox = this.node.height;
        let some = index - GameCfg.beg_end[0];
        let startX = some == 0 ? 10 : 10 + (some * GameCfg.hz_width);
        let endX = 10 + ((some + 1) * GameCfg.hz_width);
        //根据区间价格决定坐标
        let openY = (el.open - this.bottomValue) / this.disValue * drawBox + initY;
        let closeY = (el.close - this.bottomValue) / this.disValue * drawBox + initY;

        if (GameCfg.GameType == pb.GameType.DingXiang/* && GameData.DXSet.line == '宝塔线'*/) {

            //判断颜色
            // let hz_color;
            //没涨没跌
            let lowPrice, highPrice;
            if (el.open == el.close) {
                this.draw.strokeColor = GameCfg.HZ_white;
                this.drawLine(this.draw, startX + 2, openY, endX, openY);
                lowPrice = el.open;
                highPrice = el.open;
            }
            //跌了
            else {
                if (el.open > el.close) {
                    lowPrice = el.close;
                    highPrice = el.open;
                }
                //涨了
                else if (el.open < el.close) {
                    lowPrice = el.open;
                    highPrice = el.close;
                }
                this.drawRect(this.draw, startX, closeY, endX - startX, openY - closeY, el.open > el.close);
            }


            //画最高价、
            if (el.high >= highPrice) {
                let highY = (el.high - this.bottomValue) / this.disValue * drawBox + initY;
                let highX = startX + (endX - startX) / 2;
                let hy = openY > closeY ? openY : closeY;
                this.drawLine(this.draw, highX, highY, highX, hy);

            }
            //画最低
            if (el.low <= lowPrice) {
                let lowY = (el.low - this.bottomValue) / this.disValue * drawBox + initY;
                let lowX = startX + (endX - startX) / 2;
                let hy = openY < closeY ? openY : closeY;
                this.drawLine(this.draw, lowX, lowY, lowX, hy);

            }
        }
    }

    //获取指数
    getMyspic() {

        //在复盘中不获取指数数据
        if (GameCfg.GAMEFUPAN) {
            return;
        }

        let info1 = JSON.parse(JSON.stringify(GameCfg.enterGameConf));
        if (GameCfg.GameType == pb.GameType.DingXiang) {
            let code = info1.code + '';
            if (code.indexOf('60') != -1 || code.indexOf('688') != -1) {
                info1.code = '1000001';
            } else if (code.indexOf('00') != -1 || code.indexOf('002') != -1) {
                info1.code = '1399001';
            } else if (code.indexOf('300') != -1) {
                info1.code = '1399006';
            }
            let le = GameCfg.data[0].data.length;
            let time = GameCfg.data[0].data[le - 1].day.replace(/-/g, '');
            console.log(time + '   ' + le);

            let infoPre = {
                ktype: info1.ktype,
                code: info1.code,
                form: 0,
                total: le,
                to: time,
            }
         //   let message = pb.CmdQuoteQuery.create(infoPre);
            let buff = pb.CmdQuoteQuery.encode(infoPre).finish();
            console.log(JSON.stringify(infoPre));

            (<any>window).socket.send(pb.MessageId.Req_QuoteQuery, buff, info => {
                if (!info.items || info.items.length <= 0) {
                    console.log('获取的行情为空');
                    // console.log(JSON.stringify(GameCfg.data));
                    GameCfg.GAMEFUPAN = false;
                    GlobalEvent.emit(EventCfg.HIDELOADING);
                    return;
                }
                info.items.forEach(el => {
                    //  let date = new Date(el.timestamp);
                    let ye = (el.timestamp + '').slice(0, 4);
                    let mon = (el.timestamp + '').slice(4, 6);
                    let da = (el.timestamp + '').slice(6);
                    let fromDate = ye + '-' + mon + '-' + da;
                    let data = {
                        day: fromDate || 0,
                        open: el.open || 0,
                        close: el.price || 0,
                        high: el.high || 0,
                        low: el.low || 0,
                        price: el.amount || 0,
                        value: el.volume || 0,
                        Rate: (el.volume / GameCfg.data[0].circulate) * 100
                    };

                    this.myspicData.push(data);
                });
                this.onDraw();
            })
        }
    }


    //画框
    drawRect(ctx, x, y, w, h, flag?) {
        let col;
        if (flag) {
            if (GameCfg.GameSet.isBW) {
                col = new cc.Color().fromHEX('#999999');
            } else {
                col = new cc.Color().fromHEX('#999999');
            }
            ctx.strokeColor = col;
        } else if (flag != undefined) {
            if (GameCfg.GameSet.isBW) {
                col = new cc.Color().fromHEX('#999999');
            } else {
                col = new cc.Color().fromHEX('#999999');
            }
            ctx.strokeColor = col;
            col = null;
        }
        DrawUtils.drawRect(ctx, x + 3, y, w - 5, h, col);
    }

    //画线
    drawLine(ctx, sX, sY, eX, eY, falg?) {
        DrawUtils.drawLine(ctx, sX, sY, eX, eY, falg);
    }


}
