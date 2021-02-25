/* Create a function with an if else statement that will do the following:
If the time is after 5am and before noon, a window alert says “Good Morning”
If the time is between noon and 5pm, a window alert says “Good Afternoon”
Otherwise, a window alert says “Good Night” */
(function (){
    let d = new Date()
    let h = d.getHours()
    if (h >= 17) {alert("Good Night")}
    else if (h >= 12) {alert("Good Afternoon")}
    else if (h >= 0 && h <= 5) {alert("Good Morning")}
})()

/* Create a switch that will do the following:
Get the current day of the week
Have a case for every day of the week, starting from 0 = “Sunday”.
Have the day of the week write to the h2 in the HTML as the sentence “The current day is [DAY].” */
switch (day) {
    case value_1:
        statement_1;
        break;
    case value_2:
        statement_2;
        break;
    case value_3:
        statement_3;
        break;
    default:
        default_statement;
}

// Create a variable called “count” that is equal to the number 5.
var count = 5

/* Create a while loop that checks if “count” is less than 20
and then writes to the HTML the number in the paragraph with the id “counter”.
Have each iteration of the loop increase “count” by 3. */
