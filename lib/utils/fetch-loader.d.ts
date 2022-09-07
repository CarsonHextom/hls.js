import { LoaderCallbacks, LoaderContext, Loader, LoaderStats, LoaderConfiguration } from '../types/loader';
export declare function fetchSupported(): boolean;
declare class FetchLoader implements Loader<LoaderContext> {
    private fetchSetup;
    private requestTimeout?;
    private request;
    private response;
    private controller;
    context: LoaderContext;
    private config;
    private callbacks;
    stats: LoaderStats;
    private loader;
    constructor(config: any);
    destroy(): void;
    abortInternal(): void;
    abort(): void;
    load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>): void;
    getCacheAge(): number | null;
    private loadProgressively;
}
export default FetchLoader;
//# sourceMappingURL=fetch-loader.d.ts.map