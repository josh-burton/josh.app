import React from 'react';
import PropTypes from 'prop-types';
import PostCardList from '../PostCardList';
import H1 from '../H1';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Layout from '../layout';

const Blog = (props) => {
  const { author } = props.data.site.siteMetadata;
  return (
    <Layout location={props.location}>
      <section className="posts">
        <FormattedMessage id="posts">
          {(txt) => (
            <header>
              <Helmet
                title={txt}
                meta={[{ name: 'description', content: txt }]}
              />
              <H1>
                {txt}
              </H1>
            </header>
          )}
        </FormattedMessage>
        <PostCardList
          posts={props.data.allMarkdownRemark.edges.map(p => p.node)} author={author}
        />
      </section>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Blog;
