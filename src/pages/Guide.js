import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from "query-string";

import './Guide.css';
import './heroSprite.css';

import heroes from '../json/heroes.json';

const Hero = (id) => 
  <Link to={`/guide/hero/${heroes[id-1].Name}`} className="hero" key={`hero${id-1}`}>
    <div className={`heroThumbnail heroIcon${id}`} alt="Airi" />
    <span className="heroName">{heroes[id-1].FullName}</span>
  </Link>;

const GuideCard = (i) =>
  <Link to="guide/post/001" className="guideCard" key={`guide${i}`}>
    <img className="guideThumbnail" alt="Airi" />
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
    const queryString = qs.parse(this.props.location.search);
    const { type } = queryString;
    
    let filteredHeroes = heroes;
    if(type){
      filteredHeroes = heroes.filter(hero => hero.Type === type);
    }

    let Heroes = [];
    let Guides = [];
    filteredHeroes.forEach(hero => {
      Heroes.push(Hero(hero.id));
    })

    for (var k = 0; k < 10; k++) {
      Guides.push(GuideCard(k));
    }

    return (
      <div>
        <div className={type? "heroList" : "heroList heroListAll"}>
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
