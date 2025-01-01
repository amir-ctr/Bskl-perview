export class Cache {
    private cache: Map<string, { data: any; expiry: number }> = new Map();

    set(key: string, data: any, ttl: number = 60000): void {
        const expiry = Date.now() + ttl;
        this.cache.set(key, { data, expiry });
    }

    get(key: string): any | null {
        const cached = this.cache.get(key);
        if (cached && cached.expiry > Date.now()) {
            return cached.data;
        }
        this.cache.delete(key);
        return null;
    }

    delete(key: string): void {
        this.cache.delete(key);
    }

    clear(): void {
        this.cache.clear();
    }
}