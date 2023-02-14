import { Playlist } from "./Playlist";

export interface IImportable {
    loadPlaylist(filepath: string): Playlist;
  }