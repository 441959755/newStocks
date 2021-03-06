


import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import StockData from "../../sctiprs/StockData";
import ComUtils from "../../sctiprs/utils/ComUtils";

import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
//import ZnzgControl from "../shipan/sctiprs/ZnzgControl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnterXLGame extends cc.Component {

    @property(cc.Label)
    xlname: cc.Label = null;

    @property(cc.Label)
    codename: cc.Label = null;

    @property(cc.Label)
    tipsLabel: cc.Label = null;

    code = null;
    gpList = null;
    name = null;

    onEnable() {

        this.xlname.string = '前往定向训练场训练该股票';
        let code;
        //xl
        if (GameCfg.GameType == pb.GameType.JJ_PK ||
            GameCfg.GameType == pb.GameType.JJ_DuoKong ||
            GameCfg.GameType == pb.GameType.JJ_ChuangGuan) {

            code = GameCfg.data[0].code + '';

            this.name = GameCfg.data[0].name;

            this.code = code;

            if (code.length >= 7) {
                code = code.slice(1);
            }
        }
        //sp
        else if (GameCfg.GameType == 'ZNZG') {
            code = ZnzgControl.searchCode;

            this.name = ZnzgControl.searchName;
            this.code = code;

            if (code.length >= 7) {
                code = code.slice(1);
            }
        }

        this.codename.string = code + '     ' + this.name;

        GameData.vipStatus ? this.tipsLabel.string = '0' : this.tipsLabel.string = '500';

    }

    onShow(code, name, list) {

        this.code = code + '';

        if (this.code.length >= 7) {
            code = this.code.slice(1);
        }
        this.gpList = list;

        this.xlname.string = '前往定向训练场训练该股票';
        this.codename.string = code + '     ' + name;
        this.name = name;
    }


    onBtnClick(event, curData) {
        let name = event.target.name;

        if (name == 'qxBtn') {
            this.node.active = false;
        }
        else if (name == 'qdBtn') {

            GlobalEvent.emit(EventCfg.LEAVEGAME);

            if (!GameData.vipStatus) {
                let gameCount = ComUtils.onCurWXIsEnterGame(pb.GameType.DingXiang);

                if (gameCount.status == 3) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '今日次数已用完,开启VIP或解锁该功能取消次数限制');
                    return;
                }
            }
            let data;
            //pk进入训练
            if (GameCfg.GameType == pb.GameType.JJ_PK ||

                GameCfg.GameType == pb.GameType.JJ_DuoKong ||

                GameCfg.GameType == pb.GameType.JJ_ChuangGuan) {

                data = {
                    ktype: pb.KType.Day,
                    kstyle: pb.KStyle.Random,
                    from: GameCfg.RoomGameData.players[0].result.kFrom,
                    code: this.code,
                    total: 250,
                    to: 0,
                    reserve: 100,
                }
                let items;

                if (GameCfg.GameType == pb.GameType.QiHuo) {
                    items = GameCfgText.getQHItemInfo(data.code);
                } else {
                    items = GameCfgText.getGPItemInfo(data.code);
                }

                GameCfg.enterGameConf = data;

                GameCfg.GameType = pb.GameType.DingXiang;

                GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.dxSet));

                GameCfg.GameSet.search = data.code;
                GameCfg.GameSet.year = data.from;

                GameCfg.GameSet.year = (data.from + '').slice(0, 4);

                GameCfg.GameSet.search = data.code;
                //   GameCfg.data[0].data = [];
                GameCfg.data[0].name = this.name;

                GameCfg.data[0].code = this.code;

                GameCfg.data[0].circulate = items[4];

                GameCfg.huizhidatas = 106;

                GameData.huizhidatas = 106;
                GameCfg.GAMEFUPAN = false;
                GameCfg.allRate = 0;
                GameCfg.finalfund = 0;
                GameCfg.fill = [];
                GameCfg.blockHistoy = [];
                GameCfg.mark = [];
                GameCfg.notice = [];
                GameCfg.history.allRate = 0;

                StrategyAIData.onClearData();

                GlobalEvent.emit('LOADGAME');
            }

            //sp进入训练
            else {

                GameCfg.GameType = pb.GameType.DingXiang;

                GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.dxSet));
                GameCfg.data[0].name = this.name;

                GameCfg.data[0].code = this.code;
                let items;

                if (GameCfg.GameType == pb.GameType.QiHuo) {
                    items = GameCfgText.getQHItemInfo(this.code);
                } else {
                    items = GameCfgText.getGPItemInfo(this.code);
                    GameCfg.GameSet = GameData.DXSet;
                    GameData.DXSet.market == '随机行情';
                }

                let ktype = pb.KType.Day;
                if (GameCfg.GameSet.ZLine == '周线') {
                    ktype = pb.KType.Day7;
                }

                GameCfg.data[0].circulate = items[4];

                data = {
                    ktype: ktype,
                    kstyle: pb.KStyle.Random,
                    //  from: this.gpList[0].timestamp,
                    code: this.code,
                    total: parseInt(GameCfg.GameSet.KLine) + 100,
                    to: this.gpList[this.gpList.length - 1].timestamp,
                    reserve: 100,
                }

                console.log('sp进入训练:' + JSON.stringify(data));


                GameCfg.enterGameConf = data;

                GameCfg.GameType = pb.GameType.DingXiang;

                GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.DXSet));

                GameCfg.GameSet.search = data.code;
                // GameCfg.GameSet.year = data.from;

                // GameCfg.GameSet.year = (data.from + '').slice(0, 4);

                GameCfg.GameSet.search = data.code;
                GameCfg.data[0].data = [];
                GameCfg.data[0].name = this.name;

                GameCfg.data[0].code = this.code;

                GameCfg.data[0].circulate = items[4];

                EnterGameControl.onClearPreGameDataEnter(data);

            }
            this.node.active = false;

        }
    }

}
