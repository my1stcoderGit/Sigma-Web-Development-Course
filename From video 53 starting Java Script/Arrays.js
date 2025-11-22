
{
//                           Arrays in JavaScript

// An array is a collection of multiple data types in JS.
// Arrays are mutable in JavaScript means we can change the elements of array after creating it.



let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)
                                // Here we can use various methods on arrays.


// console.log(arr[0])
// console.log(arr[2])          // We can access the elements of array by their index number starting from 0 to n-1 where n is the length of array.
// console.log(arr[4])

console.log(arr.toString())     // Here we can convert array to string using toString() method.
console.log(arr.join(" and "))  // Here we can join the elements of array with any string using join() method.
arr.pop()                       // Here pop() method removes the last element of array.
console.log(arr)

arr.push(99)                    // Here push() method adds an element at the end of array.
console.log(arr)

arr.shift()
console.log(arr)               // Here shift() method removes the first element of array.

arr.unshift(777)                // Here unshift() method adds an element at the starting of array.
console.log(arr)

delete arr[1]
console.log(arr)               // Here delete keyword removes the element at specified index but it does not affect the length of array.
 
let a = [1, 2, 3]
    let b = [4, 5, 6]
    let c = [7, 8, 9]
    let d = a.concat(b, c)
    console.log(d)              // Here concat() method concatenates multiple arrays into single array.

    c.sort()
    console.log(c)              // Here sort() method sorts the elements of array in ascending order by default.

    c.sort(function(a, b){return b - a})
    console.log(c)              // Here we can also sort the elements of array in descending order by providing a compare function in sort() method.

  


let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)                 // Here splice() method removes elements from array starting from specified index and number of elements to be removed. We can also add new elements at that position by providing additional arguments.
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333)       // Here 222 and 333 will be added at index 1 after removing 3 elements from index 1.
// (4) [1, 222, 333, 5]

numbers.slice(1, 3)                   // Here slice() method returns/print a new array containing elements from start index to end index-1 without modifying the original array.
numbers.slice(2)                 // Here slice() method returns/print a new array containing elements from start index to end of array. 

numbers.reverse()                    // Here reverse() method reverses the elements of array.
console.log(numbers)                 // (5) [5, 4, 3, 2, 1]
}

{
//                    Loops in Arrays

let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {                    //for...in loop
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

for (const value of a) {            //for...of loop
    console.log(value)
}

}

//                         MAp , Filter , Reduce in Arrays

let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array , )=>{       // map method creates a new array by applying the provided function on each element of original array.
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true          // filter method creates a new array containing only those elements which satisfy the provided condition/function.
    }
    return false                
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))


Array.from("Aishwariya")    // Array.from() method creates an array of a provided object/string.