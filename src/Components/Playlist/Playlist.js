import React, {Component} from 'react';

import Tracklist from '../Tracklist/Tracklist';

import './Playlist.css';

class Playlist extends Component {

  render () {
    return (
<div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  <Tracklist playlistTracks = {this.props.playlistTracks}/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
    )
  }
}

export default Playlist;

