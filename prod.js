const clientArgs = ['run build'];
const clientOpts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', clientArgs, clientOpts);

const serverArgs = ['run prod'];
const serverOpts = { stdio: 'inherit', cwd: 'server', shell: true };
require('child_process').spawn('npm', serverArgs, serverOpts);