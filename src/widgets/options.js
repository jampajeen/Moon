const template = require('../lib/template.js');

const footer = () => {
  const html = `
  <div class="left-options">
    <div class="section">
      <div class="section-title">Position</div>
      <div class="section-content row">
        <div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="top">
            <span></span>
          </div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="bottom">
            <span></span>
          </div>
        </div>
        <div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="left">
            <span></span>
          </div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="right">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Size</div>
      <div class="section-content column">
        <div class="input">
          <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="width">
          <span></span>
        </div>
        <div class="input">
          <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="height">
          <span></span>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Padding</div>
      <div class="section-content row">
        <div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="top">
            <span></span>
          </div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="bottom">
            <span></span>
          </div>
        </div>
        <div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="left">
            <span></span>
          </div>
          <div class="input">
            <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="right">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Font</div>
      <div class="section-content column">
        <div class="input">
          <input class="input-number" type="text" pattern="\\d{4}" maxlength="4" placeholder="size">
          <span></span>
        </div>
        <div class="input">
          <input class="input-hex" type="text" pattern="\\d{6}" maxlength="6" placeholder="color">
          <span></span>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  `;

  return template(html);
};

module.exports = footer();
