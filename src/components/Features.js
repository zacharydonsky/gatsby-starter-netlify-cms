import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import IFrameModal from './iframe-modal';
import FeatureCard from './feature-card';
import DonateModal from './donate-form';

const state = {
  // tracks if donate modal 'is' active
  donate_is_modal: false,
};

const FeatureGrid = ({ gridItems }) => {
  return (
    <div>
      <div className="columns is-multiline">
        {gridItems.map((item) => (
          <div key={item.text} className="column is-4">
            <FeatureCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      link: PropTypes.string,
      text: PropTypes.string,
      id: PropTypes.string,
      feature_type: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
