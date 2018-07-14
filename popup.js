// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  // #region THE ONLY CODE WE ADDED
  // I know this aint C#
  try {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "REPLACE THIS STRING WITH YOUR URL", false);
    xhr.send();

    var result = xhr.responseText;
    var jobj = JSON.parse(result);
    alert(jobj.results[0].keywords);
  } catch (err) {
    alert(err);
  }
  // #endregion THE ONLY CODE WE ADDED

  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
