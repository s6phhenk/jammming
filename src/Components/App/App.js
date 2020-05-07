import React, {Component} from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);

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
    if (this.state.playlistTracks.find(Savedtrack => Savedtrack.id === track.id )) {
      return ;
    }
    this.state.playlistTracks.push(track);
    this.setState({playlistTracks : this.state.playlistTracks});

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
      <Playlist playlist = {this.state.playlistName}/>
    </div>
  </div>
</div>
    )

  }

}

export default App;