const feather = require('feather-icons');
const Widget = require('../lib/widget.js');

const name = 'battery';
const icon = feather.icons.battery.toSvg();
const description = 'Display your computer\'s battery level.';

const options = `

<div class="section">
  <div class="label">Battery</div>
  <div class="content">
    <div class="checkbox">
      <input id="battery-c" type="checkbox" checked>
      <label for="battery-c">
        <span>Display</span>
      </label>
    </div>
  </div>
</div>

<div class="section">
  <div class="hr"></div>
</div>

<div class="section">
  <div class="label">Position</div>
  <div class="content">
    <div class="input-text">
      <input type="text" maxlength="4">
      <span>X</span>
    </div>
    <div class="input-text">
      <input type="text" maxlength="4">
      <span>Y</span>
    </div>
  </div>
</div>

<div class="section">
  <div class="label">Size</div>
  <div class="content">
    <div class="input-text">
      <input type="text" maxlength="4">
      <span>W</span>
    </div>
    <div class="input-text">
      <input type="text" maxlength="4">
      <span>H</span>
    </div>
  </div>
</div>

<div class="section">
  <div class="label">Fill</div>
  <div class="content">
    <div class="input-text">
      <input type="text" maxlength="6">
      <span>#</span>
    </div>
    <div class="input-text">
      <input type="text" maxlength="6">
      <span>%</span>
    </div>
  </div>
</div>

<div class="section">
  <div class="hr"></div>
</div>

<div class="section">
  <div class="label">Typeface</div>
  <div class="content">
    <div class="dropdown">
      <select>
        <option value="one">San Francisco</option>
        <option value="two">Hack</option>
        <option value="three">Arial</option>
        <option value="three">Arial</option>
        <option value="three">Arial</option>
        <option value="three">Arial</option>
      </select>
    </div>
  </div>
</div>

<div class="section">
  <div class="label">Align</div>
  <div class="content">
    <div class="segmented-control">
      <div class="align-left">
        ${feather.icons['align-left'].toSvg()}
      </div>
      <div class="align-center selected">
      ${feather.icons['align-center'].toSvg()}
      </div>
      <div class="align-right">
      ${feather.icons['align-right'].toSvg()}
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="label">Font</div>
  <div class="content">
    <div class="input-text">
      <input type="text" maxlength="4">
      <span>PX</span>
    </div>
    <div class="input-text">
      <input type="text" maxlength="6">
      <span>#</span>
    </div>
  </div>
</div>

<div class="section">
  <div class="hr"></div>
</div>

<div class="section">
  <div class="label">Border</div>
  <div class="content">
    <div class="input-text">
      <input type="text" maxlength="4">
      <span>PX</span>
    </div>
    <div class="input-text">
      <input type="text" maxlength="6">
      <span>#</span>
    </div>
  </div>
</div>

<div class="section">
  <div class="label">Radius</div>
  <div class="content">
    <div class="input-text small">
      <input type="text" maxlength="2" placeholder="TL">
      <span></span>
    </div>
    <div class="input-text small">
      <input type="text" maxlength="2" placeholder="TR">
      <span></span>
    </div>
    <div class="input-text small">
      <input type="text" maxlength="2" placeholder="BL">
      <span></span>
    </div>
    <div class="input-text small">
      <input type="text" maxlength="2" placeholder="BR">
      <span></span>
    </div>
  </div>
</div>
`;

const settings = 'settings';
const state = {};
const start = () => {};

const Battery = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
  start,
);

module.exports = Battery;
