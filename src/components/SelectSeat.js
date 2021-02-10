import React, {Component} from 'react';
import _ from 'underscore'
import axios from 'axios'



class SelectSeat extends Component {

  render(){
    return (
      <div>
        <h3> { this.props.plane.code } </h3>
        {`code: ${ this.props.plane.code }, rows: ${ this.props.plane.rows }, columns: ${ this.props.plane.columns}`  }
      </div>
    )
  }
}

export default SelectSeat
