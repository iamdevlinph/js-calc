import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className=''>
    <Header />
    <div className='core-layout__viewport container'>
      <div className='row'>
        <div className='col s2' />
        <div className='col s8'>{children}</div>
        <div className='col s2' />
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
