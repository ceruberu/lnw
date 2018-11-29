import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { dateInDistance } from './helpers/dateHelper';

import "./Comments.css";

const COMMENTS_QUERY = gql`
  query CommentsQuery($postId: ObjectID!) {
    comments(postId: $postId) {
      _id
      content
      createdAt
      author {
        nickname
      }
    }
  }
`;

class Comments extends Component {
  render() {
    return (
      <Query query={COMMENTS_QUERY} variables={{ postId: this.props.postId }}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          return data.comments.map((comment, i) => {
            return (
              <div className="comment" key={comment._id}>
                <div>
                  <span className="commentAuthor">{comment.author.nickname} </span> 
                  <span className="commentCreatedAt">{dateInDistance(comment.createdAt)}</span>
                </div>
                <div className="commentContent">{comment.content}</div>
              </div>
            )
          })
        }}
      </Query>
    );
  }
}

export default Comments;
