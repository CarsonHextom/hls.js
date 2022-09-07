import { Events } from '../events';
import Hls from '../hls';
import type { FragBufferedData } from '../types/events';
export default class PerformanceMonitor {
    private hls;
    constructor(hls: Hls);
    destroy(): void;
    onFragBuffered(event: Events.FRAG_BUFFERED, data: FragBufferedData): void;
}
//# sourceMappingURL=performance-monitor.d.ts.map