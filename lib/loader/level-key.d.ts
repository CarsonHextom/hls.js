export declare class LevelKey {
    private _uri;
    method: string | null;
    keyFormat: string | null;
    keyFormatVersions: string | null;
    keyID: string | null;
    key: Uint8Array | null;
    iv: Uint8Array | null;
    static fromURL(baseUrl: string, relativeUrl: string): LevelKey;
    static fromURI(uri: string): LevelKey;
    private constructor();
    get uri(): string | null;
}
//# sourceMappingURL=level-key.d.ts.map