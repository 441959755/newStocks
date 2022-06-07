

export default {
    /**
     * 
     * @param node 
     * @param call 
     */
    openNode(node, call?) {
        let bg = node.getChildByName('bg');
        node.active = true;
        bg.y = cc.winSize.height;
        cc.tween(bg)
            .to(0.2, { position: cc.v2(0, bg.y - cc.winSize.height) })
            .call(() => {
                call && (call())
            })
            .start();
    },

    /**
     * 
     * @param node 
     * @param call 
     */
    closeNode(node, call?) {
        let bg = node.getChildByName('bg');

        cc.tween(bg)
            .to(0.2, { position: cc.v2(0, bg.y + cc.winSize.height) })
            .call(() => {
                call && (call())
            })
            .start();

    },

    // openLayer(node) {

    //     let bg = node.getChildByName('bg');
    //     bg.y = 1000;
    //     cc.tween(bg)
    //         .to(0.2, { position: cc.v2(0, 0) })
    //         .to(0.1, { scaleY: 0.9 })
    //         .to(0.1, { scaley: 1 })
    //         .start();
    // }
}