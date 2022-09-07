declare type RawFrame = {
    type: string;
    size: number;
    data: Uint8Array;
};
declare type DecodedFrame<T> = {
    key: string;
    data: T;
    info?: any;
};
export declare type Frame = DecodedFrame<ArrayBuffer | string>;
/**
 * Returns true if an ID3 header can be found at offset in data
 * @param {Uint8Array} data - The data to search in
 * @param {number} offset - The offset at which to start searching
 * @return {boolean} - True if an ID3 header is found
 */
export declare const isHeader: (data: Uint8Array, offset: number) => boolean;
/**
 * Returns true if an ID3 footer can be found at offset in data
 * @param {Uint8Array} data - The data to search in
 * @param {number} offset - The offset at which to start searching
 * @return {boolean} - True if an ID3 footer is found
 */
export declare const isFooter: (data: Uint8Array, offset: number) => boolean;
/**
 * Returns any adjacent ID3 tags found in data starting at offset, as one block of data
 * @param {Uint8Array} data - The data to search in
 * @param {number} offset - The offset at which to start searching
 * @return {Uint8Array | undefined} - The block of data containing any ID3 tags found
 * or *undefined* if no header is found at the starting offset
 */
export declare const getID3Data: (data: Uint8Array, offset: number) => Uint8Array | undefined;
export declare const canParse: (data: Uint8Array, offset: number) => boolean;
/**
 * Searches for the Elementary Stream timestamp found in the ID3 data chunk
 * @param {Uint8Array} data - Block of data containing one or more ID3 tags
 * @return {number | undefined} - The timestamp
 */
export declare const getTimeStamp: (data: Uint8Array) => number | undefined;
/**
 * Returns true if the ID3 frame is an Elementary Stream timestamp frame
 * @param {ID3 frame} frame
 */
export declare const isTimeStampFrame: (frame: Frame) => boolean;
/**
 * Returns an array of ID3 frames found in all the ID3 tags in the id3Data
 * @param {Uint8Array} id3Data - The ID3 data containing one or more ID3 tags
 * @return {ID3.Frame[]} - Array of ID3 frame objects
 */
export declare const getID3Frames: (id3Data: Uint8Array) => Frame[];
export declare const decodeFrame: (frame: RawFrame) => Frame | undefined;
export declare const utf8ArrayToStr: (array: Uint8Array, exitOnNull?: boolean) => string;
export declare const testables: {
    decodeTextFrame: (frame: RawFrame) => DecodedFrame<string> | undefined;
};
export {};
//# sourceMappingURL=id3.d.ts.map