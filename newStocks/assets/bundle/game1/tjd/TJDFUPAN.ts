
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TJDFUPAN extends cc.Component {

    @property(cc.Label)
    zLabel: cc.Label = null;

    @property(cc.Label)
    cLabel: cc.Label = null;

    @property(cc.Label)
    nameLa: cc.Label = null;

    @property(cc.Label)
    tqzfLa: cc.Label = null;

    @property(cc.Label)
    sTimeLa: cc.Label = null;

    @property(cc.Label)
    eTimeLa: cc.Label = null;

    onShow(rate) {

        let gpData = GameCfg.data[0].data;
        this.zLabel.string = rate + '%';
        this.setLabelColor(this.zLabel, rate);

        this.nameLa.string = GameCfg.data[0].name;

        let tqzf = ((gpData[GameCfg.huizhidatas - 1].close - gpData[GameData.huizhidatas - 1].close) / gpData[GameData.huizhidatas - 1].close * 100).toFixed(2);
        this.tqzfLa.string = tqzf + '%';

        this.sTimeLa.string = TimeUtils.formatTime(gpData[GameData.huizhidatas - 1].day);
        this.eTimeLa.string = TimeUtils.formatTime(gpData[GameCfg.huizhidatas - 1].day);

    }

    setLabelColor(label, rate) {
        if (rate > 0) {
            label.node.color = new cc.Color().fromHEX('#e94343');
        }
        else if (rate == 0) {
            label.node.color = cc.Color.WHITE;
        }
        else {
            label.node.color = new cc.Color().fromHEX('#31a633');
        }
    }
}
