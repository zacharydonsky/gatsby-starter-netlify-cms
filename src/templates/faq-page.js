import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

import FullWidthImage from '../components/FullWidthImage';
import MarkdownContent from '../components/MarkdownContent';

export const FAQPageTemplate = ({ title, image, description }) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <MarkdownContent content={description} className="content" />
      </section>
    </div>
  );
};

FAQPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
};

const FAQPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FAQPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        description={frontmatter.description}
      />
    </Layout>
  );
};

FAQPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FAQPage;

export const faqPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        description
      }
    }
  }
`;
