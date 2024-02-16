

"use strict";

/**
 * Import
 */

import { client} from "../../js/api_configure.js";
import {gridInit , updateGrid} from "../../js/utils/masonry_grid.js";
import {videoCard}  from "../../js/video_card.js"
import { updateUrl } from "../../js/utils/updateUrl.js";
import { urlDecode } from "../../js/utils/urlDecode.js";
import { filter } from "../../js/filter.js";

/**
 * Show filter bar if searched anything
 */

const /**{NodeElement} */ $filterBar = document.querySelector("[data-filter-bar]");

$filterBar.style.display = window.location.search ? "flex" : "none";


/**
 * Init filter
 */

const /** {NodeList} */ $filterwrappers = document.querySelectorAll('[data-filter]');

$filterwrappers.forEach($filterwrappers => {
    filter($filterwrappers , window.filterObj , (newObj) =>{
        // console.log(newObj);
            window.filterObj = newObj;
            updateUrl(newObj, "videos");
        })
     

    });

/**
 * Render popular or searched videos
 * If searched something then render searched videos
 * Otherwise , render popular videos
 */

const /** {NodeElement} */ $videoGrid = document.querySelector("[data-video-grid]");
const /** {NodeElement} */ $title = document.querySelector('[data-title]');

const /** {Object} */ videoGrid = gridInit($videoGrid);

const /** {Number} */ perPage = 30;
let  /**{Number} */  currentPage = 1;
let  /**{Number} */  totalPage = 0;

const /** {String} */ searchUrl = window.location.search.slice(1);
let /** {Object} */ searchObj = searchUrl && urlDecode(searchUrl);
const /** {String} */ title = searchObj ? `${searchObj.query} videos `: "Popular video"

$title.textContent = title;
document.title = title;

/**
 * Render all photos
 * @param  {Number} CurrentPage - The number of the page to be rendered
 */

const renderVideos = function (currentPage) {
    client.videos[searchObj ? "search" : "popular"] ({...searchObj , per_page : perPage , page : currentPage} , data => {
    //    console.log(data);

        totalPage = Math.ceil(data.total_results / perPage);
        // console.log(totalPage)

        data.videos.forEach( video => {
            const /** {NodeElement} */ $videoCard = videoCard(video);
            updateGrid($videoCard, videoGrid.columnsHeight, videoGrid.$columns);
        });

        // when videos loaded
        isLoaded = true;

        // when no more video found , hide loader
        if(currentPage >= totalPage) $loader.style.display = "none";
    })
}

renderVideos(currentPage)

/**
 * Load more videos
 */

const /**{NodeElement} */ $loader = document.querySelector("[data-loader]");
let /** {NodeElement} */ isLoaded = true;

window.addEventListener("scroll" , function(){
    // console.log($loader.getBoundingClientRect().top);
    if($loader.getBoundingClientRect().top < (window.innerHeight * 2) && currentPage <= totalPage && isLoaded){
        currentPage++;
        renderVideos(currentPage);
        isLoaded = false;
    }

})





