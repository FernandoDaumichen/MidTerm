import { Artist } from "./Artist";
import { Songs } from "./Songs";

export class Album implements Album {
    title: string;
    artist: Artist;
    year: number;
    tracks: Songs[];

    constructor(title: string, artist: Artist, year: number) {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.tracks = [];
    }

    addTrack(track: Songs): void {
        this.tracks.push(track);
    }
}
