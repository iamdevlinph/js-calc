import React, { PropTypes, Component } from 'react'

import './Calculator.scss'

// Calculator.propTypes = {
//   calculator: React.PropTypes.object.isRequired,
// }

// export default Calculator

const maxDisplay = 9

class Calculator extends Component {
  static propTypes = {
    calculator: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired
  };

  constructor () {
    super()
    this.state = { value: 0, subDisplay: '', operation: '', operationOnGoing: false }

    this.numberClick = this.numberClick.bind(this)
    this.clearDisplay = this.clearDisplay.bind(this)
    this.isDisplayMax = this.isDisplayMax.bind(this) // check if current display is at 9
    this.operationClick = this.operationClick.bind(this)
    this.updateSubDisplay = this.updateSubDisplay.bind(this)
    this.reset = this.reset.bind(this)
    this.clearSubDisplay = this.clearSubDisplay.bind(this)
  }

  numberClick (value) {
    // only add number if still not yet max
    if (this.isDisplayMax()) {
      this.setState({ value: 'Max Digits' })
      return
    }
    if (this.state.operationOnGoing) {
      this.clearDisplay()
      this.setState({ operationOnGoing: false }, () => {
        this.numberClick(value)
      })
      return
    }
    var currentVal = this.state.value
    var newVal = +(currentVal.toString() + value.toString())
    this.setState({ value: newVal })
  }

  // clear display
  clearDisplay () {
    this.setState({ value: 0 })
  }

  isDisplayMax () {
    var curDisplayLen = this.state.value.toString().length
    return curDisplayLen === maxDisplay
  }

  operationClick (operation) {
    this.setState({ operation: '+' }, () => {
      this.updateSubDisplay()
      this.setState({ operationOnGoing: true })
    })
    switch (operation) {
      case '+':
        this.props.add()
        break
    }
  }

  updateSubDisplay () {
    var curValue = this.state.value.toString()
    var curSubDisplay = this.state.subDisplay
    var operation = ' ' + this.state.operation + ' '
    var toDisplay = ''
    if (this.state.subDisplay) {
      toDisplay = curSubDisplay + curValue + operation
    } else {
      toDisplay = curValue + operation
    }
    this.setState({ subDisplay: toDisplay })
  }

  reset () {
    this.clearDisplay()
    this.clearSubDisplay()
    this.setState({ operationOnGoing: false })
  }

  clearSubDisplay () {
    this.setState({ subDisplay: '' })
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
                  <input className='displayPanel__sub' type='text' value={this.state.subDisplay} readOnly />
                </div>
                <div className='horizontal '>
                  <div id='keyC' data-rnc-tag='C' className='key control-key'
                    onClick={() => this.reset()}>C</div>
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
                  <div id='keyAdd' className='key operation-key' onClick={() => this.operationClick('+')}>+</div>
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
