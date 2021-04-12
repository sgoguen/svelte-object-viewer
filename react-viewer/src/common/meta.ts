export type ObjectType =
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "symbol"
    | "undefined"
    | "object"
    | "function";

export type RenderType = "simple-value" | "object" | "array";

export function getKeyValues(value: object) {
    if (!value) {
        return [];
    }
    return Object.entries(value).map(([key, value]) => ({ key, value }));
}

export function getCommonKeys(value: unknown[]): string[] {
    if (!value) {
        return [];
    }
    const keys = new Set<string>([]);
    for (const row of value) {
        if(row && typeof row === 'object') {
            for (const key of Object.keys(row)) {
                keys.add(key);
            }
        }
    }
    return Array.from(keys);
}

export function getRenderType(
    value: unknown
): { type: RenderType; value: any; keys?: string[] } {
    const type = typeof value;
    switch (type) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "symbol":
        case "undefined":
            return { type: "simple-value", value: `${value}` };
        case "object":
            if (value === null) return { type: "simple-value", value: "null" };
            if (Array.isArray(value)) {
                const keys = getCommonKeys(value);
                return { type: "array", value, keys };
            }
            return { type: "object", value: value };
        default:
            throw new Error("Unsupported type");
    }
}