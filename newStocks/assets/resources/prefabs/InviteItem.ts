

import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import EventCfg from "../../sctiprs/utils/EventCfg";

import GlobalEvent from "../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class InviteItem extends cc.Component {

    @property(cc.Label)
    messLabel: cc.Label = null;

    @property(cc.Label)
    timeLabel: cc.Label = null;

    number = 1;

    cb = null;

    itemData = null;

    onInit(data) {

        this.itemData = data;

        let times = 4;

        this.cb = setInterval(() => {
            if (times <= 0) {
                clearInterval(this.cb);
                this.cb = null;
                this.node.destroy();
                this.timeLabel.string = ''
            } else {
                times--;
                this.timeLabel.string = '(' + times + ')' + '';
            }

        }, 1000);

        let arr = data.text.split(',');

        this.messLabel.string = '有人邀请您参加' + arr[1] + '是否接受';

    }

    onBtnClick(event, data) {

        let name = event.target.name;

        if (name == 'qdBtn') {

            GlobalEvent.emit(EventCfg.LEAVEGAME);

            let arr = this.itemData.text.split(',');

            if (arr[1] == 'PK大战') {
                if (EnterGameControl.onCurPKEnterGame()) {
                    this.node.active = false;
                    GameCfg.GameType = pb.GameType.JJ_PK;
                    GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.JJPKSet));
                    GlobalEvent.emit(EventCfg.OPENMATCHPK);

                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '您没有金币进入该游戏场');
                }
            }
            else {

                if (EnterGameControl.onCurPKEnterGame()) {
                    this.node.active = false;
                    GameCfg.GameType = pb.GameType.JJ_DuoKong;
                    GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.JJPKSet));
                    GlobalEvent.emit(EventCfg.OPENMATCHPK);

                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '您没有金币进入该游戏场');
                }
            }

        }

        else if (name == 'qxBtn') {
            this.node.active = false;
        }

    }

    onDisable() {
        this.cb && (clearInterval(this.cb))
        this.cb = null;
        if (this.number == 2) {
            this.node.destroy();
        }

    }


}
