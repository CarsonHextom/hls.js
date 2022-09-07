import { LevelDetails } from '../loader/level-details';
import { AttrList } from '../utils/attr-list';
export interface LevelParsed {
    attrs: LevelAttributes;
    audioCodec?: string;
    bitrate: number;
    details?: LevelDetails;
    height?: number;
    id?: number;
    level?: number;
    name: string;
    textCodec?: string;
    unknownCodecs?: string[];
    url: string;
    videoCodec?: string;
    width?: number;
}
export interface LevelAttributes extends AttrList {
    AUDIO?: string;
    AUTOSELECT?: string;
    'AVERAGE-BANDWIDTH'?: string;
    BANDWIDTH?: string;
    BYTERANGE?: string;
    'CLOSED-CAPTIONS'?: string;
    CHARACTERISTICS?: string;
    CODECS?: string;
    DEFAULT?: string;
    FORCED?: string;
    'FRAME-RATE'?: string;
    LANGUAGE?: string;
    NAME?: string;
    'PROGRAM-ID'?: string;
    RESOLUTION?: string;
    SUBTITLES?: string;
    TYPE?: string;
    URI?: string;
}
export declare enum HlsSkip {
    No = "",
    Yes = "YES",
    v2 = "v2"
}
export declare function getSkipValue(details: LevelDetails, msn?: number): HlsSkip;
export declare class HlsUrlParameters {
    msn?: number;
    part?: number;
    skip?: HlsSkip;
    constructor(msn?: number, part?: number, skip?: HlsSkip);
    addDirectives(uri: string): string | never;
}
export declare class Level {
    readonly attrs: LevelAttributes;
    readonly audioCodec: string | undefined;
    readonly bitrate: number;
    readonly codecSet: string;
    readonly height: number;
    readonly id: number;
    readonly name: string | undefined;
    readonly videoCodec: string | undefined;
    readonly width: number;
    readonly unknownCodecs: string[] | undefined;
    audioGroupIds?: string[];
    details?: LevelDetails;
    fragmentError: number;
    loadError: number;
    loaded?: {
        bytes: number;
        duration: number;
    };
    realBitrate: number;
    textGroupIds?: string[];
    url: string[];
    private _urlId;
    constructor(data: LevelParsed);
    get maxBitrate(): number;
    get uri(): string;
    get urlId(): number;
    set urlId(value: number);
}
//# sourceMappingURL=level.d.ts.map