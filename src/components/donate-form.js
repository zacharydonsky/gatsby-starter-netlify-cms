import React from 'react';
import { Script } from 'gatsby';

const DonateForm = class extends React.Component {
  render() {
    return (
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
    );
  }
};

export default DonateForm;
