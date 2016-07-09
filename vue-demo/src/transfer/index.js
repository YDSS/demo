import Vue from 'vue';

import './index.css';

let vm = new Vue({
    el: '#main',
    data: {
        leftItems: ['a', 'b', 'c'],
        rightItems: ['d', 'e', 'f'],
        leftChecks: [],
        rightChecks: []
    },
    methods: {
        toRight: function (ev) {
            this.rightItems = this.rightItems.concat(this.leftChecks);
            this.rightItems.filter(e => {
                let flag = true;

                this.leftChecks.map(item => {
                    if (item === e) flag = false;
                });

                return flag;
            });
        },
        toLeft: function (ev) {
            this.leftItems = this.leftItems.concat(this.rightChecks);
            this.leftItems.filter(e => {
                let flag = true;

                this.rightChecks.map(item => {
                    if (item === e) flag = false;
                });

                return flag;
            });
        }
    }
});


