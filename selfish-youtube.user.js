// ==UserScript==
// @name                Selfish Youtube
// @version             2013-05-06
// @namespace           https://github.com/ASzc/selfish-youtube
// @description         On the watch page, remove the share panel.
// @include             http://youtube.com/watch*
// @include             http://*.youtube.com/watch*
// @include             https://youtube.com/watch*
// @include             https://*.youtube.com/watch*
// @grant               none
// ==/UserScript==

function removeActionPanel(rootElem, panelName) {
    // Remove panel
    var actionPanelShare = rootElem.getElementById(panelName);

    if (actionPanelShare != null) {
        actionPanelShare.parentNode.removeChild(actionPanelShare);

        // Remove buttons targeting the panel
        var buttons = rootElem.body.getElementsByTagName("button");
        if (buttons != null) {
            for (var i = 0; i < buttons.length; i++) {
                var button = buttons[i];
                var buttonDTF = button.getAttribute("data-trigger-for");
                if (buttonDTF != null && buttonDTF == panelName) {
                    button.parentNode.removeChild(button);
                }
            }
        }
    }
}

var panelsToRemove = ["action-panel-share", "action-panel-error"];

for (var i = 0; i < panelsToRemove.length; i++) {
    removeActionPanel(document, panelsToRemove[i]);
}
