

"use strict";

// Import ripple

import {ripple} from "./utils/ripple.js";
import { addEventOnElements } from "./utils/event.js";

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
 * Navbar toggler for moblile screen
 */

const /** {NodeList} */ $navTogglers = document.querySelectorAll('[data-nav-toggler]');
const /** {NodeElement} */ $navbar = document.querySelector('[data-navigation]');
const /** {NodeElement} */ $scrim = document.querySelector('[data-scrim]');

addEventOnElements($navTogglers , 'click', function(){
    // Toggle navbar visibility
    $navbar.classList.toggle('show');
    // Show scrim when the navigation bar is visible
    $scrim.classList.toggle('active');
    

})



/**
 * Filter Functionality
 */

window.filterObj = {};


/**
 * Initial favorite object in local varibale
 */

if(!window.localStorage.getItem("favorite")){
    const /**{Object} */ favoriteObject = {
        photos : {},
        videos : {}
    }
    window.localStorage.setItem("favorite", JSON.stringify(favoriteObject));
}