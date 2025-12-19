function changeColor(element, color) {
	element.style.backgroundColor = color;
}

function changeAllColor(elements) {
	elements.forEach((element) => {
		element.style.backgroundColor = "black";
		element.style.transform = "scale(0.5)";
		element.style.borderRadius = "50%";
		element.style.transition = "all .2s ease";
	});
}

function changePosition(element) {
	element.style.position = "absolute";

	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	element.style.left = `${Math.random() * windowWidth}px`;
	element.style.top = `${Math.random() * windowHeight}px`;
}

function showHour(element) {
	const today = new Date();
	let hour = today.getHours();
	let minutes = today.getMinutes();

	element.innerHTML = `${hour < 18 ? "Bom dia!" : "Boa noite"} <br>`;
	element.innerHTML += element.innerHTML = `${hour}:${minutes}`;
}
