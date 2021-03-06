import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p> Oops! We could not find what you were looking for.</p>
    <Link to="/">Go to Home Page</Link>
  </Layout>
)

export default NotFoundPage
