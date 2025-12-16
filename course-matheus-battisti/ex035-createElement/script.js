// crateElement
const ul = document.createElement("ul");

for (let i = 1; i < 10; i++) {
	let li = document.createElement("li");
	li.textContent = `item-${i}`;
	ul.appendChild(li);
}

document.body.appendChild(ul);
