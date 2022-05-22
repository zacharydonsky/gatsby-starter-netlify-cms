import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
// const featureImage =  || item.image;
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section">
          <Link to={item.link}>
            <div className="card">
              <div className="card-image">
                <GatsbyImage image={getImage(item.image)} alt={item.link} />
              </div>
              <div className="card-content">
                <div className="content">
                  <h3>{item.text}</h3>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
