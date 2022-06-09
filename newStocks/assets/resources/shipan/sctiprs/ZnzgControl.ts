import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";
import LocalStorageUtils from "../../../sctiprs/utils/LocalStorageUtils";


export default {

    searchNode: null,

    scoreNode: null,

    otherNode: null,

    _listData: [],

    get listData() {

        let listData = LocalStorageUtils.getItem('ZNZGLIST');
        if (listData) {
            this._listData = JSON.parse(listData);
        }
        return this._listData;
    },

    set listData(val: any) {

        for (let i = 0; i < this._listData.length; i++) {
            if (this._listData[i].code == val.code) {
                return;
            }
        }

        this._listData.push(val);
        LocalStorageUtils.setItem('ZNZGLIST', JSON.stringify(this._listData));
    },

    searchCode: null,

    searchName: null,



}
