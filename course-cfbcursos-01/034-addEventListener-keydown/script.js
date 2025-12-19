let px = 0;
let py = 0;
const box = document.querySelector(".box");

function move(event) {
	const tecla = event.keyCode;

	if (tecla == 37) {
		px -= 10;
		box.style.left = px + "px";
	} else if (tecla == 38) {
		py -= 10;
		box.style.top = py + "px";
	} else if (tecla == 39) {
		px += 10;
		box.style.left = px + "px";
	} else if (tecla == 40) {
		py += 10;
		box.style.top = py + "px";
	} else if (tecla == 13) {
		alert("Evento keydown removido");
		box.style.backgroundColor = "transparent";
		document.removeEventListener("keydown", move);
	}
}

document.addEventListener("keydown", move);

box.addEventListener("click", () => {
	box.style.backgroundColor = "red";
	document.addEventListener("keydown", move);
});
