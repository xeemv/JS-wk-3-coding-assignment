//1.    Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
     // a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
     // b.   Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    // c.   Use a loop to iterate through the array and calculate the average age. Print the result to the console.


    // section 1.a. 
var ages = [3, 9, 23, 64, 2, 8, 28, 93]; //array for ages
    function firstLast(array){
        let anArray = (array[array.length - 1] - array[0]); 
    // code to substract last value from the first value (index is 0) therefore, subtraction will need to be reverse of what I originally thought
     // my thought was to write it as 3 - 93 => incorrect as it gave me a -90.
    return anArray;
};
    console.log(firstLast([3, 9, 23, 64, 2, 8, 28, 93]))
    // when testing this, it printed 90 on the console


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
console.log(firstLast(ages)); 
    // I could also use this consol.log instead of line 26
    // test printed the same results


// section 1.c.
    // I will use the for loop to loop through the code 1 time and calculate the average age
    // I will use the original age array given
var ages1 = [3, 9, 23, 64, 2, 8, 28, 93];
function averageA(array1){
    var sum6 = 0;
    for (let i = 0; i < array1.length; i++) {
    sum6 += array1[i];
    } return (sum6 / array1.length);
} console.log(averageA(ages1));
    // my code worked and it printed to console.log with a result of 28.75
    // to be on the safe side, I also used my phone's calculator to get the average

    // test number 2 for section 1.c using the additional birthday variables
var ages2 = [3, 9, 23, 64, 2, 8, 28, 93, 100, 25, 73, 54];
function average7(array){
    var sum9 = 0;
    for (let i = 0; i < array.length; i++) {
    sum9 += array[i];
    } return (sum9 / array.length);
} 
console.log(average7(ages2));
    // test answer should be equal 40.1667
    // console.log printed 40.1667, therefore, code line works




// 2.   Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.   Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.


    // line 69 is the array for question 2
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

        // ask Jolene about this code line 84 - 99 and the one in my onenote

        // Will continue to work on code line 84 - 99 another time
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
    // per reseach array.join function would create a string concatenating all the element (names) into a new array.
    // in the empty parentheses, I need to add a space between the single quotes to create a space between the names in the console.log
}
    console.log(allNames);
    // tested this in console.log and names printed as "Sam Tommy Tim Sally Buck Bob"correctly
    //

// 3.	How do you access the last element of any array?
    // My answer: To access the last element of an array, an individual will need to use the array method call [array.length - 1].
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

        // code line 170 - 178 is here as a reference to question 2.a
        // string [] namesArry = {"Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"};
        
        // int [] nameLengths= Arrays.stream(namesArry)
        //     .mapToInt(String::nameLengths)
        //     .toArray();
        //     .println(Arrays.toString(nameLengths));
        // var letters = 0
        // var nameLengths= Arrays.stream(namesArry)

        //     .mapToInt(namesArry::nameLengths)
        //     .toArray();
        // } console.log(Arrays.namesArry(nameLengths));   
    
        var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

        // int[] nameLengths = new int[names.length];
		// for (int i = 0; i < names.length; i++) {
		// 	nameLengths[i] = names[i].length(); 
		// }


        // function newNamesArray (namesLengths, namesArray) {
        //     var sumNames = 0;
        // for (let i = 0; i < namesArry.length; i++) {
        //      sumNames = sumNames + namesLengths[i];
        // } 
        // console.log(newNamesArray[nameLengths,namesArry]);
        // }

        // failed attempts
        // var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
        // // function averageNames(arr){
        // var letters = 0
        //     // var sum = 0;
        //     for (let i = 0; i < names.length; i++) {
        //         letters = letters + names[i].length;
        //     // sum += arr[i];
        //     // } return sum / names.length;
        // }
        // console.log(letters/names.length);

    // Maybe I need to use the .length method??? 




        // failed attempts
        // var letters = 0
        // var i, j;
        //     // var sum = 0;
        //     for (let i = 0; i < names.length; i++) {
        //         letters = letters + names[i].length;
            
        //         //function nameLengths(array) {
        //             for (let j = 0; j < names[i].length; j++) {
        //             nameLengths = nameLengths + letters + names[i].length;
        //             //return nameLengths;
        //         }
        //     //}
        //     // sum += arr[i];
        //     // } return sum / names.length;
        // } console.log(names[i][j]);








        // for (let i = 0; i < names.length; i++) {
        //         nameLengths[i] = nameLengths + names[i].length();
        // } 

        // console.log(array.toString(nameLengths));







// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
var word = ('hello')
var n = (2) 
    //var n = [2] --> originally had the var n written incorrectly as an array thus my code would print out of whack in the console
    // also put square brackets around my word variable. Switched it to parentheses when trouble shooting my error/glitch from code line repeat.length = n + 1;
    //it would print 'hello' over x amount more than the number I listed for this variable

    //code line 242 - 247, per my research this would be a good method to return the word variable so that the string has no space writing the code this way and using the join method
function repeat(word, n){ 
    var repeat = [];
    repeat.length = n + 1;
    return repeat.join(word);
}
console.log(repeat(word, n));
    // I tried using the join method but I must be writting my code wrong, may attempt to correct it at a later time.
    //ignore failed attempt on line 251 - 257

        // function join (word, n) {
        //     var join = [];
        //     join.length = n + 1;
        //     return word.join(word); 
        // }
        // console.log(join(word, n));
        //console.log(word.join(''));
    // tested this code by switching the var n to different numbers
    // code works and printed as instructed in the directions

    
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

var firstName = ('Sally');
var lastName = ('Tea');

function fullN (firstName, lastName) {
    return (firstName + " " + lastName);
    // return firstName + " " + lastName; --> attempted this, no go as it still prints SallyTea
    // found my solution => must not forget the parentheses in order to create the space between firstName and lastName
}
    fullN ();
    console.log(fullN(firstName, lastName));
    // code does work, but I need to figure out how to print w/ a space between the first and last name
    // currently printing SallyTea as one word 
    // console.log(fullN(firstName, "", lastName)); --> attempted this on my console.log however, lastName ends up dropping off  
    // console.log(fullN(firstName " ", lastName)); --> attempted this too, error popped up
    // also reference function video from this week
    // code works, currently printing Sally Tea
    // attempted code with Jane Tea (did not save it) and the code works
    

// 9.   Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

    // reference only for me from question 1.c.
    // var ages = [3, 9, 23, 64, 2, 8, 28, 93];
    // function average(array){
    //     var sum = 0;
    //     for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    //     } return sum / array.length;
    // } 
    // console.log(average(ages));

var num = [23, 9, 3, 64, 2, 8, 28, 93];
    // using array of ages from question 1

function returnSum (num) {
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        console.log("this is my current total " + sum);
    if (sum > 100); {
        return "true";
        }
    }
 } console.log(returnSum(num));

    // code passed and printed as true in console.log
    // calculated on cell phone calculator and the total sum is 230 which is greater than 100
    


    // used code line 312 - 317, to check the sum of an array
    // to check the sum
    // var num1 = [8, 3];
    // var sum = 0;
    //     for (let i = 0; i < num1.length; i++) {
    //         sum += num1[i];
    // } console.log(sum);
    // total sum is 11, which this is correct
    // commenting out as it is not part of the question. Just here for my reference.


// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

var arr2 = [23, 9, 3, 64, 2, 8, 28, 93];  
    // using array of ages from question 1
var num3 = (arr2.length);

function average(arr2, num3) {
    var sum = 0;
        for (let i = 0; i < num3; i++) {
            sum += arr2[i]; // sum is incremented by i here and needs the arr2 not the length of the arr2 via num3
    } return (sum / num3); // here I'm dividing the sum (sum += arr2) by the num3 which is the length??
} console.log(average(arr2, num3));
    // per research, I should use the average code I have and set it up from above to help as this is similar and I would not need to recreate a new code aka cause more errors for myself
    // need two variable
    // return is NaN so I need to fix this
        //sum += num3[i]; ==> this was the reason why my code was returning as NaN
        // I think I ended up trying to have sum incremented by num3 which is the length of my array and that was why it was giving me an error??? If I'm understanding this correctly.
    // tested the code and console.log printed 28.75, arr2 is equal to 230 / 8 is 28.75

    // test 2 starting at line 342
    var arr3 = [23, 42, 15, 3, 33, 2]; // sum of these numbers should be 118
    var num4 = (arr3.length);

    function average(arr3, num4) {
    var sum = 0;
        for (let i = 0; i < num4; i++) {
            sum += arr3[i];
        } return (sum / num4);
    } console.log(average(arr3, num4));
    // test printed 19.668 to the console.log
    // 118/6 is 19.667
    // code is dynamic


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

