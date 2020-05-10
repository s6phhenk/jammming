import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

      // Die Komponente braucht ihren eigenen state 
    this.state = {
      term: ""
    };
    
  }


  search () {
    this.props.onSearch (this.state.term);
  }

  handleTermChange (e) {
    // state updaten mit dem input (term) des users 
    this.setState({
      term: e.target.value
    }); 
  }

  render () {
    return (
<div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" 
   // sobald ein Nutzer etwas in das input Field schreibt, wird die Methode aufgerufen und der state geupdated 
          onSearch={this.handleTermChange}/>

  <button className="SearchButton">SEARCH</button>
</div>
    )
  }
}

export default SearchBar;