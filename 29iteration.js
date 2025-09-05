// ---------- forEach with normal function ----------
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    console.log(val);
})

/*
OUTPUT:
js
ruby
java
python
cpp
*/

// ---------- forEach with arrow function ----------
coding.forEach((item) => {
    console.log(item);
})

/*
OUTPUT:
js
ruby
java
python
cpp
*/

// ---------- forEach with separate function ----------
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)
/*
OUTPUT:
js
ruby
java
python
cpp
*/

// ---------- forEach with item, index, array ----------
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

/*
OUTPUT:
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


// ---------- forEach with array of objects ----------
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

/*
OUTPUT:
javascript
java
python
*/


// forEach executes a function once for each element in the array.

// Parameters inside callback:

// item → current value

// index → position in the array

// arr → whole array

// You can pass:

// inline function

// arrow function

// separate function by name

// With an array of objects, you can directly access object properties (like item.languageName).