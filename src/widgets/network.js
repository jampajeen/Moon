const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'network';
const icon = feather.icons.wifi.toSvg();
const description = 'Display network connectivity.';

const settings = '';
const options = '';
const state = {};
const start = () => {};

const Network = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Network;
