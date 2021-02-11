import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore'

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import SelectSeat from './SelectSeat'

const FLIGHTS_URL = 'https://flight-search-server.herokuapp.com/flights.json'
const PLANES_URL = 'https://flight-search-server.herokuapp.com/planes.json'

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      selectedPlane: {code:"", rows:[] , columns:[]}
    }

    this.fetchFlights = this.fetchFlights.bind(this);
    this.fetchPlane = this.fetchPlane.bind(this);

  }

  fetchFlights (date, origin, destination) {
      console.log(date, origin, destination)
      axios.get(FLIGHTS_URL).then((response) => {
        const allFlights = response.data
        const matchingFlights = _.where(allFlights, {date: date, origin: origin, destination: destination})
        this.setState({ flights: matchingFlights})
      });
    };

  fetchPlane(flight_id) {
    const id = Number(flight_id);
    const selectedFlight = _.findWhere(this.state.flights, {id: id});
    const selectedPlaneId = selectedFlight.plane_id
    axios.get(PLANES_URL).then((response) => {
      const selectedPlane = _.findWhere(response.data, {id: selectedPlaneId})
      this.setState({selectedPlane:selectedPlane})
    });
  }

  render() {
    return (
      <div>
         <h1>Pam Pacific Airline</h1>
         <h2>Flight Search</h2>
         <SearchForm onSubmit={ this.fetchFlights }/>
         <SearchResult flights={ this.state.flights } onSubmit={ this.fetchPlane }/>
         <h2>Select Seat</h2>
         <SelectSeat plane={ this.state.selectedPlane }/>
      </div>
    )
  }
}

export default FlightSearch;
