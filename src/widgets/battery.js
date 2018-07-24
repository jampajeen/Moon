const Widget = require('../lib/widget.js');

const name = 'battery';
const icon = '🔋';
const description = 'Display your computer\'s battery level.';

const options = `
<div class="options ${name}">
  <div class="section">
    <div>
      <div class="section-title">Position</div>
      <div class="section-content row">
        <div>
          <div class="input">
            <input name="position-top" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="top">
            <span></span>
          </div>
          <div class="input">
            <input name="position-bottom" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="bottom">
            <span></span>
          </div>
        </div>
        <div>
          <div class="input">
            <input name="position-left" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="left">
            <span></span>
          </div>
          <div class="input">
            <input name="position-right" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="right">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div>
      <div class="section-title">Size</div>
      <div class="section-content column">
        <div class="input">
          <input name="size-width" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="width">
          <span></span>
        </div>
        <div class="input">
          <input name="size-height" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="height">
          <span></span>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div>
      <div class="section-title">Padding</div>
      <div class="section-content row">
        <div>
          <div class="input">
            <input name="padding-top" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="top">
            <span></span>
          </div>
          <div class="input">
            <input name="padding-bottom" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="bottom">
            <span></span>
          </div>
        </div>
        <div>
          <div class="input">
            <input name="padding-left" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="left">
            <span></span>
          </div>
          <div class="input">
            <input name="padding-right" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="right">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div>
      <div class="section-title">Font</div>
      <div class="section-content column">
        <div class="input">
          <input name="font-size" class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="size">
          <span></span>
        </div>
        <div class="input">
          <input name="font-color" class="input-hex" type="text" pattern="\\d{6}" maxlength="6" placeholder="color">
          <span></span>
          <div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div>
      <div class="section-title">Widget</div>
      <div class="section-content column">
        <div class="button update">Update</div>
        <div class="button save">Save</div>
      </div>
    </div>
  </div>

</div>
`;


const settings = `
<div class="settings">
  <div class="widget-preview">
    <div>68%</div>
  </div>

  <div class="widget-settings">
    <div class="widget-settings-left">

      <div class="widget-title">
        <h1>Battery</h1>
      </div>

      <div class="table">

        <div class="table-row">
          <div>Font</div>
          <div>
            <div class="checkbox alone">
              <input id="c11" type="checkbox" checked>
              <label for="c11">Enabled</label>
            </div>
          </div>
          <div>
            <div class="dropdown">
              <div class="dropdown-active">
                <div class="dropdown-title" data-name="">select</div>
                <span class="dropdown-icon down"></span>
              </div>
              <div class="dropdown-items">
                <div class="dropdown-list">
                  <div>Select</div>
                  <div>Arial</div>
                  <div>Monaco</div>
                  <div>Hack</div>
                  <div>Futura</div>
                  <div>Helvetica</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="table-row">
          <div>Border Color</div>
          <div>
            <div class="checkbox alone">
              <input id="c11" type="checkbox" checked>
              <label for="c11">Enabled</label>
            </div>
          </div>
          <div>
            <div class="input">
              <input name="border-color" class="input-hex" type="text" pattern="\\d{6}" maxlength="6" placeholder="color">
              <span></span>
              <div></div>
            </div>
          </div>
        </div>

        <div class="table-row">
          <div>Border Size</div>
          <div>
            <div class="checkbox alone">
              <input id="c11" type="checkbox" checked>
              <label for="c11">Enabled</label>
            </div>
          </div>
          <div>
            <div class="input">
              <input name="border-size" class="input-number" type="text" pattern="\\d{4}" maxlength="4">
              <span></span>
            </div>
          </div>
        </div>

        <div class="table-row">
          <div>Background Color</div>
          <div>
            <div class="checkbox alone">
              <input id="c11" type="checkbox" checked>
              <label for="c11">Enabled</label>
            </div>
          </div>
          <div>
            <div class="input">
              <input name="bg-color" class="input-hex" type="text" pattern="\\d{6}" maxlength="6" placeholder="color">
              <span></span>
              <div></div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- <div class="widget-settings-right">
      <div class="textarea">
        <span>Custom CSS</span>
        <textarea></textarea>
      </div>
    </div> -->

  </div>
</div>
`;

const state = {
  display: true,
  position: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

const Battery = new Widget(
  name,
  icon,
  description,
  options,
  settings,
  state,
);

module.exports = Battery;
