

import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SignIn extends cc.Component {

    @property([cc.Node])
    items: cc.Node[] = [];

    award7 = [];

    getAward = false;

    @property(cc.Button)
    btnfl: cc.Button = null;

    start() {
        this.award7 = GameData.gameData.award7 || [];
        this.onShow();
    }

    onShow() {

        let ymd = TimeUtils.fromatTime1(new Date().getTime() / 1000);

        let flag = true;

        this.award7.forEach(el => {
            if (el == ymd) {
                flag = false;
            }
        })

        if (this.award7.length >= 7) {
            flag = false;
        }

        this.getAward = flag;

        this.btnfl.interactable = this.getAward;
        this.btnfl.enableAutoGrayEffect = !this.getAward;

        this.items.forEach((el, index) => {
            if (index < this.award7.length) {
                el.getChildByName('fl_ylq').active = true;
                el.getChildByName('lock').active = false;
            }
            else {
                el.getChildByName('fl_ylq').active = false;

                el.getChildByName('lock').active = true;

                if (this.getAward && index == this.award7.length) {
                    el.getChildByName('lock').active = false;
                }
            }
        })
    }

    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'sys_close') {
            this.node.active = false;
        } else if (name == 'fl_7d_lqjl') {
            let data = {
                index: parseInt(curdata),
                adClicked: false,
            }

            // let CmdGetDailyAward = pb.CmdGetDailyAward;
            // let message = CmdGetDailyAward.create(data);
            let buff = pb.CmdGetDailyAward.encode(data).finish();

            console.log(JSON.stringify(data));

            (<any>window).socket.send(pb.MessageId.Req_Hall_Get7Award, buff, (info) => {
                console.log('??????7????????????' + JSON.stringify(info));
            })

            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '???????????????');
            this.award7.push(TimeUtils.fromatTime1(new Date().getTime() / 1000));
            this.onShow();
        }
    }
}
