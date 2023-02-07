import * as React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import IFrameModalButton from '../../components/iframe_modal_button';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false, is_active: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setModalState() {
    this.setState({
      is_active: (this.state.is_active = !this.state.is_active),
      is_active_attribute: (this.state.is_active_attribute = this.state
        .is_active
        ? 'is-active'
        : ''),
    });
    this.setModalState = this.setModalState.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Volunteer</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <nav className="navbar">
                    <div className="navbar-start">
                      <div className="navbar-item">
                        <IFrameModalButton
                          text="Subscribe To Our Newsletter"
                          url="https://hamiltonpoverty.us14.list-manage.com/subscribe?u=d61456455bd43a35f1c9a6677&id=2d18eac361"
                        />
                      </div>
                      <div className="navbar-item">
                        <button className="button is-link" type="submit">
                          Send
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
