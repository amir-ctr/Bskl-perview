export function generateShortLink(url: string, length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortKey = '';
    for (let i = 0; i < length; i++) {
        shortKey += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `https://short.ly/${shortKey}`;
}
