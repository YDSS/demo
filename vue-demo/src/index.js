import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        rawHTML: '<span>YDSS</span>',
        classShow: false,
        toggle: false
    },
    methods: {
        alertMessage() {
            console.log(this);
            alert(this.message);
        }
    }
});
