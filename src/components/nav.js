import React, { useState } from "react"
import { Link } from "gatsby"
import cubScouts from "../images/cubScouts.gif"

const Nav = () => {
    const [menuToggle, setMenuToggle] = useState(false)
  
    const onClick = () => setMenuToggle(!menuToggle)
  
    return (
      <nav
        className="navbar is-fixed-top is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/">
            <div className="navbar-item">
              <img src={cubScouts} alt="" />
            </div>
          </Link>
          <div
            role="button"
            className={`navbar-burger burger ${menuToggle ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarButton"
            onClick={onClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
  
        <div
          id="navbarButton"
          className={`navbar-menu ${menuToggle ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            {/* <Link to="/blog">
              <a className="navbar-item menu-link">Blog</a>
            </Link> */}
  
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Current</div>
  
              <div className="navbar-dropdown">
                <Link to="/calendar">
                  <div className="navbar-item">Calendar</div>
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Prospective</div>
  
              <div className="navbar-dropdown">
                <Link to="/about">
                  <div className="navbar-item">About</div>
                </Link>
                <Link to="/ranks">
                  <div className="navbar-item">Ranks</div>
                </Link>
                <Link to="/faq">
                  <div className="navbar-item">FAQ</div>
                </Link>
                <hr className="navbar-divider" />
                <Link to="/join">
                  <div className="navbar-item">Join Us</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Nav