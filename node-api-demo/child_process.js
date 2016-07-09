'use strict';
// test spawn
// const spawn = require('child_process').spawn;
// const ls = spawn('ls', ['-la']);
// 
// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });
// 
// ls.on('close', (code) => {
//     console.log(`exit code: ${code}`);
// });
// test exec
const execFile = require('child_process').execFile;
execFile('./opt', ['-a123', '-b456', '-c'], {}, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
    console.log(stdout);
});
