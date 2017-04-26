import React, { PropTypes, Component } from 'react'

import './Calculator.scss'

// Calculator.propTypes = {
//   calculator: React.PropTypes.object.isRequired,
// }

// export default Calculator

class Calculator extends Component {
  static propTypes = {
    calculator: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired
  };

  constructor () {
    super()
    this.numberClick = this.handleNumberClick.bind(this)
    this.state = { value: 0 }
  }

  handleNumberClick (value) {
    var currentVal = this.state.value
    var newVal = +(currentVal.toString() + value.toString())
    this.setState({ value: newVal })
  }

  render () {
    return (
      <div className='calculator'>
        <div className='row'>
          <div className='col s3' />
          <div className='col s6'>
            <div id='rim'>
              <div id='keypad'>
                <div className='horizontal display'>
                  <input className='displayPanel' type='text' value={this.state.value} readOnly />
                  <input className='displayPanel__sub' type='text' value='123 + 456 + ' readOnly />
                </div>
                <div className='horizontal '>
                  <div id='keyC' data-rnc-tag='C' className='key control-key'>C</div>
                  <div id='keyPlusMinus' className='key control-key'>±</div>
                  <div id='keyPercent' className='key control-key'>%</div>
                  <div id='keyDivide' className='key operation-key'>/</div>
                </div>
                <div className='horizontal'>
                  <div id='key7' data-rnc-tag='7' className='key' onClick={() => this.numberClick(7)}>7</div>
                  <div id='key8' data-rnc-tag='8' className='key' onClick={() => this.numberClick(8)}>8</div>
                  <div id='key9' data-rnc-tag='9' className='key' onClick={() => this.numberClick(9)}>9</div>
                  <div id='keyMultiply' className='key operation-key'>x</div>
                </div>
                <div className='horizontal'>
                  <div id='key4' data-rnc-tag='4' className='key' onClick={() => this.numberClick(4)}>4</div>
                  <div id='key5' data-rnc-tag='5' className='key' onClick={() => this.numberClick(5)}>5</div>
                  <div id='key6' data-rnc-tag='6' className='key' onClick={() => this.numberClick(6)}>6</div>
                  <div id='keySubtract' className='key operation-key'>-</div>
                </div>
                <div className='horizontal'>
                  <div id='key1' data-rnc-tag='1' className='key' onClick={() => this.numberClick(1)}>1</div>
                  <div id='key2' data-rnc-tag='2' className='key' onClick={() => this.numberClick(2)}>2</div>
                  <div id='key3' data-rnc-tag='3' className='key' onClick={() => this.numberClick(3)}>3</div>
                  <div id='keyAdd' className='key operation-key' onClick={this.props.add}>+</div>
                </div>
                <div className='horizontal'>
                  <div id='key0' data-rnc-tag='0' className='key double-wide'
                    onClick={() => this.numberClick(0)}>0</div>
                  <div id='keyDecimalPoint' data-rnc-tag='.' className='key'>.</div>
                  <div id='keyEquals' className='key operation-key keyEquals'>=</div>
                </div>
              </div>
            </div>
          </div>
          {/* History Panel */}
          <div className='col s3'>
            {/* <div className='history__container'>
          <h2>History</h2>
        </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator
