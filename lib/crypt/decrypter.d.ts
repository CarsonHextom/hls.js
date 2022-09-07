import type { HlsConfig } from '../config';
import type { HlsEventEmitter } from '../events';
export default class Decrypter {
    private logEnabled;
    private observer;
    private config;
    private removePKCS7Padding;
    private subtle;
    private softwareDecrypter;
    private key;
    private fastAesKey;
    private remainderData;
    private currentIV;
    private currentResult;
    constructor(observer: HlsEventEmitter, config: HlsConfig, { removePKCS7Padding }?: {
        removePKCS7Padding?: boolean | undefined;
    });
    destroy(): void;
    isSync(): boolean;
    flush(): Uint8Array | void;
    reset(): void;
    decrypt(data: Uint8Array | ArrayBuffer, key: ArrayBuffer, iv: ArrayBuffer, callback: (decryptedData: ArrayBuffer) => void): void;
    softwareDecrypt(data: Uint8Array, key: ArrayBuffer, iv: ArrayBuffer): ArrayBuffer | null;
    webCryptoDecrypt(data: Uint8Array, key: ArrayBuffer, iv: ArrayBuffer): Promise<ArrayBuffer>;
    private onWebCryptoError;
    private getValidChunk;
    private logOnce;
}
//# sourceMappingURL=decrypter.d.ts.map