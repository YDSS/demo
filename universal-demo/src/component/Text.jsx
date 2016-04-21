import React from 'react';
import marked from 'marked';

const Text = (props) => {
    return <p dangerouslySetInnerHTML={{__html: marked(props.text)}}></p>;
};

export default Text;
