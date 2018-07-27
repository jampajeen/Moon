const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'date';
const icon = feather.icons.calendar.toSvg({ width: 10, height: 10 });
const description = 'Display the current date and time.';

const settings = '';
const options = '';
const state = {};

const Date = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Date;
