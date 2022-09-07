/**
 * Make specific properties in T required
 */
export declare type RequiredProperties<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
//# sourceMappingURL=general.d.ts.map