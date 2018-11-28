import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import PostFeed from './PostFeed';
import "./Community.css";

/* 

Community Screen Query

*/

class Community extends Component {
  render() {
    return (
      <div className="communityMain">
        <div className="boardTypeList">
          <div className="boardType">News</div>
          <div className="boardType">General</div>
          <div className="boardType">Funny</div>
        </div>
        <section>
          <header className="sectionTitle">
            Trending
            <Link to="/community/write">
              <FontAwesomeIcon icon={faEdit} className="writeIcon" />
            </Link>
          </header>
          <div className="postCardList">
            <PostFeed />
          </div>
        </section>
      </div>
    );
  }
}

export default Community;
