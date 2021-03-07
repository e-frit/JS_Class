/*Create a function that will have a window alert that says “Welcome to my page!”
Have this function run when the page loads. */
(function() {
    alert("Welcome to my page!")
})();

// Create a function that will remove the class “surprise” from the image. */
function noSuprises() {
    var a = document.querySelector("img.surprise");
    a.removeAttribute('class')
};

// Create a function that will replace the class on the submit button to “active-btn”.
function becomeActiveBtn() {
    var a = document.querySelector("input.passive-btn");
    a.removeAttribute('class');
    a.setAttribute('class', 'active-btn')
};

// Have the first function run when the image is moused over.
var imgNode = document.querySelector("img.surprise");
imgNode.addEventListener('mouseenter', noSuprises);

// Have the second function run when the mouse is pressed on the submit button.
var btn = document.querySelector("input.passive-btn");
btn.addEventListener('click', becomeActiveBtn);

// Create a function that will have a window alert that says “Confirm message submission” */

function userConfirmation() {
    alert("Confirm message submission")
};

//   Create a function that will have a window alert that says “Have a nice day”
function closingSalutation() {
    alert("Have a nice day")
};

// Have the first function run when the form submit button is clicked
btn.addEventListener('click', userConfirmation);

// Have the second function run when the image is double clicked
imgNode.addEventListener('dblclick', closingSalutation)