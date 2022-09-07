import EwmaBandWidthEstimator from '../utils/ewma-bandwidth-estimator';
import { Events } from '../events';
import type Hls from '../hls';
import type { FragLoadingData, FragLoadedData, FragBufferedData, ErrorData, LevelLoadedData } from '../types/events';
import type { ComponentAPI } from '../types/component-api';
declare class AbrController implements ComponentAPI {
    protected hls: Hls;
    private lastLoadedFragLevel;
    private _nextAutoLevel;
    private timer?;
    private onCheck;
    private fragCurrent;
    private partCurrent;
    private bitrateTestDelay;
    readonly bwEstimator: EwmaBandWidthEstimator;
    constructor(hls: Hls);
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    destroy(): void;
    protected onFragLoading(event: Events.FRAG_LOADING, data: FragLoadingData): void;
    protected onLevelLoaded(event: Events.LEVEL_LOADED, data: LevelLoadedData): void;
    private _abandonRulesCheck;
    protected onFragLoaded(event: Events.FRAG_LOADED, { frag, part }: FragLoadedData): void;
    protected onFragBuffered(event: Events.FRAG_BUFFERED, data: FragBufferedData): void;
    protected onError(event: Events.ERROR, data: ErrorData): void;
    clearTimer(): void;
    get nextAutoLevel(): number;
    private getNextABRAutoLevel;
    private findBestLevel;
    set nextAutoLevel(nextLevel: number);
}
export default AbrController;
//# sourceMappingURL=abr-controller.d.ts.map