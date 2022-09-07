import { Fragment, Part } from '../loader/fragment';
import type { ChunkMetadata, TransmuxerResult } from '../types/transmuxer';
import type Hls from '../hls';
import type { PlaylistLevelType } from '../types/loader';
export default class TransmuxerInterface {
    private hls;
    private id;
    private observer;
    private frag;
    private part;
    private worker;
    private onwmsg?;
    private transmuxer;
    private onTransmuxComplete;
    private onFlush;
    constructor(hls: Hls, id: PlaylistLevelType, onTransmuxComplete: (transmuxResult: TransmuxerResult) => void, onFlush: (chunkMeta: ChunkMetadata) => void);
    destroy(): void;
    push(data: ArrayBuffer, initSegmentData: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, frag: Fragment, part: Part | null, duration: number, accurateTimeOffset: boolean, chunkMeta: ChunkMetadata, defaultInitPTS?: number): void;
    flush(chunkMeta: ChunkMetadata): void;
    private handleFlushResult;
    private onWorkerMessage;
    private configureTransmuxer;
    private handleTransmuxComplete;
}
//# sourceMappingURL=transmuxer-interface.d.ts.map