import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Team</Link></li>
        <li><Link to="/createTeam">Create Team</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
