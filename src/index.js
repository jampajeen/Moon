const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow } = electron;

let win;

function createWindow(w) {
  win = new BrowserWindow({
    width: w,
    height: 22,
    x: 0,
    y: 0,
    frame: false,
    // transparent: true, vibrancy: dark === square borders
    transparent: false,
    // vibrancy: 'ultra-dark',
    center: false,
    show: false,
    // resizable: false,
    // alwaysOnTop: true,
    // focusable: false,
    // hasShadow: false,
    // maximizable: false,
    // minimizable: false,
    // fullscreenable: false,
    // skipTaskbar: true,
    webPreferences: {
      experimentalFeatures: true,
    },
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  win.once('ready-to-show', () => {
    win.show();
  });

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', () => {
  const { width } = electron.screen.getPrimaryDisplay().workAreaSize;
  createWindow(width);
  win.setVisibleOnAllWorkspaces(true);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
