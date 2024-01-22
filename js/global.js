

"use strict";

// Import ripple

import {ripple} from "./utils/ripple.js";
/**
Header on-scroll state
*/

const /* {NodeElements} */ $header = document.querySelector("[data-header]");
window.addEventListener('scroll', ()=>{
    $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});

/**
 * Add ripple effect
 */
const /* {NodeList} */ $rippelElem = document.querySelectorAll('[data-ripple]');
$rippelElem.forEach($rippelElem => ripple($rippelElem));

/**
 * Filter Functionality
 */

window.filterObj = {};