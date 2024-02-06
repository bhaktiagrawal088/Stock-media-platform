

"use strict";

/**
 * Add event listener to a collection of elements.
 * @param {NodeList} $elements - An array of DOM elements.
 * @param {string} eventType - The type of event to listen for (e.g., 'click', 'mouseover').
 * @param {Function} callback - The function to be executed when the event occurs.
 */

export const addEventOnElements = function ($elements, eventType, callback){

    $elements.forEach($element => $element.addEventListener(eventType, callback));
};