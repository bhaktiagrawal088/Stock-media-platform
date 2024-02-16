

"use strict";

/**
 * Import
 */

import { menu } from "./menu.js";

/**
 * Add filter functionality
 * @param {Node} $filterwrappers Filter wrapppers
 * @param {Object} filterObj    Filter object
 * @param {Function} callback   Callback function
 */

export const filter = ($filterwrappers, filterObj, callback) => {
    const /** {NodeElement} */ $filterClearBtn = $filterwrappers.querySelector('[data-filter-clear]');
    const /**{NodeEleement} */ $filterValue = $filterwrappers.querySelector('[data-filter-value]');
    const /** {NodeElement} */ $filterChip = $filterwrappers.querySelector('[data-filter-chip]');
    const /** {NodeElement} */ $filterColorField = $filterwrappers.querySelector('[data-color-field]');
    const /** {String} */ filterkey = $filterwrappers.dataset.filter;
    const /**{Object} */ newObj = filterObj;

    menu($filterwrappers , filterValue => {
        $filterValue.innerHTML = filterValue;
        $filterChip.classList.add('selected');

        newObj[filterkey] = filterValue;
        callback(newObj);
    });

    $filterClearBtn.addEventListener("click", () => {
        $filterChip.classList.remove('selected');
        $filterValue.innerText = $filterValue.dataset.filterValue;

        delete newObj[filterkey];
        callback(newObj);
    });

    $filterColorField?.addEventListener("change", function(){
        const /**{String} */ filterValue = this.value.toLowerCase();

        $filterValue.innerText = filterValue;
        $filterChip.classList.add("selected");

        newObj[filterkey] = filterValue;
        callback(newObj);
    });
}