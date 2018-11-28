import React, { Component } from 'react';
import './CommunityPost.css';

/* 

CommunityPost Screen Query

query CommunityPostScreenQuery {

  me {
    id
    username
  }

  post(id: postId) {
    title
    content
    createdAt
    author {
      name
    }
  }

  comments(id: postId) {
    content
    replies {
      content
      author {
        name
      }
    }
    author {
      name
    }
  }

}

*/

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
