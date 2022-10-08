// variables
let taskList = document.querySelector("#taskList");
let form = document.querySelector("#newTask");
let input = document.querySelector("#taskInput");
let striked = false;
// Helper functions
form.addEventListener("submit", function(e){
    e.preventDefault();
    let textInp = input.value;
    console.log(textInp);
    if (textInp === "") return;
    let content = document.createElement("div")
    let task = document.createElement("div")
    let txt = document.createElement("input");
    let delButton = document.createElement("button");
    let edButton = document.createElement("button");

    content.classList.add("content")
    task.classList.add("task");
    txt.classList.add("text");
    delButton.classList.add("delete");
    edButton.classList.add("edit")

    txt.value = textInp;
    txt.type = "text"
    txt.setAttribute("readonly","readonly")
    delButton.innerHTML = "Delete"
    edButton.innerHTML = "Edit"

    taskList.appendChild(content);
    content.appendChild(task);
    content.appendChild(delButton);
    content.appendChild(edButton);
    task.appendChild(txt);
    input.value = "";

    delButton.onclick = function () {
        taskList.removeChild(content);
    }
    edButton.onclick = function() {
        txt.removeAttribute("readonly","readonly");
        task.style.backgroundColor = black;
    }

}
)



taskList.addEventListener("dblclick", function(e){
    if (striked === false ) {
        task.done;
        e.toElement.classList = "strike"
        striked = true;
    }
    else {
        e.toElement.classList = "text"
        striked = false;
    }
}
)
