import { pb } from "../../proto/proto";
import PbHelp from "./PbHelp";
export default class Socket {

    public ws = null;

    public url = null;

    public callback = null;

    public reconnectBeat = null;

    public reconnectCount = 0;

    public hearbeat = null;

    public queue = [];

    private preData = null;

    public flag = false;



    constructor(url, callback) {
        this.callback = callback;
        this.url = url;
        this.init();
    }

    public init() {
        this.ws = new WebSocket(this.url);
        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onclose = this.onClose.bind(this);
    }

    /**
     * 
     * @param event 
     */

    public onMessage(event) {
        let decode = new Uint8Array(event.data);
        let offect = 10, handleBuf, beadBuf;

        if (decode.length >= offect) {
            handleBuf = decode.slice(0, 10);
            beadBuf = decode.slice(10);
        }

        let messageId = pb.MessageHead.decode(new Uint8Array(handleBuf));

        console.log(messageId.messageId);

        let info = PbHelp.selectProtoBlackData(messageId.messageId, beadBuf);

        let callback = this.queue[messageId.messageId];

        callback && (callback(info));

    }

    public onOpen() {

        this.reconnectBeat && (clearInterval(this.reconnectBeat));
        this.reconnectBeat = null;
        this.reconnectCount = 0;
        this.callback && (this.callback());

    }


    public onError() {
        console.log('socket  error');

    }

    public onClose() {
        console.log('socket  close');

        this.hearbeat && (clearInterval(this.hearbeat));
        this.hearbeat = null;
        this.reconnectBeat && (clearInterval(this.reconnectBeat));
        this.reconnectBeat = null;
        this.ws = null;

        if (!this.flag) {
            this.reconnect();
        }

    }

    /**
     * 重连
     */
    public reconnect() {
        if (!this.reconnectBeat) {
            this.reconnectBeat = setInterval(() => {
                console.log('socket reconnect...');
                this.init();
                this.reconnectCount++;
            }, 3000);
        }
    }



    /**
     * 心跳
     */
    public onHearbeat() {

        this.hearbeat && (clearInterval(this.hearbeat));
        this.hearbeat = null;
        let self = this;
        this.hearbeat = setInterval(() => {

            if (self.send) {
                console.log('心跳');
                self.send(pb.MessageId.Sync_C2S_GameHeart, null, null);
            }

        }, 5000);

        if (this.preData) {
            this.send(this.preData.actionCode, this.preData.proto, this.preData.callback);
            this.preData = null;
        }
    }

    /**
     * 
     * @param actionCode 协议code
     * @param proto      buff
     * @param callback    回调返回消息
     */
    public send(actionCode, proto, callback) {

        if (this.ws && this.ws.readyState == WebSocket.OPEN) {

            let le = proto ? proto.length : 0;

            let message = pb.MessageHead.create({
                messageId: actionCode,
                messageLen: le + 10,
            })

            this.queue[++actionCode] = callback;

            let buff = pb.MessageHead.encode(message).finish();

            buff && (this.ws.send(buff.buffer.slice(buff.byteOffset, buff.byteLength + buff.byteOffset)));

            proto && (this.ws.send(proto.buffer.slice(proto.byteOffset, proto.byteLength + proto.byteOffset)));
        }
        else {
            this.preData = {
                actionCode: actionCode,
                proto: proto,
                callback: callback,
            }
        }
    }



}
