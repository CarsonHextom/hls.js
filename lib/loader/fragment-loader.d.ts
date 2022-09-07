import { Fragment } from './fragment';
import type { HlsConfig } from '../config';
import type { Part } from './fragment';
import type { FragLoadedData } from '../types/events';
export default class FragmentLoader {
    private readonly config;
    private loader;
    private partLoadTimeout;
    constructor(config: HlsConfig);
    destroy(): void;
    abort(): void;
    load(frag: Fragment, onProgress?: FragmentLoadProgressCallback): Promise<FragLoadedData>;
    loadPart(frag: Fragment, part: Part, onProgress: FragmentLoadProgressCallback): Promise<FragLoadedData>;
    private updateStatsFromPart;
    private resetLoader;
}
export declare class LoadError extends Error {
    readonly data: FragLoadFailResult;
    constructor(data: FragLoadFailResult, ...params: any[]);
}
export interface FragLoadFailResult {
    type: string;
    details: string;
    fatal: boolean;
    frag: Fragment;
    part?: Part;
    response?: {
        code: number;
        text: string;
    };
    networkDetails: any;
}
export declare type FragmentLoadProgressCallback = (result: FragLoadedData) => void;
//# sourceMappingURL=fragment-loader.d.ts.map