import React from "react"
import Nav from "./nav"

// Header component for all pages
// Takes Title of page, subtitle, size of hero and url of image as props

const Header = props => {
    const { title, subtitle, size, imageUrl } = props
    return (
      <>
        <Nav />
        <section
          className={`hero ${size}`}
          style={{ background: `url(${imageUrl}) center/cover` }}
        >
          <div className="hero-head"></div>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{title}</h1>
              <h2 className="subtitle">{subtitle}</h2>
            </div>
          </div>
        </section>
      </>
    )
  }

  export default Header