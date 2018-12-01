import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { dateInDistance } from './helpers/dateHelper';

import Thumbnail from "./images/example.jpg";

const POSTFEED_QUERY = gql`
  query CommunityQuery($skip: Int!, $limit: Int!, $filter: String) {
    postFeed(skip: $skip, limit: $limit, filter: $filter) {
      _id
      title
      createdAt
      author {
        nickname
      }
      voteUpCount
      voteDownCount
      # comments {
      #   content
      #   createdAt
      # }
      # likeCount
      # commentCount
    }
  }
`;

class PostFeed extends Component {
  render() {
    return (
      <Query
        query={POSTFEED_QUERY}
        variables={{
          limit: 20,
          skip: 0
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <div> Loading...</div>;
          if (error) return <div> Error... </div>;
          return data.postFeed.map((post, i) => (
            <Link to={`community/post/${post._id}`} className="postCard" key={post._id}>
              <img
                className="postCardThumbnail"
                alt="Thumbnail"
                src={Thumbnail}
              />
              <div className="postCardMeta">
                <div className="postCardTitle">
                  {post.title}
                </div>
                <div className="postCardDetails">
                  <span className="postCardLike">{post.voteUpCount - post.voteDownCount} likes</span>
                  <span className="postCardCreatedAt">{dateInDistance(post.createdAt)}</span>
                  <span className="postCardAuthor">{post.author.nickname}</span>
                </div>
              </div>
            </Link>
          ));
        }}
      </Query>
    );
  }
}

export default PostFeed;
