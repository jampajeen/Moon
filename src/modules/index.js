/* eslint-disable */
const fs = require('fs');

const list = fs.readdirSync('./src/modules').filter(
  file => file.endsWith('.js') && file !== 'index.js'
);

list.forEach((file) => {
  const m = require(`./${file}`);
  module.exports[m.name] = m;
});
