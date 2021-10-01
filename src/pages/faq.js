import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundImage from "gatsby-background-image"

const FAQ = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "walking.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

return (
  <Layout>
    <Seo title="Frequently Asked Questions" />
    <BackgroundImage
      Tag="section"
      className="hero"
      fluid={imageData}
      style={{
        width: "100%",
        height: "350px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "100px",
        filter: "grayscale(100%)"
      }}
      />

    <section className="section">
      <div className="container">
        <h1 className="title">Frequently Asked Questions</h1>
        <div className="content">
          <p>
            <strong>Where does Pack 723 meet?</strong>
            <br />
            We meet at Bethel AME Church which is located at 200 N Regan St. in
            Greensboro. The front of the church is at the corners of East Market
            St, Beech St and Regan St, just West of NC A&T. We enter through the
            entrance at the parking lot off of Beech St.
          </p>
          <p>
            <strong>When are the Den Meetings and how long do they run?</strong>
            <br />
            Den meetings usually run on Mondays when school are open. From 7pm
            until around 8pm. We ask that everyone arrive around 6:50pm so that
            we can start on time (and leave on time).
          </p>
          <p>
            <strong>What kind of activities can I expect?</strong>
            <br />
            Leaders and parents arrange a variety of activities, and trips for
            our scouts along with the offical cub scout activities. Den meetings
            are design to have scouts participate in activites in pursuit of
            badges and experience during each meeting.
          </p>
          <p>
            <strong>What is the cost to participate?</strong>
            <br />
            The cost of membership starts at $30 for the year (prorated
            dependant on time of year). Scouts should also have a className A
            uniform purchased from the council office. There are also various
            activities and trips that may have additional cost as well. Our pack
            does fundraisers and popcorn sales to offset the costs of activities
            as much as possible.
          </p>
          <p>
            <strong>Are parents required to attend the den meetings?</strong>
            <br />
            For Lions and Tigers, parents are required to stay for the full den
            meeting. For Wolves and beyond parents do not have to stay at the
            meeting but we strongly encourage full participation. The Scouting
            experience is made much better for everyone when there is active
            parent involvement. Scouting—especially Cub Scouting—is a family
            focused enterprise.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)}

export default FAQ
