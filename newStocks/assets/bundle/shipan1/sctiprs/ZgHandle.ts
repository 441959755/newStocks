
import GameData from "../../../sctiprs/GameData";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";



const { ccclass, property } = cc._decorator;

@ccclass
export default class ZgHandle extends cc.Component {

    @property(cc.EditBox)
    editBox: cc.EditBox = null;

    @property(cc.Node)
    scrollView: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    zgHisData = [];

    start() {
        let zgHisData = cc.sys.localStorage.getItem('ZGHISDATA');
        if (zgHisData) {
            this.zgHisData = JSON.parse(zgHisData);

            this.zgHisData.forEach(el => {
                let node = cc.instantiate(this.item);
                this.content.addChild(node);
                node.setPosition(0, 0);
                let codeInfo = ConfUtils.getGPItemInfo(el);

                let label = node.getComponent(cc.Label);

                label.string = codeInfo[0] + ' ' + codeInfo[1];
            });
        }

        this.editBox.node.on('editing-did-ended', (edit) => {
            let str = edit.string;
            if (str == '') { return }
            else {
                let datas = GameData.stockList;
                let flag = false, tt = [];
                for (let i = 0; i < datas.length; i++) {
                    let arr1 = datas[i].split('|');
                    let str1 = arr1[0];
                    if (arr1[0].length >= 7) {
                        str1 = arr1[0].slice(1);
                    }
                    if (tt.length >= 100) {
                        break;
                    }
                    if (str1.indexOf(str) != -1) {
                        tt.push(datas[i]);
                        flag = true;
                    } else if (arr1[1].indexOf(str) != -1) {
                        tt.push(datas[i]);
                        flag = true;
                    }
                }
                if (!flag) {
                    edit.string = '';

                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '??????????????????????????????.');
                }
                else {

                    let items = tt[0].split('|');
                    let code = items[0] + '';
                    if (code.length >= 7) {
                        code = code.slice(1);
                    }
                    this.editBox.string = code + ' ' + items[1];
                }
            }
        })

    }

    onEnable() {
        this.editBox.string = '';
    }

    onBtnClick(event, data) {
        let name = event.target.name;

        if (name == 'blackbtn') {
            this.node.active = false;
        }

        else if (name == 'xl_xzb_xialaarr') {
            //this.node.active = true;
            this.scrollView.active = true;
        }

        else if (name == 'nodeBtn') {
            this.scrollView.active = false;
        }

        else if (name == 'item') {
            let info = event.target.getComponent(cc.Label).string;
            this.editBox.string = info;
        }

        else if (name == 'sp_znxg_zhengu') {

            let code = this.editBox.string.split(' ');

            let info = ConfUtils.getGPItemInfo(code[0]);

            if (info) {
                if (this.zgHisData.indexOf(info[0]) == -1) {
                    this.zgHisData.push(info[0]);
                    cc.sys.localStorage.setItem('ZGHISDATA', JSON.stringify(this.zgHisData));

                    let node = cc.instantiate(this.item);
                    this.content.addChild(node);
                    let label = node.getComponent(cc.Label);
                    let str = info[0].slice(1);
                    label.string = str + ' ' + info[1];
                }
                let me = {
                    code: info[0],
                }


               // let message1 = pb.CmdQueryAiSignal.create(me);
                let buff1 = pb.CmdQueryAiSignal.encode(me).finish();
                (<any>window).socket.send(pb.MessageId.Req_QueryAiSignal, buff1, (res) => {
                    console.log('?????????????????????' + JSON.stringify(res));

                    let flag = 0;
                    if (res.signals) {
                        for (let i = res.signals.length - 1; i >= 0; i--) {
                            if (res.signals[i].flag == 1) {
                                flag = 1;
                                break;
                            }
                            else if (res.signals[i].flag == -1) {
                                flag = -1;
                                break;
                            }
                        }
                    }
                    let str1 = '';
                    if (flag < 0) {
                        str1 = '????????????';
                    }
                    else if (flag == 0) {
                        str1 = '????????????';
                    }
                    else {
                        str1 = '????????????';
                    }

                    GlobalEvent.emit(EventCfg.OPENZNDRAW, info[0], str1);

                })

                this.node.active = false;
            }
            else {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '?????????????????????');
            }

        }

    }
}
