import fetch from 'node-fetch';

export async function analyzeLinkContent(url: string): Promise<{ type: string; description: string }> {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentType = response.headers.get('content-type') || '';

        if (contentType.includes('image')) return { type: 'Image', description: 'The link points to an image file.' };
        if (contentType.includes('video')) return { type: 'Video', description: 'The link points to a video file.' };
        if (contentType.includes('json')) return { type: 'API', description: 'The link points to a JSON API.' };
        if (contentType.includes('html')) return { type: 'Website', description: 'The link points to a webpage.' };

        return { type: 'Unknown', description: 'Could not determine the link content.' };
    } catch {
        return { type: 'Error', description: 'Failed to analyze the link.' };
    }
}
