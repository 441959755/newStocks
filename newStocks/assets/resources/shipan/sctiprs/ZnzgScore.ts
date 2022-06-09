import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import ZnzgControl from "./ZnzgControl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgScore extends cc.Component {

    @property(cc.Label)
    nameLabel: cc.Label = null;

    @property(cc.Label)
    codeLabel: cc.Label = null;

    @property(cc.Label)
    infoLabel: cc.Label = null;

    @property(cc.Sprite)
    scoreSp: cc.Sprite = null;

    @property([cc.Sprite])
    starSp: cc.Sprite[] = [];

    onLoad() {
        ZnzgControl.scoreNode = this.node;
    }

    protected onEnable(): void {
        this.nameLabel.string = ZnzgControl.searchName;
        this.codeLabel.string = ZnzgControl.searchCode;
    }


    onBtnClick(event, data) {
        let name = event.targte.name;
        if (name == 'zg_ckxq') {
            ZnzgControl.otherNode.active = true;
        }
        else if (name == 'blackNode') {
            this.node.active = false;
        }
    }
}
