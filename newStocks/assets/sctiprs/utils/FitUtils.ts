

export default {

    resetSize(cav) {

        let frameSize = cc.view.getFrameSize();
        let designSize = cc.view.getDesignResolutionSize();

        if (frameSize.width / frameSize.height > designSize.width / designSize.height) {
            cav.width = designSize.height * frameSize.width / frameSize.height;
            cav.height = designSize.height;
        }
        else {
            cav.width = designSize.width;
            cav.height = designSize.width * frameSize.height / frameSize.width;
        }
        cav.getComponent(cc.Canvas).getDesignResolutionSize = cc.size(cav.width, cav.height);
        this.firscene(cav, designSize);

    },

    fitScene(cav, designSize) {
        let scaleW = cav.width / designSize.width;
        let scaleH = cav.height / designSize.height;

        let bgNode = cav.getChildByName('bg');

        if (scaleW > scaleH) {

            let bgSacle = cav.width / bgNode.width;
            bgNode.width *= bgSacle;
            bgNode.height *= bgSacle;
        }
        else {
            let bgSacle = cav.height / bgNode.height;
            bgNode.width *= bgSacle;
            bgNode.height *= bgSacle;
        }

    }


}