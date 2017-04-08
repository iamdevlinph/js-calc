import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'adder',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Adder = require('./containers/AdderContainer').default
      const reducer = require('./modules/adder').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'adder', reducer })

      /*  Return getComponent   */
      cb(null, Adder)

    /* Webpack named bundle   */
    }, 'counter')
  }
})
