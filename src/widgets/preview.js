const feather = require('feather-icons');
const Widget = require('../lib/widget.js');
const { activate, toggle } = require('../lib/helpers.js');

const name = 'preview';
const icon = feather.icons.moon.toSvg();
const description = 'Preview your current bar.';

const settings = `
<div class="screen">
  <div class="menu-bar">
    <span></span>
    <div>Moon Preview</div>
  </div>
  <div class="dock dock-center">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
`;

const options = `

<div class="section">
  <div class="label">Menu Bar</div>
  <div class="content">
    <div class="checkbox">
      <input id="menu-bar-c" type="checkbox" checked>
      <label for="menu-bar-c">
        <span>Display</span>
      </label>
    </div>
  </div>
</div>

<div class="section">
  <div class="label">Dock</div>
  <div class="content">
    <div class="segmented-control dock-select">
      <div title="Align Dock left" data-name="left">
        ${feather.icons['align-left'].toSvg()}
      </div>
      <div title="Align Dock Center" class="selected" data-name="center">
        ${feather.icons['align-center'].toSvg()}
      </div>
      <div title="Align Dock Right" data-name="right">
        ${feather.icons['align-right'].toSvg()}
      </div>
      <div title="Hide Dock" data-name="hide">
        ${feather.icons['eye-off'].toSvg({ width: 5, height: 5 })}
      </div>
    </div>
  </div>
</div>
`;

const state = {
  // default: true,
};

const start = () => {
  // Show and Hide Menu Bar
  const menu = document.querySelector('#menu-bar-c');
  if (menu) {
    menu.onclick = () => {
      toggle(document.querySelector('.menu-bar'), 'hide');
    };
  }

  const dock = document.querySelector('.dock');
  const controls = document.querySelectorAll('.segmented-control > div');
  controls.forEach((button) => {
    button.onclick = () => {
      dock.classList.remove(`dock-${document.querySelector('.selected').getAttribute('data-name')}`);
      dock.classList.add(`dock-${button.getAttribute('data-name')}`);
      activate(button, 'selected');
    };
  });
};

const Preview = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);
module.exports = Preview;
