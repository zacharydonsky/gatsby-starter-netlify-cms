import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import FullWidthImage from '../components/FullWidthImage';

import BioList from '../components/bios';
// eslint-disable-next-line

export const AboutPageTemplate = ({
  title,
  image,
  about_us,
  origin_story,
  bios,
}) => {
  const heroImage = getImage(image) || image;
  // const PageContent = contentComponent || Content;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="title">{about_us.title}</div>
        <div className="content">{about_us.description}</div>
        <div className="title">{origin_story.origin_title}</div>
        <div className="content">{origin_story.description}</div>
        <div className="container">
          <BioList bios={bios} />
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  about_us: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  origin_story: PropTypes.shape({
    origin_title: PropTypes.string,
    description: PropTypes.string,
  }),
  bios: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        // contentComponent={HTMLContent}
        title={frontmatter.title}
        image={frontmatter.image}
        about_us={frontmatter.about_us}
        origin_story={frontmatter.origin_story}
        bios={frontmatter.bios}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        about_us {
          title
          description
        }
        origin_story {
          origin_title
          description
        }
        bios {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          name
          position
          text
        }
      }
    }
  }
`;
