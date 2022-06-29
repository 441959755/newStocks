import { pb } from "../../protos/proto";
import HttpMgr from "../../sctiprs/HttpMgr";
import HttpUtils from "../net/HttpUtils";


export default class WebSDK {

    private static _instance = null;

    public static gteInstance() {
        if (!this._instance) {
            this._instance = new WebSDK();
        }
        return this._instance;
    }

    login(call, uid?, pw?) {
        let loginInfo = {
            account: uid || '123456789',
            type: pb.LoginType.MobilePhoneId,
            pwd: pw || '123456',
        }

        HttpMgr.loginHttp(uid, loginInfo, call)
    }

    copybord(str) {
        let input = str;
        const el = document.createElement('textarea');
        el.value = input;
        el.setAttribute('readonly', '');
        el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt';

        const selection = getSelection();
        let originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        el.selectionStart = 0;
        el.selectionEnd = input.length;

        let success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) { }

        document.body.removeChild(el);

        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }

        return success;
    }

    showVideoAd(cb) {
        console.log('观看视频！');

        cb && (cb(true));
    }

    shareAppMessage(type) {
        console.log('邀请好友');
    }

    callWXPayToJava(appid, partnerid, prepayid, nonce_str, timestamp, sign) {
        console.log('暂无支付');
    }

}