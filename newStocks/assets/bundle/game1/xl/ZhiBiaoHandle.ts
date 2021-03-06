

import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import GameData from "../../../sctiprs/GameData";
import ComUtils from "../../../sctiprs/utils/ComUtils";
import PopupManager from "../../../sctiprs/utils/PopupManager";
import GameBundle from "../../../sctiprs/hall/GameBundle";
import ActionUtils from "../../../sctiprs/utils/ActionUtils";
import GameCfg from "../../../sctiprs/GameCfg";
import TimeUtils from "../../../sctiprs/utils/TimeUtils";
import ConfUtils from "../../../sctiprs/utils/ConfUtils";
import GlobalHandle from "../../../sctiprs/GlobalHandle";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ZhiBiaoHandle extends cc.Component {

    @property([cc.Node])
    boxs: cc.Node[] = [];

    @property([cc.Node])
    downBoxs: cc.Node[] = [];

    @property(cc.Toggle)
    toggle: cc.Toggle = null;

    setProId = 0;

    _tipsLa = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    item: cc.Node = null;

    @property(cc.Node)
    mfxlBtn: cc.Node = null;

    @property(cc.Label)
    tipsLabel: cc.Label = null;

    curState = 0;

    tips = [

        ['股价穿越均线', '均线交叉', '组合训练'],
        ['MACD金叉', '0轴穿越', '柱最大值转向', 'MACD背离', '经典用法'],
        ['布林带中轨', '单边突破上轨', '上下轨间震荡', '经典用法'],
        ['超买超卖', 'KDJ金叉', 'KDJ背离', '经典用法'],
        ['EXPMA金叉', '经典用法'],
        ['RSI金叉', '超买超卖', '经典用法'],
        ['量柱和均量线']
    ]

    @property(cc.EditBox)
    edit: cc.EditBox = null;

    protected onLoad() {
        this._tipsLa = this.edit.node.getChildByName('tipslabel');
        this.edit.node.on('editing-did-ended', (edit) => {
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
                        //  break;
                    } else if (arr1[1].indexOf(str) != -1) {
                        tt.push(datas[i]);
                        flag = true;
                        //  break;
                    }
                }

                if (!flag) {
                    this._tipsLa.color = new cc.Color().fromHEX('#e94343');
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '没有找查到您要的股票.');
                    edit.string = '';
                } else {
                    this.content.removeAllChildren();
                    this.downBoxs[9].active = true;
                    this.setProId = 2;
                    this._tipsLa.color = new cc.Color().fromHEX('#BBBBBB');
                    this._tipsLa.active = false;
                    // let item = cc.find('downBox/New ScrollView/view/content/item', this.downBoxs[1]);
                    // let content = cc.find('downBox/New ScrollView/view/content', this.downBoxs[1]);
                    for (let i = 0; i < tt.length; i++) {
                        let arr = tt[i].split('|');
                        let str = arr[0];
                        if (arr[0].length >= 7) {
                            str = arr[0].slice(1);
                        }
                        if (i == 0) {
                            this.boxs[2].getChildByName('label').getComponent(cc.Label).string = str + '  ' + arr[1];
                            GameData.zbSet.search = arr[0];
                        }
                        let node = cc.instantiate(this.item);
                        this.content.addChild(node);
                        node.getComponent(cc.Label).string = str + '  ' + arr[1];
                    }

                    edit.string = '';
                }
            }

        }, this);

        if (GameData.ZBHistoryInfo.length > 0) {

            let content = cc.find('New ScrollView/view/content', this.downBoxs[2]);

            let item = content.children[0];

            GameData.ZBHistoryInfo.forEach(el => {
                let node = cc.instantiate(item);
                content.addChild(node);

                node.getComponent(cc.Label).string = el;
            })

        }

        GlobalEvent.on(EventCfg.GMAECOUNTERSCHANGE, this.onGameCountSow.bind(this), this);
    }

    onGameCountSow() {

        //     let gameCount = ComUtils.onCurWXIsEnterGame();
        this.tipsLabel.node.active = false;
        // this.curState = gameCount.status;
        // if (gameCount.status == 1) {
        //     this.tipsLabel.string = '今日免费剩余次数：' + gameCount.count + '次';
        // }

        // else if (gameCount.status == 2) {
        //     this.tipsLabel.string = '今日剩余次数：' + GameData.adSucceed + '次';
        // }

        // else if (gameCount.status == 3) {
        //     this.tipsLabel.string = '今日次数已用完,请点击在线客服,体验完整版APP';
        //     this.curState = 3;
        // }

    }

    onEnable() {

        GlobalEvent.emit(EventCfg.HIDELOADING);
        GameCfg.GameType = pb.GameType.ZhiBiao;

        this.boxs.forEach((el, index) => {
            let la = el.getChildByName('label').getComponent(cc.Label);
            if (index == 0) {
                la.string = GameData.zbSet.select;
            } else if (index == 1) {
                la.string = GameData.zbSet.strategy;
            } else if (index == 2) {
                la.string = GameData.zbSet.search;
                if (GameData.zbSet.search == '随机选股') {
                    this._tipsLa.active = true;
                } else {
                    this._tipsLa.active = false;
                }
            } else if (index == 3) {
                la.string = GameData.zbSet.year;
            } else if (index == 4) {
                la.string = GameData.zbSet.month;
            } else if (index == 5) {
                la.string = GameData.zbSet.day;
            } else if (index == 7) {
                la.string = GameData.zbSet.KLine;
            } else if (index == 8) {
                la.string = GameData.zbSet.ZLine;
            }
        })

        this.toggle.isChecked = GameData.zbSet.showSign;
        this.onCreatStrategy(GameData.zbSet.select);
        this.onGameCountSow();
    }

    onDestroy() {
        GlobalEvent.off(EventCfg.GMAECOUNTERSCHANGE);
    }

    onBtnBoxSelectClick(event, data) {

        let index = parseInt(data);
        let downBox = this.downBoxs[index];
        downBox.active = true;
        this.setProId = index;
        //
        if (index == 5 || index == 4 || index == 3) {
            let year = this.boxs[3].getChildByName('label').getComponent(cc.Label).string;
            let month = this.boxs[4].getChildByName('label').getComponent(cc.Label).string;
            if (index == 4 || index == 5) {
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

    getTimeByCodeName(index) {
        let year = this.boxs[3].getChildByName('label').getComponent(cc.Label).string;
        let month = this.boxs[4].getChildByName('label').getComponent(cc.Label).string;
        let day = this.boxs[5].getChildByName('label').getComponent(cc.Label).string;
        let downBox = this.downBoxs[index];
        let content = cc.find('New ScrollView/view/content', downBox);

        if (GameData.zbSet.search == '随机选股') {
            //不能超了当前
            let f = new Date();
            let y = f.getFullYear() + '';
            let m = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);
            let d = f.getDate() >= 10 ? f.getDate() : '0' + f.getDate();
            let sc = TimeUtils.GetPreMonthDay(y + '-' + m + '-' + d, 2);
            y = sc.y;
            m = sc.m;
            d = sc.d;

            let t;
            if (index == 3) {
                t = y;
            } else if (index == 4) {
                if (y == year) {
                    t = m;
                } else {
                    t = 12;
                }
            } else if (index == 5) {
                if (parseInt(month) == m && year == y) {
                    t == d;
                } else {
                    var temp1 = new Date(parseInt(year), parseInt(month + ''), 0);
                    let day1 = temp1.getDate();
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

        } else {

            let date = ConfUtils.getTimeByCodeName1(GameData.zbSet.search);
            let ly = date.start.slice(0, 4);
            let lm = date.start.slice(4, 6);
            let ld = date.start.slice(6);

            let cy = date.end.slice(0, 4);
            let cm = date.end.slice(4, 6);
            let cd = date.end.slice(6);

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
            }
            else if (index == 5) {
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

    onToggleBtnClick() {
        GameData.zbSet.showSign = this.toggle.isChecked;
    }

    onCreatStrategy(str) {

        let downBox = this.downBoxs[1];

        let content = cc.find('New ScrollView/view/content', downBox);

        let nodes = content.children;
        let item = nodes[0];
        nodes.forEach(el => {
            el.active = false;
        })

        let tt = 0;
        if (str == '均线') {
            tt = 0;
        } else if (str == 'MACD') {
            tt = 1;
        } else if (str == 'BOLL') {
            tt = 2
        } else if (str == 'KDJ') {
            tt = 3;
        } else if (str == 'EXPMA') {
            tt = 4
        } else if (str == 'RSI') {
            tt = 5;
        } else if (str == '成交量') {
            tt = 6;
        }
        let sl = this.boxs[1].getChildByName('label').getComponent(cc.Label).string;

        if (this.tips[tt].indexOf(sl) == -1) {
            this.boxs[1].getChildByName('label').getComponent(cc.Label).string = this.tips[tt][0];
            GameData.zbSet.strategy = this.tips[tt][0];
        }

        this.tips[tt].forEach((el, index) => {
            if (!nodes[index]) {
                let node = cc.instantiate(item);
                content.addChild(node);
            }
            nodes[index].getComponent(cc.Label).string = el;
            nodes[index].active = true;
        })
    }


    onBtnClick(event, data) {
        let name = event.target.name;
        if (name == 'DCnode') {
            event.target.parent.active = false;
        } else if (name == 'item') {
            let str = event.target.getComponent(cc.Label).string;
            this.boxs[this.setProId].getChildByName('label').getComponent(cc.Label).string = str;
            this.downBoxs.forEach(el => {
                el.active = false;
            });
            // if (this.setProId == 5) {
            //     let downBox = this.downBoxs[this.setProId];
            //     let year = this.boxs[3].getChildByName('label').getComponent(cc.Label).string;
            //     let month = this.boxs[4].getChildByName('label').getComponent(cc.Label).string;
            //     var temp = new Date(parseInt(year), parseInt(month), 0);
            //     let day = temp.getDate();
            //     let content = cc.find('New ScrollView/view/content', downBox);

            //     content.children.forEach(el => {
            //         let str = el.getComponent(cc.Label).string;
            //         if (parseInt(str) > day) {
            //             this.boxs[5].getChildByName('label').getComponent(cc.Label).string = day + '';
            //         } else {
            //             this.boxs[5].getChildByName('label').getComponent(cc.Label).string = day + '';
            //         }
            //     })
            // } else 
            if (this.setProId == 0) {
                this.onCreatStrategy(str);
            } else if (this.setProId == 2) {
                if (str == '随机选股') {
                    this._tipsLa.active = true;
                } else {
                    this._tipsLa.active = false;
                }
            }

            if (this.setProId == 0) {
                GameData.zbSet.select = str;
            } else if (this.setProId == 1) {
                GameData.zbSet.strategy = str;
            } else if (this.setProId == 2) {
                GameData.zbSet.search = str;
                if (GameData.zbSet.year != '随机') {
                    if (GameData.zbSet.search != '随机选股') {
                        let date = ConfUtils.getTimeByCodeName1(GameData.zbSet.search);
                        let ly = date.start.slice(0, 4);
                        let lm = date.start.slice(4, 6);
                        let ld = date.start.slice(6);

                        // let cy = date.end.slice(0, 4);
                        // let cm = date.end.slice(4, 6);
                        // let cd = date.end.slice(6);
                        let st;
                        st = GameData.zbSet.year;
                        if (GameData.zbSet.month.length == 1) {
                            st += ('0' + GameData.zbSet.month);
                        } else {
                            st += (GameData.zbSet.month);
                        }

                        if (GameData.zbSet.day.length == 1) {
                            st += ('0' + GameData.zbSet.day)
                        } else {
                            st += GameData.zbSet.day;
                        }

                        if (parseInt(st) < parseInt(date.start) || parseInt(st) > parseInt(date.end)) {
                            let ts = TimeUtils.GetPreMonthDay(ly + '-' + lm + '-' + ld, -2);
                            GameData.zbSet.year = ts.y;
                            GameData.zbSet.month = ts.m;
                            GameData.zbSet.day = ts.d;
                            this.boxs[3].getChildByName('label').getComponent(cc.Label).string = ts.y + '';
                            this.boxs[4].getChildByName('label').getComponent(cc.Label).string = ts.m + '';
                            this.boxs[5].getChildByName('label').getComponent(cc.Label).string = ts.d + '';
                        }
                    }

                }

            } else if (this.setProId == 3) {
                GameData.zbSet.year = str;
                if (GameData.zbSet.year == '随机') {
                    this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '随机';
                    this.boxs[5].getChildByName('label').getComponent(cc.Label).string = '随机';
                    GameData.zbSet.month = '随机';
                    GameData.zbSet.day = '随机';
                } else {
                    if (GameData.zbSet.search != '随机选股') {
                        let date = ConfUtils.getTimeByCodeName1(GameData.zbSet.search);
                        let ly = date.start.slice(0, 4);
                        let lm = date.start.slice(4, 6);
                        let ld = date.start.slice(6);

                        let cy = date.end.slice(0, 4);
                        let cm = date.end.slice(4, 6);
                        let cd = date.end.slice(6);
                        if (GameData.zbSet.year == ly) {
                            if (parseInt(lm) > parseInt(GameData.zbSet.month)) {
                                GameData.zbSet.month = lm;
                                GameData.zbSet.day = ld;
                                this.boxs[4].getChildByName('label').getComponent(cc.Label).string = lm;
                                this.boxs[5].getChildByName('label').getComponent(cc.Label).string = ld;
                            }

                        } else if (GameData.zbSet.year == cy) {
                            GameData.zbSet.month = '1';
                            GameData.zbSet.day = '1';
                            this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '1';
                            this.boxs[5].getChildByName('label').getComponent(cc.Label).string = '1';
                        } else {
                            GameData.zbSet.month = '9';
                            GameData.zbSet.day = '10';
                            this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '9';
                            this.boxs[5].getChildByName('label').getComponent(cc.Label).string = '10';
                        }

                    } else {
                        GameData.zbSet.month = '1';
                        GameData.zbSet.day = '1';
                        this.boxs[4].getChildByName('label').getComponent(cc.Label).string = '1';
                        this.boxs[5].getChildByName('label').getComponent(cc.Label).string = '1';
                    }

                }

            } else if (this.setProId == 4) {
                GameData.zbSet.month = str;
            } else if (this.setProId == 5) {
                GameData.zbSet.day = str;
            } else if (this.setProId == 7) {
                GameData.zbSet.KLine = str;
            } else if (this.setProId == 8) {
                GameData.zbSet.ZLine = str;
            }

        } else if (name == 'startZBBtn') {

            // if (this.curState == 2 && !GameData.adSucceed) {
            //     let self = this;
            //     PopupManager.openNode(cc.find('Canvas'), null, 'Prefabs/unlockBox', 22, (node) => {
            //         node.getComponent('UnlockBox').callback = () => {
            //             GlobalEvent.emit(EventCfg.SHOWLOADING);
            //             self.onGameCountSow();
            //         }
            //     });

            //     return;
            // }

            // else if (this.curState == 3) {
            //     GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '今日次数已用完,请点击在线客服,体验完整版APP');
            // }

            // else {

            if (!GameData.vipStatus) {
                if (GameData.zbSet.select != '均线') {
                    GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '现阶段均线指标可训练，暂不开放其他指标');
                    return;
                }
            }


            GameCfg.GameType = pb.GameType.ZhiBiao;
            GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.zbSet));
            //      GameCfg.GameSet = GameData.zbSet;
            GameCfg.GAMEFUPAN = false;
            GameCfg.ziChan = 100000;

            this.zhibiaoStartGameSet();
            this.onGameCountSow();
            //  }

            // if (this.curState == 2) {
            //     let time = new Date().toLocaleDateString();
            //     cc.sys.localStorage.setItem(time + 'ADSUCCEED' + GameCfg.GameType, 0);
            //     this.adSucceed = 0;
            // }

        } else if (name == 'setZBBtn') {

            GameBundle.openSetLayer();

        } else if (name == 'historyZBBtn') {
            GameCfg.GameType = pb.GameType.ZhiBiao;
            GameBundle.openHisLayer();
        }

        else if (name == 'sys_helpbig1') {
            PopupManager.openHelpLayer();
        }

        else if (name == 'blackbtn') {
            GameCfg.GameType = null;
            this.node.active = false;
        }

        // else if (name == 'mfxlBtn') {
        //     GlobalEvent.emit("OPENUNLOCKBOX", true);
        // }

    }

    zhibiaoStartGameSet() {
        GameCfg.GameType = pb.GameType.ZhiBiao;
        GameCfg.GameSet = JSON.parse(JSON.stringify(GameData.zbSet));

        GameCfg.GAMEFUPAN = false;
        GameCfg.ziChan = 100000;
        let data = {
            ktype: null,    //4 30分钟  5  60分钟  10  日   11周
            kstyle: 0,      // 0随机行情   1震荡行情  2单边向上行情 3单边向下行情
            code: null,       //股票代码（0表示忽略和随机）
            from: null,       //// 开始时间戳（不能为0，查询日K行情的格式为：YYYYMMDD；查询分时行情的格式为：HHMMSS）
            total: parseInt(GameData.zbSet.KLine) + 100,  // K线条数
            to: 0,           //	// 结束时间戳（0表示忽略该参数；格式同from）
            reserve: 100,
        }

        let items

        if (GameData.zbSet.ZLine == '周线') {
            data.ktype = pb.KType.Day7;
        } else if (GameData.zbSet.ZLine == '日线') {
            data.ktype = pb.KType.Day;
        }

        if (GameData.zbSet.search == '随机选股') {
            if (GameData.zbSet.year == '随机') {
                let le = parseInt(Math.random() * GameData.stockList.length + '');
                items = GameData.stockList[le].split('|');
                data.code = items[0];
            } else {
                let m, d;
                if (GameData.zbSet.month.length < 2) {
                    m = '0' + GameData.zbSet.month;
                }
                else {
                    m = GameData.zbSet.month;
                }
                if (GameData.zbSet.day.length < 2) {
                    d = '0' + GameData.zbSet.day;
                }
                else {
                    d = GameData.zbSet.day;
                }
                let seletTime = GameData.zbSet.year + '' + m + '' + d;
                items = ConfUtils.getTimeByItems(seletTime);
                data.code = items[0];
            }

        } else {
            let arrStr = GameData.zbSet.search.split(' ');
            items = ConfUtils.getGPItemInfo(arrStr[0]);
            data.code = items[0];
            let code = data.code + '';
            if (code.length >= 7) {
                code = code.slice(1, 7);
            }
            ComUtils.saveHistory(code + ' ' + items[1]);
        }

        if (GameData.zbSet.year != '随机') {
            let m, d;
            if (GameData.zbSet.month.length < 2) {
                m = '0' + GameData.zbSet.month;
            } else {
                m = GameData.zbSet.month;
            }

            if (GameData.zbSet.day.length < 2) {
                d = '0' + GameData.zbSet.day;
            } else {
                d = GameData.zbSet.day;
            }
            let seletTime = GameData.zbSet.year + '' + m + '' + d;
            data.from = seletTime;
        } else {
            let start = items[2], end = items[3], sc;
            if (end == 0) {
                if (GameData.zbSet.ZLine == '周线') {
                    sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000 * 7;
                } else {
                    sc = new Date().getTime() - data.total * 24 * 60 * 60 * 1000;
                }
            } else {
                let year = end.slice(0, 4);
                let month = end.slice(4, 6);
                let day = end.slice(6);

                let d = new Date(year + '-' + month + '-' + day);
                if (GameData.zbSet.ZLine == '周线') {
                    sc = d.getTime() - data.total * 24 * 60 * 60 * 1000 * 7;
                }
                else {
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
            ///console.log(d); 
            let t;
            if (GameData.zbSet.ZLine == '周线') {
                t = d.getTime() + 24 * 60 * 60 * 1000 * 100 * 7 * 2;
            }
            else {
                t = d.getTime() + 24 * 60 * 60 * 1000 * 100 * 2;
            }

            if (sc < t && GameData.zbSet.year == '随机' && GameData.zbSet.search == '随机选股') {
                this.zhibiaoStartGameSet();
                return;
            }

            let s = Math.random() * (sc - t) + t;

            let f = new Date(s);

            {
                let ye = f.getFullYear();
                let mon = f.getMonth() + 1 >= 10 ? f.getMonth() + 1 : '0' + (f.getMonth() + 1);

                let da = f.getDate() >= 10 ? f.getDate() : '0' + (f.getDate());

                data.from = ye + '' + mon + '' + da;
            }
        }
        GameCfg.data[0].data = [];
        GameCfg.data[0].name = items[1];
        GameCfg.data[0].code = items[0];
        GameCfg.data[0].circulate = items[4];
        console.log('给的数据:' + JSON.stringify(data));
        GameCfg.enterGameConf = data;

        GlobalHandle.enterGameSetout(GameCfg.enterGameConf, () => {
            GameData.huizhidatas = 0;
            GameCfg.huizhidatas = 0;
            let fm = data.from;
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
            GlobalEvent.emit('LOADGAME');
        });
    }

}
