// ---------- FOR...IN LOOP WITH OBJECT ----------
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) { 
  console,log(`${key} shortcut is for ${myobject[key]}`)     //  for  in loop we get we don't get key value pair we get  only key not like the for of  loop

//   objects are not iterable  with for of  loop so we  use for in loop  
}

/*
OUTPUT:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

// ---------- FOR...IN LOOP WITH ARRAY ----------
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

/*
OUTPUT:
js
rb
py
java
cpp
*/


// ---------- FOR...IN LOOP WITH MAP (❌ Not Working) ----------

// it is important to note that for in loop does not work maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   // duplicate key ignored

for (const key in map) {
    console.log(key);
}

/*
OUTPUT:
(no output)
*/
