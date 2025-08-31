let URL = "https://official-joke-api.appspot.com/random_joke";
let chutcula = document.getElementById("joke");
let btn = document.getElementById("jokeBtn");

async function getjokes() {
  try {
    chutcula.innerHTML = "⏳ Loading...";
    let response = await fetch(URL);
    let result = await response.json();
    chutcula.innerHTML = `${result.setup} <br><b>${result.punchline}</b>`;
  } catch (error) {
    chutcula.innerHTML = "❌ Failed to fetch a joke. Please try again!";
    console.error(error);
  }
}

// button par listener lagaya
btn.addEventListener("click", getjokes);
