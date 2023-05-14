import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function FeatureBanner(props) {
  if (props.enabled) {
    return (
      <div className="max-width feature-banner section">
        <div className="title is-3 has-text-centered">{props.title}</div>
        <div className="title is-6 has-text-centered">{props.subtitle}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

FeatureBanner.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};
