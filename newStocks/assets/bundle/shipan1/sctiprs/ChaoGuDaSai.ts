
import GameCfg from "../../../sctiprs/GameCfg";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    item: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    onEnable() {

        GameCfg.GameType = pb.GameType.ChaoGuDaSai;
        GlobalEvent.emit(EventCfg.SHOWLOADING);

        (<any>window).socket.send(pb.MessageId.Req_Game_CgdsList, null, (res) => {
            GlobalEvent.emit(EventCfg.HIDELOADING);
            console.log('炒股大赛' + JSON.stringify(res));
            let flag = false;

            for (let i = 0; i < res.items.length; i++) {
                if (res.items[i] && res.items[i].status != 2) {
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '炒股大赛未开始');
                this.node.active = false;
                return;
            }

            this.createItem(res.items);
        })
    }

    createItem(items) {
        items.forEach(el => {
            let item = cc.instantiate(this.item);
            this.content.addChild(item);
            let handle = item.getComponent('ChaoGuItem');
            handle.onShow(el);
        });
    }


    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }
        else if (name == 'sp_topbtn_help') {
            PopupManager.openHelpLayer();
        }
    }


    onDisable() {
        GameCfg.GameType = null;
        this.content.removeAllChildren();
    }

}
