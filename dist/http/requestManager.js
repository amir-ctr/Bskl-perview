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
    constructor(baseUrl, timeout = 5000) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
        };
        this.timeout = timeout;
    }
    // تنظیم Headers سفارشی
    setHeader(key, value) {
        this.defaultHeaders[key] = value;
    }
    // درخواست عمومی
    request(method, endpoint, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}${endpoint}`;
            const options = {
                method,
                headers: Object.assign(Object.assign({}, this.defaultHeaders), headers),
                body: body ? JSON.stringify(body) : undefined,
            };
            // Promise برای مدیریت Timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);
            options.signal = controller.signal;
            try {
                const response = yield fetch(url, options);
                clearTimeout(timeoutId);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
                }
                return yield response.json();
            }
            catch (error) {
                if (error === 'AbortError') {
                    throw new Error('Request timeout');
                }
                throw error;
            }
        });
    }
    // GET
    get(endpoint, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', endpoint, undefined, headers);
        });
    }
    // POST
    post(endpoint, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', endpoint, body, headers);
        });
    }
    // PUT
    put(endpoint, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', endpoint, body, headers);
        });
    }
    // DELETE
    delete(endpoint, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', endpoint, undefined, headers);
        });
    }
}
exports.RequestManager = RequestManager;
