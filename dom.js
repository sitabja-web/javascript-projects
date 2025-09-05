//  dom manipulation



// get element by id()


// const title = document.getElementById()

// // get element by  class name 

// const title = document.getElementsByClassName()

// get  element by tag name 


// const title = document.querySelector('div')
// for id query selector we have #  

// console.log(title)


// const title = document.querySelectorAll('div')



// console.log(title)

// SHORT NOTES

// 1. Selecting Elements

// This is how you grab things from the page so you can work with them.

// Common methods:

// document.getElementById("id") → select by id

// document.getElementsByClassName("class") → select by class (returns a collection)

// document.getElementsByTagName("tag") → select by tag (returns a collection)

// document.querySelector("selector") → select the first match (CSS-style selector)

// document.querySelectorAll("selector") → select all matches (returns a NodeList)

// <p id="greeting">Hello!</p>
// <script>
//   const greet = document.getElementById("greeting");
//   console.log(greet.textContent); // "Hello!"
// </script>


// styling elements

{/* <p id="msg">Hello World</p>
<script>
  const msg = document.getElementById("msg");
  msg.style.color = "blue";      // text color
  msg.style.fontSize = "24px";   // font size
  msg.style.background = "yellow"; // background color
</script> */}


// creating element 

// <div id="container"></div>

// <script>
//   const newPara = document.createElement("p"); // create <p>
//   newPara.textContent = "I am a new paragraph!"; // add text

//   const container = document.getElementById("container");
//   container.appendChild(newPara); // add it to the page
// </script>

// modifying the text 


{/* <div id="container"></div>

<script>
  const newPara = document.createElement("p"); // create <p>
  newPara.textContent = "I am a new paragraph!"; // add text

  const container = document.getElementById("container");
  container.appendChild(newPara); // add it to the page
</script> */}




// modifynig attribute and clssess

