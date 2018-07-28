const electron = require('electron');
const path = require('path');
const url = require('url');
const home = require('os').homedir();
const fs = require('fs-extra');
const first = require('first-run');

const { app, BrowserWindow, ipcMain } = electron;

let width;
let win;
let bar;

function createSettingsWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 550,
    minWidth: 650,
    minHeight: 450,
    frame: false,
    transparent: false,
    center: true,
    show: false,
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'pages/settings/settings.html'),
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

function createStartWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
    transparent: false,
    resizable: false,
    center: true,
    show: false,
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'pages/intro/intro.html'),
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

function createBar(w) {
  bar = new BrowserWindow({
    width: w,
    height: 22,
    x: 0,
    y: 0,
    frame: false,
    // transparent: true, vibrancy: dark === square borders
    transparent: false,
    // vibrancy: 'dark',
    center: false,
    show: false,
    resizable: false,
    alwaysOnTop: true,
    focusable: false,
    hasShadow: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
    skipTaskbar: true,
  });

  bar.loadURL(url.format({
    pathname: path.join(__dirname, 'pages/bar/bar.html'),
    protocol: 'file:',
    slashes: true,
  }));

  bar.once('ready-to-show', () => {
    bar.show();
  });

  bar.on('closed', () => {
    bar = null;
  });
}

// Load the settings window
ipcMain.on('doneIntroduction', () => {
  win.close();
  createSettingsWindow();
});

// Load the bar in a new window
ipcMain.on('launchBar', () => {
  createBar(width);
});

app.on('ready', () => {
  ({ width } = electron.screen.getPrimaryDisplay().workAreaSize);
  const str = path.join(home, '.moon');
  if (!fs.existsSync(str)) {
    createStartWindow();
    fs.ensureDirSync(str);
  } else if (fs.existsSync(path.join(str, 'active'))) {
    createBar(width);
    bar.setVisibleOnAllWorkspaces(true);
  } else {
    createSettingsWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createSettingsWindow();
  }
});
