/* Part 1    || use at least one of each of the following:
getElementById()        X   line 12
getElementsByName()     X        50
getElementsByTagName()  X        40
getElementsByClassName()X        47
querySelector()         X         9   */

// Part 2
// get parent element of #current
let currentIdNode = document.querySelector('#current');
console.log(currentIdNode.parentElement);

// log the first and last elements of the list
let listIdNode = document.getElementById('menu');
console.log(listIdNode.firstElementChild);
console.log(listIdNode.lastElementChild);

// log the next sibling element of #current
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
listIdNode.removeChild(listIdNode.lastElementChild);                // remove last list item
listIdNode.insertBefore(extraLi, currentIdNode.nextElementSibling); // add "Extra 1" *before* Item 3
// JavaScript DOM hasn’t supported the insertAfter() method yet. || :-\
listIdNode.insertBefore(extra2Li, listIdNode.getElementsByTagName('li')[1]);  // add "Extra 2" *after* Item 1 [via adding before next sibling]

// Part 4
// change button name attribute to 'send'
let theButton = document.getElementById('btn');
theButton.setAttribute('name', 'send');
// log link target to console
let linkNode = document.getElementsByClassName("remove-me")[0].firstElementChild;
console.log(linkNode.getAttribute('href'));
// enable button
theButton.removeAttribute('disabled');


// Part 5
//alert with css style for para1
let p1Style = getComputedStyle(document.getElementById('para1'));
let message = "The following styles are applied to element 'para1': "+String.fromCharCode(10)+
"background-color: "+p1Style.backgroundColor+String.fromCharCode(10)+
"color: "+p1Style.color+String.fromCharCode(10)+
"font-size: "+p1Style.fontSize;
alert(message);

// log classes for 'para2'
console.log(document.getElementById('para2').className)