import type { LoaderCallbacks, LoaderContext, LoaderStats, Loader, LoaderConfiguration } from '../types/loader';
declare class XhrLoader implements Loader<LoaderContext> {
    private xhrSetup;
    private requestTimeout?;
    private retryTimeout?;
    private retryDelay;
    private config;
    private callbacks;
    context: LoaderContext;
    private loader;
    stats: LoaderStats;
    constructor(config: any);
    destroy(): void;
    abortInternal(): void;
    abort(): void;
    load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>): void;
    loadInternal(): void;
    readystatechange(): void;
    loadtimeout(): void;
    loadprogress(event: ProgressEvent): void;
    getCacheAge(): number | null;
}
export default XhrLoader;
//# sourceMappingURL=xhr-loader.d.ts.map