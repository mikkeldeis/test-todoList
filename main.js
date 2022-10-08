// variables
let taskList = document.querySelector("#taskList");
let form = document.querySelector("#newTask");
let input = document.querySelector("#taskInput");
let currentlyEdited = null;
let readonly = true;
// Helper functions
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let textInp = input.value;
    console.log(textInp);
    if (textInp === "") return;
    let content = document.createElement("div")
    let task = document.createElement("div")
    let txt = document.createElement("input");
    let delButton = document.createElement("button");
    let edButton = document.createElement("button");

    content.classList.add("content");
    task.classList.add("task");
    txt.classList.add("text");
    edButton.classList.add("edit")
    delButton.classList.add("delete");

    txt.value = textInp;
    txt.type = "text";
    txt.setAttribute("readonly", "readonly")
    delButton.innerHTML = "Delete"
    edButton.innerHTML = "Edit"

    taskList.appendChild(content)
    content.appendChild(task);
    content.appendChild(delButton);
    content.appendChild(edButton);
    task.appendChild(txt);

    delButton.onclick = function () {
        taskList.removeChild(content);
    }
    edButton.onclick = function (e) {
        if (striked === true) { return alert("Can't edit a done task"); }
        if (readonly === true) {
            currentlyEdited = e.currentTarget.parentNode;
            currentlyEdited.classList.add("glow");
            let text = currentlyEdited.querySelector(".text")
            text.removeAttribute("readonly")
            text.focus();
            readonly = false;
            return;
        }
        if (currentlyEdited === e.currentTarget.parentNode && readonly === false) {
            currentlyEdited.classList.remove("glow");
            let text = currentlyEdited.querySelector(".text")
            text.setAttribute("readonly", "readonly")
            readonly = true;
            return;
        }
        else if (readonly === false) {
            currentlyEdited.classList.remove("glow");
            let text = currentlyEdited.querySelector(".text")
            text.setAttribute("readonly", "readonly")

            currentlyEdited = e.currentTarget.parentNode;
            currentlyEdited.classList.add("glow");
            text = currentlyEdited.querySelector(".text")
            text.removeAttribute("readonly")
            text.focus();
            readonly = false;
        }
    }

    let striked = false;
    task.addEventListener("dblclick", function (e) {
        if (readonly === false) return alert("Please finish editing task before marking as done!");
        if (striked === false) {
            txt.classList.add("strike");
            striked = true;
        }
        else {
            txt.classList = "text"
            striked = false;
        }
    }
    )
    input.value = "";
}
)

