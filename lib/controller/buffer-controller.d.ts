import { Events } from '../events';
import type { TrackSet } from '../types/track';
import { SourceBuffers } from '../types/buffer';
import type { LevelUpdatedData, BufferAppendingData, MediaAttachingData, ManifestParsedData, BufferCodecsData, BufferEOSData, BufferFlushingData, FragParsedData } from '../types/events';
import type { ComponentAPI } from '../types/component-api';
import type Hls from '../hls';
export default class BufferController implements ComponentAPI {
    private details;
    private _objectUrl;
    private operationQueue;
    private listeners;
    private hls;
    bufferCodecEventsExpected: number;
    private _bufferCodecEventsTotal;
    media: HTMLMediaElement | null;
    mediaSource: MediaSource | null;
    appendError: number;
    tracks: TrackSet;
    pendingTracks: TrackSet;
    sourceBuffer: SourceBuffers;
    constructor(hls: Hls);
    hasSourceTypes(): boolean;
    destroy(): void;
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    private _initSourceBuffer;
    protected onManifestParsed(event: Events.MANIFEST_PARSED, data: ManifestParsedData): void;
    protected onMediaAttaching(event: Events.MEDIA_ATTACHING, data: MediaAttachingData): void;
    protected onMediaDetaching(): void;
    protected onBufferReset(): void;
    protected onBufferCodecs(event: Events.BUFFER_CODECS, data: BufferCodecsData): void;
    protected appendChangeType(type: any, mimeType: any): void;
    protected onBufferAppending(event: Events.BUFFER_APPENDING, eventData: BufferAppendingData): void;
    protected onBufferFlushing(event: Events.BUFFER_FLUSHING, data: BufferFlushingData): void;
    protected onFragParsed(event: Events.FRAG_PARSED, data: FragParsedData): void;
    private onFragChanged;
    protected onBufferEos(event: Events.BUFFER_EOS, data: BufferEOSData): void;
    protected onLevelUpdated(event: Events.LEVEL_UPDATED, { details }: LevelUpdatedData): void;
    flushBackBuffer(): void;
    /**
     * Update Media Source duration to current level duration or override to Infinity if configuration parameter
     * 'liveDurationInfinity` is set to `true`
     * More details: https://github.com/video-dev/hls.js/issues/355
     */
    private updateMediaElementDuration;
    updateSeekableRange(levelDetails: any): void;
    protected checkPendingTracks(): void;
    protected createSourceBuffers(tracks: TrackSet): void;
    private _onMediaSourceOpen;
    private _onMediaSourceClose;
    private _onMediaSourceEnded;
    private _onSBUpdateStart;
    private _onSBUpdateEnd;
    private _onSBUpdateError;
    private removeExecutor;
    private appendExecutor;
    private blockBuffers;
    private getSourceBufferTypes;
    private addBufferListener;
    private removeBufferListeners;
}
//# sourceMappingURL=buffer-controller.d.ts.map