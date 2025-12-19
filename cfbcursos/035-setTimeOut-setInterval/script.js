document.addEventListener("DOMContentLoaded", () => {
	let intervalId;
	let cont = 0;
	const box = document.querySelector(".box");

	function changeColor() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);

		box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	}

	function start() {
		if (!intervalId) {
			intervalId = setInterval(changeColor, 500);
		}
	}

	function stop() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	function startCont() {
		cont++;
		box.textContent = cont;
	}

	let intervalContId = setInterval(startCont, 500);

	setTimeout(() => {
		clearInterval(intervalContId);

		box.style.color = "white";
		box.style.backgroundColor = "red";
	}, 3000);

	const btnStart = document.querySelector("#btnStart");
	const btnStop = document.querySelector("#btnStop");

	btnStart.addEventListener("click", start);
	btnStop.addEventListener("click", stop);
});
