const fs = require('fs');

const content = Buffer.from('this is chokingwin.');

fs.writeFile(
  './text',
  content,
  {
    encoding: 'utf8'
  },
  err => {
    if (err) throw err;
  }
);
