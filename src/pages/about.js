import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <div className="about-description">
            <p>
              Hola soy Juana; disañadora gráfica de La Plata, Argentina.
              <br />
              <br />
              Soy una profesional proactiva, y de actitud positiva. Pongo mucho
              entusiasmo en inquirir y diseñar la mejor solución posible para
              cualquier desafío que se me presente. Me apasiona trabajar en
              grupos interdisciplinarios; me siento cómoda en ambientes
              dinámicos y me adapto a los cambios.
              <br />
              <br />
              Si querés contactarme, podés encontrarme en{" "}
              <a
                href="https://www.behance.net/juanafranceschini"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>{" "}
              o enviarme un email{" "}
              <a href="mailto:juanafranceschini@gmail.com?Subject=Hola!">
                aquí
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

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
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
