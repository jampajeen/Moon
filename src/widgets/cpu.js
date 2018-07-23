const Widget = require('../lib/widget.js');

const name = 'CPU';
const icon = '💾';
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
