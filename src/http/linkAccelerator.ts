import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes

export async function getAcceleratedLink(url: string): Promise<string> {
    if (cache.has(url)) {
        return cache.get(url) as string;
    }

    const response = await fetch(url);
    const content = await response.text();

    cache.set(url, content);
    return content;
}
