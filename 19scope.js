// ------------------ Block Scope with let & const ------------------

// let a = 300
// if (true) {
//     let a = 10      // inner block variable, different from outer 'a'
//     const b = 20    // block scoped, only accessible inside this if-block
    // console.log("INNER: ", a)  // Output: 10
}

// console.log(a) // Output: 300 (outer 'a')
// console.log(b) // ❌ ReferenceError, b not accessible outside block

// ------------------ Function Scope & Closure ------------------

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username) // ✅ inner function can access outer function variable
    }

    // console.log(website) // ❌ ReferenceError, website only inside `two`

//     two()
}

// one()  // Output: "hitesh"

// ------------------ Nested Block Scope ------------------

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
        // console.log(username + website) // Output: "hitesh youtube"
    }
    // console.log(website) // ❌ ReferenceError
}

// console.log(username) // ❌ ReferenceError

// ------------------ Function Hoisting ------------------

// Function declaration
// console.log(addone(5)) // ✅ Works, Output: 6
// function addone(num){
//     return num + 1
// }

// Function expression with const
// addTwo(5) // ❌ TypeError: addTwo is not a function
// const addTwo = function(num){    // this does not work because it is assigned as const here 
//     return num + 2
// }

// ------------------ Key Points ------------------

// 1. let / const are block scoped, var is function scoped
// 2. Inner functions can access outer variables → closure
// 3. Function declaration is hoisted → can call before definition
// 4. Function expressions / arrow functions are NOT hoisted → calling before assignment causes error
// 5. Variables declared inside a block are not accessible outside

// hoisted means in js what occurs in it is loaded in the memory 


console.log(hola(5))

function hola(num)  {
 return num+1;
}

// for arrow functions they are not hoisted  


const add = (num) => {
    return num + 2;
}

console.log(add(5))  // Output: 7



// hoisting meaning  =>  javascript automatically moves the variables and functions to the top of their scope before exececuting the code this is  known as hoisting 


// JavaScript automatically moves variable and function declarations to the top of their scope during compilation phase, before code execution.

// Variables: var → hoisted, initialized as undefined

// Variables: let & const → hoisted but not initialized → access before declaration = ReferenceError

// Functions: Function declarations → fully hoisted → can call before definition

// Function expressions / arrow functions → only variable hoisted, function value not hoisted

// for let const we get  temporal dead zone and for var we get undefined 




