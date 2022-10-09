import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

import FullWidthImage from '../components/FullWidthImage';
import MarkdownContent from '../components/MarkdownContent';

import BioList from '../components/bios';
// eslint-disable-next-line

export const AboutPageTemplate = ({ title, image, about_us, team_bios }) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="title">{about_us.title}</div>
        <MarkdownContent content={about_us.description} className="content" />
        <div className="title">{team_bios.title}</div>
        <div className="container">
          <BioList bios={team_bios.bios} />
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
  team_bios: PropTypes.shape({
    title: PropTypes.string,
    bios: PropTypes.array,
  }),
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        about_us={frontmatter.about_us}
        team_bios={frontmatter.team_bios}
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
        team_bios {
          title
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
  }
`;
