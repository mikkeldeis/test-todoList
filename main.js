// variables
let tasks = document.querySelector("#taskList");
let form = document.querySelector("#newTask");
let input = document.querySelector("#taskInput");

// Helper functions
let addInput = function(input) {


}
form.addEventListener("submit", addInput())

let addButtons = function() {
    let delButton = document.createElement("button");
    delButton = delButton.classList.add("buttons");
    delButton.innerText("Delete")
    tasks.appendChild(delButton);
}
addButtons;


let striked = false;
content.addEventListener("dblclick", function(e){
    if (striked === false ) {
        e.toElement.classList = "strike"
        striked = true;
    }
    else {
        e.toElement.classList = "text"
        striked = false;
    }
}
)
