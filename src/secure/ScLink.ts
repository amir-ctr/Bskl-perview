import crypto from 'crypto';

export function generateSecureLink(baseURL: string, secretKey: string, expiration: number, allowedIPs: string[]): string {
    const timestamp = Date.now() + expiration * 1000; // زمان انقضا
    const payload = JSON.stringify({ baseURL, allowedIPs, timestamp });
    const encryptedPayload = crypto.createHmac('sha256', secretKey).update(payload).digest('hex');
    return `${baseURL}?token=${encryptedPayload}&expires=${timestamp}`;
}

export function validateSecureLink(link: string, secretKey: string, clientIP: string): boolean {
    const url = new URL(link);
    const token = url.searchParams.get('token');
    const expires = Number(url.searchParams.get('expires'));
    const baseURL = url.origin + url.pathname;

    if (Date.now() > expires) return false; // لینک منقضی شده است.

    const payload = JSON.stringify({ baseURL, allowedIPs: [clientIP], timestamp: expires });
    const validHash = crypto.createHmac('sha256', secretKey).update(payload).digest('hex');

    return token === validHash; // بررسی صحت لینک
}
