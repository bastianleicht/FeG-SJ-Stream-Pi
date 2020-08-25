/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
// jshint multistr: true 

// requirements
const { app, BrowserWindow, Menu, globalShortcut, screen} = require("electron");

// create the window
function createWindow() {
  let window = new BrowserWindow({
    width: 1280,
    height: 720,
    alwaysOnTop: true,
    fullscreen: true,
    frame: true, //TODO false setzen
    autoHideMenuBar: false, //TODO true setzen
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // load the index.html file
  window.toggleDevTools();
  window.setFullScreen(false);
  window.loadFile('./app/index.html');
  window.setAutoHideMenuBar(true);

  window.setSize(
    screen.getPrimaryDisplay().bounds.width + 1,
    screen.getPrimaryDisplay().bounds.height
  );
}

app.whenReady().then(createWindow);

app.on('ready', () => {

  globalShortcut.register("Ctrl+Alt+Q", () => {
    app.quit();
  });

  globalShortcut.register("Ctrl+Esc", () => {
    app.quit();
  });

  // globalShortcut.register("Ctrl+Shift+I", () => {
  //   window.toggleDevTools();
  // });
});
