{for( let i=0; i<5; i++)
    {
        console.log("The value of i is: " + i);
    }

console.log("")
console.log("")
console.log("")

let O = 
{   "name" : "Harry",   "age" : 18,   "male" : true  }

for (const key in O) {    
    const element = O[key];
    console.log(element)
                
}

for (const i of "Harry") {
    console.log(i)
}

}

console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }

// let obj = {
//     name: "Harry",
//     role: "Programmer",
//     company: "CodeWithHarry AI"
// }
 
// for (const key in obj) {  
//         console.log(key)
// }

// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);


//                                               Learning about functions.

function name (name){
    console.log("Hello " + name);

}
name ("Harry");
name ("Rohan");

function sum (a, b){
    console.log("The sum of these two numbers is"+ " " +(a + b));
}
sum (5, 10);
sum (15, 25);

//WE use return keyword to return values from functions.


function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

// Arrow Functions( we use => to define arrow functions, We can make fucnctions of variable also using arrow functions)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);