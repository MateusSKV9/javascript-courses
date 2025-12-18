const btnAddTask = document.querySelector("#btnAddTask");
const template = document.querySelector("#task-template");
const containerTasks = document.querySelector("#container-tasks");

btnAddTask.addEventListener("click", (e) => {
	e.preventDefault();
	addTask();
});

function addTask() {
	const inputTask = document.querySelector("#iTaskTitle");
	const task = inputTask.value;

	if (!task.trim()) {
		alert("❌ [ERRO]: Nome inválido");
		inputTask.value = "";
		inputTask.focus();
		return;
	}

	const clone = template.content.cloneNode(true);
	clone.querySelector("span").textContent = task;

	containerTasks.appendChild(clone);
	inputTask.value = "";
}

containerTasks.addEventListener("click", handleTaskActions);

function handleTaskActions(event) {
	if (event.target.closest(".btnDelete")) {
		handleDeleteTask(event);
	}

	if (event.target.closest(".btnCheck")) {
		handleCompleteTask(event);
	}
}

function handleDeleteTask(event) {
	const task = event.target.closest(".task");
	task.remove();
}

function handleCompleteTask(event) {
	const task = event.target.closest(".task");
	task.classList.toggle("completed");
}
