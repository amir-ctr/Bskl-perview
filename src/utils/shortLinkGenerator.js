"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortLink = generateShortLink;
function generateShortLink(url, length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortKey = '';
    for (let i = 0; i < length; i++) {
        shortKey += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `https://short.ly/${shortKey}`;
}
