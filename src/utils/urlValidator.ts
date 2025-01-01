// src/utils/urlValidator.ts
export async function followRedirect(url: string, maxRedirects: number = 5): Promise<string> {
  let currentUrl = url;
  for (let i = 0; i < maxRedirects; i++) {
      const response = await fetch(currentUrl, { method: 'HEAD', redirect: 'manual' });
      if (response.status >= 300 && response.status < 400 && response.headers.get('location')) {
          currentUrl = response.headers.get('location')!;
      } else {
          return currentUrl;
      }
  }
  throw new Error('Too many redirects');
}
