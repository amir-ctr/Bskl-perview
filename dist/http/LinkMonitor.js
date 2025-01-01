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
exports.LinkMonitor = void 0;
class LinkMonitor {
    constructor(interval = 60000) {
        this.links = [];
        this.interval = interval;
    }
    addLink(url) {
        if (!this.links.includes(url)) {
            this.links.push(url);
        }
    }
    startMonitoring() {
        setInterval(() => {
            this.links.forEach((url) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(url);
                    if (!response.ok) {
                        console.error(`Link is down: ${url}`);
                    }
                }
                catch (_a) {
                    console.error(`Failed to reach link: ${url}`);
                }
            }));
        }, this.interval);
    }
}
exports.LinkMonitor = LinkMonitor;
