

"use strict";

/**
 * Import 
 */
import {urlEncode} from "./utils/urlEncode.js";

const /** {String} */ API_KEY = "mtdRQLYDFYEdejb11CoS5LMWWXVNJzzySkEIff2W0eeII9ihRHb3NwLK";

const /** {function} */ headers = new Headers();
headers.append("Authorization", API_KEY);

const /**{object} */ requestOptions = {headers};

/**
 * fetch data from pexels
 * @param {String} url fetch url
 * @param {function} sucessCallback  success callback function
 */


const fetchData = async function(url, successCallback ){

        const/**{Object} */ response = await fetch(url, requestOptions);

        if(response.ok){
        const /**{object } */ data = await response.json();
        successCallback(data);
    }
}

let /**{string} */ requesturl = " ";

const /**{object} */ root = {
    default: "https://api.pexels.com/v1/",
    videos : "https://api.pexels.com/videos/"
}

export const /** {object} */ client = {

    photos : {

        /**
         * search photos
         * @param {object} parameters  url object
         * @param {function} callback  callback function
         */

        search(parameters, callback){
            requesturl = `${root.default}search?${urlEncode(parameters)}`;
            fetchData(requesturl, callback);
        },

        /**
         * curated photos
         * @param {object} parameters url object 
         * @param {function} callback callback function
         */
        curated(parameters, callback){
            fetchData(`${root.default}curated?${urlEncode(parameters)}` , callback);
        },

        /**
         * get single photo detail
         * @param {String} id  photo id
         * @param {function} callback  callback function
         */

        detail(id, callback){
            fetchData(`${root.default}photos/${id}` , callback);
        }
    },

    videos : {

        /**
         * search videos
         * @param {object} parameters  url object
         * @param {function} callback  callback function
         */

        search(parameters, callback){
            requesturl = `${root.videos}search?${urlEncode(parameters)}`;
            fetchData(requesturl, callback);
        },

        /**
         * get popular videos
         * @param {object} parameters url object 
         * @param {function} callback callback function
         */
        popular(parameters, callback){
            fetchData(`${root.videos}popular?${urlEncode(parameters)}` , callback);
        },

        /**
         * get single video detail
         * @param {String} id  video id
         * @param {function} callback  callback function
         */

        detail(id, callback){
            fetchData(`${root.videos}videos/${id}` , callback);
        }
    },

    collections : {

        /**
         *  get featured collections
         * @param {object} parameters url object 
         * @param {function} callback callback function
         */
        featured(parameters, callback){
            requesturl = `${root.default}collections/featured?${urlEncode(parameters)}`;
            fetchData(requesturl , callback);
        },

        /**
         * get a collection medias 
         * @param {String} id  collections id
         * @param {object} paramters url object
         * @param {function} callback  callback function
         */

        detail(id, parameters, callback){
            requesturl = `${root.default}collections/${id}?${urlEncode(parameters)}`
            fetchData(requesturl , callback);
        }
    },


}