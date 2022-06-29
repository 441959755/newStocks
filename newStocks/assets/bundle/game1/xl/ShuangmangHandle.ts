

import LLWConfing from "../../../common/config/LLWConfing";
import { pb } from "../../../protos/proto";
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import GameBundle from "../../../sctiprs/hall/GameBundle";
import ActionUtils from "../../../sctiprs/utils/ActionUtils";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import PopupManager from "../../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShuangmangHandle extends cc.Component {

    @property(cc.Toggle)
    toggle1: cc.Toggle = null;

    @property(cc.Label)
    initLa: cc.Label = null;

    @property(cc.Label)
    curla: cc.Label = null;

    @property(cc.Node)
    CZBtn: cc.Node = null;

    @property(cc.Label)
    tipsLabel: cc.Label = null;

    curState = 0;

    onLoad() {
        //更新当前金币属性
        GlobalEvent.on(EventCfg.SMINITFUND, this.updataGold.bind(this), this);

        GlobalEvent.on(EventCfg.GMAECOUNTERSCHANGE, this.onGameCountShow.bind(this), this);
    }

    onGameCountShow() {
        if (LLWConfing.AppFrom == pb.AppFrom.WeChatMinProgram) {
            let gameCount = ComUtils.onCurWXIsEnterGame();
            this.tipsLabel.node.active = true;
            this.curState = gameCount.status;
            if (gameCount.status == 1) {
                this.tipsLabel.string = '今日免费剩余次数：' + gameCount.count + '次';
            }

            else if (gameCount.status == 2) {
                this.tipsLabel.string = '今日免费剩余次数：' + GameData.adSucceed + '次';
            }

            else if (gameCount.status == 3) {
                this.tipsLabel.string = '今日次数已用完,请点击在线客服,体验完整版APP';
                this.curState = 3;
            }
        }
        else {
            this.tipsLabel.node.active = false;
        }
    }

    updataGold() {
        //是否重置
        this.CZBtn.active = false;
        if (GameData.smxlState.gold <= GameData.gameConf.smxl.capital_min.value) {
            this.CZBtn.active = true;
        } else if (GameData.smxlState.gold >= GameData.gameConf.smxl.capital_max.value) {
            this.CZBtn.active = true;
        }


        this.curla.string = GameData.smxlState.gold;

        if (GameData.smxlState.gold >= 1000000000) {
            this.curla.string = '10亿+';
        }
        this.initLa.string = GameData.smxlState.goldInit;

        if (GameData.smxlState.goldInit >= 1000000000) {
            this.curla.string = '10亿+';
        }
    }

    protected onEnable() {
        this.toggle1.isChecked = GameData.smSet.isFC;
        this.updataGold();
        this.onGameCountShow();
    }

    onClick(event, curstData) {
        let name = event.target.name;
        //点击双盲训练
        if (name == 'startSMBtn') {

            if (GameData.smxlState.gold <= 10000) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '当前资产不足，请重置资产');
                return;
            }

            this.smStartGameSet();
        }

        //点击训练设置
        else if (name == 'setSMBtn') {
            // GlobalEvent.emit(EventCfg.OPENSETLAYER);
        }

        //点击历史记录
        else if (name == 'historySMBtn') {
            GameBundle.loadPre('xl/HistoryLayerSM', (node) => {
                ActionUtils.openNode(node);
            });
        }

        //点击月报
        else if (name == 'ypSMBtn') {
            GameBundle.loadPre('xl/SMMonthlyLayer', (node) => {
                ActionUtils.openNode(node);
            });
        }

        //点击收益曲线
        else if (name == 'xlSMBtn') {
            // GlobalEvent.emit(EventCfg.OPENYIELDLAYER);
            GameBundle.loadPre('xl/SMYieldCurve', (node) => {
                ActionUtils.openNode(node);
            });
        }

        else if (name == 'blackbtn') {
            GameCfg.GameType = null;
            this.node.active = false;
        }

        else if (name == 'smxl_btn_czbig') {
            GameBundle.loadPre('xl/SMResetMoney', (node) => {
                ActionUtils.openNode(node);
            });
        }

        //点击帮助
        else if (name == 'sys_helpbig1') {
            PopupManager.openHelpLayer();
        }
    }

    onToggleClick(event, data) {
        let name = event.node._name;
        if (name == 'toggle1') {
            let data = GameData.smSet;
            data.isFC = this.toggle1.isChecked;
            GameData.smSet = data;
        }
    }

    smStartGameSet() {

        GlobalEvent.emit(EventCfg.SHOWLOADING);

        GameCfg.GAMEFUPAN = false;

        GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.smSet));

        GameCfg.ziChan = parseInt(GameData.smxlState.gold);

        GameCfg.enterGameConf = {
            ktype: pb.KType.Day,
            kstyle: pb.KStyle.Random,
            code: null,
            from: null,
            total: 256,
            to: 0,
            reserve: 106,
        }

        ConfUtils.getGPSMByRandom();

        console.log('给的数据:' + JSON.stringify(GameCfg.enterGameConf));

        GameData.huizhidatas = GameCfg.enterGameConf.reserve;

        GameCfg.huizhidatas = GameCfg.enterGameConf.reserve;

        GlobalHandle.enterGameSetout(GameCfg.enterGameConf, () => {
            GlobalEvent.emit(EventCfg.HIDELOADING);
            GameBundle.loadPre('gameLayer');
        });
    }

    onDestroy() {
        GlobalEvent.off(EventCfg.SMINITFUND);
        GlobalEvent.off(EventCfg.GMAECOUNTERSCHANGE);
    }

}
