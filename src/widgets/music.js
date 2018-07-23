const Widget = require('../lib/widget.js');

const name = 'music';
const icon = '🎵';
const description = 'Display the current song from iTunes or Spotify.';

const settings = '';
const options = '';
const state = {};

const Music = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Music;
