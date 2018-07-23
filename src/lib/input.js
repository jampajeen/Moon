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
};

module.exports = registerListeners;
