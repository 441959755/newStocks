
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ProfileHandle extends cc.Component {

    @property(cc.Sprite)
    headImg: cc.Sprite = null;

    @property(cc.Label)
    userID: cc.Label = null;

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Label)
    gender: cc.Label = null;

    @property(cc.Label)
    diqu: cc.Label = null;

    @property(cc.Label)
    chenghao: cc.Label = null;

    @property(cc.Label)
    phone: cc.Label = null;

    @property(cc.Label)
    exp: cc.Label = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.ProgressBar)
    progress: cc.ProgressBar = null;

    @property(cc.Label)
    swLabel: cc.Label = null;

    onLoad() {

        GlobalEvent.on(EventCfg.HEADIMGCHANGE, () => {
            this.headImg.spriteFrame = GameData.headImg;
        }, this);

        GlobalEvent.on(EventCfg.NAMECHANGE, () => {
            this.userName.string = GameData.userName;
        }, this);

        GlobalEvent.on(EventCfg.LOCALTIONCHANGE, () => {
            this.diqu.string = GameData.location;
        }, this);

        GlobalEvent.on(EventCfg.GENDERCHANGE, () => {
            let str = GameData.gender == 1 ? '男' : '女';
            this.gender.string = str;
        }, this);
    }

    onDestroy() {
        GlobalEvent.off(EventCfg.GOLDCHANGE);
        GlobalEvent.off(EventCfg.DIAMONDCHANGE);
        GlobalEvent.off(EventCfg.HEADIMGCHANGE);
        GlobalEvent.off(EventCfg.NAMECHANGE);
        GlobalEvent.off(EventCfg.LOCALTIONCHANGE);
        GlobalEvent.off(EventCfg.GENDERCHANGE);
    }

    onEnable() {
        this.headImg.spriteFrame = GameData.headImg || GameData.imgs['0'];
        this.userID.string = GameData.userID;
        this.userName.string = GameData.userName;
        let str1 = GameData.gender == 1 ? '男' : '女';
        this.gender.string = str1;
        this.diqu.string = GameData.location;

        this.level.string = 'LV: ' + GameData.properties[pb.GamePropertyId.Level];
        this.exp.string = GameData.properties[pb.GamePropertyId.Exp] + '/' + GameData.gameConf.level_exp[GameData.properties[pb.GamePropertyId.Level]];
        this.progress.progress = GameData.properties[pb.GamePropertyId.Exp] / GameData.gameConf.level_exp[GameData.properties[pb.GamePropertyId.Level]];

        this.chenghao.string = ComUtils.getChenghaoByFame(GameData.properties[pb.GamePropertyId.Fame]);

        this.swLabel.string = GameData.properties[pb.GamePropertyId.Fame];
    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'btnicon') {
            let index = parseInt(data);
            if (index == 0) {
                GlobalEvent.emit('openDefHeadLayer');
            }

            else if (index == 1) {
                GlobalEvent.emit('openChangeUserNameLayer');
            }
            else if (index == 2) {
                GlobalEvent.emit('openChangeGenderLayer');
            }
            else if (index == 3) {
                GlobalEvent.emit('openChangeLocationLayer');
            }
        }
    }

    //更改头像
    //  onChangeIcon() {


    // LLWSDK.getSDK().chooseImage((img) => {
    //     if (!img) { return };
    //     let data = {
    //         uid: GameData.userID,
    //         icon: img,
    //     }
    //     console.log('img' + img);
    //     socket.send(pb.MessageId.Req_Hall_EditIcon, PB.onCmdEditInfoConvertToBuff(data), (info) => {
    //         console.log('onCmdEditInfoConvertToBuff:' + JSON.stringify(info));
    //         if (!info.code) {

    //             GameData.headImg = new cc.SpriteFrame(img);
    //             if (GameData.headImg) {
    //                 this.headImg.spriteFrame = GameData.headImg;
    //             }
    //         } else {
    //             console.log('图片有误!:' + info.code + info.err);
    //         }

    //     })

    // })

    // }
}
