/* Part 1    || use at least one of each of the following:
getElementById() X
getElementsByName()
getElementsByTagName()
getElementsByClassName
querySelector() X
*/

// Part 2
let currentIdNode = document.querySelector('#current')
console.log(currentIdNode.parentNode)

let listIdNode = document.getElementById('menu')
console.log(listIdNode.firstChild)
console.log(listIdNode.lastChild)

// same currentIdNode from before
console.log(currentIdNode.nextElementSibling)

// Part 3
let newDiv = document.createElement('div')
newDiv.id = 'new-content'
let newHeader3 = document.createElement('h3')
newHeader3.textContent = 'New Content'
// tests ahead
newDiv.appendChild(newHeader3)
document.body.appendChild(newDiv)