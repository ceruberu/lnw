import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Guide.css';
import './heroSprite.css';

import heroes from './images/heroes.json';
import Icon from './images/heroes/Airi/icon.jpg';

const Hero = (i) => 
  <Link to={`/guide/hero/${heroes[i].Name}`} className="hero" key={`hero${i}`}>
    <div className={`heroThumbnail heroIcon${i}`} alt="Airi" />
    <span className="heroName">{heroes[i].FullName}</span>
  </Link>;

const GuideCard = (i) =>
  <Link to="guide/post/001" className="guideCard" key={`guide${i}`}>
    <img className="guideThumbnail" alt="Airi" src={Icon} />
    <div className="guideMeta">
      <div className="guideTitle">
        Airi สายเปิดอัลติทุกทุกทุก นินจาสาวที่โลกลืม! Airi สายเปิดอัลติทุกทุกทุกทุก นินจาสาวที่โลกลืม!Airi สายเปิดอัลติ นินจาสาวที่โลกลืม!Airi สายเปิดอัลติ ทุกทุกทุกทุกนินจาสาวที่โลกลืม!
      </div>
      <div className="guideStatus">
        <span> 230 วิว </span>
        <span> 10 like </span>
        <span> 5 comments</span>
      </div>
    </div>
  </Link>;

class Guide extends Component {
  render() {
    var Heroes = [];
    var Guides = [];
    for (var i = 1; i < 71; i++) {
      Heroes.push(Hero(i));
    }
    for (var k = 0; k < 10; k++) {
      Guides.push(GuideCard(k));
    }

    return (
      <div>
        <div className="heroList">
          {Heroes}
        </div>
        <section>
          <h3 className="sectionTitle">
            Recent Guide
          </h3>
          <div className="guideCardList">
            { Guides }
          </div>
        </section>
      </div>

    );
  }
}

export default Guide;
