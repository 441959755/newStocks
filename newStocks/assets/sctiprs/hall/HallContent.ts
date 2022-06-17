import GlobalEvent from '../utils/GlobalEvent';
import EventCfg from '../utils/EventCfg';
import GameData from '../GameData';
import PopupManager from '../utils/PopupManager';
import ComUtils from '../utils/ComUtils';
import ActionUtils from '../utils/ActionUtils';
import SchoolBundle from './SchoolBundle';
import GameCfg from '../GameCfg';
import WealBundle from './WealBundle';
import ConfUtils from '../utils/ConfUtils';
import ShiPanBundle from './ShiPanBundle';
import { pb } from '../../proto/proto';
import GameBundle from './GameBundle';


const { ccclass, property } = cc._decorator;

@ccclass
export default class HallContent extends cc.Component {

	@property([cc.Toggle])
	toggles: cc.Toggle[] = [];

	@property([cc.Node])
	Layers: cc.Node[] = [];

	//提示
	@property(cc.Label)
	pkLabel: cc.Label = null;

	//提示
	@property(cc.Label)
	dkLabel: cc.Label = null;

	@property(cc.Node)
	userInfo: cc.Node = null;

	onLoad() {

		//发放奖励动画
		GlobalEvent.on('CmdGoldAwardPrompt', this.CmdGoldAwardPrompt.bind(this), this);
	}


	start() {

		this.initToggle();

		//首次上传用户信息
		this.upLoadUserInfo();

		//
		if (GameCfg.GameType == 'STUDY') {
			this.changeToggle(3);
		}

		//是否首次登入
		if (GameData.firstGame) {
			GameData.firstGame = false;
			setTimeout(() => {
				this.showFirstBox();
			}, 200);
		}

		//奖励弹窗
		// if (GameData.goldAwardPrompt) {
		// 	setTimeout(() => {
		// 		this.CmdGoldAwardPrompt();
		// 	}, 500)
		// }

		let userInfoHandle = this.userInfo.getComponent('UserInfo');
		userInfoHandle.userInfo = {
			userID: GameData.userID,
		}
	}

	CmdGoldAwardPrompt() {
		PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/fl/leadgoldAn', 100, null);
	}

