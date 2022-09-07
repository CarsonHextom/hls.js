import { Events } from '../events';
import type { Level } from '../types/level';
import type { ManifestParsedData, BufferCodecsData, MediaAttachingData, FPSDropLevelCappingData } from '../types/events';
import StreamController from './stream-controller';
import type { ComponentAPI } from '../types/component-api';
import type Hls from '../hls';
declare class CapLevelController implements ComponentAPI {
    autoLevelCapping: number;
    firstLevel: number;
    media: HTMLVideoElement | null;
    restrictedLevels: Array<number>;
    timer: number | undefined;
    private hls;
    private streamController?;
    clientRect: {
        width: number;
        height: number;
    } | null;
    constructor(hls: Hls);
    setStreamController(streamController: StreamController): void;
    destroy(): void;
    protected registerListeners(): void;
    protected unregisterListener(): void;
    protected onFpsDropLevelCapping(event: Events.FPS_DROP_LEVEL_CAPPING, data: FPSDropLevelCappingData): void;
    protected onMediaAttaching(event: Events.MEDIA_ATTACHING, data: MediaAttachingData): void;
    protected onManifestParsed(event: Events.MANIFEST_PARSED, data: ManifestParsedData): void;
    protected onBufferCodecs(event: Events.BUFFER_CODECS, data: BufferCodecsData): void;
    protected onMediaDetaching(): void;
    detectPlayerSize(): void;
    getMaxLevel(capLevelIndex: number): number;
    startCapping(): void;
    stopCapping(): void;
    getDimensions(): {
        width: number;
        height: number;
    };
    get mediaWidth(): number;
    get mediaHeight(): number;
    get contentScaleFactor(): number;
    static isLevelAllowed(level: number, restrictedLevels?: Array<number>): boolean;
    static getMaxLevelByMediaSize(levels: Array<Level>, width: number, height: number): number;
}
export default CapLevelController;
//# sourceMappingURL=cap-level-controller.d.ts.map