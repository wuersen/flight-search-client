import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore'

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

const SERVER_URL = 'http://0e80c05fc6d3.ngrok.io/flights.json'

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      flights: [
        // { id:1, code: '23',  origin: 'Sydney', Destination: 'Melbourne', date: '2021-01-01', plane: '747'},
        // { id:2, code: '34',  origin: 'Melbourne', Destination: 'Sydney', date: '2021-01-01', plane: '737'},
        // { id:3, code: '29',  origin: 'Sydney', Destination: 'Perth', date: '2021-02-02', plane: '747'},
        // { id:4, code: '87',  origin: 'Perth', Destination: 'Sydney', date: '2021-02-02', plane: '737'}
      ],
      reservations:[],
      users: [],
      planes: [],
    }

    const fetchFlights = () => {
        axios.get(SERVER_URL).then((response) => {
          console.log(response)
        // this.setState({secrets: response.data});
        // setTimeout(fetchSecrets, 4000) //recursive alternative to setInterval
        });
      };
    fetchFlights();
  }






  render() {
    return (
      <div>
         <h1>Flight Search</h1>
         <SearchForm />
         <SearchResult/>

      </div>
    )
  }
}

export default FlightSearch;
