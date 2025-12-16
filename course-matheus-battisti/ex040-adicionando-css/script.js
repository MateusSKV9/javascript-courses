const btn = document.querySelector("#btn");

btn.style.backgroundColor = "red";
btn.style.border = "none";
btn.style.color = "white";

btn.addEventListener("click", () => {
	btn.classList.add("button");
});
