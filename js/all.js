/*!
 * Supplements
 *
 * Copyright (c) Lemming
 * Released under the MIT License.
 * https://github.com/Lemmingh
 */

'use strict';

// To force links to be opened in a new context.
// Only process links other than URL fragments. (A URL fragment points to an internal target location within the current document.)
// Some odd links might be processed accidently as well. However, we don't have to worry because those are usually deprecated usages.
// ! Caution: `aLink.href` returns full URI. Do NOT use it.
window.onload = function () {
  const aTags = document.getElementsByTagName('a');
  for (const aLink of aTags)
  {
    if (aLink.getAttribute('href') && aLink.getAttribute('href').match(/^[^#].*/))
    {
      aLink.target = "_blank";
      aLink.rel = "noreferrer noopener";
    }
  }
}
