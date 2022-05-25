import GameData from "../GameData";
import EventCfg from "../utils/EventCfg";
import GlobalEvent from "../utils/GlobalEvent";
import LoadUtils from "../utils/LoadUtils"


export default {

    _bundle: null,

    schoolNode: null,

    schoolProgress: null,   //学习的大章

    studyHisBar: null,      //历史学习的小章

    studyBar: null,         //学习小章

    studyData1: null,

    studyData2: null,

    studyData3: null,

    assetImgs: new Map(),


    /**
     * 
     * @param url 
     * @param opt 
     */
    bundleSchool(url, opt?) {
        GlobalEvent.emit(EventCfg.SHOWLOADING);
        if (!this._bundle) {
            LoadUtils.loadBundle(url, opt).then((bundle) => {
                this._bundle = bundle;
                this.loadSchool();
            })
        }
        else {
            this.schoolNode.active = true;
            this.initData();
            this.loadAssets();
        }
    },

    /**
     * 
     */
    loadSchool() {
        if (this._bundle) {
            this._bundle.load('schoolLayer', cc.Prefab, (err, pre) => {
                if (!err) {
                    cc.find('Canvas').addChild(this.schoolNode = cc.instantiate(pre), 40);
                    this.initData();
                    this.loadAssets();
                }
            })
        }
    },

    /**
     * 
     */
    initData() {
        GameData.taskStudy.forEach((el, index) => {
            if (index + 1 == this.schoolProgress) {
                if (!el.progress) {
                    this.studyHisBar = 1;
                }
                else {
                    this.studyHisBar = el.progress;
                }
            }
        })
    },


    loadAssets() {
        let url = 'xy/study' + this.schoolProgress;
        let url1 = 'custom/' + this.schoolProgress;
        let url2 = 'custom/pic';
        Promise.all([this.bundleLoadDir(url), this.bundleLoadDir(url1), this.bundleLoadDir(url2)]).then((results) => {
            results[0].forEach(element => {
                if (element.name == 'Instructions' + this.schoolProgress) {
                    this.studyData1 = element.json;
                }
                else if (element.name == 'Instructions' + this.schoolProgress + 'dialogue') {
                    this.studyData2 = element.json;
                }
                else if (element.name == 'Instructions' + this.schoolProgress + 'question') {
                    this.studyData3 = element.json;
                }
            });



            results[1].forEach(element => {
                if (element.name) {
                    this.assetImgs.set(element.name, element);
                }
            });

            results[2].forEach(element => {
                if (element.name) {
                    this.assetImgs.set(element.name, element);
                }
            });

            GlobalEvent.emit('UPDATESTUDYDATA', this.studyData1, this.studyData2);

            GlobalEvent.emit(EventCfg.HIDELOADING);
        })

    },

    /**
     * 
     * @param url 
     * @returns 
     */
    bundleLoadDir(url) {

        return new Promise((resovle, reject) => {
            this._bundle.loadDir(url, (err, ass) => {
                if (!err) {
                    resovle(ass);
                }
                else {
                    reject(err);
                }
            })
        })
    },


    removeBundle() {
        this._bundle.releaseAll();
        cc.assetManager.removeBundle(this._bundle);
    }




}