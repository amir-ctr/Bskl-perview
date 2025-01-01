"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
class Cache {
    constructor() {
        this.cache = new Map();
    }
    set(key, data, ttl = 60000) {
        const expiry = Date.now() + ttl;
        this.cache.set(key, { data, expiry });
    }
    get(key) {
        const cached = this.cache.get(key);
        if (cached && cached.expiry > Date.now()) {
            return cached.data;
        }
        this.cache.delete(key);
        return null;
    }
    delete(key) {
        this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
}
exports.Cache = Cache;
