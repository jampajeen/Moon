const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'screen';
const icon = feather.icons.monitor.toSvg();
const description = 'Display the current workspace or display.';

const settings = () => '<span>settings</span>';
const options = () => '<span>options</span>';
const state = {
  display: true,
};

const start = () => {};

const Screen = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Screen;
