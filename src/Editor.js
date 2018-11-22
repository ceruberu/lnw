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
          toolbarButtonsXS: ['bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', 'insertImage', 'insertVideo'],
                  // Set max image size to 5MB.
          imageMaxSize: 5 * 1024 * 1024,
 
          // Allow to upload PNG and JPG.
          imageAllowedTypes: ['jpeg', 'jpg', 'png'],

          imageUploadToS3: {
            bucket: 'editor',
            region: 's3-ap-northeast-2',
            keyStart: 'uploads/'
          }
        }}
      />
    );
  }
}

export default Editor;
