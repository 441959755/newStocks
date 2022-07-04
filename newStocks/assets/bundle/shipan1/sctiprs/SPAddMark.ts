
import GameCfg from "../../../sctiprs/GameCfg";
import StockData from "../../../sctiprs/StockData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import ZnzgControl from "./ZnzgControl";
import ZnzgStockIndex from "./ZnzgStockIndex";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SPAddMark extends cc.Component {

    @property(cc.Node)
    bItem: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    nodes = [];

    onLoad() {

        //更新MARK
        GlobalEvent.on(EventCfg.ONMARKUPDATE, (pos) => {

            this.nodes.forEach((el, index) => {
                if (index < GameCfg.beg_end[0] || index >= GameCfg.beg_end[1]) {
                    el.active = false;
                }
            })

            ZnzgControl.lastStockIndexList.forEach(el => {

                if (el.index == pos.index) {

                    if (pos.index >= StockData.gpDataDay.length - 100) {

                        if (!this.nodes[pos.index]) {
                            let node = cc.instantiate(this.bItem);
                            this.nodes[pos.index] = node;
                            node.position = pos.lowPos;
                            node.y -= this.bItem.height / 2;
                            this.content.addChild(node);
                        }
                        else {
                            this.nodes[pos.index].position = pos.lowPos;
                            this.nodes[pos.index].y -= this.bItem.height / 2;
                        }

                        let t = 33 / 12;

                        if (GameCfg.hz_width >= 16) {
                            this.nodes[pos.index].width = 16;
                            this.nodes[pos.index].height = 16 * t;
                        }
                        else {
                            this.nodes[pos.index].width = GameCfg.hz_width;
                            this.nodes[pos.index].height = GameCfg.hz_width * t;
                        }

                        this.nodes[pos.index].active = true;
                    }
                }
            })

        }, this);

        //切换k线
        GlobalEvent.on(EventCfg.CUTKTYPE, (type) => {
            this.content.active = type == pb.KType.Day;

        }, this);

    }

    start() {

    }

    protected onDestroy(): void {
        GlobalEvent.off(EventCfg.ONMARKUPDATE);
    }

    // update (dt) {}
}
