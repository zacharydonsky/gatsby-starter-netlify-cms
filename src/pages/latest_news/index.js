import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import FullWidthImage from '../../components/FullWidthImage';

// export default class BlogIndexPage extends React.Component {

// }

// export const BlogIndexPageTemplate = ({ }) =>{

// };
const BlogIndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <FullWidthImage title="Latest News" img={getImage(frontmatter.image)} />
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query BlogIndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "latest-news" } }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
