import React from 'react';
import PropTypes from 'prop-types';
import Welcome from '../Welcome';
import Layout from '../layout';
import Link from '../Link';
import PostCardList from '../PostCardList';
import { FormattedMessage } from 'react-intl';
import H2 from '../H2';
import BtnLink from '../BtnLink';
import styled from 'styled-components';

const PostCardListContainer = styled.section`
  margin: ${props => props.theme.blog.list.margin};
`;

const Index = (props) => {
  const posts = props.data.allMarkdownRemark.edges.map(p => p.node);
  const { author } = props.data.site.siteMetadata;
  const { langKey } = props.pageContext;

  return (
    <Layout location={props.location}>
      <div>
        {/* <Welcome currentLangKey={langKey} /> */}
        <PostCardListContainer>
          {/* <header>
            <Link to={`/${langKey}/blog/`}>
              <FormattedMessage id="posts">
                {(txt) => (
                  <H2>{txt}</H2>
                )}
              </FormattedMessage>
            </Link>
          </header> */}
          <PostCardList posts={posts} author={author} />
          {/* <FormattedMessage id="posts.seeMore">
            {(txt) => (
              <BtnLink to={`/${langKey}/blog/`}>
                {txt}
              </BtnLink>
            )}
          </FormattedMessage> */}
        </PostCardListContainer>
      </div>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Index;
