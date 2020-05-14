import React, {Component} from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends Component {

    render () {

        return (
    <div className="TrackList">
    {this.props.tracks.map(track => {
    return <Track   track={track}
                    key={track.id}
                    onAdd ={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}
                     />
        })}
    </div>
        );
    }
}

export default Tracklist;
