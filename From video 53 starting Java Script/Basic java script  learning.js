let a = 1
let b = 2

function sum() {
    return a + b
}
console.log(sum())
console.log("Hello World")



const d = 4

console.log("Hey this is tutorial 55");


// a = a + 1
{
let c = "Harry";
let _a = "Shubham";
}
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// so we can use typeof operator to know the data type of variable

let o = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

// so we can make object in javascript like this as key value pair where we use colon and comma to separate different key value pairs.


console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);

// So we can print, add and modify object's key value pairs like this.


//                   Now Conditional Statements in JavaScript

console.log("Hello I am conditional tutorial")

let age = 1;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

/*
I am a 
multiline 
comment
*/

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}

// Thats how we use conditional statements in javascript

// Ternary Operator in JavaScript which is a short form of if-else statement

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
That previous statemenet translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/