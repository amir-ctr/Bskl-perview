// src/utils/linkBuilder.ts
export class LinkBuilder {
  private baseUrl: string;
  private params: Record<string, any> = {};

  constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
  }

  addParam(key: string, value: any): this {
      this.params[key] = value;
      return this;
  }

  private serializeParams(params: Record<string, any>, prefix: string = ''): string {
      return Object.keys(params)
          .map((key) => {
              const value = params[key];
              const paramKey = prefix ? `${prefix}[${key}]` : key;
              if (typeof value === 'object' && value !== null) {
                  return this.serializeParams(value, paramKey);
              }
              return `${encodeURIComponent(paramKey)}=${encodeURIComponent(value)}`;
          })
          .join('&');
  }

  build(): string {
      const queryString = this.serializeParams(this.params);
      return queryString ? `${this.baseUrl}?${queryString}` : this.baseUrl;
  }
}