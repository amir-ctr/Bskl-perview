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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLinkContent = analyzeLinkContent;
const node_fetch_1 = __importDefault(require("node-fetch"));
function analyzeLinkContent(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, node_fetch_1.default)(url, { method: 'HEAD' });
            const contentType = response.headers.get('content-type') || '';
            if (contentType.includes('image'))
                return { type: 'Image', description: 'The link points to an image file.' };
            if (contentType.includes('video'))
                return { type: 'Video', description: 'The link points to a video file.' };
            if (contentType.includes('json'))
                return { type: 'API', description: 'The link points to a JSON API.' };
            if (contentType.includes('html'))
                return { type: 'Website', description: 'The link points to a webpage.' };
            return { type: 'Unknown', description: 'Could not determine the link content.' };
        }
        catch (_a) {
            return { type: 'Error', description: 'Failed to analyze the link.' };
        }
    });
}
