import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from 'gatsby'

const Join = () => {
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
    <Seo title="Joining Pack723" />
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
        <h1 className="title">Join Us</h1>
          <p>
            Pack 723 meets on school nights at Bethel AME Church located near
            downtown Greensboro and North Carolina A&T State University. We are
            located a the corner of East Market St, Beech St and Regan St. We
            meet on Mondays from 7pm to 8pm. You are free to come check out a
            meeting before officially registering.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">Bethel AME Church - Greensboro, NC</h1>
          <h2 className="subtitle">200 N Regan St.</h2>

       
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure className="image is-16by9">
            <iframe
              className="has-ratio"
              width="500"
              height="300"
              src="https://www.youtube.com/embed/skSD7y6fgB4?showinfo=0"
              frameborder="0"
              allowfullscreen
              title="About Cub Scouting"
            ></iframe>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">What are the Costs?</h1>
          <p>
            Our Cub Scout pack receives much our funding from donations and
            popcorn sales. However, there are membership fees in addition to
            various costs for each scout.
          </p>
          <p>
            Required: $33 registration fee every year (may be prorated first
            year based on join date) There are also costs for uniform items,
            scout books and other items.
          </p>
          <p>
            We also have get togethers, trips, and other activities that may
            have a cost associated as well.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">Registration</h1>
          <p>
            When you are ready for your child to register, let our cub master
            know. We will insruct you on the application process and where to go
            from there.
          </p>

          <p>
            If you are considering registering as an adult leader , please use
            the following application:
          </p>

          <ul>
            <li>
              <a href="http://www.scouting.org/filestore/pdf/524-501.pdf">
                Downloadable Adult Application Form
              </a>
            </li>
          </ul>

          <p>
            Every volunteer leader is required to go through a rigorous
            background check and Youth Protection Training process that ensures
            your child will be in a safe and fun program. The Old North State
            Council provides many training opportunities for our leaders to
            enhance the program they deliver, and increase the skills they can
            pass onto our Scouts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">Uniforms</h1>
          <p>
            Cub Scouts are required to purchase a class “A” uniform (official
            blue shirt and insignia) to be worn at official activities and some
            meetings. Uniforms, manuals and other items can be purchased at the
            Old North State Council Boy Scout office. You can find more
            information about the Cub Scout uniform{" "}
            <a href="http://www.scouting.org/scoutsource/CubScouts/Uniform/cubscout.aspx">
              here
            </a>
            .
          </p>
        </div>
      </section>
   
  </Layout>
)}

export default Join
