// window.onpopstate = function (ev) {
//     console.log(ev);
// }
// 
// setTimeout(() => {
//     history.pushState({search: '?a=1'}, 'test', '/index.html');
//     history.back();
// }, 2000);

import {createHistory} from 'history';

let history = window.his = createHistory();

let unlisten = history.listen(location => {
    console.log(location);
});

history.listenBefore(location => {
    console.log(location);
    return 'hi there';
});

// history.push({
//     pathname: '/home',
//     search: '?a=1',
//     state: { some: 'state'}
// });

history.push({ ...location, search: '?foo=bar'});
