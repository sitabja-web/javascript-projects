// ---------------- Basic Function ----------------

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// Output if called:
// H
// I
// T
// E
// S
// H
// ---------------- Function with Parameters ----------------

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)
// Output: 8

// ---------------- Function with Default Parameters ----------------

function loginUserMessage(username = "sam"){
    if(!username){  // we  can skipp this part as it said that we have attached a default username 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// Output: "hitesh just logged in"

// console.log(loginUserMessage())
// Output: "sam just logged in" (default value used)

// ---------------- Function with Rest Parameters ----------------

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// Output: [500, 2000]
// Explanation: first two arguments captured by val1, val2, rest captured by ...num1 as array

// ---------------- Function with Object as Parameter ----------------

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// Output: "Username is hitesh and price is undefined" 
// (because object key is 'prices', not 'price')

handleObject({
    username: "sam",
    price: 399
})
// Output: "Username is sam and price is 399"

// ---------------- Function with Array as Parameter ----------------

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
// Output: 400

console.log(returnSecondValue([200, 400, 500, 1000]))
// Output: 400
