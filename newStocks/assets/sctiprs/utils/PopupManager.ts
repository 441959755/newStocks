import EventCfg from "./EventCfg"
import GlobalEvent from "./GlobalEvent"
import LoadUtils from "./LoadUtils";


export default {

    nodes: {},

    init() {
        GlobalEvent.on(EventCfg.SHOWLOADING, () => { this.nodes['prefabs/loading'].active = true; }, this);
        GlobalEvent.on(EventCfg.HIDELOADING, () => { this.nodes['prefabs/loading'].active = false }, this);

        this.openNode(cc.find('Canvas'), null, 'prefabs/loading', 99);

        GlobalEvent.on(EventCfg.SHOWTIPSTEXT, this.onShowTipsText.bind(this), this);
    },

    onShowTipsText(str) {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/tipsText'], 'prefabs/tipsText', 99, (node) => {
            node && (node.getComponent('TipsText').onShow(str));
        })
    },


    openNode(prent, selfNode, url, zIndex?, call?) {
        if (this.nodes[url]) {
            selfNode = this.nodes[url];
        }

        if (!selfNode) {

            if (this.nodes['prefabs/loading']) {
                this.nodes['prefabs/loading'].active = true;
            }

            LoadUtils.load(url).then((prefab) => {
                selfNode = cc.instantiate(prefab);
                prent.addChild(selfNode, zIndex);
                selfNode.active = true;
                this.nodes[url] = selfNode;
                call && (call(selfNode));

                if (this.nodes['prefabs/loading']) {
                    this.nodes['prefabs/loading'].active = false;
                }
            }, (err) => {
                console.log('openNode err');
                if (this.nodes['prefabs/loading']) {
                    this.nodes['prefabs/loading'].active = false;
                }
            })
        }
        else {
            selfNode.active = true;
            call && (call(selfNode));
        }
    }





}