import BaseStreamController from './base-stream-controller';
import type { NetworkComponentAPI } from '../types/component-api';
import { Events } from '../events';
import type { FragmentTracker } from './fragment-tracker';
import { Fragment } from '../loader/fragment';
import type Hls from '../hls';
import type { LevelDetails } from '../loader/level-details';
import type { FragLoadedData, MediaAttachedData } from '../types/events';
export default class StreamController extends BaseStreamController implements NetworkComponentAPI {
    private audioCodecSwap;
    private gapController;
    private level;
    private _forceStartLoad;
    private altAudio;
    private audioOnly;
    private fragPlaying;
    private onvplaying;
    private onvseeked;
    private fragLastKbps;
    private couldBacktrack;
    private backtrackFragment;
    private audioCodecSwitch;
    private videoBuffer;
    constructor(hls: Hls, fragmentTracker: FragmentTracker);
    private _registerListeners;
    protected _unregisterListeners(): void;
    protected onHandlerDestroying(): void;
    startLoad(startPosition: number): void;
    stopLoad(): void;
    protected doTick(): void;
    protected onTickEnd(): void;
    private doTickIdle;
    protected loadFragment(frag: Fragment, levelDetails: LevelDetails, targetBufferTime: number): void;
    private getAppendedFrag;
    private getBufferedFrag;
    private followingBufferedFrag;
    immediateLevelSwitch(): void;
    /**
     * try to switch ASAP without breaking video playback:
     * in order to ensure smooth but quick level switching,
     * we need to find the next flushable buffer range
     * we should take into account new segment fetch time
     */
    nextLevelSwitch(): void;
    private abortCurrentFrag;
    protected flushMainBuffer(startOffset: number, endOffset: number): void;
    protected onMediaAttached(event: Events.MEDIA_ATTACHED, data: MediaAttachedData): void;
    protected onMediaDetaching(): void;
    private onMediaPlaying;
    private onMediaSeeked;
    private onManifestLoading;
    private onManifestParsed;
    private onLevelLoading;
    private onLevelLoaded;
    protected _handleFragmentLoadProgress(data: FragLoadedData): void;
    private onAudioTrackSwitching;
    private onAudioTrackSwitched;
    private onBufferCreated;
    private onFragBuffered;
    private onError;
    private checkBuffer;
    private onFragLoadEmergencyAborted;
    private onBufferFlushed;
    private onLevelsUpdated;
    swapAudioCodec(): void;
    /**
     * Seeks to the set startPosition if not equal to the mediaElement's current time.
     * @private
     */
    private seekToStartPos;
    private _getAudioCodec;
    private _loadBitrateTestFrag;
    private _handleTransmuxComplete;
    private _bufferInitSegment;
    private getMainFwdBufferInfo;
    private backtrack;
    private checkFragmentChanged;
    get nextLevel(): number;
    get currentFrag(): Fragment | null;
    get currentProgramDateTime(): Date | null;
    get currentLevel(): number;
    get nextBufferedFrag(): Fragment | null;
    get forceStartLoad(): boolean;
}
//# sourceMappingURL=stream-controller.d.ts.map