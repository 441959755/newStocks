import { pb } from "../../proto/proto";
import GameData from "../GameData";


export default {

    interval: null,

    vipTimeCB: [],

    getVipTime(cb) {

        let obj = {
            day: null,
            hours: null,
            minute: null,
        }

        this.vipTimeCB.push(cb);

        let call = function () {
            let dis = GameData.properties[pb.GamePropertyId.VipExpiration] - new Date().getTime() / 1000;
            obj.day = parseInt(dis / (60 * 60 * 24) + '');
            dis = dis - obj.day * (60 * 60 * 24);
            obj.hours = parseInt(dis / (60 * 60) + '');

            dis = dis - obj.hours * (60 * 60);
            obj.minute = parseInt(dis / 60 + '');

            this.vipTimeCB.forEach(el => {
                el(obj);
            })
        }

        call();

        if (!this.interval) {
            this.interval = setInterval(() => {
                call();
            }, 60 * 1000)
        }
    }
}