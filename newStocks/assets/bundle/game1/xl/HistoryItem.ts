
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HistoryItem extends cc.Component {

    infoData = null;

    @property([cc.Label])
    labels: cc.Label[] = [];

    onShow(info, index?) {

        this.infoData = info;
        this.labels[0].string = (index + 1) + '';

        info.quotesCode += '';

        let codes = info.quotesCode + '', items;

        if (codes.length >= 7) {
            codes = info.quotesCode.slice(1);
        }
        this.labels[1].string = codes;

        if (GameCfg.GameType == pb.GameType.QiHuo) {
            items = ConfUtils.getQHItemInfo(info.quotesCode);
            this.labels[1].string = items[2] + items[3];
        }
        else {
            items = ConfUtils.getGPItemInfo(info.quotesCode);
        }

        this.labels[2].string = items[1];
        this.labels[3].string = info.kFrom;
        this.labels[4].string = info.kTo;
        this.labels[5].string = info.stockProfitRate.toFixed(2) + '%';

        if (info.stockProfitRate > 0) {
            this.labels[5].node.color = new cc.Color().fromHEX('#e94343');
        }
        else if (info.stockProfitRate < 0) {
            this.labels[5].node.color = new cc.Color().fromHEX('#31a633');
        }
        else {
            this.labels[5].node.color = cc.Color.WHITE;
        }

        this.labels[6].string = info.userProfitRate.toFixed(2) + '%';
        if (info.userProfitRate > 0) {
            this.labels[6].node.color = new cc.Color().fromHEX('#e94343');
        } else if (info.userProfitRate < 0) {
            this.labels[6].node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.labels[6].node.color = cc.Color.WHITE;
        }

        if (!this.labels[7]) { return }

        if (info.userProfit >= 1000000000) {
            this.labels[7].string = '10???+';
        }
        else if (info.userProfit >= 100000) {
            this.labels[7].string = (info.userProfit / 10000).toFixed(2) + '???';
        }
        else {
            this.labels[7].string = info.userProfit;
        }


        if (info.userProfit > 0) {
            this.labels[7].node.color = new cc.Color().fromHEX('#e94343');
        } else if (info.userProfit < 0) {
            this.labels[7].node.color = new cc.Color().fromHEX('#31a633');
        } else {
            this.labels[7].node.color = cc.Color.WHITE;
        }

        if (GameCfg.GameType != pb.GameType.ShuangMang) {
            this.labels[8].string = info.ts;
            this.labels[9].string = info.kStartup;
            this.labels[10].string = info.kStop;
        }

        if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            this.labels[11].string = '0';
            this.labels[12].string = '0';
            if (!GameData.zhibiaoHisSet[info.ts + '']) {
                let GameSet = cc.sys.localStorage.getItem(info.ts + 'set');
                if (GameSet) {
                    GameData.zhibiaoHisSet[info.ts + ''] = JSON.parse(GameSet);
                    this.labels[12].string = GameData.zhibiaoHisSet[info.ts + ''].select + ' ' + GameData.zhibiaoHisSet[info.ts + ''].strategy;
                }
            }
            else {
                this.labels[12].string = GameData.zhibiaoHisSet[info.ts + ''].select + ' ' + GameData.zhibiaoHisSet[info.ts + ''].strategy;
            }

            if (!GameData.zhibiaoHisSet[info.ts + 'AIRATE']) {
                let aiRate = cc.sys.localStorage.getItem(info.ts + 'AIRATE') || 0;
                if (aiRate) {
                    GameData.zhibiaoHisSet[info.ts + 'AIRATE'] = aiRate;
                    this.labels[11].string = parseFloat(GameData.zhibiaoHisSet[info.ts + 'AIRATE']).toFixed(2) + '%';
                }
            }
            else {
                this.labels[11].string = parseFloat(GameData.zhibiaoHisSet[info.ts + 'AIRATE']).toFixed(2) + '%';
            }


            if (parseFloat(GameData.zhibiaoHisSet[info.ts + 'AIRATE']) > 0) {
                this.labels[11].node.color = new cc.Color().fromHEX('#e94343');
            }

            else if (parseFloat(GameData.zhibiaoHisSet[info.ts + 'AIRATE']) < 0) {
                this.labels[11].node.color = new cc.Color().fromHEX('#31a633');
            }
            else {
                this.labels[11].node.color = cc.Color.WHITE;
            }

        }

    }

    onBtnClick(event, curdata) {
        let name = event.target.name;
        //????????????
        if (name == 'btnFuPan') {

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            let ts = parseInt(this.infoData.ts);

            let info = {
                uid: GameData.userID,
                ts: ts,
            }


            GlobalHandle.GetGameOperations(info, () => {

                let data = {
                    code: this.infoData.quotesCode,
                }

                let dex = -1, items;
                if (GameCfg.GameType == pb.GameType.QiHuo) {
                    items = ConfUtils.getQHItemInfo(data.code);
                } else {
                    items = ConfUtils.getGPItemInfo(data.code);
                }

                data.code = items[0];
                GameCfg.data[0].data = [];
                GameCfg.data[0].name = items[1];
                GameCfg.data[0].code = items[0];
                GameCfg.data[0].circulate = items[4];

                GameCfg.GAMEFUPAN = true;

                GameCfg.allRate = 0;

                GameCfg.historyType = GameCfg.GameType;

                if (this.infoData.gType == pb.GameType.ShuangMang) {
                    GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.smSet));
                }

                else if (this.infoData.gType == pb.GameType.ZhiBiao) {
                    GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.zbSet));
                }

                else if (this.infoData.gType == pb.GameType.QiHuo) {
                    GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.qhSet));
                }

                else if (this.infoData.gType == pb.GameType.DingXiang) {
                    GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.dxSet));
                }

                else if (this.infoData.gType == pb.GameType.TiaoJianDan) {
                    GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.tjdSet));
                }

                GameCfg.enterGameConf = {
                    ktype: this.infoData.kType,
                    kstyle: pb.KStyle.Random,
                    code: this.infoData.quotesCode,
                    from: this.infoData.kFrom + '',
                    total: this.infoData.kStop + 1,
                    reserve: this.infoData.kStartup + 1,
                };

                console.log(JSON.stringify(GameCfg.enterGameConf));
                GameCfg.historyType = GameCfg.GameType;

                if (GameCfg.GameType == pb.GameType.QiHuo) {
                    GlobalHandle.getStockQuotesQH(GameCfg.enterGameConf, this.loadGame.bind(this));
                }

                else {
                    GlobalHandle.getStockQuotes(GameCfg.enterGameConf, this.loadGame.bind(this))
                }
            });
        }
    }

    loadGame() {
        GameData.huizhidatas = this.infoData.kStartup + 1;
        GameCfg.huizhidatas = this.infoData.kStop + 1;
        if (GameCfg.GameType == pb.GameType.TiaoJianDan) {
            GlobalEvent.emit(EventCfg.OPENTJDGAME);
        }
        else if (GameData.huizhidatas && GameCfg.huizhidatas) {
            GlobalEvent.emit('LOADGAME');
        }
    }
}
