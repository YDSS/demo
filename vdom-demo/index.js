const snabbdom = require('snabbdom');
const patch = snabbdom.init([
    require('snabbdom/modules/class').default,
    require('snabbdom/modules/style').default,
    require('snabbdom/modules/eventlisteners').default
]);
const h = require('snabbdom/h').default;

let data = [123];
let vnode;
const $container = document.getElementById('container');
const inputView = (data) => {
    return h('div.wrap', {}, [
        h('input', {
            on: {keydown: addItem},
            props: {
                type: 'text'
            }
        }),
        h('div.list', data.map(val => {
            return h('p.row', {}, val);
        }))
    ]);
}

document.addEventListener('DOMContentLoaded', ev => {
    vnode = patch($container, inputView(data));
});

function addItem(ev) {
    if (ev.keyCode && ev.keyCode === 13) {
        let input = h('#input');
        let text = input.text;
        debugger
        data.push(text);

        patch(vnode, inputView(data));
    }
}
