import React, { Component } from 'react';
import './GuideHero.css';

import heroes from '../json/heroes.json';
import './heroSprite.css';

const staticAddress = 'https://s3-ap-southeast-1.amazonaws.com/lnw-static';

const Guide = (i) => (
  <div className="guideCleanCard" key={i}>
    <span className="guideCleanTitle">
      Airi สายเปิดอัลติ นินจาสาวที่โลกลืม!asmndfm,nsadfmnasdlkfnlaksdfjlksajdflksjadlkfjasldk;j
    </span>
    <div className="guideCleanMeta">
      <span className="guideViewCount"> 230 วิว </span>
      <span className="guideLikeCount"> 10 like </span>
      <span className="guideCommentCount"> 5 comments</span>
      <span className="guideAuthor"> ceruberu </span>
    </div>
  </div>
);

class GuideHero extends Component {
  render() {
    console.log(this.props);
    const { heroName } = this.props.match.params;
    const selectedHero = heroes.find(hero => hero.Name === heroName);

    const Guides = [];
    for (var i = 0; i < 10; i++) {
      Guides.push(Guide(i));
    }

    return (
      <div>
        <img className="heroSplash" alt="heroSplash" src={`${staticAddress}/heroes/${heroName}/Skins/splash.jpg`}/>
        <div className="heroTitle">
          <div className={`heroIcon heroIcon${selectedHero.id}`} alt={selectedHero.FullName} />
          <div className="heroBigName">
            Airi
          </div>
        </div>
        <div className="heroSkillList">
          <img 
            className="skill"
            alt="Passive" 
          />
          <img 
          className="skill"
          alt="Skill1" 
          />
          <img 
          className="skill"
          alt="Skill2" 
          />
          <img 
          className="skill"
          alt="Ultimate" 
          />
        </div>
        <section>
          <header className="sectionTitle">
            Guides
          </header>
          { Guides }
        </section>
      </div>
    );
  }
}

export default GuideHero;
