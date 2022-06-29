import LLWConfing from "../../common/config/LLWConfing";
import GameData from "../GameData";


export default {

    /**
     * 
     * @param url 
     * @returns 
     */
    loadRemote(url) {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(url, (err, text) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(text);
                }
            })
        })
    },

    /**
     * 
     * @param url 
     * @returns 
     */
    load(url) {
        return new Promise((resolve, reject) => {
            cc.resources.load(url, (err, prefab) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(prefab);
                }
            })
        })
    },

    loadDir(url) {
        return new Promise((resolve, reject) => {
            cc.resources.loadDir(url, (err, pre) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(pre);
                }
            })
        })
    },

    /**
     * 
     * @param str 
     * @param cb 
     */
    loadScene(str, cb?) {
        cc.director.loadScene(str, cb);
    },


    /**
     * 
     * @param url 
     * @param opt 
     * @returns 
     */
    loadBundle(url, opt?) {
        return new Promise((resolve, reject) => {
            const options = opt;
            cc.assetManager.loadBundle(url, options, (err, bundle) => {
                if (!err) {
                    resolve(bundle);
                }
                else {
                    reject(err);
                }
            })
        })
    },

    loadHeadImg(icon, sp) {
        let url = LLWConfing.LoginUrl + '/icon/' + icon + '.png';
        this.loadRemote(url).then((res) => {
            let texture = new cc.SpriteFrame(res);
            sp.spriteFrame = texture;
            GameData.imgs[icon + ''] = texture;
        }, () => {
            GameData.imgs[icon + ''] = GameData.imgs['0'];
        })
    },

    releaseRes(str) {
        cc.resources.release(str);
    }

}