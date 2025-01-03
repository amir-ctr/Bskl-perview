export function strictIPCheck(clientIP: string, allowedIPs: string[]): boolean {
    // بررسی دقیق IP شامل IP Range
    return allowedIPs.some((allowedIP) => {
        if (allowedIP.includes('/')) {
            // پشتیبانی از CIDR
            const [range, bits] = allowedIP.split('/');
            const mask = -1 << (32 - Number(bits));
            const ipToInt = (ip: string) => ip.split('.').reduce((acc, octet) => (acc << 8) + Number(octet), 0);
            return (ipToInt(clientIP) & mask) === (ipToInt(range) & mask);
        }
        return clientIP === allowedIP;
    });
}
