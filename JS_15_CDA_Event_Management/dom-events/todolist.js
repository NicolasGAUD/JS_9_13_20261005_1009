const form = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(taskInput.value);   // ce qui est tapé dans le champ
    if (taskInput.value !== "") {
        const listElement = document.createElement("li");
        listElement.textContent = taskInput.value;
        taskList.appendChild(listElement);
        taskInput.value = "";
    }
});
taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});