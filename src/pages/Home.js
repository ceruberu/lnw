import React, { Component } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Post = i => (
  <div className="postCard" key={i}>
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
