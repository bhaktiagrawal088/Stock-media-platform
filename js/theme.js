

"use strict";

const $HTML /* {NodeElement}*/ = document.documentElement;
let isDark /*{Boolean} */ = window.matchMedia("(prefers-color-scheme : dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}
else{
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = function(){
    console.log("click");
    isDark = sessionStorage.getItem("theme");
    sessionStorage.setItem("theme" , isDark == "light" ? "dark" : "light");
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}

window.addEventListener('load',()=>{
    const /* {NodeElemet} */ $themebtn = document.querySelector("[data-theme-toggler]");
    $themebtn.addEventListener('click', changeTheme);
})

