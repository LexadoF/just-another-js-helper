/**
 * Checks if a given value is considered "empty".
 * 
 * This function evaluates "emptiness" based on the type of the input:
 * - `undefined` or `null`: considered empty.
 * - `string`: considered empty if it contains only whitespace or is an empty string.
 * - `number` and `bigint`: considered empty if the value is `0`.
 * - `boolean`: considered empty if `false`.
 * - `object`: considered empty if it has no properties (i.e., an empty array or object with no keys).
 * - `symbol` and `function`: considered non-empty, this does not evaluate if function body has something
 * 
 * @param value - The value to check for emptiness.
 * @returns `true` if the value is considered empty, otherwise `false`.
 */
export function isEmpty(value: any): boolean {
    if (typeof value === "undefined" || value === null) {
        return true;
    }
    if (typeof value === "string") {
        return value.trim().length === 0;
    }
    if (typeof value === "number" || typeof value === "bigint") {
        return value === 0;
    }
    if (typeof value === "boolean") {
        return !value;
    }
    if (typeof value === "object") {
        if (Array.isArray(value)) {
            return value.length === 0; 
        }
        for (const _ in value) {
            return false;
        }
        return true;
    }
    return false;
}
