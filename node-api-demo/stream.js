const fs = require('fs');

var rr = fs.createReadStream('./fs.txt');

rr.pipe(process.stdout);

rr.on('readable', () => {
    // rr.unpipe();
    console.log('file readable');

});

rr.on('end', () => {
    console.log('file read done!');
});
