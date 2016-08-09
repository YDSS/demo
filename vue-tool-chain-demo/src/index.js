'use strict';

const Vue = require('vue');
require('./component/list/list');

let vm = new Vue({
    el: '#container',
    data: {
        text: 'Hello World!',
        data: ['a', 'b', 'c']
    },
    template: '<p>{{ text }}</p><list data={{ data }}></list>'
});
