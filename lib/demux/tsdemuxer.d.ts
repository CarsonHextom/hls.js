/**
 * highly optimized TS demuxer:
 * parse PAT, PMT
 * extract PES packet from audio and video PIDs
 * extract AVC/H264 NAL units and AAC/ADTS samples from PES packet
 * trigger the remuxer upon parsing completion
 * it also tries to workaround as best as it can audio codec switch (HE-AAC to AAC and vice versa), without having to restart the MediaSource.
 * it also controls the remuxing process :
 * upon discontinuity or level switch detection, it will also notifies the remuxer so that it can reset its state.
 */
import type { HlsConfig } from '../config';
import type { HlsEventEmitter } from '../events';
import { DemuxedTrack, Demuxer, DemuxerResult, KeyData } from '../types/demuxer';
export interface TypeSupported {
    mpeg: boolean;
    mp3: boolean;
    mp4: boolean;
}
declare class TSDemuxer implements Demuxer {
    private readonly observer;
    private readonly config;
    private typeSupported;
    private sampleAes;
    private pmtParsed;
    private audioCodec?;
    private videoCodec?;
    private _duration;
    private _pmtId;
    private _avcTrack?;
    private _audioTrack?;
    private _id3Track?;
    private _txtTrack?;
    private aacOverFlow;
    private avcSample;
    private remainderData;
    constructor(observer: HlsEventEmitter, config: HlsConfig, typeSupported: TypeSupported);
    static probe(data: Uint8Array): boolean;
    /**
     * Creates a track model internal to demuxer used to drive remuxing input
     *
     * @param type 'audio' | 'video' | 'id3' | 'text'
     * @param duration
     * @return TSDemuxer's internal track model
     */
    static createTrack(type: 'audio' | 'video' | 'id3' | 'text', duration?: number): DemuxedTrack;
    /**
     * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
     * Resets all internal track instances of the demuxer.
     */
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string, videoCodec: string, trackDuration: number): void;
    resetTimeStamp(): void;
    resetContiguity(): void;
    demux(data: Uint8Array, timeOffset: number, isSampleAes?: boolean, flush?: boolean): DemuxerResult;
    flush(): DemuxerResult | Promise<DemuxerResult>;
    private extractRemainingSamples;
    demuxSampleAes(data: Uint8Array, keyData: KeyData, timeOffset: number): Promise<DemuxerResult>;
    private decrypt;
    destroy(): void;
    private parseAVCPES;
    private getLastNalUnit;
    private parseAVCNALu;
    private parseAACPES;
    private parseMPEGPES;
    private parseID3PES;
}
/**
 * remove Emulation Prevention bytes from a RBSP
 */
export declare function discardEPB(data: Uint8Array): Uint8Array;
export default TSDemuxer;
//# sourceMappingURL=tsdemuxer.d.ts.map