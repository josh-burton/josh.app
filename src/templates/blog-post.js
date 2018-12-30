import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import EditBtn from '../components/EditBtn';
import Tags from '../components/Tags';
import { getStructuredData } from '../structuredData';
import CleanTime from '../components/Time';
import Comments from '../components/Comments';
// import Posts from '../components/Posts';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import ShareWidget from '../components/ShareWidget';

const Time = styled(CleanTime)`
  text-align: center;
  font-size: ${props => props.theme.blog.post.header.time.fontSize};
  font-weight: bold;
  color: ${props => props.theme.blog.post.header.time.color};
  width: 100%;
  display: block;
  padding-top: 1rem;
`;

const Post = styled.article`
  margin: ${props => props.theme.blog.post.margin};
  padding: ${props => props.theme.blog.post.padding};
  max-width: ${props => props.theme.blog.post.maxWidth};
`;

const H1 = styled.h1`
  padding-bottom: 0;
  font-family: ${props => props.theme.blog.post.header.fontFamily};
  margin: ${props => props.theme.blog.post.header.margin};
  font-size: ${props => props.theme.blog.post.header.fontSize};
`;

const Content = styled.section`
  margin: 0 0 ${({ theme }) => theme.scale(6)} 0;
  font-family: ${props => props.theme.blog.post.content.fontFamily};
  p > code {
    color: ${props => props.theme.blog.post.content.code.color};
    font-size: ${props => props.theme.blog.post.content.code.fontSize};
    margin: ${props => props.theme.blog.post.content.code.margin};
    padding: ${props => props.theme.blog.post.content.code.padding};
    background-color: ${props => props.theme.blog.post.content.code.backgroundColor};
    border-radius: ${props => props.theme.blog.post.content.code.borderRadius};
  }

  .gatsby-highlight{
    margin:${props => props.theme.blog.post.content.highlight.margin};
    padding:${props => props.theme.blog.post.content.highlight.padding};
    background-color: ${props => props.theme.blog.post.content.highlight.backgroundColor};
    display: flex;
    border-radius: ${props => props.theme.blog.post.content.highlight.borderRadius};
    overflow: auto;

    code {
      color: ${props => props.theme.blog.post.content.highlight.code.color};
    }

    pre{
      width: 100%;
      border: 2px solid ${props => props.theme.colors.white};
    }
  }

  a{
    color: ${props => props.theme.blog.post.content.a.color};
  }

  h1{
    margin:${props => props.theme.blog.post.content.h1.margin};
    padding:${props => props.theme.blog.post.content.h1.padding};
    font-size:${props => props.theme.blog.post.content.h1.fontSize};
  }

  h2{
    margin:${props => props.theme.blog.post.content.h2.margin};
    padding:${props => props.theme.blog.post.content.h2.padding};
    font-size:${props => props.theme.blog.post.content.h2.fontSize};
  }

  h3{
    margin:${props => props.theme.blog.post.content.h3.margin};
    padding:${props => props.theme.blog.post.content.h3.padding};
    font-size:${props => props.theme.blog.post.content.h3.fontSize};
  }

  h4{
    margin:${props => props.theme.blog.post.content.h4.margin};
    padding:${props => props.theme.blog.post.content.h4.padding};
    font-size:${props => props.theme.blog.post.content.h4.fontSize};
  }

  h5{
    margin:${props => props.theme.blog.post.content.h5.margin};
    padding:${props => props.theme.blog.post.content.h5.padding};
    font-size:${props => props.theme.blog.post.content.h5.fontSize};
  }

  h6{
    margin:${props => props.theme.blog.post.content.h6.margin};
    padding:${props => props.theme.blog.post.content.h6.padding};
    font-size:${props => props.theme.blog.post.content.h6.fontSize};
  }

  p {
    margin:${props => props.theme.blog.post.content.p.margin};
    padding:${props => props.theme.blog.post.content.p.padding};
    font-size: ${props => props.theme.p.fontSize};
    line-height: ${props => props.theme.p.lineHeight};
  }

  strong{
    font-weight: bold;
  }

  ul, ol {
    margin:${props => props.theme.blog.post.content.ul.margin};
    padding:${props => props.theme.blog.post.content.ul.padding};
    font-size:${props => props.theme.blog.post.content.ul.fontSize};    
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    padding-top: 1rem;
  }

  blockquote {
    font-style: italic;
    margin: 0;
    padding: ${({ theme }) => theme.scale(3)};    
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  blockquote:before {
    line-height: 1.45;
    display: block;
    content: "\\201C";
    position: absolute;
    top: -${({ theme }) => theme.scale(-4)};
    left: -${({ theme }) => theme.scale(1)};
    font-size: ${({ theme }) => theme.scale(10)};
    color: ${({ theme }) => theme.colors.white};
  }

  blockquote:after {
    display: block;
    content: "\\201D";
    position: absolute;
    bottom: -${({ theme }) => theme.scale(6)};
    right: ${({ theme }) => theme.scale(1)};
    font-size: ${({ theme }) => theme.scale(10)};
    color: ${({ theme }) => theme.colors.white};
  }

  blockquote cite {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.scale(-1)};
    display: block;
  }
     
  blockquote cite:before {
    content: "\\2014 \\2009";
  }

  img {
    max-width: 100%;
  }
`;

