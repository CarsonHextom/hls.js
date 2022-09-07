import type { HlsEventEmitter } from '../events';
import { TypeSupported } from '../demux/tsdemuxer';
import type { TransmuxerResult, ChunkMetadata } from '../types/transmuxer';
import type { HlsConfig } from '../config';
import type { LevelKey } from '../loader/level-key';
import type { PlaylistLevelType } from '../types/loader';
export default class Transmuxer {
    private observer;
    private typeSupported;
    private config;
    private vendor;
    private id;
    private demuxer?;
    private remuxer?;
    private decrypter?;
    private probe;
    private decryptionPromise;
    private transmuxConfig;
    private currentTransmuxState;
    constructor(observer: HlsEventEmitter, typeSupported: TypeSupported, config: HlsConfig, vendor: string, id: PlaylistLevelType);
    configure(transmuxConfig: TransmuxConfig): void;
    push(data: ArrayBuffer, decryptdata: LevelKey | null, chunkMeta: ChunkMetadata, state?: TransmuxState): TransmuxerResult | Promise<TransmuxerResult>;
    flush(chunkMeta: ChunkMetadata): TransmuxerResult[] | Promise<TransmuxerResult[]>;
    private flushRemux;
    resetInitialTimestamp(defaultInitPts: number | undefined): void;
    resetContiguity(): void;
    resetInitSegment(initSegmentData: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, trackDuration: number): void;
    destroy(): void;
    private transmux;
    private transmuxUnencrypted;
    private transmuxSampleAes;
    private configureTransmuxer;
    private needsProbing;
    private getDecrypter;
}
export declare function isPromise<T>(p: Promise<T> | any): p is Promise<T>;
export declare class TransmuxConfig {
    audioCodec?: string;
    videoCodec?: string;
    initSegmentData?: Uint8Array;
    duration: number;
    defaultInitPts?: number;
    constructor(audioCodec: string | undefined, videoCodec: string | undefined, initSegmentData: Uint8Array | undefined, duration: number, defaultInitPts?: number);
}
export declare class TransmuxState {
    discontinuity: boolean;
    contiguous: boolean;
    accurateTimeOffset: boolean;
    trackSwitch: boolean;
    timeOffset: number;
    initSegmentChange: boolean;
    constructor(discontinuity: boolean, contiguous: boolean, accurateTimeOffset: boolean, trackSwitch: boolean, timeOffset: number, initSegmentChange: boolean);
}
//# sourceMappingURL=transmuxer.d.ts.map