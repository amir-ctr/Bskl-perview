"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQueryParam = addQueryParam;
exports.removeQueryParam = removeQueryParam;
exports.updateQueryParam = updateQueryParam;
exports.addMultipleParams = addMultipleParams;
function addQueryParam(url, key, value) {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.append(key, value);
    return parsedUrl.toString();
}
function removeQueryParam(url, key) {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.delete(key);
    return parsedUrl.toString();
}
function updateQueryParam(url, key, value) {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.set(key, value);
    return parsedUrl.toString();
}
function addMultipleParams(url, params) {
    const parsedUrl = new URL(url);
    Object.entries(params).forEach(([key, value]) => {
        parsedUrl.searchParams.append(key, value);
    });
    return parsedUrl.toString();
}
