import { Events } from './events';
import { ErrorTypes, ErrorDetails } from './errors';
import type { HlsEventEmitter, HlsListeners } from './events';
import type { MediaPlaylist } from './types/media-playlist';
import type { HlsConfig } from './config';
import type { Level } from './types/level';
import type { Fragment } from './loader/fragment';
/**
 * @module Hls
 * @class
 * @constructor
 */
export default class Hls implements HlsEventEmitter {
    private static defaultConfig?;
    readonly config: HlsConfig;
    readonly userConfig: Partial<HlsConfig>;
    private coreComponents;
    private networkControllers;
    private _emitter;
    private _autoLevelCapping;
    private abrController;
    private bufferController;
    private capLevelController;
    private latencyController;
    private levelController;
    private streamController;
    private audioTrackController;
    private subtitleTrackController;
    private emeController;
    private cmcdController;
    private _media;
    private url;
    static get version(): string;
    static isSupported(): boolean;
    static get Events(): typeof Events;
    static get ErrorTypes(): typeof ErrorTypes;
    static get ErrorDetails(): typeof ErrorDetails;
    static get DefaultConfig(): HlsConfig;
    /**
     * @type {HlsConfig}
     */
    static set DefaultConfig(defaultConfig: HlsConfig);
    /**
     * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
     *
     * @constructs Hls
     * @param {HlsConfig} config
     */
    constructor(userConfig?: Partial<HlsConfig>);
    createController(ControllerClass: any, fragmentTracker: any, components: any): any;
    on<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    once<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    removeAllListeners<E extends keyof HlsListeners>(event?: E | undefined): void;
    off<E extends keyof HlsListeners, Context = undefined>(event: E, listener?: HlsListeners[E] | undefined, context?: Context, once?: boolean | undefined): void;
    listeners<E extends keyof HlsListeners>(event: E): HlsListeners[E][];
    emit<E extends keyof HlsListeners>(event: E, name: E, eventObject: Parameters<HlsListeners[E]>[1]): boolean;
    trigger<E extends keyof HlsListeners>(event: E, eventObject: Parameters<HlsListeners[E]>[1]): boolean;
    listenerCount<E extends keyof HlsListeners>(event: E): number;
    /**
     * Dispose of the instance
     */
    destroy(): void;
    /**
     * Attaches Hls.js to a media element
     * @param {HTMLMediaElement} media
     */
    attachMedia(media: HTMLMediaElement): void;
    /**
     * Detach Hls.js from the media
     */
    detachMedia(): void;
    /**
     * Set the source URL. Can be relative or absolute.
     * @param {string} url
     */
    loadSource(url: string): void;
    /**
     * Start loading data from the stream source.
     * Depending on default config, client starts loading automatically when a source is set.
     *
     * @param {number} startPosition Set the start position to stream from
     * @default -1 None (from earliest point)
     */
    startLoad(startPosition?: number): void;
    /**
     * Stop loading of any stream data.
     */
    stopLoad(): void;
    /**
     * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
     */
    swapAudioCodec(): void;
    /**
     * When the media-element fails, this allows to detach and then re-attach it
     * as one call (convenience method).
     *
     * Automatic recovery of media-errors by this process is configurable.
     */
    recoverMediaError(): void;
    removeLevel(levelIndex: any, urlId?: number): void;
    /**
     * @type {Level[]}
     */
    get levels(): Array<Level>;
    /**
     * Index of quality level currently played
     * @type {number}
     */
    get currentLevel(): number;
    /**
     * Set quality level index immediately .
     * This will flush the current buffer to replace the quality asap.
     * That means playback will interrupt at least shortly to re-buffer and re-sync eventually.
     * @type {number} -1 for automatic level selection
     */
    set currentLevel(newLevel: number);
    /**
     * Index of next quality level loaded as scheduled by stream controller.
     * @type {number}
     */
    get nextLevel(): number;
    /**
     * Set quality level index for next loaded data.
     * This will switch the video quality asap, without interrupting playback.
     * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
     * @type {number} -1 for automatic level selection
     */
    set nextLevel(newLevel: number);
    /**
     * Return the quality level of the currently or last (of none is loaded currently) segment
     * @type {number}
     */
    get loadLevel(): number;
    /**
     * Set quality level index for next loaded data in a conservative way.
     * This will switch the quality without flushing, but interrupt current loading.
     * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
     * @type {number} newLevel -1 for automatic level selection
     */
    set loadLevel(newLevel: number);
    /**
     * get next quality level loaded
     * @type {number}
     */
    get nextLoadLevel(): number;
    /**
     * Set quality level of next loaded segment in a fully "non-destructive" way.
     * Same as `loadLevel` but will wait for next switch (until current loading is done).
     * @type {number} level
     */
    set nextLoadLevel(level: number);
    /**
     * Return "first level": like a default level, if not set,
     * falls back to index of first level referenced in manifest
     * @type {number}
     */
    get firstLevel(): number;
    /**
     * Sets "first-level", see getter.
     * @type {number}
     */
    set firstLevel(newLevel: number);
    /**
     * Return start level (level of first fragment that will be played back)
     * if not overrided by user, first level appearing in manifest will be used as start level
     * if -1 : automatic start level selection, playback will start from level matching download bandwidth
     * (determined from download of first segment)
     * @type {number}
     */
    get startLevel(): number;
    /**
     * set  start level (level of first fragment that will be played back)
     * if not overrided by user, first level appearing in manifest will be used as start level
     * if -1 : automatic start level selection, playback will start from level matching download bandwidth
     * (determined from download of first segment)
     * @type {number} newLevel
     */
    set startLevel(newLevel: number);
    /**
     * Get the current setting for capLevelToPlayerSize
     *
     * @type {boolean}
     */
    get capLevelToPlayerSize(): boolean;
    /**
     * set  dynamically set capLevelToPlayerSize against (`CapLevelController`)
     *
     * @type {boolean}
     */
    set capLevelToPlayerSize(shouldStartCapping: boolean);
    /**
     * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
     * @type {number}
     */
    get autoLevelCapping(): number;
    /**
     * get bandwidth estimate
     * @type {number}
     */
    get bandwidthEstimate(): number;
    /**
     * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
     * @type {number}
     */
    set autoLevelCapping(newLevel: number);
    /**
     * True when automatic level selection enabled
     * @type {boolean}
     */
    get autoLevelEnabled(): boolean;
    /**
     * Level set manually (if any)
     * @type {number}
     */
    get manualLevel(): number;
    /**
     * min level selectable in auto mode according to config.minAutoBitrate
     * @type {number}
     */
    get minAutoLevel(): number;
    /**
     * max level selectable in auto mode according to autoLevelCapping
     * @type {number}
     */
    get maxAutoLevel(): number;
    /**
     * next automatically selected quality level
     * @type {number}
     */
    get nextAutoLevel(): number;
    /**
     * this setter is used to force next auto level.
     * this is useful to force a switch down in auto mode:
     * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
     * forced value is valid for one fragment. upon successful frag loading at forced level,
     * this value will be resetted to -1 by ABR controller.
     * @type {number}
     */
    set nextAutoLevel(nextLevel: number);
    /**
     * get the datetime value relative to media.currentTime for the active level Program Date Time if present
     * @type {Date}
     */
    get playingDate(): Date | null;
    /**
     * @type {AudioTrack[]}
     */
    get audioTracks(): Array<MediaPlaylist>;
    /**
     * index of the selected audio track (index in audio track lists)
     * @type {number}
     */
    get audioTrack(): number;
    /**
     * selects an audio track, based on its index in audio track lists
     * @type {number}
     */
    set audioTrack(audioTrackId: number);
    /**
     * get alternate subtitle tracks list from playlist
     * @type {MediaPlaylist[]}
     */
    get subtitleTracks(): Array<MediaPlaylist>;
    /**
     * index of the selected subtitle track (index in subtitle track lists)
     * @type {number}
     */
    get subtitleTrack(): number;
    get media(): HTMLMediaElement | null;
    /**
     * select an subtitle track, based on its index in subtitle track lists
     * @type {number}
     */
    set subtitleTrack(subtitleTrackId: number);
    /**
     * @type {boolean}
     */
    get subtitleDisplay(): boolean;
    /**
     * Enable/disable subtitle display rendering
     * @type {boolean}
     */
    set subtitleDisplay(value: boolean);
    /**
     * get mode for Low-Latency HLS loading
     * @type {boolean}
     */
    get lowLatencyMode(): boolean;
    /**
     * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
     * @type {boolean}
     */
    set lowLatencyMode(mode: boolean);
    /**
     * position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
     * @type {number}
     */
    get liveSyncPosition(): number | null;
    /**
     * estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
     * returns 0 before first playlist is loaded
     * @type {number}
     */
    get latency(): number;
    /**
     * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
     * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
     * returns 0 before first playlist is loaded
     * @type {number}
     */
    get maxLatency(): number;
    /**
     * target distance from the edge as calculated by the latency controller
     * @type {number}
     */
    get targetLatency(): number | null;
    /**
     * the rate at which the edge of the current live playlist is advancing or 1 if there is none
     * @type {number}
     */
    get drift(): number | null;
    /**
     * set to true when startLoad is called before MANIFEST_PARSED event
     * @type {boolean}
     */
    get forceStartLoad(): boolean;
}
export type { MediaPlaylist, ErrorDetails, ErrorTypes, Events, Level, HlsListeners, HlsEventEmitter, HlsConfig, Fragment, };
export type { ABRControllerConfig, BufferControllerConfig, CapLevelControllerConfig, CMCDControllerConfig, EMEControllerConfig, DRMSystemOptions, FPSControllerConfig, FragmentLoaderConfig, FragmentLoaderConstructor, LevelControllerConfig, MP4RemuxerConfig, PlaylistLoaderConfig, PlaylistLoaderConstructor, StreamControllerConfig, LatencyControllerConfig, MetadataControllerConfig, TimelineControllerConfig, TSDemuxerConfig, } from './config';
export type { CuesInterface } from './utils/cues';
export type { MediaKeyFunc, KeySystems } from './utils/mediakeys-helper';
export type { DateRange } from './loader/date-range';
export type { LoadStats } from './loader/load-stats';
export type { LevelKey } from './loader/level-key';
export type { LevelDetails } from './loader/level-details';
export type { SourceBufferName } from './types/buffer';
export type { MetadataSample, MetadataSchema, UserdataSample, } from './types/demuxer';
export type { LevelParsed, LevelAttributes, HlsUrlParameters, HlsSkip, } from './types/level';
export type { PlaylistLevelType, HlsChunkPerformanceTiming, HlsPerformanceTiming, PlaylistContextType, PlaylistLoaderContext, FragmentLoaderContext, Loader, LoaderStats, LoaderContext, LoaderResponse, LoaderConfiguration, LoaderCallbacks, LoaderOnProgress, LoaderOnAbort, LoaderOnError, LoaderOnSuccess, LoaderOnTimeout, HlsProgressivePerformanceTiming, } from './types/loader';
export type { MediaPlaylistType, MainPlaylistType, AudioPlaylistType, SubtitlePlaylistType, } from './types/media-playlist';
export type { Track, TrackSet } from './types/track';
export type { ChunkMetadata } from './types/transmuxer';
export type { BaseSegment, Part, ElementaryStreams, ElementaryStreamTypes, ElementaryStreamInfo, } from './loader/fragment';
export type { TrackLoadingData, TrackLoadedData, AudioTrackLoadedData, AudioTracksUpdatedData, AudioTrackSwitchedData, AudioTrackSwitchingData, BackBufferData, BufferAppendedData, BufferAppendingData, BufferCodecsData, BufferCreatedData, BufferEOSData, BufferFlushedData, BufferFlushingData, CuesParsedData, ErrorData, FPSDropData, FPSDropLevelCappingData, FragBufferedData, FragChangedData, FragDecryptedData, FragLoadedData, FragLoadEmergencyAbortedData, FragLoadingData, FragParsedData, FragParsingInitSegmentData, FragParsingMetadataData, FragParsingUserdataData, InitPTSFoundData, KeyLoadedData, KeyLoadingData, LevelLoadedData, LevelLoadingData, LevelPTSUpdatedData, LevelsUpdatedData, LevelSwitchedData, LevelSwitchingData, LevelUpdatedData, LiveBackBufferData, ManifestLoadedData, ManifestLoadingData, ManifestParsedData, MediaAttachedData, MediaAttachingData, NonNativeTextTrack, NonNativeTextTracksData, SubtitleFragProcessedData, SubtitleTrackLoadedData, SubtitleTracksUpdatedData, SubtitleTrackSwitchData, } from './types/events';
export type { AttrList } from './utils/attr-list';
//# sourceMappingURL=hls.d.ts.map