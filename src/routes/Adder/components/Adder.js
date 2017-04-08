import React from 'react'

export const Adder = (props) => (
  <div>
    <h2>Adder: {props.adder.value}</h2>
    <button className='btn btn-default' onClick={() => props.add(5)}>
      Add
    </button>
    <br />
    <br />
    <pre>
      {props.adder.history}
    </pre>
  </div>
)

Adder.propTypes = {
  adder: React.PropTypes.object.isRequired,
  add: React.PropTypes.func.isRequired
}

export default Adder
