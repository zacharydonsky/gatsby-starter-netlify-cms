import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';
import MarkdownContent from '../components/MarkdownContent';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const TinyHomesPageTemplate = ({
  image,
  diagram,
  title,
  objective,
  who_we_are,
  values,
  tiny_homes_program,
}) => {
  const heroImage = getImage(image);
  const hats_diagram = getImage(diagram);
  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <GatsbyImage
            image={hats_diagram}
            alt="hats client transition diagram"
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
          />
        </div>
      </section>
      <section className="section section--gradient">
        <div className="block">
          <MarkdownContent content={objective} />
        </div>
        <div className="block">
          <MarkdownContent content={who_we_are} />
        </div>
        <div className="block">
          <MarkdownContent content={values} />
        </div>
        <div className="block">
          <MarkdownContent content={tiny_homes_program} />
        </div>
      </section>
    </div>
  );
};

TinyHomesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  diagram: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  objective: PropTypes.string,
  who_we_are: PropTypes.string,
  values: PropTypes.string,
  tiny_homes_program: PropTypes.string,
};

const TinyHomesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TinyHomesPageTemplate
        image={frontmatter.image}
        diagram={frontmatter.diagram}
        title={frontmatter.title}
        objective={frontmatter.objective}
        who_we_are={frontmatter.who_we_are}
        values={frontmatter.values}
        tiny_homes_program={frontmatter.tiny_homes_program}
      />
    </Layout>
  );
};

export default TinyHomesPage;

TinyHomesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const tinyHomesPageQuery = graphql`
  query TinyHomesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        objective
        who_we_are
        values
        tiny_homes_program
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        diagram {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
