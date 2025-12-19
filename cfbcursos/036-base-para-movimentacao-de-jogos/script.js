let dx, dy, px, py, speed, obj, intervalId;

document.addEventListener("DOMContentLoaded", () => {
	function start() {
		dx = 0;
		dy = 0;
		px = 0;
		py = 0;
		speed = 1;
		obj = document.querySelector("#box");
		document.addEventListener("keydown", teclaDown);
		document.addEventListener("keyup", teclaUp);
		intervalId = setInterval(enterFrame, 1);
	}

	function teclaDown(event) {
		let tecla = event.keyCode;

		if (tecla == 37) dx = -1;
		if (tecla == 38) dy = -1;
		if (tecla == 39) dx = 1;
		if (tecla == 40) dy = 1;
	}

	function teclaUp(event) {
		let tecla = event.keyCode;

		if (tecla == 37) dx = 0;
		if (tecla == 38) dy = 0;
		if (tecla == 39) dx = 0;
		if (tecla == 40) dy = 0;
	}

	function enterFrame() {
		px += dx * speed;
		py += dy * speed;

		obj.style.left = px + "px";
		obj.style.top = py + "px";
	}

	start();
});
