const element = document.querySelector("#myidname") //selecting an ID element from HTML
const elements = document.querySelector(".myidname")

const thing = document.querySelector("h1")

thing.innerHTML = "<p>New content</p>"; //changing content
thing.innerText = "New text content";
inputelement.value = "New value"; //putting a new value in an element

title.innertext = "hello world";

element.style.backgroundColor = "yellow"; //changing css in js

element.classList.add("highlighted");
element.classList.toggle("class"); //adding/removing a class

const element = document.createElement("p"); //creating an element
newParagraph.textContent = "New content";

element.setAttribute("src", "new-image.jpg"); //changing a specific attribute of an element
