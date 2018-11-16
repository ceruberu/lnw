import React, { Component } from 'react';
import './Preview.css';
import wukong from './heroes/wukong/167.jpg';

class PreviewGuide extends Component {
  constructor(props){
    super(props);
    console.log("Preview Guide PROPS:: ", props);
  }

  render() {
    return (
      <section className="previewTable">
        <header className="previewTitle">
          {this.props.title}
        </header>
        <div className="previewContent">
          <div className="previewGuide">
            <img className="previewHero" src={wukong} alt="wukong" />
            <div className="previewInfo"> 
              <div className="previewGuideTitle">
                <span>[Wukong] </span>วิธีการเล่น Wukong ROV ให้เทพ คริ 100% พร้อมเทคนิคการเล่นแบบเทพๆ
              </div>
              <div className="previewGuideMeta">

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PreviewGuide;
