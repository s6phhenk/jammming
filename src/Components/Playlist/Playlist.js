import React, {Component} from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


class Playlist extends Component {

  constructor(props) {
    super (props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange (e) {
    const name = e.target.value; 
    // Die Methode aufrufen, die wir in App.js geschrieben haben und den neuen Namen der Playlist übergeben 
    this.props.onNameChange (name);
  }

  render () {
    return (
<div className="Playlist">
  <input defaultValue={'New Playlist'}
    // sobald ein Nutzer etwas in das input Field schreibt, wird die Methode aufgerufen --> event.target.VALUE
          onChange= {this.handleNameChange}/>

  <Tracklist playlistTracks = {this.props.playlistTracks}
              onRemove={this.props.onRemove}
              isRemoval={true}/>
              
  <button className="Playlist-save"
          onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
    )
  }
}

export default Playlist;

