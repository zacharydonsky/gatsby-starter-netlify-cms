import React from 'react';
import { Script } from 'gatsby';

const DonateForm = class extends React.Component {
  render() {
    return (
      <div>
        <Script
          id="ch_cdn_embed"
          type="text/javascript"
          src="https://www.canadahelps.org/secure/js/cdf_embed.2.js"
          charSet="utf-8"
          data-language="en"
          data-page-id="73921"
          data-root-url="https://www.canadahelps.org"
          data-formtype="0"
          data-cfasync="false"
        />
      </div>
    );
  }
};

const DonateModal = class extends React.Component {
  state = {
    isModal: false,
  };

  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
  };
  // TODO: Make this work
  // should set isModal to false
  // on escape key press
  closeModalOnEscKey = (event) => {
    if (event.keyCode === 27) {
      this.setState({ isModal: false });
    }
  };

  render() {
    // toggle 'is-active' class on modal based on state of 'active' in this class
    const active = this.state.isModal ? 'is-active' : '';
    return (
      <div>
        <div
          id="modal-js-example"
          className={`modal ${active} `}
          onKeyPress={this.closeModalOnEscKey}
        >
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">
              <DonateForm />
            </div>
          </div>
          <div
            className="modal-close is-large"
            aria-label="close"
            onClick={this.handleClick}
          ></div>
        </div>
        <div className="button" onClick={this.handleClick}>
          Donation button
        </div>
      </div>
    );
  }
};

export default DonateModal;
