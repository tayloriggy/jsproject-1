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


let counterDisplayElem = document.getElementById("countDisplay");
let counterIncreaseElem = document.getElementById("increase");
let counterDecreaseElem = document.getElementById("decrease");
// declaring variables and applying the DOM get elem by ID

let count = 0;
//declaring variable "count" to use a reference to increment and decrement, initializes count to 0

updateCounter(); //calling function so that the integer "0" is displayed for initial count (let count = 0;)


counterIncreaseElem.addEventListener("click", function() { //using addEventListener to have action once button is clicked
    count++; //increment count by 1
    updateCounter(); //call function to update the count displayed on page
})

counterDecreaseElem.addEventListener("click", function() {
    count--; //decrement count by 1
    updateCounter();
})

function updateCounter() {
    counterDisplayElem.innerHTML = count; //displaying the updated count on h1 element, sets h1 element equal to whatever count is currently at
}




