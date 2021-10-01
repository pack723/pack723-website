import * as React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageHeader from "../components/imageHeader"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {

  return(
    <Layout>
      <SEO title="Cub Scout Pack 723" />
      <ImageHeader className="hero is-medium" />
            <section className="section mission" style={{ padding: "5rem 1.5rem" }}>
        <div className="container">
          <h2
            className="subtitle is-size-3"
            style={{
              borderLeft: "solid",
              borderColor: "#003f99",
              paddingLeft: "15px",
            }}
          >
            ...to prepare young people to make ethical and moral choices over
            their lifetimes by instilling in them the values of the Scout Oath
            and Law.{" "}
          </h2>
        </div>
      </section>
      <section className="intro">
        <div className="columns">
          <div className="column is-paddingless">
            <div className="has-text-centered  leftInnerColumn has-background-black">
              <h1 className="title has-text-warning is-family-secondary">
                Bethel Cubscout Pack 723
              </h1>
              <h2 className="subtitle has-text-warning">Greensboro, NC</h2>
              <p className="is-size-6">
                Pack 723 provides well-rounded and fun activities with true and
                lasting value for boys and their families in Greensboro. The
                activities are based on more than just having good times; they
                offer the satisfaction of meeting challenges, the confidence
                created by accomplishing goals and the camaraderie of lasting
                friendships. Boys have a blast completing adventures at the same
                time they achieve the aims of scouting – character development,
                participatory citizenship, personal fitness, outdoor skills, and
                leadership and life skills. Many former members of Pack 723 have
                transitioned into Boy Scouts, Eagle Scouts and roles of
                leadership and influencers throughout the community.We invite
                you and your son to join us!
              </p>
            </div>
          </div>
          <div
            className="column is-paddingless intro-image-container"
            style={{ display: `flex`, alignItems: "center" }}
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <StaticImage
              src="../images/trailer.jpg"
              width={800}
              className="intro-image"
              alt="Pack 723 on an activity"
            />
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="columns columns-alt">
          <div
            className="column is-paddingless intro-image-container"
            id="intro-left-image-container"
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="500"
          >
            <StaticImage
              src="../images/sub.jpg"
              width={800}
              className="intro-image"
              alt="Scouts visit the USS Clamagore"
            />
          </div>
          <div className="column is-paddingless">
            <div className="has-text-centered rightInnerColumn has-background-black">
              <h1 className="title has-text-warning">What is Scouting?</h1>
              <p>
                Scouting compliments the school and the family, filling needs
                when necessary. Scouting develops self-knowledge and the need to
                explore, to discover, and to want to know. Scouts discover the
                world beyond the classroom, tapping the skills of others to
                learn and to become well-rounded people.
              </p>

              <h2
                className="subtitle has-text-warning"
                style={{ paddingTop: "30px" }}
              >
                Fun with a Purpose
              </h2>
              <p>
                Through recreation, Scouting achieves its purpose of helping
                young people develop physically, intellectually, socially, and
                spiritually. Scouting is all about building confidence and
                self-esteem, learning important life skills and leadership
                skills, team building, outdoor adventure, education, and fun!
                Scouts learn how to make good choices and to take responsibility
                for their actions so that they are prepared for their adult life
                as independent persons.
              </p>
              <h2
                className="subtitle has-text-warning"
                style={{ paddingTop: "30px" }}
              >
                Principles to Live By
              </h2>
              <p>
                Scouting's Principles describe a simple code of living to which
                all Scouts make a personal commitment through the Scout Promise
                and Law. Scouting helps Scouts learn how to carry out their
                commitment in everyday life.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section scout-law">
        <Fade>
          <h2 className="subtitle">A Scout is...</h2>
        </Fade>

        <div className="grid has-text-centered" style={{ width: "100%" }}>
          <content className="a content grid-item">
            <ul>
              <Fade left cascade>
                <li>Trustworthy</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Loyal</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Helpful</li>
              </Fade>
            </ul>
          </content>
          <div className="b grid-item">
            <StaticImage
              src="../images/campfire.jpg"
              width={800}
              alt="Campfire at the fall family campout"
            />
          </div>
          <content className="c content grid-item">
            <ul>
              <Fade left cascade>
                <li>Friendly</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Courteous</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Kind</li>
              </Fade>
            </ul>
          </content>
          <div className="d grid-item">
            <StaticImage
              src="../images/crafts.jpg"
              alt="Scouts activities include crafts and art"
            />
          </div>
          <content className="e content grid-item">
            <ul>
              <Fade left cascade>
                <li>Obedient</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Cheerful</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Thrifty</li>
              </Fade>
            </ul>
          </content>
          <div className="f grid-item">
            <StaticImage
              src="../images/ship.jpg"
              alt="Fall family campout 2019"
            />
          </div>
          <content className="g content grid-item">
            <ul>
              <Fade left cascade>
                <li>Brave</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Clean</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Reverent</li>
              </Fade>
            </ul>
          </content>
          <div className="h grid-item">
            <StaticImage
              src="../images/walking.jpg"
              alt="Scouts walking on a camping trip"
            />
          </div>
        </div>
      </section>

      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white">Scout Oath</h1>

            <div className="columns">
              <div className="column is-one-third">
                <StaticImage
                  src="../images/pledge.jpg"
                  alt="Scouts on the USS Yorktown"
                />
              </div>
              <div className="column oath">
                <Fade bottom delay={1000}>
                  <p className="is-size-4">
                    "On my honor I will do my best; To do my duty to God and my
                    country and to obey the Scout Law; To help other people at
                    all times; To keep myself physically strong, mentally awake,
                    and morally straight."
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}



export default IndexPage
