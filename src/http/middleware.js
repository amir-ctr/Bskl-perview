"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMiddleware = useMiddleware;
exports.applyMiddleware = applyMiddleware;
const middlewares = [];
function useMiddleware(middleware) {
    middlewares.push(middleware);
}
function applyMiddleware(request) {
    return middlewares.reduce((req, middleware) => middleware(req), request);
}
