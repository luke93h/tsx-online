import React from 'react';
import './App.css';
import * as monaco from 'monaco-editor';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      if (label === 'json') {
        return './json.worker.js';
      }
      if (label === 'css') {
        return './css.worker.js';
      }
      if (label === 'html') {
        return './html.worker.js';
      }
      if (label === 'typescript' || label === 'javascript') {
        return './ts.worker.js';
      }
      return './editor.worker.js';
    },
  };
  componentDidMount(){
    monaco.editor.create(document.getElementById('container'), {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: 'javascript'
    });
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    return (
      <div id='container'>

      </div>
    );
  }
}

export default App;
