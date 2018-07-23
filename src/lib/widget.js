const template = require('./template.js');
const registerListeners = require('./input.js');

const aside = document.querySelector('aside');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

let active = '';

class Widget {
  constructor(name, icon, description, options, settings, state) {
    this.name = name;
    this.icon = icon;
    this.description = description;
    this.options = options;
    this.settings = settings;
    this.state = state;

    // Set default tab to active
    if (this.state.default === true) {
      active = this.name;
    }

    this.init();
  }

  init() {
    const html = `
      <div>
        <div class="icon">${this.icon}</div>
        <div class="title">${this.name}</div>
        <div class="description">${this.description}</div>
      </div>
    `;

    const div = template(html);
    aside.appendChild(div);

    div.addEventListener('click', () => {
      if (active !== this.name) {
        main.innerHTML = this.settings;
        footer.innerHTML = this.options;
        registerListeners();

        active = this.name;
      }
    });

    if (this.state.default === true) {
      main.innerHTML = this.settings;
      footer.innerHTML = this.options;
      registerListeners();

      active = this.name;
    }
  }
}

module.exports = Widget;
