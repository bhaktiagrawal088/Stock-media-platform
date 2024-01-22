
"use strict";

/**
 * Import
 */

import { addEventOnElements } from "./utils/event.js";

/**
 * 
 */

export const segment = function($segment, callback){
    const /** {NodeList} */ $segmentBtn = $segment.querySelectorAll("[data-segment-btn]");
    let /** {NodeElement} */ $lastSelectedSegmentBtn = $segment.querySelector('[data-segment-btn].selected');

    addEventOnElements($segmentBtn , 'click', function(){
        $lastSelectedSegmentBtn.classList.remove('selected');
        this.classList.add('selected');
        $lastSelectedSegmentBtn = this;
        callback(this.dataset.segmentValue);
    })

}