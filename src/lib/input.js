const registerListeners = () => {
  // Number inputs
  const numInputs = document.querySelectorAll('.input-text');
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

  // Widget display checkbox
  const display = document.querySelector('.display-checkbox');
  if (display) {
    display.addEventListener('change', (e) => {
      const o = document.querySelector('.options');
      const x = o.querySelectorAll('input, select');
      if (e.target.checked === false) {
        x.forEach((el) => { el.disabled = true; });
        o.classList.add('disabled');
        document.querySelector('.active').closest('.widget').classList.add('gray');
      } else {
        x.forEach((el) => { el.disabled = false; });
        o.classList.remove('disabled');
        document.querySelector('.active').closest('.widget').classList.remove('gray');
      }
    });
  }
};

module.exports = registerListeners;
