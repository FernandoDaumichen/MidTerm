import { Album } from "./Album";

export class Artist {
    private _name: string;
    private _albums: Album[] = [];
    constructor(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }
    public get albums(): Album[] {
        return this._albums;
    }
    public addAlbum(album: Album): void {
        this._albums.push(album);
    }
}