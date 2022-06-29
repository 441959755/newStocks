
import { pb } from "../../protos/proto";
import GameData from "../../sctiprs/GameData";
import EventCfg from "../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FriendFind extends cc.Component {

    @property(cc.EditBox)
    edit: cc.EditBox = null;

    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'closeBtn') {
            this.node.active = false;
        }
        else if (name == 'hy_tjdwdgz') {

            if (this.edit.string.length <= 0) {

                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入您要关注的用户ID');
                this.edit.string = '';
                return;
            }

            if (GameData.gameData.favorList && GameData.gameData.favorList.indexOf(parseInt(this.edit.string)) != -1) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '该用户已关注');
                this.edit.string = '';
                return;
            }

            let info = {
                uid: parseInt(this.edit.string),
            }

            let buff = pb.PlayerInfo.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_Hall_QueryPlayer, buff, res => {
                console.log('添加关注查找返回：' + JSON.stringify(res));

                if (res && res.uid) {

                    if (res.properties[pb.GamePropertyId.Level] < 10) {
                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '对方等级不满10级，不能添加到关注列表');
                        return;
                    }

                    let data = {
                        removed: false,
                        uid: res.uid,
                    }

                    let CmdEditFavorList = pb.CmdEditFavorList;
                    let message = CmdEditFavorList.create(data);
                    let buff = CmdEditFavorList.encode(message).finish();

                    (<any>window).socket.send(pb.MessageId.Req_Hall_EditFavorList, buff, (res) => {
                        console.log(JSON.stringify(res));
                    })

                    GameData.gameData.favorList.push(res.uid);
                    GlobalEvent.emit('UPDATEFRIENDLIST');

                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '请输入正确的用户ID');
                    this.edit.string = '';
                    return;
                }
            })
        }
    }

}
