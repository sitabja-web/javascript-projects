// ---------- WHILE LOOP (index increment by 2) ----------
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

/*
OUTPUT:
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/


// ---------- WHILE LOOP WITH ARRAY ----------
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

/*
OUTPUT:
Value is flash
Value is batman
Value is superman
*/

// ---------- DO...WHILE LOOP ----------
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10)

/*
OUTPUT:
Score is 11
*/
