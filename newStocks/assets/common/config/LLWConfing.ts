//import PlatDefine from "./PlatDefine";

import { pb } from "../../proto/proto";



const VERSION = 0;
const GAMEID = 0;

//const PLATTYPE = PlatDefine.PLAT_WEB;
const AppFrom = pb.AppFrom.Website3th;

const LoginUrl = 'http://test.cgdr168.com';
//cosnt LoginUrl='https://www.cgdr168.com';

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
