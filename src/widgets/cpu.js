const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'CPU';
const icon = feather.icons.cpu.toSvg({ width: 10, height: 10 });
const description = 'Display current CPU usage.';

const settings = '';
const options = '';
const state = {};

const CPU = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = CPU;
