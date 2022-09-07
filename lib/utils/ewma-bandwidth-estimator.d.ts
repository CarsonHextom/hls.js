declare class EwmaBandWidthEstimator {
    private defaultEstimate_;
    private minWeight_;
    private minDelayMs_;
    private slow_;
    private fast_;
    constructor(slow: number, fast: number, defaultEstimate: number);
    update(slow: number, fast: number): void;
    sample(durationMs: number, numBytes: number): void;
    canEstimate(): boolean;
    getEstimate(): number;
    destroy(): void;
}
export default EwmaBandWidthEstimator;
//# sourceMappingURL=ewma-bandwidth-estimator.d.ts.map