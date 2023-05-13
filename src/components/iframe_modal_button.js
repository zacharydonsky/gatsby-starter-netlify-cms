import * as React from 'react';
import IframeModal from './iframe-modal';

export default class IFrameModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.url = this.props.url;
    this.text = this.props.text;

    this.state = { is_active: false };
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
  }
  render() {
    return (
      <div>
        <IframeModal
          iframe_url={this.url}
          is_active={this.state.is_active_attribute}
          set_modal_state={this.setModalState}
        />
        <div
          className="button is-medium is-warning"
          onClick={() => {
            this.setModalState();
          }}
        >
          {this.text}
        </div>
      </div>
    );
  }
}
