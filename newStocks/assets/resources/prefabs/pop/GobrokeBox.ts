
import LLWSDK from "../../../common/sdk/LLWSDK";
import { pb } from "../../../proto/proto";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GobrokeBox extends cc.Component {

    onLoad() {
        // GlobalEvent.on('CmdGoldAwardPrompt', () => {
        //     if (this.node.active) {

        //         GlobalEvent.emit(EventCfg.LOADINGHIDE);
        //         GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '领取成功');
        //     }
        // }, this);
    }


    onClickBtn(event, curdata) {
        let name = event.target.name;

        if (name == 'sys_tck_qd') {

            LLWSDK.getSDK().showVideoAd((falg) => {

                if (falg) {
                    (<any>window).socket.send(pb.MessageId.Req_Hall_GetBrokenAward, null, (res) => {

                    })
                    this.node.active = false;
                }
            });

        }

        else if (name == 'sys_close') {
            this.node.active = false;
        }
    }

    onDestroy() {
        GlobalEvent.off('CmdGoldAwardPrompt');
    }

}
