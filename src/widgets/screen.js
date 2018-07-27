const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'screen';
const icon = feather.icons.maximize.toSvg({ width: 10, height: 10 });
const description = 'Display the current workspace or display.';

const settings = '';
const options = '';
const state = {};

const Screen = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Screen;
