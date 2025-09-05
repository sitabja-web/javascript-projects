// ---------------- Object Creation ----------------

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // Symbol as a key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// ---------------- Accessing Properties ----------------

// console.log(JsUser.email)        // "hitesh@google.com"
// console.log(JsUser["email"])     // "hitesh@google.com"
// console.log(JsUser["full name"]) // "Hitesh Choudhary"
// console.log(JsUser[mySym])       // "mykey1"


// ---------------- Modifying the Object ----------------

JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser)   // If enabled, object can’t be changed

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)     // email = "hitesh@microsoft.com" (if not frozen)


// ---------------- Adding Methods ----------------

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}


// ---------------- Method Calls ----------------

console.log(JsUser.greeting())
// Output:
// Hello JS user
// undefined   (because function doesn’t return anything)

console.log(JsUser.greetingTwo())
// Output:
// Hello JS user, Hitesh
// undefined   (same reason as above)
