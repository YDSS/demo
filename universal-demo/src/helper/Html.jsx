import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class Html extends Component {

    static propTypes = {
        component: PropTypes.node,
        store: PropTypes.object
    }

    render() {
        const {component, store} = this.props;
        const content = component ? ReactDOM.renderToString(component) : '';
        return (
            <html>
                <head>
                    <title>React Universal App Demo</title>
                </head>
                <body>
                    <div id='content' dangerouslySetInnerHTML={{__html: content}}></div>
                    <script dangerouslySetInnerHTML={{__html: `window.__data=${JSON.stringify(store.getState());}`}}/>
                </body>
            </html>
        );
    }

}

export default Html;
