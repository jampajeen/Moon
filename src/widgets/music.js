const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'music';
const icon = feather.icons.music.toSvg();
const description = 'Display the current song from iTunes or Spotify.';

const settings = '';
const options = '';
const state = {};
const start = () => {};

const Music = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Music;
