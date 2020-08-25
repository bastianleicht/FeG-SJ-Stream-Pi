/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
// jshint multistr: true 

const {app, BrowserWindow, Menu} = require('electron');

var mycam = document.getElementById('mycam');

navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    document.getElementById('mycam').srcObject = stream;
  }).catch(function() {
    console.log('could not connect stream');
  });
