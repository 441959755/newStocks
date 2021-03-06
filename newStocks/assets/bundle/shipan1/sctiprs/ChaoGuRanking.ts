
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    item: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    tipsNode: cc.Node = null;

    _curData = null;

    @property(cc.Node)
    scorllNode: cc.Node = null;

    onShow(data) {
        this._curData = data;


        GlobalEvent.emit(EventCfg.SHOWLOADING);

        let info = {
            id: data.id,
        }

      //  let message = pb.CmdCgdsRanking.create(info);
        let buff = pb.CmdCgdsRanking.encode(info).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_CgdsRanking, buff, (res) => {
            GlobalEvent.emit(EventCfg.HIDELOADING);
            console.log('炒股大赛排行榜' + JSON.stringify(res));
            let arr = [];
            let capital = JSON.parse(this._curData.conf).capital;
            res.Items.forEach(el => {
                if ((el.cgdsAccount - capital) / capital * 100 > 0) {
                    arr.push(el);
                }
            });
            this.createItem(arr);
        })
    }

    createItem(items) {
        if (!items || items.length <= 0) {
            this.tipsNode.active = true;
            return;
        }
        this.tipsNode.active = false;

        let UIScrollControl = this.scorllNode.getComponent('UIScrollControl');
        UIScrollControl.clear();

        UIScrollControl.initControl(this.item, items.length, this.item.getContentSize(), 0, (node, index) => {
            let handle = node.getComponent('ChaoGuRankingItem');
            handle.onShow(items[index], index + 1, this._curData);
        })

    }

    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'blackbtn') {
            this.node.active = false;
        }
    }

    onDisable() {
        this.content.removeAllChildren();
    }
}
