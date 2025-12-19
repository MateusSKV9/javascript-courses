const p = document.getElementById("text");
const inputText = document.getElementById("inputText");
const box = document.getElementById("box");

document.write(`<br><br> Texto do parágrago: ${p.innerHTML} <br>`);
document.write(`Texto do input: ${inputText.value}`);
document.write(`Texto da div: ${box.innerHTML}`);

const btnUpdate = document.getElementById("btnUpdate");
btnUpdate.addEventListener("click", () => {
	const radioP = document.getElementById("radioP");
	const radioInput = document.getElementById("radioInput");
	let selected;

	if (radioP.checked) {
		selected = p;
	} else if (radioInput.checked) {
		selected = inputText;
	} else {
		selected = box;
	}

	let valuePrompt = prompt(`Digite o conteúdo: `);

	if (valuePrompt) {
		if (selected == p || selected == box) {
			selected.innerHTML = valuePrompt;
		} else {
			selected.value = valuePrompt;
		}
	}
});
