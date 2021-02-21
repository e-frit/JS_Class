// Part 1: Build Arrays

// Create an array that includes four different colors as strings
colorStringArray = ["red", "orange", "yellow", "green"];
// Create an array with five different foods as strings
foodStringArray = ["pizza", "salad", "bacon", "pasta", "fruit"];
// Create an array with six different animals as strings
animalStringArray = ["cat","bat","dog","monkey","fish","bird"];
// Create an array with all even numbers from 0 – 20.
evenNumberArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Part 2: Array Methods
function divTextInjector(newArray) {     // I'm a sucker for a shortcut
    let textToAdd = newArray
    let newDiv = document.createElement("div")
    document.body.appendChild(newDiv)
    newDiv.innerHTML = textToAdd
};
// Use the toString method to have all of the colors write to the HTML
divTextInjector(colorStringArray.toString());
// Use the join method to have all of the colors write to the HTML with a separator
divTextInjector(colorStringArray.join(", "));
// Use the pop method on the animals array and have the array log to the console
animalStringArray.pop(); //console.log(animalStringArray.pop()) returns only the popped item, not the array I want
console.log(animalStringArray);
// Use the push method to add a new animal to the animal array and have the array write to the HTML.
animalStringArray.push("turtle"); //divTextInjector(animalStringArray.push("turtle")) only returns the number of items in the array
divTextInjector(animalStringArray.join(", "));
// Use the splice method to add three new foods to the food array. Have this write to the HTML.
foodStringArray.splice(0, 0, "eggs", "cake", "bread")
divTextInjector(foodStringArray.join(", "))
// Use the slice method to move the 2nd, 3rd, and 4th foods into their own array. Have this write to the HTML.
foodSubArray = foodStringArray.slice(1,4);
divTextInjector(foodSubArray.join(", "));

// Part 3: Array Sort and Iteration

// Use the sort method on the numbers array. Remember you will need a compare function to do so. Have this log to the console.
// Use the filter method on the numbers array to create a new array with all numbers higher than 10. Have this log to the console.
// Use the find method on the numbers array to find the first element that is greater than 12. Have this log to the console.
// Use the every method on the numbers array to check if the elements are greater than 8. Have this log to the console.
// Use the some method on the numbers array to check if the elements are greater than 8. Have this log to the console.