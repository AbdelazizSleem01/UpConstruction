import React from 'react'
import "./Header.css"
import logo from "../../img/logo.png"
import navItem  from '../../nav-item/navItem'


const Header = () => {
  return (


    <nav className="navbar navbar-expand-lg bg-nav">
      <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0 mx-0 mx-lg-5 " href="#">
            <img
              src={logo}
              height="40"
              alt=" Logo"
              loading="lazy"
            />
            Construction
          </a>

          <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <navItem>
              <a className="nav-link b-bottom" href="#">HOME</a>
            </navItem>
            <navItem>
              <a className="nav-link" href="#about">ABOUT</a>
            </navItem>
            <navItem>
              <a className="nav-link" href="#SERVICES">SERVICES</a>
            </navItem>
            <navItem>
              <a className="nav-link" href="#PROJECTS">PROJECTS</a>
            </navItem>
            <navItem>
              <a className="nav-link" href="#CONTACT">CONTACT</a>
            </navItem>
          </ul>
        </div>
    
      </div>
    </nav>

  )
}

export default Header