/* Create a function with an if else statement that will do the following:
If the time is after 5am and before noon, a window alert says “Good Morning”
If the time is between noon and 5pm, a window alert says “Good Afternoon”
Otherwise, a window alert says “Good Night” */
(function (){
    let h = new Date().getHours()
    if (h >= 5 && h < 12)
        {alert("Good Morning")}
    else if (h >= 12 && h <= 17)
        {alert("Good Afternoon")}
    else {alert("Good Night")}
})();

/* Create a switch that will do the following:
Get the current day of the week
Have a case for every day of the week, starting from 0 = “Sunday”.
Have the day of the week write to the h2 in the HTML as the sentence “The current day is [DAY].” */
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        console.log(day);
        break;
    case 1:
        day = "Monday"
        console.log(day);
        break;
    case 2:
        day = "Tuesday"
        console.log(day);
        break;
    case 3:
        day = "Wednesday"
        console.log(day);
        break;
    case 4:
        day = "Thursday"
        console.log(day);
        break;
    case 5:
        day = "Friday"
        console.log(day);
        break;
    case 6:
        day = "Saturday"
        console.log(day);
};

// Create a variable called “count” that is equal to the number 5.
var count = 5;

/* Create a while loop that checks if “count” is less than 20
and then writes to the HTML the number in the paragraph with the id “counter”.
Have each iteration of the loop increase “count” by 3. */
let text = ""
while (count < 20) {
    text += "The current iteration is " + count + "<br>";
    count += 3;
};
document.getElementById("counter").innerHTML = text