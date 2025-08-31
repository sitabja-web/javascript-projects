// symcrounous means the data is executed in a sequence

// asynchronous maltab wo kisi ke liye wait nahi for the time being 
// it can change the pace of the game 

// console.log("data 1")
// setTimeout(() => {
//       console.log("data 2") 
// }, 2000)

// console.log("data 3 ")

// // here data 3 will be printed  after data 1 because  js is asynchronous 

// const sum = (a,b)  =>  {
//        console.log(a+b)
// }

// function calculate(a,b,callback)  {

// }
 

// 


// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// // }

// // function sayBye() {
// //   console.log("Goodbye!");
// // }

// // greet("Rahul", sayBye);




// function greet(name, callback)  {
//     console.log("hello" +  name)
//     callback()  // here call  back is called 
// }

// function bye() {
//        console.log("hola ")  //  here  the  call back is executed
// }
    



//   greet("rahul "  , bye)    //  here bye is the call back functiion call back function is notthing  it is a function which is passed as a argumnet to  present function and is excecuted  also  

//   Agar tumhe ek kaam ke baad dusra, phir teesra karna hai (sequence me), aur sab async hai, to tum nested callbacks likhte ho


// setTimeout(() => {
//   console.log("Step 1: Login");

//   setTimeout(() => {
//     console.log("Step 2: Data Fetch");

//     setTimeout(() => {
//       console.log("Step 3: Data Process");

//       setTimeout(() => {
//         console.log("Step 4: Show Result");
//       }, 1000);

//     }, 1000);

//   }, 1000);

// }, 1000);


// this is called call back hell  it forms the pyramid dom 
 
// theere is also a thing called callback helll to reslove that 

// let p1 =   new Promise((resolve ,reject ) => {
//        console.log("data")
//        resolve("success")
// }) 
// here  promise resolved 


// let p2 =   new Promise((resolve ,reject ) => {
//        console.log("data")
//        reject("error")
// }) 

// here it rejected

// now to add functionality  with the api we use .then and .catch

// function database(id)  {
//        return new Promise((resolve, reject) =>{
//               setTimeout(()=> {
//                      console.log("data" , id)
//                      resolve("success")
//               } , 2000)
//        })
// }

// let p3 = database(1)
// p3.then(()=> {
//        console.log("balle balle")
// })



function database(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        console.log("data", id);
        resolve("success");  // ✅ sab theek hai
      } else {
        reject("error"); // ❌ galti aayi
      }
    }, 2000);
  });
}

let p1 = database(1);
p1.then((result) => {
  console.log("balle balle:", result);
}).catch((error) => {
  console.log("oh no:", error);
});

let p2 = database(2);
p2.then((result) => {
  console.log("balle balle:", result);
}).catch((error) => {
  console.log("oh no:", error);
});


// we use .then for resiolve .catch for success


let  p1 = database.then(1)
let p2  = database.then(2)
let p3 =  database.then(3)

// database chaining


// async and await 