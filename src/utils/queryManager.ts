export function addQueryParam(url: string, key: string, value: string): string {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.append(key, value);
    return parsedUrl.toString();
}

export function removeQueryParam(url: string, key: string): string {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.delete(key);
    return parsedUrl.toString();
}

export function updateQueryParam(url: string, key: string, value: string): string {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.set(key, value);
    return parsedUrl.toString();
}
export function addMultipleParams(url: string, params: Record<string, string>): string {
    const parsedUrl = new URL(url);
    Object.entries(params).forEach(([key, value]) => {
        parsedUrl.searchParams.append(key, value);
    });
    return parsedUrl.toString();
}

