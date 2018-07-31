const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'power';
const icon = feather.icons.power.toSvg();
const description = 'Put your computer to sleep.';

const settings = () => '<span>settings</span>';
const options = () => '<span>options</span>';
const state = {
  display: true,
};

const start = () => {};

const Power = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Power;
