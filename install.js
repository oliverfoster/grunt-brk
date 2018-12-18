const fs = require('fs-extra')
const path = require('path');

try {
  [
    './bin/grunt-brk',
    './bin/grunt-brk.cmd'
  ].forEach((name)=>{
    const src = path.join(__dirname, name);
    const dest = path.join(__dirname, '../../', name);
    fs.copySync(src, dest);
    fs.chmodSync(src, 0777);
  });
  console.log('Success!');
} catch (err) {
  console.error(err);
}
