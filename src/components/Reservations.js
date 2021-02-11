import React, {Component} from 'react';
import _ from 'underscore'
import axios from 'axios'

const RESERVATIONS_URL = 'https://flight-search-server.herokuapp.com/reservations.json'

class Reservations extends Component {

  render(){
    return (
      <div>
        <h2>Your Current Reservations</h2>
        { this.props.reservations.map((reservation) => <p>Flight ID: {reservation.flight_id}, Seat Code: {reservation.seat_code}</p>) }
      </div>
    )
  }

}

export default Reservations
