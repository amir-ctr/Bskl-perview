"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    constructor() {
        this.params = new URLSearchParams();
    }
    addParam(key, value) {
        this.params.append(key, value);
    }
    removeParam(key) {
        this.params.delete(key);
    }
    build() {
        return this.params.toString();
    }
}
exports.QueryBuilder = QueryBuilder;
