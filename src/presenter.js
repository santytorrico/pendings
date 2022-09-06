

const desc = document.querySelector("#activity");
const form = document.querySelector("#todo-form");
const div = document.querySelector("#todo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const description= desc.value;
  div.innerHTML = "<p>"+ `To do : ${description}` +"<p/>"
});
