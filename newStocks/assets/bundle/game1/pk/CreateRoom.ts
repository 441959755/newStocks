

import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class CreateRoom extends cc.Component {

    @property([cc.Toggle])
    typeToggle: cc.Toggle[] = [];

    @property([cc.Toggle])
    setToggle: cc.Toggle[] = [];

    onEnable() {

        GameData.JJCapital = 1000;

        this.setToggle.forEach((el, index) => {
            if (el.isChecked) {
                if (index == 0) {
                    GameData.JJCapital = 1000;
                }
                else if (index == 1) {
                    GameData.JJCapital = 2500;
                }
                else if (index == 2) {
                    GameData.JJCapital = 5000;
                }
            }
        })
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }
        //点击创建对战
        else if (name == 'jj_cjdz') {
            let type, set;
            this.typeToggle.forEach((el, index) => {
                if (el.isChecked) {
                    type = index;
                }
            })

            this.setToggle.forEach((el, index) => {
                if (el.isChecked) {
                    set = index;
                }
            })

            if (type == 0) {
                GameCfg.GameType = pb.GameType.JJ_PK;
            } else if (type == 1) {
                GameCfg.GameType = pb.GameType.JJ_DuoKong;
            }

            if (set == 0) {
                GameData.JJCapital = 1000;
            }
            else if (set == 1) {
                GameData.JJCapital = 2500;
            }
            else if (set == 2) {
                GameData.JJCapital = 5000;
            }

            if (GameData.properties[pb.GamePropertyId.Gold] < GameData.JJCapital) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '创建房间所需的金币不足');
                return;
            }

            //请求创建房间
            this.reqRoomCreate();
        }
    }

    reqRoomCreate() {
        GlobalEvent.emit(EventCfg.SHOWLOADING);
        let arr = ComUtils.getJJJunXian();

        let info = {
            game: GameCfg.GameType,
            uid: GameData.userID,
            capital: GameData.JJCapital,
            junXian: arr,
            wxHeadicon: GameData.headImgurl,
        }

        console.log(JSON.stringify(info));

        // let CmdRoomCreate = pb.CmdRoomCreate;
        // let message = CmdRoomCreate.create(info);
        let buff = pb.CmdRoomCreate.encode(info).finish();
        (<any>window).socket.send(pb.MessageId.Req_Room_Create, buff, (res) => {
            console.log('创建房间应答' + JSON.stringify(res));
            GlobalEvent.emit(EventCfg.HIDELOADING);
            if (res && res.err) {

                //   let err = GlobalHandle.getErrorCodeByCode(res.err.code);
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err.err);
                return;
            }
            GameData.RoomType = 1;
            GameData.roomId = res.id;
            //    GameData.roomHostID = GameData.userID;
            this.node.active = false;
            GlobalEvent.emit(EventCfg.OPENROOM);

        })
    }
}
