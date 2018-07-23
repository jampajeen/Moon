const Widget = require('../lib/widget.js');

const name = 'preview';
const icon = '☾';
const description = 'Preview your current bar.';

const settings = `
<div class="screen">
  <div class="menu-bar">
    <span></span>
    <div>Moon Preview</div>
  </div>
  <div class="dock">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
`;

const options = `
<div class="options">
  <div class="section">
    <div class="section-title">Preview</div>
    <div class="section-content column flex-start">
      <div class="checkbox">
        <input id="menu-bar-c" type="checkbox" checked>
        <label for="menu-bar-c">Menu Bar</label>
      </div>
      <div class="checkbox">
        <input id="dock-c" type="checkbox" checked>
        <label for="dock-c">Dock</label>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Bar</div>
    <div class="section-content column">
      <div class="checkbox">
        <input id="bar-c" type="checkbox" checked>
        <label for="bar-c">Display</label>
      </div>
      <div class="button save-button">Update</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">File</div>
    <div class="section-content column">
      <div class="button save-button">Import</div>
      <div class="button preview-button">Export</div>
    </div>
  </div>
</div>
`;

const state = {
  // default: true,
};

const Preview = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);
module.exports = Preview;
