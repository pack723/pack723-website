import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundImage from "gatsby-background-image"


const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "camping-background.jpg" }) {
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
    <Seo title="About Pack723" />
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
      <h1 className="title">About Scouting</h1>
        <p>
          Cub Scouting is a family and home-centered program for boys and girls
          in the first through fifth grades. Fourth and fifth grade (10 years
          old) boys are called Webelos Scouts and participate in more advanced
          activities that begin to prepare them to become Scouts. Cub Scouts get
          to wear a uniform, go to places like summer camp and day camp. They
          build racecars, make new friends and learn all sorts of new and
          exciting things.
        </p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">Mission</h1>
        <p>
          The mission of the Boy Scouts of America is to prepare young people to
          make ethical and moral choices over their lifetimes by instilling in
          them the values of the Scout Oath and Law.
        </p>
        <p>
          There are also other Pack sponsored events, meetings, get togethers
          and trips. Our Pack also makes an effort to participate in service
          projects within the community throughout the year.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1 className="title">Where Do We Meet?</h1>
        <p>
          We normally meet at Bethel AME Church at 200 N Regan Street in Greensboro, North Carolina.  For the time being, much of 
          our communication is through GroupMe.  For up to date information, feel free to reach out the the Cubmaster Darryl Quick.

        </p>
        <div className="columns is-centered pt-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.8513245881604!2d-79.78295808473045!3d36.07273028010485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885318d9a2218d15%3A0x2c96f190afec2159!2s200%20N%20Regan%20St%2C%20Greensboro%2C%20NC%2027401!5e0!3m2!1sen!2sus!4v1633103286486!5m2!1sen!2sus" title="Map of Bethel AME Church 200 N Regan St, Greensboro, NC 27401" width="400" height="300" allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </section>

    {/* <section className="section">
      <div className="container">
        <h1 className="title">How Often Do We Meet?</h1>
        <p>
          Groups of boys of the same age/grade level called Dens generally meet
          every Monday during the school year. Lion Scouts (Kindergarteners)
          meet once a month on their own and sometimes with the Pack with some
          of its activities. Full ranks of Cub Scouting begin with Tiger Scouts
          (first-graders), then progress to Wolf Cub Scouts (second-graders),
          Bear Cub Scouts (third-graders), Webelos Scouts (fourth graders) and
          Arrow of Light (fifth-graders). Den meetings are held at Bethel AME
          Church on 200 N Regan St.
        </p>
        <p>
          There are also other Pack sponsored events, meetings, get togethers
          and trips. Our Pack also makes an effort to participate in service
          projects within the community throughout the year.
        </p>
      </div>
    </section> */}
  </Layout>
  )
}

export default About
