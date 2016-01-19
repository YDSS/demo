import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import Count from './Count.jsx';

let $wrap = document.getElementById('wrapper');

ReactDOM.render(<Count store={store} />, $wrap);
