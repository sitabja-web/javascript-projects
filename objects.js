const mySym = Symbol("mySym");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(JsUser.age)




// 04_objects.js  


// ------------------ Object Creation ------------------

// const tinderUser = new Object()   // another way to create object (singleton object)
const tinderUser = {}  // object literal (preferred, simpler)

// adding properties
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);   // { id: '123abc', name: 'Sammy', isLoggedIn: false }


// ------------------ Nested Objects ------------------
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// accessing deeply nested property
// console.log(regularUser.fullname.userfullname.firstname); // "hitesh"


// ------------------ Merging Objects ------------------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  
// ❌ This creates an object with obj1 and obj2 as nested objects, not merged

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// ✅ Object.assign merges objects into one new object

const obj3 = {...obj1, ...obj2}  
// ✅ Spread operator is modern way to merge objects
// console.log(obj3);   // {1:"a", 2:"b", 3:"a", 4:"b"}


// ------------------ Array of Objects ------------------
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "second@gmail.com"
    },
    {
        id: 3,
        email: "third@gmail.com"
    },
]

// accessing property of 2nd user
users[1].email   // "second@gmail.com"


// ------------------ Object Methods ------------------

// console.log(Object.keys(tinderUser));   
// ["id", "name", "isLoggedIn"]

// console.log(Object.values(tinderUser)); 
// ["123abc", "Sammy", false]

// console.log(Object.entries(tinderUser)); 
// [ ["id","123abc"], ["name","Sammy"], ["isLoggedIn",false] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
// true (checks if property exists)


// ------------------ Object Destructuring ------------------
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// destructuring (extracting properties)
const {courseInstructor: instructor} = course
// here we rename "courseInstructor" -> "instructor"

// console.log(courseInstructor);  // ❌ error, because we renamed it
console.log(instructor);   // ✅ "hitesh"


// ------------------ JSON (Data Exchange Format) ------------------
// This is how data is often sent in APIs (looks like object but is JSON string)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array of objects (common API response)
[
    { id: 1, name: "hitesh" },
    { id: 2, name: "sam" },
    { id: 3, name: "raj" }
]
