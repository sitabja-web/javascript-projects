// ------------------ Objects and `this` ------------------

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // `this` refers to the object calling the function
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
// Output:
// "hitesh , welcome to website"
// {username: "hitesh", price: 999, welcomeMessage: ƒ}

// Changing object property
user.username = "sam"
user.welcomeMessage();
// Output:
// "sam , welcome to website"
// {username: "sam", price: 999, welcomeMessage: ƒ}

// `this` in global scope (browser: window, Node: global)
console.log(this); // Output depends on environment

// ------------------ Arrow Functions and `this` ------------------

// Regular function vs Arrow function
const chaiRegular = function () {
    let username = "hitesh";
    console.log(this.username); // `this` depends on how function is called
}

// Arrow function
const chaiArrow = () => {
    let username = "hitesh";
    console.log(this); // Arrow functions don't have their own `this` → inherit from outer scope
}

// chaiRegular()  // In strict mode, `this` = undefined
// chaiArrow()    // In global scope, `this` = global object or {} in module

// ------------------ Arrow Functions Return ------------------

// Normal arrow function
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4)); // Output: 7

// Returning object from arrow function
const addTwoObject = (num1, num2) => ({username: "hitesh"});
console.log(addTwoObject(3, 4)); // Output: { username: "hitesh" }

// Multiple styles:
// const addTwo1 = (num1, num2) => num1 + num2
// const addTwo2 = (num1, num2) => ( num1 + num2 )
// const addTwo3 = (num1, num2) => ({username: "hitesh"})

// ------------------ Arrays & forEach ------------------

const myArray = [2, 5, 3, 7, 8];

// forEach: loop over array elements
myArray.forEach(function(value, index){
    console.log(`Index ${index}: Value ${value}`);
});

// Using arrow function
myArray.forEach((value, index) => console.log(`Index ${index}: Value ${value}`));

// forEach doesn't return anything (undefined), just iterates

// ------------------ Key Takeaways ------------------

// 1. `this` in regular function inside object → object itself
// 2. `this` in arrow function → no own `this`, takes from outer scope
// 3. Arrow functions:
//    - concise syntax
//    - implicit return for single expression
//    - wrap object in () to return object
// 4. Array.forEach → iterate array, doesn't return new array (use map for that)


