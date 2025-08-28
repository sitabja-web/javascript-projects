
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 10

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);



// //  objects are not iterable so we use for in for them and f


// // ---------------- for...of with arrays ----------------
// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {          // for...of loops over each value in the array
//     // console.log(num);          // prints: 1 2 3 4 5
// }

// // ---------------- for...of with strings ----------------
// const greetings = "Hello world!"
// for (const greet of greetings) {  // loops through each character of the string
//     // console.log(`Each char is ${greet}`)  
//     // Output: Each char is H, Each char is e, ..., Each char is !
// }

// // ---------------- Maps ----------------
// const map = new Map()             
// map.set('IN', "India")            // key = "IN", value = "India"
// map.set('USA', "United States of America")  
// map.set('Fr', "France")           
// map.set('IN', "India")            // duplicate keys not allowed → "IN" stays once

// // console.log(map)                // Map { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }

// for (const [key, value] of map) { // map is iterable → gives [key, value]
//     // console.log(key, ':-', value);  
//     // Output:
//     // IN :- India
//     // USA :- United States of America
//     // Fr :- France
// }

// // ---------------- Objects ----------------
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// //  for...of will not work here because objects are NOT iterable
// // for (const [key, value] of myObject) {  
// //     console.log(key, ':-', value);
// // }

// // ✅ Use for...in for objects:
// for (const key in myObject) {     // loops through keys of the object
//     // console.log(key, ':-', myObject[key]);  
//     // Output:
//     // game1 :- NFS
//     // game2 :- Spiderman
// 

//   for accesing  maps we use not for of  and  for  object  we use for  in 

// for each does n't return anything 



six.js

so to resolve this issue people dec


// for each does n't return anything 