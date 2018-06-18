const { argv, argv0, execArgv, execPath } = process;

argv.forEach(item => {
  console.log(item);
});

console.log('--------------------');

console.log('argv0:' + argv0);
console.log('execArgv:' + execArgv);
console.log('execPath:' + execPath);
