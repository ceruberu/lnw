import React, { Component } from 'react';
import './GuidePost.css';
import Splash from './images/heroes/Airi/Skins/splash.png';
import Icon from './images/heroes/Airi/icon.jpg';
import Passive from './images/heroes/Airi/Abillities/0.png';
import Skill1 from './images/heroes/Airi/Abillities/1.png';
import Skill2 from './images/heroes/Airi/Abillities/2.png';
import Ultimate from './images/heroes/Airi/Abillities/3.png';
import flicker from './images/spells/flicker.png';
import execute from './images/spells/execute.png';
import runeData from './images/runes.json';

function getTotalRuneEffects (runeEffect, runeAmount) {
  if (runeAmount === 1) {
    return runeEffect;
  }

  let resultEffect = [];
  const listEffects = runeEffect.split('\n');
  listEffects.forEach((effect, i) => {
    const [ description, amount ] = effect.split(': ');
    const isPercent = amount.slice(amount.length-1) === '%';
    resultEffect.push(
      <div className="runeEffect">
       {`${description}: ${(parseFloat(amount)*100*runeAmount) / 100}${isPercent ? '%' : ''}`}
      </div>
    ) 
  })

  return resultEffect;
}

const mockHeroGuide = {
  id: 1,
  createdAt: '17/11/2018',
  author: 'ceruberu',
  spell: ['flicker', 'execute'],
  skill: [1,2,1,3,1,2,1,3,1,2,1,3,2,2,2],
  itemBuilds: [{ 
    name: "VS Attack",
    build: [101,103,201,401,501,601]
  }, {
    name: "VS Magic",
    build: [102,111,203,403,502,602]
  }, {
    name: "VS Balanced",
    build: [103,114,203,404,503,603]
  }],
  runeBuilds: [{
    name: "VS Attack",
    runes: {
      101: 1,
      102: 8,
      201: 9,
      302: 9
    }
  },{
    name: "VS Magic",
    runes: {
      101: 1,
      103: 8,
      202: 9,
      303: 9
    }
  }],
  intro: "Van Helsing เป็นฮีโร่ที่จัดอยู่ในกลุ่มแครี่ ซึ่งมีความสามารถในการทำดาเมจได้หนักหน่วงมากๆ อีกทั้งยังมีสกิลที่เพิ่มความเร็วในระยะเวลาสั้นๆ ทำให้เค้าสามารถทำการ kite (ตอดศัตรูจากระยะไกล)  ได้ดีเพราะสามารถเคลื่อนที่ไปมาได้รวดเร็วจากผลของสกิลแทบจะทุกท่าของเค้า อีกทั้งยังมีท่าที่สามารถทำให้ศัตรูสตั๊นได้ถึง 2 สกิลด้วยกันคือ  Pocket Glaive และ Curse of Death ส่วนเลนที่ไปนั้น เค้าสามารถไปได้ทั้งเลนคู่และเลนเดี่ยว แต่จะให้ดีไปกับเพื่อนที่มีสกิล หยุดศัตรูด้วยอีกแรงจะทำให้เก็บแต้มได้ง่ายขึ้นมาก",
  description: "Van Helsing เป็นฮีโร่ที่จัดอยู่ในกลุ่มแครี่ ซึ่งมีความสามารถในการทำดาเมจได้หนักหน่วงมากๆ อีกทั้งยังมีสกิลที่เพิ่มความเร็วในระยะเวลาสั้นๆ ทำให้เค้าสามารถทำการ kite (ตอดศัตรูจากระยะไกล)  ได้ดีเพราะสามารถเคลื่อนที่ไปมาได้รวดเร็วจากผลของสกิลแทบจะทุกท่าของเค้า อีกทั้งยังมีท่าที่สามารถทำให้ศัตรูสตั๊นได้ถึง 2 สกิลด้วยกันคือ  Pocket Glaive และ Curse of Death ส่วนเลนที่ไปนั้น เค้าสามารถไปได้ทั้งเลนคู่และเลนเดี่ยว แต่จะให้ดีไปกับเพื่อนที่มีสกิล หยุดศัตรูด้วยอีกแรงจะทำให้เก็บแต้มได้ง่ายขึ้นมาก"
};

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

class GuidePost extends Component {
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
    
