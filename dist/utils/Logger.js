"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static formatMessage(level, message) {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level}] ${message}`;
    }
    static info(message) {
        console.log(this.formatMessage('INFO', message));
    }
    static warn(message) {
        console.warn(this.formatMessage('WARN', message));
    }
    static error(message) {
        console.error(this.formatMessage('ERROR', message));
    }
}
exports.Logger = Logger;
