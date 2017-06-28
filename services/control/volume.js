var exec = require('child_process').exec;

var cmdMute = 'amixer -q sset PCM toggle';
var cmdUp = 'amixer -q sset PCM 5%+';
var cmdDown = 'amixer -q sset PCM 5%-'; 


exec(cmd, function(error, stdout, stderr) {
    if (error) console.log(error);
    // command output is in stdout
    console.log(stdout);
});

/*var child = require('child_process');
var ps = child.spawn('python', ['-i']);
ps.stdout.pipe(process.stdout);
ps.stdin.write('1+1');
ps.stdin.end();
*/