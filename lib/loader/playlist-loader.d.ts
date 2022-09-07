/**
 * PlaylistLoader - delegate for media manifest/playlist loading tasks. Takes care of parsing media to internal data-models.
 *
 * Once loaded, dispatches events with parsed data-models of manifest/levels/audio/subtitle tracks.
 *
 * Uses loader(s) set in config to do actual internal loading of resource tasks.
 *
 * @module
 *
 */
import type Hls from '../hls';
import { NetworkComponentAPI } from '../types/component-api';
declare class PlaylistLoader implements NetworkComponentAPI {
    private readonly hls;
    private readonly loaders;
    constructor(hls: Hls);
    startLoad(startPosition: number): void;
    stopLoad(): void;
    private registerListeners;
    private unregisterListeners;
    /**
     * Returns defaults or configured loader-type overloads (pLoader and loader config params)
     */
    private createInternalLoader;
    private getInternalLoader;
    private resetInternalLoader;
    /**
     * Call `destroy` on all internal loader instances mapped (one per context type)
     */
    private destroyInternalLoaders;
    destroy(): void;
    private onManifestLoading;
    private onLevelLoading;
    private onAudioTrackLoading;
    private onSubtitleTrackLoading;
    private load;
    private loadsuccess;
    private loaderror;
    private loadtimeout;
    private handleMasterPlaylist;
    private handleTrackOrLevelPlaylist;
    private handleSidxRequest;
    private handleManifestParsingError;
    private handleNetworkError;
    private handlePlaylistLoaded;
}
export default PlaylistLoader;
//# sourceMappingURL=playlist-loader.d.ts.map