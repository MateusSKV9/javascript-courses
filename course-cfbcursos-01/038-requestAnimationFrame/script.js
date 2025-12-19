document.addEventListener("DOMContentLoaded", () => {
	let speed, player, anima, dx, dy, px, py;

	function start() {
		speed = 5;
		dx = 1;
		dy = 0;
		px = 0;
		py = 0;
		game();
	}

	function game() {
		px += dx * speed;
		py += dy * speed;
		player.style.left = px + "px";
		player.style.top = py + "px";

		if (px > 800) dx = -1;
		else if (px <= 0) dx = 1;

		anima = requestAnimationFrame(game);
		changeColor();
	}

	function changeColor() {
		if (anima) player.style.backgroundColor = "green";
		else player.style.backgroundColor = "red";
	}

	player = document.querySelector("#player");
	player.addEventListener("click", () => {
		if (!anima) {
			game();
		} else {
			cancelAnimationFrame(anima);
			anima = null;
		}
		changeColor();
	});

	start();

	const btnStart = document.querySelector("#btnStart");
	btnStart.addEventListener("click", () => {
		if (!anima) game();
	});

	const btnStop = document.querySelector("#btnStop");
	btnStop.addEventListener("click", () => {
		if (anima) {
			cancelAnimationFrame(anima);
			anima = null;
		}
		changeColor();
	});
});
