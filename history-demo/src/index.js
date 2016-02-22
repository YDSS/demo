// window.onpopstate = function (ev) {
//     console.log(ev);
// }
// 
// setTimeout(() => {
//     history.pushState({search: '?a=1'}, 'test', '/index.html');
//     history.back();
// }, 2000);

import {createHistory} from 'history';

let history = createHistory();

let unlisten = history.listen(location => {
    console.log(location);
});

history.push('/home');
