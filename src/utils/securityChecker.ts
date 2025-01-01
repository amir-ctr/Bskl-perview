export function isSecureUrl(url: string): boolean {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:';
}