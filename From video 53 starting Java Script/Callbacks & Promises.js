{

console.log("Harry is a hacker")
console.log("Rohan is a hecker")

// Below are asynchronous examples in JavaScript

setTimeout(() => {                     // setTimeout is a Web API provided by browser which takes two arguments a callback function and time in milliseconds after which the callback function will be executed.
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

const fn = () => {
  console.log("Nothing")
}
                                       // A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
                                          
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}                                              

const loadScript = (src, callback) => {
    let sc = document.createElement("script");                 // This is known as DOM Manipulation or callback hell
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}
}

{
//           Promises in JavaScript

console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})

 
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})

}