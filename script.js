/*
Project 1: Build a simple counter.

Requirements:
-Create a Github repository for this project. 
-The count starts at 0
-Have two buttons on the screen, one to increase (+) the count by 1, and one button to lower (-) the count by 1.
-Pressing the plus button increases the count by 1, pressing the minus button decreases by 1
-Create a Github repository for this project and write Git commits as you go.

Steps:
1. This will be webpage, thus need to create an index.html, style.css, script.js.
2. Will need to utilize buttons in html.
3. For JS, utilize the DOM? 

*/

function updateCounter () {
    let counterDisplayElem = document.getElementById("countDisplay");
    let counterIncreaseElem = document.getElementById("increase");
    let counterDecreaseElem = document.getElementById("decrease");

    let count = 0;
    
    counterDisplayElem.innerHTML = count;
}



counterIncreaseElem.addEventListener("click", function() {
    count++;
    updateCounter();
});

counterDecreaseElem.addEventListener("click", function() {
    count--;
    updateCounter();
});




