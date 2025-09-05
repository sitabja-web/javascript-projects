// ------------------ Variables ------------------
const temperature = 41;
const score = 200;
const balance = 1000;

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// ------------------ Basic if-else ------------------
if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
// Output: "temperature is greater than 50"

// ------------------ Variable scope in if ------------------
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // ❌ Error: 'power' is block scoped

// ------------------ Single-line if ------------------
if (balance > 500) console.log("test"), console.log("test2");
// Output: "test" "test2"

// ------------------ if-else if ladder ------------------
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
// Output: "less than 1200"

// ------------------ Logical Operators ------------------

// AND (&&) → all conditions must be true
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
// Output: nothing (2==3 is false)

// OR (||) → at least one condition true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// Output: "User logged in"

// ------------------ Summary ------------------
// 1. if → execute code if condition is true
// 2. else if → multiple conditions
// 3. else → fallback
// 4. && → all true
// 5. || → at least one true
// 6. let/const → block scoped inside { }  var is function scoped both caan be re assgined except  const 



