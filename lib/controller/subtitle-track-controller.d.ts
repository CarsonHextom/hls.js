import { Events } from '../events';
import BasePlaylistController from './base-playlist-controller';
import type { HlsUrlParameters } from '../types/level';
import type Hls from '../hls';
import type { TrackLoadedData, MediaAttachedData, ManifestParsedData, LevelSwitchingData } from '../types/events';
import type { MediaPlaylist } from '../types/media-playlist';
import { ErrorData, LevelLoadingData } from '../types/events';
declare class SubtitleTrackController extends BasePlaylistController {
    private media;
    private tracks;
    private groupId;
    private tracksInGroup;
    private trackId;
    private selectDefaultTrack;
    private queuedDefaultTrack;
    private trackChangeListener;
    private asyncPollTrackChange;
    private useTextTrackPolling;
    private subtitlePollingInterval;
    private _subtitleDisplay;
    constructor(hls: Hls);
    destroy(): void;
    get subtitleDisplay(): boolean;
    set subtitleDisplay(value: boolean);
    private registerListeners;
    private unregisterListeners;
    protected onMediaAttached(event: Events.MEDIA_ATTACHED, data: MediaAttachedData): void;
    private pollTrackChange;
    protected onMediaDetaching(): void;
    protected onManifestLoading(): void;
    protected onManifestParsed(event: Events.MANIFEST_PARSED, data: ManifestParsedData): void;
    protected onSubtitleTrackLoaded(event: Events.SUBTITLE_TRACK_LOADED, data: TrackLoadedData): void;
    protected onLevelLoading(event: Events.LEVEL_LOADING, data: LevelLoadingData): void;
    protected onLevelSwitching(event: Events.LEVEL_SWITCHING, data: LevelSwitchingData): void;
    private switchLevel;
    private findTrackId;
    protected onError(event: Events.ERROR, data: ErrorData): void;
    /** get alternate subtitle tracks list from playlist **/
    get subtitleTracks(): MediaPlaylist[];
    /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
    get subtitleTrack(): number;
    set subtitleTrack(newId: number);
    protected loadPlaylist(hlsUrlParameters?: HlsUrlParameters): void;
    /**
     * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
     * This operates on the DOM textTracks.
     * A value of -1 will disable all subtitle tracks.
     */
    private toggleTrackModes;
    /**
     * This method is responsible for validating the subtitle index and periodically reloading if live.
     * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
     */
    private setSubtitleTrack;
    private onTextTracksChanged;
}
export default SubtitleTrackController;
//# sourceMappingURL=subtitle-track-controller.d.ts.map