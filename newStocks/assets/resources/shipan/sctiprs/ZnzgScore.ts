import { pb } from "../../../proto/proto";
import DrawData from "../../../sctiprs/DrawData";
import GameCfg from "../../../sctiprs/GameCfg";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
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

    onLoad() {

    }

    protected start(): void {
        ZnzgControl.scoreNode = this.node;
    }

    protected onEnable(): void {

        this.nameLabel.string = ZnzgControl.searchName;
        this.codeLabel.string = ZnzgControl.searchCode;

        this.scoreLabel.string = '';
        this.timeLabel.string = '诊断日期：' + ZnzgControl.searTime;



        this.getStockQuotes();
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
                DrawData.initDrawData(GameCfg.data[0].data);
                ZnzgStockIndex.initData();
                ZnzgStockIndex.startSockIndex();
                ZnzgStockIndex.getRiseProbability();
            }
        })
    }

    protected onDisable(): void {
        ZnzgStockIndex.clearData();
    }
}
