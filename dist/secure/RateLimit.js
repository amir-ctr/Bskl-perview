"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimit = rateLimit;
const requestCounts = new Map();
function rateLimit(ip, limit, windowMs) {
    const currentTime = Date.now();
    const requests = requestCounts.get(ip) || [];
    const updatedRequests = requests.filter((time) => currentTime - time < windowMs);
    if (updatedRequests.length >= limit)
        return false;
    updatedRequests.push(currentTime);
    requestCounts.set(ip, updatedRequests);
    return true;
}
