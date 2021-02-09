import React, {Component} from 'react';
import axios from 'axios';

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

class FlightSearch extends Component {
  render() {
    return (
      <div>
         <h1>Flight Search</h1>
         <SearchForm/>
         <SearchResult/>

      </div>
    )
  }
}

export default FlightSearch;
