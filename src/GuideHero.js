import React, { Component } from 'react';
import './GuideHero.css';
import Splash from './images/heroes/Airi/Skins/splash.png';
import Icon from './images/heroes/Airi/icon.jpg';
import Passive from './images/heroes/Airi/Abillities/0.png';
import Skill1 from './images/heroes/Airi/Abillities/1.png';
import Skill2 from './images/heroes/Airi/Abillities/2.png';
import Ultimate from './images/heroes/Airi/Abillities/3.png';

const mockHeroSkills = [
  {
    'name' : 'Dragon Blade',
    'cooldown' : 0,
    'mana' : 0,
    'description' : `พาสซีฟเสริมสกิล 1 ของเธอให้สามารถปากงจักรได้รัวขึ้น ทุกครั้งที่โจมตีปกติจะลดคูลดาวน์สกิล Dragon Shuriken ลง 1 วินาที เพราะฉนั้นอย่าลืม ทุกครั้งที่เข้าไปลุย ต้องกดโจมตีด้วยตลอด เพื่อเอาพาสซ๊ฟลดคูลดาวน์ สกิล
                     1 ยิ่งตีบ่อยยิ่งลดเยอะ แต่ไม่จำเป็นต้องออกของตีเร็วเวอร์มากเพื่อเอาแค่พาสซีฟนี้ก็ได้`
  },
  {
    'name' : 'Dragon Shuriken',
    'cooldown' : 8,
    'mana': 0,
    'description' : `สกิลหากินของ AIRI เลยก็ว่าได้เพราะทั้งทำดาเมจและสตั๊นไปพร้อมกัน ไอริจะปากงจักรไปในทิศทางที่กำหนด ทำดาเมจกายภาย ขั้นต่ำที่ 180  และสตั๊นศัตรู 1 วินาที ถ้าจะให้ดีกดเล็งก่อนปา แต่ถ้าอยู่ด้านหน้าศัตรู ปายัดหน้าไปเลยแล้วค่อยวิ่งไล่เอาสะดวกกว่ามากก`
  },
  {
    'name' : 'Swift Shadow',
    'cooldown' : '10/9.4/8.8/8.2/7.6/7',
    'mana': 0,
    'description' : `ไอริจะทำการพุ่งไปยังทิศทางที่กำหนด ทำดาเมจกายภาพขั้นต่ำที่ 100 ใส่ศัตรูที่อยู่ในเส้นการพุ่ง  สกิลนี้สามารถใช้ได้ต่อเนื่อง 3 ครั้ง โดยแต่ละครั้งละจะหลอดคูลดาวน์สีฟ้าแสดงอยู่ ถ้าใช้ไม่ทันในช่วง ครั้งที่ 2 - 3 สกิลจะคูลดาวน์ทันที`
  },
  {
    'name' : 'Ryu No Ikari',
    'cooldown' : 40,
    'mana': 0,
    'description' : `สกิลอัลติเมทที่น่ากลัวและ Over Power มาก รายละเอียดแยกย่อยเพื่อให้เข้าใจง่ายดังนี้`
  }   
];

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
  constructor(props){
    super(props);
    this.state = {
      selectedSkill: 0
    }
  }

  onClickSkill(number){
    if (this.state.selectedSkill !== number) {
      this.setState({
        selectedSkill: number
      });
    }
  }

  render() {
    const { selectedSkill } = this.state;

    const Guides = [];
    for (var i = 0; i < 10; i++) {
      Guides.push(Guide(i));
    }

    return (
      <div>
        <img className="heroSplash" alt="heroSplash" src={Splash}/>
        <div className="heroTitle">
          <img className="heroIcon" alt="heroIcon" src={Icon}/>
          <div className="heroBigName">
            Airi
          </div>
        </div>
        <div className="heroSkillList">
          <img 
            className={ selectedSkill === 0 ? "skill active" : "skill" } 
            alt="Passive" 
            src={Passive}
            onClick={()=>this.onClickSkill(0)}
          />
          <img 
            className={ selectedSkill === 1 ? "skill active" : "skill" } 
            alt="Skill1" 
            src={Skill1}
            onClick={()=>this.onClickSkill(1)}
          />
          <img 
            className={ selectedSkill === 2 ? "skill active" : "skill" } 
            alt="Skill2" 
            src={Skill2}
            onClick={()=>this.onClickSkill(2)}
          />
          <img 
            className={ selectedSkill === 3 ? "skill active" : "skill" } 
            alt="Ultimate" 
            src={Ultimate}
            onClick={()=>this.onClickSkill(3)}
          />
        </div>
        <div className="heroSkillDescription">
          <div>
            <span className="heroSkillName">
              { mockHeroSkills[selectedSkill].name }
            </span>
            { 
              selectedSkill !== 0 && 
              <span className="heroSkillMana">
                {`${mockHeroSkills[selectedSkill].mana} มานะ`}
              </span>
            }
            <span className="heroSkillCooldown">
              { `${mockHeroSkills[selectedSkill].cooldown} วิ`} 
            </span>
          </div>
          <div className="heroSkillDetail">
            {
              mockHeroSkills[selectedSkill].description
            }
          </div>
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
