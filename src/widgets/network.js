const Widget = require('../lib/widget.js');

const name = 'network';
const icon = '📶';
const description = 'Display network connectivity.';

const settings = '';
const options = '';
const state = {};

const Network = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Network;
