import ComUtils from "../../../sctiprs/utils/ComUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import LocalStorageUtils from "../../../sctiprs/utils/LocalStorageUtils";
import ZnzgControl from "./ZnzgControl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgItem extends cc.Component {

    @property([cc.Label])
    labels: cc.Label[] = [];

    info = null;

    protected onLoad(): void {
        let self = this;
        GlobalEvent.on(EventCfg.SYNCQUOTEITEM, (info) => {
            if (this.node.active) {
                if (self.info && self.info.code == info.code) {
                    self.labels[4].string = ComUtils.changeTwoDecimal(info.price) + '';
                }
            }
        }, this);
    }

    onShow(info, index) {

        if (info) {
            this.labels[0].string = index + '';
            this.labels[1].string = info.name;
            this.labels[2].string = info.code;
            this.labels[3].string = info.csrc_indu_name;
            this.labels[5].string = info.time;
            this.info = info;
        }

    }


    onBtnClick(event, data) {

        let name = event.target.name;

        if (name == 'btn_sc') {

            let arr = [];
            ZnzgControl.listData.forEach(el => {
                if (el.code != this.info.code) {
                    arr.push(el);
                }
            })

            LocalStorageUtils.setItem('ZNZGLIST', JSON.stringify(arr));

            GlobalEvent.emit('ZNZGITEMUPDATE');
        }
        else if (name == 'item') {

            ZnzgControl.searchCode = this.info.code;

            ZnzgControl.searchName = this.info.name;

            ZnzgControl.csrc_indu_name = this.info.csrc_indu_name;

            ZnzgControl.searTime = this.info.time;
            ZnzgControl.pri_biz = this.info.pri_biz;

            ZnzgControl.type = this.info.type;

            ZnzgControl.scoreNode.active = true;

        }
    }


}
