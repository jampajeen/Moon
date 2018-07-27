const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'applications';
const icon = feather.icons.menu.toSvg({ width: 10, height: 10 });
const description = 'Shortcut to launch an application.';

const settings = '';
const options = '';
const state = {};

const Applications = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Applications;
