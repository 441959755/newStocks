
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SelectBKHandle extends cc.Component {

    @property([cc.Toggle])
    toggels: cc.Toggle[] = [];



    onEnable() {

        ConfUtils.SelectBk.forEach((el, index) => {
            this.toggels[index].isChecked = !!el;
        });
    }

    onToggleClick(event, data) {
        let name = event.node.name;
        if (name == 'toggle1') {
            if (this.toggels[0].isChecked) {
                this.toggels.forEach(el => {
                    el.isChecked = true;
                })
            }
            else {
                this.toggels[0].isChecked = true;
            }
        }
        else {

            let flag = true;
            this.toggels.forEach((el, index) => {
                if (index > 0) {
                    if (!el.isChecked) {
                        flag = false;
                    }
                }

            })
            this.toggels[0].isChecked = flag;


            let f = false;
            this.toggels.forEach(el => {
                if (el.isChecked) {
                    f = true;
                }
            })

            if (f) { return };

            GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '至少保留一个模块');
            // console.log(event);
            // event.node.getComponent(cc.Toggle).isChecked = true;
            event.isChecked = true;
        }

    }

    onBtnClick(event, data) {

        let name = event.target.name;

        if (name == 'closeBtn') {
            this.node.active = false;
        }

        else if (name == 'sp_znxg_xz') {

            let arr = [];
            this.toggels.forEach((el, index) => {
                if (el.isChecked) {
                    arr.push(1);
                }
                else {
                    arr.push(0);
                }
            })

            ConfUtils.SelectBk = arr;

            GlobalEvent.emit(EventCfg.SELECTBK);
        }
    }


}
