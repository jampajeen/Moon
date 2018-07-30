const feather = require('feather-icons');
const Widget = require('../lib/widget.js');
const { activate } = require('../lib/helpers.js');

const name = 'battery';
const icon = feather.icons.battery.toSvg();
const description = 'Display your computer\'s battery level.';

const options = `
<div class="section">
  <div class="label">${name}</div>
  <div class="content">
    <div class="checkbox">
      <input id="${name}-c" class="display-checkbox" type="checkbox" checked>
      <label for="${name}-c">
        <span>Display</span>
      </label>
    </div>
  </div>
</div>

<div class="section">
  <div class="hr"></div>
</div>

<div class="options">

  <div class="section">
    <div class="label">Position</div>
    <div class="content">
      <div class="input-text" title="Position on X axis">
        <input type="text" maxlength="4">
        <span>X</span>
      </div>
      <div class="input-text" title="Position on Y axis">
        <input type="text" maxlength="4">
        <span>Y</span>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="label">Size</div>
    <div class="content">
      <div class="input-text" title="Widget Width">
        <input type="text" maxlength="4">
        <span>W</span>
      </div>
      <div class="input-text" title="Widget Height">
        <input type="text" maxlength="4">
        <span>H</span>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="label">Fill</div>
    <div class="content">
      <div class="input-text" title="Background Color">
        <input type="text" maxlength="6">
        <span>#</span>
      </div>
      <div class="input-text" title="Background Opacity">
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
      <div class="dropdown" title="Font Name">
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
        <div title="Align Text Left" data-name="left">
          ${feather.icons['align-left'].toSvg()}
        </div>
        <div title="Align Text Center" class="selected" data-name="center">
        ${feather.icons['align-center'].toSvg()}
        </div>
        <div title="Align Text Right" data-name-"right">
        ${feather.icons['align-right'].toSvg()}
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="label">Font</div>
    <div class="content">
      <div class="input-text" title="Font Size">
        <input type="text" maxlength="4">
        <span>PX</span>
      </div>
      <div class="input-text" title="Font Color">
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
      <div class="input-text" title="Border Size">
        <input type="text" maxlength="4">
        <span>PX</span>
      </div>
      <div class="input-text" title="Border Color">
        <input type="text" maxlength="6">
        <span>#</span>
      </div>
    </div>
  </div>

</div>
`;

const settings = 'settings';
const state = {};
const start = () => {
  const controls = document.querySelectorAll('.segmented-control > div');
  controls.forEach((button) => {
    button.onclick = () => {
      activate(button, 'selected');
    };
  });
};

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
