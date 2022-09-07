import type { BufferOperation, SourceBuffers, SourceBufferName } from '../types/buffer';
export default class BufferOperationQueue {
    private buffers;
    private queues;
    constructor(sourceBufferReference: SourceBuffers);
    append(operation: BufferOperation, type: SourceBufferName): void;
    insertAbort(operation: BufferOperation, type: SourceBufferName): void;
    appendBlocker(type: SourceBufferName): Promise<{}>;
    executeNext(type: SourceBufferName): void;
    shiftAndExecuteNext(type: SourceBufferName): void;
    current(type: SourceBufferName): BufferOperation;
}
//# sourceMappingURL=buffer-operation-queue.d.ts.map