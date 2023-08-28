import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../../static/img/logo.svg';

import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';

// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string,
// };

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = 'bottom middle',
    photo_credit,
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: 'grid',
          alignItems: 'center',
        }}
      >
        <GatsbyImage
          image={props.img}
          alt="hero image"
          style={{
            gridArea: '1/1',
            // You can set a maximum height for the image, if you wish.
            maxHeight: height,
          }}
          objectPosition={imgPosition}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectratio={3 / 1}
        />

        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: '1/1',
              width: '100%',
              height: '100%',
              position: 'relative',
              // This centers the other elements inside the hero component
              placeItems: 'center',
              display: 'grid',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                // top: '0',
                marginBotton: 0,
                textAlign: 'center',
                height: '15px',
                width: '340px',
                color: 'white',
                fontSize: '10px',
                padding: '0px',
              }}
            >
              {photo_credit}
            </div>
            {/* Any content here will be centered in the component */}
            {/* An addition columns is used to restrict the size of the title card */}
            <div className="columns is-mobile">
              <div className="column"></div>
              <div
                className="box full-width-image-box column is-two-thirds"
                style={{
                  padding: '5%',
                  borderRadius: '25px',
                }}
              >
                <div className="columns level">
                  <div className="column level-item is-one-third">
                    <Link to="/">
                      <div className="full-width-image-logo-container">
                        <img
                          src={logo}
                          alt="HATS LOGO"
                          className=".full-width-image-logo"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="column level-item is-two-thirds full-width-image-headings">
                    <div className="has-text-centered">
                      {title && (
                        <h1 className="has-text-weight-bold is-size-1 full-width-image-title">
                          {title}
                        </h1>
                      )}
                      {subheading && (
                        <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered full-width-image-subheading">
                          {subheading}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
