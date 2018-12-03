import React, { Component } from "react";
import { Link } from "react-router-dom";
import qs from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import PostFeed from "./PostFeed";
import "./Community.css";

/* 

Community Screen Query

*/

class Community extends Component {
  render() {
    const queryString = qs.parse(this.props.location.search);
    
    return (
      <div className="communityMain">
        <section>
          <header className="sectionTitle">
            Trending
            <Link to="/community/write">
              <FontAwesomeIcon icon={faEdit} className="writeIcon" />
            </Link>
          </header>
          <div className="postCardList">
            <PostFeed queryString={queryString} />
          </div>
        </section>
      </div>
    );
  }
}

export default Community;
