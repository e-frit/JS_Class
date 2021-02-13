/* Part 1
   Create a self-invoking function that writes into a heading*/
(function() {
    let siteTitle = "Week 4 Practical";
    document.getElementById("site-name").innerHTML= siteTitle
})();
/* Part 2
Create a variable titled ‘firstMessage’ and have it equal “I’m learning about functions.”
Create a variable titled ‘secondMessage’ and have it equal “And also about libraries.”*/
var firstMessage = "I'm learning about functions.", secondMessage = "And also about libraries.";
/* Create a function titled ‘showMessage’.
   Have that function write 'firstMessage' to the HTML.*/
function showMessage() {
    let newText = document.createElement('p');
    newText.textContent = firstMessage;
    document.body.insertBefore(newText,document.body.children[1])};
// Use setTimeOut to have firstMessage display after 4 seconds.
setTimeout(showMessage, 4000);
// Create a function titled ‘repeatMessage’ and have a pop up window alert secondMessage.
function repeatMessage() {
    alert(secondMessage)
};
// Use setInterval to have secondMessage alert display every 6 seconds.
setInterval(repeatMessage, 6000)