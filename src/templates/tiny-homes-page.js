import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';
import MarkdownContent from '../components/MarkdownContent';

export const TinyHomesPageTemplate = ({
  image,
  title,
  objective,
  who_we_are,
  values,
}) => {
  const heroImage = getImage(image);
  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <div className="box">
        <div className="block">
          <MarkdownContent content={objective} />
        </div>
        <div className="block">
          <MarkdownContent content={who_we_are} />
        </div>
        <div className="block">
          <MarkdownContent content={values} />
        </div>
      </div>
    </div>
  );
};

TinyHomesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  objective: PropTypes.string,
  who_we_are: PropTypes.string,
  values: PropTypes.string,
};

const TinyHomesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TinyHomesPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        objective={frontmatter.objective}
        who_we_are={frontmatter.who_we_are}
        values={frontmatter.values}
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
