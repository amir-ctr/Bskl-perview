// ساختار دیتابیس پیشنهادی:
interface LinkLog {
    url: string;
    ip: string;
    accessedAt: Date;
    valid: boolean;
}

// ذخیره در دیتابیس (فرض کنید از MongoDB استفاده می‌کنید):
export function logLinkUsage(link: string, ip: string, valid: boolean) {
    const log: LinkLog = { url: link, ip, accessedAt: new Date(), valid };
    // ذخیره در دیتابیس
    console.log('Link Log:', log);
}
