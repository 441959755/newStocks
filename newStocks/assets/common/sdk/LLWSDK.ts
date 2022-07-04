
import LLWConfing from "../config/LLWConfing";
import WebSDK from "./WebSDK";
import WechatSDK from "./WechatSDK";

export default class LLWSDK {

    public static getSDK() {
        switch (LLWConfing.AppFrom) {
            case pb.AppFrom.Website3th:
                return WebSDK.gteInstance();
                break;
            case pb.AppFrom.WeChatMinProgram:
                return WechatSDK.getInstance();
                break;
        }
    }
}