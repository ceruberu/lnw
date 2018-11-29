import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import "./CommentWrite.css";

const ADD_COMMENT = gql`
  mutation AddComment($postId: ObjectID!, $content: String!) {
    addComment(postId: $postId, content: $content) {
      _id
      content
      createdAt
      author {
        nickname
      }
    }
  }
`;

class CommentWrite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };

    this.contentRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(addComment) {
    if (!this.state.content) {
      this.contentRef.current.focus();
      return;
    }

    addComment({
      variables: {
        postId: this.props.postId,
        content: this.state.content
      }
    });
  }

  render() {
    return (
      <Mutation
        mutation={ADD_COMMENT}
        variables={{ postId: this.props.postId }}
        onCompleted={addComment => {
          this.setState({content: ""});
        }}
      >
        {(addComment, { loading } ) => (
          <form
            className="commentWriteForm"
            onSubmit={e => {
              console.log("ON SUBMIT");
              e.preventDefault();
              this.handleSubmit(addComment);
            }}
          >
            <textarea
              type="text"
              name="content"
              ref={this.contentRef}
              value={this.state.content}
              onChange={this.handleChange}
              className="commentWriteArea"
              placeholder="Thank you for being considerate before commenting"
            />
            <div className="commentButtons">
              {/* TODO Add Upload Image Feature */}
              <div className="commentUpload">+ Upload Image</div>
              <button className="commentSubmit" type="submit">
                {loading ? "Loading" : "Send"}
              </button>
            </div>
          </form>
        )}
      </Mutation>
    );
  }
}

export default CommentWrite;
