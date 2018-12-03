import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Editor from "../components/Editor";

import "./CommunityWrite.css";

const ADD_POST = gql`
  mutation AddPost($type: String!,$title: String!, $content: String!) {
    addPost(type: $type, title: $title, content: $content) {
      # returns a new post id and redirect to it
      _id
    }
  }
`;

class CommunityWrite extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: "",
      model: "",
      select: ""
    };

    // Advised to use ref for managing focus [https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs]
    this.titleRef = React.createRef();
    this.selectRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleModelChange(model) {
    this.setState({
      model: model
    });
  }

  handleSubmit(addPost) {
    // Check Form
    // #1 Check if select is valid
    if (!this.state.select) {
      console.log("Select is empty");
    }
    // #2 Check if title is valid
    if (!this.state.title) {
      this.titleRef.current.focus();
    }
    // #3 Check if model is valid
    if (!this.state.model) {
      return console.log("Editor is empty");
    }

    // Run the AddPost mutation
    addPost({
      variables: {
        type: this.state.select,
        content: this.state.model,
        title: this.state.title
      }
    });
  }

  componentDidMount() {
    this.titleRef.current.focus();
  }

  render() {
    return (
      <Mutation
        mutation={ADD_POST}
        onCompleted={({ addPost }) => {
          this.props.history.push(`/community/post/${addPost._id}`);
        }}
      >
        {(addPost, { data }) => (
          <form
            className="communityWrite"
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(addPost);
            }}
          >
            <div className="communityWriteOptions">
              <select
                name="select"
                className="articleSelect"
                value={this.state.select}
                onChange={this.handleChange}
              >
                <option value="" hidden>
                  Select
                </option>
                <option value="1">News</option>
                <option value="2">General</option>
                <option value="3">Funny</option>
              </select>
              {/* TODO save drafts in localStorage */}
              <div>Save as Draft</div>
              <button type="submit">Post</button>
            </div>

            <input
              type="text"
              name="title"
              className="articleTitle"
              placeholder="Title"
              ref={this.titleRef}
              value={this.state.title}
              onChange={this.handleChange}
              autoFocus
            />
            <Editor
              model={this.state.model}
              handleModelChange={this.handleModelChange}
            />
          </form>
        )}
      </Mutation>
    );
  }
}

export default CommunityWrite;
