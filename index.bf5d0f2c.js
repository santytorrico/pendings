var t=document.querySelector("#activity"),e=document.querySelector("#todo-form"),n=document.querySelector("#todo-div");e.addEventListener("submit",(function(e){e.preventDefault();var o=t.value;!function(t){if(0==t.length)return alert("You didn't put anything"),!1}(o),function(t){if(t.length<=50)return alert("You didn't put anything"),!1}(o),n.innerHTML="<p>"+"To do : ".concat(o)+"<p/>"}));
//# sourceMappingURL=index.bf5d0f2c.js.map
