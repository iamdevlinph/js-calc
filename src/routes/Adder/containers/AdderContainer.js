import { connect } from 'react-redux'
import { add } from '../modules/adder'

import Adder from '../components/Adder'

const mapDispatchToProps = {
  add : () => add(1)
}

const mapStateToProps = (state) => ({
  adder : state.adder
})

export default connect(mapStateToProps, mapDispatchToProps)(Adder)
