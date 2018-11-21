import React, { Component } from 'react';
import './CommunityPost.css';

class CommunityPost extends Component {
  render() {
    return (
      <section className="CommunityPostTable">
        <header className="CommunityPostTitle">
          {this.props.title}
        </header>
        <div className="CommunityPostContent">

        </div>
      </section>
    );
  }
}

export default CommunityPost;
