import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import FullWidthImage from '../components/FullWidthImage';
import { Link } from 'gatsby';

// eslint-disable-next-line
export const DonatePageTemplate = ({
  image,
  title,
  heading,
  description,
  instructions,
  donation_link,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;
  const fullWidthImage = getImage(fullImage) || fullImage;

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column column is-half is-offset-one-quarter">
                <div className="modal column is-4">
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <script
                      id="ch_cdn_embed"
                      type="text/javascript"
                      src="https://www.canadahelps.org/secure/js/cdf_embed.2.js"
                      charSet="utf-8"
                      data-language="en"
                      data-page-id="73921"
                      data-root-url="https://www.canadahelps.org"
                      data-formtype="0"
                      data-cfasync="false"
                    ></script>
                  </div>
                  <button
                    className="modal-close is-large"
                    aria-label="close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

DonatePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  instructions: PropTypes.string,
  donation_link: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const DonatePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <DonatePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        instructions={frontmatter.instructions}
        donation_link={frontmatter.donation_link}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

DonatePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default DonatePage;

export const donatePageQuery = graphql`
  query DonatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        instructions
        description
        donation_link
      }
    }
  }
`;
