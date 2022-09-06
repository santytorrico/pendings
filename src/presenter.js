

const desc = document.querySelector("#activity");
const form = document.querySelector("#todo-form");
const div = document.querySelector("#todo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const description= desc.value;
  required(description);
  len(description);
  div.innerHTML = "<p>"+ `To do : ${description}` +"<p/>"
});

function required(inputtx) 
   {
     if (inputtx.length == 0)
      { 
         alert("You didn't put anything");  	
         return false; 
      }  	
      return true; 
    } 

    function len(inputtx) 
    {
      if (inputtx.length <= 50)
       { 
          alert("You didn't put anything");  	
          return false; 
       }  	
       return true; 
     } 
  