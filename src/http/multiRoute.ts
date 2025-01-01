export function createMultiRouteLink(baseUrls: Record<string, string>, conditions: { device?: string; location?: string }): string {
    const { device, location } = conditions;

    if (device && baseUrls[device]) return baseUrls[device];
    if (location && baseUrls[location]) return baseUrls[location];

    return baseUrls['default'] || '';
}
