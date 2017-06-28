var exec = require('child_process').exec;

// 1 : mute
// 0 : unmute
var value = 1;
var cmd = ' ' + value;

exec(cmd, function(error, stdout, stderr) {
    // command output is in stdout
    console.log(stdout);
});

/*var child = require('child_process');
var ps = child.spawn('python', ['-i']);
ps.stdout.pipe(process.stdout);
ps.stdin.write('1+1');
ps.stdin.end();
*/