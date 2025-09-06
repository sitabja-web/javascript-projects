setTimeout(()=>{
      console.log("hiii") 
},1000)

setTimeout(()=>{
       console.log("heyyy")

})



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

function boilWater(next) {
  setTimeout(() => {
    console.log("Step 1: paani garam ho gaya");
    next();  // paani garam hone ke baad hi agla step
  }, 2000);
}

function addTea() {
  console.log("Step 2: chai patti dalo");
}

boilWater(addTea);  // here add tea is a call back function eta jai hoche as a argument to the boilwater and recieved as a next and after set timeout is completed next is called => next()  which is basically addtea()



        
//   without callback this can take a lot of time but with   callback it will not take that much time it is a trick to hack the async part and it will get exected with the help of callback calllbak is nothing but the a function only 



// to remove pyramid of dooom  problem call back hell  and because of indentation problem call back hell was introduced and it was deleted

