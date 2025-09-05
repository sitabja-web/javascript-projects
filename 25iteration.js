// ---------- SIMPLE FOR LOOP ----------
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

/*
OUTPUT:
0
1
2
3
4
5 is best number
5
6
7
8
9
10
*/


// ---------- NESTED LOOP (MULTIPLICATION TABLE) ----------
for (let i = 1; i <= 3; i++) {   // sirf 1 se 3 tak print kar raha hoon chhota rakhne ke liye
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(i + ' * ' + j + ' = ' + i*j );
    }
}

/*
OUTPUT:
Outer loop value: 1
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
Outer loop value: 2
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
Outer loop value: 3
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
*/


// ---------- ARRAY LOOP ----------
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

/*
OUTPUT:
3
flash
batman
superman
*/


// ---------- BREAK DEMO ----------
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;  // this is the break statement it exit the loop all together 
    }
    console.log(`Value of i is ${index}`);
}

/*
OUTPUT:
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
*/

// ---------- CONTINUE DEMO ----------
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;   // this is the continue statement it skips the part because of which it skips the whole part and prints the part after it 
    }
    console.log(`Value of i is ${index}`);
}
/*
OUTPUT:
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
Value of i is 7
Value of i is 8
Value of i is 9
Value of i is 10
*/
