
export default class Socket {

    public ws = null;

    public url = null;

    public callback = null;

    public reconnectBeat = null;

    public reconnectCount = 0;

    constructor(url, callback) {
        this.callback = callback;
        this.ws = new WebSocket(url);
        this.ws.binaryType = 'arraybuffer';

        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onclose = this.onClose.bind(this);
    }

    public onMessage(event) {

    }

    public onOpen() {
        this.reconnectBeat && (clearInterval(this.reconnectBeat));
        this.reconnectBeat = null;
        this.reconnectCount = 0;
        this.callback && (this.callback());


    }

    public onError() {

    }

    public onClose() { }
}
