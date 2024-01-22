

"use strict";

/**
 * Convert object to url
 * @param {Object} urlObj url Object
 * @returns  url String
 */

export const urlEncode = urlObj => {
    return Object.entries(urlObj).join('&').replace(/,/g, '=').replace(/#/g, '%23');
}