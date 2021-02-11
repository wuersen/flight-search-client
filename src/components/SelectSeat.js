import React, {Component} from 'react';
import _ from 'underscore'
import axios from 'axios'

const SERVER_URL = 'https://flight-search-server.herokuapp.com/planes.json'

class SelectSeat extends Component {

  render(){
    return (
      <div>
        <h3>{ this.props.plane.code }</h3>
        <table>
          <thead>
            { this.props.plane.columns.map( (column) => <th>{column}</th>)}
          </thead>
          <tbody>
            { this.props.plane.rows.slice(1).map( (row) => <tr>
              { this.props.plane.columns.map( (column) => <td>{row}{column}</td>)}
            </tr> ) }
          </tbody>
        </table>
      </div>
      )
    }
  }

export default SelectSeat
