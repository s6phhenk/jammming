import React, {Component} from 'react';

import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

class SearchResults extends Component {

  render () {

    return (
<div className="SearchResults">
  <h2>Results</h2>
  <Tracklist tracks={this.props.searchResults}
            onAdd = {this.props.onAdd}
            isRemoval = {}/>
</div>

    )
  }
}

export default SearchResults;
