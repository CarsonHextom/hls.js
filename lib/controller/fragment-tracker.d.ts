import { Fragment, Part } from '../loader/fragment';
import { PlaylistLevelType } from '../types/loader';
import type { SourceBufferName } from '../types/buffer';
import type { ComponentAPI } from '../types/component-api';
import type Hls from '../hls';
export declare enum FragmentState {
    NOT_LOADED = "NOT_LOADED",
    APPENDING = "APPENDING",
    PARTIAL = "PARTIAL",
    OK = "OK"
}
export declare class FragmentTracker implements ComponentAPI {
    private activeFragment;
    private activeParts;
    private fragments;
    private timeRanges;
    private bufferPadding;
    private hls;
    constructor(hls: Hls);
    private _registerListeners;
    private _unregisterListeners;
    destroy(): void;
    /**
     * Return a Fragment with an appended range that matches the position and levelType.
     * If not found any Fragment, return null
     */
    getAppendedFrag(position: number, levelType: PlaylistLevelType): Fragment | Part | null;
    /**
     * Return a buffered Fragment that matches the position and levelType.
     * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
     * If not found any Fragment, return null
     */
    getBufferedFrag(position: number, levelType: PlaylistLevelType): Fragment | null;
    /**
     * Partial fragments effected by coded frame eviction will be removed
     * The browser will unload parts of the buffer to free up memory for new buffer data
     * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
     */
    detectEvictedFragments(elementaryStream: SourceBufferName, timeRange: TimeRanges, playlistType?: PlaylistLevelType): void;
    /**
     * Checks if the fragment passed in is loaded in the buffer properly
     * Partially loaded fragments will be registered as a partial fragment
     */
    private detectPartialFragments;
    fragBuffered(frag: Fragment): void;
    private getBufferedTimes;
    /**
     * Gets the partial fragment for a certain time
     */
    getPartialFragment(time: number): Fragment | null;
    getState(fragment: Fragment): FragmentState;
    private isTimeBuffered;
    private onFragLoaded;
    private onBufferAppended;
    private onFragBuffered;
    private hasFragment;
    removeFragmentsInRange(start: number, end: number, playlistType: PlaylistLevelType): void;
    removeFragment(fragment: Fragment): void;
    removeAllFragments(): void;
}
//# sourceMappingURL=fragment-tracker.d.ts.map