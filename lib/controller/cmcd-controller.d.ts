import Hls from '../hls';
import { CMCD, CMCDHeaders } from '../types/cmcd';
import { ComponentAPI } from '../types/component-api';
/**
 * Controller to deal with Common Media Client Data (CMCD)
 * @see https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf
 */
export default class CMCDController implements ComponentAPI {
    private hls;
    private config;
    private media?;
    private sid?;
    private cid?;
    private useHeaders;
    private initialized;
    private starved;
    private buffering;
    private audioBuffer?;
    private videoBuffer?;
    constructor(hls: Hls);
    private registerListeners;
    private unregisterListeners;
    destroy(): void;
    private onMediaAttached;
    private onMediaDetached;
    private onBufferCreated;
    private onWaiting;
    private onPlaying;
    /**
     * Create baseline CMCD data
     */
    private createData;
    /**
     * Apply CMCD data to a request.
     */
    private apply;
    /**
     * Apply CMCD data to a manifest request.
     */
    private applyPlaylistData;
    /**
     * Apply CMCD data to a segment request
     */
    private applyFragmentData;
    /**
     * The CMCD object type.
     */
    private getObjectType;
    /**
     * Get the highest bitrate.
     */
    private getTopBandwidth;
    /**
     * Get the buffer length for a media type in milliseconds
     */
    private getBufferLength;
    /**
     * Create a playlist loader
     */
    private createPlaylistLoader;
    /**
     * Create a playlist loader
     */
    private createFragmentLoader;
    /**
     * Generate a random v4 UUI
     *
     * @returns {string}
     */
    static uuid(): string;
    /**
     * Serialize a CMCD data object according to the rules defined in the
     * section 3.2 of
     * [CTA-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf).
     */
    static serialize(data: CMCD): string;
    /**
     * Convert a CMCD data object to request headers according to the rules
     * defined in the section 2.1 and 3.2 of
     * [CTA-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf).
     */
    static toHeaders(data: CMCD): Partial<CMCDHeaders>;
    /**
     * Convert a CMCD data object to query args according to the rules
     * defined in the section 2.2 and 3.2 of
     * [CTA-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf).
     */
    static toQuery(data: CMCD): string;
    /**
     * Append query args to a uri.
     */
    static appendQueryToUri(uri: any, query: any): any;
}
//# sourceMappingURL=cmcd-controller.d.ts.map