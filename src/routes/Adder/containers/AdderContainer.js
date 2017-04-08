import { connect } from 'react-redux'
import { add } from '../modules/adder'

import Adder from '../components/Adder'

const mapDispatchToProps = {
  add : (val) => add(val)
}

const mapStateToProps = (state) => ({
  adder : state.adder
})

export default connect(mapStateToProps, mapDispatchToProps)(Adder)
