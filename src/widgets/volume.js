const Widget = require('../lib/widget.js');

const name = 'volume';
const icon = '🔊';
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
