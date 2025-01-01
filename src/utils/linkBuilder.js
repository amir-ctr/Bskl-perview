"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkBuilder = void 0;
// src/utils/linkBuilder.ts
class LinkBuilder {
    constructor(baseUrl) {
        this.params = {};
        this.baseUrl = baseUrl;
    }
    addParam(key, value) {
        this.params[key] = value;
        return this;
    }
    serializeParams(params, prefix = '') {
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
    build() {
        const queryString = this.serializeParams(this.params);
        return queryString ? `${this.baseUrl}?${queryString}` : this.baseUrl;
    }
}
exports.LinkBuilder = LinkBuilder;
