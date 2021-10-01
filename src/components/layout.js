import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import "../styles/global.scss"

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