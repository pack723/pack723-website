import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Ranks = ({ data }) => {
  const photoData = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "pledge.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = photoData.desktop.childImageSharp.fluid


return (
  <Layout>
    {/* <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cub Scout Rankings</h1>
        </div>
      </div>
    </section> */}

    <Seo title="Cub Scout Rankings" />
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
        <h1 className="title">Cub Scout Rankings</h1>
        <p>
          Scouts who join our pack are assigned to ranks based on age. Meetings
          and Den meetings are planned around activities being worked on for
          rank advancement. Some activities may include games, handicrafts,
          hikes and other outdoor fun while also preparing for the next pack
          meeting.
        </p>
      </div>
    </section>

    <section style={{ marginBottom: "80px" }}>
      <div className="container">
        <div className="content rank-grid">
          <div>
            <h2>Tiger</h2>
          </div>
          <div style={{ width: "40%" }}>
            <StaticImage
              src="../images/tiger.jpg"
              alt="The Cub Scouts Tiger logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>first graders or 7-year-olds </div>

          <div>
            <h2>Wolf</h2>
          </div>
          <div style={{ width: "40%" }}>
            <StaticImage
              src="../images/wolf.jpg"
              alt="The Cub Scouts Wolf logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Second graders or 8-year-olds </div>

          <div>
            <h2>Bear</h2>
          </div>
          <div style={{ width: "40%" }}>
            <StaticImage
            src="../images/bear.jpg"
              alt="The Cub Scouts Bear logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Third graders or 9-year-olds </div>

          <div>
            <h2>Webelos</h2>
          </div>
          <div style={{ width: "40%" }}>
            <StaticImage
            src="../images/webelos.jpg"
              // fixed={data.webelos.childImageSharp.fixed}
              alt="The Cub Scouts Webelos logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Fourth graders or 9-year-olds </div>

          <div>
            <h2>Arrow of Light</h2>
          </div>
          <div style={{ width: "40%" }}>
            <StaticImage
              src="../images/aol.jpg"
              alt="The Cub Scouts Arrow of Light logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Fifth graders who are about to transition to Boy Scouts </div>
        </div>
      </div>
    </section>
  </Layout>
) }



export default Ranks
