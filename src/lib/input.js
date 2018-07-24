const registerListeners = () => {
  // Number inputs
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

  // Hex code inputs
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

  // Dropdown inputs
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
          title.setAttribute('data-name', name);
        }
      });
    });
  });

  // Close any dropdowns when outside is clicked
  function hideDropdowns() {
    const ds = document.querySelectorAll('.dropdown');
    ds.forEach((d) => {
      if (d.classList.contains('show')) {
        d.classList.remove('show');
      }
    });
  }
  document.addEventListener('click', hideDropdowns);


  // Preview listeners
  const showHide = (selector) => {
    document.querySelector(selector).classList.toggle('hide');
  };

  const menuBarCheckbox = document.querySelector('#menu-bar-c');
  if (menuBarCheckbox) {
    menuBarCheckbox.addEventListener('click', () => {
      showHide('.menu-bar');
    });
  }

  const dockCheckbox = document.querySelector('#dock-c');
  if (dockCheckbox) {
    dockCheckbox.addEventListener('click', () => {
      showHide('.dock');
    });
  }

  // update button
  const update = document.querySelector('.update');
  if (update) {
    update.addEventListener('click', () => {
      const state = {
        position: {
          top: document.querySelector('input[name="position-top"]').value,
          bottom: document.querySelector('input[name="position-bottom"]').value,
          left: document.querySelector('input[name="position-left"]').value,
          right: document.querySelector('input[name="position-right"]').value,
        },
        size: {
          width: document.querySelector('input[name="size-width"]').value,
          height: document.querySelector('input[name="size-height"]').value,
        },
        padding: {
          top: document.querySelector('input[name="padding-top"]').value,
          bottom: document.querySelector('input[name="padding-bottom"]').value,
          left: document.querySelector('input[name="padding-left"]').value,
          right: document.querySelector('input[name="padding-right"]').value,
        },
        font: {
          size: document.querySelector('input[name="font-size"]').value,
          color: document.querySelector('input[name="font-color"]').value,
          name: document.querySelector('.dropdown-title').getAttribute('data-name'),
        },
        border: {
          size: document.querySelector('input[name="border-size"]').value,
          color: document.querySelector('input[name="border-color"]').value,
        },
        background: document.querySelector('input[name="bg-color"]').value,
        // css: document.querySelector('textarea').value,
      };

      // TODO: save this to widget configuration file

      const p = document.querySelector('.widget-preview > div');
      p.style.paddingTop = `${state.padding.top}px`;
      p.style.paddingBottom = `${state.padding.bottom}px`;
      p.style.paddingLeft = `${state.padding.left}px`;
      p.style.paddingRight = `${state.padding.right}px`;

      p.style.width = `${state.size.width}px`;
      p.style.height = `${state.size.height}px`;

      p.style.fontSize = `${state.font.size}px`;
      p.style.color = `#${state.font.color}`;
      p.style.fontFamily = state.font.name;

      p.style.borderWidth = `${state.border.size}px`;
      p.style.borderStyle = 'solid';
      p.style.borderColor = `#${state.border.color}`;

      p.style.background = `#${state.background}`;
    });
  }
};

module.exports = registerListeners;
