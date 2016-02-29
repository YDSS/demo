import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

import 'draft-js/dist/Draft.css';

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }
    render() {
        const {editorState} = this.state;
        return <Editor editorState={editorState} onChange={this.onChange} />;
    }
}

const $wrap = document.getElementById('wrapper');
ReactDOM.render(
    <MyEditor />,
    $wrap
);
