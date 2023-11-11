import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';

export const TinyHomePageTemplate = ({}) => {
  return (
    <div>
      <FullWidthImage img={}/>
      <div>Butts</div>
      Butts
    </div>
  );
};

const TinyHomePage = ({data}) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TinyHomePageTemplate />
    </Layout>
  );
};

export default TinyHomePage;

TinyHomePage.propTypes = {
  data: PropTypes.shape(
    {
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      })
    }
  )
};

export const tinyHomePageQuery = graphql`
  query TinyHomePage($id: String!) {
    markdownRemark(id: { eq: $id}) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
        heading
      }
    }
  }
`
