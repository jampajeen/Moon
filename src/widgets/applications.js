const Widget = require('../lib/widget.js');

const name = 'applications';
const icon = '⌨️';
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