    const Spells = { flicker, execute };
    const Skills = [Passive, Skill1, Skill2, Ultimate];

    const SkillTree = (skillTree) => {
      const skillBuild = [];

      for (var i = 0; i < skillTree.length; i++) {
        const skillBuildColumn = (
          <div className="skillTreeRow" key={`skillTree${i}`}>
            <div className="skillTreeLevel">{(i+1)}</div>
            <div className={skillTree[i] === 1 && 'checked'}></div>
            <div className={skillTree[i] === 2 && 'checked'}></div>
            <div className={skillTree[i] === 3 && 'checked'}></div>
          </div>
        );
        skillBuild.push(skillBuildColumn);
      }

      return (
        <div className="skillTree">
          <div className="skillTreeHeader">
            <div>Skill</div>
            <div>1</div>
            <div>2</div>
            <div>Ultimate</div>
          </div>
          {skillBuild}
        </div>
      )
    }

    const Guides = [];
    for (var i = 0; i < 10; i++) {
      Guides.push(Guide(i));
    }

    const ItemTree = (itemTrees) => {
      const itemBuilds = [];
      itemTrees.forEach(({ name, build }, i) => {
        const itemBuild = [];
        build.forEach((item, i) => {
          itemBuild.push(
            <img className="item" key={`item${i}`} alt="item" src={`https://s3-ap-southeast-1.amazonaws.com/lnw-static/armory/${item}.png`} />
          )
        });
        itemBuilds.push(
          <div key={`itemTree${i}`}>
            <div className="itemBuildName">
              { name }
            </div>
            <div className="itemBuild">
              { itemBuild }
            </div>
          </div>
        )
      })
      return itemBuilds;
    }

    const RuneTree = (runeTrees) => {
      const runeBuilds = [];
      runeTrees.forEach(({ name, runes }, i) => {
        const runeBuild = [];
        const runesList = Object.keys(runes);
        const sortedRunesList = runesList.sort();

        sortedRunesList.forEach((rune, k) => {
          const runeName = runeData[rune].name;
          const runeEffect = runeData[rune].effect;
          const runeNumber = runes[rune];

          const totalRuneEffects = getTotalRuneEffects(runeEffect, runeNumber);


          runeBuild.push(
            <div key={k} className="runeCol">
              <img className="rune" alt="rune" src={`https://s3-ap-southeast-1.amazonaws.com/lnw-static/runes/${rune}.png`} />
              <div className="runeName">{`${runeName} x ${runeNumber}`}</div>
              <div className="runeMeta"> {totalRuneEffects} </div>
            </div>
          )
        });

        runeBuilds.push(
          <div key={i} className="runeBuild">
            <div className="runeBuildName">
              { name }
            </div>
            { runeBuild }
          </div>
        )
      })
      return runeBuilds;
    }

    return (
      <div>
        <div className="guidePostCard" key={i}>
          <span className="guidePostTitle">
            Airi สายเปิดอัลติ นินจาสาวที่โลกลืม!asmndfm,nsadfmnasdlkfnlaksdfjlksajdflksjadlkfjasldk;j
          </span>
          <div className="guidePostMeta">
            <span className="guideViewCount"> 230 วิว </span>
            <span className="guideLikeCount"> 10 like </span>
            <span className="guideCommentCount"> 5 comments</span>
            <span className="guideAuthor"> ceruberu </span>
          </div>
        </div>
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
          <header className="sectionTitle">Intro</header>
          <div className="guideIntro">
            {mockHeroGuide.intro}
          </div>
        </section>
        <section>
          <header className="sectionTitle">Spells</header>
          <div className="guideSpells">
            <img className="guideSpell" alt="spell1" src={`${Spells[mockHeroGuide.spell[0]]}`} />
            <img className="guideSpell" alt="spell2" src={`${Spells[mockHeroGuide.spell[1]]}`} />
          </div>
        </section>
        <section>
          <header className="sectionTitle">Skills</header>
          { SkillTree(mockHeroGuide.skill) }
        </section>
        <section>
          <header className="sectionTitle">Item Build</header>
          { ItemTree(mockHeroGuide.itemBuilds) }
        </section>
        <section>
          <header className="sectionTitle">Runes</header>
          { RuneTree(mockHeroGuide.runeBuilds) }
        </section>
      </div>
    );
  }
}

export default GuidePost;
