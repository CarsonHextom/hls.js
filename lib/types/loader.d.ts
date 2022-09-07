import type { Fragment } from '../loader/fragment';
import type { Part } from '../loader/fragment';
import type { LevelDetails } from '../loader/level-details';
import type { HlsUrlParameters } from './level';
export interface LoaderContext {
    url: string;
    responseType: string;
    headers?: Record<string, string>;
    rangeStart?: number;
    rangeEnd?: number;
    progressData?: boolean;
}
export interface FragmentLoaderContext extends LoaderContext {
    frag: Fragment;
    part: Part | null;
}
export interface LoaderConfiguration {
    maxRetry: number;
    timeout: number;
    retryDelay: number;
    maxRetryDelay: number;
    highWaterMark: number;
}
export interface LoaderResponse {
    url: string;
    data: string | ArrayBuffer;
}
export interface LoaderStats {
    aborted: boolean;
    loaded: number;
    retry: number;
    total: number;
    chunkCount: number;
    bwEstimate: number;
    loading: HlsProgressivePerformanceTiming;
    parsing: HlsPerformanceTiming;
    buffering: HlsProgressivePerformanceTiming;
}
export interface HlsPerformanceTiming {
    start: number;
    end: number;
}
export interface HlsChunkPerformanceTiming extends HlsPerformanceTiming {
    executeStart: number;
    executeEnd: number;
}
export interface HlsProgressivePerformanceTiming extends HlsPerformanceTiming {
    first: number;
}
export declare type LoaderOnSuccess<T extends LoaderContext> = (response: LoaderResponse, stats: LoaderStats, context: T, networkDetails: any) => void;
export declare type LoaderOnProgress<T extends LoaderContext> = (stats: LoaderStats, context: T, data: string | ArrayBuffer, networkDetails: any) => void;
export declare type LoaderOnError<T extends LoaderContext> = (error: {
    code: number;
    text: string;
}, context: T, networkDetails: any) => void;
export declare type LoaderOnTimeout<T extends LoaderContext> = (stats: LoaderStats, context: T, networkDetails: any) => void;
export declare type LoaderOnAbort<T extends LoaderContext> = (stats: LoaderStats, context: T, networkDetails: any) => void;
export interface LoaderCallbacks<T extends LoaderContext> {
    onSuccess: LoaderOnSuccess<T>;
    onError: LoaderOnError<T>;
    onTimeout: LoaderOnTimeout<T>;
    onAbort?: LoaderOnAbort<T>;
    onProgress?: LoaderOnProgress<T>;
}
export interface Loader<T extends LoaderContext> {
    destroy(): void;
    abort(): void;
    load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<T>): void;
    /**
     * `getCacheAge()` is called by hls.js to get the duration that a given object
     * has been sitting in a cache proxy when playing live.  If implemented,
     * this should return a value in seconds.
     *
     * For HTTP based loaders, this should return the contents of the "age" header.
     *
     * @returns time object being lodaded
     */
    getCacheAge?: () => number | null;
    context: T;
    stats: LoaderStats;
}
export declare enum PlaylistContextType {
    MANIFEST = "manifest",
    LEVEL = "level",
    AUDIO_TRACK = "audioTrack",
    SUBTITLE_TRACK = "subtitleTrack"
}
export declare enum PlaylistLevelType {
    MAIN = "main",
    AUDIO = "audio",
    SUBTITLE = "subtitle"
}
export interface PlaylistLoaderContext extends LoaderContext {
    loader?: Loader<PlaylistLoaderContext>;
    type: PlaylistContextType;
    level: number | null;
    id: number | null;
    groupId: string | null;
    isSidxRequest?: boolean;
    levelDetails?: LevelDetails;
    deliveryDirectives: HlsUrlParameters | null;
}
//# sourceMappingURL=loader.d.ts.map