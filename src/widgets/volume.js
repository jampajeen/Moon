const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'volume';
const icon = feather.icons['volume-2'].toSvg({ width: 10, height: 10 });
const description = 'Display the volume level.';

const settings = '';
const options = '';
const state = {};

const Volume = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Volume;
