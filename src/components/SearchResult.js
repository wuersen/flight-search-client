import React, {Component} from 'react';
import _ from 'underscore'

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      selectedFlight: ""
    }

    this._handleSelection = this._handleSelection.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleSelection(event) {
    this.setState({selectedFlight: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault(); // prevent the form being submitted to some server.
    this.props.onSubmit( this.state.selectedFlight );
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit }>
        { this.props.flights.map((flight) => <p key={flight.id}><label>date: {flight.date}, flight code: { flight.code }, origin: {flight.origin}, destination: {flight.destination} </label><input type="radio" name="flight" value={flight.id} onClick={this._handleSelection}/></p> ) }
        <input type="submit"/>
      </form>
    )
  }
}

export default SearchResult
