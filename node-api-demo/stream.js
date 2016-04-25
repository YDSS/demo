const fs = require('fs');

var rr = fs.createReadStream('./fs.txt');

rr.on('readable', () => {
    console.log('file readable');
});

rr.on('data', (chunk) => {
    console.log('chunk: ' + chunk);
});

rr.on('end', () => {
    console.log('file read done!');
});
