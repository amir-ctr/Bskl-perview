"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMultiRouteLink = createMultiRouteLink;
function createMultiRouteLink(baseUrls, conditions) {
    const { device, location } = conditions;
    if (device && baseUrls[device])
        return baseUrls[device];
    if (location && baseUrls[location])
        return baseUrls[location];
    return baseUrls['default'] || '';
}
