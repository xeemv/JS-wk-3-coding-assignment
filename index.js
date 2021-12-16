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
console.log(average([3, 9, 23, 64, 2, 8, 28, 93]))
// my code worked and it printed to console.log with a result of 28.75
// to be on the safe side, I also used my phone's calculator to get the average
//
//




// 2.   Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.   Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.


// this is the array for question 2"
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// 2. a === I will use a for loop to iterate through the array and calculate the average number of letter per name
// function averageNames(arr){
var letters = 0
    // var sum = 0;
    for (let i = 0; i < names.length; i++) {
        letters = letters + names[i].length;
    // sum += arr[i];
    // } return sum / names.length;
}
console.log(letters/names.length);
//


// 2. b.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
for (let i = 0; i < names.length; i++) {
    var allNames = names.join(' '); 
    // per reseach array.join function that would create a string concatenating all the element (names) into a new array.
    // in the empty parentheses, I need to add a space in order to separate the names based on directions
    // tested this in console.log and names printed as "Sam Tommy Tim Sally Buck Bob"correctly
}
    console.log(allNames);





// 9.   Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
