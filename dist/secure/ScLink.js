"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSecureLink = generateSecureLink;
exports.validateSecureLink = validateSecureLink;
const crypto_1 = __importDefault(require("crypto"));
function generateSecureLink(baseURL, secretKey, expiration, allowedIPs) {
    const timestamp = Date.now() + expiration * 1000; // زمان انقضا
    const payload = JSON.stringify({ baseURL, allowedIPs, timestamp });
    const encryptedPayload = crypto_1.default.createHmac('sha256', secretKey).update(payload).digest('hex');
    return `${baseURL}?token=${encryptedPayload}&expires=${timestamp}`;
}
function validateSecureLink(link, secretKey, clientIP) {
    const url = new URL(link);
    const token = url.searchParams.get('token');
    const expires = Number(url.searchParams.get('expires'));
    const baseURL = url.origin + url.pathname;
    if (Date.now() > expires)
        return false; // لینک منقضی شده است.
    const payload = JSON.stringify({ baseURL, allowedIPs: [clientIP], timestamp: expires });
    const validHash = crypto_1.default.createHmac('sha256', secretKey).update(payload).digest('hex');
    return token === validHash; // بررسی صحت لینک
}
