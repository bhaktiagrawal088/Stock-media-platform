/**
* @copyright codewithsadee 2023
* @author sadee <codewithsadee@gmail.com>
*/

"use strict";

/**
 * Convert url to object 
 * @param {String} urlString url String
 * @returns {object} Url object 
 */

export const urlDecode = urlString => {
    return Object.fromEntries(urlString.replace(/%23/g , "#").replace(/%20/g, " ").split("&").map(i => i.split("=").map(entry => entry.trim())));

}