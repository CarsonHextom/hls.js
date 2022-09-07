import type { LevelParsed } from './level';
export interface AudioGroup {
    id?: string;
    codec?: string;
}
export declare type AudioPlaylistType = 'AUDIO';
export declare type MainPlaylistType = AudioPlaylistType | 'VIDEO';
export declare type SubtitlePlaylistType = 'SUBTITLES' | 'CLOSED-CAPTIONS';
export declare type MediaPlaylistType = MainPlaylistType | SubtitlePlaylistType;
export interface MediaPlaylist extends LevelParsed {
    autoselect: boolean;
    default: boolean;
    forced: boolean;
    groupId?: string;
    id: number;
    instreamId?: string;
    lang?: string;
    name: string;
    type: MediaPlaylistType | 'main';
}
//# sourceMappingURL=media-playlist.d.ts.map