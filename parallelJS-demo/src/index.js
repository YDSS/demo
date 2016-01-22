import Parallel from 'parallel';

let p = new Parallel([123, 21334, 435, 123]);

p.spawn(data => {
    return data.sort((a, b) => a - b);
})
    .then(ret => {
        console.log(ret);
    });
