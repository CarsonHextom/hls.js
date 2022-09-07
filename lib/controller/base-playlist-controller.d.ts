import type Hls from '../hls';
import type { NetworkComponentAPI } from '../types/component-api';
import { HlsUrlParameters } from '../types/level';
import type { LevelDetails } from '../loader/level-details';
import type { MediaPlaylist } from '../types/media-playlist';
import type { AudioTrackLoadedData, LevelLoadedData, TrackLoadedData } from '../types/events';
import { ErrorData } from '../types/events';
import { Events } from '../events';
export default class BasePlaylistController implements NetworkComponentAPI {
    protected hls: Hls;
    protected timer: number;
    protected canLoad: boolean;
    protected retryCount: number;
    protected log: (msg: any) => void;
    protected warn: (msg: any) => void;
    constructor(hls: Hls, logPrefix: string);
    destroy(): void;
    protected onError(event: Events.ERROR, data: ErrorData): void;
    protected clearTimer(): void;
    startLoad(): void;
    stopLoad(): void;
    protected switchParams(playlistUri: string, previous?: LevelDetails): HlsUrlParameters | undefined;
    protected loadPlaylist(hlsUrlParameters?: HlsUrlParameters): void;
    protected shouldLoadTrack(track: MediaPlaylist): boolean;
    protected playlistLoaded(index: number, data: LevelLoadedData | AudioTrackLoadedData | TrackLoadedData, previousDetails?: LevelDetails): void;
    private getDeliveryDirectives;
    protected retryLoadingOrFail(errorEvent: ErrorData): boolean;
}
//# sourceMappingURL=base-playlist-controller.d.ts.map