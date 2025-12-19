const tagsP = document.getElementsByTagName("p");

for (var i = 0; i < tagsP.length; i++) {
	tagsP[i].style.color = "red";
	document.write(tagsP[i].innerHTML + "<br>");
}

document.write("<br> Pegando um parágrafo específico: <br>");

const tagP = document.getElementsByTagName("p")[2];
document.write(tagP.innerHTML + "<br>");
document.write(tagP.innerHTML + "<br>");

const allElements = Array.from(document.getElementsByTagName("*"));

allElements.forEach((element) => {
	element.style.color = "blue";
});
