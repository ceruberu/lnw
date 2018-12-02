import React, { Component } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Thumbnail from "./images/example.jpg";

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

const Post = i => (
  <div className="postCard" key={i}>
    <img className="postCardThumbnail" alt="Thumbnail" src={Thumbnail} />
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

    const settingsNews = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const settingsFeatured = {
      arrows: true,
      speed: 500,
      infinite: false,
      slidesToShow: 1.05,
      slidesToScroll: 1,
      className: "featureSlick"
    };

    return (
      <div>
        <Slider {...settingsNews}>
          <div className="guideOfTheDay">
            Diao chan เทคนิคการออกของ SS7 วิเคราะห์ไอเทมทุกชิ้น
          </div>
          <div className="guideOfTheDay">
            Diao chan เทคนิคการออกของ SS7 วิเคราะห์ไอเทมทุกชิ้น
          </div>
          <div className="guideOfTheDay">
            Diao chan เทคนิคการออกของ SS7 วิเคราะห์ไอเทมทุกชิ้น
          </div>
        </Slider>
          <header className="featureHeader sectionTitle">
            Featured
            <div className="sectionArrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </header>

        <Slider {...settingsFeatured}>
          <div className="featureWrap">
            <div className="feature">
              Diao chan เทคนิคการออกของ SS7 วิเคราะห์ไอเทมทุกชิ้น
            </div>
          </div>
          <div className="featureWrap">
            <div className="feature">
              Diao chan เทคนิคการออกของ SS7 วิเคราะห์ไอเทมทุกชิ้น
            </div>
          </div>
          <div className="featureWrap">
            <div className="feature">
              Diao chan เทคนิคการออกของ SS7 วิเคราะห์ไอเทมทุกชิ้น
            </div>
          </div>
        </Slider>
        <section>
          <header className="sectionTitle">
            Guides
            <div className="sectionArrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </header>
          <div className="postCardList">{Posts}</div>
        </section>
        <section>
          <header className="sectionTitle">
            Top Posts
            <div className="sectionArrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </header>
          <div className="postCardList">{Posts}</div>
        </section>
      </div>
    );
  }
}

export default Home;
