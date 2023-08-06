// ==UserScript==
// @name         Discord Rainbow Messages
// @namespace    discord_rainbow_messages
// @version      1.0
// @description  Make discord messages rainbow (on the web Client).
// @author       @xyyzyss
// @match        *://*.discord.com/channels/*
// @match        *://*.discord.com/*
// @match        *://discord.com/channels/*
// @match        *://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==
/* INFORMATION
========================================================================
  The keys to enable/disable the status of rainbow messages is SHIFT+\
========================================================================
*/
(function() {
	"use strict";
	let rainbowStatus = false; //Status of the rainbow messages.
	/* Color variables */
	let r = 255;
	let g = 0;
	let b = 0;

	/*That function changes r, g & b variables to string */
	function rgb(r, g, b) {
		return "rgb(" + r + "," + g + "," + b + ")";
	}

	/* That function changes color of the messages */

	function rainbowTimer() {
		let divs = document.querySelectorAll("div");

		/* Rainbow */
		if (r < 255 && g == 0 && b == 0) {
			r++;
		} else if (r == 255 && g < 255 && b == 0) {
			g++;
		} else if (r > 0 && g == 255 && b == 0) {
			r--;
		} else if (r == 0 && g == 255 && b < 255) {
			b++;
		} else if (r == 0 && g > 0 && b == 255) {
			g--;
		} else if (r < 255 && g == 0 && b == 255) {
			r++;
		} else if (r == 255 && g == 0 && b > 0) {
			b--;
		}
		divs.forEach((el) => {
			if (el.id.startsWith("message-content")) {
				for (const child of el.children) {
					if (rainbowStatus) child.style.color = rgb(r, g, b);
					if (!rainbowStatus) child.style.color = rgb(255, 255, 255);
				}
			}
		});
	}
	/* That function switches the rainbow messages status */
	function switchRainbow() {
		rainbowStatus = !rainbowStatus;
	}


	/* Event detects keypress */
	document.onkeypress = function(evt) {
		evt = evt || window.event;
		var charCode = evt.keyCode || evt.which;

		if (charCode == 124) switchRainbow(); //124 is |
	};
	let rainbowInterval = setInterval(rainbowTimer, 10);

})();