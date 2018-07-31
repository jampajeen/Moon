const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'date';
const icon = feather.icons.calendar.toSvg();
const description = 'Display the current date and time.';

const settings = () => '<span>settings</span>';
const options = () => '<span>options</span>';
const state = {
  display: true,
};

const start = () => {};

const Date = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Date;
