import React, {Component} from 'react';

import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

class SearchResults extends Component {

  render () {

    return (
<div className="SearchResults">
  <h2>Results</h2>
  <Tracklist/>
</div>

    )
  }
}

export default SearchResults;
