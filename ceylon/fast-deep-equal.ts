export function equal<T>(a: Partial<T>, b: Partial<T>) {
    if (a === b) return true;
    if ([Object, Array, Date, RegExp].some(t => a instanceof t !== b instanceof t)) return false;

    if (typeof a == "object" && typeof b == "object") {
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            return a.every((v, i) => equal(v, b[i]));
        }
        if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
        if (a instanceof RegExp && b instanceof RegExp) return a.toString() === b.toString();

        let keys = Object.keys(a);
        if (keys.length !== Object.keys(b).length) return false;
        return keys.every(key => b.hasOwnProperty(key) && equal(a[key], b[key]));
    }

    // isInfinite, isNaN
    return a !== a && b !== b;
}
