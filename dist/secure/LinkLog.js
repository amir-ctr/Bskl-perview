"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logLinkUsage = logLinkUsage;
// ذخیره در دیتابیس (فرض کنید از MongoDB استفاده می‌کنید):
function logLinkUsage(link, ip, valid) {
    const log = { url: link, ip, accessedAt: new Date(), valid };
    // ذخیره در دیتابیس
    console.log('Link Log:', log);
}
