import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

    this.state = {
      searchResults : [
        {"name": "name1", "artist": "artist1", "album": "album1", "id": "id1"},
        {"name": "name2", "artist": "artist2", "album": "album2", "id": "id2"}
                    ],

      playlistName : "Fümf_dry",
      
      playlistTracks : [
          {"name": "Wieder lila", "artist": "Samra & Capi", "album": "Berlin lebt 2", "id": "id3"}, 
          {"name": "Rolex", "artist": "Samra & Capi", "album": "Berlin lebt 2", "id": "id4"}, 
          {"name": "Tilidin", "artist": "Samra & Capi", "album": "Berlin lebt 2", "id": "id5"}, 
          {"name": "Neymar", "artist": "Capital Bra", "album": "Berlin lebt", "id": "id6"}, 
        ]
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


  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar/> 
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
                          onAdd={this.addTrack}/> 
          <Playlist playlist = {this.state.playlistName}
                    onRemove={this.removeTrack}
                    onNameChange= {this.updatePlaylistName}/>
        </div>
      </div>
    </div>
    )
  }

}
export default App;