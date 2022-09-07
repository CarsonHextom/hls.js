import { ManifestLoadedData, LevelLoadedData, TrackSwitchedData, FragLoadedData, ErrorData } from '../types/events';
import { Level } from '../types/level';
import { Events } from '../events';
import BasePlaylistController from './base-playlist-controller';
import type Hls from '../hls';
import type { HlsUrlParameters } from '../types/level';
export default class LevelController extends BasePlaylistController {
    private _levels;
    private _firstLevel;
    private _startLevel?;
    private currentLevelIndex;
    private manualLevelIndex;
    onParsedComplete: Function;
    constructor(hls: Hls);
    private _registerListeners;
    private _unregisterListeners;
    destroy(): void;
    startLoad(): void;
    protected onManifestLoaded(event: Events.MANIFEST_LOADED, data: ManifestLoadedData): void;
    get levels(): Level[] | null;
    get level(): number;
    set level(newLevel: number);
    get manualLevel(): number;
    set manualLevel(newLevel: number);
    get firstLevel(): number;
    set firstLevel(newLevel: number);
    get startLevel(): number;
    set startLevel(newLevel: number);
    protected onError(event: Events.ERROR, data: ErrorData): void;
    /**
     * Switch to a redundant stream if any available.
     * If redundant stream is not available, emergency switch down if ABR mode is enabled.
     */
    private recoverLevel;
    private redundantFailover;
    protected onFragLoaded(event: Events.FRAG_LOADED, { frag }: FragLoadedData): void;
    protected onLevelLoaded(event: Events.LEVEL_LOADED, data: LevelLoadedData): void;
    protected onAudioTrackSwitched(event: Events.AUDIO_TRACK_SWITCHED, data: TrackSwitchedData): void;
    protected loadPlaylist(hlsUrlParameters?: HlsUrlParameters): void;
    get nextLoadLevel(): number;
    set nextLoadLevel(nextLevel: number);
    removeLevel(levelIndex: any, urlId: any): void;
}
//# sourceMappingURL=level-controller.d.ts.map