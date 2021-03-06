
import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import List from "../../sctiprs/utils/List";
import PopupManager from "../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankingList extends cc.Component {

    @property([cc.Node])
    scollNodes: cc.Node[] = [];

    @property([cc.Node])
    items: cc.Node[] = [];

    @property([cc.Toggle])
    toggles: cc.Toggle[] = [];

    @property(cc.Label)
    tipsLabel = null;

    @property(List)
    listV1: List = null;

    @property(List)
    listV2: List = null;

    @property(List)
    listV3: List = null;

    @property(List)
    listV4: List = null;

    @property(List)
    listV5: List = null;

    rankList1 = null;

    rankList2 = null;

    rankList3 = null;

    rankList4 = null;

    rankList5 = null;

    activityID = 0;

    curSwitch = 0;

    awardList = null;

    from = null;
    to = null;

    cb = null;

    cgdsID = null;

    cgdsCapital = 0;

    protected onLoad(): void {
        this.getFameRankingWeekly();
    }

    getFameRanking() {

        (<any>window).socket.send(pb.MessageId.Req_Hall_GetFameRanking, null, (info) => {
            console.log('查询威望排行应答' + JSON.stringify(info));
            this.rankList1 = info.Items;
            this.listV1.numItems = this.rankList1.length;
        });
    }


    //获取等级排行
    getLevelRanking() {
        (<any>window).socket.send(pb.MessageId.Req_Hall_GetLevelRanking, null, (info) => {
            console.log('查询等级排行应答' + JSON.stringify(info));
            this.rankList2 = info.Items;
            this.listV2.numItems = this.rankList2.length;
        })
    }

    //查询威望周排行
    getFameRankingWeekly() {
        (<any>window).socket.send(pb.MessageId.Req_Hall_GetFameRankingWeekly, null, (info) => {
            console.log('查询威望周排行' + JSON.stringify(info));
            this.rankList3 = info.Items;
            this.listV3.numItems = this.rankList3.length;
        })
    }

    //查询闯关赛排行榜
    getCgsRanking() {

        let data = {
            id: this.activityID,
        }

    //    let message = pb.CmdCgsRanking.create(data);
        let buff = pb.CmdCgsRanking.encode(data).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_CgsGetSeasonRank, buff, (info) => {
            console.log('闯关赛排行榜' + JSON.stringify(info));
            this.rankList4 = info.Items;
            this.listV4.numItems = this.rankList4.length;
        })
    }

    // 获取炒股大赛排行榜
    getCgdsRanking() {
        // if (!GameData.gameData.cgdsStockList[0] || !GameData.gameData.cgdsStockList[0].id) {
        //     return;
        // }

        let data = {
            id: this.cgdsID,
        }

        //let message = pb.CmdCgdsRanking.create(data);
        let buff = pb.CmdCgdsRanking.encode(data).finish();

        (<any>window).socket.send(pb.MessageId.Req_Game_CgdsRanking, buff, (info) => {
            console.log('炒股大赛排行榜' + JSON.stringify(info));
            this.rankList5 = info.Items;
            this.listV5.numItems = this.rankList5.length;
        })
    }

    onListRender1(item: cc.Node, idx: number) {
        let handle = item.getComponent('RankItem' + 1);
        handle.onShow(this.rankList1[idx], idx);
    }

    onListRender2(item: cc.Node, idx: number) {
        let handle = item.getComponent('RankItem' + 2);
        handle.onShow(this.rankList2[idx], idx);
    }

    onListRender3(item: cc.Node, idx: number) {
        let handle = item.getComponent('RankItem' + 3);
        handle.onShow(this.rankList3[idx], idx);
    }

    onListRender4(item: cc.Node, idx: number) {
        let handle = item.getComponent('RankItem' + 4);
        handle.onShow(this.rankList4[idx], idx, this.awardList[idx]);
    }

    onListRender5(item: cc.Node, idx: number) {
        let handle = item.getComponent('RankItem' + 5);
        handle.onShow(this.rankList5[idx], idx, this.awardList[idx], this.cgdsCapital);
    }

    start() {

        // 0表示关闭，1表示打开炒股大赛排行，2表示打开闯关排行
        //当前配置
        GameData.appConf.module.forEach(el => {
            if (el.id == 18) {
                this.curSwitch = el.switch;
            }
        });

        this.tipsLabel.node.parent.active = false;
        console.log(JSON.stringify(GameData.appConf));

        let label = this.toggles[3].node.getChildByName('label').getComponent(cc.Label);

        if (this.curSwitch == 2) {

            label.string = '闯关赛';
            // 查询当前一轮闯关赛配置数据
            (<any>window).socket.send(pb.MessageId.Req_Game_CgsGetConf, null, (res) => {
                console.log('闯关赛配置1' + JSON.stringify(res));
                this.activityID = res.id;
                this.awardList = JSON.parse(res.award || '[]');
                this.from = res.from;
                this.to = res.to;
            })
        }
        else {
            if (this.curSwitch == 0) {
                this.toggles[3].node.active = false;
                return;
            }
            label.string = '炒股大赛';
            (<any>window).socket.send(pb.MessageId.Req_Game_CgdsList, null, (res) => {
                console.log('炒股大赛' + JSON.stringify(res));
                this.cgdsID = JSON.parse(res.items[0].id);
                this.awardList = JSON.parse(res.items[0].award || '[]');
                this.from = res.items[0].from;
                this.to = res.items[0].to;
                this.cgdsCapital = JSON.parse(res.items[0].conf).capital;
            })
        }

        let curnumber = 2;
        if (this.curSwitch) {
            curnumber = 3;

            setTimeout(() => {
                this.onToggle4();
            }, 200);
        }

        this.toggles.forEach((el, index) => {
            if (index == curnumber) {
                el.isChecked = true;
                this.scollNodes[index].active = true;
            }
            else {
                el.isChecked = false;
                this.scollNodes[index].active = false;
            }
        })

    }

    onBtnClick(event, curdata) {
        let name = event.target.name;
        if (name == 'leftBtn') {
            GameCfg.GameType = null;
            this.node.active = false;
        }

        else if (name == 'phb_topbt_help') {
            let dt = parseInt(curdata);
            if (dt == 1) {
                GameCfg.GameType = 'wwzb';
            }
            else if (dt == 2) {
                GameCfg.GameType = 'djph';
            }
            else if (dt == 3) {
                GameCfg.GameType = 'wwzb1';
            }
            else if (dt == 4) {
                GameCfg.GameType = 'sjb';
            }
            PopupManager.openHelpLayer();
        }
    }

    onToggleClick(event, curdata) {

        this.scollNodes.forEach(el => {
            el.active = false;
        })

        let name = event.node.name;
        if (name == 'toggle1') {

            this.getFameRanking();

            this.scollNodes[0].active = true;
            this.tipsLabel.node.parent.active = false;
        }

        else if (name == 'toggle2') {

            this.getLevelRanking();

            this.scollNodes[1].active = true;
            this.tipsLabel.node.parent.active = false;
        }

        else if (name == 'toggle3') {

            this.getFameRankingWeekly();

            this.scollNodes[2].active = true;
            this.tipsLabel.node.parent.active = true;
            this.tipsLabel.string = '威望周榜每周一中午12点重置';
        }

        else if (name == 'toggle4') {
            this.onToggle4();
        }
    }

    onToggle4() {
        //1表示打开炒股大赛排行
        if (this.curSwitch == 1) {
            this.getCgdsRanking();
            this.scollNodes[4].active = true;
        }
        // /2表示打开闯关排行
        else if (this.curSwitch == 2) {
            this.getCgsRanking();
            this.scollNodes[3].active = true;
        }



        this.tipsLabel.node.parent.active = true;
        if (this.curSwitch == 2) {
            let ts = new Date().getTime() / 1000;

            if (this.to - ts <= (24 * 60 * 60 * 3) && this.awardList.length <= 0) {
                this.tipsLabel.string = '下一轮比赛即将开启，敬请期待';
            }

            else if (this.to - ts <= (24 * 60 * 60 * 3) && this.awardList.length > 0) {
                this.tipsLabel.string = '本轮闯关赛即将结束，比赛结束后系统立刻发放奖励，敬请期待下一轮';
            }

            else if (this.to - ts > (24 * 60 * 60 * 3) && this.awardList.length > 0) {

                this.onShowTime();
            }
            else {
                this.tipsLabel.string = '';
            }

        }
        else {
            this.tipsLabel.string = '排行榜非实时数据，每个交易日12：30和15：30更新';
        }
    }

    onShowTime() {

        if (!this.cb) {
            this.cb = setInterval(() => {
                let time = this.to - new Date().getTime() / 1000;

                // 天数
                var day = Math.floor(time / 3600 / 24);
                // 小时
                var hr = Math.floor(time / 3600 % 24);
                // 分钟
                var min = Math.floor(time / 60 % 60);

                this.tipsLabel.string = '闯关赛比赛胜利，净胜场+1，比赛失败，净胜场-1   本赛季结束时间：' + day + '天' + hr + '时' + min + '分';
            }, 60 * 1000);
        }

        let time = this.to - new Date().getTime() / 1000;

        // 天数
        var day = Math.floor(time / 3600 / 24);
        // 小时
        var hr = Math.floor(time / 3600 % 24);
        // 分钟
        var min = Math.floor(time / 60 % 60);

        this.tipsLabel.string = '闯关赛比赛胜利，净胜场+1，比赛失败，净胜场-1   本赛季结束时间：' + day + '天' + hr + '时' + min + '分';
    }

    onDisable() {
        // PopupManager.arrPop.remove(2);
        clearInterval(this.cb);
        this.cb = null;
    }

}
