import React, { Component } from "react";

import "./CommunityPost.css";

import Post from './Post';
import Comments from './Comments';
import CommentWrite from './CommentWrite';

class CommunityPost extends Component {
  render() {
    const postId = this.props.match.params.postId;
    return (
      <section className="communityPostTable">
        <Post postId={postId} />
        <CommentWrite postId={postId} />
        <Comments postId={postId} />
      </section>
    );
  }
}

export default CommunityPost;
