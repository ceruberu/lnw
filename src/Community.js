import React, { Component } from 'react';
import './Community.css';
import Thumbnail from './images/example.jpg';

const Post = (i) => (
  <div className="postCard" key={i}>
    <img 
      className="postCardThumbnail" 
      alt="Thumbnail"
      src={Thumbnail}
    />
    <div className="postCardMeta">
      <div className="postCardTitle">
        อยากเลิกเล่น ROV กับแฟนต้องทำยังไงครับ
      </div>
      <div className="postCardDetails">
        <span className="postCardLike">30 likes</span>
        <span className="postCardCreatedAt">10 hours ago</span>
        <span className="postCardAuthor">ceruberu</span>
      </div>
    </div>  
  </div>
);

class Community extends Component {
  render() {
    const Posts = [];
    for (var i = 0; i < 10; i++) {
      Posts.push(Post(i))
    }

    return (
      <div className="communityMain">
        <div className="boardTypeList">
          <div className="boardType">News</div>
          <div className="boardType">General</div>
          <div className="boardType">Funny</div>
        </div>
        <section>
          <div>
            <header className="sectionTitle">
              Trending
            </header>
          </div>
          <div className="postCardList">
            { Posts }
          </div> 
        </section>
      </div>

    );
  }
}

export default Community;
