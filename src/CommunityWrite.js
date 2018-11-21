import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Editor from "./Editor";

import "./CommunityWrite.css";

class CommunityWrite extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      model: '',
      select: ''
    };

    // Advised to use ref for managing focus [https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs]
    this.titleRef = React.createRef();

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

  componentDidMount() {
    this.titleRef.current.focus();
  }

  render() {
    return (
      <div className="communityWrite">
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
          <div>
            Save as Draft
          </div>
          <div>
            Post
          </div>
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
      </div>
    );
  }
}

export default CommunityWrite;
