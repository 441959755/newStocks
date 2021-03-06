import GlobalEvent from '../../../sctiprs/utils/GlobalEvent';
import ActionUtils from '../../../sctiprs/utils/ActionUtils';
import GameData from '../../../sctiprs/GameData';
//import GameData from '../../../sctiprs/GameData';

const { ccclass, property } = cc._decorator;

@ccclass
export default class QHSetHandle extends cc.Component {
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

	@property(cc.Node)
	content: cc.Node = null;

	_Lid = 0;

	UIScrollControl = null;

	onLoad() {

		this.content.removeAllChildren();
	}

	start() {
		this.scroll.active = false;
		this.UIScrollControl = this.scroll.getComponent('UIScrollControl');
	}

	protected onEnable() {
		GlobalEvent.on(
			'ItemValue',
			data => {
				this.MaDates[this._Lid].string = data;
				this.scroll.active = false;
			},
			this
		);
		this.initToggle();
		ActionUtils.openNode(this.node);
	}

	//默认的选项
	initToggle() {
		let data = GameData.qhSet;
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

		this.MaDates[0].string = data.MA1Date;
		this.MaDates[1].string = data.MA2Date;
		this.MaDates[2].string = data.MA3Date;
		this.MaDates[3].string = data.MA4Date;
		this.MaDates[4].string = data.MA5Date;
		this.MaDates[5].string = data.MA6Date;
	}

	//保存设置的数据
	SaveToggle() {
		let data = GameData.qhSet;
		data.isShowVol = this.showVol[0].isChecked ? true : false;
		data.isBW = this.BW[0].isChecked ? true : false;

		data.isMA1 = this.MAs[0].isChecked ? true : false;

		data.isMA2 = this.MAs[1].isChecked ? true : false;
		data.isMA3 = this.MAs[2].isChecked ? true : false;
		data.isMA4 = this.MAs[3].isChecked ? true : false;
		data.isMA5 = this.MAs[4].isChecked ? true : false;
		data.isMA6 = this.MAs[5].isChecked ? true : false;

		data.MA1Date = parseInt(this.MaDates[0].string);
		data.MA2Date = parseInt(this.MaDates[1].string);
		data.MA3Date = parseInt(this.MaDates[2].string);
		data.MA4Date = parseInt(this.MaDates[3].string);
		data.MA5Date = parseInt(this.MaDates[4].string);
		data.MA6Date = parseInt(this.MaDates[5].string);

		GameData.qhSet = data;
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
			this.scroll.active = true;
			let parnet = event.target.parent.parent;
			if (parseInt(data) < 3) {
				this.scroll.y = parnet.y - parnet.height / 2;
			} else {
				this.scroll.y = parnet.y + parnet.height / 2 + this.scroll.height;
			}
			let arr = [];
			let index = 1,
				max = 30;
			if (data == 0) {
				index = 1;
				max = 30;
				this._Lid = 0;
			} else if (data == 1) {
				index = 2;
				max = 60;
				this._Lid = 1;
			} else if (data == 2) {
				index = 3;
				max = 90;
				this._Lid = 2;
			} else if (data == 3) {
				index = 5;
				max = 120;
				this._Lid = 3;
			} else if (data == 4) {
				index = 10;
				max = 240;
				this._Lid = 4;
			} else if (data == 5) {
				index = 120;
				max = 240;
				this._Lid = 5;
			}

			this.content.active = true;
			this.UIScrollControl.initControl(this.preNode, arr.length, this.preNode.getContentSize(), 0, (node, _index) => {
				let label = node.getComponent(cc.Label);
				label.string = arr[_index];
			})
		}

		else if (name == 'viewMask') {
			this.scroll.active = false;
			this.content.active = false;
		}
	}

	protected onDisable() {
		GlobalEvent.off('ItemValue');
	}
}
