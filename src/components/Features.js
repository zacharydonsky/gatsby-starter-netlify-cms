import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import DonateModal from './donate-form';
import { navigate } from 'gatsby';

const state = {
  // tracks if donate modal 'is' active
  donate_is_modal: false,
};

const handleClick = function (item) {};

const FeatureGrid = ({ gridItems }) => {
  const [donate_is_modal, set_donate_is_modal] = React.useState(false);
  const handleClick = (item) => {};
  return (
    <div>
      <DonateModal
        is_modal={donate_is_modal}
        click_method={() => set_donate_is_modal(!donate_is_modal)}
      />
      <div className="columns is-multiline">
        {gridItems.map((item) => (
          <div key={item.text} className="column is-4">
            <Link>
              <div
                className="card"
                onClick={() => {
                  if (item.id === 'donate-button') {
                    // toggle wether donate modal 'is' active
                    set_donate_is_modal(!donate_is_modal);
                  } else {
                    navigate(item.link);
                  }
                }}
              >
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
    })
  ),
};

export default FeatureGrid;
