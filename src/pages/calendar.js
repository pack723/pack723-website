import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Calendar = () => (
  <Layout>
    <SEO title="Calendar" />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Current Calendar</h1>
          <h2 className="subtitle">2019 - 2020</h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <p>
          <strong>
            Cub scout meetings take place every Monday evening in which kids are
            in school unless otherwise communicated.
          </strong>
        </p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="calendar-container">
          <iframe
            title="Calendar for Pack 723"
            width="853"
            height="480"
            src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YmV0aGVsY3Vic2NvdXRzNzIzQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
)

export default Calendar
