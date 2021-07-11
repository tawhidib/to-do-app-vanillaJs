// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// EventListener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions

function addTodo(event) {
	// prevent form from submitting
	event.preventDefault();
	// todo DIV
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	//todo LI

	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	// Check Button

	const completedButton = document.createElement("button");
	completedButton.innerHTML = "<i class='fas fa-check-square'></i>";
	completedButton.classList.add("completed-btn");
	todoDiv.appendChild(completedButton);

	// Trash  Button

	const trashButton = document.createElement("button");
	trashButton.innerHTML = "<i class='fas fa-trash'></i>";
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);

	//Finally Append to list

	todoList.appendChild(todoDiv);

	// Clear todo input value

	todoInput.value = "";
}

function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.classList.add("fall");
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}
	if (item.classList[0] === "completed-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}
