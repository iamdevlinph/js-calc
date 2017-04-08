import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      About
    </IndexLink>
    {' · '}
    <Link to='/calculator' activeClassName='route--active'>
      Calculator
    </Link>
  </div>
)

export default Header
