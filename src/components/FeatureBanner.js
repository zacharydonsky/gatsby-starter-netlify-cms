import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function FeatureBanner(props) {
  //
  // if feature banner is enabled, render as below
  // else send an empty div, so as not to return null
  if (props.enabled) {
    return (
      <div className="max-width feature-banner section">
        <div className="container">
          <p className="title has-text-centered">{props.title}</p>
          <div className="subtitle pt-6 has-text-centered">
            {props.subtitle}
          </div>
          <div className="section">
            <div className="columns is-centered">
              <a
                className="column is-half button is-large is-link"
                href={props.link}
              >
                {props.link_title}
              </a>
            </div>
          </div>
        </div>
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
