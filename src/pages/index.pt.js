import React from 'react';
import Index from '../components/IndexPage';
import { graphql } from 'gatsby';

export default (props) => <Index {...props} />;

export const pageQuery = graphql`
  query IndexPtQuery {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } },
        fields: { langKey: { regex: "/(pt|any)/" } }
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
