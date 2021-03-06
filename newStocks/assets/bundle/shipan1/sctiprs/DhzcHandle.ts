
import GameData from "../../../sctiprs/GameData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";



const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Node])
    bg: cc.Node[] = [];

    @property(cc.Label)
    zc_kyLa: cc.Label = null;

    @property(cc.Label)
    zc_syLa: cc.Label = null;

    curGold = null;

    @property(cc.Label)
    zc_sdLa: cc.Label = null;

    @property(cc.EditBox)
    zc_editBox: cc.EditBox = null;

    dhzc = null;

    @property(cc.Label)
    jb_kyLa: cc.Label = null;

    @property(cc.Label)
    jb_sdLa: cc.Label = null;

    @property(cc.EditBox)
    jb_editBox: cc.EditBox = null;

    dhjb = null;

    onLoad() {
        let day = new Date().toLocaleDateString();
        let data = cc.sys.localStorage.getItem('DHZJ' + day);
        console.log(data);
        if (data === "" || data == null) {
            this.curGold = 10000;
        }
        else {
            this.curGold = parseInt(data);
        }
        this.zc_editBox.node.on(
            'editing-did-ended',
            edit => {

                let str = edit.string;
                if (str == '') {

                    return;
                } else {
                    if (parseInt(str) > this.curGold) {

                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '兑换金币不能超今日上限！');
                        this.zc_editBox.string = '';
                        return;
                    }

                    if (parseInt(str) > GameData.properties[pb.GamePropertyId.Gold]) {
                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '兑换金币不能超可用金币数量！');
                        this.zc_editBox.string = '';
                        return;
                    }

                    this.zc_sdLa.string = parseInt(str) * 10 + '';

                    this.dhzc = parseInt(str);
                }

            },
            this
        );

        this.jb_editBox.node.on(
            'editing-did-ended',
            edit => {

                let str = edit.string;
                if (str == '' || parseInt(str) < 10000) {
                    this.jb_editBox.string = '';
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '每一次兑换必须都是10000以上才能兑换');
                    return;
                } else {


                    if (parseInt(str) > GameData.mncgDataList.account) {
                        GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '兑换资产不能超可用资产数量！');
                        this.jb_editBox.string = '';
                        return;
                    }

                    this.jb_sdLa.string = parseInt(str) / 20 + '';

                    this.dhjb = parseInt(str);
                }

            },
            this
        );

        GlobalEvent.on(EventCfg.GOLDCHANGE, () => {
            this.zc_kyLa.string = GameData.properties[pb.GamePropertyId.Gold];
        }, this);
    }

    start() {

    }

    onEnable() {
        this.zc_kyLa.string = GameData.properties[pb.GamePropertyId.Gold];

        this.zc_syLa.string = this.curGold;

        this.jb_kyLa.string = GameData.mncgDataList.account;
        this.dhjb = 0;
        this.dhzc = 0;

    }

    onToggleClick(event, data) {
        let name = event.node.name;
        if (name == 'toggle1') {
            this.bg[0].active = true;
            this.bg[1].active = false;
        }

        else if (name == 'toggle2') {
            this.bg[0].active = false;
            this.bg[1].active = true;
        }

    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }

        else if (name == 'sp_mncg_qrdh') {

            if (!this.dhzc) { return }

            GlobalEvent.emit(EventCfg.SHOWLOADING);

            let info = {
                direction: pb.ExchangeDirection.Forward,
                amount: this.dhzc,
            }

            console.log(JSON.stringify(info));

          //  let message = pb.CmdMncgExchange.create(info);
            let buff = pb.CmdMncgExchange.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_Game_MncgExchange, buff, (res) => {
                GlobalEvent.emit(EventCfg.HIDELOADING);
                console.log('兑换应答' + JSON.stringify(res));
                if (res.err) {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.err);
                }
                else {
                    this.curGold -= this.dhzc;
                    this.zc_syLa.string = this.curGold;

                    GameData.mncgDataList.account += parseInt(this.zc_sdLa.string);

                    let day = new Date().toLocaleDateString();

                    cc.sys.localStorage.setItem('DHZJ' + day, this.curGold);
                    this.jb_kyLa.string = '';
                    this.dhzc = 0;
                    this.zc_editBox.string = '';
                    this.zc_sdLa.string = '';
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '兑换成功！');

                    this.jb_kyLa.string = GameData.mncgDataList.account;
                    GlobalEvent.emit(EventCfg.CHANGEMNCGACCOUNT);

                }

            })

        }

        else if (name == 'sp_mncg_qrdh1') {
            if (!this.dhjb) { return }
            GlobalEvent.emit(EventCfg.SHOWLOADING);
            let info = {
                direction: pb.ExchangeDirection.Reverse,
                amount: this.dhjb,
            }

           // let message = pb.CmdMncgExchange.create(info);
            let buff = pb.CmdMncgExchange.encode(info).finish();

            (<any>window).socket.send(pb.MessageId.Req_Game_MncgExchange, buff, (res) => {
                GlobalEvent.emit(EventCfg.HIDELOADING);
                if (res.account) {
                    console.log('兑换应答' + JSON.stringify(res));
                    GameData.mncgDataList.account = res.account;;
                    this.jb_kyLa.string = GameData.mncgDataList.account;
                    this.jb_sdLa.string = '';
                    this.jb_editBox.string = '';
                    this.dhjb = 0;
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '兑换成功！');
                    GlobalEvent.emit(EventCfg.CHANGEMNCGACCOUNT);
                }
                else {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, res.result);
                }
            })

        }

    }
}
