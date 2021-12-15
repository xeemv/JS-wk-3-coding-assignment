//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    // a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
    // b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    // c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
 var ages = [3, 9, 23, 64, 2, 8, 28, 93];


 function firstLast(array){
     let anArray = [];
     anArray.push(array[0], array[array.length - 1]); {
     }
     return anArray;
 };
 console.log(firstLast([3, 9, 23, 64, 2, 8, 28, 93]))








// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
