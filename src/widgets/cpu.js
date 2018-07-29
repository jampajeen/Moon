const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'CPU';
const icon = feather.icons.cpu.toSvg();
const description = 'Display current CPU usage.';

const settings = '';
const options = '';
const state = {};
const start = () => {};

const CPU = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = CPU;
