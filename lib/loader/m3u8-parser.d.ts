import { LevelDetails } from './level-details';
import { AttrList } from '../utils/attr-list';
import type { MediaPlaylist, AudioGroup, MediaPlaylistType } from '../types/media-playlist';
import type { PlaylistLevelType } from '../types/loader';
import type { LevelParsed } from '../types/level';
export default class M3U8Parser {
    static findGroup(groups: Array<AudioGroup>, mediaGroupId: string): AudioGroup | undefined;
    static convertAVC1ToAVCOTI(codec: any): any;
    static resolve(url: any, baseUrl: any): string;
    static parseMasterPlaylist(string: string, baseurl: string): {
        levels: LevelParsed[];
        sessionData: Record<string, AttrList> | null;
    };
    static parseMasterPlaylistMedia(string: string, baseurl: string, type: MediaPlaylistType, groups?: Array<AudioGroup>): Array<MediaPlaylist>;
    static parseLevelPlaylist(string: string, baseurl: string, id: number, type: PlaylistLevelType, levelUrlId: number): LevelDetails;
}
//# sourceMappingURL=m3u8-parser.d.ts.map