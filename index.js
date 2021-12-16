//1.    Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
     // a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
     // b.   Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    // c.   Use a loop to iterate through the array and calculate the average age. Print the result to the console.


    // section 1.a. 
var ages = [3, 9, 23, 64, 2, 8, 28, 93]; //array for ages
    function firstLast(array){
        let anArray = (array[array.length - 1] - array[0]); 
//code to substract last value from the first value (index is 0) there for subtraction will need to be reverse of what I originally thought
     //  my thought was to write it as 3 - 93 => incorrect as it gave me a -90.
    return anArray;
};
    console.log(firstLast([3, 9, 23, 64, 2, 8, 28, 93]))
// when testing this, it printed 90 on the console

//
// section 1.b.
var ages = [3, 9, 23, 64, 2, 8, 28, 93, 100, 25, 73, 54]; 
// added 4 new values to the original list: 100, 25, 73, 54
function firstLast(array){
    let anArray = (array[array.length - 1] - array[0])
    return anArray;
};
console.log(firstLast([3, 9, 23, 64, 2, 8, 28, 93, 100, 25, 73, 54]))
// when testing this, it printed 51 on the console.
// there for this is a dynamic == basically checking to see if this will work when more values are added to the array
console.log(firstLast(ages)); // I could also use this consol.log instead of line 26
// test printed the same results

//
// section 1.c.
// I will use the for loop to loop through the code 1 time and calculate the average age
// I will use the original age array given
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
function average(array){
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    } return sum / array.length;
} 
console.log(average(ages));
// my code worked and it printed to console.log with a result of 28.75
// to be on the safe side, I also used my phone's calculator to get the average
//
//
// test number 2 for section 1.c using the additional birthday variables
var ages = [3, 9, 23, 64, 2, 8, 28, 93, 100, 25, 73, 54];
function average(array){
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    } return sum / array.length;
} 
console.log(average(ages));
// test answer should be equal 40.1667
// console.log printed 40.1667, therefore, code line works




// 2.   Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.   Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.


// this is the array for question 2"

// 2. a === I will use a for loop to iterate through the array and calculate the average number of letter per name
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// function averageNames(arr){
var letters = 0
    // var sum = 0;
    for (let i = 0; i < names.length; i++) {
        letters = letters + names[i].length;
    // sum += arr[i];
    // } return sum / names.length;
}
console.log(letters/names.length);

// ask Jolene about this code and the one in my onenote

// Will continue to work on code line 84 - 100 another time
// var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//     var chars = names.split[""]; 
//     // per my research, it would be best to convert these strings into characters in the names
//     // to work w/ each character individually by creating this variable chars
//      var lettersCount = []; 
//     // this is to count keep count of the letters
//     // this is an associative array
// for (let i = 0; i < chars.length; i++) {
//     if (type of (lettersCount[chars[i]] !== undefined))
//     lettersCount[chars[i]] = 0;
//     lettersCount[chars[i]]++;
//     }
//     for (var i in lettersCount) {
//     } console.log(lettersCount[i]);
//     // console.log(averageNames(names));

// 2. b.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
for (let i = 0; i < names.length; i++) {
    var allNames = names.join(' '); 
    // per reseach array.join function that would create a string concatenating all the element (names) into a new array.
    // in the empty parentheses, I need to add a space in order to separate the names based on directions
}
    console.log(allNames);
//
// tested this in console.log and names printed as "Sam Tommy Tim Sally Buck Bob"correctly


// 3.	How do you access the last element of any array?
// To access the last element of an array, the individual will need to use the array method call [array.length - 1].
// using question 1's age variables 
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

function last(array){
    let anArray = (array[array.length - 1])
    return anArray;
};
console.log(last(ages));
// tested this and it printed 93 on the console.log

// test 2
var ages = [3, 9, 23, 64, 2, 8, 28, 93, 100, 25, 73, 54];

function last(array){
    let anArray = (array[array.length - 1])
    return anArray;
};
console.log(last(ages));
//
// test 2 completed
// code printed 54 to the console.log
//


// 4.	How do you access the first element of any array?
// this is the opposite of question 3. I will switch [array.length -] to array[0]

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

function first(array){
    let anArray = (array[0])
    return anArray;
};
console.log(first(ages));
// this printed 3 to the console.log which is correct

// will do one more test
// test 2, I switched index 0 and 2 around
var ages = [23, 9, 3, 64, 2, 8, 28, 93];

function first(array){
    let anArray = (array[0])
    return anArray;
};
console.log(first(ages));
// this printed 23 to the console which is correct
//
//


//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

var letters = 0
    // var sum = 0;
    for (let i = 0; i < names.length; i++) {
        letters = letters + names[i].length;
    // sum += arr[i];
    // } return sum / names.length;
}
console.log(letters/names.length);







// 9.   Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
