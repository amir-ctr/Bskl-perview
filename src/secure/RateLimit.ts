const requestCounts = new Map();

export function rateLimit(ip: string, limit: number, windowMs: number): boolean {
    const currentTime = Date.now();
    const requests = requestCounts.get(ip) || [];
    const updatedRequests = requests.filter((time: number) => currentTime - time < windowMs);

    if (updatedRequests.length >= limit) return false;

    updatedRequests.push(currentTime);
    requestCounts.set(ip, updatedRequests);
    return true;
}
