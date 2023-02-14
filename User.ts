import { Playlist } from "./Playlist";
import { Songs } from "./Songs";

export class User {
  private _username: string;
  private _password: string;
  playlist: Playlist[] = [];
  album: Songs[] = [];

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }

  get Username(): string {
    return this._username;
  }

  set Username(username: string) {
    this._username = username;
  }

  get Password(): string {
    return this._password;
  }

  AddPlaylist(playlist: Playlist): void {
    this.playlist.push(playlist);
  }

  AddAlbum(album: Songs): void {
    this.album.push(album);
  }

getSongs(): any {
    for (let i = 0; i < this.playlist.length; i++) {
        return this.playlist[i].name;
    }
}

  get Albums(): any {
    for (let i = 0; i < this.playlist.length; i++) {
      return this.playlist[i].name;
    }
  }


  get Playlists(): any {
    for (let i = 0; i < this.playlist.length; i++) {
      return this.playlist[i].name;
    }
  }


  addPlaylist(playlist: Playlist): void {
    this.playlist.push(playlist);
  }

}
