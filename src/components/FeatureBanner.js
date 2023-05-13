import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function FeatureBanner(props) {
  return (
    <div className="max-width feature-banner">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

FeatureBanner.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};
