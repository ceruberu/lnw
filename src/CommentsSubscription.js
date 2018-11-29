import React, { Component } from "react";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

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

const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentAdded($postId: ObjectID!) {
    commentAdded(postId: $postId) {
      _id
      content
      createdAt
      author {
        nickname
      }
    }
  }
`;

class CommentsSubscription extends Component {
  render() {
    return (
      <Subscription
        subscription={COMMENTS_SUBSCRIPTION}
        variables={{ postId: this.props.postId }}
        onSubscriptionData={({ client, subscriptionData }) => {
          const data = client.readQuery({
            query: COMMENTS_QUERY,
            variables: { postId: this.props.postId }
          });
          client.writeQuery({
            query: COMMENTS_QUERY,
            variables: { postId: this.props.postId },
            data: {
              comments: [...data.comments, subscriptionData.data.commentAdded]
            }
          });
        }}
      />
    );
  }
}

export default CommentsSubscription;
