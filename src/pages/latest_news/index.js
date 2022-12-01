import * as React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import FullWidthImage from '../../components/FullWidthImage';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImage title="Latest News" />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
