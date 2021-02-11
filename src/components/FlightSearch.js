import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore'

import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import SelectSeat from './SelectSeat'
import Reservations from './Reservations'

const FLIGHTS_URL = 'https://flight-search-server.herokuapp.com/flights.json'
const PLANES_URL = 'https://flight-search-server.herokuapp.com/planes.json'
const RESERVATIONS_URL = 'https://flight-search-server.herokuapp.com/reservations.json'

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      selectedFlightId: "1",
      selectedPlane: {code:"", rows:[] , columns:[]},
      reservations: []
    }

    const fetchReservations = () => {
        console.log("Hello from fetchReservations")
        axios.get(RESERVATIONS_URL).then((response) => {
          const allReservations = response.data
          const userReservations = _.where(allReservations, {user_id: 1})
          this.setState({ reservations: userReservations})
        });
      };

      fetchReservations();

    this.fetchFlights = this.fetchFlights.bind(this);
    this.fetchPlane = this.fetchPlane.bind(this);
    this.postReservation = this.postReservation.bind(this);

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
    this.setState({selectedFlightId:id});
    const selectedFlight = _.findWhere(this.state.flights, {id: id});
    const selectedPlaneId = selectedFlight.plane_id
    axios.get(PLANES_URL).then((response) => {
      const selectedPlane = _.findWhere(response.data, {id: selectedPlaneId})
      this.setState({selectedPlane:selectedPlane})
    });
  }

  postReservation(seatCode) {
    console.log(seatCode);
    axios.post(RESERVATIONS_URL, {seat_code: seatCode, flight_id: this.state.selectedFlightId, user_id: 1}).then((response) => {
      this.setState({reservations: [...this.state.reservations, response.data]})
    });
  }


  render() {
    return (
      <div>
         <h1>Pam Pacific Airline</h1>
         <h2>Flight Search</h2>
         <SearchForm onSubmit={ this.fetchFlights }/>
         <SearchResult flights={ this.state.flights } onSubmit={ this.fetchPlane }/>
         <SelectSeat plane={ this.state.selectedPlane } onClick={ this.postReservation }/>
         <Reservations onClick={ this.fetchReservations } reservations={ this.state.reservations }/>
      </div>
    )
  }
}

export default FlightSearch;
