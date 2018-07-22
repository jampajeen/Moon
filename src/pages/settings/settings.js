const Options = require('../../lib/options.js');
const previewOptions = require('../../lib/preview.js');
const template = require('../../lib/template.js');
const modules = require('../../modules');

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
        span.style.background = '#d0d8e2';
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
    footer.prepend(new Options(title));

    // Re-register event listeners
    registerListeners();
  });

  return div;
};

// Populate the sidebar with widgets and their information
Object.values(modules).forEach((value) => {
  const d = widget(value.icon, value.name, value.description, value.settings, value.options);
  aside.appendChild(d);
});

preview.addEventListener('click', () => {
  const leftOptions = document.querySelector('.left-options');

  if (leftOptions && leftOptions !== '') leftOptions.remove();
  footer.prepend(previewOptions);
});

// Dropdown interaction

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((d) => {
  const active = d.querySelector('.dropdown-active');
  const title = d.querySelector('.dropdown-title');
  const items = d.querySelectorAll('.dropdown-list > div');

  // When dropdown is clicked, toggle list & icon
  active.addEventListener('click', (e) => {
    e.stopPropagation();
    if (d.classList.contains('show')) {
      d.classList.remove('show');
    } else {
      d.classList.add('show');
    }
  });

  // When item is clicked, toggle list & icon
  // and update active selection
  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = e.target.innerHTML;

      if (name && name !== '') {
        d.classList.remove('show');
        title.innerHTML = name;
      }
    });
  });
});

function hideDropdowns() {
  const ds = document.querySelectorAll('.dropdown');
  ds.forEach((d) => {
    if (d.classList.contains('show')) {
      d.classList.remove('show');
    }
  });
}

document.addEventListener('click', hideDropdowns);
