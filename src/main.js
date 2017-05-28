const fs = require('fs');
const syntax = require('./syntax.json');
const translate = require('./translator.js');

function main() {
  const filePath = process.argv[2];
  const source = fs.readFileSync(filePath, {encoding: 'UTF-8'});

  console.log('---------------------------------------------------------');
  console.log(source);
  console.log('---------------------------------------------------------');
  const result = translate(source, syntax.words);
  console.log(result);
  console.log('---------------------------------------------------------');
}

main();