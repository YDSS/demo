import React from 'react';
import marked from 'marked';

const Text = (props) => {
    let __html = marked(props.text);

    return <p dangerouslySetInnerHTML={__html}></p>;
};

export default Text;
