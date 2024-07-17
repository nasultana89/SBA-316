// Cache at least one element using selectElementById.
const addButton = document.getElementById("add-item-button")
// Cache at least one element using querySelector or querySelectorAll.
const listItems = document.querySelectorAll(".item")
// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
const lastChild = document.querySelectorAll(".item").lastChild
listItems.forEach(function () {

})
// Create at least one element using createElement.
// Use appendChild and/or prepend to add new elements to the DOM.
const addListItems = document.createElement("li");
addListItems.innerText = "milk";
document.body.appendChild(addListItems);

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 

// Create a document fragment:
// const dFrag = document.createDocumentFragment();
// for(let x in listItems){
//     const li = document.createElement('li');
//     li.textContent = listItems[x];
//     dFrag.appendChild(li);
// }
// add fragment to a list:
// document.getElementById("item-list").appendChild(dFrag);

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
const mainTitle = document.getElementById("main-title")
mainTitle.addEventListener("mouseover", titleNameChange);
function titleNameChange() {
    mainTitle.textContent = "HelloWorld"
}
// Register at least two different event listeners and create the associated event handler functions.
// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
mainTitle.addEventListener("mouseover", function () {
    mainTitle.style.color = "black";
});
mainTitle.addEventListener("mouseout", function () {
    mainTitle.style.color = "brown";
});
// Modify at least one attribute of an element in response to user interaction.
const description = document.querySelector("#description");


description.setAttribute("title", "This is a description");

// Include at least one form and/or input with DOM event-based validation 
const exampleForm = document.getElementById("example-form");
const nameField = document.getElementById("name-field");
const deleted-items = document.getElementById("deleted-items");

exampleForm.addEventListener("delete", function (event) {

    event.preventDefault();
})
if (nameField.value === "") {

    alert("Input field is required!");
} else {

    deleted - items.textContent = `You entered: ${nameField.value}`;

    deleted - items.style.color = "blue";
    nameField.value = "";
}
// Display an alert with window dimensions
window.alert(`Window dimensions: ${window.innerWidth}x${window.innerHeight}`);

// Redirect to a new URL
window.location.href = "https://www.example.com";

// Navigate back in history
window.history.back();

// Log the user-agent string
console.log(`User-Agent: ${navigator.userAgent}`);

// Get the user's current geographic position
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
});

// Display the screen width and height
console.log(`Screen width: ${screen.width}, Screen height: ${screen.height}`);