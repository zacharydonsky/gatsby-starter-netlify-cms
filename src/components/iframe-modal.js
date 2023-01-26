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
function IframeContainer() {
  const [modal_is_active, set_modal_state] = React.useState(false);
  
  const active = this.props.is_modal ? 'is-active' : '';
  
  return (
      <div>
        <div className={`modal ${modal_is_active}`} onKeyPress={this.closeModalOnEscKey}>
          <div
            className="modal-background"
            onClick={() => set_modal_state(!modal_is_active)}
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
const IframeModal = class extends React.Component {
  render() {
    return (
      <IframeContainer/>
    );
  }
};

export default IframeModal;
