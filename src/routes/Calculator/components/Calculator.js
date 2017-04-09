import React from 'react'

import './Calculator.scss'

export const Calculator = (props) => (
  <div className='calculator'>
    <div className='row'>
      <div className='col s6'>
        <div className='calculator__container'>
          <table className='calculator__table'>
            <tbody>
              <tr>
                <td colSpan='4'>
                  <span className='calculator__result'>CALCULATOR RESULT</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn single'>DEL</button>
                </td>
                <td>
                  <button className='btn single'>/</button>
                </td>
                <td>
                  <button className='btn single'>*</button>
                </td>
                <td>
                  <button className='btn single'>-</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn single'>7</button>
                </td>
                <td>
                  <button className='btn single'>8</button>
                </td>
                <td>
                  <button className='btn single'>9</button>
                </td>
                <td rowSpan='2'>
                  <button className='btn double__row'>+</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn single'>4</button>
                </td>
                <td>
                  <button className='btn single'>5</button>
                </td>
                <td>
                  <button className='btn single'>6</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn single'>1</button>
                </td>
                <td>
                  <button className='btn single'>2</button>
                </td>
                <td>
                  <button className='btn single'>3</button>
                </td>
                <td rowSpan='2'>
                  <button className='btn double__row'>=</button>
                </td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <button className='btn double__col'>0</button>
                </td>
                <td>
                  <button className='btn single'>.</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* History Panel */}
      <div className='col s6'>
        <div className='history__container'>
          <h2>History</h2>
        </div>
      </div>
    </div>
  </div>
)

Calculator.propTypes = {
  calculator: React.PropTypes.object.isRequired
}

export default Calculator
