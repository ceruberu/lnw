import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Guide.css';
import Assassin from './images/classes/Assassin.png';
import Mage from './images/classes/Mage.png';
import Marksman from './images/classes/Marksman.png';
import Support from './images/classes/Support.png';
import Tank from './images/classes/Tank.png';
import Warrior from './images/classes/Warrior.png';
import Icon from './images/heroes/Airi/icon.jpg';

const MockHero = {
  'airi' : {
    type: "Assassin"
  }
};

const Hero = (i) => 
  <Link to="/guide/hero/airi" className="hero" key={i}>
    <img className="heroThumbnail" alt="Airi" src={Icon} />
    <span className="heroName">Airi</span>
  </Link>;

const GuideCard = (i) =>
  <div className="guideCard" key={i}>
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
  </div>;

class Guide extends Component {
  render() {
    var Heroes = [];
    var Guides = [];
    for (var i = 0; i < 69; i++) {
      Heroes.push(Hero(i));
    }
    for (var k = 0; k < 10; k++) {
      Guides.push(GuideCard(i));
    }

    console.log(Heroes);
    return (
      <div>
        <div className="classFilter">
          <img className="classType" alt="Tank" src={Tank}></img>
          <img className="classType" alt="Warrior" src={Warrior}></img>
          <img className="classType" alt="Assassin" src={Assassin}></img>
          <img className="classType" alt="Marksman" src={Marksman}></img>
          <img className="classType" alt="Mage" src={Mage}></img>
          <img className="classType" alt="Support" src={Support}></img>
        </div>
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
