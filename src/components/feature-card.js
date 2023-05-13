import React from 'react';
// import { useEffect } from 'react';
// import { Script } from 'gatsby';
// import Iframe from 'react-iframe';
import IframeModal from './iframe-modal';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

const FeatureCard = class extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;

    this.state = {
      is_active: false,
      is_active_attribute: 'fart',
    };

    this.setModalState = this.setModalState.bind(this);
  }

  setModalState() {
    this.setState({
      is_active: (this.state.is_active = !this.state.is_active),
      is_active_attribute: (this.state.is_active_attribute = this.state
        .is_active
        ? 'is-active'
        : ''),
    });
    console.log('Modal status: ', this.state.is_active);
    console.log('Modal status attribute:', this.state.is_active_attribute);
  }
  render() {
    return (
      <div>
        <div>
          {this.item.feature_type == 'modal' && (
            <IframeModal
              iframe_url={this.item.link}
              is_active={this.state.is_active_attribute}
              set_modal_state={this.setModalState}
            />
          )}
        </div>
        <Link>
          <div
            className="card"
            onClick={() => {
              if (this.item.feature_type == 'modal') {
                this.setModalState();
              } else {
                navigate(this.item.link);
              }
            }}
          >
            <div className="card-image">
              <GatsbyImage
                image={getImage(this.item.image)}
                alt={this.item.link}
              />
            </div>
            <div className="card-content">
              <div className="content">
                <h3>{this.item.text}</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default FeatureCard;
