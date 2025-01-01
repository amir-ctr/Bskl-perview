export async function fetchAsJson(url: string): Promise<Record<string, unknown>> {
    const response = await fetch(url);
    const text = await response.text();

    try {
        return JSON.parse(text);
    } catch {
        throw new Error('The link does not return a valid JSON response.');
    }
}
