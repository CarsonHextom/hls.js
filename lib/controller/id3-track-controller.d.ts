import { Events } from '../events';
import type { BufferFlushingData, FragParsingMetadataData, LevelUpdatedData, MediaAttachedData } from '../types/events';
import type { ComponentAPI } from '../types/component-api';
declare global {
    interface Window {
        WebKitDataCue: VTTCue | void;
    }
}
declare class ID3TrackController implements ComponentAPI {
    private hls;
    private id3Track;
    private media;
    private dateRangeCuesAppended;
    constructor(hls: any);
    destroy(): void;
    private _registerListeners;
    private _unregisterListeners;
    protected onMediaAttached(event: Events.MEDIA_ATTACHED, data: MediaAttachedData): void;
    protected onMediaDetaching(): void;
    private onManifestLoading;
    createTrack(media: HTMLMediaElement): TextTrack;
    getID3Track(textTracks: TextTrackList): TextTrack | void;
    onFragParsingMetadata(event: Events.FRAG_PARSING_METADATA, data: FragParsingMetadataData): void;
    updateId3CueEnds(frameTypesAdded: Record<string, number | null>): void;
    onBufferFlushing(event: Events.BUFFER_FLUSHING, { startOffset, endOffset, type }: BufferFlushingData): void;
    onLevelUpdated(event: Events.LEVEL_UPDATED, { details }: LevelUpdatedData): void;
}
export default ID3TrackController;
//# sourceMappingURL=id3-track-controller.d.ts.map