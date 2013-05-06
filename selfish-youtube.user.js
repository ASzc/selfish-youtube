// ==UserScript==
// @name                Selfish Youtube
// @namespace           https://github.com/ASzc/selfish-youtube
// @description         On the watch page, remove the share panel.
// @include             http://youtube.com/*
// @include             http://*.youtube.com/*
// @include             https://youtube.com/*
// @include             https://*.youtube.com/*
// ==/UserScript==

var panelName = "action-panel-share";

// Remove panel
var actionPanelShare = document.getElementById(panelName);
actionPanelShare.parentNode.removeChild(actionPanelShare);

// Remove buttons targeting the panel
var buttons = document.body.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var buttonDTF = button.getAttribute("data-trigger-for");

    if (buttonDTF != null && buttonDTF == panelName) {
        button.parentNode.removeChild(button);
    }
}
