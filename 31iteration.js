// map  , filter , reduce 



// const nums  = [10 , 30  , 50 ]
//  const val = nums.forEach.filter((num)  =>{   //here num is a parameter we an use parameter here  like spuemrnan aquaman 
//        return num >30

//  })


//  console.log(val)

 //  here we have used for earch loop so  it doesn't return anything so it is called for each loop  as it does not retrun  it we want it to return anything we will use any other way with for each y defintiing another empty array and pushing the code insidde that 


//  const nums1  = [10 , 30  , 50 ]
//  const val1 = nums1.map((num)  =>{
//        return num >30

//  })


//  console.log(val1)


// const nums = [10, 30, 50]

// const filtered = nums.filter((num) =>{

//    return    num > 30  // this is called explicit return type here we  can  also have implicity return type 
// })

// console.log(filtered)
/*
OUTPUT:
[ 50 ]
*/


// const nums = [10, 30, 50]

// const sum = nums.reduce((acc, num) => acc + num, 0)

// console.log(sum)
/*
OUTPUT:
90
*/

// now map filter and reduce with normal function 

// map 

// const nums = [10, 30, 50]

// const mapped = nums.map(function (num) {
//     return num * 2
// })

// console.log(mapped)
/*
OUTPUT:
[ 20, 60, 100 ]
*/


// fillter 

// const nums = [10, 30, 50]

// const filtered = nums.filter(function (num) {
//     return num > 20
// })

// console.log(filtered)
/*
OUTPUT:
[ 30, 50 ]
*/


// reduce 

// const nums = [10, 30, 50]

// const sum = nums.reduce(function (acc, num) {
//     return acc + num
// }, 0)

// console.log(sum)
// /*
// OUTPUT:
// 90
// */

