import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import IFrameModal from './iframe-modal';
import DonateModal from './donate-form';
import { navigate } from 'gatsby';

const state = {
  // tracks if donate modal 'is' active
  donate_is_modal: false,
};

const FeatureGrid = ({ gridItems }) => {
  const [donate_is_modal, set_donate_is_modal] = React.useState(false);
  const [modal_is_active, set_modal_state] = React.useState(false);

  return (
    <div>
      <DonateModal
        is_modal={donate_is_modal}
        click_method={() => set_donate_is_modal(!donate_is_modal)}
      />
      {gridItems.map((item) => (
        <div>
          { item.feature_type == "modal" &&   
            <IFrameModal 
              iframe_url={item.link}
              id={"modal_" + item.id}
              // is_active initializes to false, but gets toggled by Feature Grid items
              // and by the modal's background and 'x' button
              is_active={modal_is_active} 
              click_method={set_modal_state}
            />
          }
        </div>
      ))}
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
                  } 
                  else if (item.feature_type === 'modal'){
                    console.log("Fart");
                  }
                  else {
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
      feature_type: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
