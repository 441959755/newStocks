
import { pb } from "../../../protos/proto";
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AddRoomHandle extends cc.Component {

    @property(cc.Label)
    roomidLabel: cc.Label = null;

    @property(cc.Label)
    tipsLabel: cc.Label = null;


    onBtnClick(event, data) {

        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }
        //点击加入对战
        else if (name == 'jj_jrdz') {
            let str = this.roomidLabel.string;
            if (str.length < 4 || str.length > 4) {
                this.roomidLabel.string = '';
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '房间ID有误！请重新输入');
            }
            else {

                this.onEnterRoom(str);
            }

        }

        else if (name == 'node') {
            this.tipsLabel.node.active = false;
            let id = parseInt(data);
            let str = this.roomidLabel.string;

            str += id + '';
            this.roomidLabel.string = str;
        }

        //清除
        else if (name == 'btnQC') {
            this.roomidLabel.string = '';
        }
        //删除
        else if (name == 'btnSC') {
            let str = this.roomidLabel.string;
            if (str.length >= 1) {
                str = str.slice(0, -1);
            }
            this.roomidLabel.string = str;
        }
    }

    onEnterRoom(roomid) {


        let arr = ComUtils.getJJJunXian();

        let data = {
            id: parseInt(roomid),
            uid: GameData.userID,
            junXian: arr,
            wxHeadicon: GameData.headImgurl,
        }

        let CmdRoomEnter = pb.CmdRoomEnter;
        let message = CmdRoomEnter.create(data);
        let buff = CmdRoomEnter.encode(message).finish();

        GameData.RoomType = 2;

        (<any>window).socket.send(pb.MessageId.Req_Room_Enter, buff, (res) => {
            console.log('进入房间11' + JSON.stringify(res));
            let str = '';
            this.roomidLabel.string = str;
            if (res.err) {
                GameData.RoomType = 0;
                this.roomidLabel.string = '';
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '您输入的房间ID有误，请重新输入。');
            } else {
                GameData.roomId = res.id;
                this.node.active = false;
                GameData.RoomType = 2;
            }
        })
    }

    onDisable() {
        this.roomidLabel.string = '';
    }


}