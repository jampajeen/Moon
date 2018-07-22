const template = require('../lib/template.js');

const footer = () => {
  const html = `
  <div class="left-options">
    <div class="section">
      <div class="section-title">Preview</div>
        <div class="checkbox">
          <input id="c1" type="checkbox">
          <label for="c1">Menu Bar</label>
        </div>
    </div>
  </div>
  `;

  return template(html);
};

module.exports = footer();
