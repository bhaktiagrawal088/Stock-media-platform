

"use strict";

/**
 * Import
 */
import { client } from "./api_configure.js";

import { photoCard } from "./photo_card.js";

import { gridInit, updateGrid } from "./utils/masonry_grid.js";

import { videoCard } from "./video_card.js";

import { collectionCard } from "./collection_card.js";

/**
 * random acurated photo in homepage
 */

const /**{NodeElement} */ $photoGrid = document.querySelector('[data-photos-grid]');
$photoGrid.innerHTML = `<div class = "skeleton"></div>`.repeat(18);

client.photos.curated({page : 1 , per_page : 20} , data =>{
    // console.log(data);

    $photoGrid.innerHTML = " ";

    const /**{object} */ photoGrid  = gridInit($photoGrid);

    data.photos.forEach(photo =>{
        const /**{NodeElement} */ $photoCard = photoCard(photo);

        // $photoGrid.appendChild($photoCard);

        updateGrid($photoCard, photoGrid.columnsHeight , photoGrid.$columns);
    })
});


/**
 * Render popular vidoes in home pages
 */

const /**{NodeElement} */ $videoGrid = document.querySelector('[data-video-grid]');
$videoGrid.innerHTML = `<div class = "skeleton" >`.repeat(18);

client.videos.popular({per_page : 20}, data =>{
    $videoGrid.innerHTML = " ";
    const /** {Array} */ videoGrid = gridInit($videoGrid);
    data.videos.forEach(video =>{

        const /**{NodeElement} */ $videoCard = videoCard(video);
        updateGrid($videoCard , videoGrid.columnsHeight , videoGrid.$columns);
    });

});


/**
 * Render collections in home page
 */

const /**{NodeElement} */ $collectionGrid = document.querySelector('[data-collection-grid]');
client.collections.featured({per_page : 18 }, data => {
    data.collections.forEach(collection =>{
        const /** {NodeElement} */ $collectionCard = collectionCard(collection);

        $collectionGrid.appendChild($collectionCard);
    })

})

