import React, { Component } from 'react';
import './Preview.css';
import mockPosts from './mockData.json';

class PreviewTable extends Component {
  constructor(props){
    super(props);
    console.log("PREVIEW TABLE PROPS:: ", props);
  }

  render() {
    return (
      <section className="previewTable">
        <header className="previewTitle">
          {this.props.title}
        </header>
        <div className="previewContent">

        </div>
      </section>
    );
  }
}

export default PreviewTable;
