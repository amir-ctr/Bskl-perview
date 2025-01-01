type Middleware = (request: RequestInit) => RequestInit;

const middlewares: Middleware[] = [];

export function useMiddleware(middleware: Middleware): void {
    middlewares.push(middleware);
}

export function applyMiddleware(request: RequestInit): RequestInit {
    return middlewares.reduce((req, middleware) => middleware(req), request);
}
