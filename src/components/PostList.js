import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

const Ul = styled.ul`
  list-style: none;
  margin: ${props => props.theme.blog.list.ul.margin};
  padding: ${props => props.theme.blog.list.ul.padding};
`;

const PostList = (props) => {
  return (
    <nav>
      {/* <Ul>
        {props.posts.map(post =>
          <Post key={post.fields.slug} post={post} />
        )}
      </Ul> */}
      <Grid columns="repeat(auto-fit,minmax(360px,1fr))" gap="30px" alignContent="stretch">
        {props.posts.map(post =>
          <Cell key={post.fields.slug}>
            <Post post={post} author={props.author} />
          </Cell>
        )}
      </Grid>
    </nav>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  author: PropTypes.object.isRequired
};

export default PostList;
