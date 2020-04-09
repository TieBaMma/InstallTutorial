/*!
 * Supplements
 *
 * Copyright (c) Lemming
 * Released under the MIT License.
 * https://github.com/Lemmingh
 */

// ES2015 (ES6): let, const, Promise, arrow function
// ES2017 (ES8): async, await
// ! Thus, some features are NOT compatible with Internet Explorer.

'use strict';

window.onload = function () {

  // To force links to be opened in a new context (typically, a new window).
  // Only process links other than URL fragments. (A URL fragment points to an internal target location within the current document.)
  // Some odd links, for example, those begin with `javascript:`, might be processed accidentally as well. However, we don't have to worry because they are usually deprecated usages.
  // ! Caution: `HTMLHyperlinkElementUtils.href` returns full URI. Do NOT use it.
  const aTags = document.getElementsByTagName('a');
  for (const aLink of aTags)
  {
    if (aLink.hasAttribute('href') && /^[^#\s].*/.test(aLink.getAttribute('href')))
    {
      aLink.target = "_blank";
      aLink.rel = "noreferrer noopener";
    }
  }

  // Feature: Copy code to clipboard
  // ? Potentially consumes too much memory if there are too many `pre`: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Memory_issues
  // ? However, current implementation is acceptable, I think: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Getting_Data_Into_an_Event_Listener_Using_the_Outer_Scope_Property
  const preTags = document.getElementsByTagName('pre');
  for (const preElement of preTags)
  {
    let button = document.createElement('button');
    button.className = 'copyButton';
    button.innerText = 'Copy';

    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      copyInnerText(preElement);
    }, false);

    preElement.parentNode.insertBefore(button, preElement);
  }

}

/**
 * Pauses an `async` function for a while.
 * @param {number} ms - Time to pause in millisecond.
 * @example
 * await sleep(1000);
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Pops a notification banner with `topBanner` class attribute, for 1 second.
 * @param {string} message - The message to be displayed.
 * @param {boolean} [isRed] - `false` (default) for default color defined in CSS. `true` for a red banner.
 */
async function showBanner(message, isRed) {
  let banner = document.createElement('div');
  banner.className = 'topBanner';
  banner.innerText = message;

  if (isRed)
  {
    banner.style.backgroundColor = 'red';
  }

  document.body.appendChild(banner);

  // The banner will be removed after one second.
  await sleep(1000);

  banner.remove();
}

/**
 * Copies inner text of an HTML element.
 * @param {HTMLElement} element - The HTML element.
 * @see Sadly, still no better practice: {@link https://stackoverflow.com/q/22581345}
 */
async function copyInnerText(element) {
  const text = element.innerText;

  let success = false;

  // Try Clipboard API
  if (typeof navigator.clipboard.writeText === 'function')
  {
    await navigator.clipboard.writeText(text).then(() => success = true, (e) => console.error(e));
  }

  // Fallback
  if (!success)
  {
    let buffer = document.createElement('textarea');
    buffer.value = text;

    // Minimize visual distraction
    element.parentNode.insertBefore(buffer, element);

    buffer.focus();
    buffer.setSelectionRange(0, buffer.value.length); // For compatibility

    // In case the browser does not support it either.
    try
    {
      success = document.execCommand('copy');
    } catch (e)
    {
      console.error(e);
    }

    buffer.remove();
  }

  // Visual feedback
  if (success)
  {
    showBanner('Copied!');
  } else
  {
    showBanner('Failed.', true);
  }

}
