import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import classNames from "classnames";

import "./Vote.css";

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

const ADD_POST_VOTE = gql`
  mutation addPostVote($id: ObjectID!, $vote: Int!) {
    addPostVote(id: $id, vote: $vote) {
      voteUpCount
      voteDownCount
      myVote {
        vote
      }
    }
  }
`;

const ADD_COMMENT_VOTE = gql`
  mutation addCommentVote($id: ObjectID!, $vote: Int!) {
    addCommentVote(id: $id, vote: $vote) {
      voteUpCount
      voteDownCount
    }
  }
`;

class Vote extends Component {
  constructor(props){
    super(props);

    this.state = {
      disabled: false
    }

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(e, addVote, voteValue, id) {
    e.preventDefault();
    this.setState({disabled: true});

    let mutationVariables = {
      id,
      vote: voteValue
    };
  
    addVote({ variables: mutationVariables });
  }

  render() {
    const isPost = this.props.type === "post";
    const isComment = this.props.type === "comment";
    const isUp = this.props.myVote === 1;
    const isDown = this.props.myVote === -1;
    const voteContainerClass = classNames({
      postVoteForm: isPost,
      commentVoteForm: isComment
    });
    const voteUpClass = classNames({
      postVote: isPost,
      commentVote: isComment,
      activeVote: isUp
    });
    const voteDownClass = classNames({
      postVote: isPost,
      commentVote: isComment,
      activeVote: isDown
    });
    
    return (
      <Mutation
        mutation={isPost ? ADD_POST_VOTE : ADD_COMMENT_VOTE}
        update={(cache, { data }) => {
          if (data.addPostVote) {
            const cachePost = cache.readQuery({
              query: POST_QUERY,
              variables: {
                _id: this.props.id
              }
            });
            cache.writeQuery({
              query: POST_QUERY,
              variables: {
                _id: this.props.id
              },
              data: {
                post: {
                  ...cachePost.post,
                  ...data.addPostVote
                }
              }
            });
          }
        }}
        onCompleted={()=>{
          this.setState({disabled: false});
        }}
      >
        {addVote => {
          return (
            <div className={voteContainerClass}>
              <button
                className={voteUpClass}
                onClick={e =>
                  this.handleVote(
                    e,
                    addVote,
                    this.props.myVote === 1 ? 0 : 1,
                    this.props.id
                  )
                }
                disabled={this.state.disabled}
              >
                UP
              </button>
              <button
                className={voteDownClass}
                onClick={e =>
                  this.handleVote(
                    e,
                    addVote,
                    this.props.myVote === -1 ? 0 : -1,
                    this.props.id
                  )
                }
                disabled={this.state.disabled}
              >
                DOWN
              </button>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default Vote;
