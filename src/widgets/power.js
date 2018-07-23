const Widget = require('../lib/widget.js');

const name = 'power';
const icon = '💡';
const description = 'Put your computer to sleep.';

const settings = '';
const options = '';
const state = {};

const Power = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Power;
