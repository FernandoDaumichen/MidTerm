import { PlaylistImporter } from './PlaylistImporter';
import { Playlist } from './Playlist';

import { IImportable } from './IImportable';
import { Songs } from './Songs';

export class LocalImporter implements IImportable {
    
    private _filepath: string;

    constructor(filepath: string){
        this._filepath = filepath;
    }

    loadPlaylist(filepath: string): Playlist {
console.log("your playlist is loading...${filepath}")
const fakePlaylist = {album{}[]} =JSON.parse(this._filepath,'utf-8');
const data= Songs;

//     data.forEach((song: Songs) => {
//         const song = new Songs(song.name, song.artist, song.duration);
//         playlist.addSong(song);
//     });
//     return playlist;
// }
    }
}
}