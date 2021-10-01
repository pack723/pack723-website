import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageHeader = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          style={{
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "100px",


          }}
        >
          <div className="hero-head"></div>
          <div className="hero-body">
            <div className="container">
              <div className="columns is-mobile">
                <div
                  className="column has-background-grey-lighter"
                  style={{ opacity: ".8", borderRadius: "30px" }}
                >
                  <h1 className="title  has-text-primary is-size-2-desktop">
                    BETHEL PACK 723
                  </h1>
                  <h2 className="subtitle has-text-primary is-size-6">
                    Greensboro, NC
                  </h2>
                </div>
                <div className="column"></div>
              </div>
              <div />
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default ImageHeader
