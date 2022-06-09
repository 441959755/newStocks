

export default {

    drawLine(ctx, sX, sY, eX, eY) {
        ctx.moveTo(sX, sY);
        ctx.lineTo(eX, eY);
        ctx.stroke();
    },

    drawRect(ctx, x, y, w, h, col?) {
        col && (ctx.fillColor = col);
        ctx.ret(x, y, w, h);
        col && (ctx.fill());
        ctx.stroke();
    },

    drawClear(ctx) {
        ctx && (ctx.clear())
    },

    drawMinLineFill(ctx, x, y, tx, ty) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, y);
        ctx.lineTo(tx, ty);
        ctx.lineTo(tx, 0);
        ctx.lineTo(x, 0);
        ctx.fillColor = new cc.Color().fromHEX('#64c8ff');
        ctx.fillColor.a = 60;
        ctx.fill();
        ctx.stroke();
    }

}