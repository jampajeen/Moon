const options = require('../../widgets/options.js');
const previewOptions = require('../../widgets/preview.js');
const template = require('../../lib/template.js');
const widgets = require('../../widgets');

const aside = document.querySelector('aside');
const footer = document.querySelector('.footer');
const preview = document.querySelector('.preview-button');

const registerListeners = () => {
  const numInputs = document.querySelectorAll('.input-number');
  numInputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
      const v = parseInt(String.fromCharCode(e.keyCode), 10);
      if (Number.isNaN(v) && e.which !== 8 && e.which !== 9) {
        e.preventDefault();
        return false;
      }
      return true;
    });
  });

  const hexInputs = document.querySelectorAll('.input-hex');
  hexInputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      const val = e.target.value;
      const span = e.target.nextElementSibling.nextElementSibling;
      if (val.match(/^(?:[0-9a-fA-F]{3}){1,2}$/)) {
        span.style.background = `#${val}`;
      } else {
        span.style.background = '#1e1e1e';
      }
    });
  });
};

const widget = (icon, title, description) => {
  const html = `
    <div>
      <div class="icon">${icon}</div>
      <div class="title">${title}</div>
      <div class="description">${description}</div>
    </div>
  `;

  const div = template(html);

  div.addEventListener('click', () => {
    const leftOptions = document.querySelector('.left-options');

    if (leftOptions && leftOptions !== '') leftOptions.remove();
    footer.prepend(options);

    // Re-register event listeners
    registerListeners();
  });

  return div;
};

// Populate the sidebar with widgets and their information
Object.values(widgets).forEach((value) => {
  const d = widget(value.icon, value.name, value.description, value.settings, value.options);
  aside.appendChild(d);
});

preview.addEventListener('click', () => {
  const leftOptions = document.querySelector('.left-options');

  if (leftOptions && leftOptions !== '') leftOptions.remove();
  footer.prepend(previewOptions);
});
