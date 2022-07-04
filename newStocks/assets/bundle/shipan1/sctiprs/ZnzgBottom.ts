
import GameCfg from "../../../sctiprs/GameCfg";
import ShiPanBundle from "../../../sctiprs/hall/ShiPanBundle";
import StockData from "../../../sctiprs/StockData";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import PopupManager from "../../../sctiprs/utils/PopupManager";
import ZnzgStockIndex from "./ZnzgStockIndex";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ZnzgBottom extends cc.Component {

    @property([cc.Node])
    contents: cc.Node[] = [];

    @property(cc.Node)
    bItem: cc.Node = null;

    @property([cc.Label])
    labels: cc.Label[] = [];

    @property([cc.Node])
    nodes: cc.Node[] = [];

    MAItmes = [];

    VOLItems = [];

    MACDItems = [];

    KDJItems = [];

    RSIItems = [];

    protected onLoad(): void {

        GlobalEvent.on(EventCfg.CUTKTYPE, (type) => {
            if (type != pb.KType.Day) {
                this.contents[1].active = true;
                this.contents[0].active = false;
            }
            else {
                this.contents[1].active = false;
                this.contents[0].active = true;
            }
        }, this)

        let call = (el, parent, arr) => {

            if (el.index < GameCfg.beg_end[0] || el.index >= GameCfg.beg_end[1]) {

                arr[el.index] && (arr[el.index].active = false)

            } else {

                if (el.index >= StockData.gpDataDay.length - 100) {

                    if (!arr[el.index]) {
                        let node = cc.instantiate(this.bItem);
                        arr[el.index] = node;
                        node.y = 0;
                        parent.addChild(node);
                    }

                    if (GameCfg.hz_width >= 16) {
                        arr[el.index].width = 16;
                        arr[el.index].height = 16;
                    }
                    else {
                        arr[el.index].width = GameCfg.hz_width;
                        arr[el.index].height = GameCfg.hz_width;
                    }

                    arr[el.index].x = (el.index - GameCfg.beg_end[0]) * (GameCfg.hz_width) + (GameCfg.hz_width / 2);
                    arr[el.index].getComponent('ZgBItem').text = el.str;
                }

                arr[el.index] && (arr[el.index].active = true)
            }

        }

        GlobalEvent.on('ADDMARKSZG', () => {

            ZnzgStockIndex.MAIdnexData.forEach((el) => {
                call && (call(el, this.nodes[0], this.MAItmes));
            });

            ZnzgStockIndex.VOLIndex.forEach((el) => {
                call && (call(el, this.nodes[1], this.VOLItems));
            });

            ZnzgStockIndex.MACDIndex.forEach((el) => {
                call && (call(el, this.nodes[2], this.MACDItems));
            });

            ZnzgStockIndex.KDJIndex.forEach((el) => {
                call && (call(el, this.nodes[3], this.KDJItems));
            });

            ZnzgStockIndex.RSIIndex.forEach((el) => {
                call && (call(el, this.nodes[4], this.RSIItems));
            });

        }, this);

        GlobalEvent.on('CLEARMARKAZG', () => {

            this.nodes[0].removeAllChildren();
            this.MAItmes = [];
            this.nodes[1].removeAllChildren();
            this.VOLItems = [];
            this.nodes[2].removeAllChildren();
            this.MACDItems = [];
            this.nodes[3].removeAllChildren();
            this.KDJItems = [];
            this.nodes[4].removeAllChildren();
            this.RSIItems = [];
        }, this);
    }

    onBtnClick(event, data) {

        let name = event.target.name;

        if (name == 'sp_btn_moni') {
            ShiPanBundle.nodes['znzgDraw'].active = false;
            ShiPanBundle.nodes['znzgLayer'].active = false;

            ShiPanBundle.loadPre('mnxgLayer', (node) => {
                node.getComponent('MnxgHandle').onShow();
            });
        }
        else if (name == 'sp_btn_xunlian') {
            PopupManager.openEnterXlGame();
        }
    }

    protected onDestroy(): void {
        GlobalEvent.off(EventCfg.CUTKTYPE);
        GlobalEvent.off('ADDMARKSZG');
        GlobalEvent.off('CLEARMARKAZG');
    }
}
