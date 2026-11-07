export function encodePermissionBitmask(
    catalog: readonly string[],
    selected: Iterable<string>,
): string {
    const chosen = new Set(selected);
    let bits = BigInt(0);
    catalog.forEach((entry, index) => {
        if (chosen.has(entry)) bits |= BigInt(1) << BigInt(index);
    });
    return bits.toString();
}

export function decodePermissionBitmask(
    catalog: readonly string[],
    bitmask: string,
): string[] {
    let bits: bigint;
    try {
        bits = BigInt(bitmask);
    } catch {
        return [];
    }
    return catalog.filter(
        (_, index) => ((bits >> BigInt(index)) & BigInt(1)) === BigInt(1),
    );
}
