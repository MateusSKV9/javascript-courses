function relogio() {
	const currentDate = new Date();

	let hour = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	const box = document.querySelector("#time");

	let formattedHour = hour.toString().padStart(2, "0");
	let formattedMinutes = minutes.toString().padStart(2, "0");
	let formattedSeconds = seconds.toString().padStart(2, "0");

	box.textContent = `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
}

relogio();
let intervalId = setInterval(relogio, 1000);
