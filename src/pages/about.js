import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <div className="about-description">
            <p>
              Hey I'm Flor! I'm a Developer and a Designer. 
              You can find my design work on this website or check out some of my coding projects on 
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/formap"> GitHub</a>. You can check out my opinions on 
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_formap"> Twitter </a> 
              or drop me an email <a href="mailto:tardittimf@gmail.com?Subject=Hello!">here</a>!
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
