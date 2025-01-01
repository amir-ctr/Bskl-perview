"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSecureUrl = isSecureUrl;
function isSecureUrl(url) {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:';
}
