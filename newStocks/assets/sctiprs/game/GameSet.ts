
const { ccclass, property } = cc._decorator;
import GlobalEvent from "../utils/GlobalEvent";

import EventCfg from './../utils/EventCfg';

import GameCfg from "../GameCfg";


@ccclass
export default class GameSet extends cc.Component {

    @property([cc.Node])
    masks: cc.Node[] = [];

    @property([cc.Node])
    linesNode: cc.Node[] = [];

    @property(cc.Node)
    HNode: cc.Node = null;

    @property(cc.Node)
    VNode: cc.Node = null;

    @property([cc.Label])
    MALabel: cc.Label[] = [];

    @property(cc.Node)
    laNode: cc.Node = null;    //刻度

    onLoad() {

        GlobalEvent.on('setDrawing', (falg) => {

            if (falg) {
                this.node.width = this.node.width + 164;
            } else {
                this.node.width = this.node.width - 164;
            }

            this.masks.forEach(el => {

                el && (el.width = this.node.width)
            })

        }, this)

        GlobalEvent.on('initMALA', () => {
            let MAla = [];
            this.MALabel.forEach(el => {
                el.node.active = false;
            })

            GameCfg.MAs.forEach((el, index) => {
                if (el) {
                    this.MALabel[index].node.active = true;
                    MAla.push(this.MALabel[index])
                }
            })
            GlobalEvent.emit(EventCfg.SETMALABEL, MAla);
        }, this);

    }

    initMALa() {
        let MAla = [];
        if (GameCfg.GameType == pb.GameType.ZhiBiao) {
            this.MALabel.forEach(el => {
                el.node.active = false;
            })
            GameCfg.MAs.forEach((el, index) => {
                this.MALabel[index].node.active = true;
                MAla.push(this.MALabel[index])
            })

        } else {
            if (GameCfg.GameSet.isMA1) {
                this.MALabel[0].node.active = true;
                MAla.push(this.MALabel[0])
            } else {
                this.MALabel[0].node.active = false;
            }
            if (GameCfg.GameSet.isMA2) {
                this.MALabel[1].node.active = true;
                MAla.push(this.MALabel[1])
            } else {
                this.MALabel[1].node.active = false;
            }
            if (GameCfg.GameSet.isMA3) {
                this.MALabel[2].node.active = true;
                MAla.push(this.MALabel[2])
            } else {
                this.MALabel[2].node.active = false;
            }
            if (GameCfg.GameSet.isMA4) {
                this.MALabel[3].node.active = true;
                MAla.push(this.MALabel[3])
            } else {
                this.MALabel[3].node.active = false;
            }
            if (GameCfg.GameSet.isMA5) {
                this.MALabel[4].node.active = true;
                MAla.push(this.MALabel[4])
            } else {
                this.MALabel[4].node.active = false;
            }
            if (GameCfg.GameSet.isMA6) {
                this.MALabel[5].node.active = true;
                MAla.push(this.MALabel[5])
            } else {
                this.MALabel[5].node.active = false;
            }
        }

        GlobalEvent.emit(EventCfg.SETMALABEL, MAla);
    }

    onEnable() {


        if (GameCfg.GameSet.isBW) {
            this.node.color = cc.Color.BLACK;
            //  this.mask.color=cc.Color.BLACK;
            this.masks.forEach(el => {

                el && (el.color = cc.Color.BLACK);
            })
            this.linesNode.forEach(el => {
                if (el) {

                    el.color = cc.Color.WHITE;
                    if (el.children.length > 0) {
                        el.children.forEach(e => {
                            e.color = cc.Color.WHITE;
                        })
                    }
                }
            })
            this.HNode.color = cc.Color.WHITE;
            this.VNode.color = cc.Color.WHITE;
            GameCfg.HZ_white = cc.Color.WHITE;
            // GameCfg.MAColor[0] = cc.Color.WHITE;
            // GameCfg.BOLLColor[0] = cc.Color.WHITE;
            // GameCfg.VOLColor[0] = cc.Color.WHITE;

        } else {
            this.node.color = cc.Color.WHITE;
            // this.mask.color=cc.Color.WHITE;
            this.masks.forEach(el => {
                el && (el.color = cc.Color.WHITE)
            })
            this.linesNode.forEach(el => {
                if (el) {
                    el.color = cc.Color.BLACK;
                    if (el.children.length > 0) {
                        el.children.forEach(e => {
                            e.color = cc.Color.BLACK;
                        })
                    }
                }

            })
            this.HNode.color = cc.Color.BLACK;
            this.VNode.color = cc.Color.BLACK;

            GameCfg.HZ_white = cc.Color.BLACK;
            // GameCfg.MAColor[0] = cc.Color.BLACK;
            // GameCfg.BOLLColor[0] = cc.Color.BLACK;
            // GameCfg.VOLColor[0] = cc.Color.BLACK;
        }

        this.initMALa();
    }

    onDestroy() {
        GlobalEvent.off('setDrawing');
        GlobalEvent.off('initMALA');
    }


}
