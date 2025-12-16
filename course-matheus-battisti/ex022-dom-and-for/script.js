const list = ["Maçã", "Laranja", "Pera", "Jaca"];

const fragment = document.createDocumentFragment();

for (var i = 0; i < list.length; i++) {
	let li = document.createElement("li");
	li.setAttribute("id", `fruit-${list[i].toLowerCase()}`);
	li.textContent = list[i];
	fragment.appendChild(li);
}

const ul = document.querySelector("#lista");
ul.appendChild(fragment);
