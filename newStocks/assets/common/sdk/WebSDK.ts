

export default class WebSDK {

    private static _instance = null;

    public static gteInstance() {
        if (!this._instance) {
            this._instance = new WebSDK();
        }
        return this._instance;
    }

}