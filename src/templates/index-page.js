import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import FullWidthImage from '../components/FullWidthImage';
import FeatureBanner from '../components/FeatureBanner';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  featureBanner,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const pitchImage = getImage(mainpitch.image) || mainpitch.image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <div className="max-width index-mainpitch-container">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <div className="title">{mainpitch.title}</div>
                <div className="subtitle">{mainpitch.description}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FeatureBanner
        enabled={featureBanner.enabled}
        title={featureBanner.title}
        subtitle={featureBanner.subtitle}
      />
      <section className="section">
        <div className="container">
          <Features gridItems={intro.blurbs} />
          <div className="column is-12">
            <h3 className="has-text-weight-semibold is-size-2">Latest News</h3>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/latest_news">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  featureBanner: PropTypes.object,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        featureBanner={frontmatter.featureBanner}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        mainpitch {
          title
          description
        }
        featureBanner {
          title
          subtitle
          enabled
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            id
            link
            feature_type
            text
          }
        }
      }
    }
  }
`;
