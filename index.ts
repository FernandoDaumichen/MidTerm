
import {Artist} from "./Artist";
import {User} from "./User";
import { Songs } from "./Songs";
import { Album } from "./Album" ;
import { Playlist } from "./Playlist";
import { PlaylistImporter } from "./PlaylistImporter";
import { LocalImporter } from "./LocalImporter";
import { CloudImporter } from "./CloudImporter";


let artist = new Artist("Muse");

let album = new Album("The 2nd Law", artist, 2012);
let song = new Songs("Madness");
album.addTrack(song);


let playlist = new Playlist("Fun songs");
playlist. addAlbum(album);


let LocalPlaylistImporter = new PlaylistImporter(
    new LocalImporter("myPlaylist.txt")
)

let cloudPlaylistImporter = new PlaylistImporter(
new CloudImporter("www.youtube.com")
)

let LocalPlaylist = LocalPlaylistImporter.importPlaylist();
let cloudPlaylist = cloudPlaylistImporter.importPlaylist();

let user = new User("john123", "“password123");

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log("Getting Playlists...");
console.log(user.Playlists());

console.log("Getting Albums...");
console.log(user.Albums());

 

console.log("Getting Songs..")
console.log(user.getSongs());