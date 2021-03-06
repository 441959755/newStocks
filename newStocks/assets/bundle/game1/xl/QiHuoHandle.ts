

import GameCfg from "../../../sctiprs/GameCfg";

import GameData from "../../../sctiprs/GameData";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import PopupManager from "../../../sctiprs/utils/PopupManager";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class QiHuoHandle extends cc.Component {

	DCArr = null; //大连商品交易所
	SCArr = null; //上海期货交易所
	ZCArr = null; //郑州商品交易所
	XJArr = null; //中金所

	@property(cc.Node)
	preItem: cc.Node = null;

	@property([cc.Node])
	box: cc.Node[] = [];

	@property([cc.Node])
	downBox: cc.Node[] = [];

	_tid = 0;

	curCount = 0;

	curState = 0;

	@property(cc.Label)
	tipsLabel1: cc.Label = null;

	@property(cc.Label)
	tipsLabel2: cc.Label = null;

	@property(cc.Node)
	mfxlBtn: cc.Node = null;

	onLoad() {

		this.DCArr = {
			name: '大连商品',

			type: [

			],
			main: [

			],

			index: [

			],
		};


		this.SCArr = {
			name: '上海商品',

			type: [],
			main: [

			],

			index: [

			],

		};

		this.ZCArr = {
			name: '郑州商品',

			type: [

			],
			main: [

			],

			index: [

			],

		};

		this.XJArr = {
			name: '中金所',
			type: [],
			main: [],
			index: [

			],
		};

		GameData.contractlist.forEach(el => {

			let items = el.split('|');

			if (items[4] == 'DC') {

				let str = items[1].slice(-items.length, -2);

				if (this.DCArr.type.indexOf(str) == -1) {

					this.DCArr.type.push(str);

				} else {

					let t = this.DCArr.type.indexOf(str);

					if (!this.DCArr.main[t]) {

						this.DCArr.main[t] = items[1];

					} else {

						this.DCArr.index[t] = items[1];

					}
				}
				if (!this.DCArr.main[this.DCArr.type.length - 1]) {

					this.DCArr.main.push(items[1]);

				} else {

					this.DCArr.index.push(items[1]);

				}
			}
			else if (items[4] == 'SC') {
				let str = items[1].slice(-items.length, -2);
				if (this.SCArr.type.indexOf(str) == -1) {
					this.SCArr.type.push(str);
				} else {
					let t = this.SCArr.type.indexOf(str);
					if (!this.SCArr.main[t]) {
						this.SCArr.main[t] = items[1];
					} else {
						this.SCArr.index[t] = items[1];
					}
				}
				if (!this.SCArr.main[this.SCArr.type.length - 1]) {
					this.SCArr.main.push(items[1]);
				} else {
					this.SCArr.index.push(items[1]);
				}
			}
			else if (items[4] == 'ZC') {
				let str = items[1].slice(-items.length, -2);
				if (this.ZCArr.type.indexOf(str) == -1) {
					this.ZCArr.type.push(str);
				} else {
					let t = this.ZCArr.type.indexOf(str);
					if (!this.ZCArr.main[t]) {
						this.ZCArr.main[t] = items[1];
					} else {
						this.ZCArr.index[t] = items[1];
					}
				}
				if (!this.ZCArr.main[this.ZCArr.type.length - 1]) {
					this.ZCArr.main.push(items[1]);
				} else {
					this.ZCArr.index.push(items[1]);
				}

			} else if (items[4] == 'ZJS') {
				let str = items[1].slice(-items.length, -2);
				//	if (this.XJArr.type.indexOf(str) == -1) {
				this.XJArr.type.push(str);
				//	}
				//	if (!this.XJArr.main[this.XJArr.type.length - 1]) {
				this.XJArr.main.push(items[1]);
				// } else {
				//this.XJArr.index.push(items[1]);
				// }
			}
		});

		//更新次数
		GlobalEvent.on(EventCfg.GMAECOUNTERSCHANGE, this.onGameCountSow.bind(this), this);

		//检测年更新
		this.checkYearTime();
	}

	checkYearTime() {
		let f = new Date();

		let y = f.getFullYear() + '';
		let m = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
		let d = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();
		let downBox = this.downBox[3];
		let content = cc.find('New ScrollView/view/content', downBox);

		let tt = 0;

		for (let i = content.children.length - 1; i >= 0; i--) {

			let el = content.children[i];
			if (i == 0) {
				el.getComponent(cc.Label).string = '随机';
				el.color = cc.Color.WHITE;
				el.getComponent(cc.Button).interactable = true;
				el.getComponent(cc.Button).enableAutoGrayEffect = false;
			}
			else {
				el.getComponent(cc.Label).string = parseInt(y) - tt + '';
				el.color = cc.Color.WHITE;
				el.getComponent(cc.Button).interactable = true;
				el.getComponent(cc.Button).enableAutoGrayEffect = false;
				tt++;
			}

		}
	}

	onGameCountSow() {

		if (GameData.vipStatus) {
			this.tipsLabel1.node.active = false;
			this.tipsLabel2.node.active = false;
			return;

		}

		let gameCount = ComUtils.onCurWXIsEnterGame();

		this.curState = gameCount.status;
		this.tipsLabel1.node.active = true;
		this.tipsLabel2.node.active = true;
		if (gameCount.status == 1) {
			this.tipsLabel1.string = '今日剩余次数：' + gameCount.count + '次';
		}

		else if (gameCount.status == 2) {

			this.tipsLabel1.string = '今日剩余次数：' + GameData.adSucceed + '次';
		}

		else if (gameCount.status == 3) {
			this.tipsLabel1.string = '今日次数已用完,请明天再来吧！';
			this.tipsLabel2.node.active = false;
		}

	}

	onDestroy() {
		GlobalEvent.off(EventCfg.GMAECOUNTERSCHANGE);
	}

	onEnable() {

		GlobalEvent.emit(EventCfg.HIDELOADING);
		GameCfg.GameType = pb.GameType.QiHuo;
		let setDatas = GameData.qhSet;
		this.box[0].getChildByName('label').getComponent(cc.Label).string = setDatas.JYS;
		this.box[1].getChildByName('label').getComponent(cc.Label).string = setDatas.LXPZ;
		this.box[2].getChildByName('label').getComponent(cc.Label).string = setDatas.HY;
		this.box[3].getChildByName('label').getComponent(cc.Label).string = setDatas.year;
		this.box[4].getChildByName('label').getComponent(cc.Label).string = setDatas.month;
		this.box[5].getChildByName('label').getComponent(cc.Label).string = setDatas.day;
		this.box[6].getChildByName('label').getComponent(cc.Label).string = setDatas.KLine;
		this.box[7].getChildByName('label').getComponent(cc.Label).string = setDatas.ZLine;

		this.onGameCountSow();
		//	this.isValidClick();
	}

	isValidClick() {
		if (GameData.qhSet.JYS == '随机') {
			this.box[1].getChildByName('mask').active = true;
			this.box[2].getChildByName('mask').active = true;
		}
		else {
			this.box[1].getChildByName('mask').active = false;
		}

		if (GameData.qhSet.LXPZ == '随机') {
			this.box[2].getChildByName('mask').active = true;
		}
		else {
			this.box[2].getChildByName('mask').active = false;
		}

	}

	/**
 * 根据期货的名字获取股票的范围
 */
	getQHTimeByCodeName(index) {
		let year = this.box[3].getChildByName('label').getComponent(cc.Label).string;
		let month = this.box[4].getChildByName('label').getComponent(cc.Label).string;
		let day = this.box[5].getChildByName('label').getComponent(cc.Label).string;
		let downBox = this.downBox[index];
		let content = cc.find('New ScrollView/view/content', downBox);

		if (GameData.qhSet.HY == '随机') {
			let f = new Date();
			let y = f.getFullYear() + '';
			let m = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
			let d = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();
			let sc = TimeUtils.GetPreMonthDay(y + '-' + m + '-' + d, 3);
			y = sc.y;
			m = sc.m;
			d = sc.d;
			let t;
			if (index == 3) {
				t = y;
			} else if (index == 4) {
				if (year != '随机' && year == y) {
					t = m;
				} else {
					t = 12;
				}
			} else if (index == 5) {
				if (year == y && parseInt(month) == m) {
					t = d;
				} else {
					var temp = new Date(parseInt(year), parseInt(month + ''), 0);
					let day1 = temp.getDate();
					t = day1;
				}
			}
			content.children.forEach(el => {
				let str = el.getComponent(cc.Label).string;
				if (str == '随机') {
				} else if (parseInt(str) > t) {
					el.color = new cc.Color().fromHEX('#a0a0a0');
					el.getComponent(cc.Button).interactable = false;
					el.getComponent(cc.Button).enableAutoGrayEffect = true;
				} else {
					el.color = cc.Color.WHITE;
					el.getComponent(cc.Button).interactable = true;
					el.getComponent(cc.Button).enableAutoGrayEffect = false;
				}
			})

			let downBox1 = this.downBox[7];
			let content1 = cc.find('New ScrollView/view/content', downBox1);
			content1.children.forEach(el => {
				el.color = cc.Color.WHITE;
				el.getComponent(cc.Button).interactable = true;
				el.getComponent(cc.Button).enableAutoGrayEffect = false;
				//}
			})

		} else {
			let date = ConfUtils.QHGetTimeByCodeName(GameData.qhSet.HY);

			let ly = date.start.slice(0, 4);
			let lm = date.start.slice(4, 6);
			let ld = date.start.slice(6);


			let d = new Date(ly + '-' + lm + '-' + ld);

			let lt = d.getTime() + 24 * 60 * 60 * 1000 * 100;

			let lda = new Date(lt);
			ly = lda.getFullYear();
			lm = lda.getMonth() + 1 >= 10 ? lda.getMonth() + 1 : '0' + (lda.getMonth() + 1);
			ld = lda.getDate() >= 10 ? lda.getDate() : '0' + (lda.getDate());


			let cy = date.end.slice(0, 4);
			let cm = date.end.slice(4, 6);
			let cd = date.end.slice(6);


			let cdd = new Date(cy + '-' + cm + '-' + cd);

			let ct = cdd.getTime() - 24 * 60 * 60 * 1000 * 100;

			let cda = new Date(ct);
			cy = cda.getFullYear();
			cm = cda.getMonth() + 1 >= 10 ? cda.getMonth() + 1 : '0' + (cda.getMonth() + 1);
			cd = cda.getDate() >= 10 ? cda.getDate() : '0' + (cda.getDate());

			let min, max;
			if (index == 3) {
				min = ly;
				max = cy;
			} else if (index == 4) {
				if (parseInt(year) == parseInt(ly)) {
					min = lm;
					max = 12;
				} else if (parseInt(year) == parseInt(cy)) {
					max = cm;
					min = 1;
				} else {
					min = 1;
					max = 12;
				}

			} else if (index == 5) {
				if (parseInt(year) == parseInt(ly) && parseInt(month) == parseInt(lm)) {
					min = ld;
					var temp = new Date(parseInt(year), parseInt(month), 0);
					let day = temp.getDate();
					max = day;
				} else if (parseInt(year) == parseInt(cy) && parseInt(month) == parseInt(cm)) {
					max = cd;
					min = 1;
				} else {
					var temp = new Date(parseInt(year), parseInt(month), 0);
					let day1 = temp.getDate();
					min = 1;
					max = day1;
				}
			}
			content.children.forEach(el => {
				let str = el.getComponent(cc.Label).string;
				if (str == '随机') {

				} else if (parseInt(str) < parseInt(min) || parseInt(str) > parseInt(max)) {
					el.color = new cc.Color().fromHEX('#a0a0a0');
					el.getComponent(cc.Button).interactable = false;
					el.getComponent(cc.Button).enableAutoGrayEffect = true;
				} else {
					el.color = cc.Color.WHITE;
					el.getComponent(cc.Button).interactable = true;
					el.getComponent(cc.Button).enableAutoGrayEffect = false;
				}
			})
		}

	}

	onSelectBoxClick(evetn, data) {
		this._tid = parseInt(data);
		this.downBox[this._tid].active = true;
		let content = cc.find('New ScrollView/view/content', this.downBox[this._tid]);
		let nodes = content.children;

		if (this._tid == 1) {

			if (GameData.qhSet.JYS == '随机') {
				if (nodes.length == 0) {
					let node = cc.instantiate(this.preItem);
					content.addChild(node);
					node.x = 0;
				}
				nodes = content.children;
				nodes.forEach((el, index) => {
					if (index == 0) {
						el.getComponent(cc.Label).string = '随机';
					} else {
						el.active = false;
					}
				});
			}
			else if (GameData.qhSet.JYS == '大连商品') {
				if (nodes.length < this.DCArr.type.length) {
					let tt = this.DCArr.type.length - nodes.length
					for (let i = 0; i < tt; i++) {
						let node = cc.instantiate(this.preItem);
						content.addChild(node);
						node.x = 0;
					}
				}
				nodes = content.children;
				nodes.forEach((el, index) => {
					if (index >= this.DCArr.type.length) {
						el.active = false;
					} else {
						el.active = true;
						el.getComponent(cc.Label).string = this.DCArr.type[index];
					}
				})
			}
			else if (GameData.qhSet.JYS == '上海商品') {
				if (nodes.length < this.SCArr.type.length) {
					let tt = this.SCArr.type.length - nodes.length;
					for (let i = 0; i < tt; i++) {
						let node = cc.instantiate(this.preItem);
						content.addChild(node);
						node.x = 0;
					}
				}
				nodes = content.children;
				nodes.forEach((el, index) => {
					if (index >= this.SCArr.type.length) {
						el.active = false;
					} else {
						el.active = true;
						el.getComponent(cc.Label).string = this.SCArr.type[index];
					}
				})
			}
			else if (GameData.qhSet.JYS == '郑州商品') {
				if (nodes.length < this.ZCArr.type.length) {
					let tt = this.ZCArr.type.length - nodes.length;
					for (let i = 0; i < tt; i++) {
						let node = cc.instantiate(this.preItem);
						content.addChild(node);
						node.x = 0;
					}
				}
				nodes = content.children;
				nodes.forEach((el, index) => {
					if (index >= this.ZCArr.type.length) {
						el.active = false;
					} else {
						el.active = true;
						el.getComponent(cc.Label).string = this.ZCArr.type[index];
					}
				})
			}
			else if (GameData.qhSet.JYS == '中金所') {
				if (nodes.length < this.XJArr.type.length) {
					let tt = this.XJArr.type.length - nodes.length;
					for (let i = 0; i < tt; i++) {
						let node = cc.instantiate(this.preItem);
						content.addChild(node);
						node.x = 0;
					}
				}
				nodes = content.children;
				nodes.forEach((el, index) => {
					if (index >= this.XJArr.type.length) {
						el.active = false;
					} else {
						el.active = true;
						el.getComponent(cc.Label).string = this.XJArr.type[index];
					}
				})
			}

		}
		else if (this._tid == 2) {

			if (GameData.qhSet.JYS == '随机') {
				nodes = content.children;
				nodes.forEach((el, index) => {
					if (index == 0) {
						el.active = true;
						el.getComponent(cc.Label).string = '随机';
					} else {
						el.active = false;
					}
				});
			}
			else if (GameData.qhSet.LXPZ != '随机') {
				let arr = [];
				if (this.DCArr.type.indexOf(GameData.qhSet.LXPZ) != -1) {
					let index = this.DCArr.type.indexOf(GameData.qhSet.LXPZ);
					this.DCArr.main[index] && arr.push(this.DCArr.main[index]);
					this.DCArr.index[index] && arr.push(this.DCArr.index[index]);
				}
				else if (this.SCArr.type.indexOf(GameData.qhSet.LXPZ) != -1) {
					let index = this.SCArr.type.indexOf(GameData.qhSet.LXPZ);
					this.SCArr.main[index] && arr.push(this.SCArr.main[index]);
					this.SCArr.index[index] && arr.push(this.SCArr.index[index]);
				}
				else if (this.XJArr.type.indexOf(GameData.qhSet.LXPZ) != -1) {
					let index = this.XJArr.type.indexOf(GameData.qhSet.LXPZ);
					this.XJArr.main[index] && arr.push(this.XJArr.main[index]);
					this.XJArr.index[index] && arr.push(this.XJArr.index[index]);
				}
				else if (this.ZCArr.type.indexOf(GameData.qhSet.LXPZ) != -1) {
					let index = this.ZCArr.type.indexOf(GameData.qhSet.LXPZ);
					this.ZCArr.main[index] && (arr.push(this.ZCArr.main[index]));
					this.ZCArr.index[index] && (arr.push(this.ZCArr.index[index]));
				}

				if (nodes.length < arr.length) {
					let tt = arr.length - nodes.length
					for (let i = 0; i < tt; i++) {
						let node = cc.instantiate(this.preItem);
						content.addChild(node);
						node.x = 0;
					}
				}
				nodes = content.children;
				nodes.forEach((el, index) => {
					if (index >= arr.length) {
						el.active = false;
					} else {
						el.active = true;
						el.getComponent(cc.Label).string = arr[index];
					}
				})
			}

		}

		else if (this._tid == 5 || this._tid == 3 || this._tid == 4) {
			let year = this.box[3].getChildByName('label').getComponent(cc.Label).string;
			let month = this.box[4].getChildByName('label').getComponent(cc.Label).string;
			if (this._tid == 4 || this._tid == 5) {
				if (year == '随机') {
					content.children.forEach(el => {

						el.color = new cc.Color().fromHEX('#a0a0a0');
						el.getComponent(cc.Button).interactable = false;
						el.getComponent(cc.Button).enableAutoGrayEffect = true;
					})
					return;
				}
			}
			this.getQHTimeByCodeName(this._tid);
			// if (year == '随机' || month == '--') {
			// 	return;
			// }
			// var temp = new Date(parseInt(year), parseInt(month), 0);
			// let day = temp.getDate();
			// if (this._tid == 5) {
			// 	let content = cc.find('New ScrollView/view/content', this.downBox[this._tid]);
			// 	content.children.forEach(el => {
			// 		let str = el.getComponent(cc.Label).string;
			// 		if (parseInt(str) > day) {
			// 			if (this._tid == 5) {
			// 				el.color = new cc.Color().fromHEX('#a0a0a0');
			// 				el.getComponent(cc.Button).interactable = false;
			// 				el.getComponent(cc.Button).enableAutoGrayEffect = true;
			// 			} else {
			// 				this.box[5].getChildByName('label').getComponent(cc.Label).string = day + '';
			// 			}
			// 		} else {
			// 			if (this._tid == 5) {
			// 				el.color = cc.Color.WHITE;
			// 				el.getComponent(cc.Button).interactable = true;
			// 				el.getComponent(cc.Button).enableAutoGrayEffect = false;
			// 			} else {
			// 				this.box[5].getChildByName('label').getComponent(cc.Label).string = day + '';
			// 			}
			// 		}
			// 	});
			// }

		}

		//	this.isValidClick();
	}

	onAutoSetTime() {
		if (GameData.qhSet.year != '随机') {
			if (GameData.qhSet.HY != '随机') {
				let date = ConfUtils.QHGetTimeByCodeName(GameData.qhSet.HY);
				let ly = date.start.slice(0, 4);
				let lm = date.start.slice(4, 6);
				let ld = date.start.slice(6);
				let st;
				st = GameData.qhSet.year;
				if (GameData.qhSet.month.length == 1) {
					st += ('0' + GameData.qhSet.month);
				} else {
					st += (GameData.qhSet.month);
				}

				if (GameData.qhSet.day.length == 1) {
					st += ('0' + GameData.qhSet.day)
				} else {
					st += GameData.qhSet.day;
				}

				if (parseInt(st) < parseInt(date.start) || parseInt(st) > parseInt(date.end)) {
					GameData.qhSet.year = ly;
					GameData.qhSet.month = lm;
					GameData.qhSet.day = ld;
					this.box[3].getChildByName('label').getComponent(cc.Label).string = ly;
					this.box[4].getChildByName('label').getComponent(cc.Label).string = lm;
					this.box[5].getChildByName('label').getComponent(cc.Label).string = ld;
				}
			}
		}
	}

	onBtnClick(event, data) {
		let name = event.target.name;

		//设置
		if (name == 'setQHBtnDX') {

			GlobalEvent.emit(EventCfg.OPENSETLAYER);

		}
		//记录
		else if (name == 'historyQHBtn') {

			GlobalEvent.emit(EventCfg.OPENHISTORYLAYER);
		}
		//
		else if (name == 'item') {
			let la = this.box[this._tid].getChildByName('label').getComponent(cc.Label);

			let str = event.target.getComponent(cc.Label).string;
			la.string = str;
			this.downBox[this._tid].active = false;
			if (this._tid == 0) {
				GameData.qhSet.JYS = str;
				this.box[1].getChildByName('label').getComponent(cc.Label).string = '随机';
				this.box[2].getChildByName('label').getComponent(cc.Label).string = '随机';
				GameData.qhSet.HY = '随机';
				GameData.qhSet.LXPZ = '随机';
			} else if (this._tid == 1) {
				GameData.qhSet.LXPZ = str;
				if (this.DCArr.type.indexOf(str) != -1) {
					let t = this.DCArr.type.indexOf(str);
					this.box[2].getChildByName('label').getComponent(cc.Label).string = this.DCArr.main[t];
					GameData.qhSet.HY = this.DCArr.main[t];
				} else if (this.SCArr.type.indexOf(str) != -1) {
					let t = this.SCArr.type.indexOf(str);
					this.box[2].getChildByName('label').getComponent(cc.Label).string = this.SCArr.main[t];
					GameData.qhSet.HY = this.SCArr.main[t];
				} else if (this.XJArr.type.indexOf(str) != -1) {
					let t = this.XJArr.type.indexOf(str);
					this.box[2].getChildByName('label').getComponent(cc.Label).string = this.XJArr.main[t];
					GameData.qhSet.HY = this.XJArr.main[t];
				} else if (this.ZCArr.type.indexOf(str) != -1) {
					let t = this.ZCArr.type.indexOf(str);
					this.box[2].getChildByName('label').getComponent(cc.Label).string = this.ZCArr.main[t];
					GameData.qhSet.HY = this.ZCArr.main[t];
				}
				//	this.onAutoSetTime();
				this.box[3].getChildByName('label').getComponent(cc.Label).string = '随机';
				this.box[4].getChildByName('label').getComponent(cc.Label).string = '随机';
				this.box[5].getChildByName('label').getComponent(cc.Label).string = '随机';
				this.getQHTimeByCodeName(this._tid);

			} else if (this._tid == 2) {
				GameData.qhSet.HY = str;
				//	this.onAutoSetTime();
				this.box[3].getChildByName('label').getComponent(cc.Label).string = '随机';
				this.box[4].getChildByName('label').getComponent(cc.Label).string = '随机';
				this.box[5].getChildByName('label').getComponent(cc.Label).string = '随机';
				this.getQHTimeByCodeName(this._tid);

			} else if (this._tid == 3 || this._tid == 4 || this._tid == 5) {
				if (this._tid == 3) {
					GameData.qhSet.year = str;
					if (GameData.qhSet.year == '随机') {
						this.box[4].getChildByName('label').getComponent(cc.Label).string = '随机';
						this.box[5].getChildByName('label').getComponent(cc.Label).string = '随机';
						GameData.qhSet.month = '随机';
						GameData.qhSet.day = '随机';
					} else {
						if (GameData.qhSet.HY != '随机') {
							let date = ConfUtils.QHGetTimeByCodeName(GameData.qhSet.HY);

							let ly = date.start.slice(0, 4);
							let lm = date.start.slice(4, 6);
							let ld = date.start.slice(6);

							let obj = TimeUtils.GetAddDay(ly + '-' + lm + '-' + ld, 100);

							ly = obj.y;
							lm = obj.m;
							ld = obj.d;

							let cy = date.end.slice(0, 4);
							let cm = date.end.slice(4, 6);
							let cd = date.end.slice(6);
							if (GameData.qhSet.year == ly) {
								GameData.qhSet.month = lm;
								GameData.qhSet.day = ld;
								this.box[4].getChildByName('label').getComponent(cc.Label).string = lm;
								this.box[5].getChildByName('label').getComponent(cc.Label).string = ld;
							} else if (GameData.qhSet.year == cy) {
								GameData.qhSet.month = '1';
								GameData.qhSet.day = '1';
								this.box[4].getChildByName('label').getComponent(cc.Label).string = '1';
								this.box[5].getChildByName('label').getComponent(cc.Label).string = '1';
							} else {
								GameData.qhSet.month = '1';
								GameData.qhSet.day = '10';
								this.box[4].getChildByName('label').getComponent(cc.Label).string = '1';
								this.box[5].getChildByName('label').getComponent(cc.Label).string = '10';
							}

						} else {
							GameData.qhSet.month = '1';
							GameData.qhSet.day = '5';
							this.box[4].getChildByName('label').getComponent(cc.Label).string = '1';
							this.box[5].getChildByName('label').getComponent(cc.Label).string = '5';
						}

					}
				} else if (this._tid == 4) {

					GameData.qhSet.month = str;
				} else if (this._tid == 5) {
					GameData.qhSet.day = str;
				}

				let year = this.box[3].getChildByName('label').getComponent(cc.Label).string;
				let month = this.box[4].getChildByName('label').getComponent(cc.Label).string;
				if (year == '随机' || month == '--') {
					return;
				}
				var temp = new Date(parseInt(year), parseInt(month), 0);
				let day = temp.getDate();
				let downBox = this.downBox[5];
				let content = cc.find('New ScrollView/view/content', downBox);
				let str1 = this.box[5].getChildByName('label').getComponent(cc.Label).string
				content.children.forEach(el => {

					if (parseInt(str1) > day) {
						this.box[5].getChildByName('label').getComponent(cc.Label).string = day + '';
					} else {
						//this.box[5].getChildByName('label').getComponent(cc.Label).string = day + '';
					}
				});
			}
			else if (this._tid == 6) {
				GameData.qhSet.KLine = parseInt(str);
			} else if (this._tid == 7) {
				GameData.qhSet.ZLine = str;
			}

		}
		//
		else if (name == 'DCnode') {
			this.downBox.forEach(el => {
				el.active = false;
			});
		}
		else if (name == 'startQHBtn') {

			if (GameData.properties[pb.GamePropertyId.Gold] < Math.abs(GameData.gameConf.qhxl.cost[0].v) && !GameData.vipStatus) {
				GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '金币不足');
				GlobalEvent.emit('onShowGobroke');
				return;
			}

			if (this.curState == 2 && !GameData.adSucceed) {
				let self = this;

				PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/unlockBox', 22, (node) => {
					node.getComponent('UnlockBox').callback = () => {
						GlobalEvent.emit(EventCfg.SHOWLOADING);
						self.onGameCountSow();
					}
				});

				return;
			}

			else if (this.curState == 3) {
				GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '今日次数已用完,请明天再来吧！');
			}
			else {
				// let time = new Date().toLocaleDateString();

				// cc.sys.localStorage.setItem(time + 'ADSUCCEED' + GameCfg.GameType, 0);

				GlobalEvent.emit(EventCfg.SHOWLOADING);
				GameCfg.GAMEFUPAN = false;
				GameCfg.GameSet = GameData.qhSet;
				GameCfg.GameType = pb.GameType.QiHuo;
				GameCfg.ziChan = 100000;
				this.QHStartGameSet();
				this.onGameCountSow();
			}


		}
		else if (name == 'blackbtn') {
			this.node.active = false;
			GameCfg.GameType = null;
		}

		else if (name == 'sys_helpbig1') {

			PopupManager.openHelpLayer();
		}

		// else if (name == 'mfxlBtn') {
		// 	GlobalEvent.emit("OPENUNLOCKBOX", true);
		// }
	}

	QHStartGameSet() {
		GameCfg.GAMEFUPAN = false;
		GameCfg.GameSet = GameData.qhSet;
		GameCfg.GameType = pb.GameType.QiHuo;
		GameCfg.ziChan = 100000;
		let data = {
			ktype: null,
			kstyle: pb.KStyle.Random,
			code: null,
			from: null,
			total: parseInt(GameData.qhSet.KLine) + 100,
			to: 0,
			reserve: 100,
		};

		let jys, lxpz, hy, rom, rom1, rom2;

		if (GameData.qhSet.JYS == '随机') {
			rom = parseInt(Math.random() * 4 + '');
			if (rom == 0) {
				jys = '大连商品';
			} else if (rom == 1) {
				jys = '上海商品';
			} else if (rom == 2) {
				jys = '郑州商品';
			} else if (rom == 3) {
				jys = '中金所';
			}
		}
		else {
			jys = GameData.qhSet.JYS;
			if (jys == '大连商品') {
				rom = 0;
			} else if (jys == '上海商品') {
				rom = 1;
			} else if (jys == '郑州商品') {
				rom = 2;
			} else if (jys == '中金所') {
				rom = 3;
			}
		}

		if (GameData.qhSet.LXPZ == '随机') {
			if (rom == 0) {
				rom1 = parseInt(Math.random() * this.DCArr.type.length + '');
				lxpz = this.DCArr.type[rom1];
			} else if (rom == 1) {
				rom1 = parseInt(Math.random() * this.SCArr.type.length + '');
				lxpz = this.SCArr.type[rom1];
			} else if (rom == 2) {
				rom1 = parseInt(Math.random() * this.ZCArr.type.length + '');
				lxpz = this.ZCArr.type[rom1];
			} else if (rom == 3) {
				rom1 = parseInt(Math.random() * this.XJArr.type.length + '');
				lxpz = this.XJArr.type[rom1];
			}
		} else {
			lxpz = GameData.qhSet.LXPZ;
			if (jys == '大连商品') {
				rom1 = this.DCArr.type.indexOf(lxpz);
			} else if (jys == '上海商品') {
				rom1 = this.SCArr.type.indexOf(lxpz);
			} else if (jys == '郑州商品') {
				rom1 = this.ZCArr.type.indexOf(lxpz);
			} else if (jys == '中金所') {
				rom1 = this.XJArr.type.indexOf(lxpz);
			}
		}

		if (GameData.qhSet.HY == '随机') {
			rom2 = parseInt(Math.random() * 2 + '');
			if (rom == 0) {

				if (rom2 == 0) {
					hy = this.DCArr.main[rom1];
				} else {
					hy = this.DCArr.index[rom1];
				}

			} else if (rom == 1) {

				if (rom2 == 0) {
					hy = this.SCArr.main[rom1];
				} else {
					hy = this.SCArr.index[rom1];
				}
			} else if (rom == 3) {

				hy = this.XJArr.main[rom1];

			} else if (rom == 2) {
				if (rom2 == 0) {
					hy = this.ZCArr.main[rom1];
				} else {
					hy = this.ZCArr.index[rom1];
				}
			}

		} else {
			hy = GameData.qhSet.HY;
		}


		let items, index;


		items = ConfUtils.getQHItemInfo(hy);
		if (!items || items[7] == 0) {
			this.QHStartGameSet();
			return;
		}

		data.code = items[0];

		data.code = data.code + '';

		if (data.code.length >= 7) {
			data.code = data.code.slice(1, 7);
		}

		// 合约代码|合约中文名称|合约英文名称|合约种类|所在交易所|第一个日K日期（YYYYMMDD）|最后一个日K//日期（YYYYMMDD）|第一个分时时间戳（精确到秒）|最后一个分时时间戳（精确到秒）

		let tim = ConfUtils.QHGetTimeByCodeName(data.code)

		if (GameData.qhSet.year == '随机') {

			if (GameData.qhSet.ZLine == '日线') {

				let start = tim.start, end = tim.end, sc;

				if (end == 0) {
					sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000;
				} else {
					let year = end.slice(0, 4);
					let month = end.slice(4, 6);
					let day = end.slice(6);

					let d = new Date(year + '-' + month + '-' + day);
					sc = d.getTime() - data.total * 24 * 60 * 60 * 1000;
				}
				let f;
				if (start == 0) {
					f = new Date(sc);
				} else {
					let year = start.slice(0, 4);
					let month = start.slice(4, 6);
					let day = start.slice(6);

					let d = new Date(year + '-' + month + '-' + day);

					let t = d.getTime() + 100 * 24 * 60 * 60 * 1000;

					let s = Math.random() * (sc - t) + t;

					f = new Date(s);
				}
				{
					let ye = f.getFullYear();
					let mon = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);

					let da = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();

					data.from = ye + '' + mon + '' + da;
				}

			} else {

				let start = parseInt(TimeUtils.getTimestamp(tim.start)), end = parseInt(TimeUtils.getTimestamp(tim.end)), sc;

				let tt;
				if (GameData.qhSet.ZLine == '60分钟K') {
					tt = 60;
				} else if (GameData.qhSet.ZLine == '30分钟K') {
					tt = 30;
				} else if (GameData.qhSet.ZLine == '15分钟K') {
					tt = 15;
				} else if (GameData.qhSet.ZLine == '5分钟K') {
					tt = 5;
				}

				if (end == 0) {
					sc = new Date().getTime() / 1000 - data.total * tt * 60;
				} else {
					sc = end - data.total * tt * 60;
				}

				start = start + 100 * tt * 60;

				let f = parseInt(Math.random() * (sc - start) + start + '');

				{
					data.from = f;
				}

			}
		} else {
			//	if (GameData.QHSet.ZLine == '日线') {
			let start = items[5], end = items[6], sc;

			start = tim.start;

			end = tim.end;

			let year, month, day;

			year = GameData.qhSet.year;

			if (GameData.qhSet.month == '随机') {
				month = '01';
			} else {
				if (GameData.qhSet.month.length <= 1) {
					month = '0' + GameData.qhSet.month;
				} else {
					month = GameData.qhSet.month;
				}
			}

			if (GameData.qhSet.day == '随机') {
				day = '01';
			} else {
				if (GameData.qhSet.day.length <= 1) {
					day = '0' + GameData.qhSet.day;
				} else {
					day = GameData.qhSet.day;
				}
			}

			if (parseInt(start) > parseInt(year + month + day)) {
				if (GameData.qhSet.HY == '随机') {
					this.QHStartGameSet();

				} else {
					GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '时间不能早与期货创建时间');
					GlobalEvent.emit(EventCfg.HIDELOADING);
				}
				return;
			} else if (parseInt(end) < parseInt(year + month + day)) {
				if (GameData.qhSet.HY == '随机') {
					this.QHStartGameSet();

				}
				else {
					GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '时间不能大与期货结束时间');
					GlobalEvent.emit(EventCfg.HIDELOADING);
				}
				return;
			}

			if (GameData.qhSet.ZLine == '日线') {
				data.from = year + month + day;
			} else {
				data.from = new Date(year + '-' + month + '-' + day).getTime() / 1000;
			}
		}

		if (GameData.qhSet.ZLine == '日线') {
			data.ktype = pb.KType.Day;
		}
		else {
			data.ktype = pb.KType.Min5;
			if (GameData.qhSet.ZLine == '60分钟K') {
				data.ktype = pb.KType.Min60;
			} else if (GameData.qhSet.ZLine == '30分钟K') {
				data.ktype = pb.KType.Min30;
			} else if (GameData.qhSet.ZLine == '15分钟K') {
				data.ktype = pb.KType.Min15;
			}
		}

		GameCfg.data[0].code = items[0];
		GameCfg.data[0].data = [];
		GameCfg.data[0].name = items[1] + '  ' + items[2] + items[3];
		console.log(JSON.stringify(data));
		GameCfg.enterGameConf = data;

		//游戏开始
		GlobalHandle.onCmdGameStartReq(() => {
			//游戏行情获取
			GlobalHandle.getStockQuotesQH(data, this.onEnterGame.bind(this));
		})
	}

	onEnterGame() {
		GameData.huizhidatas = 0;
		GameCfg.huizhidatas = 0;
		let fm = GameCfg.enterGameConf.from;
		while (!GameData.huizhidatas) {

			if (GameData.qhSet.year == '随机') {
				if (GameCfg.data[0].data.length > 100) {
					GameData.huizhidatas = GameCfg.data[0].data.length - (GameCfg.data[0].data.length - 100);
					GameCfg.huizhidatas = GameCfg.data[0].data.length - (GameCfg.data[0].data.length - 100);
				}
				else {
					GameData.huizhidatas = parseInt(GameCfg.data[0].data.length / 2 + '');
					GameCfg.huizhidatas = parseInt(GameCfg.data[0].data.length / 2 + '');
				}
			}
			else {
				GameCfg.data[0].data.forEach((el, index) => {
					if ((el.day).replace(/-/g, '') == fm) {
						GameData.huizhidatas = index + 1;
						GameCfg.huizhidatas = index + 1;
					}
				})

				if (!GameData.huizhidatas) {
					fm = (parseInt(fm) - 1) + '';
				}
			}
		}

		GlobalEvent.emit('LOADGAME');
	}


}
