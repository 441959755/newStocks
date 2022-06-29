import GameData from "../GameData";
import ComUtils from "../utils/ComUtils";
import GameCfg from "../GameCfg";
import TimeUtils from "../utils/TimeUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BottomXLZB extends cc.Component {

    @property(cc.Label)
    la_code: cc.Label = null;

    @property(cc.Label)
    la_time: cc.Label = null;

    @property(cc.Label)
    la_tq: cc.Label = null;

    onEnable() {
        let gpdata = GameCfg.data[0].data;

        let code = GameCfg.data[0].code;
        if (code.length >= 7) {
            code = code.slice(1);
        }
        this.la_code.string = GameCfg.data[0].name + ' ' + code;

        this.la_time.string = TimeUtils.formatTime(gpdata[GameData.huizhidatas - 1].day) + '--' + ComUtils.formatTime(gpdata[gpdata.length - 1].day);

        this.la_tq.string = '同期涨幅：' + (((gpdata[GameCfg.huizhidatas - 1].close - gpdata[GameData.huizhidatas - 1].close) / gpdata[GameData.huizhidatas - 1].close * 100).toFixed(2)) + '%';
    }

}
