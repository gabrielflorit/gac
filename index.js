#!/usr/bin/env node
var cmds = [];

if (process.argv.length < 3) {
	console.log('You need to provide a commit message required!');
	process.exit(-1);
}

cmds.push('git add -A');
cmds.push('git commit -m "'+process.argv.slice(2).join(' ')+'"');

require('child_process').exec(cmds.join(' && '), function(err, stdout, stderr) {
  if (err) console.error(err);
  if (stdout) console.log(stdout);
  if (stderr) console.error(stderr);
});
