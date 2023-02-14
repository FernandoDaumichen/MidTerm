import { IImportable } from './IImportable';
import { Playlist } from './Playlist';
import { Songs } from './Songs';

export class PlaylistImporter implements IImportable{
    playlist: Playlist;
    songs: Songs[] = [];

    constructor(playlist: Playlist){
        this.playlist = playlist;
    }

    importPlaylist(playlist: Playlist): void {
        this.playlist = playlist;
    }
    loadPlaylist(): Playlist {
        return this.playlist;
    }
}