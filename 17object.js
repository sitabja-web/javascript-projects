// ---------------- Creating Objects ----------------

// const tinderUser = new Object()
const tinderUser = {}   // Empty object literal

tinderUser.id = "123abc"       // Add property id
tinderUser.name = "Sammy"      // Add property name
tinderUser.isLoggedIn = false  // Add property isLoggedIn

// console.log(tinderUser)
// Output:
// { id: "123abc", name: "Sammy", isLoggedIn: false }


// ---------------- Nested Objects ----------------

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// Output: "hitesh"
// Accessing nested properties requires chaining keys


// ---------------- Merging Objects ----------------

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }        // Nested objects
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Merge properties

const obj3 = {...obj1, ...obj2}      // Spread operator merge
// console.log(obj3)
// Output: {1: "a", 2: "b", 3: "a", 4: "b"}


// ---------------- Array of Objects ----------------

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" }
]

// Accessing property of second user
users[1].email   // "h@gmail.com"

// console.log(tinderUser)
// Output: { id: "123abc", name: "Sammy", isLoggedIn: false }


// ---------------- Object Methods ----------------

// console.log(Object.keys(tinderUser))   // ["id", "name", "isLoggedIn"]
// console.log(Object.values(tinderUser)) // ["123abc", "Sammy", false]
// console.log(Object.entries(tinderUser)) // [["id","123abc"], ["name","Sammy"], ["isLoggedIn",false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true


// ---------------- Object Destructuring ----------------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Normal access
// course.courseInstructor → "hitesh"

// Destructuring with alias
const {courseInstructor: instructor} = course
const {coursename: cour}  = course

// like we do the destructirng 
// here  this means the destructuring it means we dont need to do the object code  course.courseinstrcutor like and wwe assign that to instructor and we assign  that value  course
console.log(instructor)
// Output: "hitesh"
// Using alias allows you to rename variable while destructuring


// ---------------- Notes ----------------

// You can create arrays of objects like:
[
    {},
    {},
    {}
]

// Each {} can be a separate object with its own properties
