import React from 'react'

export const Adder = (props) => (
  <div>
    <h2>Adder: {props.adder}</h2>
    <button className='btn btn-default' onClick={props.add}>
      Add
    </button>
  </div>
)

Adder.propTypes = {
  adder: React.PropTypes.number.isRequired,
  add: React.PropTypes.func.isRequired
}

export default Adder