class BlogPostRoute extends React.PureComponent {

  render(){
    const post = this.props.data.markdownRemark;
    const { langKey } = this.props.pageContext;
    const structuredData = getStructuredData(post);
    const url = `https://hugomagalhaes.com${post.fields.slug}`;
  
    const tags = (
      <Tags tags={post.fields.tagSlugs} />
    );

    return (
      <Layout location={this.props.location}>
        <Post>
          <Helmet
            title={`${post.frontmatter.title}`}
            meta={[{ name: 'description', content: post.excerpt }]}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: structuredData }}
          />
          
          <header>
            <H1>
              {post.frontmatter.title}
            </H1>
            <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
            {/* <Time
              pubdate="pubdate"
              date={post.frontmatter.date}
            /> */}
          </header>
          {/* <EditBtn
            fileAbsolutePath={post.fileAbsolutePath}
            currentLangKey={langKey}
          /> */}
          {/* {tags} */}
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          <Comments
            shortname="hugomagalhes"
            identifier={post.fields.slug}
            title={post.frontmatter.title}
            url={url}
          />
          <ShareWidget url={url} message={post.excerpt} />
          {/* {tags} */}
          {/* <Posts
            posts={post.fields.readNextPosts}
            langKey={langKey}
            showBtnMorePosts
            title="posts.readNext"
          /> */}
        </Post>
      </Layout>
    );
  }
}

BlogPostRoute.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object
};

export default BlogPostRoute;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      fileAbsolutePath
      html
      excerpt
      fields {
        tagSlugs {
          tag
          link
        }
        slug        
        readNextPosts {
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
            langKey
          }
        }
      }      
      frontmatter {
        title
        tags
        date
        image {
          childImageSharp{
              sizes(maxWidth: 750) {
                  ...GatsbyImageSharpSizes
              }
          }
        }
        structuredData {
          alternativeHeadline
          type
          dependencies
          proficiencyLevel
          articleSection
          pageEnd
          pageStart
          pagination
          about {
            name
            alternateName
            description
            identifier
            image
            sameAs
          }
          accessMode
          accessModeSufficient
          accessibilityAPI
          accessibilityControl
          accessibilitySummary
          aggregateRating
          audience
          author
          comment
          commentCount
          contentLocation
          dateCreated
          dateModified
          datePublished
          discussionUrl
          educationalUse
          isAccessibleForFree
          isFamilyFriendly
          keywords
          locationCreated
          thumbnailUrl
          version
          video
        }
      }
    }
  }
`;
