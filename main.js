let tasks = document.querySelector("#tasks");
let form = document.querySelector("#new-todo-form");
let input = document.querySelector("#new-todo-input");

tasks.addEventListener
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
