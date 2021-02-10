import React, {Component} from 'react';
import _ from 'underscore'

class SearchResult extends Component {
  render(){
    return (
      <div>
        { this.props.flights.map((flight) => <p>date: {flight.date}, flight code: { flight.code }, origin: {flight.origin}, destination: {flight.destination} </p> ) }
      </div>
    )
  }
}

export default SearchResult
