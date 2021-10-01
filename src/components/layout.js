import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import "../styles/global.scss"

{/* Renders a frame for all other pages
Adds the styles, Nav and Footer components to all pages. */}

const Layout = props => {
    return (
      <>
        <Nav />
        <main>{props.children}</main>
        <Footer />
      </>
    )
  }
  
  export default Layout