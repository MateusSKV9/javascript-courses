window.addEventListener("DOMContentLoaded", () => {
	const box = document.querySelector(".box");

	box.addEventListener("mouseover", () => {
		box.style.backgroundColor = "#0062ff";
		box.style.cursor = "pointer";
	});

	box.addEventListener("mouseout", () => {
		box.style.backgroundColor = "#bb0000";
	});

	function color(element, color) {
		element.style.backgroundColor = color;
	}

	let num = 0;

	box.addEventListener("click", () => {
		color(box, "pink");
		box.innerHTML = `${num++}`;
	});
});
