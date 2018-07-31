const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'applications';
const icon = feather.icons.sliders.toSvg();
const description = 'Shortcut to launch an application.';

const settings = () => '<span>settings</span>';
const options = () => '<span>hi</span>';
const state = {
  display: true,
};
const start = () => {};

const Applications = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Applications;
