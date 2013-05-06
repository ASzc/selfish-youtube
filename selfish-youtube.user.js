// ==UserScript==
// @name                Selfish Youtube
// @namespace           https://github.com/ASzc/selfish-youtube
// @description         On the watch page, prevent the share panel from being switched to after pressing Like
// @include             http://youtube.com/*
// @include             http://*.youtube.com/*
// @include             https://youtube.com/*
// @include             https://*.youtube.com/*
// ==/UserScript==

var oldPanelName = "action-panel-share";
var newPanelName = "action-panel-share-foo";

// Change share panel id so Google's JS can't reference it properly unless we give it the new name
var actionPanelShare = document.getElementById(oldPanelName);
actionPanelShare.id = newPanelName;

// Change target of Share UI button so it points at the new panel ID
var buttons = document.body.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var buttonDTF = button.getAttribute("data-trigger-for");

    if (buttonDTF != null && buttonDTF == oldPanelName) {
        button.setAttribute("data-trigger-for", newPanelName);
    }
}
