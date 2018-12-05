import React, { Component } from 'react';
import { formatDistance, subDays } from 'date-fns';
import './GuidePost.css';

import runeData from '../json/runes.json';
import profilePic from '../images/display.jpg';

const staticAddress = 'https://s3-ap-southeast-1.amazonaws.com/lnw-static';

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
      <div key={`runeEffect${i}`} className="runeEffect">
       {`${description}: ${(parseFloat(amount)*100*runeAmount) / 100}${isPercent ? '%' : ''}`}
      </div>
    ) 
  })

  return resultEffect;
}

function commentsTree (comments) {
  const commentsArray = [];
  comments.forEach((comment, i) => {
    const timeInDistance = formatDistance(
      comment.createdAt,
      new Date(),
      { addSuffix: true }
    );
    commentsArray.push(
      <div key={`comment${i}`} className="comment">
        <div className="commentMeta">
          <img className="commentProfile" alt="profile" src={profilePic} />
          <div className="commentAuthor">{comment.username}</div>
          <div className="commentCreatedAt">{timeInDistance}</div>
        </div>
        <div className="commentContent">
          { comment.comment }
        </div>
      </div>
    )
  })
  return commentsArray;

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
  description: "Van Helsing เป็นฮีโร่ที่จัดอยู่ในกลุ่มแครี่ ซึ่งมีความสามารถในการทำดาเมจได้หนักหน่วงมากๆ อีกทั้งยังมีสกิลที่เพิ่มความเร็วในระยะเวลาสั้นๆ ทำให้เค้าสามารถทำการ kite (ตอดศัตรูจากระยะไกล)  ได้ดีเพราะสามารถเคลื่อนที่ไปมาได้รวดเร็วจากผลของสกิลแทบจะทุกท่าของเค้า อีกทั้งยังมีท่าที่สามารถทำให้ศัตรูสตั๊นได้ถึง 2 สกิลด้วยกันคือ  Pocket Glaive และ Curse of Death ส่วนเลนที่ไปนั้น เค้าสามารถไปได้ทั้งเลนคู่และเลนเดี่ยว แต่จะให้ดีไปกับเพื่อนที่มีสกิล หยุดศัตรูด้วยอีกแรงจะทำให้เก็บแต้มได้ง่ายขึ้นมาก",
  comments: [{
    username: "neoDKK",
    comment: "ตั้งเเต่ดูดอยมาคลิปนี้โครตมันอยากให้ทุกๆคลิปของพี่ดอยสนุกเเบบนี้นะคับ ทำต่อไปเรื่อยๆนะคับ﻿ ตั้งเเต่ดูดอยมาคลิปนี้โครตมันอยากให้ทุกๆคลิปของพี่ดอยสนุกเเบบนี้นะคับทำต่อไปเรื่อยๆนะคับ﻿",
    likes: 51,
    createdAt: subDays(new Date(), 1)
  },{ 
    username: "ceruberu",
    comment: "555555",
    likes: 0,
    createdAt: subDays(new Date(), 2)
  }]
};

const Guide = (i) => (
  <div className="guideCleanCard" key={`guideCard${i}`}>
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
  render() {
    const SkillTree = (skillTree) => {
      const skillBuild = [];

      for (var i = 0; i < skillTree.length; i++) {
        const skillBuildColumn = (
          <div className="skillTreeRow" key={`skillTree${i}`}>
            <div className="skillTreeLevel">{(i+1)}</div>
            <div className={skillTree[i] === 1 ? 'checked' : undefined}></div>
            <div className={skillTree[i] === 2 ? 'checked' : undefined}></div>
            <div className={skillTree[i] === 3 ? 'checked' : undefined}></div>
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
            <img className="item" key={`item${i}`} alt="item" src={`${staticAddress}/armory/${item}.png`} />
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
            <div key={`runeCol${k}`} className="runeCol">
              <img className="rune" alt="rune" src={`${staticAddress}/runes/${rune}.png`} />
              <div className="runeName">{`${runeName} x ${runeNumber}`}</div>
              <div className="runeMeta"> {totalRuneEffects} </div>
            </div>
          )
        });

        runeBuilds.push(
          <div key={`runeBuild${i}`} className="runeBuild">
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
        <img className="heroSplash" alt="heroSplash"/>
        <div className="heroTitle">
          <img className="heroIcon" alt="heroIcon"/>
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
          <header className="sectionTitle">Spells</header>
          <div className="guideSpells">
            <img className="guideSpell" alt="spell1" src={`${staticAddress}/spells/${mockHeroGuide.spell[0]}.png`} />
            <img className="guideSpell" alt="spell2" src={`${staticAddress}/spells/${mockHeroGuide.spell[1]}.png`} />
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
        <section>
          <header className="sectionTitle">Description</header>
          <div className="guideDescription">
          { mockHeroGuide.description }
          </div>
        </section>
        <section>
          <div className="guideLike">
            Like
          </div>
        </section>
        <section>
          <header className="sectionTitle">Comments</header>
          <div className="guideComments">
            { commentsTree(mockHeroGuide.comments) }
          </div>
        </section>
      </div>
    );
  }
}

export default GuidePost;
