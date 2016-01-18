import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './foo.jsx';
import './index.scss';

let $wrap = document.getElementById('wrapper');

let rootInstance = ReactDOM.render(<HelloWorld />, $wrap);

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            return [rootInstance];
        }
    });
}
