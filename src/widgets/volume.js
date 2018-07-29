const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'volume';
const icon = feather.icons['volume-2'].toSvg();
const description = 'Display the volume level.';

const settings = '';
const options = '';
const state = {};
const start = () => {};

const Volume = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Volume;
