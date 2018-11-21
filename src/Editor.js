import React, { Component } from 'react';
import $ from 'jquery';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

import './Editor.css';

window.jquery = window.$ = $;


class Editor extends Component {
  render() {
    return (
      <FroalaEditor 
        model={this.props.model}
        onModelChange={this.props.handleModelChange}
        config={{
          charCounterCount: false,
          placeholderText: "Share your thoughts",
          heightMin: 500,
          editorClass: "asdasdasd"
        }}
      />
    );
  }
}

export default Editor;
