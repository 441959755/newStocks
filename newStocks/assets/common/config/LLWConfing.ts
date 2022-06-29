//import PlatDefine from "./PlatDefine";

import { pb } from "../../protos/proto";


const VERSION = 0;
const GAMEID = 0;

const AppFrom = pb.AppFrom.Website3th;
//const AppFrom = pb.AppFrom.WeChatMinProgram;

const LoginUrl = 'http://test.cgdr168.com';
//const LoginUrl = 'https://www.cgdr168.com';

const ISLOG = false;


export default class LLWConfing {

    public static get VERSION() {

        return VERSION;
    }

    public static get GAMEID() {
        return GAMEID;
    }

    public static get AppFrom() {
        return AppFrom;
    }

    public static get LoginUrl() {
        return LoginUrl;
    }

    public static get ISLOG() {
        return ISLOG;
    }

}

////pbjs -t static-module -w commonjs -o proto.js *.proto
//pbts -o proto.d.ts proto.js