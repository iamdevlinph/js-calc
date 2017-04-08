import { connect } from 'react-redux'
import { add } from '../modules/calculator'

import Calculator from '../components/Calculator'

const mapDispatchToProps = {
  add : (val) => add(val)
}

const mapStateToProps = (state) => ({
  calculator : state.calculator
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
