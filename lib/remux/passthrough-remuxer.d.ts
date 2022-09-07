import type { Remuxer, RemuxerResult } from '../types/remuxer';
import type { DemuxedAudioTrack, DemuxedMetadataTrack, DemuxedUserdataTrack, PassthroughTrack } from '../types/demuxer';
declare class PassThroughRemuxer implements Remuxer {
    private emitInitSegment;
    private audioCodec?;
    private videoCodec?;
    private initData?;
    private initPTS?;
    private initTracks?;
    private lastEndTime;
    destroy(): void;
    resetTimeStamp(defaultInitPTS: any): void;
    resetNextTimestamp(): void;
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined): void;
    private generateInitSegment;
    remux(audioTrack: DemuxedAudioTrack, videoTrack: PassthroughTrack, id3Track: DemuxedMetadataTrack, textTrack: DemuxedUserdataTrack, timeOffset: number): RemuxerResult;
}
export default PassThroughRemuxer;
//# sourceMappingURL=passthrough-remuxer.d.ts.map