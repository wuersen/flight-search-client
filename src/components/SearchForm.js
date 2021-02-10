import React, {Component} from 'react';

class SearchForm extends Component {
  constructor () {
    super();
    this.state = {
      date: '',
      origin: '',
      destination: ''
    }
    this._dateInput = this._dateInput.bind(this);
    this._originInput = this._originInput.bind(this);
    this._destinationInput = this._destinationInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

_dateInput(event) {
  this.setState({
    date: event.target.value
  });
}
_originInput(event) {
  this.setState({
    origin: event.target.value
  });
}
_destinationInput(event) {
  this.setState({
    destination: event.target.value
  });
}
_handleSubmit(event) {
  event.preventDefault();
  this.props.onSubmit(this.state.date, this.state.origin, this.state.destination)
}


   render() {
     return (
       <form onSubmit={this._handleSubmit}>
          <input type="date" placeholder="date"  required onInput={ this._dateInput }/>
          <input type="text" placeholder="origin" required onInput={ this._originInput }/>
          <input type="text" placeholder="destination" required onInput={ this._destinationInput }/>
          <button type="submit">Search flight</button>
      </form>
     )
   }
}

export default SearchForm;