	//首次登入弹框
	showFirstBox() {
		this.changeToggle(4);
		PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/fl/dailyWelfare', 10, (node) => {
			let handle = node.getComponent('DailyWelfare');
			handle && (handle.onShow());
		});
	}

	//首次上传用户信息
	upLoadUserInfo() {

		if (GameData.gameData.is_edited_nick) {
			{
				let data = {
					uid: GameData.userID,
					nick: GameData.userName,
				};

				let message = pb.PlayerInfo.create(data);
				let buff = pb.PlayerInfo.encode(message).finish();
				(<any>window).socket.send(pb.MessageId.Req_Hall_EditNick, buff, (info) => {
					console.log('GameData.userName:' + JSON.stringify(info));
				})
			}

			{
				let data = {
					uid: GameData.userID,
					gender: GameData.gender + '',
				};
				let message = pb.PlayerInfo.create(data);
				let buff = pb.PlayerInfo.encode(message).finish();
				(<any>window).socket.send(pb.MessageId.Req_Hall_EditGender, buff, (info) => {
					console.log('GameData.gender:' + JSON.stringify(info));
				})
			}
		}

		// {
		// 	let data = {
		// 		uid: GameData.userID,
		// 		//icon: new Uint8Array(GameData.headimgurl),
		// 		icon: GameData.headimgurl,
		// 	}
		// 	let CmdUploadIcon = pb.CmdUploadIcon;
		// 	let message = CmdUploadIcon.create(data);
		// 	let buff = CmdUploadIcon.encode(message).finish();

		// 	socket.send(pb.MessageId.Req_Hall_UploadIcon, buff, (info) => {
		// 		console.log('GameData.headImg:' + JSON.stringify(info));
		// 	})
		// }
	}



	initToggle() {
		this.toggles.forEach((el, index) => {
			this.Layers[index].active = el.isChecked;
		});
	}

	changeToggle(index) {
		this.toggles.forEach((el, i) => {
			el.isChecked = false;
			if (index == i) {
				el.isChecked = true;
			}
		})
		this.initToggle();
	}

	onToggleClick(event, data) {
		this.initToggle();
	}

	onBtnClick(event, data) {
		let name = event.target.name;
		//双盲
		if (name == 'main_xl_smxl') {
			//开关
			ConfUtils.getSwitchConf(1, () => {
				GameCfg.GameType = pb.GameType.ShuangMang;
				GameBundle.loadPre('xl/shuangmangLayer', (node) => {
					ActionUtils.openNode(node);
				});
			})
		}

		//指标
		else if (name == 'main_xl_zbxl') {

			ConfUtils.getSwitchConf(4, () => {
				GameCfg.GameType = pb.GameType.ZhiBiao;
				GameBundle.loadPre('xl/shuangmangLayer', (node) => {
					ActionUtils.openNode(node);
				});
			})
		}

		//定向
		else if (name == 'main_xl_dxxl') {

			ConfUtils.getSwitchConf(2, () => {
				GameCfg.GameType = pb.GameType.DingXiang;
				GlobalEvent.emit(EventCfg.OPENDXLAYER);

			})
		}

		//期货
		else if (name == 'main_xl_qhxl') {

			ConfUtils.getSwitchConf(3, () => {
				GameCfg.GameType = pb.GameType.QiHuo;
				GlobalEvent.emit(EventCfg.OPENQHLAYER);
			})

		}

		//分时
		else if (name == 'main_xl_fsxl') {

			ConfUtils.getSwitchConf(6, () => {
				GameCfg.GameType = pb.GameType.FenShi;
				GameBundle.loadPre('fsxl/fenshi', (node) => {
					ActionUtils.openNode(node);
				});
			})
		}

		//条件
		else if (name == 'main_xl_tjdxl') {

			ConfUtils.getSwitchConf(5, () => {
				GameCfg.GameType = pb.GameType.TiaoJianDan;
				GlobalEvent.emit(EventCfg.OPENTIAOJIANDAN);
			})
		}



		//pk
		else if (name == 'main_jj_pkdz') {

			ConfUtils.getSwitchConf(7, () => {
				if (GameData.properties[pb.GamePropertyId.Gold] < 500) {
					GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '金币不足');
					GlobalEvent.emit('onShowGobroke');
					return;
				}

				GameCfg.GameType = pb.GameType.JJ_PK;
				// let gameStatus = ComUtils.onCurWXIsEnterGame();
				// if (gameStatus.status == 3) {
				// 	GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '今日次数已用完,请点击在线客服,体验完整版APP');
				// 	return;
				// }
				// else {
				// 	let cb = () => {
				GlobalEvent.emit(EventCfg.LOADINGSHOW);
				GameCfg.GameSet = GameData.JJPKSet;
				GlobalEvent.emit(EventCfg.OPENMATCHPK);
				// }
				// 		if (GameData.adSucceed) {
				// 	cb && cb();
				// }
				// else {
				// 	PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/unlockBox', 22, (node) => {
				// 		node.getComponent('UnlockBox').callback = cb;
				// 	});
				// }
				//}
			})
		}

		else if (name == 'main_jj_dkdz') {
			ConfUtils.getSwitchConf(8, () => {
				//s	if (EnterGameControl.onCurPKEnterGame()) {
				// LLWSDK.getSDK().showVideoAd((flag) => {
				// 	if (flag) {
				if (GameData.properties[pb.GamePropertyId.Gold] < 500) {
					GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '金币不足');
					GlobalEvent.emit('onShowGobroke');
					return;
				}

				GameCfg.GameType = pb.GameType.JJ_DuoKong;
				// let gameStatus = ComUtils.onCurWXIsEnterGame();
				// if (gameStatus.status == 3) {
				// 	GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '今日次数已用完,请点击在线客服,体验完整版APP');
				// 	return;
				// }
				// else {
				// 	let cb = () => {
				GlobalEvent.emit(EventCfg.LOADINGSHOW);
				GameCfg.GameSet = GameData.JJPKSet;
				GlobalEvent.emit(EventCfg.OPENMATCHPK);
				// 	}
				// 	if (GameData.adSucceed) {
				// 		cb && cb();
				// 	}
				// 	else {
				// 		PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/unlockBox', 22, (node) => {
				// 			node.getComponent('UnlockBox').callback = cb;
				// 		});
				// 	}
				// }
			})
		}

		//打开闯关赛
		else if (name == 'main_jj_cgs') {
			ConfUtils.getSwitchConf(9, () => {
				GameCfg.GameType = pb.GameType.JJ_ChuangGuan;
				GameCfg.GameSet = GameData.JJPKSet;
				GlobalEvent.emit(EventCfg.OPENCHUANGUAN);
			})
		}

		// //点击竞技
		// else if (name == 'toggle1' || name == 'toggle2' || name == 'toggle3') {
		// 	let index = parseInt(name.slice(-1));
		// 	this.changeToggle(index);
		// }

		//点击创建对战
		else if (name == 'main_jj_cjdz') {
			// GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '暂不开放，敬请期待！');
			// return;
			ConfUtils.getSwitchConf(10, () => {
				//	if (LLWConfig.PLATTYPE == PlatDefine.PLAT_WECHAT) {
				GameData.players = [];

				let info = {
					game: pb.GameType.JJ_PK,
					uid: GameData.userID,
					capital: 0,
					junXian: ComUtils.getJJXunXian(),
				}
				let CmdRoomCreate = pb.CmdRoomCreate;
				let message = CmdRoomCreate.create(info);
				let buff = CmdRoomCreate.encode(message).finish();

				(<any>window).socket.send(pb.MessageId.Req_Room_Create, buff, (res) => {
					console.log('创建房间应答' + JSON.stringify(res));
					GlobalEvent.emit(EventCfg.LOADINGHIDE);
					if (res && res.err) {
						let err = GlobalHandle.getErrorCodeByCode(res.err.code);
						GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, err);
						return;
					}
					GameData.RoomType = 1;
					GameData.roomId = res.id;
					GlobalEvent.emit(EventCfg.OPENROOM);
				})
			})
		}

		//加入对战
		else if (name == 'main_jj_jrdz') {
			// GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '暂不开放，敬请期待！');
			// return;
			ConfUtils.getSwitchConf(11, () => {
				GlobalEvent.emit(EventCfg.OPENJRDZ);
			})
		}

		//智能选股
		else if (name == 'main_sp_znxg') {
			ConfUtils.getSwitchConf(13, () => {
				ShiPanBundle.loadPre('znxgLayer');
			})
		}

		else if (name == 'main_sp_znzg') {
			GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.dxSet));
			ShiPanBundle.loadPre('znzgLayer');
		}

		//模拟炒股
		else if (name == 'main_sp_mncg') {
			ConfUtils.getSwitchConf(14, () => {
				ShiPanBundle.loadPre('mnxgLayer', (node) => {
					node.getComponent('MnxgHandle').onShow();
				});
			})
		}

		else if (name == 'main_sp_cgds') {
			ConfUtils.getSwitchConf(15, () => {
				ShiPanBundle.loadPre('cgdsLayer');
			})
		}

		//大盘竞猜
		else if (name == 'main_sp_dpjc') {
			ConfUtils.getSwitchConf(16, () => {
				GameCfg.GameType = pb.GameType.DaPanJingChai;
				GlobalEvent.emit(EventCfg.SHOWLOADING);
				cc.director.loadScene('guess');
			})
		}

		//个股竞猜
		else if (name == 'main_sp_ggjc') {
			ConfUtils.getSwitchConf(16, () => {
				GameCfg.GameType == pb.GameType.GeGuJingChai;
				GlobalEvent.emit(EventCfg.SHOWLOADING);
				cc.director.loadScene('guess');
			})
		}

		//学习
		else if (name == 'main_study_kxrm' || name == 'main_study_jx' ||
			name == 'main_study_cjl' || name == 'main_study_macd' ||
			name == 'main_study_kdj' || name == 'main_study_boll' ||
			name == 'main_study_rsi' || name == 'main_study_expma') {

			GlobalEvent.emit(EventCfg.SHOWLOADING);
			GameCfg.GameType = 'STUDY';
			SchoolBundle.schoolProgress = data;
			SchoolBundle.bundleSchool('school');
		}

		//免费砖石
		else if (name == 'main_fl_mfzs') {
			WealBundle.loadPre('dailyWelfare', (node) => {
				let handle = node.getComponent('DailyWelfare');
				handle && (handle.onShow());
				ActionUtils.openNode(node);
			});
		}

		//每周豪礼
		else if (name == 'main_fl_mzhl') {

			WealBundle.loadPre('weeklyHaoLI', (node) => {
				ActionUtils.openNode(node);
			});
		}

		//7日奖励
		else if (name == 'main_fl_7day') {

			WealBundle.loadPre('signIn', (node) => {
				ActionUtils.openNode(node);
			});
		}

		//邀请奖励
		else if (name == 'main_fl_yqjl') {
			WealBundle.loadPre('inviteLayer', (node) => {
				ActionUtils.openNode(node);
			})
		}
	}

	onDestroy() {
		GlobalEvent.off('CmdGoldAwardPrompt');
	}
}
