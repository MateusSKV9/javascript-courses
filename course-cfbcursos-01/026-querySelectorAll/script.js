const ps = document.querySelectorAll("p");

ps[0].style.color = "orange";

ps.forEach((element) => {
	element.style.fontFamily = "monospace";
	element.style.fontSize = "15px";
});

const destaque = document.querySelectorAll("h1, h2, h3");

destaque.forEach((element) => {
	element.style.fontFamily = "Times New Roman";
});

const h1 = document.querySelector("#titulo");

h1.style.fontSize = "50px";

const quadroP = document.querySelectorAll("div.quadro > p");

quadroP.forEach((element) => {
	element.style.color = "white";
});

const allElements = document.querySelectorAll("*");

allElements.forEach((element) => {
	element.style.margin = "20px";
});
