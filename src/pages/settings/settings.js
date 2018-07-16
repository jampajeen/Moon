const { ipcRenderer } = require('electron');

const menu = document.querySelector('.menu-bar');
const dock = document.querySelector('.dock');
const menuButton = document.querySelector('.menu-button');
const dockButton = document.querySelector('.dock-button');

menuButton.addEventListener('click', () => {
  if (menu.style.visibility === 'visible' || !menu.style.visibility) {
    menu.style.visibility = 'hidden';
  } else {
    menu.style.visibility = 'visible';
  }
});

dockButton.addEventListener('click', () => {
  const l = dock.classList;
  // center -> left -> right -> hidden
  if (l.contains('center')) {
    l.remove('center');
    l.add('left');
  } else if (l.contains('left')) {
    l.remove('left');
    l.add('right');
  } else if (l.contains('right')) {
    l.remove('right');
    l.add('hidden');
  } else if (l.contains('hidden')) {
    l.remove('hidden');
    l.add('center');
  }
});

const launch = document.querySelector('.launch-button');

launch.addEventListener('click', () => {
  ipcRenderer.send('launchBar');
});
