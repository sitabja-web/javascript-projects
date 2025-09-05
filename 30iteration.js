// ------------------- forEach Example -------------------
const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((item) => {
    console.log(item);
    return item   // here the item is returned for each always return undefined btw 
})

console.log(values);

/*
OUTPUT:
js
ruby
java
python
cpp
undefined   <-- forEach hamesha undefined return karta hai
*/

// ------------------- filter Example -------------------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// using filter
const newNums1 = myNums.filter((num) => {
    return num > 4   // this filters out the code  , this return is called implicit return type 
})
console.log(newNums1);

/*
OUTPUT:
[ 5, 6, 7, 8, 9, 10 ]
*/

// same using forEach
const newNums2 = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})
console.log(newNums2);

/*
OUTPUT:
[ 5, 6, 7, 8, 9, 10 ]
*/


// ------------------- Books Example -------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// filter only History books
let userBooks = books.filter((bk) => bk.genre === 'History')   // 
console.log(userBooks);
/*
OUTPUT:
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
]
*/
// filter History books published >= 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"  // this is explicit return type 
})
console.log(userBooks);
/*
OUTPUT:
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
]
*/


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


