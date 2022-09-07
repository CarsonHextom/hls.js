import type { HlsEventEmitter } from '../events';
import type { DemuxedAudioTrack, AudioFrame } from '../types/demuxer';
declare type AudioConfig = {
    config: number[];
    samplerate: number;
    channelCount: number;
    codec: string;
    manifestCodec: string;
};
declare type FrameHeader = {
    headerLength: number;
    frameLength: number;
};
export declare function getAudioConfig(observer: any, data: Uint8Array, offset: number, audioCodec: string): AudioConfig | void;
export declare function isHeaderPattern(data: Uint8Array, offset: number): boolean;
export declare function getHeaderLength(data: Uint8Array, offset: number): number;
export declare function getFullFrameLength(data: Uint8Array, offset: number): number;
export declare function canGetFrameLength(data: Uint8Array, offset: number): boolean;
export declare function isHeader(data: Uint8Array, offset: number): boolean;
export declare function canParse(data: Uint8Array, offset: number): boolean;
export declare function probe(data: Uint8Array, offset: number): boolean;
export declare function initTrackConfig(track: DemuxedAudioTrack, observer: HlsEventEmitter, data: Uint8Array, offset: number, audioCodec: string): void;
export declare function getFrameDuration(samplerate: number): number;
export declare function parseFrameHeader(data: Uint8Array, offset: number): FrameHeader | void;
export declare function appendFrame(track: DemuxedAudioTrack, data: Uint8Array, offset: number, pts: number, frameIndex: number): AudioFrame;
export {};
//# sourceMappingURL=adts.d.ts.map