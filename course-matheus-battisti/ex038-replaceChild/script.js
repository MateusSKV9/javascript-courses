const title = document.querySelector("#title");
const subtitle = document.querySelector(".subtitle");

const h3 = document.createElement("h3");
h3.textContent = "Subtitulo 3";

const parent = subtitle.parentElement;
parent.replaceChild(h3, subtitle);
parent.replaceChild(subtitle, title);
