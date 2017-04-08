import React from 'react'

export const Calculator = (props) => (
  <div>
    <h2>Calculator</h2>
    <br />
    <h1>Total: {props.calculator.value}</h1>
  </div>
)

Calculator.propTypes = {
  calculator: React.PropTypes.object.isRequired
}

export default Calculator
