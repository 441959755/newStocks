import LLWSDK from "../../common/sdk/LLWSDK";
import DrawData from "../../sctiprs/DrawData";
import StrategyAIData from "../../sctiprs/game/StrategyAIData";
import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import GlobalHandle from "../../sctiprs/GlobalHandle";
import StockData from "../../sctiprs/StockData";
import ComUtils from "../../sctiprs/utils/ComUtils";
import ConfUtils from "../../sctiprs/utils/ConfUtils";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../sctiprs/utils/TimeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class FinalHandle extends cc.Component {

    @property(cc.Label)
    nameTipsLabel: cc.Label = null;

    @property(cc.Label)
    nameLabel: cc.Label = null;

    @property(cc.Label)
    maLabel: cc.Label = null;

    @property(cc.Label)
    timeLabel: cc.Label = null;

    @property(cc.Label)
    riseLabel: cc.Label = null;

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Label)
    levelLabel: cc.Label = null;

    @property(cc.Label)
    expLabel: cc.Label = null;

    @property(cc.Sprite)
    headImg: cc.Sprite = null;

    @property(cc.Label)
    AllRise: cc.Label = null;

    @property(cc.Label)
    yingCont: cc.Label = null;

    @property(cc.Label)
    kunCount: cc.Label = null;

    @property(cc.Node)
    qhxl_kui: cc.Node = null;

    @property(cc.Node)
    qhxl_zhuan: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    contentZB: cc.Node = null;

    @property(cc.Node)
    DXXLGG: cc.Node = null;

    @property([cc.Node])
    boxs: cc.Node[] = [];

    @property(cc.Node)
    vipNode: cc.Node = null;

    onShow() {
        let gpData = GameCfg.data[0].data;

        if (!gpData || gpData.length <= 0) { return }

        this.DXXLGG.active = false;

        if (GameCfg.GameType == pb.GameType.DingXiang) {
            this.DXXLGG.active = true;
        }

        //????????????
        this.headImg.spriteFrame = GameData.headImg;
        this.levelLabel.string = 'LV:  ' + GameData.properties[pb.GamePropertyId.Level] || '1';
        let max_exp = GameData.gameConf.level_exp[GameData.properties[pb.GamePropertyId.Level]];
        this.expLabel.string = 'EXP:' + GameData.properties[pb.GamePropertyId.Exp] + '/' + max_exp;
        this.userName.string = GameData.userName;

        if (GameData.vipStatus) {
            this.vipNode.active = true;
        }
        else {
            this.vipNode.active = false;
        }

        this.contentZB.active = false;
        this.content.active = false;
        //????????????
        if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            this.contentZB.active = true;
            this.showContentZB();
        } else {
            this.content.active = true;
            this.showContent();

            if (GameCfg.GameType == pb.GameType.ShuangMang) {

                this.boxs[0].active = true;
                this.boxs[1].active = true;
                this.boxs[2].active = true;

                if (GameData.smxlState.gold >= 1000000000) {
                    this.boxs[0].children[1].getComponent(cc.Label).string = '10???+';
                }
                else {
                    this.boxs[0].children[1].getComponent(cc.Label).string = GameData.smxlState.gold;
                }

                if (parseInt((GameCfg.finalfund - GameCfg.ziChan) + '') >= 1000000000) {
                    this.boxs[1].children[1].getComponent(cc.Label).string = '10???+';
                }
                else {
                    this.boxs[1].children[1].getComponent(cc.Label).string = parseInt((GameCfg.finalfund - GameCfg.ziChan) + '') + ''
                }

                if (GameData.smxlState.gold + parseInt((GameCfg.finalfund - GameCfg.ziChan) + '') >= 1000000000) {
                    this.boxs[2].children[1].getComponent(cc.Label).string = '10???+';
                }
                else {
                    this.boxs[2].children[1].getComponent(cc.Label).string = GameData.smxlState.gold + parseInt((GameCfg.finalfund - GameCfg.ziChan) + '') + '';
                }
            }
            else {
                this.boxs[0].active = false;
                this.boxs[1].active = false;
                this.boxs[2].active = false;
            }
        }

        let userProfit = 0;

        if (GameCfg.finalfund <= 0) {
            userProfit = 0;
        }
        else {
            userProfit = (GameCfg.finalfund - GameCfg.ziChan);
        }

        //????????????????????????
        if (!GameCfg.GAMEFUPAN) {
            let datas = {
                uid: GameData.userID,
                gType: GameCfg.GameType,
                quotesCode: gpData[0].code || parseInt(GameCfg.data[0].code),
                kType: GameCfg.enterGameConf.ktype,
                kFrom: parseInt(TimeUtils.fromatTime1(gpData[GameData.huizhidatas - 1].day)),
                kTo: parseInt(TimeUtils.fromatTime1(gpData[GameCfg.huizhidatas - 1].day)),
                stockProfitRate: ((gpData[GameCfg.huizhidatas - 1].close - gpData[GameData.huizhidatas - 1].close) / gpData[GameData.huizhidatas - 1].close * 100),
                userProfitRate: (GameCfg.allRate * 100),
                userCapital: GameData.smxlState.gold,
                userProfit: (GameCfg.finalfund - GameCfg.ziChan),
                ts: parseInt(new Date().getTime() / 1000 + ''),
                rank: 0,
                refId: 0,
                kStartup: GameData.huizhidatas - 1,
                kStop: GameCfg.huizhidatas - 1,
            }
            if (GameCfg.GameType == pb.GameType.ShuangMang) {
                datas.userCapital = GameData.smxlState.gold;
            } else {
                datas.userCapital = GameCfg.ziChan;
            }

            if (GameCfg.GameType == pb.GameType.QiHuo) {
                datas.kFrom = GameCfg.enterGameConf.from;
            }

            datas.rank = datas.userProfitRate >= datas.stockProfitRate ? 1 : 2;

            datas.refId = 0;

            let CmdGameOver;

            let arr = ComUtils.getJJJunXian();
            if (GameCfg.GameType != pb.GameType.ShuangMang) {
                CmdGameOver = {
                    result: datas,
                    operations: {
                        items: StockData.arrOpt,
                        junXian: arr,
                    }
                }
            } else {
                CmdGameOver = {
                    result: datas,
                }
            }

            GlobalHandle.onCmdGameOverReq(CmdGameOver, this.saveHoistoryInfo.bind(this));
        }
    }

    showContentZB() {
        let info = StrategyAIData.onCompareReult();
        let gpData = GameCfg.data[0].data;
        let boxs = this.contentZB.children;
        {
            let la = boxs[0].getChildByName('label1').getComponent(cc.Label);
            la && (la.string = GameCfg.data[0].name)

            let la1 = boxs[0].getChildByName('label2').getComponent(cc.Label);
            let code = GameCfg.data[0].code + '';
            if (code.length >= 7) {
                code = code.slice(1);
            }
            la1 && (la1.string = code);
        }

        {
            let la = boxs[1].getChildByName('label1').getComponent(cc.Label);
            la && (la.string = TimeUtils.formatTime(gpData[GameData.huizhidatas - 1].day) + '--' + TimeUtils.formatTime(gpData[GameCfg.huizhidatas - 1].day))
        }

        {
            let la = boxs[2].getChildByName('label1').getComponent(cc.Label);
            let rate = ((gpData[GameCfg.huizhidatas - 1].close - gpData[GameData.huizhidatas - 1].close) / gpData[GameData.huizhidatas - 1].close * 100).toFixed(2)
            la && (la.string = rate + '%')
            if (parseInt(rate) < 0) {
                la.node.color = new cc.Color().fromHEX('#31a633');
            } else {
                la.node.color = new cc.Color().fromHEX('#e94343');
            }

        }

        {
            let la = boxs[3].getChildByName('richText').getComponent(cc.Label);
            la && (la.string = GameCfg.GameSet.select + '/' + GameCfg.GameSet.strategy)
        }

        {
            //??????????????????   ???????????????
            let la = boxs[4].getChildByName('richText').getComponent(cc.Label);

            la.string = StrategyAIData.buyCount + '';


            let la1 = boxs[4].getChildByName('richText1').getComponent(cc.Label);

            la1.string = info.high.length + '';

        }

        {
            //??????????????????    ???????????????
            let la = boxs[5].getChildByName('richText').getComponent(cc.Label);
            la.string = (StrategyAIData.profitrate * 100).toFixed(2) + '%';

            if (StrategyAIData.profitrate < 0) {
                la.node.color = new cc.Color().fromHEX('#31a633');
            } else {
                la.node.color = new cc.Color().fromHEX('#e94343');
            }

            let la1 = boxs[5].getChildByName('richText1').getComponent(cc.Label);
            la1.string = info.middle.length + '';
        }

        { //??????????????????    ???????????????
            let la = boxs[6].getChildByName('richText').getComponent(cc.Label);
            la.string = (GameCfg.allRate * 100).toFixed(2) + '%';
            if (GameCfg.allRate < 0) {
                la.node.color = new cc.Color().fromHEX('#31a633');
            } else {
                la.node.color = new cc.Color().fromHEX('#e94343');
            }

            let la1 = boxs[6].getChildByName('richText1').getComponent(cc.Label);
            la1.string = info.low.length + '';
        }

        {
            //???????????????
            let la = boxs[7].getChildByName('richText').getComponent(cc.Label);

            let point = (3 * info.high.length + info.middle.length) / (3 * info.high.length + info.middle.length + 2 * info.low.length) * 100;
            if ((3 * info.high.length + info.middle.length + 2 * info.low.length) == 0) {
                point = 0;
            }

            la.string = (point).toFixed(2) + '%';
            let node1 = boxs[7].getChildByName('node1');
            let node2 = boxs[7].getChildByName('node2');
            let node3 = boxs[7].getChildByName('node3');

            node1.active = false;
            node2.active = false;
            node3.active = false;
            if (point >= 85) {
                node1.active = true;
            }
            else if (point >= 60) {
                node2.active = true;
            }
            else {
                node3.active = true;
            }
        }
    }

    showContent() {

        let gpData = GameCfg.data[0].data;
        this.nameLabel.string = GameCfg.data[0].name;
        let code = GameCfg.data[0].code + '';

        if (code.length >= 7 && GameCfg.GameType != pb.GameType.QiHuo) {
            code = code.slice(1);
        }

        this.maLabel.string = code;

        this.timeLabel.string = TimeUtils.formatTime(gpData[GameData.huizhidatas - 1].day) + '--' + TimeUtils.formatTime(gpData[GameCfg.huizhidatas - 1].day);

        //????????????
        let tq = ((gpData[GameCfg.huizhidatas - 1].close - gpData[GameData.huizhidatas - 1].close) / gpData[GameData.huizhidatas - 1].close * 100).toFixed(2);

        this.riseLabel.string = tq + '%';
        if (parseFloat(tq) > 0) {
            this.riseLabel.node.color = new cc.Color().fromHEX('#e94343');
        } else if (parseFloat(tq) < 0) {
            this.riseLabel.node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.riseLabel.node.color = cc.Color.WHITE;
        }

        //????????????
        let all = ((GameCfg.allRate) * 100).toFixed(2);

        this.AllRise.string = all + '%';

        if (parseFloat(all) > 0) {
            this.AllRise.node.color = new cc.Color().fromHEX('#e94343');
        } else if (parseFloat(all) < 0) {
            this.AllRise.node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.AllRise.node.color = cc.Color.WHITE;
        }

        let info = DrawData.getBukoCount();

        this.yingCont.string = info.yCount + '???';

        if (info.yCount > 0) {
            this.yingCont.node.color = new cc.Color().fromHEX('#e94343');
        } else {
            this.yingCont.node.color = cc.Color.WHITE;
        }

        this.kunCount.string = info.sCount + '???';

        if (info.sCount > 0) {
            this.kunCount.node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.kunCount.node.color = cc.Color.WHITE;
        }
        if (GameCfg.GameType == pb.GameType.QiHuo) {
            this.nameTipsLabel.string = '????????????';
            this.maLabel.string = '';
            if (parseFloat(all) > 0) {
                this.qhxl_zhuan.active = true;
            } else if (parseFloat(all) < 0) {
                this.qhxl_kui.active = true;
            }
        }
    }

    saveHoistoryInfo(ts) {

        if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            cc.sys.localStorage.setItem(ts + 'set', JSON.stringify(GameCfg.GameSet));
            let AiRate = StrategyAIData.profitrate * 100;
            cc.sys.localStorage.setItem(ts + 'AIRATE', AiRate);
        }
    }

    onBtnClick(event, data) {

        let name = event.target.name;
        //????????????
        if (name == 'closeBtn') {
            this.leavaGame();
            GlobalEvent.emit(EventCfg.LEAVEGAME);
        }
        //????????????
        else if (name == 'lx_jsbt_zlyj') {

            GlobalEvent.emit(EventCfg.LEAVEGAME);

            if (!this.gotoGame()) {
                return;
            }

            this.restartGame();
        }

        else if (name == 'lx_jsbt_xl') {

            GlobalEvent.emit(EventCfg.LEVELCHANGE);

            GlobalEvent.emit(EventCfg.LEAVEGAME);

            if (!this.gotoGame()) {
                return;
            }
            this.leavaGame();
            GlobalHandle.onCmdGameStartReq(() => {
                // GameData.huizhidatas = GameCfg.data[0].data.length - (GameCfg.data[0].data.length - 100);
                GameCfg.huizhidatas = GameData.huizhidatas;
                let gpData = GameCfg.data[0].data;
                GameCfg.GameSet.search = GameCfg.data[0].code;
                GameCfg.GameSet.year = gpData[GameData.huizhidatas - 1].day;
                GlobalEvent.emit('LOADGAME');
            });
        }
        //??????
        else if (name == 'lx_jsbt_qd') {
            this.node.active = false;
            GameCfg.GAMEFUPAN = true;
            GlobalEvent.emit(EventCfg.GAMEFUPAN);
        }

        else if (name == 'lx_fx') {

            LLWSDK.getSDK().shareAppMessage(1);
        }
    }

    restartGame() {

        this.leavaGame();

        GlobalEvent.emit(EventCfg.SHOWLOADING);

        if (GameCfg.GameType == pb.GameType.ShuangMang) {
            ConfUtils.getGPSMByRandom();
        }

        else if (GameCfg.GameType == pb.GameType.DingXiang) {
            ConfUtils.getGPDXByRandom();
        }

        else if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            ConfUtils.getGPZBByRandom();
        }

        else if (GameCfg.GameType == pb.GameType.QiHuo) {
            ConfUtils.getQHQHByRandom();
        }

        GlobalHandle.enterGameSetout(GameCfg.enterGameConf, () => {

            GameData.huizhidatas = GameCfg.data[0].data.length - (GameCfg.data[0].data.length - 100);
            GameCfg.huizhidatas = GameCfg.data[0].data.length - (GameCfg.data[0].data.length - 100);

            if (GameCfg.data[0].data.length - GameData.huizhidatas < 100) {
                GameData.huizhidatas = GameCfg.data[0].data.length - 100;
                GameCfg.huizhidatas = GameCfg.data[0].data.length - 100;
            }

            GlobalEvent.emit('LOADGAME');
        });
    }

    leavaGame() {
        this.qhxl_zhuan.active = false;
        this.qhxl_kui.active = false;
        GameCfg.allRate = 0;
        GameCfg.finalfund = 0;
        //  GameCfg.GAMEFUPAN = false;
        GameCfg.history.allRate = 0;
        GameCfg.RoomGameData = null;
    }


    gotoGame() {

        // if (GameCfg.GameType == pb.GameType.ShuangMang || GameCfg.GameType == pb.GameType.FenShi) {
        //     return true;
        // }

        // if (GameData.properties[pb.GamePropertyId.Gold] < 500) {
        //     GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????');
        //     return false;
        // }

        let gameCount = ComUtils.onCurWXIsEnterGame();

        let curState, adSucceed;

        if (gameCount.status == 1) {
            curState = 1;
        }

        else if (gameCount.status == 2) {
            curState = 2;
        }

        else {
            curState = 3;
        }

        if (curState == 2 && !GameData.adSucceed) {

            LLWSDK.getSDK().showVideoAd((flag) => {
                if (flag) {
                    GameData.adSucceed += 1;
                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '????????????????????????????????????');
                }
            })
            return false;
        }

        else if (curState == 3) {
            return false;
        }

        return true;
    }

}
