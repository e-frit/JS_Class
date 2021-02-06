// Part 1
var song = "Valentine", songArtist = "Justice", songAlbum = "Cross", songYear = "2007";
document.write(songArtist + " is the artist behind the song " + song + " which was featured on their album " + songAlbum + " from " + songYear + ".");

// Part 2
var age = 30, baby = 1, toddler = 3, child = 6, teen = 13, youngAdult = 18, adult = 25;
console.log(age == youngAdult); // false
console.log(age != baby); // true
console.log(teen > child); // true
console.log(toddler < baby); // false
console.log(youngAdult >= youngAdult); // true
console.log(adult <= youngAdult); // false
console.log(age >= adult && baby <= age); // true
console.log(teen < youngAdult || child > teen); // true

//part 3

var currentYear = 2021, decade = 10;
console.log(currentYear + decade); // 2031
console.log(currentYear - decade); // 2011
console.log(currentYear * decade); // 20210
console.log(currentYear / decade); // 202.1
console.log(currentYear % decade); // 1
console.log(currentYear ** decade); // 1.1367452160087405e+33
console.log(songYear + decade); // 200710  | kind of expected an error here