export class QueryBuilder {
  private params: URLSearchParams = new URLSearchParams();

  addParam(key: string, value: string): void {
    this.params.append(key, value);
  }

  removeParam(key: string): void {
    this.params.delete(key);
  }

  build(): string {
    return this.params.toString();
  }
}