const Widget = require('../lib/widget.js');

const name = 'screen';
const icon = '🖥';
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
