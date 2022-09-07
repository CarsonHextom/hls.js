import { ElementaryStreamTypes } from '../loader/fragment';
import { PassthroughTrack, UserdataSample } from '../types/demuxer';
export declare const RemuxerTrackIdConfig: {
    video: number;
    audio: number;
    id3: number;
    text: number;
};
export declare function bin2str(data: Uint8Array): string;
export declare function readUint16(buffer: Uint8Array, offset: number): number;
export declare function readUint32(buffer: Uint8Array, offset: number): number;
export declare function readSint32(buffer: Uint8Array, offset: number): number;
export declare function writeUint32(buffer: Uint8Array, offset: number, value: number): void;
export declare function findBox(data: Uint8Array, path: string[]): Uint8Array[];
declare type SidxInfo = {
    earliestPresentationTime: number;
    timescale: number;
    version: number;
    referencesCount: number;
    references: any[];
};
export declare function parseSegmentIndex(sidx: Uint8Array): SidxInfo | null;
/**
 * Parses an MP4 initialization segment and extracts stream type and
 * timescale values for any declared tracks. Timescale values indicate the
 * number of clock ticks per second to assume for time-based values
 * elsewhere in the MP4.
 *
 * To determine the start time of an MP4, you need two pieces of
 * information: the timescale unit and the earliest base media decode
 * time. Multiple timescales can be specified within an MP4 but the
 * base media decode time is always expressed in the timescale from
 * the media header box for the track:
 * ```
 * moov > trak > mdia > mdhd.timescale
 * moov > trak > mdia > hdlr
 * ```
 * @param initSegment {Uint8Array} the bytes of the init segment
 * @return {InitData} a hash of track type to timescale values or null if
 * the init segment is malformed.
 */
export interface InitDataTrack {
    timescale: number;
    id: number;
    codec: string;
}
declare type HdlrType = ElementaryStreamTypes.AUDIO | ElementaryStreamTypes.VIDEO;
export interface InitData extends Array<any> {
    [index: number]: {
        timescale: number;
        type: HdlrType;
        default?: {
            duration: number;
            flags: number;
        };
    } | undefined;
    audio?: InitDataTrack;
    video?: InitDataTrack;
    caption?: InitDataTrack;
}
export declare function parseInitSegment(initSegment: Uint8Array): InitData;
/**
 * Determine the base media decode start time, in seconds, for an MP4
 * fragment. If multiple fragments are specified, the earliest time is
 * returned.
 *
 * The base media decode time can be parsed from track fragment
 * metadata:
 * ```
 * moof > traf > tfdt.baseMediaDecodeTime
 * ```
 * It requires the timescale value from the mdhd to interpret.
 *
 * @param initData {InitData} a hash of track type to timescale values
 * @param fmp4 {Uint8Array} the bytes of the mp4 fragment
 * @return {number} the earliest base media decode start time for the
 * fragment, in seconds
 */
export declare function getStartDTS(initData: InitData, fmp4: Uint8Array): number;
export declare function getDuration(data: Uint8Array, initData: InitData): number;
export declare function computeRawDurationFromSamples(trun: any): number;
export declare function offsetStartDTS(initData: InitData, fmp4: Uint8Array, timeOffset: number): void;
export declare function segmentValidRange(data: Uint8Array): SegmentedRange;
export interface SegmentedRange {
    valid: Uint8Array | null;
    remainder: Uint8Array | null;
}
export declare function appendUint8Array(data1: Uint8Array, data2: Uint8Array): Uint8Array;
export interface IEmsgParsingData {
    schemeIdUri: string;
    value: string;
    timeScale: number;
    presentationTimeDelta?: number;
    presentationTime?: number;
    eventDuration: number;
    id: number;
    payload: Uint8Array;
}
export declare function parseSamples(timeOffset: number, track: PassthroughTrack): UserdataSample[];
export declare function parseSEIMessageFromNALu(unescapedData: Uint8Array, pts: number, samples: UserdataSample[]): void;
export declare function parseEmsg(data: Uint8Array): IEmsgParsingData;
export {};
//# sourceMappingURL=mp4-tools.d.ts.map