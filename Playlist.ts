import { Songs } from "./Songs"; 

export class Playlist {
    name : string;
    songs: Songs[] = [];


    constructor(name: string){
        this.name= name
    }


    addAlbum(album: Songs): void {
        this.songs.push(album);
    }
    addSong(song: Songs): void {
        this.songs.push(song);
    }
    
}