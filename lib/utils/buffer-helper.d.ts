/**
 * @module BufferHelper
 *
 * Providing methods dealing with buffer length retrieval for example.
 *
 * In general, a helper around HTML5 MediaElement TimeRanges gathered from `buffered` property.
 *
 * Also @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/buffered
 */
declare type BufferTimeRange = {
    start: number;
    end: number;
};
export declare type Bufferable = {
    buffered: TimeRanges;
};
export declare type BufferInfo = {
    len: number;
    start: number;
    end: number;
    nextStart?: number;
};
export declare class BufferHelper {
    /**
     * Return true if `media`'s buffered include `position`
     * @param {Bufferable} media
     * @param {number} position
     * @returns {boolean}
     */
    static isBuffered(media: Bufferable, position: number): boolean;
    static bufferInfo(media: Bufferable | null, pos: number, maxHoleDuration: number): BufferInfo;
    static bufferedInfo(buffered: BufferTimeRange[], pos: number, maxHoleDuration: number): {
        len: number;
        start: number;
        end: number;
        nextStart?: number;
    };
    /**
     * Safe method to get buffered property.
     * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
     */
    static getBuffered(media: Bufferable): TimeRanges;
}
export {};
//# sourceMappingURL=buffer-helper.d.ts.map