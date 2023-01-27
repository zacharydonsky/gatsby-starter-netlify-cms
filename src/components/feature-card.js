import React from 'react';
// import { useEffect } from 'react';
// import { Script } from 'gatsby';
// import Iframe from 'react-iframe';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

function FeatureCardContainer() {
  const [modal_is_active, set_modal_state] = React.useState(false);

  return (
    <div key={item.text} className="column is-4">
      <div>
        {item.feature_type == 'modal' && (
          <IFrameModal
            iframe_url={item.link}
            id={'modal_' + item.id}
            // is_active initializes to false, but gets toggled by Feature Grid items
            // and by the modal's background and 'x' button
            is_active={modal_is_active}
            click_method={set_modal_state}
          />
        )}
      </div>
      <Link>
        <div
          className="card"
          onClick={() => {
            if (item.id === 'donate-button') {
              // toggle wether donate modal 'is' active
              set_donate_is_modal(!donate_is_modal);
            } else if (item.feature_type === 'modal') {
              console.log('Fart');
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
  );
}

const FeatureCard = class extends React.Component {
  render() {
    return <FeatureCardContainer />;
  }
};

export default FeatureCard;
