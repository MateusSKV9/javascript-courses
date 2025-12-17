document.addEventListener("keydown", (event) => {
	console.log("Apertou " + event.key);
});

document.addEventListener("keyup", (event) => {
	console.log("Soltou " + event.key);
});
