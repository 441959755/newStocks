
import LLWSDK from "../../common/sdk/LLWSDK";
import GameData from "../../sctiprs/GameData";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SericeHandle extends cc.Component {
    @property(cc.Label)
    qqLabel: cc.Label = null;

    @property(cc.Label)
    wxLabel: cc.Label = null;

    @property(cc.Label)
    gzhLabel: cc.Label = null;

    @property(cc.Label)
    qunLabel: cc.Label = null;



    start() {
        this.qqLabel.string = GameData.appConf.QQ;
        this.wxLabel.string = GameData.appConf.wechat;
        this.gzhLabel.string = GameData.appConf.wechatGZH;
        this.qunLabel.string = GameData.appConf.QQ_Group;

    }


    onBtnClick(event, curData) {
        let name = event.target.name;
        switch (name) {
            case 'closeBtn':
                this.node.active = false;
                break;

            case "main_kf_tj":
                let str;
                if (curData == 1) {
                    str = GameData.appConf.QQ;
                }
                else if (curData == 2) {
                    str = GameData.appConf.wechat;
                }
                else if (curData == 3) {
                    str = GameData.appConf.wechatGZH;
                }
                else if (curData == 4) {
                    str = GameData.appConf.QQ_Group;
                }

                LLWSDK.getSDK().copyborad(str);
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '已复制到剪贴板');
                break;

            default:
                break;
        }

    }

}
