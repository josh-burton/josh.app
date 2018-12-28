import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';
import H1 from '../components/H1';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/layout';

const Blog = (props) => {
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
        <PostList
          posts={props.data.allMarkdownRemark.edges.map(p => p.node)}
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
