import React from 'react'
import logo from "./images/logo/logo.png"
// import logo from './img/home/home-icon-3.png';


const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a style={{paddingLeft: 150}} className="navbar-brand" href="#"
          ><img src={logo}
        /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{paddingRight: 150}}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"
                >Privacy</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Navbar
