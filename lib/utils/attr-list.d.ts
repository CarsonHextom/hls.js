export declare class AttrList {
    [key: string]: any;
    constructor(attrs: string | Record<string, any>);
    decimalInteger(attrName: string): number;
    hexadecimalInteger(attrName: string): Uint8Array | null;
    hexadecimalIntegerAsNumber(attrName: string): number;
    decimalFloatingPoint(attrName: string): number;
    optionalFloat(attrName: string, defaultValue: number): number;
    enumeratedString(attrName: string): string | undefined;
    bool(attrName: string): boolean;
    decimalResolution(attrName: string): {
        width: number;
        height: number;
    } | undefined;
    static parseAttrList(input: string): Record<string, any>;
}
//# sourceMappingURL=attr-list.d.ts.map