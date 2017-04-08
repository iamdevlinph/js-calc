import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <nav className='nav'>
      <div className='nav-wrapper'>
        <a href='javascript:;' className='brand-logo right waves-effect'>React Calculator</a>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <IndexLink to='/' activeClassName='nav__active' className='waves-effect'>
              About
            </IndexLink>
          </li>
          <li>
            <Link to='/calculator' activeClassName='nav__active' className='waves-effect'>
              Calculator
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
