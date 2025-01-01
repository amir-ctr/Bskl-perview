"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestManager = void 0;
class RequestManager {
    static fetchWithRetry(url_1, options_1) {
        return __awaiter(this, arguments, void 0, function* (url, options, retries = 3, timeout = 5000) {
            const controller = new AbortController();
            const signal = controller.signal;
            const timeoutId = setTimeout(() => controller.abort(), timeout);
            try {
                const response = yield fetch(url, Object.assign(Object.assign({}, options), { signal }));
                clearTimeout(timeoutId);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return yield response.json();
            }
            catch (error) {
                clearTimeout(timeoutId);
                if (retries > 0) {
                    console.warn(`Retrying... attempts left: ${retries}`);
                    return this.fetchWithRetry(url, options, retries - 1, timeout);
                }
                throw error;
            }
        });
    }
    // متد GET
    static get(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, options = {}, retries = 3, timeout = 5000) {
            return this.fetchWithRetry(url, Object.assign(Object.assign({}, options), { method: 'GET' }), retries, timeout);
        });
    }
    // متد POST
    static post(url_1, body_1) {
        return __awaiter(this, arguments, void 0, function* (url, body, options = {}, retries = 3, timeout = 5000) {
            return this.fetchWithRetry(url, Object.assign(Object.assign({}, options), { method: 'POST', headers: Object.assign({ 'Content-Type': 'application/json' }, options.headers), body: JSON.stringify(body) }), retries, timeout);
        });
    }
    // متد PUT
    static put(url_1, body_1) {
        return __awaiter(this, arguments, void 0, function* (url, body, options = {}, retries = 3, timeout = 5000) {
            return this.fetchWithRetry(url, Object.assign(Object.assign({}, options), { method: 'PUT', headers: Object.assign({ 'Content-Type': 'application/json' }, options.headers), body: JSON.stringify(body) }), retries, timeout);
        });
    }
    // متد DELETE
    static delete(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, options = {}, retries = 3, timeout = 5000) {
            return this.fetchWithRetry(url, Object.assign(Object.assign({}, options), { method: 'DELETE' }), retries, timeout);
        });
    }
}
exports.RequestManager = RequestManager;
