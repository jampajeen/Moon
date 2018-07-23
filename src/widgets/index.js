/* eslint-disable */
const fs = require('fs');

const list = fs.readdirSync('./src/widgets').filter(
  file => file.endsWith('.js')
  && file !== 'index.js'
  && file !== 'preview.js'
);

// Ensure preview comes first
require('./preview.js');

list.forEach((file) => {
  const m = require(`./${file}`);
  module.exports[m.name] = m;
});
