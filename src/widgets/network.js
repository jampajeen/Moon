const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'network';
const icon = feather.icons.wifi.toSvg({ width: 10, height: 10 });
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
