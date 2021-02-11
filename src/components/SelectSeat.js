import React, {Component} from 'react';
import '../App.css';

class SelectSeat extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeatCode: ""
    }

    this._saveSeat = this._saveSeat.bind(this);
    this._selectSeat = this._selectSeat.bind(this);
  }

  _saveSeat(event) {
    this.setState({selectedSeatCode: event.target.textContent});
    event.target.style.backgroundColor = "blue";
  }

  _selectSeat(event) {
    this.props.onClick( this.state.selectedSeatCode );
  }

  render(){
    return (
      <div>
        <h2>Select Seat</h2>
        <h3>{ this.props.plane.code }</h3>
        <table>
          <thead>
            { this.props.plane.columns.map( (column) => <th>{column}</th>)}
          </thead>
          <tbody>
            { this.props.plane.rows.slice(1).map( (row) => <tr>
              { this.props.plane.columns.map( (column) => <td onClick={this._saveSeat}>{row}{column}</td>)}
            </tr> ) }
          </tbody>
        </table>
        <button onClick={this._selectSeat}>Submit</button>
      </div>
      )
    }
  }

export default SelectSeat
