/* Part 1    || use at least one of each of the following:
getElementById() X
getElementsByName()
getElementsByTagName()
getElementsByClassName
querySelector() X
*/

// Part 2
let currentIdNode = document.querySelector('#current');
console.log(currentIdNode.parentNode);

let listIdNode = document.getElementById('menu');
console.log(listIdNode.firstElementChild);
console.log(listIdNode.lastElementChild);

// same currentIdNode from before
console.log(currentIdNode.nextElementSibling);

// Part 3
let newDiv = document.createElement('div');    //create new div
newDiv.id = 'new-content';                     //give div ID  || I was probably supposed to actually add the div to the document here first
let newHeader3 = document.createElement('h3'); //create new h3
newHeader3.textContent = 'New Content';        //that says 'New Content'

// create 3 list items and give them the appropriate text content
let replacedLi = document.createElement('li'), extraLi = document.createElement('li'), extra2Li = document.createElement('li');
replacedLi.textContent = "Replaced Item";
extraLi.textContent = "Extra 1";
extra2Li.textContent = "Extra 2";

// append new h3 to new div appended to document body
document.body.appendChild(newDiv);
newDiv.appendChild(newHeader3);

// modify list items
listIdNode.replaceChild(replacedLi, listIdNode.firstElementChild);  // replace first list item
listIdNode.removeChild(listIdNode.lastElementChild);  // remove last list item
listIdNode.insertBefore(extraLi, currentIdNode.nextElementSibling); // add "Extra 1" *before* Item 3
// JavaScript DOM hasn’t supported the insertAfter() method yet. || :-\
listIdNode.insertBefore(extra2Li, listIdNode.firstElementChild.nextSibling);  // add "Extra 2" *after* Item 1 [via adding before next sibling]

// Part 4


/*
• Part 4: Attributes
◦ Use setAttribute on the button to give it the name “send”.
◦ Use getAttribute on the link to get its target to print to the console.
◦ Use removeAttribute() to make the button no longer disabled.
• Part 5: Styles
◦ Use getComputedStyle() to have the styles for #para1 alert to a window.
◦ Use the className property to log the classes of #para2 to the console.
*/