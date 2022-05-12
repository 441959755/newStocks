import { pb } from "../../proto/proto";
import LLWConfing from "../config/LLWConfing";
import WebSDK from "./WebSDK";

export default class LLWSDK {

    public static getSDK() {
        switch (LLWConfing.AppFrom) {
            case pb.AppFrom.Website3th:
                return WebSDK.gteInstance();
        }
    }
}