/**
 * SAMPLE-AES decrypter
 */
import { HlsConfig } from '../config';
import { HlsEventEmitter } from '../events';
import type { AudioSample, AvcSample, AvcSampleUnit, DemuxedVideoTrack, KeyData } from '../types/demuxer';
declare class SampleAesDecrypter {
    private keyData;
    private decrypter;
    constructor(observer: HlsEventEmitter, config: HlsConfig, keyData: KeyData);
    decryptBuffer(encryptedData: Uint8Array | ArrayBuffer, callback: (decryptedData: ArrayBuffer) => void): void;
    private decryptAacSample;
    decryptAacSamples(samples: AudioSample[], sampleIndex: number, callback: () => void): void;
    getAvcEncryptedData(decodedData: Uint8Array): Int8Array;
    getAvcDecryptedUnit(decodedData: Uint8Array, decryptedData: ArrayLike<number> | ArrayBuffer | SharedArrayBuffer): Uint8Array;
    decryptAvcSample(samples: AvcSample[], sampleIndex: number, unitIndex: number, callback: () => void, curUnit: AvcSampleUnit, sync: boolean): void;
    decryptAvcSamples(samples: DemuxedVideoTrack['samples'], sampleIndex: number, unitIndex: number, callback: () => void): void;
}
export default SampleAesDecrypter;
//# sourceMappingURL=sample-aes.d.ts.map