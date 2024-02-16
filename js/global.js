

"use strict";

// Import ripple

import {ripple} from "./utils/ripple.js";
import { addEventOnElements } from "./utils/event.js";
import { urlDecode } from "./utils/urlDecode.js";

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
 * show all filter option after reload
 */

if(window.location.search.slice(1)){
    const /** {Object} */ search = urlDecode(window.location.search.slice(1));
    // console.log(search);

    Object.entries(search).forEach(item => {
        const /** {String} */ filterKey = item[0];
        const /** {String} */ filterValue = item[1];
 
        window.filterObj[filterKey] = filterValue;

        if( filterKey !== "query"){
            const /** {NodeElement} */ $filterItem = document.querySelector(`[data-filter="${filterKey}"]`);
            $filterItem?.querySelector('[data-filter-chip]').classList.add("selected");

            if($filterItem) $filterItem.querySelector("[data-filter-value]").innerText = filterValue ;
        }
    });
}


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

/**
 * page transition
 */

window.addEventListener("loadstart" , function(){
    document.body.style.opacity = '0';
})

window.addEventListener("DOMContentLoaded" , function(){
    document.body.style.opacity = "1";
})