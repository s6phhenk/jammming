import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      searchResults : [],
      playlistName : "New Playlist",
      playlistTracks : []
      }
  };

  addTrack = track => {
    let tracks = this.state.playlistTracks ;
    // wenn sich der Titel bereits in der Playlist befindet, returne nichts
    if (tracks.find(Savedtrack => Savedtrack.id === track.id )) {
      return ;
    }
    // ansonsten füge ihn zu der playlist hinzu 
    tracks.push(track);
    //update den state von playlistTracks mit dem neuen array von Objekten 
    this.setState({playlistTracks : tracks});

  }

  removeTrack = track => {
    // to get our array of tracks in the playlist
    let tracks = this.state.playlistTracks ;
    // if the item that was clicked on is equal to the track.id, it gets filtered out of the array 
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    // update the state of the playlistTracks array
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName (name) {
    // update the state of playlistName with the input from the user 
    this.setState({playlistName : name});
  }

  savePlaylist () {
    Spotify.savePlaylist();
    // to get our array of tracks in the playlist
    //let tracks = this.state.playlistTracks ;
    // über das array von Objekten mappen und nennen jedes Objekt track - von jedem track brauchen wir die URI
    //const trackURIs = tracks.map(track => track.uri);
  }

    search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults =>{
      // this.state.searchResults wird nun auf das Ergebnis des Promises der Spotify API gesetzt 
      this.setState({searchResults : searchResults});
    } );
    }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar onSearch={this.search}/> 
          <div className="App-playlist"
                >
          <SearchResults searchResults={this.state.searchResults}
                          onAdd={this.addTrack}/> 
          <Playlist playlist = {this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange= {this.updatePlaylistName}
                    onSave= {this.savePlaylist}/>
        </div>
      </div>
    </div>
    )
  }

}
export default App;