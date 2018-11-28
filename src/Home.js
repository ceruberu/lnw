import React, { Component } from 'react';
import './Home.css';
import Thumbnail from './images/example.jpg';

/* 

Home Screen Query

query HomeScreenQuery {

  me {
    id
    username
  }

  postFeed(first:10, filter:'best') {
    posts {
      title
      createdAt
      author {
        name
      }
      likeCount
      commentCount
    }
  }

}

*/

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

class Home extends Component {
  render() {
    const Posts = [];
    for (var i = 0; i < 10; i++) {
      Posts.push(Post(i));
    }
    return (
      <div>
        <section>
          <header className="sectionTitle">
            Guide of the Day
          </header>
          <div className="guideOfTheDay">
              Diao chan เทคนิคการออกของ SS7 วิเคราะห์ไอเทมทุกชิ้น
          </div>
        </section>
        <section>
        <header className="sectionTitle">
          Top Posts
        </header>
        <div className="postCardList">
          { Posts }
        </div>
      </section>
      </div>

    );
  }
}

export default Home;
