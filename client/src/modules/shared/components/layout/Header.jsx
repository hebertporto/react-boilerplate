import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/">Gerenciador de Atividades</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/task">Task</Link></li>

          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              > Options <span className="caret" /></Link>
              <ul className="dropdown-menu">
                <li><Link to="#">Action</Link></li>
                <li><Link to="#">Another action</Link></li>
                <li><Link to="#">Something else here</Link></li>
                <li role="separator" className="divider" />
                <li className="dropdown-header">Nav header</li>
                <li><Link to="#">Separated link</Link></li>
                <li><Link to="#">One more separated link</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