var ar1 = [23, 9, 3, 64, 2, 8, 28, 93]; // variables from question 1
var ar2 = [23, 42, 15, 3, 33, 2]; // variables from my test for question 10
        var sum1 = 0; // to find average of ar1
            for (let i = 0; i < ar1.length; i++) {
            sum1 += ar1[i];
            (sum1 / ar1); } //<---- need to place the curly bracket here when I comment out the console.log line
        //} console.log(sum1); //<--- need to comment out this line so it does not print the sum to the console.log
        // checking the sum for ar1
        
        var sum2 = 0; // to find average of ar1
            for (let i = 0; i < ar2.length; i++) {
            sum2 += ar2[i]; } //<---- need to place the curly bracket here when I comment out the console.log line
        //} console.log(sum2); //<--- need to comment out this line so it does not print the sum to the console.log
        // // checking the sum for ar2
    
function checkTwoArr (sum1, sum2) {
    if (sum1 > sum2) {
        return "true";
    } else {
        return "false";
    }
} console.log(checkTwoArr(sum1, sum2));
    // code passed on console.log
    // to be on the safe side, I will run one more test w/ another set of array numbers

    // used code below is to check the sum of an array: **used to help me solve question 11**
        // to check the sum
        // var num1 = [8, 3];
        // var sum = 0;
        //     for (let i = 0; i < num1.length; i++) {
        //         sum += num1[i];
        // } console.log(sum);
        // total sum is 11, which this is correct
        // commenting out as it is not part of the question. Just here for my reference.


    // reference code from question 12's test #2: **used to help me solve question 11**
    // var itsHotOutside1 = "True";
    // var moneyInPocket1 = "30";
    // function willBuyDrink1 (itsHotOutside1, moneyInPocket1) {
    //     if(itsHotOutside1 && moneyInPocket1 > 10.50) {
    //     return "true";
    //     } else //if (itsHotOutside && moneyInPocket < 10.50) <---- didn't need to include this but for trial and error, I started with this line to see how my code work
    //     {
    //     return "false";
    //     }
    // } console.log(willBuyDrink1(itsHotOutside1, moneyInPocket1));
    // // code works and printed true since moneyInPocket is 30 which is more than 10.50

    // test #2 for question 11
    var ar6 = [23, 9, 3, 64]; // variables from question 1
    var ar7 = [23, 42, 15, 3, 33, 2]; // variables from my test for question 10
        var sum10 = 0; // to find average of ar6
            for (let i = 0; i < ar6.length; i++) {
            sum10 += ar6[i];
            (sum10 / ar6); } //<---- need to place the curly bracket here when I comment out the console.log line
        //} console.log(sum10); <--- need to comment out this line so it does not print the sum to the console.log
        // checking the sum for ar6
        
        var sum20 = 0; // to find average of ar7
            for (let i = 0; i < ar7.length; i++) {
            sum20 += ar7[i]; } //<---- need to place the curly bracket here when I comment out the console.log line
        //} console.log(sum20); <--- need to comment out this line so it does not print the sum to the console.log
        // // checking the sum for ar7
    
function checkTwoArr (sum10, sum20) {
    if (sum10 > sum20) {
        return "true";
    } else {
        return "false";
    }
} console.log(checkTwoArr(sum10, sum20));
    // this is correct as ar6 should equal 99 which is NOT greater than ar7 which is 118
    // test 2 passed
    // therefore, this long code works
    // will need to talk w/ Jolene to see how I could combine the sums w/in my code so that it does not print to the console.log
        // nevermind I found the solution was to comment out my }console.log(sum20), etc for all (test and acutal code)
        // will need to place curly bracket after the part sum20 += ar7[i];



//     12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

var itsHotOutside = "True";
var moneyInPocket = "5";

function willBuyDrink (itsHotOutside, moneyInPocket) {
    if(itsHotOutside && moneyInPocket > 10.50) {
    return "true";
    } else //if (itsHotOutside && moneyInPocket < 10.50) <---- didn't need to include this but for trial and error, I started with this line to see how my code work
    {
    return "false";
    }
} console.log(willBuyDrink(itsHotOutside, moneyInPocket));
    // code works and correct answer is false
    // will test w/ a new number to see if code works

//test code below:
var itsHotOutside1 = "True";
var moneyInPocket1 = "30";

function willBuyDrink1 (itsHotOutside1, moneyInPocket1) {
    if(itsHotOutside1 && moneyInPocket1 > 10.50) {
    return "true";
    } else //if (itsHotOutside && moneyInPocket < 10.50) <---- didn't need to include this but for trial and error, I started with this line to see how my code work
    {
    return "false";
    }
} console.log(willBuyDrink1(itsHotOutside1, moneyInPocket1));
    // code works and printed true since moneyInPocket is 30 which is more than 10.50


// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
