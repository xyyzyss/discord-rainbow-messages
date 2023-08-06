// ==UserScript==
// @name         Discord Rainbow Messages
// @namespace    discord_rainbow_messages
// @version      1.1
// @description  Make discord messages rainbow (on the web Client).
// @author       @xyyzyss
// @match        *://*.discord.com/channels/*
// @match        *://*.discord.com/*
// @match        *://discord.com/channels/*
// @match        *://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// @website      https://github.com/xyyzyss/discord-rainbow-messages
// @updateURL    https://raw.githubusercontent.com/xyyzyss/discord-rainbow-messages/main/script.js
// ==/UserScript==
/* INFORMATION
========================================================================
  The keys to enable/disable the status of rainbow messages is CTRL+\
========================================================================
*/

(function () {
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
    let date = new Date();
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
          if (rainbowStatus) {
            child.style.color = rgb(r, g, b);
          } else {
            if (child.style.color != rgb(255, 255, 255)) {
              console.log(
                `[${
                  date.getHours().toString().length >= 2
                    ? date.getHours()
                    : "0" + date.getHours()
                }:${
                  date.getMinutes().toString().length >= 2
                    ? date.getMinutes()
                    : "0" + date.getMinutes()
                }:${
                  date.getSeconds().toString().length >= 2
                    ? date.getSeconds()
                    : "0" + date.getSeconds()
                }:${
                  date.getMilliseconds().toString().length >= 2
                    ? date.getMilliseconds()
                    : "0" + date.getMiliSeconds()
                }][Discord Rainbow Messages] Updated color of messages to: rgb(${
                  (r, g, b)
                });!`,
              );
              child.style.color = rgb(255, 255, 255);
              console.log(
                `[${
                  date.getHours().toString().length >= 2
                    ? date.getHours()
                    : "0" + date.getHours()
                }:${
                  date.getMinutes().toString().length >= 2
                    ? date.getMinutes()
                    : "0" + date.getMinutes()
                }:${
                  date.getSeconds().toString().length >= 2
                    ? date.getSeconds()
                    : "0" + date.getSeconds()
                }:${
                  date.getMilliseconds().toString().length >= 2
                    ? date.getMilliseconds()
                    : "0" + date.getMiliSeconds()
                }][Discord Rainbow Messages] Reseted the color of rainbow messages!`,
              );
            }
          }
        }
      }
    });
  }
  /* That function switches the rainbow messages status */
  function switchRainbow() {
    let date = new Date();
    rainbowStatus = !rainbowStatus;
    if (rainbowStatus) {
      console.log(
        `[${
          date.getHours().toString().length >= 2
            ? date.getHours()
            : "0" + date.getHours()
        }:${
          date.getMinutes().toString().length >= 2
            ? date.getMinutes()
            : "0" + date.getMinutes()
        }:${
          date.getSeconds().toString().length >= 2
            ? date.getSeconds()
            : "0" + date.getSeconds()
        }:${
          date.getMilliseconds().toString().length >= 2
            ? date.getMilliseconds()
            : "0" + date.getMiliSeconds()
        }][Discord Rainbow Messages] Enabled rainbow messages!`,
      );
    } else {
      console.log(
        `[${
          date.getHours().toString().length >= 2
            ? date.getHours()
            : "0" + date.getHours()
        }:${
          date.getMinutes().toString().length >= 2
            ? date.getMinutes()
            : "0" + date.getMinutes()
        }:${
          date.getSeconds().toString().length >= 2
            ? date.getSeconds()
            : "0" + date.getSeconds()
        }:${
          date.getMilliseconds().toString().length >= 2
            ? date.getMilliseconds()
            : "0" + date.getMiliSeconds()
        }][Discord Rainbow Messages] Disabled rainbow messages!`,
      );
    }
  }

  /* Event detects keypress */
  document.onkeypress = function (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;

    if (charCode == 28) switchRainbow(); //28 is CTRL+\
  };
  let rainbowInterval = setInterval(rainbowTimer, 10);
  /* Send console message */
  console.log("[Discord Rainbow Messages] loaded v.1.1!");
})();
