import React from 'react'

import './Calculator.scss'

export const Calculator = (props) => (
  <div className='calculator'>
    <div id='background'>
      <div id='result' />

      <div id='main'>
        <div id='first-rows'>
          <button className='del-bg' id='delete'>Del</button>
          <button value='%' className='btn-style operator opera-bg fall-back'>%</button>
          <button value='+' className='btn-style opera-bg value align operator'>+</button>
        </div>

        <div className='rows'>
          <button value='7' className='btn-style num-bg num first-child'>7</button>
          <button value='8' className='btn-style num-bg num'>8</button>
          <button value='9' className='btn-style num-bg num'>9</button>
          <button value='-' className='btn-style opera-bg operator'>-</button>
        </div>

        <div className='rows'>
          <button value='4' className='btn-style num-bg num first-child'>4</button>
          <button value='5' className='btn-style num-bg num'>5</button>
          <button value='6' className='btn-style num-bg num'>6</button>
          <button value='*' className='btn-style opera-bg operator'>x</button>
        </div>

        <div className='rows'>
          <button value='1' className='btn-style num-bg num first-child'>1</button>
          <button value='2' className='btn-style num-bg num'>2</button>
          <button value='3' className='btn-style num-bg num'>3</button>
          <button value='/' className='btn-style opera-bg operator'>/</button>
        </div>

        <div className='rows'>
          <button value='0' className='num-bg zero' id='delete'>0</button>
          <button value='.' className='btn-style num-bg period fall-back'>.</button>
          <button value='=' id='eqn-bg' className='eqn align'>=</button>
        </div>

      </div>
    </div>
    <span className='calculator__disclaimer'>
      (c) https://codepen.io/ckm100/pen/dPLyjZ
    </span>
  </div>
)

Calculator.propTypes = {
  calculator: React.PropTypes.object.isRequired
}

export default Calculator
