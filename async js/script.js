// const { useCallback } = require("react");

// setTimeout(()=>{
//       console.log("hiii") 
// },1000)

// setTimeout(()=>{
//        console.log("heyyy")

// })



// js is single threaded language     at one time only one call can be done 

// lekin we have other things to do as well like api calls which takes a time 

// JavaScript single-threaded hai → ek waqt me ek hi kaam karti hai.
// Par duniya me kai kaam time lete hain (jaise API call, file read, ya timer). Agar JS wait karti to poora program block ho jaata.

// 👉 Isliye JS ne asynchronous model banaya:

// Time lene wale kaam background me chale jaate hain.

// Baaki code aage chalta rehta hai.

// Jab background kaam khatam hota hai → tab callback bula liya jata hai.


// problem without callback

// function boilWater() {
//   setTimeout(() => {
//     console.log("Step 1: paani garam ho gaya");
//   }, 2000);
// }

// function addTea() {
//   console.log("Step 2: chai patti dalo");
// }

// boilWater();
// addTea();

// callback is nothing it is just  passesd as a argument to another function

// Callback = ek function jo dusre function me argument ke roop me diya jata hai, aur tabhi execute hota hai jab pehle wala kaam complete ho jaye.

// function boilWater(next) {
//   setTimeout(() => {
//     console.log("Step 1: paani garam ho gaya");
//     next();  // paani garam hone ke baad hi agla step
//   }, 2000);
// }

// function addTea() {
//   console.log("Step 2: chai patti dalo");
// }

// boilWater(addTea);  // here add tea is a call back function eta jai hoche as a argument to the boilwater and recieved as a next and after set timeout is completed next is called => next()  which is basically addtea()



        
//   without callback this can take a lot of time but with   callback it will not take that much time it is a trick to hack the async part and it will get exected with the help of callback calllbak is nothing but the a function only 



// to remove pyramid of dooom  problem call back hell  and because of indentation problem call back hell was introduced and it was deleted


// another example of call back hell

// const showMessage = (Callback) => {
//     console.log(Callback);
// }

// const firstMessage = (callback) => {
//     setTimeout(() => {
//         console.log("helloo ");
//         callback();
//     }, 3000);
// }

// const secondMessage = () => {
//     console.log("hel ");
// }

// firstMessage(secondMessage);


// promises has 3 pending states resolve , reject ,  pedindng

//  let p1 = new Promise((resolve, reject) => {
//       console.log("data"); 
//       resolve(200)  // we can   pass any value liek this       
//  })





// async and await =>  async => async: A keyword used before a function to make it return a Promise.

// await: A keyword used inside an async function to wait for a Promise to resolve before moving on.

// “Pause here until this asynchronous task finishes, then continue.”

// const fetchNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(42);
//         }, 2000);
//     });
// };

// const getNumber = async () => {
//     const result = await fetchNumber(); // waits for fetchNumber to finish
//     console.log(result);
// };

// getNumber();


// fetch api

// let URL = "https://official-joke-api.appspot.com/random_joke"

//  async function getjokes() {
//       let joke =  await fetch(URL)
// //       console.log(joke)
//       let result =joke.json
//       console.log(result);
      



//// this is the arrow function version of this


//  const fetchData = async ()  => {  // we keep the function as async becaude it wil return something as promise
//        try {
//        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion")   // fetch api call karta hai and it will return something 

//               if(!response.ok)  {
//                      throw new Error("could not fetch reosurce")
//               }  // if the respone is not there then it will throw an error 
//               else  {

//               const data = await response.json()  // if this will convert the  respone in json format and  will store that in the data variable
//               console.log(data);   // now here a lot of data will be printed infact  the whole data if there we can also specify that with the help of object format whcih is . and can ecces by that  
//               }
//        }
       
//        catch (error)  {
//               console.log(error)
//               // it will throw the eror and 
              
              
//        }
// }

fetchData()

// this  is the normal function of api call

async function fetchData() {
  try {
    // input box ka value lena
    const pok = document.getElementById("pokemonname").value.toLowerCase();

    // API call
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`);

    if (!response.ok) {
      throw new Error("could not fetch resource");
    }
    else {

    // JSON data
    const data = await response.json();
    const pokemonsprite = data.sprites.front_default

    const imageElement = document.getElementById("pokemonsprite")
    
    if(pokemonsprite)  {
    imageElement.src = pokemonsprite
    imageElement.style.display = "block"
    }

    else {

       console.log("no pokemon found");
       imageElement.style.display = "none"
       
       
    }

    console.log(data);  // Pokémon ka data console me aayega
    
    }

  } catch (error) {
    console.log(error);
  }
}
