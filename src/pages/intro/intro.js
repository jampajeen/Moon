const { ipcRenderer } = require('electron');

const pages = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.progress > div');
const finish = document.querySelector('.finish');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const activeIndex = parseInt(document.querySelector('.active-button').getAttribute('data-page'), 10);
    const clickedIndex = parseInt(button.getAttribute('data-page'), 10);
    let newIndex;

    if (clickedIndex > activeIndex) {
      newIndex = activeIndex + 1;
      pages[activeIndex].style.left = '-2000px';
    } else if (clickedIndex < activeIndex) {
      newIndex = activeIndex - 1;
      pages[activeIndex].style.left = '2000px';
    }

    pages[newIndex].style.left = '0';
    buttons[activeIndex].classList.remove('active-button');
    buttons[newIndex].classList.add('active-button');
  });
});

finish.addEventListener('click', () => {
  ipcRenderer.send('doneIntroduction');
});
