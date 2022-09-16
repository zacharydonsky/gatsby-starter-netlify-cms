import React from 'react';
import { useEffect } from 'react';
import { Script } from 'gatsby';
import Iframe from 'react-iframe';

// const DonateForm = class extends React.Component {
//   render() {
//     return (
//       <div>

//     );
//   }
// };

// const useScript = async (resourceUrl) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = false;
//     script.src = resourceUrl;
//     script.document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [resourceUrl]);
// };

function DonateForm() {
  return (
    <div className="container">
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
const DonateModal = class extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.is_modal = props.is_modal;
  //   // this.handleClick = this.props.handleClick.bind(this);
  // }
  // closeModalOnEscKey = (event) => {
  //   if (event.keyCode === 27) {
  //     this.setState({ isModal: false });
  //   }
  // };

  render() {
    // toggle 'is-active' class on modal based on state of 'active' in this class
    // debugger;
    const active = this.props.is_modal ? 'is-active' : '';

    return (
      <div>
        <div className={`modal ${active}`} onKeyPress={this.closeModalOnEscKey}>
          <div
            className="modal-background"
            onClick={this.props.click_method}
          ></div>
          <div
            className="modal-close is-large"
            aria-label="close"
            onClick={this.props.click_method}
          ></div>
          <div className="modal-content donate-form">
            <div className="box donate-form">
              <Iframe
                url="https://www.canadahelps.org/en/dne/73921"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DonateModal;
