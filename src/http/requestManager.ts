export class RequestManager {
    private baseUrl: string;
    private defaultHeaders: Record<string, string>;
    private timeout: number;
  
    constructor(baseUrl: string, timeout: number = 5000) {
      this.baseUrl = baseUrl;
      this.defaultHeaders = {
        'Content-Type': 'application/json',
      };
      this.timeout = timeout;
    }
  
    // تنظیم Headers سفارشی
    setHeader(key: string, value: string): void {
      this.defaultHeaders[key] = value;
    }
  
    // درخواست عمومی
    private async request(
      method: string,
      endpoint: string,
      body?: Record<string, any>,
      headers?: Record<string, string>
    ): Promise<any> {
      const url = `${this.baseUrl}${endpoint}`;
      const options: RequestInit = {
        method,
        headers: { ...this.defaultHeaders, ...headers },
        body: body ? JSON.stringify(body) : undefined,
      };
  
      // Promise برای مدیریت Timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);
      options.signal = controller.signal;
  
      try {
        const response = await fetch(url, options);
        clearTimeout(timeoutId);
  
        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status}, message: ${response.statusText}`
          );
        }
  
        return await response.json();
      } catch (error) {
        if (error === 'AbortError') {
          throw new Error('Request timeout');
        }
        throw error;
      }
    }
  
    // GET
    async get(endpoint: string, headers?: Record<string, string>): Promise<any> {
      return this.request('GET', endpoint, undefined, headers);
    }
  
    // POST
    async post(
      endpoint: string,
      body: Record<string, any>,
      headers?: Record<string, string>
    ): Promise<any> {
      return this.request('POST', endpoint, body, headers);
    }
  
    // PUT
    async put(
      endpoint: string,
      body: Record<string, any>,
      headers?: Record<string, string>
    ): Promise<any> {
      return this.request('PUT', endpoint, body, headers);
    }
  
    // DELETE
    async delete(endpoint: string, headers?: Record<string, string>): Promise<any> {
      return this.request('DELETE', endpoint, undefined, headers);
    }
  }
  