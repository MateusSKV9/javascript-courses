const btn = document.querySelector("#btn");

btn.addEventListener("click", disabled);

function disabled() {
	btn.setAttribute("disabled", "disabled");
	btn.setAttribute("class", "button");
}
