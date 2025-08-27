// // ------------------ Basic Function ------------------
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// // sayMyName()  
// // calling this will print H I T E S H line by line


// // ------------------ Function with Parameters ------------------
// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2
//     // return result
//     return number1 + number2   // directly returning the sum
// }

// const result = addTwoNumbers(3, 5)
// // console.log("Result: ", result);  // Result: 8


// // ------------------ Default Parameters ------------------
// function loginUserMessage(username = "sam"){  // default value = "sam"
//     if(!username){  // if username is empty/undefined
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`  // returns string
// }

// // console.log(loginUserMessage("hitesh"))   // hitesh just logged in
// // console.log(loginUserMessage())          // sam just logged in


// // ------------------ Rest Operator in Functions ------------------
// function calculateCartPrice(val1, val2, ...num1){
//     return num1  // rest collects remaining values into array
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))
// // Output → [500, 2000]


// // ------------------ Passing Object to Function ------------------
// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// // handleObject({ username: "sam", price: 399 })
// // Output → Username is sam and price is 399


// // ------------------ Passing Array to Function ------------------
// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]  // returns 2nd element of array
// }

// // console.log(returnSecondValue(myNewArray)) // 400
// console.log(returnSecondValue([200, 400, 500, 1000])); // 400


const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}