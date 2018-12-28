import React from 'react';
import Index from '../components/IndexPage';
import { graphql } from 'gatsby';

export default (props) => <Index {...props} />;

export const pageQuery = graphql`
  query IndexEnQuery {
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
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } },
        fields: { langKey: { regex: "/(en|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            date,
            image {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          },
          fields{
            slug,
            langKey
          },
          excerpt
        }
      }
    }
  }
`;
