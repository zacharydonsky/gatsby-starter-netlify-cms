import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';

import ResearchReportThumbs from '../components/ResearchReportThumbs';
export const ResearchReportsTemplate = ({ title, image, researchReports }) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <ResearchReportThumbs researchReports={researchReports} />
      </section>
    </div>
  );
};

ResearchReportsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ResearchReports: PropTypes.array,
};

const ResearchReports = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ResearchReportsTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        researchReports={frontmatter.researchReports}
      />
    </Layout>
  );
};

ResearchReports.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ResearchReports;

export const researchReportsPageQuery = graphql`
  query researchReportsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        researchReports {
          thumbnail {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          title
          author
          summary
          file
        }
      }
    }
  }
`;
