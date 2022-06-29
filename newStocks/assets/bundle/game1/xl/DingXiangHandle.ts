

import { pb } from "../../../protos/proto";
import GameCfg from "../../../sctiprs/GameCfg";
import GameData from "../../../sctiprs/GameData";
import GlobalHandle from "../../../sctiprs/GlobalHandle";
import GameBundle from "../../../sctiprs/hall/GameBundle";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import PopupManager from "../../../sctiprs/utils/PopupManager";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DingXiangHandle extends cc.Component {

	@property([cc.Node])
	boxs: cc.Node[] = [];

	@property([cc.Node])
	downBoxs: cc.Node[] = [];

	@property(cc.Toggle)
	toggle: cc.Toggle = null;

	@property(cc.EditBox)
	edit: cc.EditBox = null;

	@property([cc.Toggle])
	hangqingToggle: cc.Toggle[] = [];

	//_tipsLa = null;

	setProId = 0;

	@property(cc.Node)
	item: cc.Node = null;

	@property(cc.Node)
	content: cc.Node = null;

	@property(cc.Label)
	tipsLabel1: cc.Label = null;

	@property(cc.Label)
	tipsLabel2: cc.Label = null;

	curState = 0;

	adSucceed = 0;

	@property(cc.Node)
	mfxlBtn: cc.Node = null;

	onLoad() {

		//this._tipsLa = this.edit.node.getChildByName('tipslabel');

		this.edit.node.on(
			'editing-did-ended',
			edit => {
				if (!this.onTipsInfo()) {
					edit.string = '';
					GameData.dxSet.search = '随机选股';

					GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, GameData.dxSet.market + '不支持自定义当前选项');
					return;
				}
				let str = edit.string;
				if (str == '') {
					return;
				} else {
					let datas = GameData.stockList;
					let flag = false,
						tt = [];
					for (let i = 0; i < datas.length; i++) {
						let arr1 = datas[i].split('|');
						let str1 = arr1[0];
						if (arr1[0].length >= 7) {
							str1 = arr1[0].slice(1);
						}
						if (tt.length >= 100) {
							break;
						}
						if (str1.indexOf(str) != -1) {
							tt.push(datas[i]);
							flag = true;

						} else if (arr1[1].indexOf(str) != -1) {
							tt.push(datas[i]);
							flag = true;

						}
					}
					if (!flag) {
						//	this._tipsLa.color = new cc.Color().fromHEX('#e94343');
						GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '没有找查到您要的股票.');
						edit.string = '';
					} else {
						this.content.removeAllChildren();
						this.downBoxs[8].active = true;
						this.setProId = 1;
						// this._tipsLa.color = new cc.Color().fromHEX('#BBBBBB');
						// this._tipsLa.active = false;

						for (let i = 0; i < tt.length; i++) {
							let arr = tt[i].split('|');
							let str = arr[0];
							if (arr[0].length >= 7) {
								str = arr[0].slice(1);
							}
							if (i == 0) {
								this.boxs[1].getChildByName('label').getComponent(cc.Label).string = str + '  ' + arr[1];
								GameData.dxSet.search = arr[0];
							}
							let node = cc.instantiate(this.item);
							this.content.addChild(node);
							node.setPosition(0, 0);
							node.getComponent(cc.Label).string = str + '  ' + arr[1];
						}

						edit.string = '';
					}
				}
			},
			this
		);

		if (GameData.DXHistoryInfo.length > 0) {

			let content = cc.find('New ScrollView/view/content', this.downBoxs[1]);

			let item = content.children[0];

			GameData.DXHistoryInfo.forEach(el => {
				let node = cc.instantiate(item);
				content.addChild(node);

				node.getComponent(cc.Label).string = el;
			})
		}

		//跟新游戏次数
		GlobalEvent.on(EventCfg.GMAECOUNTERSCHANGE, this.onGameCountShow.bind(this), this);

	}



	onGameCountShow() {

		if (GameData.vipStatus) {
			this.tipsLabel1.node.active = false;
			this.tipsLabel2.node.active = false;
			return;

		}

		let gameCount = ComUtils.onCurWXIsEnterGame();

		this.tipsLabel1.node.active = true;
		this.tipsLabel2.node.active = true;

		this.curState = gameCount.status;
		if (gameCount.status == 1) {
			this.tipsLabel1.string = '今日剩余次数：' + gameCount.count + '次';
		}

		else if (gameCount.status == 2) {
			this.tipsLabel1.string = '今日剩余次数：' + GameData.adSucceed + '次';
		}

		else if (gameCount.status == 3) {
			this.tipsLabel1.string = '今日次数已用完,请明天在来吧!';
			this.tipsLabel2.node.active = false;
		}
	}

	onEnable() {

		this.tipsLabel1.node.active = false;
		this.tipsLabel2.node.active = false;

		this.onGameCountShow();

		this.onShow();
	}

	onShow() {

		if (!GameData.dxSet) {
			return;
		}

		this.boxs.forEach((el, index) => {
			let la;
			if (index != 0) {
				la = el.getChildByName('label').getComponent(cc.Label);
			}

			if (index == 0) {
				// la.string = GameData.dxSet.market;
				if (GameData.dxSet.market == '随机行情') {
					this.hangqingToggle[0].isChecked = true;
				} else if (GameData.dxSet.market == '单边上涨') {
					this.hangqingToggle[1].isChecked = true;
				} else if (GameData.dxSet.market == '单边下跌') {
					this.hangqingToggle[2].isChecked = true;
				} else if (GameData.dxSet.market == '震荡行情') {
					this.hangqingToggle[3].isChecked = true;
				}
			} else if (index == 1) {
				la.string = GameData.dxSet.search;
				//	la.string = '随机选股';
			} else if (index == 2) {
				la.string = GameData.dxSet.year;
			} else if (index == 3) {
				la.string = GameData.dxSet.month;
				if (GameData.dxSet.year == '随机') {
					la.string = '随机';
				}

			} else if (index == 4) {
				la.string = GameData.dxSet.day;
				if (GameData.dxSet.year == '随机') {
					la.string = '随机';
				}

			} else if (index == 5) {
				la.string = GameData.dxSet.line;
			} else if (index == 6) {
				la.string = GameData.dxSet.KLine;
			} else if (index == 7) {
				la.string = GameData.dxSet.ZLine;
			}
		});

		this.toggle.isChecked = GameData.dxSet.isFC;
	}

	onTipsInfo() {
		if (GameData.dxSet.market != '随机行情') {
			return false;
		}
		return true;
	}

	/**
	 * 根据股票的名字获取股票的范围
	 */
	getTimeByCodeName(index) {

		let year = this.boxs[2].getChildByName('label').getComponent(cc.Label).string;
		let month = this.boxs[3].getChildByName('label').getComponent(cc.Label).string;
		let day = this.boxs[4].getChildByName('label').getComponent(cc.Label).string;
		let downBox = this.downBoxs[index];
		let content = cc.find('New ScrollView/view/content', downBox);

		if (GameData.dxSet.search == '随机选股') {

			//	let sc = new Date().getTime();
			let f = new Date();
			let y = f.getFullYear() + '';
			let m = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
			let d = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();
			let sc = TimeUtils.GetPreMonthDay(y + '-' + m + '-' + d, 2);
			y = sc.y;
			m = sc.m;
			d = sc.d;
			let t;
			if (index == 2) {
				t = y;
			} else if (index == 3) {
				if (year != '随机' && year == y) {
					t = m;
				} else {
					t = 12;
				}
			} else if (index == 4) {
				if (year == y && parseInt(month) == m) {
					t = d;
				} else {
					var temp = new Date(parseInt(year), parseInt(month + ''), 0);
					let day = temp.getDate();
					t = day;
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
		} else {
			let date = ConfUtils.getTimeByCodeName1(GameData.dxSet.search);
			if (parseInt(date.start) < 20100101) {
				date.start = '20100101';
			}
			let ly = date.start.slice(0, 4);
			let lm = date.start.slice(4, 6);
			let ld = date.start.slice(6);
			let dd = TimeUtils.GetAddDay(ly + '-' + lm + ' - ' + ld, 200);
			console.log(JSON.stringify(dd));
			ly = dd.y + '';
			lm = dd.m + '';
			ld = dd.d + '';

			let cy = date.end.slice(0, 4);
			let cm = date.end.slice(4, 6);
			let cd = date.end.slice(6);
			let min, max;
			if (index == 2) {
				min = ly;
				max = cy;
			} else if (index == 3) {
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

			} else if (index == 4) {
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
					let day = temp.getDate();
					min = 1;
					max = day;
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

	onBoxSelectClick(event, data) {
		let name = event.target.name;
		let index = parseInt(data);
		if (data == 1 || data == 2 || data == 3 || data == 4 || data == 6 || data == 7 || name == 'mask') {
			if (!this.onTipsInfo()) {
				GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, GameData.dxSet.market + '不支持自定义当前选项');
				return;
			}
		}
		let downBox = this.downBoxs[index];
		downBox.active = true;
		this.setProId = data;

		//当前年月的天数
		if (index == 2 || index == 3 || index == 4) {
			let year = this.boxs[2].getChildByName('label').getComponent(cc.Label).string;
			let month = this.boxs[3].getChildByName('label').getComponent(cc.Label).string;
			if (index == 3 || index == 4) {
				if (year == '随机') {
					let content = cc.find('New ScrollView/view/content', downBox);
					content.children.forEach(el => {

						el.color = new cc.Color().fromHEX('#a0a0a0');
						el.getComponent(cc.Button).interactable = false;
						el.getComponent(cc.Button).enableAutoGrayEffect = true;
					})
					return;
				}
			}
			this.getTimeByCodeName(index);
		}
	}

	onBtnClick(event, data) {
		let name = event.target.name;
		if (name == 'DCnode') {
			event.target.parent.active = false;

		} else if (name == 'item') {
			let str = event.target.getComponent(cc.Label).string;
			this.boxs[this.setProId].getChildByName('label').getComponent(cc.Label).string = str;
			//  this.downBoxs[this.setProId].active = false;
			this.downBoxs.forEach(el => {
				el.active = false;
			});
			if (this.setProId == 2 || this.setProId == 3 || this.setProId == 4) {
				let downBox = this.downBoxs[4];
				let year = this.boxs[2].getChildByName('label').getComponent(cc.Label).string;
				let month = this.boxs[3].getChildByName('label').getComponent(cc.Label).string;
				// if (year == '随机' || month == '--') {
				// 	return;
				// }

				var temp = new Date(parseInt(year), parseInt(month), 0);
				let day = temp.getDate();
				let content = cc.find('New ScrollView/view/content', downBox);
				let str = this.boxs[4].getChildByName('label').getComponent(cc.Label).string
				content.children.forEach(el => {
					if (parseInt(str) > day) {
						this.boxs[4].getChildByName('label').getComponent(cc.Label).string = day + '';
					} else {
						//this.boxs[4].getChildByName('label').getComponent(cc.Label).string = day + '';
					}
				});
			} else if (this.setProId == 1) {
				// if (str == '随机选股') {
				// 	this._tipsLa.active = true;
				// } else {
				// 	this._tipsLa.active = false;
				// }
			}

			if (this.setProId == 0) {
				GameData.dxSet.market = str;
			} else if (this.setProId == 1) {
				GameData.dxSet.search = str;
				if (GameData.dxSet.year != '随机') {
					if (GameData.dxSet.search != '随机选股') {
						let date = ConfUtils.getTimeByCodeName1(GameData.dxSet.search);
						let ly = date.start.slice(0, 4);
						let lm = date.start.slice(4, 6);
						let ld = date.start.slice(6);
						let dd = TimeUtils.GetAddDay(ly + '-' + lm + '-' + ld, 200);
						console.log(JSON.stringify(dd));
						ly = dd.y + '';
						lm = dd.m + '';
						ld = dd.d + '';
						let st;
						st = GameData.dxSet.year;
						if (GameData.dxSet.month.length == 1) {
							st += ('0' + GameData.dxSet.month);
						} else {
							st += (GameData.dxSet.month);
						}

						if (GameData.dxSet.day.length == 1) {
							st += ('0' + GameData.dxSet.day)
						} else {
							st += GameData.dxSet.day;
						}

						if (parseInt(st) < parseInt(date.start) || parseInt(st) > parseInt(date.end)) {
							GameData.dxSet.year = ly;
							GameData.dxSet.month = lm;
							GameData.dxSet.day = ld;
							this.boxs[2].getChildByName('label').getComponent(cc.Label).string = ly;
							this.boxs[3].getChildByName('label').getComponent(cc.Label).string = lm;
							this.boxs[4].getChildByName('label').getComponent(cc.Label).string = ld;
						}
					}

				}

			} else if (this.setProId == 2) {
				GameData.dxSet.year = str;
				if (GameData.dxSet.year == '随机') {
					this.boxs[3].getChildByName('label').getComponent(cc.Label).string = '随机';
					this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '随机';
					GameData.dxSet.month = '随机';
					GameData.dxSet.day = '随机';
				} else {
					if (GameData.dxSet.search != '随机选股') {
						let date = ConfUtils.getTimeByCodeName1(GameData.dxSet.search);
						let ly = date.start.slice(0, 4);
						let lm = date.start.slice(4, 6);
						let ld = date.start.slice(6);

						let cy = date.end.slice(0, 4);
						let cm = date.end.slice(4, 6);
						let cd = date.end.slice(6);
						if (GameData.dxSet.year == ly) {
							if (parseInt(lm) > parseInt(GameData.dxSet.month)) {
								GameData.dxSet.month = lm;
								GameData.dxSet.day = ld;
								this.boxs[3].getChildByName('label').getComponent(cc.Label).string = lm;
								this.boxs[4].getChildByName('label').getComponent(cc.Label).string = ld;
							}
						} else if (GameData.dxSet.year == cy) {
							GameData.dxSet.month = '1';
							GameData.dxSet.day = '1';
							this.boxs[3].getChildByName('label').getComponent(cc.Label).string = '1';
							this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '1';
						} else {
							GameData.dxSet.month = '9';
							GameData.dxSet.day = '10';
							this.boxs[3].getChildByName('label').getComponent(cc.Label).string = '9';
							this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '10';
						}

					} else {
						GameData.dxSet.month = '1';
						GameData.dxSet.day = '1';
						this.boxs[3].getChildByName('label').getComponent(cc.Label).string = '1';
						this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '1';
					}

				}
			} else if (this.setProId == 3) {
				GameData.dxSet.month = str;
			} else if (this.setProId == 4) {
				GameData.dxSet.day = str;
			} else if (this.setProId == 5) {
				GameData.dxSet.line = str;
			} else if (this.setProId == 6) {
				GameData.dxSet.KLine = str;
			} else if (this.setProId == 7) {
				GameData.dxSet.ZLine = str;

				//   if(GameData.dxSet.ZLine!='')
			}
		}

		else if (name == 'setDXBtnDX') {
			GameBundle.openSetLayer();
		}

		else if (name == 'historyDXBtn') {
			GameBundle.openHisLayer();
		}

		else if (name == 'startDXBtn') {

			if (GameData.properties[pb.GamePropertyId.Gold] < Math.abs(GameData.gameConf.dxxl.cost[0].v) && !GameData.vipStatus) {
				GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '金币不足');
				GlobalEvent.emit('onShowGobroke');
				return;
			}

			if (this.curState == 2 && !GameData.adSucceed) {
				let self = this;

				PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/unlockBox', 22, (node) => {
					node.getComponent('UnlockBox').callback = () => {
						GlobalEvent.emit(EventCfg.SHOWLOADING);
						self.onGameCountShow();
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

				GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.dxSet));

				GameCfg.ziChan = 100000;

				this.DXStartGameSet();
				this.onGameCountShow();
			}

		} else if (name == 'blackbtn') {
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

	onToggleClick() {
		GameData.dxSet.isFC = this.toggle.isChecked;
	}

	onHangQingToggleClick(event, data) {

		if (data == 0) {
			GameData.dxSet.market = '随机行情';
		} else if (data == 1) {
			GameData.dxSet.market = '单边上涨';
		} else if (data == 2) {
			GameData.dxSet.market = '单边下跌';
		} else if (data == 3) {
			GameData.dxSet.market = '震荡行情';
		}

		if (data != 0) {
			GameData.dxSet.search = '随机选股';
			GameData.dxSet.year = '随机';
			GameData.dxSet.month = '随机';
			GameData.dxSet.day = '随机';
			GameData.dxSet.KLine = '100';
			GameData.dxSet.ZLine = '日线';

			this.boxs.forEach((el, index) => {
				if (index >= 1) {
					el.getChildByName('mask').active = true;
				}
			})
			this.onShow();
		}

		else {

			this.boxs.forEach((el, index) => {
				if (index >= 1) {
					el.getChildByName('mask').active = false;
				}
			})
		}
	}

	onDisable() {
		GameData.dxSet = GameData.dxSet;
	}

	DXStartGameSet() {

		GameCfg.GAMEFUPAN = false;

		GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.dxSet));

		GameCfg.ziChan = 100000;

		let data = {
			ktype: null,
			kstyle: null,
			code: null,
			from: null,
			total: parseInt(GameData.dxSet.KLine) + 100,
			to: 0,
			reserve: 100,
		};

		let items;

		if (GameData.dxSet.search == '随机选股' || GameData.dxSet.search == '') {

			if (GameData.dxSet.year == '随机') {

				let le = parseInt(Math.random() * GameData.stockList.length + '');

				items = GameData.stockList[le].split('|');

				data.code = items[0];
			}
			else {
				let m, d;
				if (GameData.dxSet.month.length < 2) {
					m = '0' + GameData.dxSet.month.length;
				} else {
					m = GameData.dxSet.month;
				}
				if (GameData.dxSet.day.length < 2) {
					d = '0' + GameData.dxSet.day;
				} else {
					d = GameData.dxSet.day;
				}

				let seletTime = GameData.dxSet.year + '' + m + '' + d;
				items = ConfUtils.getItemsByTime1();
				data.code = items[0];
			}

		} else {
			let dex = -1;
			let arrStr = (GameData.dxSet.search + '').split(' ');

			items = ConfUtils.getGPItemInfo(arrStr[0])
			data.code = items[0];

			let code = data.code + '';
			if (code.length >= 7) {
				code = code.slice(1, 7);
			}

			ComUtils.saveHistory(code + ' ' + items[1]);
		}

		if (GameData.dxSet.market == '随机行情') {
			data.kstyle = pb.KStyle.Random;
		} else if (GameData.dxSet.market == '震荡行情') {
			data.kstyle = pb.KStyle.Wave;
		} else if (GameData.dxSet.market == '单边上涨') {
			data.kstyle = pb.KStyle.Up;
		} else if (GameData.dxSet.market == '单边下跌') {
			data.kstyle = pb.KStyle.Down;
		}

		if (GameData.dxSet.year != '随机') {

			if (GameData.dxSet.month == '随机') {
				GameData.dxSet.month = '01';
			}
			if (GameData.dxSet.day == '随机') {
				GameData.dxSet.day = '01';
			}
			if (GameData.dxSet.month.length == 1) {
				GameData.dxSet.month = '0' + GameData.dxSet.month;
			}
			if (GameData.dxSet.day.length == 1) {
				GameData.dxSet.day = '0' + GameData.dxSet.day;
			}

			let seletTime = GameData.dxSet.year + '' + GameData.dxSet.month + '' + GameData.dxSet.day;

			if (parseInt(seletTime) < parseInt(items[2])) {
				if (GameData.dxSet.search == '随机选股') {
					this.DXStartGameSet();
					return;
				} else {
					GlobalEvent.emit(EventCfg.HIDELOADING);
					GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '时间不能早与股票创建时间');
				}
				console.log('时间不能早与股票创建时间');
				return;
			} else if (parseInt(seletTime) > parseInt(items[3])) {
				if (parseInt(items[3]) != 0) {
					if (GameData.dxSet.search == '随机选股') {
						this.DXStartGameSet();
						return;
					} else {
						GlobalEvent.emit(EventCfg.HIDELOADING);
						GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '时间不能大与股票结束时间');
					}
					console.log('时间不能大与股票结束时间');
					return;
				}
			}
			data.from = seletTime;
		} else {
			let start = items[2],
				end = items[3],
				sc;
			if (end == 0) {
				if (GameData.dxSet.ZLine == '周线') {
					sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000 * 7;
				} else {
					sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000;
				}
			} else {
				let year = end.slice(0, 4);
				let month = end.slice(4, 6);
				let day = end.slice(6);

				let d = new Date(year + '-' + month + '-' + day);

				if (GameData.dxSet.ZLine == '周线') {
					sc = d.getTime() - data.total * 24 * 60 * 60 * 1000 * 7;
				} else {
					sc = d.getTime() - data.total * 24 * 60 * 60 * 1000;
				}
			}

			if (parseInt(start) < 20100101) {
				start = '20100101';
			}

			let year = start.slice(0, 4);
			let month = start.slice(4, 6);
			let day = start.slice(6);

			let d = new Date(year + '-' + month + '-' + day);

			let t;
			if (GameData.dxSet.ZLine == '周线') {
				t = d.getTime() + 24 * 60 * 60 * 1000 * 100 * 7 * 2;
			} else {
				t = d.getTime() + 24 * 60 * 60 * 1000 * 100 * 2;
			}

			if (sc < t && GameData.dxSet.year == '随机' && GameData.dxSet.search == '随机选股') {
				this.DXStartGameSet();
				return;
			}

			let s = Math.random() * (sc - t) + t;

			let f = new Date(s);

			{
				let ye = f.getFullYear();
				let mon = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);

				let da = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();

				data.from = ye + '' + mon + '' + da;
			}
		}

		GameCfg.data[0].code = items[0];


		GameCfg.data[0].data = [];
		GameCfg.data[0].name = items[1];

		GameCfg.data[0].circulate = items[4];

		console.log('给的数据:' + JSON.stringify(data));

		if (GameData.dxSet.ZLine == '日线') {
			data.ktype = pb.KType.Day;
		} else if (GameData.dxSet.ZLine == '周线') {
			data.ktype = pb.KType.Day7;
		} else if (GameData.dxSet.ZLine == '30分钟K') {
			data.ktype = pb.KType.Min;
		} else if (GameData.dxSet.ZLine == '60分钟K') {
			data.ktype = pb.KType.Min;
		}

		GameCfg.enterGameConf = data;

		GlobalHandle.enterGameSetout(GameCfg.enterGameConf, () => {

			GameData.huizhidatas = 0;
			GameCfg.huizhidatas = 0;
			let fm = data.from;

			if (GameData.dxSet.market == '震荡行情' || GameData.dxSet.market == '单边上涨' || GameData.dxSet.market == '单边下跌') {
				GameData.huizhidatas = GameCfg.data[0].data.length - (100);
				GameCfg.huizhidatas = GameCfg.data[0].data.length - (100);
			}

			else if (GameData.dxSet.market == '随机行情' && GameData.dxSet.year != '随机') {
				while (!GameData.huizhidatas) {

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
			else {
				GameData.huizhidatas = 100;
				GameCfg.huizhidatas = 100;
			}
			if (GameData.huizhidatas >= GameCfg.data[0].data.length) {
				GameData.huizhidatas = parseInt(GameCfg.data[0].data.length / 2 + '');
				GameCfg.huizhidatas = parseInt(GameCfg.data[0].data.length / 2 + '');
			}
			GlobalEvent.emit('LOADGAME');
		});
	}

	onDestroy() {
		GlobalEvent.off(EventCfg.GMAECOUNTERSCHANGE);
	}
}
