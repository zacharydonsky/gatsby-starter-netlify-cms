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
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
              <h1>Contact</h1>
              <div>
                <div className="box">
                  <div className="block">
                    <div className="content">
                      For <b>General</b> and <b>Volunteer</b> Inquiries, please
                      get in touch with...
                    </div>

                    <div class="button is-medium is-link">
                      info@hamiltontinyshelters.ca
                    </div>
                  </div>
                  <div className="block">
                    <div className="content">
                      For <b>Public Relations</b>, <b>Media Inquiries</b>, or{' '}
                      <b>Events</b>, please get in touch with...
                    </div>
                    <div class="button is-medium is-link">
                      communications@hamiltontinyshelters.ca
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
