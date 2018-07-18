/* eslint-disable */
const fs = require('fs');

const list = fs.readdirSync('./src/widgets/modules').filter(file => file.endsWith('.js'));

list.forEach((file) => {
  const m = require(`./modules/${file}`);
  module.exports[m.name] = m;
});
