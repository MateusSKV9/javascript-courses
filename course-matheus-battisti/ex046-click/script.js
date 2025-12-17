const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
	btn1.style.color = "red";
	this.style.backgroundColor = "white";
	console.log("Clicou");
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("dblclick", () => {
	const p = document.querySelector("p");
	p.classList.toggle("hidden");
});
