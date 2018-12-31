import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PostCardList from '../components/PostCardList';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const Header = styled.header`
  text-align: center;
  font-size: ${({ theme }) => theme.scale(1)};
`;

const TagName = styled.span`
  font-size: ${({ theme }) => theme.scale(5)};
  display: block;
  text-align: center;
`;

const AllTagsLink = styled(Link)`
  text-align: center;
  padding: ${({ theme }) => theme.scale(1)} 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.scale(0)};
  display: block;
  position: relative;
  text-decoration: underline;
  transition: 0.3s;

  &:hover {
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;
  }
`;

const TagRoute = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges.map(p => p.node);
  const { author } = data.site.siteMetadata;

  const allTagsLink = (
    <FormattedMessage id="tags.allTagsLink" >
      {(txt) => (
        <AllTagsLink
          to={`/${pageContext.langKey}/tags/`}
        >
          {txt}
        </AllTagsLink>
      )}
    </FormattedMessage>
  );

  return (
    <Layout location={location}>
      <section>
        <Header>
          <FormattedMessage id="tags">
            {(txt) => (
              <Helmet
                title={`${pageContext.tag} | ${txt}`}
                meta={[{ name: 'description', content: txt }]}
              />
            )}
          </FormattedMessage>
          <FormattedMessage
            id="tags.nPostsTaggedWith"
            values={{ nPosts: data.allMarkdownRemark.totalCount }}
          />
          <TagName>“{pageContext.tag}”</TagName>
          {allTagsLink}
        </Header>
        <PostCardList
          posts={posts} author={author}
        />
        <footer>
          {allTagsLink}
        </footer>
      </section>
    </Layout>
  );
};

TagRoute.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object
};

export default TagRoute;

export const pageQuery = graphql`
  query TagPage($tag: String, $langKey: String) {
  site {
    siteMetadata {
      author {
        name
        homeCity
        email
        defaultLink
      }
    }
  },
  allMarkdownRemark(limit: 1000,
    sort: {fields: [frontmatter___date], order: DESC},
    filter: {
      frontmatter: {
        tags: {in: [$tag]},
        draft: {ne: true}
      },
      fields: {
        langKey: {eq: $langKey}
      }
    }) {
    totalCount
    edges {
      node {
        frontmatter{
          title,
          date,
          image {
            childImageSharp{
                sizes(maxWidth: 750) {
                    ...GatsbyImageSharpSizes
                }
            }
          }
        },
        fields{
          slug
          langKey
        },
        excerpt
      }
    }
  }
  }
`;
