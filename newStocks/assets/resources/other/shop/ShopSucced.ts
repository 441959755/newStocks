import GameData from "../../../sctiprs/GameData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ShopSucced extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Sprite)
    tipsSp: cc.Sprite = null;

    @property(cc.Label)
    tipsLa: cc.Label = null;


    @property([cc.SpriteFrame])
    sp: cc.SpriteFrame[] = [];


    onShow(type, index) {

        this.title.string = '购买成功';
        this.tipsSp.spriteFrame = this.sp[type];
        this.tipsLa.node.active = true;
        let cfg;
        if (type == 0) {
            cfg = GameData.gameConf.item_diamond
            this.tipsLa.string = 'X' + cfg[index].gains[0].v + '钻石';
        }

        if (type == 1) {
            cfg = GameData.gameConf.item_gold;
            this.tipsLa.string = 'X' + cfg[index].gains[0].v + '金币';
        }

        if (type == 2) {
            this.tipsSp.spriteFrame = this.sp[type + index];
            this.tipsLa.node.active = false;

        }

    }


    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'sys_tck_qd') {
            this.node.active = false;
        }
    }
}
