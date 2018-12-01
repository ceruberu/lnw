import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import Vote from "./Vote";

import "froala-editor/css/froala_style.min.css";
import "./Post.css";

import { dateInDistance } from "./helpers/dateHelper";

const POST_QUERY = gql`
  query PostQuery($_id: ObjectID!) {
    post(_id: $_id) {
      title
      content
      createdAt
      author {
        nickname
      }
      voteUpCount
      voteDownCount
      myVote {
        vote
      }
    }
  }
`;

class Post extends Component {
  render() {
    return (
      <Query query={POST_QUERY} variables={{ _id: this.props.postId }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          return (
            <Fragment>
              <div className="communityPostCard">
                <span className="communityPostTitle">{data.post.title}</span>
                <div className="communityPostMeta">
                  {/* TODO implement view count by google gtag*/}
                  <span className="communityCreatedAt">
                    {dateInDistance(data.post.createdAt)}
                  </span>
                  <span className="communityAuthor">
                    {" "}
                    {data.post.author.nickname}{" "}
                  </span>
                  <span className="communityVote">
                    {data.post.voteUpCount - data.post.voteDownCount} likes
                  </span>
                </div>
              </div>
              <FroalaEditorView
                className="communityPostEditor"
                model={data.post.content}
              />
              <Vote
                type="post"
                myVote={data.post.myVote.vote}
                id={this.props.postId}
              />
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Post;
