/**
 * Parses a given URL and returns its components.
 * @param url - The URL to parse.
 * @returns An object containing the URL components.
 */
export function parseUrl(url: string) {
  try {
    const parsedUrl = new URL(url); // استفاده از کلاس URL برای تجزیه
    return {
      protocol: parsedUrl.protocol, // پروتکل (http:, https:)
      hostname: parsedUrl.hostname, // دامنه (example.com)
      port: parsedUrl.port, // پورت (3000)
      pathname: parsedUrl.pathname, // مسیر (/path/to/resource)
      search: parsedUrl.search, // پارامترهای کوئری (?key=value)
      searchParams: Object.fromEntries(parsedUrl.searchParams.entries()), // پارامترهای کوئری به‌صورت آبجکت
      hash: parsedUrl.hash, // هش (#section)
    };
  } catch (error) {
    console.error("Invalid URL");
    return null;
  }
}
