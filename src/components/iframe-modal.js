import React from 'react';
import { useEffect } from 'react';
import { Script } from 'gatsby';
import Iframe from 'react-iframe';

const IframeModal = class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={`modal ${this.props.is_active}`}>
          <div
            className="modal-background"
            onClick={this.props.set_modal_state}
          ></div>
          <div
            className="modal-close is-large"
            aria-label="close"
            onClick={this.props.set_modal_state}
          ></div>
          <div className="modal-content donate-form">
            <div className="box donate-form">
              <Iframe url={this.props.iframe_url} width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default IframeModal;
