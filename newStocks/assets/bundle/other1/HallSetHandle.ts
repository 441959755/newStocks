
import GameCfg from "../../sctiprs/GameCfg";
import GameData from "../../sctiprs/GameData";
import AudioUtils from "../../sctiprs/utils/AudioUtils";
import GlobalEvent from "../../sctiprs/utils/GlobalEvent";
import List from "../../sctiprs/utils/List";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallSetHandle extends cc.Component {

    @property([cc.Toggle])
    showVol: cc.Toggle[] = [];

    @property([cc.Toggle])
    BW: cc.Toggle[] = [];

    @property([cc.Toggle])
    MAs: cc.Toggle[] = [];

    @property([cc.Label])
    MaDates: cc.Label[] = [];

    @property(cc.Node)
    scroll: cc.Node = null;

    @property(cc.Node)
    preNode: cc.Node = null;

    @property([cc.Toggle])
    soundToggle: cc.Toggle[] = [];

    _Lid = 0;

    UIScrollControl = null;

    @property(List)
    list: List = null;

    @property(cc.Node)
    viewNode: cc.Node = null;

    listData = null;

    protected onDisable() {

        GlobalEvent.off('ItemValue');
    }

    start() {
        //   this.scroll.active = false;
        this.viewNode.active = false;
        this.UIScrollControl = this.scroll.getComponent('UIScrollControl');
        this.initToggle();
    }

    protected onEnable() {
        GlobalEvent.on('ItemValue', (data) => {
            this.MaDates[this._Lid].string = data;
            this.scroll.y = -999;
            this.viewNode.active = false;
        }, this);
    }

    //默认的选项
    initToggle() {
        let data;
        data = GameData.smSet;
        this.showVol[0].isChecked = data.isShowVol;
        this.showVol[1].isChecked = !data.isShowVol;
        this.BW[0].isChecked = data.isBW;
        this.BW[1].isChecked = !data.isBW;

        this.MAs[0].isChecked = data.isMA1;
        this.MAs[1].isChecked = data.isMA2;
        this.MAs[2].isChecked = data.isMA3;
        this.MAs[3].isChecked = data.isMA4;
        this.MAs[4].isChecked = data.isMA5;
        this.MAs[5].isChecked = data.isMA6;

        this.MaDates[0].string = data.MA1;
        this.MaDates[1].string = data.MA2;
        this.MaDates[2].string = data.MA3;
        this.MaDates[3].string = data.MA4;
        this.MaDates[4].string = data.MA5;
        this.MaDates[5].string = data.MA6;

        this.soundToggle[0].isChecked = data.isSound;
        this.soundToggle[1].isChecked = !data.isSound;
        // AudioUtils.setEffectsVolume(data.isSound);
    }

    //保存设置的数据
    SaveToggle() {
        GameData.smSet.isShowVol = this.showVol[0].isChecked ? true : false;

        GameData.smSet.isBW = this.BW[0].isChecked ? true : false;

        GameData.smSet.isSound = this.soundToggle[0].isChecked ? 1 : 0;

        GameData.smSet.isMA1 = this.MAs[0].isChecked ? true : false;

        GameData.smSet.isMA2 = this.MAs[1].isChecked ? true : false;
        GameData.smSet.isMA3 = this.MAs[2].isChecked ? true : false;
        GameData.smSet.isMA4 = this.MAs[3].isChecked ? true : false;
        GameData.smSet.isMA5 = this.MAs[4].isChecked ? true : false;
        GameData.smSet.isMA6 = this.MAs[5].isChecked ? true : false;

        GameData.smSet.MA1 = parseInt(this.MaDates[0].string);
        GameData.smSet.MA2 = parseInt(this.MaDates[1].string);
        GameData.smSet.MA3 = parseInt(this.MaDates[2].string);
        GameData.smSet.MA4 = parseInt(this.MaDates[3].string);
        GameData.smSet.MA5 = parseInt(this.MaDates[4].string);
        GameData.smSet.MA6 = parseInt(this.MaDates[5].string);

        let arr = [GameData.dxSet, GameData.zbSet, GameData.qhSet, GameData.fsSet, GameData.tjdSet, GameData.smSet, GameData.jjpkSet];

        arr.forEach(el => {
            el.isShowVol = GameData.smSet.isShowVol;
            el.isBW = GameData.smSet.isBW;
            el.isSound = GameData.smSet.isSound;
            el.isMA1 = GameData.smSet.isMA1;
            el.isMA2 = GameData.smSet.isMA2;
            el.isMA3 = GameData.smSet.isMA3;
            el.isMA4 = GameData.smSet.isMA4;
            el.isMA5 = GameData.smSet.isMA5;
            el.isMA6 = GameData.smSet.isMA6;
            el.MA1 = GameData.smSet.MA1;
            el.MA2 = GameData.smSet.MA2;
            el.MA3 = GameData.smSet.MA3;
            el.MA4 = GameData.smSet.MA4;
            el.MA5 = GameData.smSet.MA5;
            el.MA6 = GameData.smSet.MA6;
        })

        GameData.smSet = GameData.smSet;
        AudioUtils.setEffectVolume(GameData.smSet.isSound);
        cc.sys.localStorage.setItem('SMSET', JSON.stringify(GameData.smSet));

        GameCfg.MAs = [];

        if (GameData.smSet.isMA1) {
            GameCfg.MAs.push(GameData.smSet.MA1);
        }
        if (GameData.smSet.isMA2) {
            GameCfg.MAs.push(GameData.smSet.MA2);
        }
        if (GameData.smSet.isMA3) {
            GameCfg.MAs.push(GameData.smSet.MA3);
        }
        if (GameData.smSet.isMA4) {
            GameCfg.MAs.push(GameData.smSet.MA4);
        }
        if (GameData.smSet.isMA5) {
            GameCfg.MAs.push(GameData.smSet.MA5);
        }
        if (GameData.smSet.isMA6) {
            GameCfg.MAs.push(GameData.smSet.MA6);
        }

    }

    onBtnClick(event, data) {
        let name = event.target.name;

        if (name == 'closeSetBtn') {

            this.node.active = false;

        } else if (name == 'saveSetBtn') {
            //保存选择的数据
            this.SaveToggle();
            this.node.active = false;

        } else if (name == 'lx_srk_1') {
            this.viewNode.active = true;
            this._Lid = parseInt(data);
            //  this.scroll.active = true;
            let parnet = event.target.parent.parent;
            if (parseInt(data) < 3) {
                this.scroll.y = (parnet.y - parnet.height / 2);
            } else {
                this.scroll.y = parnet.y + parnet.height / 2 + this.scroll.height;
            }
            this.listData = [];
            let index = 1, max = 30;
            if (this._Lid == 0) {
                index = 1;
                max = 30;
            } else if (this._Lid == 1) {
                index = 2; max = 60;
            } else if (this._Lid == 2) {
                index = 3; max = 90;
            } else if (this._Lid == 3) {
                index = 5; max = 120;
            } else if (this._Lid == 4) {
                index = 10; max = 240;
            } else if (this._Lid == 5) {
                index = 120; max = 250;
            }
            for (let i = index; i <= max; i++) {
                this.listData.push(i);
            }
            this.list.numItems = this.listData.length;

        } else if (name == 'viewMask') {
            this.viewNode.active = false;
            this.scroll.y = -999;
        }
    }

    onListRender(item: cc.Node, idx: number) {
        item.x = 0;
        let label = item.getComponent(cc.Label);
        label.string = this.listData[idx];
    }
}
