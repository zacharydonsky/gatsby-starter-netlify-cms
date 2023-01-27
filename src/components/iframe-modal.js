import React from 'react';
import { useEffect } from 'react';
import { Script } from 'gatsby';
import Iframe from 'react-iframe';

function IframeContainer() {
  const active = this.props.is_active ? 'is-active' : '';
  return (
    <div>
      <div className={`modal ${active}`} id={this.props.id}>
        <div
          className="modal-background"
          onClick={() => this.click_method}
        ></div>
        <div
          className="modal-close is-large"
          aria-label="close"
          onClick={() => this.click_method}
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
const IframeModal = class extends React.Component {
  render() {
    return <IframeContainer />;
  }
};

export default IframeModal;
