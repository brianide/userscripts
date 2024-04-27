// ==UserScript==
// @name        Remove Copilot ads from Github
// @namespace   Violentmonkey Scripts
// @match       https://github.com/*
// @grant       none
// @version     1.0
// @author      Brian Dixon
// @description 10/27/2023, 2:25:06 PM
// @run-at      document-start
// ==/UserScript==

[...document.querySelectorAll(`button[data-testid="copilot-popover-button"]`)].forEach(n => n.parentNode.hidden = true);
