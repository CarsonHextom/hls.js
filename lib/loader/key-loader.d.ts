import { Events } from '../events';
import type Hls from '../hls';
import { Fragment } from './fragment';
import { LoaderStats, LoaderResponse, LoaderContext } from '../types/loader';
import type { NetworkComponentAPI } from '../types/component-api';
import type { KeyLoadingData } from '../types/events';
interface KeyLoaderContext extends LoaderContext {
    frag: Fragment;
}
export default class KeyLoader implements NetworkComponentAPI {
    private hls;
    loaders: {};
    decryptkey: Uint8Array | null;
    decrypturl: string | null;
    constructor(hls: Hls);
    startLoad(startPosition: number): void;
    stopLoad(): void;
    private registerListeners;
    private unregisterListeners;
    private destroyInternalLoaders;
    destroy(): void;
    onKeyLoading(event: Events.KEY_LOADING, data: KeyLoadingData): void;
    loadsuccess(response: LoaderResponse, stats: LoaderStats, context: KeyLoaderContext): void;
    loaderror(response: LoaderResponse, context: KeyLoaderContext): void;
    loadtimeout(stats: LoaderStats, context: KeyLoaderContext): void;
}
export {};
//# sourceMappingURL=key-loader.d.ts.map