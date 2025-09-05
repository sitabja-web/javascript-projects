// ---------- FOR...OF LOOP WITH ARRAY ----------
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

/*
OUTPUT:
1
2
3
4
5
*/


// ---------- FOR...OF LOOP WITH STRING ----------
const greetings = "Hello world!"
for (const greet of greetings) {      //  here in the place of greet we can put  anything 
    console.log(`Each char is ${greet}`);
}

/*
OUTPUT:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

// ---------- MAP DEMO ----------
const map = new Map()  // here we use new keyword for prototypal inheritance 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   // duplicate key ignored, only one "IN" kept
console.log(map);
/*
OUTPUT:
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

// ---------- FOR...OF LOOP WITH MAP ----------
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

/*
OUTPUT:
IN :- India
USA :- United States of America
Fr :- France
*/


// ---------- FOR...OF WITH OBJECT (❌ Error) ----------
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);


// }

         // objects are not iterable like this 

/*  
OUTPUT:
TypeError: myObject is not iterable
    at ...
*/
