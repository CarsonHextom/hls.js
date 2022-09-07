/**
 * @module LevelHelper
 * Providing methods dealing with playlist sliding and drift
 * */
import { Fragment, Part } from '../loader/fragment';
import { LevelDetails } from '../loader/level-details';
import type { Level } from '../types/level';
import type { LoaderStats } from '../types/loader';
import type { MediaPlaylist } from '../types/media-playlist';
declare type FragmentIntersection = (oldFrag: Fragment, newFrag: Fragment) => void;
declare type PartIntersection = (oldPart: Part, newPart: Part) => void;
export declare function addGroupId(level: Level, type: string, id: string): void;
export declare function assignTrackIdsByGroup(tracks: MediaPlaylist[]): void;
export declare function updatePTS(fragments: Fragment[], fromIdx: number, toIdx: number): void;
export declare function updateFragPTSDTS(details: LevelDetails | undefined, frag: Fragment, startPTS: number, endPTS: number, startDTS: number, endDTS: number): number;
export declare function mergeDetails(oldDetails: LevelDetails, newDetails: LevelDetails): void;
export declare function mapPartIntersection(oldParts: Part[] | null, newParts: Part[] | null, intersectionFn: PartIntersection): void;
export declare function mapFragmentIntersection(oldDetails: LevelDetails, newDetails: LevelDetails, intersectionFn: FragmentIntersection): void;
export declare function adjustSliding(oldDetails: LevelDetails, newDetails: LevelDetails): void;
export declare function addSliding(details: LevelDetails, start: number): void;
export declare function computeReloadInterval(newDetails: LevelDetails, stats: LoaderStats): number;
export declare function getFragmentWithSN(level: Level, sn: number, fragCurrent: Fragment | null): Fragment | null;
export declare function getPartWith(level: Level, sn: number, partIndex: number): Part | null;
export {};
//# sourceMappingURL=level-helper.d.ts.map