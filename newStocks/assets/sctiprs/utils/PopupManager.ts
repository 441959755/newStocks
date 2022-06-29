
import EventCfg from "./EventCfg"
import GlobalEvent from "./GlobalEvent"
import LoadUtils from "./LoadUtils";
import ActionUtils from "./ActionUtils";

export default {

    nodes: {},

    init() {

        GlobalEvent.on(EventCfg.SHOWLOADING, () => { this.nodes['prefabs/loading'] && (this.nodes['prefabs/loading'].active = true) }, this);
        GlobalEvent.on(EventCfg.HIDELOADING, () => { this.nodes['prefabs/loading'] && (this.nodes['prefabs/loading'].active = false) }, this);

        this.openNode(cc.find('Canvas'), null, 'prefabs/loading', 99);

        GlobalEvent.on(EventCfg.SHOWTIPSTEXT, this.onShowTipsText.bind(this), this);
    },

    onShowTipsText(str) {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/tipsText'], 'prefabs/tipsText', 99, (node) => {
            node && (node.getComponent('TipsText').onShow(str));
        })
    },

    loadVipExplain() {
        this.openNode(cc.find('Canvas'), this.node['prefabs/vipExplain'], 'prefabs/vipExplain', 50, (node) => {
            ActionUtils.openNode(node);
        })
    },

    LoadTipsBox(text, call?) {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/com/tipsBox'], 'prefabs/com/tipsBox', 99, (node) => {
            node.getComponent('TipsBoxHandle').onShow(text, call);
            ActionUtils.openNode(node);
        })
    },

    loadPrococol(title, url) {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/com/prococol'], 'prefabs/com/prococol', 90, (node) => {
            let handle = node.getComponent('Prococol');
            handle && (handle.onShow(title, url));
        })
    },

    openHelpLayer() {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/helpLayer'], 'prefabs/helpLayer', 90, (node) => {
            ActionUtils.openNode(node);
        })
    },

    openNewPackage() {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/pop/newcomerPackage'], 'prefabs/pop/newcomerPackage', 90, (node) => {
            ActionUtils.openNode(node);
        })
    },

    openCgdsNotice() {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/pop/cgdsNotice'], 'prefabs/pop/cgdsNotice', 90, (node) => {
            ActionUtils.openNode(node);
        })
    },

    open7DayVIP() {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/pop/7DayVIP'], 'prefabs/pop/7DayVIP', 90, (node) => {
            ActionUtils.openNode(node);
        })
    },

    openCgsNotice() {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/pop/cgsNotice'], 'prefabs/pop/cgsNotice', 90, (node) => {
            ActionUtils.openNode(node);
        })
    },

    openactiveTheme() {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/pop/activityTheme'], 'prefabs/pop/activityTheme', 90, (node) => {
            ActionUtils.openNode(node);
        })
    },

    openEnterXlGame() {
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/enterXLGame'], 'prefabs/enterXLGame', 90, (node) => {
            ActionUtils.openNode(node);
        })
    },


    //其他玩家信息
    openOtherPlayerInfoLayer(info) {

        let call = (node) => {
            if (node) {
                ActionUtils.openNode(node);
                node.getComponent('OtherPlayerInfoBox').onShow(info)
            }
        }
        this.openNode(cc.find('Canvas'), this.nodes['prefabs/otherPlayerInfo'], 'Prefabs/otherPlayerInfo', 60, call);
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