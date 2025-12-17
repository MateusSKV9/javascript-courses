const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", () => {
	h1.style.backgroundColor = "yellow";
});

const h2 = document.querySelector("h2");
const p = document.querySelector("p");

h2.addEventListener("mouseover", () => {
	p.classList.add("hidden");
});

h2.addEventListener("mouseout", () => {
	p.classList.remove("hidden");
});
