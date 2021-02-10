import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore'

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

const SERVER_URL = 'https://flight-search-server.herokuapp.com/flights.json'

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    }

    this.fetchFlights = this.fetchFlights.bind(this);

  }

    fetchFlights (date, origin, destination) {
      console.log(date, origin, destination)
      axios.get(SERVER_URL).then((response) => {
      const allFlights = response.data
      const matchingFlights = _.where(allFlights, {date: date, origin: origin, destination: destination})
      console.log(allFlights)
      console.log(matchingFlights)

      this.setState({ flights: matchingFlights})

      //  this.setState({flights: matchingFlights});
      //  setTimeout(fetchSecrets, 4000) //recursive alternative to setInterval
      });
    };






  render() {
    return (
      <div>
         <h1>Flight Search</h1>
         <SearchForm onSubmit={ this.fetchFlights }/>
         <SearchResult flights={ this.state.flights }/>

      </div>
    )
  }
}

export default FlightSearch;
