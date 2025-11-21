{
   //                                  String learning

// here thats how we can call the characters of string by their index number starting from o to n-1 where n is the length of string.

console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"

// Below one is like string Concatination .

console.log("His name is " + real_name + " and his friends name is " + friend)

// Below one is like string interpolation called Template literals in js but in this we use $ before every variable. In this we can also use doube quotes or single quotes inside the backticks. 
console.log(`His name is ${real_name} and his friends name is ${friend}`)




let b = "ShivamSh"
console.log(b.toUpperCase())     // Here we can apply various methods on strings.
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5))     // here slice method prints the letters of string from index 1 to index 5-1=4
console.log(b.slice(1))        // here slice method prints all the letters of string from index 1 to end of string

console.log(b.replace("Sh", "77"))  // here replace method replaces the first occurance of "Sh" with "77" if there are multiple occurance of "Sh" only first one will be replaced.
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))  // here concat method concatenates multiple strings as we also do it with + c.

console.log(b)

// Please explore more methods of string on your own as there are many methods available for string in javascript. Also you can google it in real world time.


}


/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()   // Math.random() generates random number between 0 and 1.
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")     // In js we use prompt method to take input from user.

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {            // random > 0.1 means 90% of the times this condition will be true.
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval`${a} ${c} ${b}`}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval`${a} ${c} ${b}`}`) 

}
