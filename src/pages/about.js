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
              Hola soy Juana; diseñadora gráfica de La Plata, Argentina.
              Actualmente vivo en Barcelona.
              <br />
              <br />
              Soy una profesional proactiva, y de actitud positiva. Pongo mucho
              entusiasmo en inquirir y diseñar la mejor solución posible para
              cualquier desafío que se me presente. Me apasiona trabajar en
              grupos interdisciplinarios; me siento cómoda en ambientes
              dinámicos y me adapto a los cambios.
              <br />
              <br />
              Si querés conocer más sobre mi experiencia, podés descargarte mi{" "}
              <a
                href="https://github.com/juanafranceschini/juanafranceschini.github.io/raw/code/content/assets/CV_juanafranceschini_ES.pdf"
                download
              >
                CV
              </a>{" "}
              o enviarme un{" "}
              <a href="mailto:juanafranceschini@gmail.com?Subject=Hola!">
                email
              </a>
              !
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
