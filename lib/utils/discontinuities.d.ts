import type { Fragment } from '../loader/fragment';
import type { LevelDetails } from '../loader/level-details';
import type { Level } from '../types/level';
import type { RequiredProperties } from '../types/general';
export declare function findFirstFragWithCC(fragments: Fragment[], cc: number): Fragment | null;
export declare function shouldAlignOnDiscontinuities(lastFrag: Fragment | null, lastLevel: Level, details: LevelDetails): lastLevel is RequiredProperties<Level, 'details'>;
export declare function findDiscontinuousReferenceFrag(prevDetails: LevelDetails, curDetails: LevelDetails): Fragment | undefined;
export declare function adjustSlidingStart(sliding: number, details: LevelDetails): void;
/**
 * Using the parameters of the last level, this function computes PTS' of the new fragments so that they form a
 * contiguous stream with the last fragments.
 * The PTS of a fragment lets Hls.js know where it fits into a stream - by knowing every PTS, we know which fragment to
 * download at any given time. PTS is normally computed when the fragment is demuxed, so taking this step saves us time
 * and an extra download.
 * @param lastFrag
 * @param lastLevel
 * @param details
 */
export declare function alignStream(lastFrag: Fragment | null, lastLevel: Level | null, details: LevelDetails): void;
/**
 * Computes the PTS of a new level's fragments using the difference in Program Date Time from the last level.
 * @param details - The details of the new level
 * @param lastDetails - The details of the last loaded level
 */
export declare function alignPDT(details: LevelDetails, lastDetails: LevelDetails): void;
export declare function alignFragmentByPDTDelta(frag: Fragment, delta: number): void;
/**
 * Ensures appropriate time-alignment between renditions based on PDT. Unlike `alignPDT`, which adjusts
 * the timeline based on the delta between PDTs of the 0th fragment of two playlists/`LevelDetails`,
 * this function assumes the timelines represented in `refDetails` are accurate, including the PDTs,
 * and uses the "wallclock"/PDT timeline as a cross-reference to `details`, adjusting the presentation
 * times/timelines of `details` accordingly.
 * Given the asynchronous nature of fetches and initial loads of live `main` and audio/subtitle tracks,
 * the primary purpose of this function is to ensure the "local timelines" of audio/subtitle tracks
 * are aligned to the main/video timeline, using PDT as the cross-reference/"anchor" that should
 * be consistent across playlists, per the HLS spec.
 * @param details - The details of the rendition you'd like to time-align (e.g. an audio rendition).
 * @param refDetails - The details of the reference rendition with start and PDT times for alignment.
 */
export declare function alignMediaPlaylistByPDT(details: LevelDetails, refDetails: LevelDetails): void;
//# sourceMappingURL=discontinuities.d.ts.map