'use strict';

const Vue = require('vue');
const tpl = require('./list.tpl');

Vue.component('list', {
    props: ['data'],
    template: tpl
});
