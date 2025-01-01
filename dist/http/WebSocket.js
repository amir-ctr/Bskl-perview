"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketManager = void 0;
class WebSocketManager {
    constructor(url) {
        this.url = url;
        this.socket = null;
        this.listeners = new Map();
    }
    connect() {
        this.socket = new WebSocket(this.url);
        this.socket.onmessage = (event) => {
            var _a;
            const data = JSON.parse(event.data);
            const eventType = data.type;
            if (this.listeners.has(eventType)) {
                (_a = this.listeners.get(eventType)) === null || _a === void 0 ? void 0 : _a(data.payload);
            }
        };
    }
    on(eventType, callback) {
        this.listeners.set(eventType, callback);
    }
    send(eventType, payload) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify({ type: eventType, payload }));
    }
    disconnect() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.close();
        this.socket = null;
    }
}
exports.WebSocketManager = WebSocketManager;
